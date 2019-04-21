module.exports = class Book {
    constructor(id, title, author, summary, type, publication_date) {
        this.id = id;
        this.author = author;
        this.title = title;
        this.summary = summary;
        this.type = type;
        this.publication_date = publication_date;
    }
}