module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/memory-1',
    seeds: {
      directory: './seeds/'
    }

  }
};
