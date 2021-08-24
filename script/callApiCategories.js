const CATEGORIES_URL = "https://fakestoreapi.com/products/categories";
fetchCategories();

function fetchCategories() {
  fetch(`${CATEGORIES_URL}`)
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
    })
    .then(function (json) {
      handleDataCategories(json);
    });
}

function handleDataCategories(json) {
  const navCategoriesDOM = document.getElementById("categories");
  for (let ele of json) {
    navCategoriesDOM.innerHTML += `<li categoryName="${ele}">${ele}</li>`;
  }
}
