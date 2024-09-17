import React, { createContext, useReducer, useContext } from "react";

// Initial state
const initialState = {
  currentLight: "green", // Initial traffic light is green
  pedestrianRequested: false, // Pedestrian request status
  emergencyOverride: false, // Emergency vehicle override
  timer: 10, // Countdown timer for the current light
};

// Action types
const CHANGE_LIGHT = "CHANGE_LIGHT";
const REQUEST_CROSSING = "REQUEST_CROSSING";
const EMERGENCY_OVERRIDE = "EMERGENCY_OVERRIDE";
const RESET_TIMER = "RESET_TIMER";

// Reducer function
const trafficLightReducer = (state, action) => {
  switch (action.type) {
    case CHANGE_LIGHT:
      return {
        ...state,
        currentLight: action.payload,
        timer: action.timer,
      };
    case REQUEST_CROSSING:
      return {
        ...state,
        pedestrianRequested: true,
      };
    case EMERGENCY_OVERRIDE:
      return {
        ...state,
        emergencyOverride: true,
        currentLight: "red",
        timer: 5,
      };
    case RESET_TIMER:
      return {
        ...state,
        timer: action.payload,
      };
    default:
      return state;
  }
};

// Create Context
const TrafficLightContext = createContext();

// TrafficLightProvider to wrap the app
export const TrafficLightProvider = ({ children }) => {
  const [state, dispatch] = useReducer(trafficLightReducer, initialState);

  return (
    <TrafficLightContext.Provider value={{ state, dispatch }}>
      {children}
    </TrafficLightContext.Provider>
  );
};

// Custom hook to use the TrafficLightContext
export const useTrafficLight = () => useContext(TrafficLightContext);
