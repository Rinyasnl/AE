// src/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="container">
      <h1>Todo List</h1>
      <ul>
        <li><Link to="/todos/1?name=Todo%201">Todo 1</Link></li>
        <li><Link to="/todos/2?name=Todo%202">Todo 2</Link></li>
        <li><Link to="/todos/3?name=Todo%203">Todo 3</Link></li>
      </ul>
    </div>
  );
}

export default HomePage;
