const dots = document.getElementById('dots')
const more = document.getElementById('more')
const more_btn = document.getElementById('more_btn')
let Cheesecake_info = document.querySelector('.Cheesecake_info')
function open_more(){
if ( dots.style.display === "none") {
    dots.style.display = "inline"
    more_btn.innerHTML = "Читать далее"
    more.style.display = "none"
    Cheesecake_info.style.gridTemplateRows = "38px"
}
else {
    dots.style.display = "none"
    more.style.display = "grid"
    more_btn.innerHTML = "Скрыть"
    Cheesecake_info.style.gridTemplateRows = "38px 180px"
}};


const footer_s = document.querySelector('.footer_s');
function footer_alert() {
    alert("Этот раздел времено недоступен");
};

const reset = document.querySelector('.reset');
const chickenFilter = document.querySelector('.chicken_filter');
const saladsFilter = document.querySelector('.salads_filter');
const desserts = document.querySelector('.desserts_filter');
const kingsalad = document.querySelector('.king_salad');
const snacks = document.querySelector('.Snacks');
const pie = document.querySelector('.pie');
const cheesecake1 = document.querySelector('.Cheesecake');
const cheesecakes2 = document.querySelector('.Cheesecakes');
const berrycake = document.querySelector('.berry_cake');
const steak = document.querySelector('.steak');
const chickenRecipe = document.querySelector('.chicken');
const recipes = document.querySelector('.recipes');
const saladrecipe = document.querySelector('.salad_recipe')
const second = document.querySelector('.second')
const block = document.querySelectorAll('.block')


function filter(i) {
    block.style.display = "none"
}

reset.addEventListener('click', ()=>{
    kingsalad.style.display = "grid"
    snacks.style.display = "grid"
    pie.style.display = "grid"
    cheesecake1.style.display = "grid" 
    cheesecakes2.style.display = "grid"
    berrycake.style.display = "grid"
    steak.style.display = "grid"
    chickenRecipe.style.display = "grid" 
});
chickenFilter.addEventListener('click', () =>{
       kingsalad.style.display = "none"
       snacks.style.display = "none"
       pie.style.display = "none"
       cheesecake1.style.display = "none" 
       cheesecakes2.style.display = "none"
       berrycake.style.display = "none"
       steak.style.display = "none"
       recipes.style.gridTemplateRows = "none"
       chickenRecipe.style.display = "grid"    
});

saladsFilter.addEventListener("click", ()=>{
    snacks.style.display = "none"
    pie.style.display = "none"
    cheesecake1.style.display = "none" 
    cheesecakes2.style.display = "none"
    berrycake.style.display = "none"
    steak.style.display = "none"
    chickenRecipe.style.display = "none"    
    recipes.style.gridTemplateRows = "none"
    kingsalad.style.display = "grid"
});

desserts.addEventListener('click', ()=> {
    kingsalad.style.display = "none"
    steak.style.display = "none"
    recipes.style.gridTemplateRows = "none"
    desserts.style.display = "grid" 
    chickenRecipe.style.display = "none"
    snacks.style.display = "grid"
    pie.style.display = "grid"
    cheesecake1.style.display = "grid" 
    cheesecakes2.style.display = "grid"
    berrycake.style.display = "grid"
});

function test(){
    if(recipes.style.gridRowGap === "70px"){
        Cheesecake_info.style.gridTemplateRows = "19px 140px 16px"
    }
}
function slowScroll(id) { 
    let offset = 0;
    $('html, body').animate({ 
         scrollTop: $(id).offset().top - offset 
    }, 1000);
    return false; 
} 
const headerMenu = document.querySelector('.header_burger');
const navigation = document.querySelector('.navigation');

function hamburger(){
    navigation.classList.toggle('active_menu')
    headerMenu.classList.toggle('active_menu')
}


