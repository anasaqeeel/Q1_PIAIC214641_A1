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
