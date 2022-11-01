const add1 = document.querySelector('#add1');
const add2 = document.querySelector('#add2');
const add3 = document.querySelector('#add3');
const list = document.querySelector('#list');


const items = [{
    name: "Peanut butter",
    price: 250,
    stock: 10,
},{
    name: "Muesli",
    price: 200,
    stock: 12,
},{
    name: "Egg",
    price: 10,
    stock: 20,
},{
    name: "Jam",
    price: 140,
    stock: 0
}];




const AddToCart1 = () => {
    if(localStorage.getItem("Peanut butter")===null){
        localStorage.setItem("Peanut butter",1);
    }else if(localStorage.getItem("Peanut butter")!=null){
        let stock = localStorage.getItem("Peanut butter");
        stock = parseInt(stock);
        if(stock>9){
            return;
        }
        stock += 1;
        localStorage.setItem("Peanut butter",stock);
    }
}

const AddToCart2 = () => {
    if(localStorage.getItem("Muesli")===null){
        localStorage.setItem("Muesli",1);
    }else if(localStorage.getItem("Muesli")!=null){
        let stock = localStorage.getItem("Muesli");
        stock = parseInt(stock);
        if(stock>11){
            return;
        }
        stock += 1;
        localStorage.setItem("Muesli",stock);
    }
}

const AddToCart3 = () => {
    if(localStorage.getItem("Egg")===null){
        localStorage.setItem("Egg",1);
    }else if(localStorage.getItem("Egg")!=null){
        let stock = localStorage.getItem("Egg");
        stock = parseInt(stock);
        if(stock>19){
            return;
        }
        stock += 1;
        localStorage.setItem("Egg",stock);
    }
}

add1.addEventListener('click',AddToCart1);
add2.addEventListener('click',AddToCart2);
add3.addEventListener('click',AddToCart3);















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
// })