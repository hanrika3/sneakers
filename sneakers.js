// ここからハンバーガーメニュー

$(function () {
    $('.js-btn').on('click', function () { // js-btnクラスをクリックすると、
    $('.menu , .btn , .btn-line').toggleClass('open'); // メニューとバーガーの線にopenクラスをつけ外しする
})
});

// ここまでハンバーガーメニュー

$(function () {
    $(window).scroll(function () {
    $('.sneakers-pic1').each(function () {
    const targetElement = $(this).offset().top;
    const scroll = $(window).scrollTop();
    const windowHeight = $(window).height();
    if (scroll > targetElement - windowHeight) {
    $(this).addClass('view');
}
});
});
});

$(function () {
    $(window).scroll(function () {
    $('.sneakers-pic2').each(function () {
    const targetElement = $(this).offset().top;
    const scroll = $(window).scrollTop();
    const windowHeight = $(window).height();
    if (scroll > targetElement - windowHeight) {
    $(this).addClass('view');
}
});
});
});

$(function () {
    $(window).scroll(function () {
    $('.sneakers-pic3').each(function () {
    const targetElement = $(this).offset().top;
    const scroll = $(window).scrollTop();
    const windowHeight = $(window).height();
    if (scroll > targetElement - windowHeight) {
    $(this).addClass('view');
}
});
});
});

$(function () {
    $(window).scroll(function () {
    $('.sneakers-pic4').each(function () {
    const targetElement = $(this).offset().top;
    const scroll = $(window).scrollTop();
    const windowHeight = $(window).height();
    if (scroll > targetElement - windowHeight) {
    $(this).addClass('view');
}
});
});
});

$(function () {
    $(window).scroll(function () {
    $('.sneakers-pic5').each(function () {
    const targetElement = $(this).offset().top;
    const scroll = $(window).scrollTop();
    const windowHeight = $(window).height();
    if (scroll > targetElement - windowHeight) {
    $(this).addClass('view');
}
});
});
});

$(function () {
    $(window).scroll(function () {
    $('.sneakers-pic6').each(function () {
    const targetElement = $(this).offset().top;
    const scroll = $(window).scrollTop();
    const windowHeight = $(window).height();
    if (scroll > targetElement - windowHeight) {
    $(this).addClass('view');
}
});
});
});

$(function () {
    $(window).scroll(function () {
    $('.sneakers-pic7').each(function () {
    const targetElement = $(this).offset().top;
    const scroll = $(window).scrollTop();
    const windowHeight = $(window).height();
    if (scroll > targetElement - windowHeight) {
    $(this).addClass('view');
}
});
});
});

$(function () {
    $(window).scroll(function () {
    $('.sneakers-pic8').each(function () {
    const targetElement = $(this).offset().top;
    const scroll = $(window).scrollTop();
    const windowHeight = $(window).height();
    if (scroll > targetElement - windowHeight) {
    $(this).addClass('view');
}
});
});
});

$(function () {
    $(window).scroll(function () {
    $('.sneakers-pic9').each(function () {
    const targetElement = $(this).offset().top;
    const scroll = $(window).scrollTop();
    const windowHeight = $(window).height();
    if (scroll > targetElement - windowHeight) {
    $(this).addClass('view');
}
});
});
});