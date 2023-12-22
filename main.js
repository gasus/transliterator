import { transliteration } from "./dist/index.js";

let MODE = "jp";

const select = document.querySelector("#select");
const input = document.querySelector("#input");
const output = document.querySelector("#output");

const changeOutput = () => {
  output.value = transliteration({ text: input.value, mode: MODE });
};

select.addEventListener("change", () => {
  MODE = select.value;
  changeOutput();
});

input.addEventListener("input", () => {
  changeOutput();
});

window.onload = () => {
  select.value = MODE;
};
