import React from 'react';
import CardContent from './CardContent';

function Card(props) {
  return (
    <div
      style={{
        backgroundColor: ` ${props.backgroundColor}`,
        display: 'flex',
        textAlign: 'center',
        height: '500px',
        width: '306.6666px',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CardContent icon={props.icon} />
    </div>
  );
}

export default Card;
