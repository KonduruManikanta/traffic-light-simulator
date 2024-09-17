import React from "react";

const RedLight = ({ active }) => {
  return (
    <div className="light" style={{ backgroundColor: active ? "red" : "gray" }}>
      Red
    </div>
  );
};

export default RedLight;
