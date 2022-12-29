const cavaleiro = document.querySelector('.cavaleiro') ;
const cone = document.querySelector('.cone') ;
const nuvens = document.querySelector('.nuvens');
const score = document.querySelector('.score');
let intervalo = null
let count = 0
let pontuação = () => {
    count++
    score.innerHTML = `Pontuação ${count}`
}

const jump = () => {
    cavaleiro.classList.add('jump');
    
    setTimeout (() => {
    
        cavaleiro.classList.remove('jump');
    
    },500)
}

const loop = setInterval(() => {
    const conePosition = cone.offsetLeft;
    const nuvensPosition = nuvens.offsetLeft;
    const cavaleiroPosition = +window.getComputedStyle(cavaleiro).bottom.replace('px','')
    let count = 0
    intervalo = setInterval(pontuação(200));
    if (conePosition <= 120 && conePosition > 0 && cavaleiroPosition < 80) {
        cone.style.animation = 'none';
        cone.style.left = `${conePosition}px` ;
        
        cavaleiro.style.animation = 'none';
        cavaleiro.style.bottom = `${conePosition}px` ;
        
        nuvens.style.animation = 'none';
        nuvens.style.left = `${nuvensPosition}px` ;
        clearInterval(loop)
        clearInterval()
    }   
    if (score > 1000) {
        
    }
},10)

document.addEventListener('keydown' , jump);