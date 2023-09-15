class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  };

  showContext() {
    function declaredFunc() {
      console.log(this)
    };

    declaredFunc();

    const arrowFunc = () => {
      console.log(this)
    };

    arrowFunc();
  };
};

const newPerson = new Person('Alex', 30);

newPerson.showContext();