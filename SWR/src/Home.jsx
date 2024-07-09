import { Link } from "react-router-dom";

export function Home() {
  return (
    <>
      <Link to="/githubusers">Github User list</Link>
      <Link to="/NewGithubUser">New Github User list</Link>
    </>
  );
}
