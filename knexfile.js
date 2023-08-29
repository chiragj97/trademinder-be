module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      user: 'postgres',
      password: '12345',
      database: 'postgres',
    },
    migrations: {
      directory: './db/migrations', // You can change this path as per your preference
    },
    seeds: {
      directory: './db/seeds', // You can change this path as per your preference
    },
  },
};
