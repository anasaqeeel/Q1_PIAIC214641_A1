// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
var guestList = ["Albert Einstein", "weekend", "steve jobs"];
var guestCannotMakeIt = "Albert Einstein";
var newGuest = "Weekend";
console.log("".concat(guestCannotMakeIt, " can't make it to the dinner."));
var index = guestList.indexOf(guestCannotMakeIt);
if (index !== -1) {
    guestList[index] = newGuest;
}
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var g = guestList_1[_i];
    console.log("Dear ".concat(g, ","));
    console.log("You are cordially invited to dinner at my place on Saturday.");
}
console.log("\n");
//q16 starts here 
console.log("we've found a bigger table!");
guestList.unshift("cillian murphy");
var num = Math.floor(guestList.length / 2);
guestList.splice(num, 0, "maddison");
guestList.push("buzz aldrin");
for (var _a = 0, guestList_2 = guestList; _a < guestList_2.length; _a++) {
    var i = guestList_2[_a];
    console.log("Dear ".concat(i, " you are invited at my home!"));
}
