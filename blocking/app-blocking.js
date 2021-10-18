const {getUserSync} = require('./users/users.js');

console.log('Program start');
console.time('beginning');

const user1 = getUserSync( 1 );
console.log('First user: ', user1);

const user2 = getUserSync( 2 );
console.log('Second user: ', user2);

console.log('Program end');
console.timeEnd('beginning');