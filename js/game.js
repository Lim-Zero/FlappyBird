const bird = document.querySelector('#bird');
let f = 0;
let step = 0;
let birdTop = 200;
let deltaTop = 0;
let birdRotate = 0;
setInterval(() => {
    f++;
    deltaTop += 0.3;
    birdTop += deltaTop;
    if (birdTop < 0) {
        birdTop = 0;
    }else if(birdTop>520){
        birdTop = 520;
    }
    bird.style['top'] = birdTop + 'px';
    if (f % 3 == 0) {
        step++;
        if (step > 2) step = 0;
        bird.style['background-position'] = -step * 100 + '% 0';
    }
}, 20);

gamebox.onclick = () => {
    deltaTop = -14;
    birdRotate = -80;
};

setInterval(() => {
    birdRotate += 3;
    bird.style['transform'] = 'rotate(' + birdRotate + 'deg)';
}, 20);
