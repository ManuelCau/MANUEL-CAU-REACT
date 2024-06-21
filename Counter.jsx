import { useEffect, useRef, useState } from "react";
import { CounterDisplay } from "./CounterDisplay";
import classes from "./Counter.module.scss";

export function Counter({ initialValue = 0 }) {
  const directionRef = useRef(null);
  const [counter, setCounter] = useState(initialValue);

  function handleCounterIncrement() {
    setCounter((c) => {
      const newCounter = c + 1;
      const direction = newCounter > c ? "up" : "down";
      if (direction !== directionRef.current) {
        directionRef.current = direction;
        console.log(`Direzione del cambiamento: ${direction}`);
      }
      return newCounter;
    });
  }

  function handleCounterDecrement() {
    setCounter((c) => {
      const newCounter = c - 1;
      const direction = newCounter > c ? "up" : "down";
      if (direction !== directionRef.current) {
        directionRef.current = direction;
        console.log(`Direzione del cambiamento: ${direction}`);
      }
      return newCounter;
    });
  }

  function handleCounterReset() {
    setCounter(initialValue);
  }

  useEffect(() => {
    console.log(directionRef);
  }, []);

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
