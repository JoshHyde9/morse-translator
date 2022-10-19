import { decodeMorse, encodeToMorse } from "../morse.mjs";

describe("Encode English test", () => {
  it("should error passing in anything but a string", () => {
    expect(() => {
      checkType([]);
    }).toThrow("Input is not a string");

    expect(() => {
      checkType({ name: "Josh" });
    }).toThrow("Input is not a string");
  });
});

const checkType = (input) => {
  if (typeof input !== "string") {
    throw new Error("Input is not a string");
  }

  return input;
};
