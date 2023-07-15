// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
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
// q17 starts here
console.log("\n\n");
;
console.log("attention all members i can only invite 2 people !");
var count = guestList.length;
while (count != 2) {
    var var1 = guestList.pop();
    console.log("".concat(var1, " soory you are not invited ! "));
    count--;
}
for (var _b = 0, guestList_3 = guestList; _b < guestList_3.length; _b++) {
    var name1 = guestList_3[_b];
    console.log("".concat(name1, " you are still invited to dinner !"));
}
guestList.pop();
guestList.pop();
console.log("the list is >>: " + guestList);
