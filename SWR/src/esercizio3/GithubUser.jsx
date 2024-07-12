import { useGithubUser } from "./useGithubUser";

export function GithubUser({ username }) {
  const { data, error } = useGithubUser(username);


  return (
    <div>
      {!data && !error && <h3>Loading {username}...</h3>}
      {error && <h3>An error has occurred for {username}</h3>}
      {data && (
        <div>
          <h1>{data.login}</h1>
          <img src={data.avatar_url} alt={`${data.login}'s avatar`} />
        </div>
      )}
    </div>
  );
}
