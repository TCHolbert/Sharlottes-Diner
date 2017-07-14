var c = console;
var d = document;


/*function menuAppsPost() {
    var menuAppetizers = [11.11, "Catdog", 12.12, "Hot Dog"];
    return menuAppetizers
};
function menuEntreePost() {
    var menuEntrees = [13.13, "Datdog", 12.12, "ThisDog"];
    return menuEntrees
};
function menuDessertPost() {
    var menuDesserts = [31.31, "steak", 22.22, "My Dog"];
    return menuDesserts
};*/
function menuNewPost() {
    var foodItem = []; 
    foodItem[0] = {identifier: 0, category: "Appetizers", name: "Calamari", price: "$11.11", cost: 11.11, number: 1};
    foodItem[1] = {identifier: 1, category: "Appetizers", name: "Pickles", price: "$12.12", cost: 12.12, number: 1};
    var index = foodItem.length;
    c.log("foodItem length "+index);
    return foodItem
};


/*var removal = d.getElementById("btn1");
removal.addEventListener("click", function(){
    delete(d.getElementById("item1"));
});*/