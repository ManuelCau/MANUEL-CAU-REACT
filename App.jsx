import { Message } from "./Message";
import { HelloWorld } from "./helloWorld";
import { Welcome } from "./Welcome";
import { AlertClock } from "./AlertClock";
import { Counter } from "./Counter";
import { Clock } from "./Clock";
import { MouseClicker } from "./MouseClicker";
import { MyForm } from "./MyForm";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";
import { MyLogin } from "./MyLogin";
import { MyUncontrolledForm } from "./MyUncontrolledForm";

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
      <MouseClicker />
      <MyForm />
      <hr />
      <InteractiveWelcome />
      <hr />
      <Login />
      <hr />
      <MyLogin />
      <MyUncontrolledForm />
    </div>
  );
}
