import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "./LanguageContext";

export function Clock() {
  const [date, setDate] = useState(new Date());

  const lang = useContext(LanguageContext);

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
      {lang === "en" ? (
        <h2>Current time is {date.toLocaleTimeString()}</h2>
      ) : (
        <h2>L'orario corrente è {date.toLocaleTimeString()}</h2>
      )}
    </div>
  );
}
