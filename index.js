const add1 = document.querySelector("#add1");
const add2 = document.querySelector("#add2");
const add3 = document.querySelector("#add3");
const list = document.querySelector("#list");
const coupon = document.querySelector("#coupon");
const item1 = document.querySelector("#item1");
const item2 = document.querySelector("#item2");
const item3 = document.querySelector("#item3");
const pricelist = document.querySelector("#pricelist");

const items = [
  {
    name: "Peanut butter",
    price: 250,
    stock: 10,
  },
  {
    name: "Muesli",
    price: 200,
    stock: 12,
  },
  {
    name: "Egg",
    price: 10,
    stock: 20,
  },
  {
    name: "Jam",
    price: 140,
    stock: 0,
  },
];

let sum = 0;
function display() {
  list.innerHTML = "";
  pricelist.innerHTML = "";
  console.log("Inside function");
  console.log(localStorage);
  for (const [key, value] of Object.entries(localStorage)) {
    let item = {};
    if (key === "Peanut butter") {
      item = { ...items[0] };
    } else if (key === "Muesli") {
      item = { ...items[1] };
    } else if (key === "Egg") {
      item = { ...items[2] };
    }
    console.log(item);
    console.log(key);
    let div = document.createElement("div");

    let pic = document.createElement("img");
    pic.src = "https://picsum.photos/50";

    let name = document.createElement("div");
    name.textContent = key;
    name.style.width = "100px";

    let price = document.createElement("div");
    price.textContent = `Rs ${item.price}`;
    price.style.width = "50px";
    // price.style.margin =

    let qtn = document.createElement("div");
    qtn.textContent = value;

    let btnP = document.createElement("div");
    btnP.textContent = "+";
    btnP.style.backgroundColor = "#000000";
    btnP.style.color = "#ffffff";
    btnP.style.width = "25px";
    btnP.style.height = "28px";
    btnP.style.textAlign = "center";

    let btnM = document.createElement("div");
    btnM.textContent = "-";
    btnM.style.backgroundColor = "#000000";
    btnM.style.color = "#ffffff";
    btnM.style.width = "25px";
    btnM.style.height = "28px";
    btnM.style.textAlign = "center";

    let stockEdit = document.createElement("div");
    stockEdit.appendChild(btnP);
    stockEdit.appendChild(qtn);
    stockEdit.appendChild(btnM);

    stockEdit.style.display = "flex";
    stockEdit.style.justifyContent = "space-around";
    stockEdit.style.gap = "20px";

    div.appendChild(pic);
    div.appendChild(name);
    div.appendChild(price);
    div.appendChild(stockEdit);

    div.style.display = "flex";
    div.style.justifyContent = "space-around";
    div.style.width = "400px";
    div.style.flexWrap = true;
    list.appendChild(div);

    btnM.addEventListener("click", () => {
      if (key === "Peanut butter" && (value > 9 || value < 0)) {
        return;
      }
      localStorage[key] = parseInt(value) - 1;
      display();
    });
    btnP.addEventListener("click", () => {
      localStorage[key] = parseInt(value) + 1;
      display();
    });
  }

  coupon.style.display = "flex";
  pricelist.innerHTML = "";
  let sum = 0;
  for (const [key, value] of Object.entries(localStorage)) {
    if (key === "Peanut butter") {
      sum += 250 * parseInt(value);
    } else if (key === "Muesli") {
      sum += 200 * parseInt(value);
    } else if (key === "Egg") {
      sum += 10 * parseInt(value);
    }
  }

  let div = document.createElement("div");

  let subtotal = document.createElement("div");
  subtotal.textContent = `Rs ${sum}`;

  div.appendChild(subtotal);

  pricelist.appendChild(div);
}

function calculate() {
  
}

const AddToCart1 = () => {
  if (localStorage.getItem("Peanut butter") === null) {
    localStorage.setItem("Peanut butter", 1);
  } else if (localStorage.getItem("Peanut butter") != null) {
    let stock = localStorage.getItem("Peanut butter");
    stock = parseInt(stock);
    if (stock > 9) {
      return;
    }
    stock += 1;
    localStorage.setItem("Peanut butter", stock);
  }
  display();
  calculate();
};

