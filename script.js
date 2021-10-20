// 1
function spookyGhost(){
    console.log(`Boo!!!`);
}

spookyGhost(); // Boo!!!

console.log(`=======`);

// 2
function candy(goal){
    console.log(`${goal} ${goal} ${goal} ${goal}`); 
}

candy(`Get Candy`); // Get Candy Get Candy Get Candy Get Candy

console.log(`=======`);

// 3
function wereWolf(a, b){
    if (a === `Full` && b === `Moon`) // Will not display anything in the terminal if either side of the conditional statement is false.
    console.log(`ARH-WOOO!`);

    // Using a Ternary
  // console.log((a === `Full` && b === `Moon`) ? `ARH-WOOO!` : "");
  

}
wereWolf(`Full`, `Moon`); // ARH-WOOO!
// werewolf(`Crescent`, `Moon`); // Does NOT display anything in the terminal/console

console.log(`=======`);

// 4
function halloween(){
    return `October 31st`;
}

console.log(halloween()); // October 31st 

console.log(`=======`);

// 5
function isEnoughCandy(pieces){
    if (pieces >= 31){ // 5 >= 31
        return true;
    } else if (pieces < 31) {
        return false;
    }
    
}
console.log(isEnoughCandy(31)); // True
console.log(isEnoughCandy(5)); // False

console.log(`=========`)

// 6
function candyCounter(nums){
    let total = 0;
    for(i = 0; i < nums.length; i++){
        total += nums[i];
      }
      return total;
    
    // Using a For Of Loop
  // let total = 0;
  // for(number of nums){
  //   total += number;
  // }
  // return total;
    
    }

console.log(candyCounter([15, 23, 35]));
console.log(candyCounter([99, 199]));

console.log("=======");

// 7
const hauntedMansion = function (){
    console.log("Welcome, foolish mortals, to the Haunted Mansion!");
}
hauntedMansion();

console.log("=======");

// 8
ghostbusters = () => "Who you gonna call?";

// Using parentheses
// ghostbusters = () => (
//     `Who You Gonna Call?`
//   );

console.log(ghostbusters());

console.log("=======");

// 9
// no

// 10
// Yes

// 11a
const costumes = ["Ghost", "Princess", "Pirate"];

// 11b
// let costumeFunction = function (){
const upperCostumes = costumes.map(i => i.toUpperCase());
    console.log(upperCostumes);


console.log(`==========`);

// Bonus
// 12a

const stephenKingMovies = [
    "The Shining",
    "Christine",
    "It",
    "The Mist",
    "Creepshow",
    "Pet Sematary"
  ];
  
  // 12b
  const twoMovies = stephenKingMovies.filter(i => i.length === 9);
  console.log(twoMovies); //  'Christine', 'Creepshow' ]
  
  console.log("=========");
  
  // 13a
  const halloweenSongs1 = ["Monster Mash", "Thriller"];

  // 13b
  const halloweenSongs2 = [
    "I Put A Spell On You",
    "This Is Halloween",
    "Ghostbusters"
  ];
  
  // 13c
  halloweenJukeBox = songs => {
    const random = Math.floor(Math.random() * songs.length);
    console.log(songs[random]);
  }
  
  // 13d
  halloweenJukeBox(halloweenSongs1); // Random item/song from the halloweenSongs1 array
  halloweenJukeBox(halloweenSongs2); // Random item/song from the halloweenSongs2 array

console.log("=========");

// 14
caps = string => {
    let newString = "";
    for (i = 0; i < string.length; i++){
      if (i % 2 === 0){
        newString = newString + string[i].toUpperCase();
      } else {
        newString = newString + string[i];
      }
    }
    return newString;
  }
  
  console.log(caps(`Hey`));
  
// Using the substring method (Returns part of the string between the start and end indexes that are specified. Also, if a second index is not specified the the rest of the string is included)
// caps = string => {
//     for (i = 0; i < string.length; i += 2){
//       string = string.substring(0, i) + string[i].toUpperCase() + string.substring(i + 1);
//     }
//     return string;
//   }
//   console.log(caps(`Halloween`));
  
//     string = string.substring(0, i) + string[i].toUpperCase() + string.substring(i + 1);

// This example accounts for multi word string arguments (AKA Strings with spaces)...
/*
caps = string => {
  let newString = ``;
  let num = 0;
  for (letter of string){
    if (letter !== " "){
      if (num % 2 === 0){
        newString += letter.toUpperCase();
        num++;
      } else {
        newString += letter.toLowerCase();
        num++;
      }
    } else {
      newString += letter;
    }
  }
  return newString;
}
*/

console.log(caps(`Hey`));
console.log(caps(`Halloween`));
console.log(caps(`Happy Halloween`));
