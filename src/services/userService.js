class UserService{
  constructor({userRepository}){
    this.userRepository = userRepository;
  }

  async find(itemId){
    return this.userRepository.find(itemId);
  }
  async create(data){
    return this.userRepository.create(data);
  }
}

module.exports = UserService;