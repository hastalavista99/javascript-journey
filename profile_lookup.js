var contacts = [
    {
        "firstName": "John",
        "lastName": "Bennet",
        "number": "25474373829",
        "likes": ["Pizza", "Coding", "Roulette"]
    },
    {
        "firstName": "Kira",
        "lastName": "Monica",
        "number": "25474478238",
        "likes": ["Burgers", "Swimming", "Blackjack"]
    },
    {
        "firstName": "George",
        "lastName": "Maish",
        "number": "3834873829",
        "likes": ["Cheese", "Running", "Lakers"]
    },
    {
        "firstName": "Sarah",
        "lastName": "Sashy",
        "number": "unknown",
        "likes": ["Java", "React", "Gaming"]
    }
];

function lookUpProfile(name, prop) {
    for (var i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === name) {
            return contacts[i][prop] || "No such property"
        }
    }
    return "No such contact";
}

console.log(lookUpProfile("Sarah", "number"));

