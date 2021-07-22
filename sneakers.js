// ここからハンバーガーメニュー

$(function(){
    /*=================================================
    スマホメニュー
    ===================================================*/
    // ハンバーガーメニューのクリックイベント
    // 解説は、「中級編：ストアサイト（インテリア）」参照
$('.toggle_btn').on('click', function() {
    if (!$('#header2').hasClass('open')) {
        $('#header2').addClass('open');
    } else {
$('#header2').removeClass('open');
}
});

    // #maskのエリアをクリックした時にメニューを閉じる
$('#mask').on('click', function() {
$('#header2').removeClass('open');
});

    // リンクをクリックした時にメニューを閉じる
$('#navi a').on('click', function() {
$('#header2').removeClass('open');
});

    /*=================================================
    スムーススクロール
    ===================================================*/
    // ページ内リンクのイベント
$('a[href^="#"]').click(function(){
      // リンクを取得
    let href= $(this).attr("href");
      // ジャンプ先のid名をセット
    let target = $(href == "#" || href == "" ? 'html' : href);
      // トップからジャンプ先の要素までの距離を取得
    let position = target.offset().top;
      // animateでスムーススクロールを行う
      // 600はスクロール速度で単位はミリ秒
$("html, body").animate({scrollTop:position}, 600, "swing");
    return false;
});

//   ここまでハンバーガーメニュー

    /*=================================================
    PICK UP スライダー
    ===================================================*/
    // カルーセル用 jQueryプラグイン「slick」の設定
    // マニュアル：https://kenwheeler.github.io/slick/
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
      });

    /*=================================================
    スクロール時の画像フェード表示
    ===================================================*/
    // スクロール時のイベント
    $(window).scroll(function() {
      // fadeinクラスに対して順に処理を行う
    $('.fadein').each(function() {
        // スクロールした距離
        let scroll = $(window).scrollTop();
        // fadeinクラスの要素までの距離
        let target = $(this).offset().top;
        // 画面の高さ
        let windowHeight = $(window).height();
        // fadeinクラスの要素が画面下にきてから200px通過した
        // したタイミングで要素を表示
        if (scroll > target - windowHeight + 200) {
    $(this).css('opacity','1');
    $(this).css('transform','translateY(0)');
        }
    });
    });
});

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