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


