# Bank-Account-api
This RESTful API is designed to manage user accounts with basic CRUD operations. It allows users to add, update, delete, and fetch account information. The API is built using Express.js for handling requests and MongoDB as the database.
eatures:
Create an Account: Add a new account by providing user details such as name, account number, email, phone, and balance.
Update Account: Modify an existing account's details based on the account number.
Delete Account: Remove an account by its unique account number.
Fetch Account Info: Retrieve account details using the account number.
API Endpoints:
POST /account/add-account: Create a new account.
PUT /account/update-account/:accountNumber: Update account details.
DELETE /account/delete-account/:id: Delete an account by ID.
GET /account/account-info/:accountNumber: Fetch account details by account number.
How to Use:
Clone the repository:
bash
Copy
Edit
git clone https://github.com/yourusername/repository-name.git
Install dependencies:
bash
Copy
Edit
npm install
Run the server:
bash
Copy
Edit
npm start
Use Postman or any API testing tool to interact with the endpoints.

Technologies Used:
Node.js with Express.js for server-side logic.
MongoDB for data storage and Mongoose for database interaction.

