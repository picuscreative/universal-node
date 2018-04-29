/* eslint-disable no-unused-vars */
const bcrypt = require('bcrypt');

module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [{
      email: 'johndoe@mail.com',
      password: bcrypt.hashSync('password', bcrypt.genSaltSync(8)),
    }], {});
  },

  down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  },
};
