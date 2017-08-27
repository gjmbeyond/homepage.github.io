 jQuery(document).ready(function($) {
 
    $(".scroll a, .navbar-brand, .gototop,.explore").click(function(event){   
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 600,'swing');
    $(".scroll li").removeClass('active');
    $(this).parents('li').toggleClass('active');
    });
    });






var wow = new WOW(
  {
    boxClass:     'wowload',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true        // act on asynchronously loaded content (default is true)
  }
);
wow.init();




$('.carousel').swipe( {
     swipeLeft: function() {
         $(this).carousel('next');
     },
     swipeRight: function() {
         $(this).carousel('prev');
     },
     allowPageScroll: 'vertical'
 });


function app1() {
    console.log("app1");

    //generate random number
    var a = Math.random() * 10000000000;
    var b = a.toFixed();
    var sum = 0;
    for (var i=0; i<b.length; i++){
        sum += parseInt(b.charAt(i));
    }
    while(sum > 10) {
        var temp = 0;
        b = sum.toFixed();
        for (var i=0; i<b.length; i++){
            temp += parseInt(b.charAt(i));
        }
        sum = temp;
    }
    if (sum > 6) {
        sum = sum % 6;
    }
    console.log(sum);

    //init modal
    $("#modal_title").text("1~6的随机数");
    $(".modal-body #container").empty();
    $(".modal-body #container").append("<p class='simple-text'>"+sum+"</p>");

    $('#app_modal').modal({
        backdrop: "static",
        keyboard: "true"
    });
}


