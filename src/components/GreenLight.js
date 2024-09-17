import React from "react";

const GreenLight = ({ active }) => {
  return (
    <div
      className="light"
      style={{ backgroundColor: active ? "green" : "gray" }}
    >
      Green
    </div>
  );
};

export default GreenLight;
