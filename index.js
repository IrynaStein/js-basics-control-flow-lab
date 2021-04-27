
function scuberGreetingForFeet(distance){
  if (distance <= 400){
    return ('This one is on me!');
  } else if (distance >2000 && distance <2500){ //revisit this and add the && so it incorporates 2000 distance
    return ('I will gladly take your thirty bucks.');
} else if (distance >=2500){
  return ('No can do.');
}
}
scuberGreetingForFeet(199);


  // Write your code here!
function ternaryCheckCity(cityName){
  return (cityName === 'NYC') ? "Ok, sounds good.": "No go.";
}
ternaryCheckCity ('NYC');

  // Write your code here!

function switchOnCharmFromTip(tipMessage){
  switch (tipMessage){
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default: 
      return 'Bye.';
  }
};
