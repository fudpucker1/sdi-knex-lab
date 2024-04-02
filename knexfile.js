require('dotenv').config()

const connectionString = process.env.DB_CONNECTION_STRING; // Use dot notation - remember how process.env looked like an object?

module.exports = {
  development: {
    client: "pg",
    connection: connectionString,
  },

  staging: { // leave this unchanged

  },

  production: { // leave this unchanged

  },
};