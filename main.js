window.onload = () => {
    let add = document.getElementById("add");
    let app = document.getElementById("app");
    function apd() {
        let inpval = document.getElementById("shit").value;
        let close = document.createElement("i");
        let checkBox = document.createElement("input");
        let span = document.createElement("span");
        checkBox.type = "checkbox";
        checkBox.addEventListener("click", tggComplete);
        close.classList.add("fas");
        close.classList.add("fa-xmark");
        close.addEventListener("click", waitCall);
        let todoItem = document.createElement("div");
        todoItem.classList.add("todo-item");
        let txt = inpval;
        document.getElementById("bod").style.transition = "0.3s"
        if (document.getElementById("shit").value !== "") {
            document.getElementById("bod").style.borderColor = "#bbb"
            span.append(txt);
            todoItem.append(checkBox);
            todoItem.append(span);
            todoItem.appendChild(close);
            app.appendChild(todoItem);
            document.getElementById("shit").value = "";
            document.getElementsByClassName("fa-pencil")[0].style.color = "#000000";
        } else {
            document.getElementById("bod").style.borderColor = "#eb6060"
        }
    }
    add.onclick = () => apd();
    document.getElementById("shit").addEventListener("keydown", e => {
        e.key === "Enter" ? apd() : false;
    });
    document.getElementById("shit").oninput = () => {
        document.getElementsByClassName("fa-pencil")[0].style.color = "#bbb"
        document.getElementsByClassName("fa-pencil")[0].style.transition = ".3s"
    }
    function tggComplete(e) {
        let todotxt = e.target.nextElementSibling;
        if (e.target.checked) {
            todotxt.style.color = "#bbb";
            todotxt.style.textDecoration = "line-through";
            todotxt.style.textDecorationColor = "#000";
        } else {
            todotxt.style.color = "#000";
            todotxt.style.textDecoration = "none";
        }
    }
    function waitCall(e) {
        e.target.parentElement.remove();
    }
    
}