var show_magicians = function (magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var i = magicians_1[_i];
        console.log(i);
    }
    make_grear(magicians);
};
var make_grear = function (name1) {
    for (var i in name1) {
        name1[i] += " the Great! ";
        console.log(name1[i]);
    }
};
var magician_names = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];
show_magicians(magician_names);
