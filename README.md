# NEM12 Meter Reading

This project is a Node.js application written in TypeScript that supports reading CSV data from a file or CSV string and interacts with a PostgreSQL database using Sequelize ORM. The code adheres to the SOLID principles for clean and maintainable software design.

## Features

- **Read CSV**: Supports reading CSV data either from a file or a raw CSV string.
- **ORM**: Uses Sequelize ORM to interact with PostgreSQL.
- **SOLID Principles**: Follows the SOLID principles for object-oriented design.

## Technologies Used

- **Node.js**: JavaScript runtime built on Chrome's V8 JavaScript engine.
- **TypeScript**: A superset of JavaScript that adds static typing.
- **Sequelize ORM**: A promise-based Node.js ORM for SQL databases.
- **PostgreSQL**: The relational database used for storing and retrieving data.

## Installation

To install and set up the project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/project-name.git](https://github.com/Kenneth95Lo/meterreader.git
   cd meterreader

2. Install dependencies:
   ```bash
   yarn install
   # OR
   npm install

## Running the Project

To run the project, follow these steps:

1.	Start the project using ts-run:
    ```bash
    yarn ts-run
    # OR
    npx tsx src/index.ts
    
This will start the application and execute the main logic.

## File Structure
```
   src/
 ├── classes/            # Business logic classes
 ├── controllers/        # Controllers that handle requests and responses
 ├── models/             # Sequelize models
 ├── config/             # Configuration files (e.g., database)
 └── index.ts            # Entry point for the application
