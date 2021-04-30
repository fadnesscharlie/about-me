'use strict';
//####### 5 questions about me  ###########



// First Question
let catLower = prompt('Do you think I like Cats? Please enter Yes or No').toLowerCase();
// console.log(catLower + "1")
if (catLower === 'yes' || catLower === 'y') {
  alert('That\'s amazing! You are spot on!');
} else {
  alert('I\'m so sorry you got this wrong... You must be a dog person huh...');
}

// Second Question
let bake = prompt('Do you think I like to Bake? Please enter Yes or No').toLowerCase();
// console.log(bake + "1")
if (bake === 'yes' || bake === 'y') {
  alert('That\'s amazing! I love Pastries');
} else {
  alert('I\'m so sorry you got this wrong... You must be a dog person huh...');
}

//Third Question
let live = prompt('Do I live in Bothell, WA? Please enter Yes or No').toLowerCase();
// console.log(live + "1")
if (live === 'yes' || live === 'y') {
  alert('Your correct! I actually live in Renton!');
} else {
  alert('You... You didn\'t read... my... about me... Seriously?');
}

//Fourth Question
let outDoor = prompt('Do you think I like the outdoors? Please enter Yes or No').toLowerCase();
// console.log(outDoor + "1")
if (outDoor === 'yes' || outDoor === 'y') {
  alert('Your correct! I actually like the outdoors!');
} else {
  alert('Looks like you need to go outdoors more then me... I like going outdoors..?');
}

//Fifth Question
let catMany = prompt('Do you think I have over 10 cats? Please enter Yes or No').toLowerCase();
// console.log(catMany + "1")
if (catMany === 'yes' || catMany === 'y') {
  alert('Your correct! I do not have 10! I just have 2!');
} else {
  alert('Although it would be great to have 10, I do not have 10!');
}



//Sixth Question

// // let guessing = prompt('Pick a Number Between 1 and 10');
// // Lucky Number will be 5!
// let i;
// // if (guessing !== '5') {
// //   console.log(guessing + ' guessed first time');
// for (i = 1; i < 4; i++) {
//   let guessing = prompt('Pick a Number Between 1 and 10');
//   if (guessing === '5') {
//     alert('Your correct!');
//     console.log(guessing + ' correct');
//     break;
//   }
//   else if (guessing <= 4) {
//     // let guessing = prompt('Pick a Number Between 1 and 10');
//     alert('Your guess was too low!!');
//     console.log(guessing + ' else if under');
//   }
//   else if (guessing >= 6 && guessing <= 10) {
//     // let guessing = prompt('Pick a Number Between 1 and 10');
//     alert('Your guess was to high!');
//     console.log(guessing + ' else if high');
//   }
//   else if (guessing >= 11) {
//     // let guessing = prompt('Pick a Number Between 1 and 10');
//     alert('Your guess was over 10!');
//     console.log(guessing + ' else if over');
//   }
//   else {
//     // let guessing = prompt('Pick a Number Between 1 and 10');
//     alert('You did not pick a number!');
//     console.log(guessing + ' else');
//   }
// }
// console.log('The correct answer was 5!');
// console.log('You guessed ' + i + ' times!');
// // console.log(guesses1);





// 7th Question

// let o;
// for (o = 1; o < 6; o++) {
//   let guessing = prompt('Pick a Number Between 1 and 10');
//   if (guessing === '5') {
//     alert('Your correct!');
//     console.log(guessing + ' correct');
//     break;
//   }
// }


















//Code taken for reference. Delete when finished.
// var i;
// for (i = 0; i < cars.length; i++) {
//   text += cars[i] + "<br>";
// }



