import React, { useState, useEffect } from "react";

const TrafficLight = () => {
  const RED_TIME = 4000;
  const YELLOW_TIME = 500;
  const GREEN_TIME = 3000;

  const [light, setLight] = useState("red");

  useEffect(() => {
    let timer;

    switch (light) {
      case "red":
        timer = setTimeout(() => setLight("yellow"), RED_TIME);
        break;

      case "yellow":
        timer = setTimeout(() => setLight("green"), YELLOW_TIME);
        break;

      case "green":
        timer = setTimeout(() => setLight("yellow2"), GREEN_TIME);
        break;

      case "yellow2":
        timer = setTimeout(() => setLight("red"), YELLOW_TIME);
        break;

      default:
        break;
    }

    return () => clearTimeout(timer);
  }, [light]);

  return (
    <div style={styles.wrapper}>
      <div
        style={{
          ...styles.light,
          background: light === "red" ? "red" : "gray",
        }}
      />
      <div
        style={{
          ...styles.light,
          background:
            light === "yellow" || light === "yellow2" ? "yellow" : "gray",
        }}
      />
      <div
        style={{
          ...styles.light,
          background: light === "green" ? "green" : "gray",
        }}
      />
    </div>
  );
};

const styles = {
  wrapper: {
    width: "100px",
    padding: "10px",
    background: "#111",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    alignItems: "center",
    margin: "80px auto",
  },
  light: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    background: "gray",
    transition: "background 0.3s",
  },
};

export default TrafficLight;
