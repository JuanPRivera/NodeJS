const { getUser } = require('./users/users.js');

console.log('Program start');
console.time('beginning');


getUser( 1, ( user ) => {
    console.log('User 1:', user );
});


getUser( 2, ( user) => {
    console.log('User 2:', user );
    console.timeEnd('beginning');
});


console.log('Program end');