var c = console;
var d = document;

var total = 0.0;
var price = 0.0;
var j;
var menuNew = menuNewPost();
var shoppingCart = [];

//takes in a price for an item added to cart
//and returns the new total
function getTotal(price) {
    c.log("im in cart.js");
    c.log("price is: "+price);
    var totalInt = total + price;
    total = parseFloat(totalInt);
    c.log("total is of type: "+typeof(total));
    var totalFixed = total.toFixed(2);    
    return totalFixed;
};



function updateCart(shoppingCart) {
    var cart = [];
    var index = shoppingCart.length;
    c.log("index: "+index);
    for (var i = 0; i < index; i++) {
        var id = shoppingCart[i];

        for (var j=0; j<menuNew.length; j++){
        
        var cartItem = menuNew[j].filter(function(menuNew){
            
            return menuNew[j].identifier == id;
        
        });
    };
    
        cart.push(cartItem);
        c.log("cart item "+i+" is "+cart[i].values);    
        }
        /*for (var j = 1; j <= index; j++) {
            var id2 = shoppingCart[j].identifier;
            if(id=id2) {
                shoppingCart[i].number++;
                c.log(shoppingCart[i]);
            }
        }
    }*/

};