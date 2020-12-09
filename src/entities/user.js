class User {
  constructor({ id, name }){
    this.id = id;
    this.name = name;
  }

  isValid(){
    const propertyNames = Object.getOwnPropertyNames(this);
    const amountInvalid = propertyNames
      .map(property => (!!this[property]) ? null : `${property} is missing!`)
      .filter(item => !!item);
    
    return {
      valid: amountInvalid.length === 0,
      error: amountInvalid
    }
  }
}

module.exports = User;

/* const user = new User({id: 5, name: "Paulo"});
console.log('valid', user.isValid());
console.log('valid', user); */