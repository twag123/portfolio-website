

$(window).scroll( function () {
    var windScroll = $(window).scrollTop();
    var home = $('#home').offset().top - 50;
    var experience = $('#experience').offset().top - 50;
    var projects = $('#projects').offset().top - 50;
    var contact_me = $('#contact-me').offset().top - 900;

    if (windScroll >= home) {
        $('#home-btn').addClass('active');

        $('#experience-btn').removeClass('active');
        $('#projects-btn').removeClass('active');
        $('#contact-btn').removeClass('active');
    }

    if (windScroll >= experience) {
        $('#experience-btn').addClass('active');

        $('#home-btn').removeClass('active');
        $('#projects-btn').removeClass('active');
        $('#contact-btn').removeClass('active');
    } else {
        $('experience-btn').removeClass('active');
    }

    if (windScroll >= projects) {
        $('#projects-btn').addClass('active');

        $('#home-btn').removeClass('active');
        $('#experience-btn').removeClass('active');
        $('#contact-btn').removeClass('active');
    } else {
        $('#projects-btn').removeClass('active');
    }

    if (windScroll >= contact_me) {
        $('#contact-btn').addClass('active');

        $('#home-btn').removeClass('active');
        $('#experience-btn').removeClass('active');
        $('#projects-btn').removeClass('active');
    } else {
        $('contact-btn').removeClass('active');
    }

}).scroll();