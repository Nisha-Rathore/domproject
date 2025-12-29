
function changeText() {
  document.getElementById("para").innerText = "Changed by ID";

  document.getElementsByClassName("text")[0].style.color = "red";

  document.querySelector(".text").style.fontWeight = "bold";

  document.getElementsByTagName("h1")[0].innerText = "Gora"

  document.querySelectorAll("p")[1].style.backgroundColor = "yellow"
}


// Project 2: Text and HTML Changer

// 1. innerText
// 2. textContent
// 3. innerHTML

function project2() {
    document.querySelectorAll("h1")[1].innerText = "Project 2 : Text and HTML Changer";
    document.querySelector("#innerText").innerText="Here we use innerText";
    document.querySelector(".textContent").textContent = "Here we use textContent"
    document.querySelector("#innerHtml").innerHTML = "<h1>Here we use innerHTML </h1>"
}

// Project 3 : Style Controller ( Learn styling through DOM )
 
// 1. style
// 2. classList.add()
// 3. classList.remove()
// 4. classList.toggle()

function project3() {
  const toggle = document.querySelector("#classListtoggle");
  toggle.innerText = "ClassList Toggle";
  toggle.classList.toggle("active");

  const addstyle = document.querySelector("#classListAdd")
  addstyle.classList.add("highlight");
  addstyle.innerText = "ClassList Add"

  const removestyle = document.querySelector("#classListRemove");
  removestyle.classList.remove("remove");
  removestyle.innerText = "ClassList Remove"

  const style = document.querySelector("#style");
  style.innerText = "Normal Class";
  style.style.backgroundColor= "pink";


}


