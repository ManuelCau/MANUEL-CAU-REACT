import { App } from "./App";
// import { HelloWorld } from "./helloWorld";
import { createRoot } from "react-dom/client";
import "./index.scss";
import { Root } from "./Root";

const root = document.getElementById("root");
// const root = createRoot(rootElement)

// root.render(helloWorldElement)

createRoot(document.getElementById("root")).render(<App />);

ReactDom.render(<Root />, root);
