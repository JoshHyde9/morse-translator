import { decodeMorse, encodeToMorse } from "./morse.mjs";

const text = document.getElementById("text");
const output = document.getElementById("output");

const MORSE_REGEX =
  /^[.-]{1,6}(?:[ ]+[.-]{1,6})*(?:[ ]\/[ ]+[.-]{1,6}(?:[ ]+[.-]{1,6})*)*$/;

text.addEventListener("keyup", () => {
  const message = text.value.trim();

  if (message.match(MORSE_REGEX)) {
    output.value = decodeMorse(message);
  } else {
    output.value = encodeToMorse(message);
  }
});
