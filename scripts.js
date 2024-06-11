const Heading = document.getElementById("Heading");
const Heading2 = document.getElementById("Heading2");
const Options = document.getElementById("Options");
const Option1 = document.getElementById("Option1");
const Option2 = document.getElementById("Option2");
const Option3 = document.getElementById("Option3");
const Option4 = document.getElementById("Option4");
const DOption3 = document.getElementById("DOption3");
const DOption4 = document.getElementById("DOption4");
const DOption5 = document.getElementById("DOption5");
const Boxes = document.getElementById("Boxes");
const InnerBox = document.getElementById("InnerBox");
const Popup = document.getElementById("Popup");
const RestartBtn = document.getElementById("RestartBtn");
const CancelBtn = document.getElementById("CancelBtn");

let BoxesCount = ["Box1", "Box2", "Box3", "Box4", "Box5", "Box6"];
let totalOptions = [Option1,Option3,Option4,Option5];
let boxes = document.getElementsByClassName("ColorBtn")
let clickCount = 0;
let totalChances = 3;

/*Button EASY*/
function myThree() {
    Option3.style.color = "white";
    DOption3.style.color = "white";
    Option3.style.backgroundColor = "rgb(56, 151, 56)";
    DOption3.style.backgroundColor = "rgb(56, 151, 56)";
    Option4.style.color = "rgb(187, 187, 63)";
    DOption4.style.color = "rgb(187, 187, 63)";
    Option4.style.backgroundColor = "transparent";
    DOption4.style.backgroundColor = "transparent";
    Option5.style.color = "rgb(201, 49, 49)";
    DOption5.style.color = "rgb(201, 49, 49)";
    Option5.style.backgroundColor = "transparent";
    DOption5.style.backgroundColor = "transparent"; 
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].disabled = false;
    }
    myCards(3);
}

/*Button MEDIUM*/
function mySix() {
    Option4.style.color = "white";
    DOption4.style.color = "white";
    Option4.style.backgroundColor = "rgb(187, 187, 63)";
    DOption4.style.backgroundColor = "rgb(187, 187, 63)";
    Option3.style.color = "rgb(56, 151, 56)";
    DOption3.style.color = "rgb(56, 151, 56)";
    Option3.style.backgroundColor = "transparent";
    DOption3.style.backgroundColor = "transparent";
    Option5.style.color = "rgb(201, 49, 49)";
    DOption5.style.color = "rgb(201, 49, 49)";
    Option5.style.backgroundColor = "transparent";
    DOption5.style.backgroundColor = "transparent";
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].disabled = false;
    }
    myCards(6);
}

/*Button HARD*/
function myHard() {
    Option5.style.color = "white";
    DOption5.style.color = "white";
    Option5.style.backgroundColor = "rgb(201, 49, 49)";
    DOption5.style.backgroundColor = "rgb(201, 49, 49)";
    Option3.style.color = "rgb(56, 151, 56)";
    DOption3.style.color = "rgb(56, 151, 56)";
    Option3.style.backgroundColor = "transparent";
    DOption3.style.backgroundColor = "transparent";
    Option4.style.color = "rgb(187, 187, 63)";
    DOption4.style.color = "rgb(187, 187, 63)";
    Option4.style.backgroundColor = "transparent";
    DOption4.style.backgroundColor = "transparent";
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].disabled = false;
    }
    clickCount = 0;
    myCards(6);
    CheckClick();
}

/*For HARD btn*/ 
function CheckClick() {
    Option1.onclick = function() {
        myHard();
        Heading.style.backgroundColor = "rgb(0, 191, 255)";
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].disabled = false;
        }
    };
    Option2.style.visibility = "visible";
    Option2.innerHTML = `Chances Left : ${totalChances}`;
}

InnerBox.addEventListener('click', function(event) {
    if (event.target.id.startsWith('Box') && Option2.innerHTML !== "Try Again") {
        buttonPressed(event.target.id);
    }
});

function buttonPressed(buttonId) {
    if (BoxesCount.includes(buttonId)) {
        clickCount += 1;
        myChances(buttonId);
    }
}

function myChances(buttonId) {
    let correct = false;
    const correctColor = Heading2.innerHTML;

    if (document.getElementById(buttonId).style.backgroundColor === correctColor) {
        Option2.innerHTML = "Correct!";
        correct = true;
    }

    if (!correct) {
        let remainingChances = totalChances - clickCount;
        Option2.innerHTML = `Chances Left : ${remainingChances}`;
        if (remainingChances === 0) {
            ShowPopup();
        }
    }
}

