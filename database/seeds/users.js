const bcrypt = require('bcryptjs');
const faker = require('faker');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries

  const userSeeds = num => {
    const users = [];
    for (let i = 0; i < num; i++) {
      users.push({
        username: faker.internet.userName(),
        password: bcrypt.hashSync('password', 10)
      });
    }

    return users;
  };

  return knex('users')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert(userSeeds(50));
    });
};
