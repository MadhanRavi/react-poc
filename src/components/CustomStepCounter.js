import { useState } from "react";

const CustomStepCounter = () => {
  const [counter, setCounter] = useState(0);
  const [step, setStep] = useState(1);

  const handleIncrement = () => {
    setCounter((prev) => {
      const newVal = prev + step;
      if (newVal > 10) return prev;
      return newVal;
    });
  };

  const handleDecrement = () => {
    setCounter((prev) => {
      const newVal = prev - step;
      if (newVal < 0) return prev;
      return newVal;
    });
  };

  return (
    <div>
      <input
        type="number"
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
      />

      <p>{counter}</p>

      <button onClick={() => handleIncrement()}>Increment++</button>
      <button onClick={() => handleDecrement()}>Decrement--</button>
    </div>
  );
};

export default CustomStepCounter;
