import React from 'react';

function Card(props) {
  return (
    <div
      style={{
        backgroundColor: ` ${props.backgroundColor}`,
        display: 'block',
        textAlign: 'center',
        height: '500px',
        width: '306.6666px',
      }}
    >
      I'm a card
    </div>
  );
}

export default Card;
