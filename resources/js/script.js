$(document).ready(function(){
   
    // sticky navigation ko lagi
    $('.js--section-features').waypoint(function(direction){
        if(direction == "down"){
            console.log("i am priniter");
            $('nav').addClass('sticky');
        }else{
            $('nav').removeClass('sticky');
        }
    },{
            offset:'60px;'
        
    });


    $('.js--scroll-to-plans').click(function(){
        console.log('plans ma jaane');
        $('html, body').animate({scrollTop:$('.js--section-plans').offset().top},1000);
    });

    $('.js--scroll-to-start').click(function(){
        console.log('feature ma jaane');
        $('html, body').animate({scrollTop:$('.js--section-features').offset().top},1000);
    });

    // navigation scroll

        
   //animation on scrolss

   $('.js--wp-1').waypoint(function(direction){
        $('.js--wp-1').addClass('animated fadeIn');
   },{
       offset:'50%'
   })

   $('.js--wp-2').waypoint(function(direction){
    $('.js--wp-2').addClass('animated fadeIn');
},{
   offset:'50%'
})

$('.js--wp-3').waypoint(function(direction){
    $('.js--wp-3').addClass('animated fadeInUp');
},{
   offset:'50%'
})

$('.js--wp-4').waypoint(function(direction){
    $('.js--wp-4').addClass('animated pulse');
},{
   offset:'50%'
})


// mobile nav

$('.mobile-nav-icon').unbind('click').click(function(event){
    
    var nav=$('.main-nav');
    nav.slideToggle();
    event.stopPropagation();
    
    
  
});
 
})   

