document.getElementById("fetchButton").addEventListener("click", fetchData);

function fetchData() {
  fetch("https://s3.amazonaws.com/open-to-cors/assignment.json")
    .then((response) => response.json())
    .then((data) => displayData(data.products))
    .catch((error) => console.error("Error fetching data:", error));
}

function displayData(products) {
  const container = document.getElementById("container");
  container.innerHTML = "";

  const productList = Object.values(products);

  productList.sort((a, b) => b.popularity - a.popularity);

  productList.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    productCard.innerHTML = `
      <h3 class="product-title">${product.title}</h3>
      <p class="product-price">Price: ${product.price}</p>
      <p>Popularity: ${product.popularity}</p>
    `;
    container.appendChild(productCard);
  });
}
