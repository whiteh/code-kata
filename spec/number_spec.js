var converter = require("../number");

function testConvert(val, exp) {
  describe("Convert "+val, function(){
      it("returns '"+exp+"'", function(done){
        converter.convert(val, function(error, value){
          expect(value).toBe(exp);
          done();
        })
      })
  });
}
describe("Number conversion", function() {
  testConvert("1", "one");
  testConvert("2", "two");
  testConvert("3", "three");
  testConvert("100", "one hundred");
  testConvert("101", "one hundred and one");
  testConvert("9000", "nine thousand");
  testConvert("10000", "ten thousand");
  testConvert("90000", "ninety thousand");
  testConvert("1000000", "one million");
  testConvert("1000000000", "one billion");
  testConvert("1009000000", "one billion nine million");
});