/*Popup*/ 
function ShowPopup() {
    for (let i = 0; i < totalOptions.length; i++) {
        totalOptions[i].disabled = true;
    }
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].disabled = true;
    }
    Popup.style.transform = "translate(-50%,-50%) scale(1)";
    Popup.style.transition = "transform 1s linear";
    Heading.style.filter = "blur(3px)";
    Options.style.filter = "blur(3px)";
    InnerBox.style.filter = "blur(10px)";
    RestartBtn.onclick = function() {
        myHard();
        Popup.style.transform = "translate(-50%,-50%) scale(0)";
        Popup.style.transition = "transform 0.5s linear";
        Heading.style.filter = "blur(0px)";
        Options.style.filter = "blur(0px)";
        InnerBox.style.filter = "blur(0px)";
        Heading.style.backgroundColor = "rgb(0, 191, 255)";
        for (let i = 0; i < totalOptions.length; i++) {
            totalOptions[i].disabled = false;
        }
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].disabled = false;
        }
    }
    CancelBtn.onclick = function() {
        Popup.style.transform = "translate(-50%,-50%) scale(0)";
        Popup.style.transition = "transform 0.5s linear";
        Heading.style.filter = "blur(0px)";
        Options.style.filter = "blur(0px)";
        InnerBox.style.filter = "blur(0px)";
        for (let i = 0; i < totalOptions.length; i++) {
            totalOptions[i].disabled = false;
        }
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].disabled = true;
        }
    }
}

/*Color Change*/ 
window.onload =function() {
    myCards(6);
} 

Option3.onclick = function() {
    myThree();
    Heading.style.backgroundColor = "rgb(0, 191, 255)";
};
DOption3.onclick = function() {
    myThree();
    Heading.style.backgroundColor = "rgb(0, 191, 255)";
};
Option4.onclick = function() {
    mySix();
    Heading.style.backgroundColor = "rgb(0, 191, 255)";
};
DOption4.onclick = function() {
    mySix();
    Heading.style.backgroundColor = "rgb(0, 191, 255)";
};
Option5.onclick = function() {
    myHard();
    Heading.style.backgroundColor = "rgb(0, 191, 255)";
};
DOption5.onclick = function() {
    myHard();
    Heading.style.backgroundColor = "rgb(0, 191, 255)";
};

function gerate_random(){
    let x = Math.floor((Math.random() * 255) + 1);
    let y = Math.floor((Math.random() * 255) + 1);
    let z = Math.floor((Math.random() * 255) + 1);
    let rgbString  = `rgb(${x}, ${y}, ${z})`;
    return rgbString
}

function myCards(max) {
    InnerBox.innerHTML = "" ;

    for (let i = 1; i <= max; i++) {
        const button = document.createElement("button");
        button.id = "Box" + i;
        button.className = "ColorBtn";
        InnerBox.appendChild(button);
        button.style.backgroundColor = "gray";
        button.style.height = "200px";
        button.style.width = "200px";
        button.style.borderRadius = "30px";
        button.style.marginLeft = "10px";
        button.style.marginRight = "10px";
        button.style.marginTop = "20px";
        button.onclick = function() {myBox(button);};
    }

    let original_color = gerate_random();
    Heading2.innerHTML = original_color;
    let num = Math.floor((Math.random() * max) + 1);

    for (let i = 1; i <= max; i++) {
        let box = document.getElementById(`Box${i}`);

        if (num == i) {
            box.style.backgroundColor = original_color;
        } else {
            box.style.backgroundColor = gerate_random();
        }
    }

    Option1.onclick = function() {
        myCards(max);
        Heading.style.backgroundColor = "rgb(0, 191, 255)";
    };
    Option2.style.visibility = "hidden";
    Option2.innerHTML = "Try Again";
    if (Option1.innerHTML === "Play Again?") {
        Option1.innerHTML = "NEW COLOR";
    }
} 

/*Boxes*/ 
function myBox(box) {
    if (box.style.backgroundColor === Heading2.innerHTML) {
        for (let i = 0; i <= boxes.length; i++) {
            boxes[i].style.backgroundColor = Heading2.innerHTML;
            boxes[i].style.visibility = "visible";
            Heading.style.backgroundColor = Heading2.innerHTML;
            Option1.innerHTML = "Play Again?";
            Option2.style.visibility = "visible";
            Option2.innerHTML = "Correct!";
        }
    }
    else {
        box.style.visibility = "hidden";
        Option2.style.visibility = "visible";
    }
}