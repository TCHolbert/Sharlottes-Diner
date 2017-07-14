var c = console;
var d = document;


window.onload = function() {

// get menu items from menu.js
//var menuAppetizers = menuAppsPost();
//var menuEntrees = menuEntreePost();
//var menuDesserts = menuDessertPost();
var menuNew = menuNewPost();
var price = 0;
var index = menuNew.length;
    c.log(index);
//var btn =[];
var counter = 1;
var shoppingCart = [];



function loadMenuNew(i) {

    var text = menuNew[i].name;
    c.log(text);
    var id = menuNew[i].identifier;
    c.log(id);
    var object = menuNew[i];
    var dollar = menuNew[i].price;
    
    var btn = d.createElement("button");
    btn.setAttribute("id", id);
    d.getElementById("addBtn").appendChild(btn);
    //btn.onclick = function () {
    //    shoppingCart.push(object);
    //    addOrder();
    //};
    var food = d.createTextNode(text);
    var obj = d.createElement("li");
    obj.appendChild(food);
    d.getElementById("food").appendChild(obj);
    var cost = d.createTextNode(dollar);
    var obj2 = d.createElement("li");
    obj2.appendChild(cost);
    d.getElementById("cost").appendChild(obj2);
    c.log("item "+i+" added");
    //return btn[i];
};



for (var i =0; i < index; i++) {loadMenuNew(i)};

var listener = d.querySelector("#addBtn");
listener.addEventListener("click", addOrder, false);//addOrder(), false);


function addOrder(e) {
    if(e.target !== e.currentTarget){
        var clickedItem = e.target.id;
        //c.log("clicked item id: "+clickedItem);
           c.log("clicked"+e.target.id);
            var i = clickedItem;
            c.log(i);
            c.log(typeof[i]);
            var item = menuNew[e.target.id];
            c.log(item);
            var dollar1 = item.price;
            c.log(dollar1);
            var cost1 = item.cost;
            c.log("cost1 is a: "+typeof(cost1));
            shoppingCart.push(item);//shopppingCart contains an array of the id property of menuItems

    var btn = d.createElement("button");
    d.getElementById("delBtn").appendChild(btn);
    
    var order = d.createElement("li");
    var food = d.createTextNode(item.name);
    order.appendChild(food);
    d.getElementById("order").appendChild(order);

    var cost = d.createElement("li");
    var dollar = d.createTextNode(dollar1);
    cost.appendChild(dollar);
    d.getElementById("price").appendChild(cost);

            c.log(cost1);
            var total = getTotal(cost1);//.valueOf());
            c.log("now total is: "+total);
            
            //display total
            var total2 = d.getElementById("total")
            total2.innerHTML = total;
    };
};
        //for (var j=0; j<index; j++){
        
        //var cartItem = menuNew[j].filter(function(menuNew){
            
            //return menuNew[j].identifier == id;
        
        //});            
    //}};
    function print() {
        for (var i = 0; i < shoppingCart.length; i++) {
                        c.log(shoppingCart[i]);

            
        };
    };

    
    d.getElementById("finished").addEventListener("click", thanks, false);
    function thanks(){
        
    }


    function delOrder(e) {
        if(e.target !== e.currentTarget){
            var clickedItem = e.target.id;


        };
    };
print();

    var finished
        listener.addEventListener("click", addOrder, false);

    var cart = updateCart(shoppingCart); 

    c.log(cart);   
    //c.log("addOrder has been called");
    /*if( counter > 1) {
    d.getElementById("delBtn").removeChild();
    parent = d.getElementById("order");
    parent.removeChild();
    parent = d.getElementById("price");
    };
    counter = 2;*/
    
/*    for (var i = 0; i < shoppingCart.length; i++) {    
    var food1 = shoppingCart[i].name;
    c.log(food1);
    var dollar1 = shoppingCart[i].price;
    c.log(dollar1);
    var cost1 = shoppingCart[i].cost;
    
    
    var btn = d.createElement("button");
    d.getElementById("delBtn").appendChild(btn);
    btn.onclick = function () {
        c.log("I need to delete something");
    };

    var order = d.createElement("li");
    var food = d.createTextNode(food1);
    order.appendChild(food);
    d.getElementById("order").appendChild(order);

    var cost = d.createElement("li");
    var dollar = d.createTextNode(dollar1);
    cost.appendChild(dollar);
    d.getElementById("price").appendChild(cost);

            c.log(cost1);
            total = getTotal(cost1.valueOf());
            c.log("now total is: "+total);
            
            //display total
            var total2 = d.getElementById("total")
            total2.innerHTML = total;
    };
    };
*/

var ids = [];
for (var index = 0; index < menuNew.length; index++) {
    ids[index] = menuNew[index].identifier;
    c.log(ids[index]);
};

c.log(ids);



        var first = [];
   //     first[0] = d.getElementById("A1");
     //   first[0].addEventListener("click", addOrder(0));

//on click add food item: three categories, two items each
                   
/*        first[0] = d.getElementById(menuNew[0].identifier);
        first[0].addEventListener("click", shoppingCart.push(menuNew[0]));
         c.log("item 0 "+shoppingCart);

        first[1] = d.getElementById(menuNew[1].identifier);
        first[1].addEventListener("click", shoppingCart.push(menuNew[1]));
         c.log("item 1 "+shoppingCart);           

        //remove btn
            btn[i] = d.createElement("button");
    //btn[i].setAttribute("id", menuNew[i].identifier);
    btn[i].innerText = " - ";
    btn[i].onclick = function (i) {
        d.getElementById(menuNew[i].identifier)
        c.log("need to delete: "+i);
    }*/
        
        
        /*order  
        ;
         c.log("button clicked");
         shoppingCart
         c.log(menuNew[i].identifier);
         shoppingCart.push(menuNew[i]);
         c.log(shoppingCart);
         });*/
        
        /*    //var minus = d.createTextNode("del");
            var removBtn = d.createElement("button")//.innerHTML = "del";
            //removBtn.setAttribute("id", "btn1")
            d.getElementById("removeBtn").appendChild(removBtn).innerHTML = "-";
            var food = d.createTextNode(menuNew[0].name);//firstItem);
            var obj = d.createElement("li");
            //obj.setAttribute("id", "item1");
            obj.appendChild(food);
            d.getElementById("order").appendChild(obj);
            
            var price = d.createTextNode(menuNew[0].price);//cost);
            var dollar = d.createElement("li");
            //dollar.setAttribute("id", "cost1");
            dollar.appendChild(price);
            d.getElementById("price").appendChild(dollar);

            var addIn = menuNew[0].cost;
            c.log(addIn);
            total = getTotal(addIn.valueOf());
            c.log("now total is: "+total);
            
            //display total
            var total2 = d.getElementById("total")
            total2.innerHTML = total;
    */    

       

/*        var second = d.getElementById("3");
        second.addEventListener("click", function() {    
            var food = d.createTextNode(menuAppetizers[3]);//firstItem);
            var obj = d.createElement("li");
            obj.appendChild(food);
            d.getElementById("order").appendChild(obj);
            var price = d.createTextNode(menuAppetizers[2]);//cost);
            var dollar = d.createElement("li");
            dollar.appendChild(price);
            d.getElementById("price").appendChild(dollar);

            var addIn = menuAppetizers[2];
            c.log(addIn);
            total = getTotal(addIn.valueOf());
            c.log("now total is: "+total);
            
            //display total
            var total2 = d.getElementById("total")
            total2.innerHTML = total;
        });

        var third = d.getElementById("5");
        third.addEventListener("click", function() {    
            var food = d.createTextNode(menuEntrees[1]);//firstItem);
            var obj = d.createElement("li");
            obj.appendChild(food);
            d.getElementById("order").appendChild(obj);
            var price = d.createTextNode(menuEntrees[0]);//cost);
            var dollar = d.createElement("li");
            dollar.appendChild(price);
            d.getElementById("price").appendChild(dollar);

            var addIn = menuEntrees[0];
            c.log(addIn);
            total = getTotal(addIn.valueOf());
            c.log("now total is: "+total);
            
            //display total
            var total2 = d.getElementById("total")
            total2.innerHTML = total;
        });

        var fourth = d.getElementById("7");
        fourth.addEventListener("click", function() {    
            var food = d.createTextNode(menuEntrees[3]);//firstItem);
            var obj = d.createElement("li");
            obj.appendChild(food);
            d.getElementById("order").appendChild(obj);
            var price = d.createTextNode(menuEntrees[2]);//cost);
            var dollar = d.createElement("li");
            dollar.appendChild(price);
            d.getElementById("price").appendChild(dollar);

            var addIn = menuEntrees[2];
            c.log(addIn);
            total = getTotal(addIn.valueOf());
            c.log("now total is: "+total);
            
            //display total
            var total2 = d.getElementById("total")
            total2.innerHTML = total;
        });
        
         var fifth = d.getElementById("9");
        fifth.addEventListener("click", function() {    
            var food = d.createTextNode(menuDesserts[1]);//firstItem);
            var obj = d.createElement("li");
            obj.appendChild(food);
            d.getElementById("order").appendChild(obj);
            var price = d.createTextNode(menuDesserts[0]);//cost);
            var dollar = d.createElement("li");
            dollar.appendChild(price);
            d.getElementById("price").appendChild(dollar);

            var addIn = menuDesserts[0];
            c.log(addIn);
            total = getTotal(addIn.valueOf());
            c.log("now total is: "+total);
            
            //display total
            var total2 = d.getElementById("total")
            total2.innerHTML = total;
        });

        var sixth = d.getElementById("11");
        sixth.addEventListener("click", function() {    
            var food = d.createTextNode(menuDesserts[3]);//firstItem);
            var obj = d.createElement("li");
            obj.appendChild(food);
            d.getElementById("order").appendChild(obj);
            var price = d.createTextNode(menuDesserts[2]);//cost);
            var dollar = d.createElement("li");
            dollar.appendChild(price);
            d.getElementById("price").appendChild(dollar);

            var addIn = menuDesserts[2];
            c.log(addIn);
            total = getTotal(addIn.valueOf());
            c.log("now total is: "+total);
            
            //display total
            var total2 = d.getElementById("total")
            total2.innerHTML = total;
        });   
//done onclick add food item
*/
};
