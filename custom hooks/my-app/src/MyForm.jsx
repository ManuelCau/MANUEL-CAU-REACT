import { useMyForm } from "./hooks/useMyForm";

export function MyForm() {
  const { data, handleInputChange, handleSubmit } = useMyForm();

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        onChange={handleInputChange}
        value={data.username}
      />
      <input
        type="password"
        name="password"
        onChange={handleInputChange}
        value={data.password}
      />
      <button>Submit</button>
    </form>
  );
}
