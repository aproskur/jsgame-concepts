/** @type {HTMLCanvasElement} */
const canvas2 = document.getElementById("canvas2");
const ctx2 = canvas2.getContext('2d');
const numberOfEnemies2 = 100;
let enemiesArray2 = [];
let gameFrame2 = 0;

class Enemy2 {
    constructor() {
        this.image = new Image();
        this.image.src = 'images/enemy2.png';

        //this.speed = Math.random() * 4 - 2;
        this.spriteWidth = 293;
        this.spriteHeight = 155;

        this.width = this.spriteWidth / 2.5;
        this.height = this.spriteHeight / 2.5;
        this.x = Math.random() * (canvas2.width - this.width);
        this.y = Math.random() * (canvas2.height - this.height);
        this.frame = 0;
        this.flapSpeed = Math.floor(Math.random() * 3 + 1);
    }
    update() {
        this.x += Math.random() * 5 - 2.5;
        this.y += Math.random() * 5 - 2.5;
        //animate sprites
        if (gameFrame2 % this.flapSpeed === 0) {
            this.frame > 4 ? this.frame = 0 : this.frame++;
        }
    }
    draw() {
        ctx2.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
    }
};

for (let i = 0; i < numberOfEnemies2; i++) {
    enemiesArray2.push(new Enemy2());
}

function animate() {
    ctx2.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    enemiesArray2.forEach(enemy => {
        enemy.draw();
        enemy.update();
    })
    gameFrame2++;
    requestAnimationFrame(animate);
}


animate();
