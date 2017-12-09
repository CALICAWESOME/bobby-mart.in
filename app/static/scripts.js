// TODO: can I do an ajax thing to the server to get these instead of hardcoding them?
const imgs = ['m1saka0.png','m1saka1.png','m1saka2.png','m1saka3.png','m1saka4.png','m1saka5.png','m1saka6.png'];
let curr = 0, shakeInterval;
$(window).on('load', () => {
    // fix about tab
    let aboutBodyHeight = $('.tabBody').outerHeight();
    $('#about').css('bottom', -aboutBodyHeight);
    $('body').css('background-color', randomColor());
    const image = $('img');
    image.hover(shakeItUp, stopShaking);
    image.click(cycleImg);
    cycleColor();
});
function shakeItUp() {
    let x, y, maxShakeDistance = 1.5;
    const doTheThing = () => {
        x = randomRange(2 * maxShakeDistance) - maxShakeDistance;
        y = randomRange(2 * maxShakeDistance) - maxShakeDistance;
        $(this).css({'-webkit-transform':'translate(' + x + 'px,' + y + 'px)'});
    };
    // FUCK EXPLICIT SELECTORS I WANNA USE $(this) GODDAMMIT
    shakeInterval = setInterval($.proxy(doTheThing, $(this)), 10);
}
function stopShaking() {
    clearInterval(shakeInterval);
    $(this).css({'-webkit-transform':'translate(0,0)'})
}
function cycleColor() { $('body').animate({backgroundColor: randomColor()}, 3000, cycleColor) }
function cycleImg() {
    // don't show the same image twice in a row
    let next;
    do {
        next = randomRange(imgs.length);
    } while (next === curr);
    curr = next;
    $(this).attr('src', '/static/' + imgs[curr]);
}
/////////////
// helpers //
/////////////
function randomColor() { return '#' + (Math.random()*0xFFFFFF<<0).toString(16) }
function randomRange(max) { return Math.floor(Math.random()*max) }
