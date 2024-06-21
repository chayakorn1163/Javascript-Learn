/*const getSleepHours =day =>{
    if (day ==="monday") {
        return 8;
    }
    else if (day ==="tuesday") {
        return 7;
    }
    

    else{

    }

    switch(day ) {
        case "monday":
            return 8;
            break;
        case "tuesday":
            return 7;
            break;
        case "wednesday":
            return 8;
            break;
        case "thursday":
            return 5;
            break;
        case "friday":
            return 8;
            break;
        case "saturday":
            return 7;
            break;
        case "sunday":
            return 8;
            break;
            
        default:
            return "Error!";
    }
};


const getActualSleepHoue =() => 
    
    getSleepHours("monday")+
    getSleepHours("tuesday")+
    getSleepHours("wednesday")+
    getSleepHours("thursday")+
    getSleepHours("friday")+
    getSleepHours("saturday")+
    getSleepHours("sunday");

console.log(getSleepHours("monday"));

console.log(getActualSleepHoue());


const  getIdealSleepHours = () =>{
    let idealHours =8;
    return idealHours*7;
};

const calculateSleepHours = () => {
    const actualSleepHors = getIdealSleepHours();
    const idealSeppleHours = getIdealSleepHours();


    if (actualSleepHors === idealSeppleHours) {
        console.log("you ve got the perfect amount of sleep!");

    }
    else if (actualSleepHors === idealSeppleHours) {
        console.log("you ve got more sleep than needea.");
    }
    else if (actualSleepHors === idealSeppleHours) {
        console.log("you should get some rest.");
    }

    else {
        console.log("Error! Something went wrong, check code.")
    }


};
calculateSleepDebt();*/

const getSleepHours = (day) => {
  switch (day) {
    case "monday":
      return 10;
    case "tuesday":
      return 10;
    case "wednesday":
      return 10;
    case "thursday":
      return 9;
    case "friday":
      return 10;
    case "saturday":
      return 10;
    case "sunday":
      return 12;
    default:
      return "Error!";
  }
};

const getActualSleepHours = () =>
  getSleepHours("monday") +
  getSleepHours("tuesday") +
  getSleepHours("wednesday") +
  getSleepHours("thursday") +
  getSleepHours("friday") +
  getSleepHours("saturday") +
  getSleepHours("sunday");

console.log(getSleepHours("monday")); // Check function output

console.log(getActualSleepHours()); // Check function output

const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log("You've got the perfect amount of sleep!");
  } else if (actualSleepHours > idealSleepHours) {
    console.log(
      "You've got " +
        (idealSleepHours - actualSleepHours) +
        "more hours of  this week."
    );
  } else if (actualSleepHours < idealSleepHours) {
    console.log(
      "You should get some rest bacause you ve slept ." +
        (idealSleepHours - actualSleepHours) +
        "houre less than you should have this week"
    );
  } else {
    console.log("Error! Something went wrong, check code.");
  }
};

calculateSleepDebt();
