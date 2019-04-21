module.exports = class User {
    constructor(id, username, password) {
        this.id = id;
        this.username = username;
        this.password = password;
    }

    //We do not hash/bcrypt the password for simplicity
    //However, if we want to do it a one point, we just have to change this method
    comparePassword(password)
    {
        return password === this.password;
    }
 }