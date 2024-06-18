import { useEffect, useRef } from "react";

export function FocusableInput() {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current?.focus();
    console.log(inputRef);
  }); /* se inputRef è diverso da null o da undefined allora dai il focus */

  return (
    <div>
      <input type="text" ref={inputRef} placeholder="Ref Input" />
    </div>
  );
}
