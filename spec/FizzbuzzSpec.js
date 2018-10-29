describe('fizzbuzz', function() {

  var fizzbuzz = new FizzBuzz();

  it("should have the value Fizz", function(){
    expect(fizzbuzz.Run(3)).toBe("Fizz");
  });

  it("should return Buzz", function(){
    expect(fizzbuzz.Run(5)).toBe("Buzz");
  });

  it('should return Fuzzbuzz', function() {
     expect(fizzbuzz.Run(15)).toEqual('FizzBuzz');
   });

  it("should return a number", function() {
    expect(fizzbuzz.Run(1)).toBe(1);
  });

});
