const apiUrl = "http://192.168.1.104:8000/api/upload";

const outputElement = document.getElementById("output");
const submitBtn = document.getElementById("submit-btn");

submitBtn.onclick = function () {
  myFunction();
};

function myFunction() {
  const fileInput = document.getElementById("fileselect").files[0];

  const prompt = document.getElementById("code").value; // Gets the text content from the textarea

  let formData = new FormData();
  formData.append("image", fileInput); // Ensure you append the file, not the input element
  formData.append("prompt", prompt);

  fetch(apiUrl, {
    method: "POST",
    body: formData, // Send formData directly without JSON.stringify
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      // Display data in an HTML element
      outputElement.textContent = JSON.stringify(data, null, 2);
    })
    .catch((error) => {
      console.error("Error:", error);
      outputElement.textContent = "Failed to process request.";
    });
}
