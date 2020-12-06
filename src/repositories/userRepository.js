const {readFile, writeFile} = require('fs/promises');
class UserRepository{
  constructor({ file }){
    this.file = file
  }

  async _currentFileContent(){
    return JSON.parse(await readFile(this.file));
  }

  async find(itemId){
    const all = await this._currentFileContent();
    if(!itemId) return all

    return all.find(({id}) => itemId === id);
  }
  async create(data){
    const currentFile = await this._currentFileContent()
    currentFile.push(data)

    await writeFile(this.file, JSON.stringify(currentFile));

    return data.id;
  }

}

module.exports = UserRepository


const userRepository = new UserRepository({
  file: '../../database/data.json'
})

/* userRepository.create({id: 4, name: 'Jack'})
  .then(console.log)
  .catch(error => console.log('error', error));
 */
/* userRepository.find().then(console.log).catch(error => console.log('erro', error)); */