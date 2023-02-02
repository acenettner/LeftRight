// This is a slightly more readable version of leftright with comments
// and better formatting. I realize there are a lot of if statements when
// theys should be if else etc. This is because I wrote some of this with
// the 1KB limit in mind.

var canvas = document.getElementById("c");
var ctx = canvas.getContext("2d");
var gameOver = false;
var blocks = [160, 64]; // The first two are initialized so the player knows left vs right blocks
var score = 0;
var timer = null;
// Initialize rest of blocks
for (var i = 2; i < 8; i++) {
    randomize(blocks);
}
draw(blocks);
document.addEventListener("keydown", (event)=> {
    if (!gameOver) {
        if (timer == null) {
            timer = Date.now();
        }
        if (event.key == 'ArrowRight') {
            check(blocks, 160);
        }
        if (event.key == 'ArrowLeft') {
            check(blocks, 64);
        }
    }
})

// check if the correct input was used
function check(blocks, input) {
    if (Date.now() - timer >= 500) {
        alert("Took too long.\n Final score: " + score);
        gameOver = true;
    } else if (blocks[0] == input) {
        update(blocks);
        timer = Date.now();
    } else { 
        alert("Final score: " + score);
        gameOver = true;
    }
}

// draws the blocks to the screen
function draw(blocks) {
    ctx.clearRect(0, 0, 256, 256);
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, 256, 256);
    ctx.fillStyle = 'white';
    var j = 224;
    for (var i = 0; i < blocks.length; i++) {
        ctx.fillRect(blocks[i], j, 32, 32);
        j -= 32;
    }
}

// Updates x positions of blocks and their place in the queue, update score
function update(blocks) {
    score++;
    blocks.shift();
    randomize(blocks);
    draw(blocks);
}

// Randomizes blocks
function randomize(blocks) {
    var rand = Math.floor(Math.random()*10);
    if (rand < 5) {
        blocks.push(64);
    }
    if (rand > 4) {
        blocks.push(160);
    }
}