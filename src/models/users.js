class User {

    constructor(id, username, password) {
        this.id = id;
        this.username = username;
        this.password = password;
    }

    comparePassword(password)
    {
        return password === this.password;
    }

 }

var users = [];
var uniqueId = 1;

exports.import = () => {
    //récupère le fichier json

    var importedUsers = [
        new User(1, "root", "root"),
        new User(2, "user", "secret"),
    ]

    importedUsers.forEach(user => {
        users.push(user);
    });

    uniqueId = Math.max.apply(Math, users.map(function(u) { return u.id; })) +1;
}

exports.find = (username) => {
    return users.find((u) => u.username === username);
};

exports.findById = (id) => {
    return users.find((u) => u.id === id);
};