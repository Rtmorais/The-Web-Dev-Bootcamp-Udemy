// Starting the app with a Loop
let input = prompt("What would you like to do?");
const todos = ["Walk the Dog", "Clean the house"];
while (input !== "quit" && input !== "q") {
  if (input == "list") {
    console.log("******************");
    for (let i = 0; i < todos.length; i++) {
      console.log(`${i + 1}: ${todos[i]}`);
    }
    console.log("******************");
  } else if (input === "new") {
    const newTodo = prompt("Whats your new Todo?");
    todos.push(newTodo);
    console.log(`${newTodo} was added to your list!`);
  } else if (input === "delete") {
    const index = parseInt(prompt("Choose a number to delete it"));
    if (!Number.isNaN(index)) {
      const deleted = todos.splice(index - 1, 1);
      console.log(`${deleted[0]} was deleted!`);
    } else {
      console.log("Please, enter a valid number!");
    }
  }
  input = prompt("What would you like to do?");
}
alert("OK. You are quiting the app! See ya!");
