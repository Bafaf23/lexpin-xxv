-- Database schema for Lexpin Library

-- Create the database if it does not exist
CREATE DATABASE IF NOT EXISTS lexpin_library;

-- Use the database
USE lexpin_library;

-- Create table for books
CREATE TABLE IF NOT EXISTS books (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  author VARCHAR(255) NOT NULL,
  isbn CHAR(13) UNIQUE,
  pages INT UNSIGNED,
  price DECIMAL(10,2),
  abstract TEXT,
  published_date DATE,
  registered_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  is_active TINYINT(1) NOT NULL DEFAULT 1
);