menu.onclick = function myFunction() {
    var x = document.gerElementById("BurgerNav");

    if(x.className === "products__menu") {
        x.className += " responsive";
    } else{
        x.className = "products__menu"
    }
}