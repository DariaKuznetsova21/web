function openCurtain() {
    const curtain = document.getElementById('curtain');

    curtain.style.transitionDuration = '1s';
    curtain.style.transform = 'translateY(-100%)';

    const lamp = document.createElement('img');
    lamp.id = 'lamp';
    lamp.src = 'images/lamp.png';
    lamp.style.cursor = 'pointer';

    let timer;
    let holdDelay = 200;

    lamp.addEventListener('mousedown', () => {
        timer = setTimeout(() => {
            timer = null;
            const toggler = document.getElementById('switch');
            if (toggler.className.includes('on')) {
                toggler.className = 'switch';
                toggler.style.animation = 'off 0.1s';
                lightsOff();
            } else {
                toggler.className += ' on';
                toggler.style.animation = 'on 0.1s';
                lightsOn();
            }
        }, holdDelay)
    })

    lamp.addEventListener('mouseup', () => {
        if (timer) {
            clearTimeout(timer);
        }
        const toggler = document.getElementById('switch');
        toggler.style.animation = '';
    })

    const lampTop = document.createElement('img');
    lampTop.id = 'lamp-top';
    lampTop.src = 'images/lamp-top.png';
    
    const lampSwitch = document.createElement('img');
    lampSwitch.id = 'switch';
    lampSwitch.className = 'switch';
    lampSwitch.src = 'images/lamp-switch.png';

    setTimeout(() => {
        document.body.appendChild(lamp);
        document.body.appendChild(lampTop);
        document.body.appendChild(lampSwitch);
    }, 600)

    setTimeout(() => {
        curtain.remove();
    }, 1000)
}

function lightsOn() {
    const hat = document.createElement('img');
    hat.src = 'images/hat.png';
    hat.className = 'hat';
    hat.id = 'hat';
    hat.onclick = function () { doMagic(); }

    const lady = document.createElement('img');
    lady.src = 'images/2.jpg';
    lady.className = 'lady';    
    lady.id = 'lady';    

    const light = document.createElement('div');
    light.className = 'light';
    light.id = 'light';

    const width = window.innerWidth;

    light.style.borderTop = `${width}px solid transparent`;
    light.style.borderLeft = `${width}px solid transparent`;
    light.style.borderRight = `${width}px solid transparent`;
    light.style.borderBottom = `${width}px solid yellow`;
    light.style.top = `-${window.innerWidth - 120}px`

    document.body.appendChild(light);
    
    requestAnimationFrame(() => light.style.animation = 'fade 1s');

    setTimeout(() => {
        document.body.appendChild(hat);
        document.body.appendChild(lady);
    }, 100)
}

function lightsOff() {
    const bunny = document.getElementById('bunny');
    const pigeon = document.getElementById('pigeon');
    const hat = document.getElementById('hat');
    const lady = document.getElementById('lady');
    const light = document.getElementById('light');

    light.style.animation = 'fadeout 1s';
    if (bunny) bunny.style.animation = 'fadeout 1s';
    if (pigeon) pigeon.style.animation = 'fadeout 1s';
    if (hat) hat.style.animation = 'fadeout 1s';
    if (lady) lady.style.animation = 'fadeout 1s';

    setTimeout(() => {
        if (bunny) bunny.remove();
        if (pigeon) pigeon.remove();
        if (hat) hat.remove();
        if (lady) lady.remove();
        light.remove();
    }, 300);

}

function doMagic() {
    let show = 'bunny';
    let hide = 'pigeon';

    if (document.getElementById('bunny') != undefined) {
        hide = 'bunny';
        show = 'pigeon';
    }

    if (document.getElementById('pigeon') != undefined && show == 'pigeon') {
        return;
    }

    const hideEl = document.getElementById(hide);

    if (hideEl != undefined) {
        hideEl.style.animation = 'hide 1s';
        setTimeout(() => {
            hideEl.remove();
        }, 1000);
    }

    const showEl = document.createElement('img');
    showEl.src = `/images/${show}.png`;
    showEl.className = 'animal';
    showEl.id = show;

    showEl.onclick = function () {
        doMagic();
    };
    
    document.body.appendChild(showEl);

    requestAnimationFrame(() => showEl.style.animation = 'show 1s');
}