export function MyUncontrolledForm() {

  function handleFormSubmit(event) {
    
    event.preventDefault();
    const formData = new FormData(event.target);

    const data = {
      username: formData.get("username"),
      password: formData.get("password"),
      session: formData.get("session") === "on" ? true : false,
    };
    console.log(data);
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" name="username" />
      <input type="password" name="password" />
      <input type="checkbox" name="session" />
      <button type="submit">Submit</button>
      <button type="reset">Reset</button>
    </form>
  );
}
