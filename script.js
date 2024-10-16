const myInput = document.getElementById("myInput");
const myUL = document.getElementById("myUL");

function addTask() {
    if (myInput.value === "") {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = myInput.value;
        myUL.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // × character
        li.appendChild(span);
    }
    myInput.value = "";
    saveData();
}

myUL.addEventListener("click", function (ev) {
    if (ev.target.tagName === "LI") {
        ev.target.classList.toggle("checked");
    } else if (ev.target.tagName === "SPAN") {
        ev.target.parentNode.remove();
    }
}, false);

function saveData() {
    localStorage.setItem("data", myUL.innerHTML);
}

function showTask() {
    myUL.innerHTML = localStorage.getItem("data");
}

showTask();
