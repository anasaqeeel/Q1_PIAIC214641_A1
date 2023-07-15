let current_users: string[] = ['ali', 'fatima', 'ahmed', 'ayesha', 'omar'];
let new_users: string[] = ['ali', 'zainab', 'ahmed', 'mehreen', 'saad'];

for (let i = 0; i < new_users.length; i++) {
  let new_username = new_users[i].toLowerCase();

  if (current_users.includes(new_username)) {
    console.log(`Sorry, the username '${new_users[i]}' is already taken. Please enter a new username.`);
  } else {
    console.log(`Congratulations! The username '${new_users[i]}' is available.`);
  }
}
