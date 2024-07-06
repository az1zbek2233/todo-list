let input = document.querySelector("input");
let button = document.querySelector("button");
let list = document.querySelector("ul");

button.addEventListener("click", function (event) {
    event.preventDefault();

    let task = input.value;
    let li = document.createElement("li");

    li.textContent = task;

    list.appendChild(li);

    input.value = "";

})