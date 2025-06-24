let div = document.getElementById("product");
const url = window.location.search;
console.log(url);

let id = parseInt(url.split("id=")[1]);

function fetchData(i) {
  fetch(`https://fakestoreapi.com/products/${i}`).then((res) =>
    res.json().then((data) => {
      console.log(data);
      div.innerHTML = `
      <div id="div${data.id}" class=" h-full w-full flex flex-col md:flex-row justify-center shadow-md p-10  gap-10 md:gap-20 items-center">
      <div>
      <img class="h-48 pt-10 md:h-64" src="${data.image}"/>
      </div>
      <div>
      <h1 class="text-xl md:text-2xl">${data.title}</h1>
      <h4 class="text-xl md:text-2xl">$${data.price}</h4>
      <p>&#9733; ${data.rating.rate} (${data.rating.count})</p>
      
      <div class="flex gap-3 mt-5">
      <button id="atc${data.id}"  onclick="addToCart(${data.id})" class="bg-black text-white rounded-xl p-2 font-medium">Add to Cart</button>
      <button id="bn${data.id}" class="bg-black text-white rounded-xl p-2 font-medium">Buy Now</button>
      </div></div>
      </div>
       
      `;
    })
  );
}
fetchData(id);
