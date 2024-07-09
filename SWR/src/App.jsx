import { Routes, Route } from "react-router-dom";
import { SWRGithubUsers } from "./SWRGithubUsers";
import { NewGithubUser } from "./NewGithubUser";
import { ShowGithubUser } from "./ShowGithubUser";
import { Home } from "./Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/githubusers" element={<SWRGithubUsers />} />
        <Route path="/NewGithubuser" element={<NewGithubUser />}>
          <Route path=":username" element={<ShowGithubUser />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
