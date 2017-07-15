var curr = 0;
var imgs = ['m1saka0.png','m1saka1.png','m1saka2.png','m1saka3.png','m1saka4.png','m1saka5.png','m1saka6.png'];
$(document).ready(function() {
    fixAboutTab();
    var ranCo = randomColor();
    $('body').css('background-color', ranCo[0]);
    cycleColor();
    var $image = $('img'), interval;
    $image.mouseenter(function() {
        var x, y, shakeRange = 3;
        interval = setInterval(function() {
            x = randomRange(shakeRange)-(shakeRange/2);
            y = randomRange(shakeRange)-(shakeRange/2);
            $image.css({'-webkit-transform':'translate(' + x + 'px,' + y + 'px)'});
        }, 10);
    });
    $image.mouseleave(function() {
        clearInterval(interval);
        $(this).css({'-webkit-transform':'translate(0,0)'})
    });
    $image.click(cycleImg);
});
function cycleColor() {
    var ranCo = randomColor();
    $('body').animate({backgroundColor: ranCo[0]}, 3000, cycleColor);
}
function cycleImg() {
    // don't show the same image twice in a row
    do {
        var gen = randomRange(imgs.length);
    } while (gen === curr);
    curr = gen;
    $(this).attr('src', '/static/' + imgs[curr]);
}
/////////////
// helpers //
/////////////
function randomColor() {
    var c = Math.random()*0xFFFFFF<<0;
    return ['#'+ c.toString(16), '#'+((~c >>> 0)-0xFF000000).toString(16)].sort();
}
function randomRange(max) {
    return Math.floor(Math.random()*max);
}
////////////
// fixers //
////////////
function fixAboutTab() {
    var $about = $('#about');
    $about.css('bottom', '-' + $about.find('.tabBody').outerHeight() +  'px');
}
