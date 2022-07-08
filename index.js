// Code your solutions in this file
let countdown = 10;
while (countdown >= 0) {
  console.log(countdown--);
}

for (let age = 30; age < 40; age++) {
  console.log(`I'm ${age} years old. Happy birthday to me!`);
  debugger;
}

const gifts = ["teddy bear", "drone", "doll"];
function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
} 
wrapGifts(gifts); 


const arrayNames = ['Guadalupe', 'Ollie', 'Aki'];
const eventName = "surprise";
function writeCards(arrayNames,eventName) {   
  for (let i = 0; i < arrayNames.length; i++) {
    arrayNames[i]=`Thank you, ${arrayNames[i]}, for the wonderful ${eventName} gift!` 
debugger;
}
  return arrayNames;
}


function countDown(count) {
  let i = 0;
  while (i <= 10) {
    console.log(i);
    i++;
  }
  return count;
}

function downCount(count) {
  let i = 10;
  while (i >= 0) {
    console.log(i);
    i--;
  }
  return count;
}





