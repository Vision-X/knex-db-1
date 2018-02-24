exports.seed = function(knex, Promise) {
    return knex('resolutions').del()
      .then(() => {
        return knex('resolutions').insert([{
            id: 1,
            dueDate: "1997-02-01",
            resolution: "Go skiing"
        },{
            id: 2,
            dueDate: "1997-05-01",
            resolution: "Do stand-up"
        },{
            id: 3,
            dueDate: "1997-09-01",
            resolution: "Start knitting"
        }]);
    })
      .then(() => {
        return knex.raw('ALTER SEQUENCE resolutions_id_seq RESTART WITH 4;');
    });
};

// //better sequence to preserve foreign key refs
//   return knex.raw(`ALTER SEQUENCE('resolutions_id_seq')
//                   RESTART WITH SELECT LAST('last_value')
//                   FROM('resolutions_id_seq');`)
// });

//Even better way per stackoverflow:
//    SET @count = 0;
//    UPDATE `users` SET `users`.`id` = @count:= @count + 1;
// If the column is used as a foreign key in other tables, make sure you use
//    ON UPDATE CASCADE instead of the default
//    ON UPDATE NO ACTION for the foreign key relationship in those tables.
//
// Further, in order to reset the AUTO_INCREMENT count,
// you can immediately issue the following statement:
//    ALTER TABLE `users` AUTO_INCREMENT = 1;
// For MySQLs it will reset the value to MAX(id) + 1.
