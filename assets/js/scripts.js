$(document).ready(function(){
    $('body').materialScrollTop({
        easing:'swing', 
        padding: 100, 
        revealElement:'header',
        revealPosition:'bottom', 
        duration: 600,    
        onScrollEnd:function() {
            console.log('Scroll End');
        }
            
    })
    $("#main-images-file").owlCarousel({
        animateOut: 'fadeOut',
        items:1,
        loop:true,
        center:false,
        margin:10,
        mergeFit:true,
        utoWidth:true,
        startPosition:1,
        nav:true,
        navText:['<i class="fa-solid fa-angles-left"></i>','<i class="fa-solid fa-angles-right"></i>'],
        slideBy:1,
        dots:false,
        dotsEach:false,
        dotsData:false,
        autoplay:true,
        autoplayTimeout:5000,
        mouseDrag:false,
    })
    $("#main-images-file2").owlCarousel({
		animateOut: 'fadeOut',
        items:5,
        loop:true,
        center:false,
        margin:4,
        mergeFit:true,
        utoWidth:true,
        startPosition:1,
        nav:false,
        slideBy:1,
        dots:false,
        dotsEach:false,
        dotsData:false,
        autoplay:true,
        autoplayTimeout:5000,
        mouseDrag:true,
        responsive : {
            0:{
                items:2
            },
            575:{
                items:3
            },
            768:{
                items:3
            },
            992:{
                items:4
            },
            1100:{
                items:4
            }
        }
    });

    

        
})

//Sticky Navber
var navber = document.getElementById("stickyNavber");
    var menu = document.getElementById("navMenu");
    window.onscroll = function(){
        if(window.pageYOffset >= 250){
            stickyNavber.classList.add("sticky");
        }
        else{
            stickyNavber.classList.remove("sticky");
        }
    }

// Click Event  
const toggleBtn = document.querySelector(".show");
const toggleBtnIcon = document.querySelector(".show i");
const dropDownMenu = document.querySelector(".menus");
toggleBtn.onclick = function(){
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}