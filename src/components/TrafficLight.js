import React, { useEffect } from "react";
import GreenLight from "./GreenLight";
import YellowLight from "./YellowLight";
import RedLight from "./RedLight";
import PedestrianButton from "./PedestrianButton";
import EmergencyButton from "./EmergencyButton";
import { useTrafficLight } from "../context/TrafficLightContext";

const TrafficLight = () => {
  const { state, dispatch } = useTrafficLight();

  // Timer and light management
  useEffect(() => {
    const interval = setInterval(() => {
      if (state.timer > 0) {
        dispatch({ type: "RESET_TIMER", payload: state.timer - 1 });
      } else {
        // Change light sequence: Green -> Yellow -> Red -> Green
        if (state.currentLight === "green") {
          dispatch({ type: "CHANGE_LIGHT", payload: "yellow", timer: 3 });
        } else if (state.currentLight === "yellow") {
          dispatch({ type: "CHANGE_LIGHT", payload: "red", timer: 7 });
        } else if (state.currentLight === "red") {
          dispatch({ type: "CHANGE_LIGHT", payload: "green", timer: 10 });
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [state.timer, state.currentLight, dispatch]);

  return (
    <div className="traffic-light">
      <h1>Traffic Light Simulator</h1>
      <GreenLight active={state.currentLight === "green"} />
      <YellowLight active={state.currentLight === "yellow"} />
      <RedLight active={state.currentLight === "red"} />
      <PedestrianButton />
      <EmergencyButton />
      <div>Timer: {state.timer} seconds</div>
    </div>
  );
};

export default TrafficLight;
