class Point4 {
    x = 10;
    y = 10;
  
    scale(n: number): number {
      this.x *= n;
      this.y *= n;
      return this.x
    }
  }
  const point1 = new Point4()
  
  console.log(point1.scale(10))  //testes feitos por mim. Nesse caso o retorno é 100.