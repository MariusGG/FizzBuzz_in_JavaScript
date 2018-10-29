describe('fizzbuzz', function() {

  var fizzbuzz = new FizzBuzz();

  it("should return Fizzbuzz", function(){
    expect(fizzbuzz.Run).toBe("Fizzbuzz");
  });

  it("should have the value Fizz", function(){
    expect(fizzbuzz.Run).toBe("Fizz");
  });

  it("should return Buzz", function(){
    expect(fizzbuzz.Run).toBe("Buzz");
  });

  it("should return a number", function() {
    expect(fizzbuzz.Run).toBe(1);
  });

});
