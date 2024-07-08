import { CurrentLocation } from "./CurrentLocation";
import { GithubUsers } from "./GithubUsers";
import { NewGithubUser } from "./NewGithubUser";
import { Link, Routes, Route } from "react-router-dom";
import { ShowGithubUser } from "./ShowGithubUser";
import { SWRGithubUsers } from "./SWRGithubUsers";

function App() {
  return (
    <>
      <Link to="/users">Users</Link>
      <br />
      <Link to="/NewGithubUser">New GithubUser</Link>
      <br />
      <Link to="/CurrentLocation">Current Location</Link>

      <Routes>
        <Route path="/" element={<GithubUsers />} />
        <Route path="/NewGithubUser" element={<NewGithubUser />} />
        <Route path="/CurrentLocation" element={<CurrentLocation />} />
        <Route path="/users" element={<SWRGithubUsers />}>
          <Route index element={<h2>Add a user and select it</h2>} />
          <Route path=":username" element={<ShowGithubUser />} />
        </Route>

        <Route path="*" element={<h1>404 not found</h1>} />
      </Routes>
    </>
  );
}

export default App;
