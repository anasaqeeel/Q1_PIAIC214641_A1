// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
var guestList = ["Albert Einstein", "weekend", "steve jobs"];
var guestCannotMakeIt = "Albert Einstein";
var newGuest = "Weekend";
console.log("".concat(guestCannotMakeIt, " can't make it to the dinner."));
var index = guestList.indexOf(guestCannotMakeIt);
if (index !== -1) {
    guestList[index] = newGuest;
}
console.log("Dear ".concat(guestList[0], ","));
console.log("You are cordially invited to dinner at my place on Saturday.");
