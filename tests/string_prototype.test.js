const String = require("../string_prototype");
console.log(String);

describe("hasVowels", function() {
  it("should return true if the string contains a vowel", function() {
    expect("hello".hasVowels()).toBe(true);
  });

  it("should return false, if the string contains no vowels", function() {
    expect("lynch".hasVowels()).toBe(false);
  });

  it("should return boolean as type", function() {
    expect(typeof "Some String".hasVowels()).toBe("boolean");
  });
});

describe("toUpper", function() {
  it("should return the string converted to upper case", function() {
    expect("this string should be returned as uppercase".toUpper()).toBe(
      "THIS STRING SHOULD BE RETURNED AS UPPERCASE"
    );
  });

  it("should return 'string' as type ", function() {
    expect(typeof "hello world".toUpper()).toBe("string");
  });
});

describe("toLower", function() {
  it("should return the string converted to lower case", function() {
    expect(
      "HELLO, CAN YOU HELP ME CONVERT THIS GUY TO LOWER CASE".toLower()
    ).toBe("THIS STRING SHOULD BE RETURNED AS UPPERCASE");
  });

  it("should return 'string' as type ", function() {
    expect(typeof "hello world".toLower()).toBe("string");
  });
});
