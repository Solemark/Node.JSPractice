var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
    if(err) throw err;
    var dbo = db.db("shopdb");
    
    dbo.collection("users").drop(function(err, delOK){
        if(err) throw err;
        if(delOK) console.log("Collection deleted");
    });

    var myobj = [
        {username: "admin", password: "admin", role: "admin"},
        {username: "user1", password: "password1", role: "user"},
        {username: "user2", password: "password2", role: "user"},
        {username: "user3", password: "password3", role: "user"}
    ];

    dbo.collection("users").insertMany(myobj, function(err, res){
        if(err) throw err;
        console.log(res);
        console.log("Created " + res.insertedCount + " users");
        db.close();
    });
});