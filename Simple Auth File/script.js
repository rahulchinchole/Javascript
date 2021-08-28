var database = [
    {
        username : "Rahul",
        password : "zxcv"
    },
    {
        username : "Rio",
        password : "abcd"
    }
];

var postFeed = [
    {
        username : "Rahul",
        timeline : "Learning JS"
    },
    {
        username : "Pink",
        timeline : "Spotify is chill"
    },
    {
        username : "Rio",
        timeline : "Eating MOMOS!!"
    },
];

var usernamePrompt = prompt("username: ");
var passwordPrompt = prompt("password: ");

function varification(username, password) {
    for (var i = 0; i < database.length; i++) {
        if (database[i].username === username && database[i].password === password) {
            return true;
        }
    }
    return false;
}

function signIn(username, password) {
    if (varification(username, password)) {
        console.log(postFeed);
    } else {
        console.log("Please Enter Correct Username OR Password");
        alert("Wrong username/password");
    }
}

signIn(usernamePrompt, passwordPrompt);


