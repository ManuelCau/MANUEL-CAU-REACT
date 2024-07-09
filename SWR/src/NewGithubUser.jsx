import { Link, Outlet } from "react-router-dom";
import { useGithubUser } from "./useGithubUser";

export function NewGithubUser() {
  const { data, error } = useGithubUser();

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
        </div>
      )}
      <Outlet />
    </div>
  );
}
