const User = require('./models/user');

User.hashPassword('myPlainPassword').then((hashedPassword)=> {
    console.log(hashedPassword);
});

User.verifyPassword(
    'myPlainPassword',
    '$argon2id$v=19$m=65536,t=5,p=1$ct0BiuVAG/sZs7LzKl19TA$JYkenCHG2ZMQHMWz6gb6FpUqA5Erg67NiOaCf3QmUho'
   ).then((passwordIsCorrect) => {
     console.log(passwordIsCorrect);
   });