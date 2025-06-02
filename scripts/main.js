const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/ngoc.jpg") {
    myImage.setAttribute("src", "images/ngoc.jpg");
  } else {
    myImage.setAttribute("src", "images/an.jpg");
  }
});

//proccessing button change user

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name: ");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `JavaScript is so cool ,${myName}`;
  }
}

myButton.addEventListener("click", () => {
  setUserName();
});
