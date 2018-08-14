// Write your code in this file!
function scuberGreetingForFeet(rideHeight){
  if(rideHeight<=400){
    return "This one is on me!";
  }else if (rideHeight > 2000 && rideHeight <2500) {
    return "I will gladly take your thirty bucks.";
  }else {
    return 'No can do.';
  }
}


function ternaryCheckCity(city){
  city === "NYC" ? "Ok, sounds good." : "No go."
}
