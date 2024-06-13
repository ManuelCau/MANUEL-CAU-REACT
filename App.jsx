import { Message } from "./Message";
import { HelloWorld } from "./helloWorld";
import { Welcome } from "./Welcome";
import { AlertClock } from "./AlertClock";
import { Counter } from "./Counter";
import { Clock } from "./Clock";

export function App() {
  return (
    <div>
      <h1>My awesome application</h1>
      <hr />
      <HelloWorld />
      <Welcome name="Cavallo" age={27} />
      <Message />
      <AlertClock />
      <Counter />
      <Clock />
    </div>
  );
}
