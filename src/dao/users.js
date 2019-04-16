var users = [];

exports.import = () => {
    //récupère le fichier json

    var importedUsers = [
        {username: "root", password: "root"}, 
        {username: "user", password: "secret"}  
    ]

    importedUsers.forEach(user => {
        users.push(user);
    })
}

exports.find = (username, cb) => {
    try
    {
        var user = users.find(u => u.username === username)
        if (!user)
        {
            cb(null, null);
        }
        cb(null, user);
    }
    catch (err){
        cb(err, null)
    }

}