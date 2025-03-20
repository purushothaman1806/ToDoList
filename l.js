const add = document.querySelector(".add");
const todocontainer = document.querySelector(".todocontainer");
const input = document.querySelector(".input");

add.addEventListener("click", function () {
  const content = document.createElement("p");
  content.classList.add("content");
  content.innerText = input.value;

  const but = document.createElement("button");
  but.classList.add("delete");
  but.innerText = "done";
  but.style.border = "none";

  content.appendChild(but);
  todocontainer.appendChild(content);
  input.value = "";
});

todocontainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete")) {
    event.target.parentElement.remove();
  }
});
