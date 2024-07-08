import useSWR from "swr";
import { Link, Outlet } from "react-router-dom";
const fetcher = (url) => fetch(url).then((response) => response.json());

export function SWRGithubUsers() {
  const { data, error } = useSWR("https://api.github.com/users", fetcher);

  const MyStyle = {
    display: "flex",
    flexDirection: "column",
  };

  return (
    <div>
      {!data && !error && <h3>Loading...</h3>}
      {error && <h3>An error has occurred</h3>}
      {data && !error && (
        <div style={MyStyle}>
          {data.map((user) => (
            <Link to={user.login} key={user.login}>
              {user.login}
            </Link>
          ))}

          <Outlet />
        </div>
      )}
    </div>
  );
}
