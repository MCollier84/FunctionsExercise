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