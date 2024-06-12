import { Message } from "./Message";
import { HelloWorld } from "./helloWorld";
import { Welcome } from "./Welcome";
import { AlertClock } from "./AlertClock";

export function App() {
  return (
    <div>
      <h1>My awesome application</h1>
      <hr />
      <HelloWorld />
      <Welcome name="Cavallo" age={27} />
      <Message />
      <AlertClock/>
    </div>
  );
}
