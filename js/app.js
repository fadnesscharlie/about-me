'use strict';
//####### 7 questions about me  ###########

let correctQuest = 0;
let randomNumber = Math.floor(Math.random() * 11);
let i;
let j = 4;
let o;
let f;
let k = 6;
let correctGuess = false;
let newArray = [
  [0, 'yes', 'y'],
  [1, 'no', 'n'],
  [2, randomNumber],
  ['teriyaki', 'pho', 'thai', 'steak']
];
console.log(`Cheating message! Random Number is: ${newArray[2][1]}`);

// First Question
let catLower = prompt('Do you think I like Cats? Please enter Yes or No').toLowerCase();
if (catLower === newArray[0][1] || catLower === newArray[0][2]) {
  alert('That\'s amazing! You are spot on!');
  correctQuest++;
} else {
  alert('I\'m so sorry you got this wrong... You must be a dog person huh...');
}

// Second Question
let bake = prompt('Do you think I like to Bake? Please enter Yes or No').toLowerCase();
if (bake === newArray[0][1] || bake === newArray[0][2]) {
  alert('That\'s amazing! I love Pastries');
  correctQuest++;
} else {
  alert('You sir, need some sugar in your life! But, if you can not, I will still be friends with you.');
}

//Third Question
let live = prompt('Do I live in Bothell, WA? Please enter Yes or No').toLowerCase();
if (live === newArray[1][1] || live === newArray[1][2]) {
  alert('You... You didn\'t read... my... about me... Seriously?');
  correctQuest++;
} else {
  alert('Your correct! I actually live in Renton!');
}

//Fourth Question
let outDoor = prompt('Do you think I like the outdoors? Please enter Yes or No').toLowerCase();
if (outDoor === newArray[0][1] || outDoor === newArray[0][2]) {
  alert('Your correct! I actually like the outdoors!');
  correctQuest++;
} else {
  alert('Looks like you need to go outdoors more then me... I like going outdoors..?');
}

//Fifth Question
let catMany = prompt('Do you think I have over 10 cats? Please enter Yes or No').toLowerCase();
if (catMany === newArray[1][1] || catMany === newArray[1][2]) {
  alert('Your correct! I do not have 10! I just have 2!');
  correctQuest++;
} else {
  alert('Although it would be great to have 10, I do not have 10!');
}

//Sixth Question
// Four Attempts
for (i = 0; i < 4; i++) {
  let guessing = prompt('Pick a Number Between 1 and 10');
  j--;
  if (guessing == newArray[2][1]) {
    alert(`Your correct! ${guessing} is correct!`);
    correctQuest++;
    break;
  }
  else if (guessing <= newArray[2][1]) {
    alert(`Your guess of ${guessing} was too low!! You have ${j} guesses left`);
  }
  // else {
  else if (guessing >= newArray[2][1]) {
    alert(`Your guess of ${guessing} was too high!! You have ${j} guesses left`);
  }
}
alert(`The correct answer was ${newArray[2][1]}!`);
alert(`You guessed a total of ${i + 1} times!`);

// 7th Question
// Six attempts
for (o = 1; o <= 6; o++) {
  k--;
  if (correctGuess) {
    break;
  }
  let guessing = prompt('What do you think might be one of my favorite foods?').toLowerCase();
  for (f = 0; f < newArray[3].length; f++) {
    if (guessing === newArray[3][f]) {
      alert(`Your guess of ${guessing} is correct! Nicely done!`);
      correctQuest++;
      correctGuess = true;
      break;
    }
  }
  if (guessing === newArray[3][f]) {
    continue;
  }
  else {
    alert(`Your answer ${guessing} is wrong, please pick again! You have ${k} guesses left`);
  }
}

alert(`The correct answers are: ${newArray[3]}`);
alert(`The amount of questions answered correctly was ${correctQuest}`);
