// change image
const myImage = document.querySelector("img")

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");

    if(mySrc === "images/o1.jpg"){
        myImage.setAttribute("src", "images/o2.jpg");
    }

    else{
        myImage.setAttribute("src", "images/o1.jpg");
    }
}
let myButton=document.querySelector("button");
let myHeader=document.querySelector("h1");

function setName(){
    const myName = prompt("What is your name?");
    localStorage.setItem("name", myName);
    myHeader.textContent = `Welcome to Front-End Development, ${myName}`;
    let myButton2=document.querySelector("button");
    myButton2.textContent=`Thank you, ${myName}`;
}

if(!localStorage.getItem("name")){
    setName();
} 
else{
    const storedName = "";
    myHeader.textContent = `Welcome to Front-End Development, ${storedName}`;
}

myButton.onclick = () => {
    setName();
  };


