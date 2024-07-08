import { CurrentLocation } from "./CurrentLocation";
import { GithubUsers } from "./GithubUsers";
import { NewGithubUser } from "./NewGithubUser";
import { Link, Routes, Route } from "react-router-dom";
import { ShowGithubUser } from "./ShowGithubUser";

function App() {
  return (
    <>
      <Link to="users/manuelcau">User</Link>
      <br />
      <Link to="/NewGithubUser">New GithubUser</Link>
      <br />
      <Link to="/CurrentLocation">Current Location</Link>

      <Routes>
        <Route path="/" element={<GithubUsers />} />
        <Route path="/NewGithubUser" element={<NewGithubUser />} />
        <Route path="/CurrentLocation" element={<CurrentLocation />} />
        <Route path="users/:username" element={<ShowGithubUser />} />
      </Routes>
    </>
  );
}

export default App;
