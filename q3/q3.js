var var1 = "anas bin aqeel";
console.log("LowerCase: " + var1.toLowerCase(), "UpperCase: " + var1.toUpperCase() + " TitleCase: " + titleCase(var1));
function titleCase(str) {
    var words = str.split(' ');
    for (var i in words) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    str = words.join(' ');
    return str;
}
