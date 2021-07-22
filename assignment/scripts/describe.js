// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We declare a variable called name and set it to the string Dane
// If the string variable name is 'Mary', we console log 'Hi,Mary!'
// Otherwise, we console log 'How do you do?'
//
// In this case, because variable name is Dane, not Mary,
//    we console log 'How do you do?'

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We declare a variable called secret (but do not assign it)
// We declare variable code and assign it to 123 (number)
// If the code is 123 (must be number and not string because strict conditional)
//    then variable secret is assigned to string 'super' and variable code
//    is multiplied by 2, equaling 246. Code is now 246
// If variable code is greater than number 250 at this point,
//    variable secret would assigned string 'duper'
//
// Because variable code is still 246, which is less than 250,
//    we console log 'super'

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We declare variable isStudent and assign boolean value true
// We declare variable age and assign number 34
// We declare variable zip and assign number 55407
// if variable isStudent is boolean value true AND num value zip is greater
//    than 80000, we console log 'You're a student on the West Coast!
// Otherwise, if isStudent is boolean value false and the student is under
//    30 years old, we console log 'What are your hobbies?'
// Otherwise, if iStudent is boolean value true, we console log 'Welcome
//    to prime!'
// If none of the above are accurate, we console log 'How about the weather?'
//
// In this case, we console log 'Welcome to Prime!'

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/

// ----------------------------------------------------------------
//    NOTE TO SELF - putting these lines here as placeholders
// ----------------------------------------------------------------


// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'

/*

// FIX - colorOne should be set to 'blue' as instructed
// Also, colorTwo should be set to 'red' as instructed
// They are reversed
//
// It should be as follows:
//     let colorOne = 'blue';
//     let colorTwo = 'red';

let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

// FIX - as instructions suggest, in addition to colorOne being set to
//    string 'purple, colorTwo should ALSO be set to string 'purple'

if (mix === true) {
  colorOne = 'purple';
// should also include the following:
  colorTwo = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

/*

// FIX - instructions suggest time is a variable, but time is constant
// to follow instructions, the second delcaration and assignment should be:
// let time = 4;

let temp = 40;
const time = 4;

// FIX - two pipes means EITHER can be correct. Instructions must change
//    to "OR if time is greater/equal to 4"
//    ...otherwise, || needs to become  && as follows:
//    if (temp > 39 && time >=4)

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- it is, so we console.log 'enter'.

// FIX - While age is indeed a variable as instructed, minAge is a constant

/*
let age = 21;
// as instructed, the following should be:
// let minAge = 21;
const minAge = 21;

// FIX - instructions that 'we see if age is greater than or equal to min age'
//    This is accurate but a bit misleading. I would use instruction "we check
//    if minAge is less than or equal to age" as represented more
//    accurately in the code

// I would replace the following with:
// if (age >= minAge)
if(minAge <= age) {
  console.log('no entry');

// FIX - instructions are correct about age being equal to minAge, but
//    console log output is incorrect.
//    we would actually console log 'no entry'
//    To follow instructions, switch the two console log results (no entry and enter)

} else {
  console.log('enter');
}
*/

// FINAL NOTE - I spent a little time on researching var vs let vs const
// Beyond the week 2 videos, I looked here:
// https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/
// I do hope my mentions in the above fixes of let vs const are accurate!
// Very interested in feedback on this.
