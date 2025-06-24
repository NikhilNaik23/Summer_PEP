const cartProducts = document.getElementById("cartProducts");
const cart = JSON.parse(localStorage.getItem("cart")) || [];
if (cart.length === 0) {
  document.getElementById("noCart").innerText = "No Items added in Cart";
  document.getElementById("noCart").style.color = "white";
  document.getElementById("noCart").style.textAlign = "center";
  document.getElementById("checkout").innerText = "";
  document.getElementById("checkout").style.backgroundColor = "";
  document.getElementById("checkout").style.color = "";
  document.getElementById("checkout").style.padding = "";
  document.getElementById("checkout").style.borderRadius = "";
  document.getElementById("checkout").style.fontWeight = 0;
} else {
  document.getElementById("noCart").innerText = "";
  document.getElementById("checkout").innerText = "Checkout";
  document.getElementById("checkout").style.backgroundColor = "white";
  document.getElementById("checkout").style.color = "black";
  document.getElementById("checkout").style.padding = "15px";
  document.getElementById("checkout").style.borderRadius = "15px";
  document.getElementById("checkout").style.fontWeight = 500;
}
cart.map((item) => {
  fetch(`https://fakestoreapi.com/products/${item.productId}`).then((res) => {
    res.json().then((data) => {
      cartProducts.innerHTML += `
      <div id="div${
        data.id
      }" class=" h-50 w-50 border-white border-2 rounded-xl flex flex-col md:flex-row justify-center shadow-md p-10  gap-10 md:gap-20 items-center">
      <div>
      <img class="h-48 pt-10 md:h-64" src="${data.image}"/>
      </div>
      <div>
      <h1 class="text-xl text-white md:text-xl">${data.title}</h1>
      <div class="flex justify-between">
      <div class="flex gap-3 md:gap-2">
      <span class="text-md text-white md:text-lg">Price: $${data.price}</span>
      <span class="text-md text-white md:text-lg">Quantity: ${
        item.quantity
      }</span>
      </div>
      <span class="text-md text-white md:text-lg">TotalPrice: $${
        data.price * item.quantity
      }</span>
      </div>
      <p class="text-white">&#9733; ${data.rating.rate} (${
        data.rating.count
      })</p>
      
      <div class="flex gap-3 mt-5">
      <button id="atc${data.id}"  onclick="removeFromCart(${
        data.id
      })" class="bg-white text-black rounded-xl p-2 font-medium">Remove From Cart</button>
      </div></div>
      </div>
       
      `;
    });
  });
});
