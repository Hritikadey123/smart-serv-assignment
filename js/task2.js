let jsonData = null;

document
  .getElementById("fileInput")
  .addEventListener("change", function (event) {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = function (e) {
        try {
          jsonData = JSON.parse(e.target.result);
          alert("Data imported successfully!");
        } catch (error) {
          alert("Error parsing JSON file. Please make sure the file is valid.");
        }
      };

      reader.readAsText(file);
    }
  });

function addField() {
  const availableFields = document.getElementById("availableFields");
  const displayedFields = document.getElementById("displayedFields");

  for (let i = 0; i < availableFields.options.length; i++) {
    const option = availableFields.options[i];

    if (option.selected) {
      displayedFields.add(new Option(option.text, option.value));
    }
  }
}

function removeField() {
  const availableFields = document.getElementById("availableFields");
  const displayedFields = document.getElementById("displayedFields");

  for (let i = 0; i < displayedFields.options.length; i++) {
    const option = displayedFields.options[i];

    if (option.selected) {
      availableFields.add(new Option(option.text, option.value));
      displayedFields.remove(i);
      i--;
    }
  }
}

function displayData() {
  if (jsonData != null) {
    const displayedFields = Array.from(
      document.getElementById("displayedFields").options
    ).map((option) => option.value);
    const productsArray = Object.values(jsonData.products);

    const orderedProducts = productsArray.sort(
      (a, b) => b.popularity - a.popularity
    );
    console.log(orderedProducts);

    const table = document.createElement("table");
    const headerRow = table.insertRow();

    displayedFields.forEach((field) => {
      const th = document.createElement("th");
      th.textContent = field.charAt(0).toUpperCase() + field.slice(1); // Capitalize the first letter
      headerRow.appendChild(th);
    });

    orderedProducts.forEach((product) => {
      const row = table.insertRow();
      displayedFields.forEach((field) => {
        const cell = row.insertCell();
        cell.textContent = product[field];
      });
    });

    const newWindow = window.open();
    newWindow.document.write(
      "<html><head><title>Product Display</title><style>table { width: 100%; border-collapse: collapse; margin-top: 20px;}table, th, td { border: 1px solid #ddd;}th, td {   padding: 10px; text-align: left;}th {   background-color: #f2f2f2;}</style></head><body>"
    );
    newWindow.document.write("<h2>Product Display</h2>");
    newWindow.document.write(table.outerHTML);
    newWindow.document.write("</body></html>");
  }
}
