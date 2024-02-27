import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import './Deck.css'


const API_BASE_URL = "https://deckofcardsapi.com/api/deck";

const Deck = () => {
  const [deck, setDeck] = useState(null);
  const [drawn, setDrawn] = useState([]);
  const [isShuffling, setIsShuffling] = useState(false);

  // Loading the deck from the API on mount
  useEffect(() => {
    (async () => {
      const d = await axios.get(`${API_BASE_URL}/new/shuffle/`);
      setDeck(d.data);
    })();
  }, []);

  // Draw card
  const draw = async () => {
    try {
      const drawRes = await axios.get(`${API_BASE_URL}/${deck.deck_id}/draw/`);
      if (drawRes.data.remaining === 0) throw new Error("Deck empty!");

      const card = drawRes.data.cards[0];
      setDrawn(d => [...d, {
        id: card.code,
        name: card.suit + " " + card.value,
        image: card.image,
      }]);
    } catch (err) {
      alert(err);
    }
  };

  // Shuffle deck
  const startShuffling = async () => {
    setIsShuffling(true);
    try {
      await axios.get(`${API_BASE_URL}/${deck.deck_id}/shuffle/`);
      setDrawn([]);
    } catch (err) {
      alert(err);
    } finally {
      setIsShuffling(false);
    }
  };

  return (
    <main className="Deck">
      {deck && (
        <button
          className="Deck-gimme"
          onClick={draw}
          disabled={isShuffling}>
          DRAW
        </button>
      )}
      {deck && (
        <button
          className="Deck-gimme"
          onClick={startShuffling}
          disabled={isShuffling}>
          SHUFFLE DECK
        </button>
      )}

      <div className="Deck-cardarea">
        {drawn.map(c => (
          <Card key={c.id} name={c.name} image={c.image} />
        ))}
      </div>
    </main>
  );
};

export default Deck;
