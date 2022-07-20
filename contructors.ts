class Point2 {
    x: number;
    y: number;
   
    // Normal signature with defaults
    constructor(x = 0, y = 0) {
      this.x = x;
      this.y = y;
    }
  }

  class Point3 {
    // Overloads
    constructor(x: number, y: string);
    constructor(s: string);
    constructor(xs: any, y?: any) {
      // TBD
    }
  }

 // @errors: 17009
class Base {
    k = 4;
  }
  
  class Derived extends Base {
    constructor() {
      super();
      // this.k=80;
    }
  }
  
  const newDerived = new Derived()
  
  console.log(newDerived.k);