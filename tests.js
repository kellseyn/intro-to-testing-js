// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function() {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function () {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello, Jane!"', function () {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, Alex!"', function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return the string "Hello, Pat!"', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return the string "Hello, World!"', function () {
        expect(sayHello()).toBe("Hello, World!");
    });
    it('should return the string of "Hello World!" if true.', function () {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return the string of "Hello, World" is false.', function () {
        expect(sayHello(false)).toBe("Hello, World!");
    });
    it('should return the string of "Hello, World" if input is null.', function () {
        expect(sayHello(null)).toBe("Hello, World!");
    });
    it('should return the string of "Hello, World" if input empty string.', function () {
        expect(sayHello("")).toBe("Hello, World!");
    });
    it('should return the string of "Hello, World" if input is a number.', function () {
        expect(sayHello(2.3)).toBe("Hello, World!");
    });
});

describe('isFive', function() {
    it('should be a defined function', function () {
        expect(typeof isFive).toBe('function');
    });
    it('should return boolean when called', function () {
        expect(typeof isFive()).toBe('boolean')
    });
    it('should return the boolean value of true if input is 5.', function () {
        expect(isFive(5)).toBe(true);
    });
    it('should return the boolean value of true if input is "5".', function () {
        expect(isFive("5")).toBe(true);
    });
});

describe('isEven', function() {
    it('should be a defined function', function () {
        expect(typeof isEven).toBe('function');
    });
    it('should return boolean when called', function () {
        expect(typeof isEven()).toBe('boolean')
    });
    it('should return the boolean value of true if input is 2.', function () {
        expect(isEven(2)).toBe(true);
    });
    it('should return the boolean value of true if input is -4.', function () {
        expect(isEven(-4)).toBe(true);
    });
    it('should return the boolean value of false if input is 3.', function () {
        expect(isEven(3)).toBe(false);
    });
    it('should return the boolean value of false if input is "banana".', function () {
        expect(isEven("banana")).toBe(false);
    });
    it('should return the boolean value of true if input is 8.', function () {
        expect(isEven(8)).toBe(true);
    });
    it('should return the boolean value of false if input is infinity.', function () {
        expect(isEven("infinity")).toBe(false);
    });
    it('should return the boolean value of false if input is true.', function () {
        expect(isEven(true)).toBe(false);
    });
    it('should return the boolean value of false if input is false.', function () {
        expect(isEven(false)).toBe(false);
    });
    it('should return the boolean value of false if input is empty string.', function () {
        expect(isEven("")).toBe(false);
    });
});

describe('isVowel', function() {
    it('should be a defined function', function () {
        expect(typeof isVowel).toBe('function');
    });
    it('should return boolean when called', function () {
        expect(typeof isVowel()).toBe('boolean')
    });
    it('should return the boolean value of true if input is "a".', function () {
        expect(isVowel("a")).toBe(true);
    });
    it('should return the boolean value of true if input is "A".', function () {
        expect(isVowel("A")).toBe(true);
    });
    it('should return the boolean value of true if input is "y".', function () {
        expect(isVowel("y")).toBe(false);
    });
    it('should return the boolean value of true if input is "4".', function () {
        expect(isVowel(4)).toBe(false);
    });
    it('should return the boolean value of false if input is true.', function () {
        expect(isVowel(true)).toBe(false);
    });
    it('should return the boolean value of false if input is false.', function () {
        expect(isVowel(false)).toBe(false);
    });
    it('should return the boolean value of false if input is "banana".', function () {
        expect(isVowel("banana")).toBe(false);
    });
    it('should return the boolean value of false if input is empty string.', function () {
        expect(isVowel("")).toBe(false);
    });
});

describe('add', function() {
    it('should be a defined function', function () {
        expect(typeof add).toBe('function');
    });
    it('should return the sum of 2 and 3 which is 5.', function () {
        expect(add(2, 3)).toBe(5);
    });
    it('should return the sum of -3 and -9 which is -12.', function () {
        expect(add(-3, -9)).toBe(-12);
    });
    it('should return the sum of "5" and 6 which is 11.', function () {
        expect(add("5", 6)).toBe(11);
    });
    it('should return the sum of -4 and 10 which is 6.', function () {
        expect(add(-4, 10)).toBe(6);
    });
    it('should return the sum of 2 strings is not a number.', function () {
        expect(add("banana", "split")).toBe("NaN");
    });
    it('should return the sum a number and string as not a number.', function () {
        expect(add(2, "apples")).toBe("NaN");
    });
    it('should return the sum of an empty string is not a number.', function () {
        expect(add("")).toBe("NaN");
    });

});
