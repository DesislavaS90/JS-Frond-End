function login(usernames) {

   const correctUsername = usernames.shift();

   for (let i = 0; i < usernames.length; i++) {
    let currentUsername = usernames[i];
    let reversedUsername = currentUsername.split('').reverse().join('');

    if (i === 4 - 1 && reversedUsername !== correctUsername) {
        console.log(`User ${correctUsername} blocked!`);
        break
    }

    if (reversedUsername === correctUsername) {
        console.log(`User ${correctUsername} logged in.`);
    } else {
        console.log(`Incorrect password. Try again.`);
    }
   }   
}

// login(['Acer','login','go','let me in','recA'])
login(['sunny','rainy','cloudy','sunny','not sunny'])