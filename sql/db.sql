-- Database schema for Lexpin Library
-- Run the commands one by one in the MySQL client

/* Initializing the Lexpin Library database */

-- Create the database if it does not exist
CREATE DATABASE IF NOT EXISTS lexpin_library;

-- Use the database
USE lexpin_library;

-- Table publishers
CREATE TABLE IF NOT EXISTS publishers (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address TEXT,
    registered_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    is_active TINYINT(1) NOT NULL DEFAULT 1
);

-- Table authors
CREATE TABLE IF NOT EXISTS authors (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    bio TEXT,
    birth_date DATE,
    registered_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    is_active TINYINT(1) NOT NULL DEFAULT 1
);

-- Table books
CREATE TABLE IF NOT EXISTS books (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    isbn CHAR(13) UNIQUE,
    pages INT UNSIGNED,
    price DECIMAL(10, 2),
    abstract TEXT,
    publisher_id INT UNSIGNED,
    published_date DATE,
    registered_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    is_active TINYINT(1) NOT NULL DEFAULT 1,
    -- Foreign key restraint a one-to-many relationship between publishers and books
    FOREIGN KEY (publisher_id) REFERENCES publishers (id)
);

-- Table books_authors
-- This table establishes a many-to-many relationship between books and authors
CREATE TABLE IF NOT EXISTS books_authors (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    book_id INT UNSIGNED NOT NULL,
    author_id INT UNSIGNED NOT NULL,
    FOREIGN KEY (book_id) REFERENCES books (id),
    FOREIGN KEY (author_id) REFERENCES authors (id)
);

/* Insert sample data into the Lexpin Library database */

-- Insert sample data
INSERT INTO
    publishers (name, address)
VALUES (
        'O\'Reilly Media',
        '1005 Gravenstein Highway North, Sebastopol, CA 95472'
    ),
    (
        'Penguin Random House',
        '1745 Broadway, New York, NY 10019'
    ),
    (
        'HarperCollins',
        '195 Broadway, New York, NY 10007'
    );

INSERT INTO
    authors (name, bio, birth_date)
VALUES (
        'Douglas Crockford',
        'American computer programmer and entrepreneur, known for his work on JavaScript.',
        '1955-01-01'
    ),
    (
        'Martin Fowler',
        'British software developer, author, and international public speaker on software development.',
        '1963-12-18'
    ),
    (
        'Robert C. Martin',
        'American software engineer and author, known for his work on software design principles.',
        '1952-12-05'
    ),
    (
        'Ludwig Wittgenstein',
        'Austrian-British philosopher who worked primarily in logic, the philosophy of mathematics, the philosophy of mind, and the philosophy of language.',
        '1889-04-26'
    ),
    (
        'Tolkien',
        'English writer, poet, philologist, and academic, best known for authoring the high-fantasy works The Hobbit and The Lord of the Rings.',
        '1892-01-03'
    );

INSERT INTO
    books (
        title,
        isbn,
        pages,
        price,
        abstract,
        publisher_id,
        published_date
    )
VALUES (
        'JavaScript: The Good Parts',
        '9780596517748',
        176,
        34.99,
        'A deep dive into the elegant and effective features of JavaScript.',
        1,
        '2008-05-15'
    ),
    (
        'Refactoring: Improving the Design of Existing Code',
        '9780134757599',
        448,
        54.99,
        'A practical guide to improving code structure without changing behavior.',
        2,
        '2018-11-20'
    ),
    (
        'Clean Code',
        '9780132350884',
        464,
        49.99,
        'A handbook of agile software craftsmanship with principles for writing maintainable code.',
        1,
        '2008-08-11'
    ),
    (
        'Philosophical Investigations',
        '9780631231271',
        592,
        29.99,
        'A foundational philosophical work on language, meaning, and mind.',
        3,
        '1953-01-01'
    ),
    (
        'The Hobbit',
        '9780547928227',
        300,
        19.99,
        'A fantasy novel following Bilbo Baggins on an unexpected adventure.',
        2,
        '1937-09-21'
    );

INSERT INTO
    books_authors (book_id, author_id)
VALUES (1, 1),
    (1, 2),
    (2, 1),
    (3, 3),
    (3, 2),
    (3, 5),
    (4, 4),
    (4, 1),
    (5, 5);

/* Demonstration queries */

-- List all books with their authors and publishers
SELECT
    books.id AS book_id,
    books.title AS title,
    books.isbn AS isbn,
    books.pages AS pages,
    books.price AS price,
    books.abstract AS abstract,
    publishers.name AS publisher,
    books.published_date AS published_date,
    -- Field with syntax: Author 1, Author 2, ..., Author N
    GROUP_CONCAT(authors.name SEPARATOR ', ') AS authors
FROM
    books
    LEFT JOIN publishers ON books.publisher_id = publishers.id
    LEFT JOIN books_authors ON books.id = books_authors.book_id
    LEFT JOIN authors ON books_authors.author_id = authors.id
GROUP BY
    books.id;

-- Note: Also study RIGTH JOIN and INNER JOIN

/*
Exercises (CREATE DATABASES)
1. Create a database schema for a school, including tables for students, teachers and classes.
2. Define the following relationships: a student can enroll in many classes, a teacher can teach many classes, and each class can have many students and one teacher.

Exercises (CREATE - FROM THIS PROJECT)
1. Create three new publishers.
2. Create three new authors.
3. Create five new books and associate them with the new publishers and authors.

Exercises (READ - FROM THIS PROJECT)
1. List all authors along with the number of books they have written. - >:3
2. Find all books published by 'O\'Reilly Media'.
3. List all books along with their publisher and authors, but only include books that have more than one author.
4. Find all books that cost more than $30 and were published after 2010.
5. List all publishers along with the total number of books they have published.
*/