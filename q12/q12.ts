// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name

let names:string[]=["anas","aqeel","dua","joe"];
for(let x of names){
    console.log(`Hey! ${x} how you doin!`);
}