function collides(xStart, yStart, xEnd, yEnd, x2Start, y2Start, x2End, y2End) {
    return !(xEnd <= x2Start || xStart > x2End ||
    yEnd <= y2Start || yStart > y2End);
}

function boxCollides(pos, size, pos2, size2) {
    return collides(pos[0], pos[1],
        pos[0] + size[0], pos[1] + size[1],
        pos2[0], pos2[1],
        pos2[0] + size2[0], pos2[1] + size2[1]);
}

function checkCollisions() {
    for (let i = 0; i < golds.length; i++) {
        let pos = [golds[i].drawX, golds[i].drawY];
        let size = [golds[i].width, golds[i].height];

        if (boxCollides(pos, size, [bee.drawX, bee.drawY], [bee.width, bee.height])) {
            golds.splice(i, 1);
            i--;
            score += 100;
            break;
        }
    }
    for (let i = 0; i < enemies.length; i++) {
        let pos = [enemies[i].drawX, enemies[i].drawY];
        let size = [enemies[i].width, enemies[i].height];

        if (boxCollides(pos, size, [bee.drawX, bee.drawY], [bee.width, bee.height])) {
            health--;
            enemies.splice(i, 1);
            i--;
            if (health <= 8) {
                bee.srcY = 220;
            }
            if (health <= 3) {
                bee.srcY = 300;
            }
            if (health <= 0) {
                gameOver();
            }
        }
    }
}
