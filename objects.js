function Person(first, last, age,gender, interests){
  this.name = {
    first: first,
    last: last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
  var  pronoun;


  if(this.gender == 'Male' || this.gender == 'M' || this.gender== 'm'){
    pronoun = 'He'
  } else if(this.gender == 'female' || this.gender == 'f' || this.gender== 'f') {
    pronoun = 'She'
  }else{
    pronoun = 'they'
  }

  this.bio = function(){
    alert(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old.'+ pronoun  + this.interests[0] + ' and ' + this.interests[1] + '.');
  };
  this.greeting = function(){
    alert('Hi! I\'m ' + this.name.first + '.');
  };
 }


let person1 = new Person("shiva","kumar",34, 'male',['music','cycling'])

let person2 = new Person("bhamila","A", 28, 'f',['music','crocheting'])
Person.prototype.farewell = function(){
  alert(this.name.first + 'has left the building. Bye for now!');
};

person1.bio()
person1.greeting()

console.log(person1.interests[1])
console.log(person1.age)
console.log(person1.interests)