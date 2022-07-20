class Box<Type> {
    contents: Type;
    constructor(value: Type) { //Type está representando a informação de que qualquer tipagem pode ser inferida.
      this.contents = value;
    }
  }
   
  const b = new Box("hello!");

class MyClass {
    name = "MyClass";
    getName() {
      return this.name;
    }
  }
  const c = new MyClass();
  const obj = {
    name: "obj",
    getName: c.getName,
  };
   
  console.log(obj.getName());