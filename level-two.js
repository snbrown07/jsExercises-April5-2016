/**************************************/
/*  Level Two - Conditional Exercises */
/**************************************/

/*
  Return a true boolean if degrees is greater than 72, otherwise return false
  ie:
    isHot(90) => true
    isHot(72) => false
    isHot(32) => false
*/
function isHot(degrees) {
   if (degrees >= 90){
     return true;
   } else{
     return false;
   }
}

/*
  Check if degrees is hot using isHot()
  Then return a string indcating if it is hot or cold today
  ie:
    sayHotMessage(90) => "It is hot today"
    sayHotMessage(72) => "It is cold today"
    sayHotMessage(32) => "It is cold today"
*/
function sayHotMessage(degrees) {
   if (isHot(degrees)){
     return "It is hot today";
   } else {
     return "It is cold today";
   }
}

/*
  Return the string "hot" if degrees is greater than 72
  Return the string "just right" if degrees is between 32 and 72
  Return the string "cold" if degrees is less than 32
  ie:
    isHotAdv(73) => "hot"
    isHotAdv(72) => "just right"
    isHotAdv(33) => "just right"
    isHotAdv(32) => "cold"
*/
function isHotAdv(degrees) {
  if (degrees >= 73) {
    return "hot";
} else if (degrees > 32 && degrees <= 72 ) {
    return "just right";
} else {
    return "cold";
}
}

/*
  Check if degrees is hot using isHotAdv() store it into a variable
  Then return a string indcating if it is hot, just right or cold today including degrees
  ie:
    sayHotMessageAdv(73) => "It is hot today at 73 degrees"
    sayHotMessageAdv(72) => "It is just right today at 72 degrees"
    sayHotMessageAdv(33) => "It is just right today at 33 degrees"
    sayHotMessageAdv(32) => "It is cold today at 32 degrees"
*/
function sayHotMessageAdv(degrees) {
  isHotAdv(degrees)
  
  if (degrees > 72){
    return "It is hot today at " + degrees + " degrees";
  } else if (degrees > 32 && degrees <= 72){
    return "It is just right today at " + degrees + " degrees";
  } else if (degrees <= 32) {
    return "It is cold today at " + degrees + " degrees";
  }
}
