class Sprite {
    constructor(srcX, srcY, drawX, drawY, width, height, speed, animFrameSpeed, frames, context) {
        this.srcX = srcX;
        this.srcY = srcY;
        this.drawX = drawX;
        this.drawY = drawY;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.animFrameSpeed = animFrameSpeed;
        this.frames = frames;
        this.context = context;
        this._index = 0;
        this.frame = 0;
    }

    clear() {
        this.context.clearRect(0, 0, width, height);
    }

    draw() {
        this.context.drawImage(sprite, this.srcX, this.srcY, this.width, this.height,
            this.drawX, this.drawY, this.width, this.height);
    }

    move() {
        this.drawX -= this.speed;
    }

    updateAnimation() {
        if (this._index >= this.animFrameSpeed) {
            this._index = 0;
            this.frame++;
        } else {
            this._index++;
        }

        if (this.frame >= this.frames) {
            this.frame = 0;
            this.srcX = 0;
        }
    }

    render() {
        this.updateAnimation();
        this.srcX = this.frame * this.width;
        this.draw();
    }
}


class Bee extends Sprite {
    constructor(srcX, srcY, drawX, drawY, width, height, speed, animFrameSpeed, frames, context) {
        super(srcX, srcY, drawX, drawY, width, height, speed, animFrameSpeed, frames, context);
        this.down = false;
        this.up = false;
        this.left = false;
        this.right = false;
    }

    defineDir() {
        if (this.down) {
            this.drawY += this.speed;
        }
        if (this.up) {
            this.drawY -= this.speed;
        }
        if (this.left) {
            this.drawX -= this.speed;
        }
        if (this.right) {
            this.drawX += this.speed;
        }
    }

    move() {
        this.defineDir();
        if (this.drawX < 10) {
            this.drawX = 10;
        }
        if (this.drawY < 50) {
            this.drawY = 50;
        }
        if (this.drawX > width - this.width - 300) {
            this.drawX = width - this.width - 300;
        }
        if (this.drawY > height - this.height) {
            this.drawY = height - this.height;
        }
    }

    draw() {
        this.clear();
        super.draw();
    }
}

