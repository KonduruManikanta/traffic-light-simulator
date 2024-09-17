import React from "react";
import TrafficLight from "./components/TrafficLight";
import { TrafficLightProvider } from "./context/TrafficLightContext";
import "./App.css";

function App() {
  return (
    <TrafficLightProvider>
      <div className="App">
        <TrafficLight />
      </div>
    </TrafficLightProvider>
  );
}

export default App;
