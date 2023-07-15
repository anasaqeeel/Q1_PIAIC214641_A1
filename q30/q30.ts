const usernames: string[] = ['admin', 'dua', 'zeshi', 'sana', 'anas'];

for (let i = 0; i < usernames.length; i++) {
  const username = usernames[i];
  
  if (username === 'admin') {
    console.log("Hello admin! Would you like to see a status report?");
  } else {
    console.log(`Hello ${username}! Thank you for logging in again.`);
  }
}
