function printChatToPdf() {
  var pdf = new jspdf.jsPDF("p", "mm", "a4");
  var elementHTML = document.querySelector("main");
  pdf.html(elementHTML, {
    callback: function (doc) {
      // Save the PDF
      doc.save("document-html.pdf");
    },
    margin: [10, 10, 10, 10],
    autoPaging: "text",
    x: 0,
    y: 0,
    width: 190, //target width in the PDF document
    windowWidth: 675, //window width in CSS pixels
  });
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
