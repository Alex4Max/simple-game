function checkKeyDown(event) {
    let char = event.keyCode;
    if (char == 38) {
        bee.up = true;
        event.preventDefault();
    }
    if (char == 40) {
        bee.down = true;
        event.preventDefault();
    }
    if (char == 37) {
        bee.left = true;
        event.preventDefault();
    }
    if (char == 39) {
        bee.right = true;
        event.preventDefault();
    }
}

function checkKeyUp(event) {
    let char = event.keyCode;
    if (char == 38) {
        bee.up = false;
        event.preventDefault();
    }
    if (char == 40) {
        bee.down = false;
        event.preventDefault();
    }
    if (char == 37) {
        bee.left = false;
        event.preventDefault();
    }
    if (char == 39) {
        bee.right = false;
        event.preventDefault();
    }
}

