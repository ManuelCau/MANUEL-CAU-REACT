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
import { MyList } from "./myList";
import { Colors } from "./Colors";
import { Container } from "./container";
import { FocusableInput } from "./FocusableInput";
import { LanguageContext } from "./LanguageContext";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Product } from "./Product";
export function App() {
  /*  const [lang, setLang] = useState("en");
  function handleLanguageButton(event) {
    setLang(event.target.value);
    console.log(lang);
  } */

  return (
    <Container title={<h1>My awesome application!</h1>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome name="Cavallo" />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/:id" element={<Product />} />
          
        </Routes>
      </BrowserRouter>
      {/* <hr />
      <HelloWorld />
      <Welcome name="Cavallo" age={27} />
      <Message />
      <AlertClock />
      <Counter />

      <select name="LanguageSelector" onChange={handleLanguageButton}>
        <option value="it">Italiano</option>
        <option value="en" selected>
          English
        </option>
      </select>
      <LanguageContext.Provider value={lang}>
        <Clock />
      </LanguageContext.Provider>
      <br />
      <MouseClicker />
      <MyForm />
      <hr />
      <InteractiveWelcome />
      <hr />
      <Login />
      <hr />
      <MyLogin />
      <MyUncontrolledForm />
      <hr />
      <MyList
        items={[
          { id: 1, name: "Jane", age: 33 },
          { id: 2, name: "Kate", age: 20 },
          { id: 3, name: "John", age: 31 },
          { id: 4, name: "BIlly", age: 29 },
          { id: 5, name: "Jane", age: 23 },
        ]}
      />
      <Colors
        colors={[
          { id: 1, name: "yellow" },
          { id: 2, name: "red" },
          { id: 3, name: "blue" },
        ]}
      />
      <FocusableInput /> */}
    </Container>
  );
}
