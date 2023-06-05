//getters and setters are used to control access and set values in a class object
class Book {
    constructor(author) {
        this._author = author;
    }

    //getter
    get writer() {
        return this._author;
    }

    //setter
    set writer(updatedAuthor) {
        this._author = updatedAuthor;
    }
}

var names = new Book('amos');
let my_name = names.writer;//this accesses the getter
console.log(my_name)
