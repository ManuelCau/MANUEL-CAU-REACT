export function MouseClicker() {
  function consolePrint(event) {
     console.log(event.target.name);
     
  }
  function srcPrinting(event){
    return console.log(event.target.src);
  }
  return (
    <button name="uno" onClick={consolePrint}>
      <img
        width={40}
        height={40}
        onClick={srcPrinting}
        src="https://cdn.britannica.com/70/234870-050-D4D024BB/Orange-colored-cat-yawns-displaying-teeth.jpg"
      />
      Event button
    </button>
  );
}
