# Paytm/Wallet Web Application

A full-stack wallet application built using the MERN (MongoDB, Express.js, React, Node.js) stack, Recoil for state management, Zod for schema validation, and JWT for authentication.

## Features

- User signup and login with JWT authentication
- Wallet functionality (balance management, transaction history)
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
    git clone https://github.com/an12iket/paytm-wallet.git
    cd paytm-wallet
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

- **POST** `/api/signup`: User registration
- **POST** `/api/login`: User login (returns JWT)
- **GET** `/api/wallet`: Get wallet balance (Protected)
- **POST** `/api/wallet/transaction`: Add transaction (Protected)

### Middleware

- **JWT Authentication**: Ensures protected routes are accessible only to authenticated users.

## Folder Structure
