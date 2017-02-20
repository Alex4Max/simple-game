function loop() {
    if (isPlaying) {
        drawBackground();
        drawObjects();
        update();
        requestAnimationFrame(loop);
    }
}

function startLoop() {
    reset();
    gameOverBlock.style.display = 'none';
    isPlaying = true;
    startCreating();
    loop();
}

function stopLoop() {
    isPlaying = false;
    reset();
}

function gameOver() {
    isPlaying = false;
    gameOverBlock.style.display = 'block';
}

function reset() {
    score = 0;
    health = 20;
    enemies = [];
    golds = [];
    bee.drawY = height / 2;
    bee.srcY = 0;
}