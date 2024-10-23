let allProducts = document.querySelectorAll(".main-divs");
let priceDiv = document.querySelector(".price");
let close = document.querySelector(".close");
let pricePin = document.querySelector(".pricePin");
let spanAnn = document.querySelector(".span-ann");
let cart = document.querySelector(".fa-shopping-cart");
let overlay = document.querySelector(".price-container");
let btn = document.querySelector(".btn");
let priceSpan = document.querySelector(".price-span");
let container = document.querySelector (".close-Div")
let i = 1;
let totalPrice = 0;

allProducts.forEach(function (item) {
  if (item.classList.contains("discount") === true) {
    let discount = document.createElement("p");
    discount.classList.add("disc");
    let discountText = document.createTextNode("Discount 10%");
    discount.appendChild(discountText);
    item.append(discount);
  }

  item.onclick = function () {
    let li = document.createElement("li");
    let p = item.querySelector("p");
    let nweP = p.innerText;
    let x = i++;
    let price = item.getAttribute("price");
    li.innerHTML = `${x}- Book name: ${nweP} || Price: ${price} EGP `;
    spanAnn.innerHTML = x;
    if (item.classList.contains("discount") === true) {
      li.innerHTML = `${x}- Book name: ${nweP} || Price: ${price} EGP || Discount: 10%`;
      price -= 0.1 * price;
    }


    

    totalPrice += +price;

    pricePin.appendChild(li);
  };
});


btn.addEventListener("click", function () {
  priceSpan.innerHTML = " " + totalPrice + " " + "EGP";
});

cart.addEventListener("click", function () {
  overlay.style.display = "block";
  container.style.display = "block"
});

close.addEventListener("click", function () {
  overlay.style.display = "none";
  container.style.display = "none"
});

container.addEventListener("click", function () {
  overlay.style.display = "none";
  container.style.display = "none"
})
