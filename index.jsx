import { App } from "./App";
// import { HelloWorld } from "./helloWorld";
import { createRoot } from "react-dom/client";
// const helloWorldElement = <HelloWorld />;

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement)

// root.render(helloWorldElement)

createRoot(document.getElementById("root")).render(<App />);
