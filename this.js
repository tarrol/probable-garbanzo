//Definition of an Object
class myObject {
  constructor(name) {
    this.name = name;
  }

  //Declaration of HelloWorld1 || Functional
  //With the arrow function 'logger', the if statement is able to take the parameter 'this.name' since the arrow function can not declare its own 'this'. 
  //Prints "John" to console.
  helloWorld1() {
    if (darkMode == true) {
      const logger = () => {
        console.log(this.name);
      }
      logger();
    }
  }
  //Declaration of HelloWorld2 || Nonfunctional
  //This returns a type error: because the function has created its own 'this', 'this.name' is referring to logger()'s 'this', rather than helloWorld2's 'this'.
  helloWorld2() {
    if (darkMode == true) {
      function logger() {
        console.log(this.name);
      }
      logger();
    }
  }
}

var darkMode = true;

const Object1 = new myObject("John")
Object1.helloWorld1();
Object1.helloWorld2();