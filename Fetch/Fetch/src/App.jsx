import { CurrentLocation } from "./CurrentLocation";
import { GithubUsers } from "./GithubUsers";
import { NewGithubUser } from "./NewGithubUser";

function App() {
  return (
    <>
      <GithubUsers />
      <br />
      <NewGithubUser />
      <br />
      <CurrentLocation />
    </>
  );
}

export default App;
