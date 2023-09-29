class LibraryItem {
    constructor(bookTitle, author, itemId) {
        this.bookTitle = bookTitle;
        this.author = author;
        this.itemId = itemId;
    }
}

class Book extends LibraryItem {
    constructor(bookTitle, author, itemId, bookNumber) {
        super(bookTitle, author, itemId);
        this.bookNumber = bookNumber;
    }
}

class DVD extends LibraryItem {
    constructor(bookTitle, director, itemId) {
        super(bookTitle, director, itemId);
        this.director = director;
    }
}

class StudentLibrary {
    constructor(studentId, name) {
        this.studentId = studentId;
        this.name = name;
        this.checkedOutItems = [];
    }

    checkOutItem(item) {
        this.checkedOutItems.push(item);
    }

    returnItem(item) {
        const index = this.checkedOutItems.indexOf(item);
        if (index !== -1) {
            this.checkedOutItems.splice(index, 1);
        }
    }
}

const book1 = new Book("all about life", "james ochieng", "Bjk123", "978-3-16-148410-0");
const dvd1 = new DVD("when the sun goes down", "chinua achebe", "sd3456");
const student1 = new StudentLibrary("S12345", "stanley");

student1.checkOutItem(book1);
student1.checkOutItem(dvd1);

console.log(`Student ${student1.name} has checked out:`);
for (const item of student1.checkedOutItems) {
    console.log(`- ${item.bookTitle}`);
}

student1.returnItem(book1);

console.log(`Student ${student1.name} has returned the book.`);
console.log(`Student ${student1.name} has checked out:`);
for (const item of student1.checkedOutItems) {
    console.log(`- ${item.bookTitle}`);
}
