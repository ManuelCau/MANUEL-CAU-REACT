import { useRef, useState } from "react";
import { useGithubUser } from "./useGithubUser";

export function GithubUtente() {
  const [user, setUser] = useState("");
  const { data, error, fetchGithubUser } = useGithubUser(user);

  const inputRef = useRef(null);

  return (
    <div>
      <div>
        <input type="text" ref={inputRef} name="username" />
        <button onClick={() => setUser(inputRef.current.value)}>cerca</button>
        <button onClick={fetchGithubUser}>Update data</button>
      </div>
      <div>
        {!data && !error && <h3>Loading...</h3>}
        {error && <h3>An error has occurred</h3>}
        {data && !error && (
          <>
            <h1>{data.name}</h1>
            <h2>{data.login}</h2>
            <img
              src={data.avatar_url}
              style={{ width: "300px" }}
              alt="Avatar"
            />
          </>
        )}
      </div>
    </div>
  );
}
