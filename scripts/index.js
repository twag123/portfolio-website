// Change styling of nav bar active button when pressed
$(".nav-link").on("click", function () {
    $(".nav-link").removeClass("active");
    $(this).toggleClass("active");
});
