# Express API

This project is a RESTful API built with Node.js. It provides a set of endpoints to manage customer wallets.

## Project Structure

The project is structured as follows:

- `api/` - Contains the main application logic.
  - `controllers/` - Contains the controller for customer wallets.
    - `customerWalletsController.js` - Handles the business logic for each endpoint.
  - `routes/` - Contains the routes for the API.
    - `customerWalletsRoutes.js` - Defines the endpoints for managing customer wallets.
  - `data/` - Contains the data for the application.
    - `customerWalletsData.json` - Stores the data for customer wallets.
- `config/` - Contains the configuration files for the application.
  - `default.json` - Default configuration file.
  - `express.js` - Express.js configuration file.
- `package.json` - Lists the project dependencies and scripts.
- `server.js` - The entry point to the application.

## API Endpoints

The API provides the following endpoints:

- `GET /api/v1/customer-wallets` - Lists all customer wallets.
- `POST /api/v1/customer-wallets` - Creates a new customer wallet.
- `DELETE /api/v1/customer-wallets/:customerId` - Deletes a customer wallet by customer ID.
- `PUT /api/v1/customer-wallets/:customerId` - Updates a customer wallet by customer ID.

## Setup

To set up the project locally, follow these steps:

1. Clone the repository.
2. Run `npm install` to install the project dependencies.
3. Run `npm start` to start the server.

Please refer to the `package.json` file for more details on scripts and dependencies.
