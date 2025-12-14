import React, { useEffect, useState } from "react";

const StopWatchMine = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      // update time every 1 second
      timer = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
    // cleanup when component unmounts or stops
    return () => clearInterval(timer);
  }, [isRunning]);

  const hanldeStart = () => {
    setIsRunning(true);
  };
  const hanldeStop = () => {
    setIsRunning(false);
  };
  const hanldeReset = () => {
    setTime(0);
    setIsRunning(false);
  };

  const formattedTime = () => {
    const mins = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(mins).padStart("2", 0)}:${String(seconds).padStart(
      "2",
      0
    )}`;
  };

  return (
    <div>
      <h1>⌚Stop Watch</h1>
      <p>{formattedTime()}</p>
      <button onClick={() => hanldeStart()}>Start</button>
      <button onClick={() => hanldeStop()}>Stop</button>
      <button onClick={() => hanldeReset()}>Reset</button>
    </div>
  );
};

export default StopWatchMine;
