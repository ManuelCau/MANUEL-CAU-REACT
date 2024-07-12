import { Routes, Route } from "react-router-dom";
import { SWRGithubUsers } from "./SWRGithubUsers";
import { NewGithubUser } from "./NewGithubUser";
import { ShowGithubUser } from "./ShowGithubUser";
import { Home } from "./Home";
import { GithubUtente } from "./GithubUtente";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/githubusers" element={<SWRGithubUsers />} />
        <Route path="/NewGithubuser" element={<NewGithubUser />}>
          <Route path=":username" element={<ShowGithubUser />} />
        </Route>

        <Route path="/GithubUtente" element={<GithubUtente />} />
      </Routes>
    </>
  );
}

export default App;
