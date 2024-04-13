var menuIcon = document.getElementById('menu_icon');
var close = document.getElementById('close');
var sidebar = document.querySelector('.sidebar')
menuIcon.addEventListener('click', function(){
    sidebar.style.left = 0;
})

close.addEventListener('click', function(){
    sidebar.style.left = '-50%';
})

//close-offerBar

var closeOfferBar = document.getElementById('close-offerBar');
var offerBar = document.querySelector('.offer-bar')
closeOfferBar.addEventListener('click', function(){
offerBar.style.display = 'none'
})

//slider

var sliderContainer = document.querySelector('.slider-container');
var btns = document.querySelectorAll('.btns');

var imageList = ['1', '2', '3'];
let index = 0;
btns.forEach((button)=>{
button.addEventListener('click', function(){
    // console.log('clicked')
    if(button.classList.contains('left-arrow')){
        console.log('left')
        index--;
        if(index<0){
            index = imageList.length -1;
        }
        sliderContainer.style.background = `url('/Imgs/${imageList[index]}.jpg') center/cover no-repeat`
    }
    else{
        console.log('right')
        index++;
        if(index==imageList.length){
            index = 0;
        }
        sliderContainer.style.background = `url('/Imgs/${imageList[index]}.jpg') center/cover no-repeat`;

    }
})
})