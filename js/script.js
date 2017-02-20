window.onload = init;
let game;
let button = document.getElementById('button');
let gameOverBlock = document.getElementById('game-over');
let canvas;
let context;

let canvasBee;
let contextBee;

let canvasEnemy;
let contextEnemy;

let scoreText = document.getElementById('score');
let healthText = document.getElementById('health');

let width = 860;
let height = 640;

let background;
let backgroundNext;
let bgX = 0;
let bgNextX = width;
let sprite;
let bee;
let enemies = [];
let golds = [];

let health = 20;
let score = 0;

let isPlaying;

let count = 12;
let time = 5000;
let intervalOfCreating;


background = new Image();
background.src = 'img/vector-bg-with-A.png';
backgroundNext = new Image();
backgroundNext.src = 'img/vector-bg-with-A.png';

sprite = new Image();
sprite.src = 'img/sprite.png';


function init() {
    game = document.querySelector(".game");

    canvas = document.createElement("canvas");
    context = canvas.getContext("2d");
    canvas.classList.add("wrap");

    canvasBee = document.createElement("canvas");
    contextBee = canvasBee.getContext("2d");

    canvasEnemy = document.createElement("canvas");
    contextEnemy = canvasEnemy.getContext("2d");

    canvas.width = width;
    canvas.height = height;
    canvasBee.width = width;
    canvasBee.height = height;
    canvasEnemy.width = width;
    canvasEnemy.height = height;

    game.appendChild(canvas);
    game.appendChild(canvasBee);
    game.appendChild(canvasEnemy);

    bee = new Bee(0, 0, 0, height / 2, 100, 62, 5, 3, 3, contextBee);

    document.addEventListener('keydown', checkKeyDown, false);
    document.addEventListener('keyup', checkKeyUp, false);
    button.addEventListener('click', startLoop);
}


function createEnemy(n) {
    for (let i = 0; i < n; i++) {
        let enemyRandomX = Math.floor(Math.random() * width) + width;
        let enemyRandomY = Math.floor(Math.random() * height);
        enemies.push(new Sprite(0, 170, enemyRandomX,
            enemyRandomY, 100, 30, 4, 8, 3, contextEnemy));
    }
    for (let i = 0; i < Math.floor(n / 3); i++) {
        let enemyRandomX = Math.floor(Math.random() * width) + width;
        let enemyRandomY = Math.floor(Math.random() * height);
        golds.push(new Sprite(0, 380, enemyRandomX,
            enemyRandomY, 40, 40, 2, 10, 6, contextEnemy));
    }
}

function startCreating() {
    stopCreating();
    intervalOfCreating = setInterval(() => {
        createEnemy(count)
    }, time);
}

function stopCreating() {
    clearInterval(intervalOfCreating);
}

function update() {
    moveBackground();
    bee.move();
    updateArrayOfEnemies(enemies);
    updateArrayOfEnemies(golds);
    checkCollisions();
    updateText();
}

function updateArrayOfEnemies(arrOfEnemies) {
    for (let i = 0; i < arrOfEnemies.length; i++) {
        arrOfEnemies[i].move();
        arrOfEnemies[i].render();
        if (arrOfEnemies[i].drawX + arrOfEnemies[i].width < 0) {
            arrOfEnemies.splice(i, 1);
            i--;
        }
    }
}

function drawObjects() {
    bee.draw();
    bee.render();
    contextEnemy.clearRect(0, 0, width, height);
}

function drawBackground() {
    context.clearRect(0, 0, width, height);
    context.drawImage(background, 0, 0, 1280, 640, bgX, 0, width, height);
    context.drawImage(backgroundNext, 0, 0, 1280, 640, bgNextX, 0, width, height);
}


function moveBackground() {
    let bgSpeed = 2;
    bgX -= bgSpeed;
    bgNextX -= bgSpeed;
    if (bgX + width < 0) {
        bgX = width - 2;
    }
    if (bgNextX + width < 0) {
        bgNextX = width - 2;
    }
}

function updateText() {
    scoreText.innerHTML = `SCORE : ${score}`;
    healthText.innerHTML = `HEALTH : ${health}`;
}