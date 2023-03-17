'use strict';
const panelControl = document.querySelector('#panel-control');
const panelGame = document.querySelector('#game');
const btLevel = document.querySelector('#btLevel');
const message = document.querySelector('#message');
const btPlay = document.querySelector('#btPlay');
const elementos = panelControl.querySelectorAll('.list-item')

let cardsLogos = ['angular', 'bootstrap', 'html', 'javascript', 'vue', 'svelte', 'react', 'css', 'backbone', 'ember'];

let card

// Algoritmo Fisher-Yates - Algoritmo que baralha um array.
const shuffleArray = array => {
     for (let i = array.length - 1; i > 0; i--) {
     const j = Math.floor(Math.random() * (i + 1));
     const temp = array[i];
     array[i] = array[j];
     array[j] = temp;
     }
}
     

reset();

function reset(){
    message.textContent = '';
    message.classList.remove('hide');
    
    console.log('Estou na funcao reset!');
    if(btLevel.value == 0){ 
        btPlay.disabled=true;
        panelGame.style.display = 'none';
        //console.log("O valor do btLevel é " + btLevel.value);
    }
    else{ 
        btPlay.disabled=false;
        panelGame.style.display = 'grid';
        //console.log("O valor do btLevel é " + btLevel.value);
    }
    elementos.forEach(element => {
        element.classList.remove('gameStarted')
    });
}

function stopGame(){
    btLevel.disabled = false;
    btPlay.textContent = 'Iniciar Jogo';
    reset();
}

function startGame(){
    btLevel.disabled = true;
    btPlay.textContent = 'Terminar Jogo';
    shuffleArray(cardsLogos);
    console.table(cardsLogos);
    message.classList.add('hide');
    elementos.forEach(element => {
        element.classList.add('gameStarted')
    });
}

btLevel.addEventListener('change', reset);
btPlay.addEventListener('click', ()=>{if(btPlay.textContent == 'Terminar Jogo'){
    stopGame();
}else{
    startGame();
}});