# JWT Authentication

This is a full-stack application that implements JWT (JSON Web Token) authentication. It provides user registration, login, and protected routes functionality. The application is built using the MERN stack (MongoDB, Express.js, React, Node.js).

## Features

- User registration with email, password, and username
- User login with email and password
- Protected routes that require user authentication
- JWT-based authentication mechanism
- Secure storage of passwords using bcrypt.js
- Integration of cookies for storing and transmitting JWTs
- Toast notifications for success and error messages
- Frontend built with React and React Router
- Backend built with Express.js and MongoDB

## Installation

1. Clone the repository:

```bash
git clone https://github.com/davidjosipovic/jwt-authentication-app.git
```

2. Navigate to the project directory:

```bash
cd jwt-authentication-app
```

3. Install the dependencies for the backend:

```bash
cd backend
npm install
```

4. Install the dependencies for the frontend:

```bash
cd ../frontend
npm install
```

## Configuration

1. Create a `.env` file in the `backend` directory and provide the following environment variables:

```
PORT=4000
ATLAS_URI=<your_mongodb_connection_uri>
TOKEN_KEY=<your_secret_key_for_jwt>
```

2. Update the `origin` value in the backend's `app.js` file to match the URL of your frontend application:

```javascript
app.use(
  cors({
    origin: ["http://localhost:3000"], // Update this with your frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
```

## Usage

1. Start the backend server:

```bash
cd backend
npm start
```

2. Start the frontend development server:

```bash
cd frontend
npm start
```

3. Open your web browser and navigate to `http://localhost:3000` to access the application.

## Contributing

Contributions are welcome! If you find any issues or would like to enhance the application, feel free to submit a pull request.
