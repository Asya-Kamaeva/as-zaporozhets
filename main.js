const date = document.getElementById("date");
const arrFaq = document.querySelectorAll(".faq__item");
const arrQuestions = document.querySelectorAll('.faq__part');
const question = document.querySelectorAll('.faq__unit');
const cleanItem = document.querySelectorAll('.about__item');
const cleanImage = document.querySelectorAll('.about__tasks');
const body = document.body;
const hamburger = document.querySelector(".hamburger");
const navItems = document.querySelectorAll('.nav__item');
const nav = document.querySelector(".nav");
const imgBlock = document.getElementById("aboutImg");
const imgItem = document.querySelectorAll(".about__tasks");

//hamburger menu

hamburger.addEventListener('click', function () {
    nav.classList.toggle("nav_active");
    hamburger.classList.toggle("hamburger_active");
    if(nav.classList.contains('nav_active')){
      body.style.overflow="hidden";
    }else{
      body.style.overflow="auto";
    }
    
  });

  navItems.forEach(function(navItem, index) {
    navItem.addEventListener('click', function(){
        nav.classList.toggle("nav_active");
        hamburger.classList.toggle("hamburger_active");
        if(nav.classList.contains('nav_active')){
          body.style.overflow="hidden";
        }else{
          body.style.overflow="auto";
        }        
    });
});

//change width about-img block

let widthBrowther = document.documentElement.clientWidth;
if (widthBrowther <= 768){
    imgBlock.style.width = widthBrowther +'px';
    
    imgItem.forEach(function(item){
        let newHeight = widthBrowther * 0.5639204;
        item.style.height = newHeight + 'px';
    })
    
}

window.onresize = function(){
    widthBrowther = document.documentElement.clientWidth;
    if (widthBrowther <= 768){
        imgBlock.style.width = widthBrowther +'px';
        
        imgItem.forEach(function(item){
            let newHeight = widthBrowther * 0.5639204;
            item.style.height = newHeight + 'px';
        })
    
    }
}


//date in counter

let today = new Date();
let thisMonth = today.getMonth();
let monthes =['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
let todayNew = (today.getDate() + ' ' + monthes[thisMonth] + ' ' + today.getFullYear());
date.innerHTML = todayNew;

//about-clean block

cleanItem.forEach(function(item, index){
    item.addEventListener('click', function(){
        let cleanItemActive = document.querySelectorAll('.about__item_active');
        if(cleanItemActive.length !=0){
            cleanItemActive[0].classList.remove('about__item_active')
        }
        item.classList.add('about__item_active');

        let cleanImageActive = document.querySelectorAll('.about__tasks_active');
        if(cleanImageActive.length !=0){
            cleanImageActive[0].classList.remove('about__tasks_active')
        }
        let cleanImageNew = cleanImage[index];
        cleanImageNew.classList.add('about__tasks_active');

    })
})


//faq

arrFaq.forEach(function (item, index) {
    item.addEventListener('click', function(){
        if(!item.className.includes('faq__item_active')){
            let faqActive = document.querySelectorAll('.faq__item_active');
            faqActive[0].classList.remove('faq__item_active');
        };
        item.classList.add('faq__item_active');
       
        let itemUnit = arrQuestions[index];

        if(!itemUnit.className.includes('faq__part_active')){
            let itemActive = document.querySelectorAll('.faq__part_active');
            itemActive[0].classList.remove('faq__part_active');
        };
        itemUnit.classList.add('faq__part_active');
       
    });
});

question.forEach(function(item, index) {
    item.addEventListener('click', function(){
        let activeQuestion = item.getElementsByClassName('faq__answer');
       
        if (activeQuestion[0].className.includes('faq__answer_active')){
            activeQuestion[0].classList.remove('faq__answer_active');
        } else {
            let unitActive = document.querySelectorAll('.faq__answer_active');
            if (unitActive.length != 0){
                unitActive[0].classList.remove('faq__answer_active')
            }

            activeQuestion[0].classList.add('faq__answer_active');
        }
        

    });
});


//slider

const left = document.querySelectorAll(".slider__control_prev")[0];
const right = document.querySelectorAll(".slider__control_next")[0];
const list = document.querySelectorAll(".slider__list")[0];


left.addEventListener("click", function (e) {
    loop("left", e);
});

right.addEventListener("click", function (e) {
    loop("right", e);
});

function loop(direction, e) {
    e.preventDefault();

    if (direction === "right") {
        list.appendChild(list.firstElementChild);
    } else {
        list.insertBefore(list.lastElementChild, list.firstElementChild);
    }
}
