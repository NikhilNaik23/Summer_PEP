const products = document.getElementById("products");
function fetchData(i = 1) {
  fetch(`https://fakestoreapi.com/products/${i}`).then((res) => {
    res.json().then((data) => {
      console.log(data);
      products.innerHTML += `<div class=" h-full w-full flex flex-col justify-center items-center"><h1 class="text-xl text-white">${data.title}</h1><br><img src=${data.image} class="h-48"></img><br><h4 class="text-white">$${data.price}</h4><p class="text-white text-xs">&#9734;${data.rating.rate}(${data.rating.count})</p><p class="text-white text-xs">${data.description}</p>
      <div class="flex gap-3">
      <button id="atc${data.id}" class="bg-white rounded-xl p-2 font-medium">Add to Cart</button>
      <button id="bn${data.id}" class="bg-white rounded-xl p-2 font-medium">Buy Now</button>
      </div></div>`;
    });
  });
}
for (let i = 1; i <= 12; i++) {
  fetchData(i);
}
