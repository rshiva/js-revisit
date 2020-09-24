class Person{
  constructor(first,last,age, gender, interests){
    this.name = {first,last};
    this,age =  age;
    this.gender = gender;
    this.interests = interests;

  }

  greeting(){
    console.log(`Hi! I'm ${this.name.first}`);
  }
  
  farewell(){
    console.log(`${this.name.first} has left the building. Bye for now!`);
  }
}


let han = new Person('Han', 'Solo', 25, 'male', ['Smuggling']);
han.greeting();

let leia = new Person('Leia', 'Organa', 19, 'female', ['Government']);
leia.farewell();

class Teacher extends Person{
  constructor(first, last, age, gender, interests,subject, grade){
    super(first, last, age, gender, interests);
    this._subject = subject;
    this.grade =  grade;

  }

  get subject(){
    return this._subject;
  }

  set subject(newSubject){
    this._subject = newSubject;
  }
}

let snape = new Teacher('Severus', 'Snape', 58, 'male', ['Potions'], 'Dark arts', 5);

snape.greeting();
snape.farewell();
console.log(snape.age);
console.log(snape.subject);