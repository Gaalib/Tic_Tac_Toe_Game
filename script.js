let boxes = document.querySelectorAll(".box");

let turnX = true;


const winPatterns = [
   [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


boxes.forEach((box) => {

    box.addEventListener("click", () => {
        console.log("Box was Click")
        if (turnX) {
            box.innerText = "X"
            turnX = false;
         
        }
        else {
            box.innerText = "O"
            turnX = true;
        }
        box.disabled = true;
        checkWinner();

    });

});




const showWinner = () => {
    let winnerElement = document.querySelector(".winner");
    winnerElement.classList.remove("hide");

   
    setTimeout(() => {
        winnerElement.style.opacity = "1";
        winnerElement.style.transform = "translateY(0)";
    }, 100);

    createConfetti();
};

const createConfetti = () => {
    const confettiContainer = document.getElementById("confetti-container");
    for (let i = 0; i < 100; i++) { 
        let confetti = document.createElement("div");
        confetti.classList.add("confetti");

        
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.backgroundColor = randomColor();
        confetti.style.animationDuration = Math.random() * 3 + 2 + "s"; 
        confetti.style.animationDelay = Math.random() * 2 + "s"; 

        confettiContainer.appendChild(confetti);

        
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
};


const randomColor = () => {
    const colors = ["#ff4757", "#ff6b81", "#fbc531", "#44bd32", "#0097e6", "#8c7ae6"];
    return colors[Math.floor(Math.random() * colors.length)];
};





const checkWinner = () => {
    for (let pattern of winPatterns) {
        let position1Val = boxes[pattern[0]].innerText;
        let position2Val = boxes[pattern[1]].innerText;
        let position3Val = boxes[pattern[2]].innerText;
    
    if (position1Val != "" && position2Val != "" && position3Val != "") {
    if (position1Val === position2Val && position2Val === position3Val) {
        console.log("Winner");
        disableBoxs ();
        
showWinner();

       
    } 
}
}
};


const disableBoxs = () =>{
    for (let box of boxes){
        box.disabled = true;
    }
}

const anableBoxs = () =>{
    for (let box of boxes){
        box.disabled = false;
        box.innerText= "";
    }
}

document.querySelector("#reset-button").addEventListener("click", function () {
    location.reload(); 
});
