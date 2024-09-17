import React from 'react';

const YellowLight = ({ active }) => {
  return (
    <div
      className="light"
      style={{ backgroundColor: active ? 'yellow' : 'gray' }}
    >
      Yellow
    </div>
  );
};

export default YellowLight;
