import { useState } from "react";
import { CounterDisplay } from "./CounterDisplay";
import classes from "./Counter.module.scss";

export function Counter({ initialValue = 0 }) {
  const [counter, setCounter] = useState(initialValue);
  function handleCounterIncrement() {
    setCounter((c) => c + 1);
  }
  function handleCounterDecrement() {
    setCounter((c) => c - 1);
  }
  function handleCounterReset() {
    setCounter(0);
  }

  return (
    <div>
      <CounterDisplay counter={counter} />
      <br />
      <button className={classes.button} onClick={handleCounterIncrement}>
        Increment
      </button>
      <button className={classes.button} onClick={handleCounterDecrement}>
        Decrement
      </button>
      <button className={classes.button} onClick={handleCounterReset}>
        Reset
      </button>
    </div>
  );
}
