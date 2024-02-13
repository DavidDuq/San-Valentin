const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const gif = document.querySelector('.gif');
const siBtn = document.querySelector('.si-btn');
const noBtn = document.querySelector('.no-btn');

siBtn.addEventListener('click',()=>{
    question.innerHTML = " Gracias por aceptar reina mia <3 "
    gif.src = "https://i.pinimg.com/originals/2d/c8/8f/2dc88ffcbdce75ecb53272379d1a7839.gif"

});

noBtn.addEventListener('mouseover', ()=>{
    const noBtnRec = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRec.width;
    const maxY = window.innerHeight - noBtnRec.height;

    const randomX = Math.floor(Math.random()* maxX);
    const randomY = Math.floor(Math.random()* maxY);

    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
})



