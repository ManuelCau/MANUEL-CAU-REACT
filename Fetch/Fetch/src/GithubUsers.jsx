import { useRef, useState } from "react";
import { GithubUser } from "./GithubUser";

export function GithubUsers() {
  const [usernames, setUsernames] = useState([]);
  const inputRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    if (inputRef.current?.value) {
      setUsernames([...usernames, inputRef.current.value]);
      inputRef.current.value = null;
    }
  }

  return (
    <div>
      {usernames.map((user) => (
        <GithubUser username={user} key={user} />
      ))}

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search user" ref={inputRef} />
        <button>Submit</button>
      </form>
    </div>
  );
}
