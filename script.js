const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let isJumping = false;
let position = 0;

const handleKeyUp = (event) => {
    if(event.keyCode === 32){
        if(!isJumping) {
            jump();
        }
    }

}
const jump = () => {
  
    isJumping = true;

    let upInterval = setInterval(() => {
        if(position >= 150) {
            clearInterval(upInterval);
            //descendo
            let downInterval = setInterval(() => {
                if(position <= 0) {
                    clearInterval(downInterval);
                    isJumping= false;
                } else {
                    position -= 20;
                    dino.style.bottom = position + 'px';
                }
            }, 20) 
            
            // para subir
        } else {
            position += 20;     
        dino.style.bottom = position + 'px';
        }
    }, 20);
}
    function createCactus () {
        const cactus = document.createElement('div');
        let cactusPosition = 1000;
        let randomTime = Math.random() * 6000;


        cactus.classList.add('cactus');
        cactus.style.left = 1000 + 'px';
        background.appendChild(cactus);
        
        let leftInterval = setInterval(() => {
            cactusPosition -= 1 ;
            cactus.style.left = cactusPosition + 'px';
            // novos cactus surgirem
        if(cactusPosition < -60) {
            clearInterval(leftInterval);
            background.removeChild(cactus);
            // para se o dinossauro bater no cactus, o jogo acaba 
        } else if (cactusPosition > 0  && cactusPosition < 60 && position < 60) {
            //game Over
            clearInterval(leftInterval);
            document.body.innerHTML = "Game Over"
        } else {
            cactusPosition -= 20;
            cactus.style.left = cactusPosition + 'px';
        }
        }, 20);
        // executar uma função depois de um determinado tempo
        setTimeout(createCactus, randomTime);
}
createCactus();
document.addEventListener('keyup', handleKeyUp);
