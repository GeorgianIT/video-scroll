const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
// const text = intro.querySelector('h1');
//End section

const section = document.querySelector('section');

//Scrollmagic

const controller = new ScrollMagic.Controller();


//Scenes
const scene = new ScrollMagic.Scene({
    duration: 14000,
    triggerElement: intro,
    triggerHook: 0
}).setPin(intro).addTo(controller);

//Video Animation
let accelamount = 1;
let scrollpos = 0;
let delay = 0;

scene.on('update', e => {
    scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
    delay += (scrollpos - delay) * accelamount;

    console.log(delay, scrollpos);
    video.currentTime = delay;
}, 33.3);