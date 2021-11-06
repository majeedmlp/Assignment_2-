const task3Element = document.getElementById("task-3");

function greet() {
  alert("Hello there!");
}

function greetUser(userName) {
  alert("Hi " + userName);
}

task3Element.addEventListener("click",greet);



greet();
greetUser("Abdul Majeed");

