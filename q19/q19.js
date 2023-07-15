// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
// i am having ambuigity in this sir, as at the end of q17 the diners gust prob we have emptied the list
// do we need to indicate the no. of guests at each qs?
// i have assumed that at the end we have multiple guests so 
var guestList = ["Albert Einstein", "weekend", "steve jobs"];
guestList.unshift("cillian murphy");
var num = Math.floor(guestList.length / 2);
guestList.splice(num, 0, "maddison");
guestList.push("buzz aldrin");
console.log("the number of guests arriving are>>: " + guestList.length);
