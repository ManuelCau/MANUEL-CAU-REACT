import useSWR from "swr";
import { Link } from "react-router-dom";
const fetcher = (url) => fetch(url).then((response) => response.json());

export function SWRGithubUsers() {
  const { data, error } = useSWR("https://api.github.com/users", fetcher);

  return (
    <div>
      {!data && !error && <h3>Loading...</h3>}
      {error && <h3>An error has occurred</h3>}
      {data && !error && (
        <ul>
          {data.map((user) => (
            <Link key={user.login}>{user.login}</Link>
          ))}
        </ul>
      )}
    </div>
  );
}
