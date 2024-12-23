# Paytm/Wallet Web Application

A full-stack wallet application built using the MERN (MongoDB, Express.js, React, Node.js) stack, Recoil for state management, Zod for schema validation, and JWT for authentication.

## Features

- User signup and login with JWT authentication
  
![screenshot](images/Signup.png)

- Wallet functionality (balance management, transaction history)
  
![screenshot](images/Dashboard.png)

![screenshot](images/Send.png)

- Secure data handling using Zod validation
- MongoDB for persistent data storage
- Recoil for global state management in the frontend
- API routes secured with middleware

## Tech Stack

### Frontend
- **React**: For building the user interface
- **Recoil**: For state management
- **Zod**: For form validation and input sanitization

### Backend
- **Node.js**: Server-side JavaScript runtime
- **Express.js**: Web framework for building APIs
- **JWT (JSON Web Token)**: For user authentication
- **Mongoose**: Object Data Modeling (ODM) library for MongoDB
- **MongoDB**: NoSQL database for data persistence

## Project Setup

### Prerequisites

Ensure that you have the following installed:
- Node.js: [https://nodejs.org/](https://nodejs.org/)
- MongoDB: [https://www.mongodb.com/](https://www.mongodb.com/)
- Git: [https://git-scm.com/](https://git-scm.com/)

### Backend Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/An12iket/paytm-Wallet.git
    cd paytm-Wallet
    ```

2. Install backend dependencies:
    ```bash
    cd backend
    npm install
    ```

3. Create a `.env` file in the backend directory and add the following variables:
    ```env
    MONGO_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    ```

4. Start the backend server:
    ```bash
    npm start
    ```

### Frontend Setup

1. Navigate to the frontend directory and install dependencies:
    ```bash
    cd frontend
    npm install
    ```

2. Start the React frontend:
    ```bash
    npm start
    ```

3. Open your browser and navigate to `http://localhost:3000`.

## API Routes

- **POST** `/api/v1/user/signup`: User registration
- **POST** `/api/v1/user/signin`: User login (returns JWT)
- **GET** `/api/v1/account/balance`: Get wallet balance (Protected)
- **POST** `/api/v1/account/send`: Add transaction (Protected)

### Middleware

- **JWT Authentication**: Ensures protected routes are accessible only to authenticated users.

## Contributing

Feel free to fork this project, create new features, or report issues by opening a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
