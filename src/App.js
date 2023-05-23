import React, { useState } from 'react';
import GameList from './components/GameList';

const App = () => {
  const [games, setGames] = useState([]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const rating = parseInt(form.rating.value, 10);
    const newGame = {
      id: Date.now(),
      title,
      rating,
    };
    setGames([...games, newGame]);
    form.reset();
  };

  return (
    <div className="App">
      <h1>Video Game Ratings</h1>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" required />
        <label htmlFor="rating">Rating:</label>
        <input type="number" id="rating" name="rating" min="0" max="5" required />
        <button type="submit">Add Game</button>
      </form>
      <GameList games={games} />
    </div>
  );
};

export default App;

