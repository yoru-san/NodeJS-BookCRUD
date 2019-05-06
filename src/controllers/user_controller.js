const fileImport = require('../modules/fileReader').findAllExistingUsers;
const User = require('../models/user')

let users = [];
//Use if you want to implement user add from API
//var uniqueId;

exports.import = () => {
    fileImport().then((importedUsers) => {
        importedUsers.forEach(user => {
            users.push(new User(user.id, user.username, user.password));
        });
        //uniqueId = Math.max.apply(Math, users.map(function(u) { return u.id; })) +1;
    });  
}

exports.find = (username) => {
    return users.find((u) => u.username === username);
};

exports.findById = (id) => {
    return users.find((u) => u.id === id);
};