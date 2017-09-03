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

//app 1
function app1() {
    console.log("app1");

    //generate random number
    var a = Math.random() * 10000000000;
    var b = a.toFixed();
    var sum = 0;
    // for (var i=0; i<b.length; i++){
    //     sum += parseInt(b.charAt(i));
    // }
    // while(sum > 10) {
    //     var temp = 0;
    //     b = sum.toFixed();
    //     for (var i=0; i<b.length; i++){
    //         temp += parseInt(b.charAt(i));
    //     }
    //     sum = temp;
    // }
    // if (sum > 6) {
    //     sum = sum % 6;
    // }
    var c = (b % 6) + 1;
    sum = c;
    console.log(sum);

    //init modal
    $("#modal_title").text("Random number between 1 and 6");
    $(".modal-body #container").empty();
    $(".modal-body #container").append("<p class='simple-text'>"+sum+"</p>");

    $('#app_modal').modal({
        backdrop: "static",
        keyboard: "true"
    });
}

//app 2
var current_index = 0;
var max_seq = 6; //defines how many pictures to be shown
function app2(){
    console.log("app2");

    //generate elements for album
    $("#modal_title").text("Album");
    $(".modal-body #container").empty();
    var img_url = 'images/album/'+(current_index % max_seq + 1)+'.jpg';
    var html = 
        '<span onclick="backward();" class="big-text noselect" style="position: absolute; left: 5%; top:50%; cursor: pointer;"><</span>'+
        '<figure class="effect-hover-1">'+
            '<img id="album_img" src="'+img_url+'" alt="img01" width="80%" style="position: relative; left:10%; opacity:0.8;"/>'+
        '</figure>'+
        '<span onclick="forward();" class="big-text noselect" style="position: absolute; left: 91%; top:50%; cursor: pointer;">></span>';
    $(".modal-body #container").append(html);
    
    $('#app_modal').modal({
        backdrop: "static",
        keyboard: "true"
    });
}

function forward() {
    current_index++;
    console.log("forward"+(current_index % max_seq + 1));
    var img_url = 'images/album/'+(current_index % max_seq + 1)+'.jpg';
    $("#album_img").attr("src", img_url);
}

function backward() {
    current_index--;
    if (current_index < 0){
        current_index = max_seq * max_seq - 1;
    }
    console.log("backward"+(current_index % max_seq + 1));
    var img_url = 'images/album/'+(current_index % max_seq + 1)+'.jpg';
    $("#album_img").attr("src", img_url);
}

//app 3
