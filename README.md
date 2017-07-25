# MongoDb Books CRUD

## My MongoDB CRUD App

Aplikasi ini merupakan aplikasi database Books dengan fitur CRUD sederhana menggunakan database mongoDB.


##### List of books routes:

| Route          |  HTTP  |                 Description                    |
|----------------|:------:|:----------------------------------------------:|
| /api/books     | GET    | Get all the books                              |
| /api/books/:id | GET    | Get user based on books id                     |
| /api/books/    | POST   | Input a new books                              |
| /api/books/:id | DELETE | Delete a books                                 |
| /api/books/:id | PUT    | Update a books with new info                   |


##### Usage

npm init
npm install
node/nodemon app.js

access website via http://localhost:3000/api/books
