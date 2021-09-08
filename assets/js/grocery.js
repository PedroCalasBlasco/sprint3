// Exercise 11
// Move this variable to a json file and load the data in this js
var products = [
    {
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery'
    },
    {
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery'
    },
    {
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
var cartList = [];
var cart = [];
var subtotal = {
    grocery: {
        value: 0, 
        discount: 0
    },
    beauty: {
        value: 0, 
        discount: 0
    },
    clothes: {
        value: 0, 
        discount: 0
    },
};
var total = 0;

// Exercise 1
function addToCartList(id) {
    // 1. Loop for to the array products to get the item to add to cart
    for(var i = 0; i < products.length; i++){
        if (i == id ){
            cartList.push(products[i])
        }
    }
    // 2. Add found product to the cartList array
}

// Exercise 2
function cleanCart() {
    cartList.length = 0;
}

// Exercise 3
function calculateSubtotals() {

    // 1. Create a for loop on the "cartList" array 
    for(var i = 0; i< cartList.length; i++){
        if (cartList[i].type == 'grocery'){
            subtotal.grocery.value = subtotal.grocery.value  + cartList[i].price;
        }
        else if (cartList[i].type == 'beauty'){
            subtotal.beauty.value = subtotal.beauty.value + cartList[i].price;
        }
        else if (cartList[i].type == 'clothes'){
            subtotal.clothes.value = subtotal.clothes.value + cartList[i].price;
        }
    }
    // 2. Implement inside the loop an if...else or switch...case to add the quantities of each type of product, obtaining the subtotals: subtotalGrocery, subtotalBeauty and subtotalClothes
}

// Exercise 4
function calculateTotal() {
    total = 0
    // Calculate total price of the cart either using the "cartList" array
    for(var key in subtotal){
        total += subtotal[key].value;
    }
}

// Exercise 5
function applyPromotionsSubtotals() {
    
    subtotal.grocery.discount = 0;

    let num_oil = 0;
    let num_mix = 0;

    for(var i = 0; i< cartList.length; i++){
        if(cartList[i].name = 'cooking oil'){
            num_oil++;
        }
        else if (cartList[i].name = 'Instant cupcake mixture'){
            num_mix++;
        }
    }

    if(num_oil > 3){
        subtotal.grocery.discount = num_oil * (products[0].price - 10);
    }

    if(num_mix > 10){
        subtotal.grocery.discount += num_mix * (products[2].price * 2 / 3 );
    }

    subtotal.grocery.value -=  subtotal.grocery.discount;

    calculateTotal();

}

// Exercise 6
function generateCart() {

    var cartObject = {};

    for (var i = 0; i < cartList.length; i++){
        var producto = cartList[i];
      
        if(cartObject[producto.name]){
            cartObject[producto.name].quantity++;
            cartObject[producto.name].subtotal += cartObject[producto.name].price;
            cartObject[producto.name].subtotalWithDiscount = cartObject[producto.name].subtotal;

      
        } else {
            producto.quantity = 1;
            producto.subtotal = producto.price;
            producto.subtotalWithDiscount = producto.subtotal;

            cartObject[producto.name] = producto;
          }

        
    }

    for (var key in cartObject){
        cart.push(cartObject[key]);
    }
}
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.


// Exercise 7
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    for (var i = 0; i < cart.length; i++){
        if (cart[i].name === 'cooking oil'){
            if(cart[i].quantity > 3){
                cart[i].subtotalWithDiscount = 10 * cart[i].quantity;
            }
        }else if( cart[i].name === 'Instant cupcake mixture'){
            if(cart[i].quantity > 10){
                cart[i].subtotalWithDiscount = cart[i].subtotal * 2 / 3; 
            }
        }
    }
}

// Exercise 8
function addToCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array

    for(var i = 0; i < products.length; i++){
        if (i == id ){
            var producto = products[i];
            var itemCart;
            for(var j = 0; j < cart.length; j++){
                if(producto.name == cart[j].name){
                    itemCart = cart[j];
                }
            }
            if (itemCart){
                itemCart.quantity++;
                itemCart.subtotal += itemCart.price; 
                itemCart.subtotalWithDiscount = itemCart.subtotal; 
            }else{
                producto.quantity = 1;
                producto.subtotal = producto.price;
                producto.subtotalWithDiscount = producto.subtotal;
                cart.push(producto);
            }
        }
    }
    applyPromotionsCart();
}

// Exercise 9
function removeFromCart(id) {
    if (cart[id].quantity === 1){
        cart.splice(id,1);
    }else{
        cart[id].quantity--;
    }

    printCart()
           
}



// Exercise 10
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    var listaitems = document.getElementById("listaitems");

    listaitems.innerHTML = '';

    for(var i = 0 ; i < cart.length; i++){

        let itemlista = document.createElement("li");
        itemlista.className = "mt-3";
        listaitems.appendChild(itemlista);

        let itemnombre = document.createElement("h4");
        itemnombre.innerHTML = cart[i].name;
        itemlista.appendChild(itemnombre);

        let itemquant = document.createElement("p");
        itemquant.innerHTML = "Cantidad: ";
        itemlista.appendChild(itemquant);

        let itequantity = document.createElement("span");
        itequantity.innerHTML = cart[i].quantity;
        itemquant.appendChild(itequantity);

        let itemsubtext = document.createElement("p");
        itemsubtext.innerHTML = "SubTotal: ";
        itemlista.appendChild(itemsubtext);

        let itemsub = document.createElement("span");
        itemsub.innerHTML = cart[i].subtotal + " $";
        itemsubtext.appendChild(itemsub);

        let itemdisctext = document.createElement("p");
        itemdisctext.innerHTML = "SubTotal with Discount: ";
        itemlista.appendChild(itemdisctext);

        let itemdis = document.createElement("span");
        itemdis.innerHTML = cart[i].subtotalWithDiscount + " $";
        itemdisctext.appendChild(itemdis);


        var itembutton = document.createElement("button");
        itembutton.setAttribute("type", "button");
        itembutton.setAttribute("onclick", "removeFromCart(" + i +")");
        itembutton.className = "btn btn-primary text-center";
        itembutton.innerHTML = "Elimina del Carrito";
        itemlista.appendChild(itembutton);

        let hr = document.createElement("hr");
        itemlista.appendChild(hr);

    }
}