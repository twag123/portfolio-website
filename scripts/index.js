// Change styling of nav bar active button when pressed
$(".nav-link").on('click', function () {
    $(".nav-link").removeClass("active");
    $(this).toggleClass("active");
});


// Scroll to the top of page when clicked
$("#home").on('click', function () {
    $('html.body').animate({ scrollTop: 0 }, 'fast');
});