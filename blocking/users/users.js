const getUserSync = ( id ) => {
    const startPoint = new Date().getTime();
    while (new Date().getTime() - startPoint <= 3000 ) {
        // Esperando...
        // Haciendo fetch de base de datos...
        // Robando datos de facebook...
    }

    return {
        id,
        name: `User ${ id }`
    }; 
}


const getUser = (id, callback ) => {
    const user = {
        id,
        name: `Usuario ${ id }`
    };
    
    setTimeout(() => {
        callback( user );
    }, 3000);
}

module.exports = {
    getUser,
    getUserSync
}