export function AlertClock() {
  function handleButtonClick() {
    const now = new Date();
    alert("Current time: " + new Date().toLocaleTimeString());
  }
  return (
    <div>
      <p>Click the button</p>
      <button onClick={handleButtonClick}>Click me!</button>
    </div>
  );
}
