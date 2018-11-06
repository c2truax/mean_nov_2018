function Foo(){
  const privateMethod = function(){
    console.log(this);
  }
  this.greet = function(){
    console.log(this);
    privateMethod();
  }
}
const joe = new Foo();
joe.greet();
