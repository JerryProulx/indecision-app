class Person {
  constructor(name="Anonymous", age=0){
    this.name = name;
    this.age = age;
  }
  getDescription(){
    return `${this.name} is ${this.age} year(s) old`;
  }

  getGreeting(){
    return `Hi from ${this.name}`;
  }
}

class Student extends Person {
  constructor(name, age, course="unsubscribed"){
    super(name, age);
    this.course = course;
  }
  getCourse(){
    return this.course;
  }

  hadMajor(){
    return !!this.major;
  }
  getDescription(){
    
  }
}

const helen = new Student('helen', 24, 'Mathematic');
console.log(helen.getCourse());

const john = new Student('Mathematic');
console.log(john.getGreeting());
console.log(john.hadMajor());
