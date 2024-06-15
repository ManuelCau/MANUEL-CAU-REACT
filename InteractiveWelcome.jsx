import { useState } from "react";
import { Welcome } from "./Welcome";

export function InteractiveWelcome() {
  const [name, setName] = useState("");

  function handlingInputValue(event) {
    const value = event.target.value;
    setName(value);
  }

  return (
    <div>
      <input
        type="text"
        onChange={handlingInputValue}
        placeholder="Your name here"
      />
      <Welcome name={name} />
    </div>
  );
}
