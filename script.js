let sizes = document.querySelectorAll(".info-detalle button");

function setSize(pos){
    sizes[0].style.backgroundColor = "#fff1d9";
    sizes[1].style.backgroundColor = "#fff1d9";
    sizes[2].style.backgroundColor = "#fff1d9";
    sizes[pos].style.backgroundColor = "#fdc10e";
}

//MENU RESPONSIVE
let menu_responsive_visible = false;
let nav_responsive = document.getElementById("nav-responsive");
let nav = document.getElementById("nav");
let close_responsive = document.getElementById("close-responsive");

nav_responsive.onclick = function(){
    if(menu_responsive_visible==false){
        nav.className = "menu-responsive";
        menu_responsive_visible = true;
    }
}
close_responsive.onclick = function(){
    if(menu_responsive_visible==true){
        nav.className = "";
        menu_responsive_visible = false;
    }
}