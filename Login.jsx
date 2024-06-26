import { useState } from "react";

export function Login(onLogin) {
  const [form, setForm] = useState({});

  function handleLogin(event) {
    const name = event.target.name;
    const type = event.target.type;
    const value = event.target.value;
    const checked = event.target.checked;
    setForm(() => {
      const newForm = {
        ...form,
        [name]: type === "checkbox" ? checked : value,
      };
      return newForm;
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log(form);

    onLogin(form);
  }
  function handleReset() {
    onLogin("");
  }

  return (
    <form>
      <h2>The login</h2>
      <input
        name="username"
        type="text"
        placeholder="username"
        onChange={handleLogin}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        onChange={handleLogin}
      />
      <input type="checkbox" name="remember" onChange={handleLogin} />
      <br />
      <button
        disabled={!form.username && !form.password}
        onClick={handleSubmit}
      >
        Login!
      </button>
      <button onClick={handleReset}>Reset</button>

      <pre>{JSON.stringify(form)}</pre>
    </form>
  );
}
