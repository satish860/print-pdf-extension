function printChatToPdf() {
  const input = document.querySelector("main");
  html2pdf(input);
}

function addPrintButton() {
  const button = document.querySelector("button");
  button.innerText = "Print PDF";
  button.id = "my-extension-button";
  button.addEventListener("click", printChatToPdf);
  const header = document.querySelector("body");
  header.appendChild(button);
}

console.log("Extension Loaded");
setTimeout(() => {
  addPrintButton();
}, 2000);
