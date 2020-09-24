class Person{
  constructor(first, last, age, gender, interests){
    this.name ={first, last};
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }

  async greeting(){
    return await Promise.resolve(`Hi! I'm ${this.name.first}`);
  }

  farewell(){
    console.log(`${this.name.first} has left the building. Bye for now!`);
  }
}

let han = new Person('Han', 'Solo', 25, 'male', ['Smuggling']);

han.greeting().then(console.log)