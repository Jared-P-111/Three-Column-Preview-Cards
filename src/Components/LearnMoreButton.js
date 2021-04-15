import React from 'react';

const LearnMoreButton = (props) => {
  const mouseOver = () => {
    return console.log('dammit!');
  };
  return (
    <button style={{ color: `${props.cardColor}` }} onMouseOver={mouseOver}>
      Learn More
    </button>
  );
};

export default LearnMoreButton;
