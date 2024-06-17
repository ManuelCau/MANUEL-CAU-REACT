import { useState } from "react";
import classes from "./MyList.module.scss";
function MyListItem({ item }) {
  const [counter, setCounter] = useState(0);

  function handleIncrementCounter() {
    setCounter((c) => c + 1);
  }
  return (
    <li>
      <h4>{item.name}</h4>
      <p>{item.age} years old</p>
      <button className={classes.button} onClick={handleIncrementCounter}>
        {counter}
      </button>
    </li>
  );
} //metodo migliore, non mettere qui la key

export function MyList({ items }) {
  //   const names = ["Jane", "Kate", "John", "Billy"];
  //   const items = names.map((name) => <li>{name}</li>);

  return (
    <ul className={classes.list}>
      {items.map((item) => (
        <MyListItem key={item.id} item={item} /> //key must be attached to the top most component
        // <li key={item.id}>
        //   <h4>{item.name}</h4>
        //   <p>{item.age} years old</p>
        // </li> //si può anche fare così
      ))}
    </ul>
  ); //you cannot render objects, you must render them inside something that react can arender
}
