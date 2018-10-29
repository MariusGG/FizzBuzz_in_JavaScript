describe('fizzbuzz', function() {

  var fizzbuzz = new FizzBuzz();

  it("should return Fizzbuzz", function(){
    expect(fizzbuzz).toBe("Fizzbuzz");
  });

  it("should have the value Fizz", function(){
    expect(fizzbuzz).toBe("Fizz");
  });

  it("should return Buzz", function(){
    expect(fizzbuzz).toBe("Buzz");
  });

  it("should return a number", function() {
    expect(fizzbuzz).toBe(1);
  });

});
