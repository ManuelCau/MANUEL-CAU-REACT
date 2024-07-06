import { useState } from "react";

export function useMyForm() {
  const [data, setData] = useState({ username: "", password: "" });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log("Mirko è bello", data);
  }
  return {
    data,
    handleInputChange,
    handleSubmit,
  };
}
