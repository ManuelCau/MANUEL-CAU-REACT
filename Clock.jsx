import { useEffect, useState } from "react";

export function Clock() {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    setInterval(() => {
      console.log("Uploading date...");
      setDate(new Date());
    }, 1000);
    return () => {
      console.log("Clearing clock interval");
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <h2>Current time is {date.toLocaleTimeString()}</h2>
    </div>
  );
}
