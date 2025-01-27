# Bank-Account-api
This RESTful API is designed to manage user accounts with basic CRUD operations. It allows users to add, update, delete, and fetch account information. The API is built using Express.js for handling requests and MongoDB as the database.

API Endpoints:

POST /account/add-account: Create a new account.

PUT /account/update-account/:accountNumber: Update account details.

DELETE /account/delete-account/:id: Delete an account by ID.

GET /account/account-info/:accountNumber: Fetch account details by account number.


