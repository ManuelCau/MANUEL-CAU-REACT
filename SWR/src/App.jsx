import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SWRGithubUsers } from "./SWRGithubUsers";
import { Home } from "./Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/githubusers" element={<SWRGithubUsers />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
