const UseRepository = require('../repositories/userRepository');
const UserService = require('../services/userService');
const { join } = require('path');
const filename = join(__dirname, '../../database', 'data.json');
const generateInstance = () => {
  const userRepository = new UseRepository({
    file: filename
  })
  const userService = new UserService({
    userRepository
  })

  return userService;
}

module.exports = { generateInstance };

/* generateInstance().find().then(console.log); */