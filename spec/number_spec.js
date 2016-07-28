var converter = require("../number");
describe("Number conversion", function() {
  describe("Convert 900", function() {
    it("returns 'nine hundred'", function(done) {
      converter.convert("900", function (error, value) {
        expect(value).toBe("nine hundred");
        done();
      });
    });
  });

  describe("Convert 9000", function() {
    it("returns 'nine thousand'", function(done) {
      converter.convert("9000", function (error, value) {
        expect(value).toBe("nine thousand");
        done();
      });
    });
  });

  describe("Convert 9012", function() {
    it("returns 'nine thousand and twelve'", function(done) {
      converter.convert("9012", function (error, value) {
        expect(value).toBe("nine thousand and twelve");
        done();
      });
    });
  });

});