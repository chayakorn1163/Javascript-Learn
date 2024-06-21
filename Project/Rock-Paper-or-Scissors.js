/*const getUserChoice = (userInput) => {
    if (
        userInput ==='ค้อน' ||
        userInput === 'กระดาษ' ||
        userInput === 'กรรไกร'
    )
    return userInput;
    else {
        console.log("Error,please type : ค้อน,กระดาษ และ กรรไกร");
        
    }
};
console.log(getUserChoice('กระดาษ'));
console.log(getUserChoice('กรรไกร'));*/

//rendom
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "ค้อน";
    case 1:
      return "กระดาษ";
    case 2:
      return "กรรไกร";
  }
};

const dataermineWinner =(userChoice , computerChoice) => {
    if (userChoice === computerChoice ) {
        return "เสมอ";

    }

    if (userChoice === "ค้อน"){
        if (computerChoice === "กระดาษ") {
            return "คุณชนะ";
        } else {
            return "คุณแพ้";
        }
    }

    if (userChoice === "กระดาษ") {
        if (computerChoice === "กรรไกร") {
            return "คุณชนะ";
        } else {
            return "คุณแพ้";
        }
    }


    if (userChoice ==="กรรไกร") {
        if (computerChoice === "ค้อน") {
            return "คุณชนะ";
        } else {
            return "คุณแพ้";
        }
    }
};

const playgame = () => {
    const userChoice =getUserChoice("กระดาษ");
    const computerChoice =getComputerChoice();
    console.log("you threw:"+userChoice);
    console.log("computer threw:"+computerChoice);

    console.log(dataermineWinner(userChoice,computerChoice));
    
};


/*console.log(dataermineWinner("ค้อน","กรรไกร"));

console.log(dataermineWinner("กระดาษ","กรรไกร"));

console.log(dataermineWinner("ค้อน","ค้อน"));*/



/*console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());*/
