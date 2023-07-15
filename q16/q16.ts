// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.


let guestList: string[] = ["Albert Einstein", "weekend", "steve jobs"];
const guestCannotMakeIt = "Albert Einstein";
const newGuest = "Weekend";

console.log(`${guestCannotMakeIt} can't make it to the dinner.`);

const index = guestList.indexOf(guestCannotMakeIt);
if (index !== -1) {
    guestList[index] = newGuest;
}
for(const g of guestList){
console.log(`Dear ${g},`);
console.log("You are cordially invited to dinner at my place on Saturday.");}

console.log("\n");
//q16 starts here 
console.log("we've found a bigger table!");
guestList.unshift("cillian murphy");
let num=Math.floor(guestList.length/2);
guestList.splice(num,0,"maddison");
guestList.push("buzz aldrin");
for(let i of guestList){
    console.log(`Dear ${i} you are invited at my home!`);
}

export{};