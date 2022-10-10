const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds1');
const clouds3 = document.querySelector('.clouds3');


const jump=() =>{
    mario.classList.add('jump');

    setTimeout(() =>{
        mario.classList.remove('jump');
    }, 700);
};

const loop =setInterval(()=>{
    
    const pipePosition = pipe.offsetLeft;
    const marioPosition = window.getComputedStyle(mario).bottom.replace('px', '');
    const cloudsPosition  = clouds.offsetLeft;
    const clouds3Position  = clouds3.offsetLeft;

    if(pipePosition <= 124 && pipePosition > 0 && marioPosition < 102 && clouds3Position && cloudsPosition){

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = 'imgs/game-over.png'
        mario.style.width = '70px';
        mario.style.marginLeft = '50px';
         
        clouds.style.animation = 'none';
        clouds.style.left = `${cloudsPosition}px`;

        clouds3.style.animation = 'none';
        clouds3.style.left = `${clouds3Position}px`;

        clearInterval(loop)
    }
 
}, 10);


document.addEventListener('keydown', jump);