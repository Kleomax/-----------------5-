

const footer_s = document.querySelector('.footer_s');
function footer_alert() {
    alert("Этот раздел времено недоступен");
};
function slowScroll(id) { 
    let offset = 0;
    $('html, body').animate({ 
        scrollTop: $(id).offset().top - offset 
    }, 1000);
    return false; 
};



const btn_prev = document.querySelector('.btn-prev'),
btn_next = document.querySelector('.btn-next'),
slide_group = document.querySelectorAll('.slides_group');

let index = 0;

const activeSlide = n => {
    for(slides_group of slide_group){
        slides_group.classList.remove('active')
    }
    slide_group[n].classList.add('active')
}

const nextSlide = () => {
    if(index === slide_group.length - 1) {
        index = 0;
        activeSlide(index)
    }
    else {
        index++;
        activeSlide(index);
    }
};

const prevSlide = () => {
    if(index === 0) {
        index = slide_group.length - 1;
        activeSlide(index)
    }
    else {
        index--;
        activeSlide(index);
    }
};

btn_next.addEventListener('click', nextSlide);
btn_prev.addEventListener('click', prevSlide);


const smaller_btn_prev = document.querySelector('.smaller-btn-prev'),
smaller_btn_next = document.querySelector('.smaller-btn-next'),
smaller_slide_group = document.querySelectorAll('.smaller_slides_group');

const smallerActiveSlide = n => {
    for(smaller_slides_group of smaller_slide_group){
        smaller_slides_group.classList.remove('active')
    }
    smaller_slide_group[n].classList.add('active')
}

const smallerNextSlide = () => {
    if(index == smaller_slide_group.length - 1) {
        index = 0;
        smallerActiveSlide(index)
    }
    else {
        index++;
        smallerActiveSlide(index);
    }
};

const smallerPrevSlide = () => {
    if(index == 0) {
        index = smaller_slide_group.length - 1;
        smallerActiveSlide(index)
    }
    else {
        index--;
        smallerActiveSlide(index);
    }
};

smaller_btn_next.addEventListener('click', smallerNextSlide);
smaller_btn_prev.addEventListener('click', smallerPrevSlide);

const body = document.body;


const headerMenu = document.querySelector('.header_burger');
const navigation = document.querySelector('.navigation');   

headerMenu.addEventListener('click', function() {
    navigation.classList.toggle ('active_menu');
    headerMenu.classList.toggle('active_menu');
    body.classList.toggle('lock');
});


const applicationClose = document.querySelector('.application-close-pop-up');
const applicationOpen = document.querySelector('.sign-up-btn');
const offlineBtn = document.querySelector('.offline-lessons-btn');

applicationOpen.addEventListener('click', function(){
    body.classList.add('lock')
});

offlineBtn.addEventListener('click', function(){
    body.classList.add('lock')
});

applicationClose.addEventListener('click', function(){
    body.classList.remove('lock')
});

const navBtn = document.querySelector('.nav_btn');


function hideMenu(){
    body.classList.remove('lock');
    headerMenu.classList.remove('active_menu');
    navigation.classList.remove('active_menu');
};


