class Greeter {
    public greet() {
      console.log("hi!");
    }
  }
  const g = new Greeter();
  g.greet();

  class Base2 {
    private x = 0;
    public e=1
  }
  const b = new Base2();
  console.log(b.x); //x é privado, e nõ pode ser acessado de fora da função.
  console.log(b.e)  //já 'e' é public, poermitindo acesso.


  class Derived extends Base2 {
    showX() {
      // Can't access in subclasses
      console.log(this.x);
      console.log(this.e)
    }
}