const AddToCart2 = () => {
  if (localStorage.getItem("Muesli") === null) {
    localStorage.setItem("Muesli", 1);
  } else if (localStorage.getItem("Muesli") != null) {
    let stock = localStorage.getItem("Muesli");
    stock = parseInt(stock);
    if (stock > 11) {
      return;
    }
    stock += 1;
    localStorage.setItem("Muesli", stock);
  }
  display();
  calculate();
};

const AddToCart3 = () => {
  if (localStorage.getItem("Egg") === null) {
    localStorage.setItem("Egg", 1);
  } else if (localStorage.getItem("Egg") != null) {
    let stock = localStorage.getItem("Egg");
    stock = parseInt(stock);
    if (stock > 19) {
      return;
    }
    stock += 1;
    localStorage.setItem("Egg", stock);
  }
  display();
  calculate();
};

add1.addEventListener("click", AddToCart1);
add2.addEventListener("click", AddToCart2);
add3.addEventListener("click", AddToCart3);

// <tbody>
//     <tr>
//       <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
//       <td>Malcolm Lockyer</td>
//       <td>1961</td>
//     </tr>
//     <tr></tr>

// function display(){
//     console.log(Ucart);
//     Ucart.forEach(e=>{
//         let div = document.createElement('div');
//         let ImgDiv = document.createElement('div');
//         let img = document.createElement('img');
//         img.src = "https://picsum.photos/50";
//         ImgDiv.appendChild(img);
//         let productname = document.createElement('div');
//         productname.textContent = e.name;
//         let counter = document.createElement('div');
//         let plus = document.createElement('div');
//         plus.textContent = "+";
//         let minus = document.createElement('div');
//         minus.textContent = "-";
//         let count = document.createElement('div');
//         count.textContent = 0;
//         counter.appendChild(plus);
//         counter.appendChild(count);
//         counter.appendChild(minus);
//         counter.style.display = "flex";

//         div.appendChild(ImgDiv);
//         div.appendChild(productname);
//         div.appendChild(counter);

//         div.style.display = "flex";
//         div.style.width = "400px"
//         div.style.justifyContent = "space-around";
//         list.appendChild(div);
//     })
// }

// add1.addEventListener('click',()=>{
//     if(cart.some(e=>e.name === 'Peanut butter')){
//         if(items[0].stock>1){
//             items[0].stock-=1;
//             cart.forEach(e=>{
//                 if(e.name === 'Peanut butter'){
//                     e.stock += 1;
//                     return;
//                 }
//             })
//         }else{
//             return;
//         }
//     }else{
//         let item = {...items[0]};
//         item.stock = 1;
//         // console.log("Stock",items[0].stock);
//         items[0].stock-=1;
//         cart.push(item);
//     }
//     Ucart = [...new Set(cart)];
//     display();
//     // console.log("cart", cart);
//     // console.log("items",items);
// })
// add2.addEventListener('click',()=>{
//     if(cart.some(e=>e.name === 'Muesli')){
//         if(items[1].stock>1){
//             items[1].stock-=1;
//             cart.forEach(e=>{
//                 if(e.name === 'Muesli'){
//                     e.stock += 1;
//                     return;
//                 }
//             })
//         }else{
//             return;
//         }
//     }else{
//         let item = {...items[1]};
//         item.stock = 1;
//         // console.log("Stock",items[1].stock);
//         items[1].stock-=1;
//         cart.push(item);
//     }
//     Ucart = [...new Set(cart)];
//     display();

//     // console.log("cart", cart);
//     // console.log("items",items);
// })
// add3.addEventListener('click',()=>{
//     if(cart.some(e=>e.name === 'Egg')){
//         if(items[2].stock>1){
//             items[2].stock-=1;
//             cart.forEach(e=>{
//                 if(e.name === 'Egg'){
//                     e.stock += 1;
//                     return;
//                 }
//             })
//         }else{
//             return;
//         }
//     }else{
//         let item = {...items[2]};
//         item.stock = 1;
//         // console.log("Stock",items[2].stock);
//         items[2].stock-=1;
//         cart.push(item);
//     }
//     Ucart = [...new Set(cart)];
//     display();

//     // console.log("cart", cart);
//     // console.log("items",items);
// });
