function App() {
    return (
      <div>
        <Person
          name="James"
          age={68}
          hobbies={["bowling", "watching tv", "Sleeping"]}
        />
        <Person name="Raj" age={34} hobbies={["painting", "gambling"]} />
        <Person
          name="Achyut"
          age={20}
          hobbies={["Scoocer", "Videogame"]}
        />
        <Person
          name="Gagan"
          age={17}
          hobbies={["reading", "Gym", "eating vegetables"]}
        />
      </div>
    );
  }