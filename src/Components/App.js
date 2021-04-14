import React from 'react';
import Card from './Card';
import '../app.css';

function App() {
  return (
    <div className="page-container">
      <div className="card-container">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
