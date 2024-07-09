let input = document.querySelector("input");
let button = document.querySelector("button");
let list = document.querySelector("ul");

button.addEventListener("click", function (event) {
    event.preventDefault();

    let task = input.value;
    let li = document.createElement("li");
    let span = document.createElement("span");
    let doneBtn = document.createElement("button");
    let delBtn = document.createElement("button");

    doneBtn.addEventListener("click", function (event) {
        event.preventDefault();

        span.classList.toggle("strike");
    })

    delBtn.addEventListener("click", function (event) {
        event.preventDefault();

        li.remove();
    })

    span.textContent = task;
    doneBtn.textContent = "Done";
    delBtn.textContent = "Delete";

    li.appendChild(span);
    li.appendChild(doneBtn);
    li.appendChild(delBtn);
    

    list.appendChild(li);

    input.value = "";

})