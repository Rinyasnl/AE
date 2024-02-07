// src/pages/TodoPage.js
import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

function TodoPage() {
  const { id } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const todoName = queryParams.get('name');

  return (
    <div className="container">
      <h1>Todo Details</h1>
      <p>Todo ID: {id}</p>
      {todoName && <p>Todo Name: {todoName}</p>}
    </div>
  );
}

export default TodoPage;
