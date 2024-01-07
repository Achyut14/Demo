const MAX_NAME_LENGTH_TO_SHOW = 6;


function Person({age, hobbies, name}) {
    const toVote= age >=18
    ? "Go vote!"
    : "Can't vote";

    const hobbieLIs = hobbies.map(hobby => <li>{hobby}</li>);

    return (
        <div>
          <p>Learn some information about this person:</p>
          <ul>
            <li>Name: {name.slice(0, MAX_NAME_LENGTH_TO_SHOW)}</li>
            <li>Age: {age}</li>
            <ul>
              Hobbies:
              {hobbieLIs}
            </ul>
          </ul>
          <h3>{toVote}</h3>
        </div>
      );
}