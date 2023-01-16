document.write("\n\n ------- JS Basics and Debugging Challenge -------\n<br><br>");
        
// The following 2 lines both have errors in them
const lessonOne = "Lesson 1: Logging a String to the console <br>"
const hiWorld = "Hello world!<br>"
document.write(lessonOne);
document.write(hiWorld);

document.write("\n");

// There is are 2 errors in the following lines
const lessonTwo = "Lesson 2: This is how you create a variable:<br>"
document.write(lessonTwo);
let number = 86;
document.write(number);

document.write("\n");

// The plus sign is not showing, debug this and have it appear inside the String
const plusShow = "<br>Lesson 3 is concatinating Strings using the + sign.<br><br>" 
document.write(plusShow);

// These variables are undefined and breaking the String that is using them 
let concatString = 'Mathew ';
let concatVar = 'Riddle';
const fullName = (concatString) + " " + concatVar;
document.write(fullName);
document.write("<br><br>You can concatenate " + concatVar + " into " + concatString + " to log them into the console");