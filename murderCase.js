// Murder Case at PLURALCODE

// let room ="";
let room1 = "ballroom"; 
let room2 = "gallery"; 
let room3 = "billiards room"; 
let room4 = "dining room";

// let weapon = "";
let weapon1 = "poison"; 
let weapon2 = "trophy"; 
let weapon3 = "pool stick"; 
let weapon4 = "knife";

// let suspect = "";
let suspect1 = "Mr. Parkes"; 
let suspect2 = "Ms. Van Cleve"; 
let suspect3 = "Mrs. Sparr"; 
let suspect4 = "Mr. Kalehoff";


let murderer = prompt("Please enter a suspect.");
if (murderer==suspect1) {
    console.log(suspect1, "did it in the", room1, "with the", weapon1);
} else if (murderer==suspect2) {
    console.log(suspect2, "did it in the", (room2), "with the", (weapon2));
} else if (murderer==suspect3) {
    console.log(suspect3, "did it in the", (room3), "with the", (weapon3));
} else if (murderer==suspect4) {
    console.log(suspect4, "did it in the", (room4), "with the", (weapon4));
} else {
    console.log ("None of the suspects is the murderer, we need to do more investigation and looks elsewhere");
};

let murderSolved = prompt("Where did the Murder take place?");
if (murderSolved==room1) {
    console.log(suspect1, "did it in the", room1, "with the", weapon1);
} else if (murderSolved==room2) {
    console.log(suspect2, "did it in the", (room2), "with the", (weapon2));
} else if (murderSolved==room3) {
    console.log(suspect3, "did it in the", (room3), "with the", (weapon3));
} else if (murderSolved==room4) {
    console.log(suspect4, "did it in the", (room4), "with the", (weapon4));
} else {
    console.log ("None of the suspects is the murderer, we need to do more investigation and looks elsewhere");
};