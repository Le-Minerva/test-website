let myVariable = "Bob"

let iceCream = "chocolate";
if (iceCream === "chocolate") {
  alert("Yay, I love chocolate ice cream!");
} else {
  alert("Awwww, but chocolate is my favorite…");
}

function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
  }

  let bodyAlert = 0
document.querySelector("html").addEventListener("click", function () {
    if (bodyAlert === 1){
alert("Ouch! Stop poking me!")}
});

const myImage = document.getElementById('myImg')
myImage.addEventListener('click', function () {
    // 检查当前图片的来源
    if (myImage.src.match('images/cat-head.png')) {
        // 如果当前显示的是 image1.jpg，则将图片来源修改为 image2.jpg
        myImage.src = 'images/scary.png';
    } else {
        // 否则，将图片来源修改为 image1.jpg
        myImage.src = 'images/cat-head.png';
    }
})

const myImage1 = document.getElementById("myImg1");

myImage1.addEventListener("click", () => {
  const mySrc = myImage1.getAttribute("src");
  if (mySrc === "images/crowned-cat.png") {
    myImage1.setAttribute("src", "images/flower.png");
  } else {
    myImage1.setAttribute("src", "images/crowned-cat.png");
  }
});


const button1 = document.getElementById("button1")
button1.addEventListener('click', function () {
    bodyAlert = bodyAlert === 1 ? 0 : 1;
    
})

let myButton = document.getElementById("button2");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
  }
  

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Cat is cool, ${storedName}`;
  }

  myButton.addEventListener("click", () => {
    setUserName();
  });
  
  
  