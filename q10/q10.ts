// Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.

//program 1
// using same string to display that in three formats lower, upper and titlecased using for loops along with str functions!
let var1: string = "anas bin aqeel";
console.log("LowerCase: " + var1.toLowerCase(), "UpperCase: " + var1.toUpperCase()+" TitleCase: " + titleCase(var1));
function titleCase(str: string): string {
  let words = str.split(' ');
  for (let i in words) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  str= words.join(' ');
  return str;
}

//program 2
//writing 4 lines which results in same output i.e 8
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);

