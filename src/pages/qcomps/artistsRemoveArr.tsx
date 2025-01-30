import { useState } from 'react';

let initialArtists = [
  { id: 0, name: 'Marta Colvin Andrade' },
  { id: 1, name: 'Lamidi Olonade Fakeye'},
  { id: 2, name: 'Louise Nevelson'},
];

/**
 * The component renders a list of artists with a delete button for each artist. 
 * When the delete button is pressed, the item should be deleted. 
 * However, this does not happen. Identify and fix the bugs.
 */

export default function List() {
  const [artists, setArtists] = useState(
    initialArtists
  );

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>
            {artist.name}{' '}
            <button onClick={() => {
              // artists.splice(artist.id, 1) Old buggy code that mutated the array
              // New approach creates a new array instead of mutating, 
              // as well as calls setArtists to update state and re-render UI
              setArtists(artists.filter(a => a.id != artist.id))
            }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
