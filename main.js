import { transliteration } from "./dist/index.js";

let MODE = "jp";

const select = document.querySelector("#select");
const input = document.querySelector("#input");
const output = document.querySelector("#output");
const copyBtn = document.querySelector("#copy");

const changeOutput = () => {
  output.value = transliteration({ text: input.value, mode: MODE });
  copyBtn.style.visibility = output.value.length ? "visible" : "hidden";
};

select.addEventListener("change", () => {
  MODE = select.value;
  changeOutput();
});

input.addEventListener("input", () => {
  changeOutput();
});

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(output.value);
  copyBtn.style.visibility = "hidden";
});

window.onload = () => {
  select.value = MODE;
};
