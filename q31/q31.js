var usernames = ['admin', 'dua', 'zeshi', 'sana', 'anas'];
while (usernames.length != 0) {
    usernames.pop();
}
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (var i = 0; i < usernames.length; i++) {
        var username = usernames[i];
        if (username === 'admin') {
            console.log("Hello admin! Would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(username, "! Thank you for logging in again."));
        }
    }
}
