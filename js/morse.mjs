import { textToMorse } from "./morseData.mjs";

// Do the ol' switcheroo on the keys and values
const morseToText = new Map([]);
textToMorse.forEach((value, key) => {
  morseToText.set(value, key);
});

/**
 * Encode alphanumeric characters to morse code
 * @param {string} text alphanumeric characters
 * @returns {string} morse code
 */
export const encodeToMorse = (text) => {
  if (typeof text !== "string") {
    throw new Error("Input is not a string");
  }

  return text
    .split("")
    .map((character) => {
      return textToMorse.get(character.toUpperCase()) || "#";
    })
    .join(" ")
    .replace(/ +/g, " ");
};

/**
 * Decode morse code
 * @param {string} text morse code
 * @returns {string} alphanumeric characters
 */
export const decodeMorse = (text) => {
  if (typeof text !== "string") {
    throw new Error("Input is not a string");
  }

  return text
    .split("/")
    .map((word) => {
      return word
        .split(" ")
        .map((character) => {
          return morseToText.get(character);
        })
        .join("");
    })
    .join(" ");
};
