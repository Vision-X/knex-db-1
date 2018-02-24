require('dotenv').load();

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/memory-1',
    seeds: {
      directory: './seeds/'
    }
  },
  production: {
    client: 'pg',
    connection: `${process.env.DATABASE_URL}?ssl=true`
  }
};
