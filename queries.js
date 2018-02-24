const database = require("./database-connection");

module.exports = {
    list() {
      console.log("hey dawg");
      return database('resolutions');
    },
    read(id) {
      return database('resolutions')
            .select('*')
            .where('id', id)
            .first();
    },
    create(resolution)  {
      return database('resolutions')
            .insert(resolution)
            .returning('*')
            .then(resolution => resolution[0])
    },
    update(id, resolution) {
      return database('resolutions')
            .update(resolution)
            .where('id', id)
            .returning('*')
            .then(record => record[0])
    },
    delete(id) {
      return database('resolutions')
             .select('*')
             .where('id', id)
             .del()
    }
};
