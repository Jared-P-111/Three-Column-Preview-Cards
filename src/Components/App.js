import React, { useState } from 'react';
import Card from './Card';
import '../app.css';

const App = () => {
  const [cardDataState, setCardDataState] = useState([
    {
      id: 1,
      color: '#E28625',
      icon: 'icon1',
    },
    {
      id: 2,
      color: '#006971',
      icon: 'icon2',
    },
    {
      id: 3,
      color: '#004140',
      icon: 'icon3',
    },
  ]);

  const renderCards = cardDataState.map((card, index) => {
    return <Card backgroundColor={card.color} key={card.id} icon={card.icon} />;
  });

  return (
    <div className="page-container">
      <div className="card-container">{renderCards}</div>
    </div>
  );
};

export default App;
