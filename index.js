const add1 = document.querySelector('#add1');
const add2 = document.querySelector('#add2');
const add3 = document.querySelector('#add3');
const table = document.querySelector('#table');

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
}]

const cart = [];


function display(){

}

add1.addEventListener('click',()=>{
    if(cart.some(e=>e.name === 'Peanut butter')){
        if(items[0].stock>1){
            items[0].stock-=1;
            cart.forEach(e=>{
                if(e.name === 'Peanut butter'){
                    e.stock += 1;
                    return;
                }
            })
        }else{
            return;
        }
    }else{
        let item = {...items[0]};
        item.stock = 1;
        console.log("Stock",items[0].stock);
        items[0].stock-=1;
        cart.push(item);
    }
    console.log("cart", cart);
    console.log("items",items);
})
add2.addEventListener('click',()=>{
    if(cart.some(e=>e.name === 'Muesli')){
        if(items[1].stock>1){
            items[1].stock-=1;
            cart.forEach(e=>{
                if(e.name === 'Muesli'){
                    e.stock += 1;
                    return;
                }
            })
        }else{
            return;
        }
    }else{
        let item = {...items[1]};
        item.stock = 1;
        console.log("Stock",items[1].stock);
        items[1].stock-=1;
        cart.push(item);
    }
    console.log("cart", cart);
    console.log("items",items);
})
add3.addEventListener('click',()=>{
    if(cart.some(e=>e.name === 'Egg')){
        if(items[2].stock>1){
            items[2].stock-=1;
            cart.forEach(e=>{
                if(e.name === 'Egg'){
                    e.stock += 1;
                    return;
                }
            })
        }else{
            return;
        }
    }else{
        let item = {...items[2]};
        item.stock = 1;
        console.log("Stock",items[2].stock);
        items[2].stock-=1;
        cart.push(item);
    }
    console.log("cart", cart);
    console.log("items",items);
})