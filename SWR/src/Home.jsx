import { Link } from "react-router-dom";

export function Home() {
  return (
    <>
      <Link to="/githubusers">Github User list</Link>
      <br />
      <Link to="/NewGithubUser">New Github User list</Link>
      <br />
      <Link to="/GithubUtente">Github User Search</Link>
    </>
  );
}
