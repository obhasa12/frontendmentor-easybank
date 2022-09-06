const btnhamburger = document.querySelector('#btnHamburger')
const body = document.querySelector('body')
const header = document.querySelector('.header')
const overlay = document.querySelector('.overlay')
const fadeElems = document.querySelectorAll('.has-fade')

btnhamburger.addEventListener('click', function(){
    console.log('click hamburger');

    if(header.classList.contains('open')){ //Close HBG Menu
        body.classList.remove('nonscroll'); 
        header.classList.remove('open');
        fadeElems.forEach(function(element){
            element.classList.remove('ilangg');
            element.classList.add('muncul');

        })
    }
    else { // open HBG Menu
        body.classList.add('nonscroll');
        header.classList.add('open');
        fadeElems.forEach(function(element){
            element.classList.remove('muncul');
            element.classList.add('ilangg');    
        });
    }
        
});

