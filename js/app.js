

var  menu = document.querySelector('.menu');

var  menuBtn = document.querySelector('.menu-btn');

menuBtn.addEventListener('click', function(){
    menu.classList.toggle('active');
    document.querySelector('.hamburger').classList.toggle('cross');
})