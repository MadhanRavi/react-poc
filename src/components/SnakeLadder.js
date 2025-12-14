import React from "react";

export default function SnakeLadder() {
  const BOX_COUNT = 100;
  const SIZE = 10; // 10x10 board

  const generateBoard = () => {
    const board = [];

    for (let row = 0; row < SIZE; row++) {
      let start = BOX_COUNT - row * SIZE;
      let end = start - (SIZE - 1);

      let currentRow = [];
      for (let num = start; num >= end; num--) {
        currentRow.push(num);
      }

      // Reverse every alternate row (Serpentine pattern)
      if (row % 2 !== 0) currentRow.reverse();

      board.push(currentRow);
    }

    return board.flat(); // flatten 2D rows into 1D array
  };

  const board = generateBoard();

  const styles = {
    board: {
      width: "520px",
      height: "520px",
      border: "3px solid black",
      display: "flex",
      flexWrap: "wrap",
      margin: "20px auto",
    },
    box: {
      width: "50px",
      height: "50px",
      border: "1px solid #333",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: "bold",
      fontSize: "16px",
    },
    odd: { background: "#ffeb3b" },
    even: { background: "#f5f5f5" },
  };

  return (
    <div style={styles.board}>
      {board.map((num) => (
        <div
          key={num}
          style={{
            ...styles.box,
            ...(num % 2 === 0 ? styles.even : styles.odd),
          }}>
          {num}
        </div>
      ))}
    </div>
  );
}
