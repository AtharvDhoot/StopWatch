import React from "react";
import "./ControlButtons.css";
  
export default function ControlButtons(props) {
  const StartButton = (
    <div className="bg-transparent border-2 border-opacity-70 border-white text-white px-4 py-2 rounded-full mx-auto mb-16 w-64" onClick={props.handleStart}>
      Start
    </div>
  );
  const ActiveButtons = (
    <div className="btn-grp">
      <button className="bg-transparent border-2 border-opacity-70 border-white text-white px-4 py-2 rounded-full mx-auto ml-16 mb-16 w-64" 
           onClick={props.handleReset}>
        Reset
      </button>
      <button className="bg-transparent border-2 border-opacity-70 border-white text-white px-4 py-2 rounded-full mx-auto ml-16 mb-16 w-64" 
           onClick={props.handlePauseResume}>
        {props.isPaused ? "Resume" : "Pause"}
      </button>
    </div>
  );
  
  return (
    <div>
      <div>{props.active ? ActiveButtons : StartButton}</div>
    </div>
  );
}