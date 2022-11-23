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

  const info = document.getElementById("message");

  if (output.value.includes("#")) {
    info.innerText =
      "Input contains unsupported characters, maybe try something else.";

    info.classList.add("visible");
  } else {
    info.classList.remove("visible");
  }
});

// Copy output box to clipboard
const button = document.getElementById("clipboard");

button.addEventListener("click", () => {
  navigator.clipboard.writeText(output.value);
});
