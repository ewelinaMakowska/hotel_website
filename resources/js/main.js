$(document).ready(() => {
    
    //show me more buttons animations:
    
    
     $('#js--btn-show-standard').on('click', () => {  
        
     $('.room-standard').slideDown();
     $('html, body').animate({scrollTop: $('.room-standard').offset().top}, 1000);
     
    });
    
     $('.room-standard').on('mouseout', () => {
       /* $('.room-standard').hide(); */
          $('.room-standard').slideUp();
        $('html, body').animate({scrollTop: $('.section-offer').offset().top}, 1000);
    });
    
    
    
    $('#js--btn-show-comfort').on('click', () => {   
          $('.room-comfort').slideDown();
        $('html, body').animate({scrollTop: $('.room-comfort').offset().top}, 1000);
          
    });
    
     $('.room-comfort').on('mouseout', () => {
        $('.room-comfort').hide();
        $('html, body').animate({scrollTop: $('.section-offer').offset().top}, 1000);
    });
    
    
    
    $('#js--btn-show-studio').on('click', () => {  
                 $('.room-studio').slideDown();
        $('html, body').animate({scrollTop: $('.room-studio').offset().top}, 1000);
 
    });
    
     $('.room-studio').on('mouseout', () => {
        $('.room-studio').hide();
        $('html, body').animate({scrollTop: $('.section-offer').offset().top}, 1000);
    });
    
    //to do: up maybe change hide na slideup
    
//links animations:
    //hero button:
    $('#btn-main').on('click', () => {
    $('html, body').animate({scrollTop: $('.js--section-offer').offset().top}, 1000); });
    
    //navbar:
    $('#js--about-us').on('click', () => {
    $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000); });
        
     $('#js--our-offer').on('click', () => {
    $('html, body').animate({scrollTop: $('.js--section-offer').offset().top}, 1000); });
         
     $('#js--directions').on('click', () => {
    $('html, body').animate({scrollTop: $('.js--section-google-maps').offset().top}, 1000); });
         
     $('#js--contact').on('click', () => {
    $('html, body').animate({scrollTop: $('.js--section-contact-form').offset().top}, 1000);
         
});
  
//sticky navigation
$('.js--section-features').waypoint(function(direction) {
    if(direction === "down") {
       $('nav').addClass('sticky');
       } else {
       $('nav').removeClass('sticky');
       }
}, {
    offset: '70px'
});    
    
//offers animations
    
$('#js--room-box-1').on('mousemove', () =>{
    $('#js--room-box-1').toggleClass('animated pulse');
});
    
$('#js--room-box-2').on('mousemove', () =>{
    $('#js--room-box-2').toggleClass('animated pulse');
});
    
$('#js--room-box-3').on('mousemove', () =>{
    $('#js--room-box-3').toggleClass('animated pulse');
});
    
//about us animations
$('#js--delicious-food').waypoint(function(direction) {
    $('#js--delicious-food').addClass('animated fadeInUp');
}, {
    offset: '50%'
});
    
$('#js--fast-internet').waypoint(function(direction) {
    $('#js--fast-internet').addClass('animated fadeInUp');
}, {
    offset: '50%'
});
    
$('#js--active-leisure').waypoint(function(direction) {
    $('#js--active-leisure').addClass('animated fadeInUp');
}, {
    offset: '50%'
});
    
$('#js--spa').waypoint(function(direction) {
    $('#js--spa').addClass('animated fadeInUp');
}, {
    offset: '50%'
});

//mobile nav
$('.js--nav-icon').click(function() {
    var nav = $('.js--main-nav');
    var icon = $('.js--nav-icon i');
    
    nav.slideToggle(200);
    
    if (icon.hasClass('ion-navicon-round')) {
        icon.addClass('ion-close-round');
        icon.removeClass('ion-navicon-round');
        } else {
        icon.addClass('ion-navicon-round');
        icon.removeClass('ion-close-round');
        }
})
    
});