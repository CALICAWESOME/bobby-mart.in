var curr = 0;
var imgs = ['m1saka0.png','m1saka1.png','m1saka2.png','m1saka3.png','m1saka4.png','m1saka5.png','m1saka6.png'];
$(document).ready(function() {
    fixAboutTab();
    $('body').css('background-color', randomColor());
    cycleColor();
    var $image = $('img'), interval;
    $image.hover(function() {
        var x, y, shakeRange = 3;
        interval = setInterval(function() {
            x = randomRange(shakeRange)-(shakeRange/2);
            y = randomRange(shakeRange)-(shakeRange/2);
            $image.css({'-webkit-transform':'translate(' + x + 'px,' + y + 'px)'});
        }, 10);
    },
    function() {
        clearInterval(interval);
        $(this).css({'-webkit-transform':'translate(0,0)'})
    });
    $image.click(cycleImg);
});
function cycleColor() {
    $('body').animate({backgroundColor: randomColor()}, 3000, cycleColor);
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
    return '#'+(Math.random()*0xFFFFFF<<0).toString(16);
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
