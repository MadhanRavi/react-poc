import React, { useState, useEffect } from "react";

export default function Stopwatch() {
  const [time, setTime] = useState(0); // time in seconds
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

  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  // format time into mm:ss
  const formatTime = () => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>⏱️ Simple Stopwatch</h1>
      <h2>{formatTime()}</h2>
      <div style={{ marginTop: "20px" }}>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}
