const products = document.getElementById("products");
const cart =JSON.parse(localStorage.getItem('cart')) || [];
let totalItems = 0;
  for (let i of cart) {
    totalItems += i.quantity;
  }
document.getElementById("cart").innerText = totalItems;
function fetchData(i = 1) {
  fetch(`https://fakestoreapi.com/products/${i}`).then((res) => {
    res.json().then((data) => {
      console.log(data);
      products.innerHTML += `<div id="div${data.id}" class=" h-full w-full flex flex-col justify-center items-center"><a href="./product.html?id=${data.id}" class="h-full w-full flex flex-col justify-center items-center"><h1 class="text-xl text-white">${data.title}</h1><br><img src=${data.image} class="h-48"></img><br><h4 class="text-white">$${data.price}</h4><p class="text-white text-xs">&#9734;${data.rating.rate}(${data.rating.count})</p><p class="text-white text-xs">${data.description}</p>
      </a>
      <div class="flex gap-3">
      <button id="atc${data.id}" onclick="addToCart(${data.id})" class="bg-white rounded-xl p-2 font-medium">Add to Cart</button>
      <button id="bn${data.id}" class="bg-white rounded-xl p-2 font-medium">Buy Now</button>
      </div></div>`;
    });
  });
}
for (let i = 1; i <= 12; i++) {
  fetchData(i);
}
function addToCart(i) {
  const existingProduct = cart.find((item) => item.productId === i);
  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push({ productId: i, quantity: 1 });
  }
  console.log(cart);
  let totalItems = 0;
  for (let i of cart) {
    totalItems += i.quantity;
  }
  document.getElementById("cart").innerText = totalItems;
  localStorage.setItem("cart", JSON.stringify(cart));
}
