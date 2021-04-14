import React, { useState } from 'react';
import Card from './Card';
import '../app.css';

const App = () => {
  const [cardDataState, setCardDataState] = useState([
    {
      id: 1,
      color: '#E28625',
    },
    {
      id: 2,
      color: '#006971',
    },
    {
      id: 3,
      color: '#004140',
    },
  ]);

  const renderCards = cardDataState.map((card, index) => (
    <Card backgroundColor={card.color} key={card.id} />
  ));

  return (
    <div className="page-container">
      <div className="card-container">{renderCards}</div>
    </div>
  );
};

export default App;
