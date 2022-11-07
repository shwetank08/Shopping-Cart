const add1 = document.querySelector("#add1");
const add2 = document.querySelector("#add2");
const add3 = document.querySelector("#add3");
const list = document.querySelector("#list");
const item1 = document.querySelector("#item1");
const item2 = document.querySelector("#item2");
const item3 = document.querySelector("#item3");
const pricelist = document.querySelector("#pricelist");
const cb = document.querySelector('#cb');
const ct = document.querySelector('#ct');

const items = [
  {
    name: "Peanut butter",
    price: 250,
    stock: 10,
    image: "./Images/Peanut butter.webp"
  },
  {
    name: "Muesli",
    price: 200,
    stock: 12,
    image: "./Images/Muesli.jpg"
  },
  {
    name: "Egg",
    price: 10,
    stock: 20,
    image: "./Images/Egg.webp"
  },
  {
    name: "Jam",
    price: 140,
    stock: 0,
    image: "./Images/JAM.webp"
  },
];

let sum = 0;
let clicked = false;



function display() {
  list.innerHTML = "";
  pricelist.innerHTML = "";
  
  for (const [key, value] of Object.entries(localStorage)) {
    let item = {};
    if (key === "Peanut butter") {
      item = { ...items[0] };
    } else if (key === "Muesli") {
      item = { ...items[1] };
    } else if (key === "Egg") {
      item = { ...items[2] };
    }
   
    let div = document.createElement("div");

    let pic = document.createElement("img");
    if (key === "Peanut butter") {
      pic.src = items[0].image;
      pic.style.height = "70px";
      pic.style.width = "70px";
    } else if (key === "Muesli") {
      pic.src = items[1].image;
      pic.style.height = "70px";
      pic.style.width = "70px";
    } else if (key === "Egg") {
      pic.src = items[2].image;
      pic.style.height = "50px";
      pic.style.width = "70px";
    }else if(key === "Jam"){
      pic.src = items[3].image;
      pic.style.height = "70px";
      pic.style.width = "70px";
    }

    let name = document.createElement("div");
    name.textContent = key.toUpperCase();
    name.classList.add('font-bold')
    name.style.width = "100px";

    let price = document.createElement("div");
    price.innerHTML = `<i class="fa-solid fa-indian-rupee-sign">${item.price}</i>`
   
    price.style.width = "50px";
    

    let qtn = document.createElement("div");
    qtn.textContent = value;

    let btnP = document.createElement("div");
    btnP.innerHTML = `<i class="fa-solid fa-square-plus"></i>`

    let btnM = document.createElement("div");
    btnM.innerHTML = `<i class="fa-solid fa-square-minus"></i>`

    let stockEdit = document.createElement("div");
    stockEdit.appendChild(btnP);
    stockEdit.appendChild(qtn);
    stockEdit.appendChild(btnM);

    stockEdit.style.display = "flex";
    stockEdit.style.justifyContent = "space-around";
    stockEdit.style.gap = "20px";

    let del = document.createElement('div');
    del.innerHTML = `<i class="fa-solid fa-trash"></i>`
    del.addEventListener('click',()=>{
      localStorage.removeItem(key);
      display();
    })

    div.appendChild(pic);
    div.appendChild(name);
    div.appendChild(price);
    div.appendChild(stockEdit);
    div.appendChild(del);
    div.classList.add('hover:scale-x-125')

    div.style.display = "flex";
    div.style.justifyContent = "space-between";
    div.style.alignItems = "center";
    div.style.width = "400px";
    div.style.flexWrap = true;
    list.appendChild(div);
    

    btnM.addEventListener("click", () => {
      if ((key === "Peanut butter") && (value < 1)) {
        return;
      }else if (key === "Muesli" && (value < 1)) {
        return;
      }else if (key === "Egg" && (value < 1)) {
        return;
      }
      localStorage[key] = parseInt(value) - 1;
      display();
      calculate();
    });
    btnP.addEventListener("click", () => {
      if ((key === "Peanut butter") && (value > 9)) {
        return;
      }else if (key === "Muesli" && (value > 11)) {
        return;
      }else if (key === "Egg" && (value > 19)) {
        return;
      }
      localStorage[key] = parseInt(value) + 1;
      display();
      calculate();
    });
  }

  calculate();
  
  
  
}

function calculate() {

  sum = 0;
  for (const [key, value] of Object.entries(localStorage)) {
    if (key === "Peanut butter") {
      sum += 250 * parseInt(value);
    } else if (key === "Muesli") {
      sum += 200 * parseInt(value);
    } else if (key === "Egg") {
      sum += 10 * parseInt(value);
    }
  }

  pricelist.innerHTML = "";
  
  let div = document.createElement("div");

  let subtotal = document.createElement("div");
  subtotal.textContent = `Rs ${sum}`;

  let text = document.createElement('div');
  text.textContent = "Subtotal:"

  div.appendChild(text);
  div.appendChild(subtotal);

  div.style.display = "flex";
  div.style.justifyContent = "space-around"

  pricelist.appendChild(div);
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
};



add1.addEventListener("click", AddToCart1);
add2.addEventListener("click", AddToCart2);
add3.addEventListener("click", AddToCart3);
cb.addEventListener('click',AddCoupon);
calculate();