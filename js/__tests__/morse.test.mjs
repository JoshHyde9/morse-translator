import { decodeMorse, encodeToMorse } from "../morse.mjs";

describe("Encode English test", () => {
  it("should error passing in anything but a string", () => {
    expect(() => decodeMorse([])).toThrowError("Input is not a string");

    expect(() => decodeMorse({ name: "Josh" })).toThrowError(
      "Input is not a string"
    );
  });

  it('should encode "Hello, World!" correctly', () => {
    expect(encodeToMorse("Hello, World!")).toBe(
      ".... . .-.. .-.. --- --..-- / .-- --- .-. .-.. -.. -.-.--"
    );
  });

  it('should encode "Hello [] World!" correctly', () => {
    expect(encodeToMorse("Hello [] World!")).toBe(
      ".... . .-.. .-.. --- / # # / .-- --- .-. .-.. -.. -.-.--"
    );
  });
});

describe("Decodes Morse Code correctly", () => {
  it("should error passing in anything but a string", () => {
    expect(() => decodeMorse([])).toThrowError("Input is not a string");

    expect(() => decodeMorse({ name: "Josh" })).toThrowError(
      "Input is not a string"
    );
  });

  it("should decode Morse Code to English correctly", () => {
    expect(
      decodeMorse(".... . .-.. .-.. --- --..-- / .-- --- .-. .-.. -.. -.-.--")
    ).toBe("HELLO, WORLD!");
  });
});
