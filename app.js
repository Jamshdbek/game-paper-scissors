


const computerChoiceDisplay = document.getElementById("computer_choice");
const userChoiceDisplay = document.getElementById("computer_choice");
const resuoltDisplay = document.getElementById("result");
const winningMessageElement =document.getElementById('winning-message')
const winningMessageTextElement = document.querySelector("[data-winning-message-text]")

const possibleChoices = document.querySelectorAll("button");
// ocnke
let computerChoice;
let userChoice;
let result;
let ujon = 8;
let cjon = 8;
possibleChoices.forEach((possibleChoices) =>
  possibleChoices.addEventListener("click", (e) => {
    userChoice = e.target.id;
    computerChoiceDisplay.innerHTML = computerChoice;
    userChoiceDisplay.innerHTML = userChoice;

    generaterComputerChoice();
    getResult();
    
    Server();
  })
);

function generaterComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1; // or your can use possibleChoices .olejfoisdj

  if (randomNumber === 1) {
    computerChoice = "tosh";
  }
  if (randomNumber === 2) {
    computerChoice = "qaychi";
  }
  if (randomNumber === 3) {
    computerChoice = "qog'oz";
  }

  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === userChoice) {
    result = "durrang";
  }
  if (computerChoice === "tosh" && userChoice === "qog'oz") {
    result = "mag'lubyat";
  }

  if (computerChoice === "tosh" && userChoice === "qaychi") {
    result = "mag'lubyat";
  }
  if (computerChoice === "qogoz" && userChoice === "qaychi") {
    result = "g'alaba";
  }
  if (computerChoice === "qog'oz" && userChoice === "tosh") {
    result = "g'alaba";
  }
  if (computerChoice === "qaychi" && userChoice === "tosh") {
    result = "g'alba";
  }
  if (computerChoice === "qaychi" && userChoice === "qog'oz") {
    result = "mag'lubyat";
  }
  if (computerChoice === "qog'oz" && userChoice === "qaychi") {
    result = "g'alaba";
  }

  resuoltDisplay.innerHTML = result;

  Server(result);
}

// document.querySelector("h1").innerHTML =` ${cjon} kopyuter & inson ${ujon}`

function Server(result) {
  // document.querySelector("h1").innerHTML =` ${cjon} kopyuter & inson ${ujon}`

  let win = "g'alaba";
  let lost = "mag'lubyat";
     
    if (result === lost) {
        ujon--;
        if (ujon === 1) {
          document.getElementById("tosh").onclick=function (){myFunctontwo()};
          document.getElementById("qogoz").onclick=function (){myFunctontwo()};
          document.getElementById("qaychi").onclick=function (){myFunctontwo()};
         
         
        }  
      } else if (result === win) {
        cjon--;
        if (cjon === 1) {
          document.getElementById("tosh").onclick=function (){myFunton()};
          document.getElementById("qogoz").onclick=function (){myFunton()};
          document.getElementById("qaychi").onclick=function (){myFunton()};
         
        
        }
      }
    document.querySelector("h1").innerHTML = `${cjon} --- ${ujon}`;
     
 
     function myFunton(){
      document.querySelector(".winning-message").classList.add("winning-messageshow")
    }
    function myFunctontwo(){
     
      document.querySelector(".over-message").classList.add("over-messageshow")
     
    }
}
Server();

