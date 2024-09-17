import React from 'react';
import { useTrafficLight } from '../context/TrafficLightContext';

const PedestrianButton = () => {
  const { dispatch } = useTrafficLight();

  const handleRequest = () => {
    dispatch({ type: 'REQUEST_CROSSING' });
  };

  return <button onClick={handleRequest}>Pedestrian Crossing</button>;
};

export default PedestrianButton;
