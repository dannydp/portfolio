$(document).ready(function () {

    //Scroll-top arraw
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.scroll-up').fadeIn();
        } else {
            $('.scroll-up').fadeOut();
        }
    });
    $(".scroll-up").click(function () {
        $("html, body").animate({scrollTop: 0}, "slow");
        return false;
    });


    //Slide to the node
    $('a[href^="#"], a[href^="."]').click(function () { // если в href начинается с # или ., то ловим клик
        var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href
        if ($(scroll_el).length !== 0) { // проверим существование элемента чтобы избежать ошибки
            $('html, body').animate({scrollTop: $(scroll_el).offset().top}, 500); // анимируем скроолинг к элементу scroll_el
        }
        return false; // выключаем стандартное действие
    });
});

