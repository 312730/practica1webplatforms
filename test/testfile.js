const sumar = require("../index");
const assert = require("assert");
//Asserts = Afirmacion
describe("Probar la suma de dos numeros", ()=>{
  //afirmamos que cinco mas siete es 17
  it("Cinco mas siete es 12", ()=>{
    assert.equal(12, sumar(5,7));
  });
  //afirmamos que cinco mas siete son 12
  it("Cinco mas siete no es 57", ()=>{
    assert.notEqual(57,sumar(5,7));
  });
});
