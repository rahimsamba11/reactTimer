import "./styles.css";
import { useState, useEffect } from "react";
export default function App() {
  const [i, setI] = useState(0);
  const [started, setStarted] = useState(false);
  const [paused, setPaused] = useState(true);

  useEffect(() => {
    if (i > 0 && started) {
      setTimeout(() => {
        setI(i + 1);
      }, 1000);
    }

    if (!started) {
      setI(0);
    }
    if (i > 0 && started) {
    }
  }, [i]);
  function startHandle() {
    setI(i + 1);
    setStarted(true);
  }

  function resetHandle() {
    setI(0);
    setStarted(false);
  }
  function pauseHandle() {
    setI();
    setPaused(true);
  }

  return (
    <div className="App">
      <h1>{i}</h1>
      <button onClick={resetHandle}>Reset</button>
      <button onClick={startHandle}>Start</button>
      <button onClick={pauseHandle}>Pause</button>
    </div>
  );
}
