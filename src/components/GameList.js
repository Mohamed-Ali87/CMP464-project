import React from 'react';

const GameList = ({ games }) => {
  return (
    <div>
      <h2>Rate Video Games</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {games.map((game) => (
            <tr key={game.id}>
              <td>{game.title}</td>
              <td>{game.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GameList;