/*
// First Quiz will be if I like Cats
// eslint-disable-next-line no-unused-vars
let quizOne = function() {
  let catLower = prompt('Do you think I like Cats? Please enter Yes or No').toLowerCase();
  // console.log(catLower + "1")
  while (catLower !== 'no' && catLower !== 'yes' && catLower !== 'y' && catLower !== 'n') {
    catLower = prompt('I\'m sorry, please enter a Yes or No.');
    catLower = catLower.toLowerCase();
  // console.log(catLower + "2")
  }
  // console.log(catLower + "3")
  if (catLower === 'yes' || catLower === 'y') {
    alert('That\'s amazing! You are spot on!');
  } else if (catLower === 'no' || catLower === 'n') {
    alert('I\'m so sorry you got this wrong... You must be a dog person huh...');
  } else {
    alert('It went to else...');
  }
};

// Second Quix will be if I like to bake
// eslint-disable-next-line no-unused-vars
let quizTwo = function() {
  let bake = prompt('Do you think I like to Bake? Please enter Yes or No').toLowerCase();
  // console.log(bake + "1")
  while (bake !== 'no' && bake !== 'yes' && bake !== 'y' && bake !== 'n') {
    bake = prompt('I\'m sorry, please enter a Yes or No.');
    bake = bake.toLowerCase();
    // console.log(bake + "2")
  }
  // console.log(bake + "3")
  if (bake === 'yes' || bake === 'y') {
    alert('That\'s amazing! I love Pastries');
  } else if (catLower === 'no' || catLower === 'n') {
    alert('I\'m so sorry you got this wrong... You must be a dog person huh...');
  } else {
    alert('It went to else...');
  }
};

// Third Quiz will be if I live in bothell
// eslint-disable-next-line no-unused-vars
let quizThree = function() {
  let live = prompt('Do I live in Bothell, WA? Please enter Yes or No').toLowerCase();
  // console.log(live + "1")
  while (live !== 'no' && live !== 'yes' && live !== 'y' && live !== 'n') {
    live = prompt('I\'m sorry, please enter a Yes or No.');
    live = live.toLowerCase();
    // console.log(live + "2")
  }
  // console.log(live + "3")
  if (live === 'yes' || live === 'y') {
    alert('Your correct! I actually live in Renton!');
  } else if (live === 'no' || live === 'n') {
    alert('You... You didn\'t read... my... about me... Seriously?');
  } else {
    alert('It went to else...');
  }
};

// Fourth Quiz will be if I like outdoors
// eslint-disable-next-line no-unused-vars
let quizFour = function() {
  let outDoor = prompt('Do you think I like the outdoors? Please enter Yes or No').toLowerCase();
  // console.log(outDoor + "1")
  while (outDoor !== 'no' && outDoor !== 'yes' && outDoor !== 'y' && outDoor !== 'n') {
    outDoor = prompt('I\'m sorry, please enter a Yes or No.');
    outDoor = outDoor.toLowerCase();
    // console.log(outDoor + "2")
  }
  // console.log(outDoor + "3")
  if (outDoor === 'yes' || outDoor === 'y') {
    alert('Your correct! I actually like the outdoors!');
  } else if (outDoor === 'no' || outDoor === 'n') {
    alert('Looks like you need to go outdoors more then me... I like going outdoors..?');
  } else {
    alert('It went to else...');
  }
};

// Fifth Quiz will be if I have 10 Cats
// eslint-disable-next-line no-unused-vars
let quizFive = function() {
  let catMany = prompt('Do you think I have over 10 cats? Please enter Yes or No').toLowerCase();
  // console.log(catMany + "1")
  while (catMany !== 'no' && catMany !== 'yes' && catMany !== 'y' && catMany !== 'n') {
    catMany = prompt('I\'m sorry, please enter a Yes or No.');
    catMany = catMany.toLowerCase();
    // console.log(catMany + "2")
  }
  // console.log(catMany + "3")
  if (catMany === 'yes' || catMany === 'y') {
    alert('Your correct! I do not have 10! I just have 2!');
  } else if (catMany === 'no' || catMany === 'n') {
    alert('Although it would be great to have 10, I do not have 10!');
  } else {
    alert('It went to else...');
  }
};


*/
