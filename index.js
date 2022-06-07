function scuberGreetingForFeet(ride){
  if (ride <= 400){
    return ("This one is on me!");
  } else if(ride > 400, ride < 2000 ){
    return ("That will be twenty bucks.");
  } else if (ride <= 2500) {
    return ("I will gladly take your thirty bucks.");
  }else if (ride > 2500){
    return ("No can do.");
  }
  return ride
}
function ternaryCheckCity(city){
  // Write your code here

  return ((city === "NYC") ? 'Ok, sounds good.' : 'No go.');
}

function switchOnCharmFromTip(greeting){
  // Write your code here

  switch(greeting){
  case"generous":
      return "Thank you so much.";
  case"not as generous":
    return "Thank you.";
  default:
    return "Bye.";
}
}


scuberGreetingForFeet(199);
scuberGreetingForFeet(1500);
scuberGreetingForFeet(2001);
scuberGreetingForFeet(2501);

ternaryCheckCity("NYC");
ternaryCheckCity("Pittspurgh");

switchOnCharmFromTip('generous');
switchOnCharmFromTip("not as generous");
scuberGreetingForFeet();


