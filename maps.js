const getAdmins = (map) => {
    let admins = [];

    for ([key, value] of map) {
        if (value === 'ADMIN') {
            admins.push(key);
        }
    }

    return admins;
};

const userRoles = new Map ();

userRoles.set('Mariana', 'SUDO');
userRoles.set('Carlos', 'ADMIN');
userRoles.set('Maria', 'ADMIN');
userRoles.set('Alice', 'USER');
userRoles.set('Roberto', 'USER');

console.log(getAdmins(userRoles));