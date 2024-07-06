import { useState } from "react";
import { useGithubUser } from "./custom hooks/useGithubUser";

export function NewGithubUser() {
  const [username, setUsername] = useState("");
  const { user, loading, error } = useGithubUser(username);

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {user && (
        <div>
          <h1>{user.login}</h1>
          <img src={user.avatar_url} alt={`${user.login}'s avatar`} />
        </div>
      )}
    </div>
  );
}
