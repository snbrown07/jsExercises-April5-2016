/****************************************/
/*  Level One - Concatenation Exercises */
/****************************************/

/*
  Return a string that will add a "Hello" string in front of the name
  ie:
    sayHello("Jesse") => Hello Jesse
    sayHello("Mat") => Hello Mat
*/
function sayHello(name) {
   return "Hello " + name;
}

/*
  Create a full name using the first and last parameters and store into a variable
  Then return a string that will add a "Hello" string in front of the full name
  ie:
    sayHelloAdv("Jesse", "Wang") => Hello Jesse Wang
    sayHelloAdv("Alex", "Pelan") => Hello Alex Pelan
*/
function sayHelloAdv(first, last) {
  return sayHello(first)+ " " + last;
}

/*
  Return a string that will display how many points a player made
  ie:
    playerStats("Steph Curry", 32") => Steph Curry made 32 points
    playerStats("Meghan", 12) => Meghan made 12 points
*/
function playerStats(player, points) {
  return player+ " " + "made " + points + " points";
}

/*
  Return a number that will be the total score in points made
  ie:
    calculateScore(1, 0) => 2
    calculateScore(0, 1) => 3
    calculateScore(8, 6) => 34
*/
function calculateScore(twoPointersMade, threePointersMade) {
  return twoPointersMade * 2 + threePointersMade * 3;
}

/*
  Calculates the totalScore a player has made
  Then return a string that will display the total score a player made
  ie:
    playerStatsAdv("Steph Curry", 6, 7) => "Steph Curry made 33 points"
    playerStatsAdv("Meghan", 4, 2) => "Meghan made 14 points"
*/
function playerStatsAdv(player, twoPointersMade, threePointersMade) {
  var points = calculateScore(twoPointersMade, threePointersMade);
  var results= playerStats(player, points);
  return results;
}
