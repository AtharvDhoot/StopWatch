import './App.css';
import React, { useState } from "react";
import Timer from './Components/Timer/Timer';
import ControlButtons from './Components/ControlButtons/ControlButtons';


function App() {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);
  
  React.useEffect(() => {
    let interval = null;
  
    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);
  
  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };
  
  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };
  
  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };

  return (
    <div class="bg-[#222242] min-h-screen py-40">
      <div class="bg-[#151538] rounded-full w-64 h-64 mx-auto flex items-center justify-center text-center text-white font-medium text-2xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] animate-breathe-wave border-4 border-white"><Timer time = {time} ></Timer></div>
      <div class="text-center my-10 py-20">
        <ControlButtons
          active={isActive}
          isPaused={isPaused}
          handleStart={handleStart}
          handlePauseResume={handlePauseResume}
          handleReset={handleReset}
        />
      </div>
    </div>
  );
}

export default App;
