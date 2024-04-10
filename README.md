# Arithmetic Operation API with JWT Authentication

This Node.js application provides a simple arithmetic operation API protected by JWT (JSON Web Tokens) authentication. Clients can perform basic arithmetic operations (addition, subtraction, multiplication, division) on two numbers after authenticating themselves.

## Features

- User authentication using JWT tokens
- API endpoints for addition, subtraction, multiplication, and division
- Swagger documentation for easy API reference
- Refresh token mechanism for obtaining new access tokens

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Duyoofmp/arithmetic-api.git

2. Navigate to the project directory:

   ```bash
    cd arithmetic-api

3. Install dependencies:
     ```bash
    npm install

## Usage

1. Start the server:
    change directory to src folder then:

    ```bash
    node app.js
2. Access the Swagger documentation by navigating to http://localhost:3000/api-docs in your web browser.
3. Register a user or use the provided dummy user credentials to authenticate and obtain JWT tokens.
4. Use the provided JWT token for authorization in API requests to perform arithmetic operations.


## API EndPoints
- **Login**
  `POST /auth/login` - Authenticate and obtain JWT tokens (access token and refresh token).
- **Refresh**
  `POST /auth/refresh` - Refresh the access token using the refresh token.
- **Addition**
  `POST /api/arithmetic/add` - Perform addition operation.
- **Subtraction**
  `POST /api/arithmetic/subtract` - Perform subtraction operation.
- **Multiplication**
  `POST /api/arithmetic/multiply` - Perform multiplication operation.
- **Division**
  `POST /api/arithmetic/divide` - Perform division operation.
 ## Dummy User Credentials
    ```bash
        Username: user
        Password: password
