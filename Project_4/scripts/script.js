const button = document.querySelector("#btn");
const para = document.querySelector("p1");
const heading = document.querySelectorAll("h1")[0];

button.addEventListener("click",function(){
    button.innerText = "button is clicked"
    button.style.backgroundColor = "red"
    para.innerText = "Paragraph is changed"
    heading.innerText = "Project 4 : Event Handling";
})


// for Project 5

function addTask() {
    const li = document.createElement("li");
    li.innerText = document.getElementById("task").value;

    li.onclick = () => li.remove();

    document.getElementById("list").appendChild(li);
}
 function addTodo() {
    const li = document.createElement("li");
    li.innerText = document.querySelector("#todo").value;
    document.querySelector("#todolist").appendChild(li);

    
    li.onclick = () => li.remove()
 }
