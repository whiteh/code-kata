var converter = require("../number");
describe("Number conversion", function() {
  describe("Convert 1", function() {
    it("returns 'one'", function(done) {
      converter.convert("1", function (error, value) {
        expect(value).toBe("one");
        done();
      });
    });
  });
  describe("Convert 10", function() {
    it("returns 'ten'", function(done) {
      converter.convert("10", function (error, value) {
        expect(value).toBe("ten");
        done();
      });
    });
  });

  describe("Convert 19", function() {
    it("returns 'nineteen'", function(done) {
      converter.convert("19", function (error, value) {
        expect(value).toBe("nineteen");
        done();
      });
    });
  });

  describe("Convert 900", function() {
    it("returns 'nine hundred'", function(done) {
      converter.convert("900", function (error, value) {
        expect(value).toBe("nine hundred");
        done();
      });
    });
  });

  describe("Convert 912", function() {
    it("returns 'nine hundred and twelve'", function(done) {
      converter.convert("912", function (error, value) {
        expect(value).toBe("nine hundred and twelve");
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

  describe("Convert 10212", function() {
    it("returns 'ten thousand two hundred and twelve'", function(done) {
      converter.convert("10212", function (error, value) {
        expect(value).toBe("ten thousand two hundred and twelve");
        done();
      });
    });
  });

  describe("Convert 100000", function() {
    it("returns 'one hundred thousand'", function(done) {
      converter.convert("100000", function (error, value) {
        expect(value).toBe("one hundred thousand");
        done();
      });
    });
  });

  describe("Convert 1000000", function() {
    it("returns 'one million'", function(done) {
      converter.convert("1000000", function (error, value) {
        expect(value).toBe("one million");
        done();
      });
    });
  });
  describe("Convert 1000001", function() {
    it("returns 'one million and 1'", function(done) {
      converter.convert("1000001", function (error, value) {
        expect(value).toBe("one million and 1");
        done();
      });
    });
  });

});