$(function(){
    let url = 'https://deckofcardsapi.com/api/deck';

//request a single card
    $.getJSON(`${url}/new/draw/`, function(data){
        let {suit, value} = data.cards[0];
        console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
    });

//Making request to same API to ger one more card.
    $.getJSON(`${url}/new/draw/`, function(data){
        let firstCard = data.cards[0];
        let deckId = data.deck_id;
        $.getJSON(`${url}/${deckId}/draw/`, function(data){
            let secondCard = data.cards[0];
            [firstCard, secondCard].forEach(function(card) {
                console.log(
                  `${card.value.toLowerCase()} of ${card.suit.toLowerCase()}`
                );
            });
         });

    });

//an HTML page that lets you draw cards from a deck
    let deckId = null;
    let $btn = $('button');
    let $cardId = $('#card-id');

    $.getJSON(`${url}/new/shuffle/`, function(data){
        deckId = data.deck_id;
        $btn.show();
    });
    $btn.on('click', function() {
        $.getJSON(`${url}/${deckId}/draw/`, function(data) {
        let cardSrc = data.cards[0].image;
        let angle = Math.random() * 90-45;
        let randomX = Math.random() * 40 - 20;
        let randomY = Math.random() * 40 - 20;
        $cardId.append(
            $('<img>', {
              src: cardSrc,
              css: {
                transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`
              }
            
    })
        );
        if (data.remaining === 0) $btn.remove();
    }); 
});
});