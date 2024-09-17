import React from "react";
import { useTrafficLight } from "../context/TrafficLightContext";

const EmergencyButton = () => {
  const { dispatch } = useTrafficLight();

  const handleOverride = () => {
    dispatch({ type: "EMERGENCY_OVERRIDE" });
  };

  return <button onClick={handleOverride}>Emergency Override</button>;
};

export default EmergencyButton;
