const PRODUCTS_URL = "https://fakestoreapi.com/products";

fetchProducts();

function fetchProducts() {
  fetch(`${PRODUCTS_URL}`)
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
    })
    .then(function (json) {
      handleDataProducts(json);
    });
}

function fetchProductsByCategory(category) {
  fetch(`${PRODUCTS_URL}/category/${category}`)
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
    })
    .then(function (json) {
      handleDataProducts(json);
    });
}

function handleDataProducts(json) {
  const productsDOM = document.getElementById("products");
  productsDOM.innerHTML = "";
  for (let ele of json) {
    productsDOM.innerHTML += `<div class="item item-1">
        <span class="helper"></span><img src="${ele.image}">
        <span class="price">${ele.price}$</span>
    </div>`;
  }
}

const categoriesDom = document.getElementById("categories");
categoriesDom.addEventListener("click", function (e) {
  const categoriesLiList = categoriesDom.getElementsByTagName("li");
  for (let element of categoriesLiList) {
    element.className = "";
  }
  if (e.target.tagName === "LI") {
    e.target.className = "active";
    fetchProductsByCategory(e.target.getAttribute("categoryName"));
  }
});
