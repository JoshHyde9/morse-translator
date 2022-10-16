import { decodeMorse, encodeToMorse } from "./morse.mjs";

const input = document.getElementById("input");
const output = document.getElementById("output");

const MORSE_REGEX =
  /^[.-]{1,6}(?:[ ]+[.-]{1,6})*(?:[ ]\/[ ]+[.-]{1,6}(?:[ ]+[.-]{1,6})*)*$/;

input.addEventListener("keyup", () => {
  const message = input.value.trim();

  if (message.match(MORSE_REGEX)) {
    output.value = decodeMorse(message);
  } else {
    output.value = encodeToMorse(message);
  }
});
