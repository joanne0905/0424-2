let particles = [];

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  for (let i = 0; i < 120; i++) {
    particles.push(new Particle());
  }
}

function draw() {
  background(10, 10, 30, 50);
  for (let p of particles) {
    p.update();
    p.show();
  }
}

class Particle {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.r = random(1, 4);
    this.xSpeed = random(-1, 1);
    this.ySpeed = random(-1, 1);
  }

  update() {
    let dx = mouseX - this.x;
    let dy = mouseY - this.y;
    let dist = sqrt(dx * dx + dy * dy);
    if (dist < 100) {
      this.x += dx * 0.01;
      this.y += dy * 0.01;
    } else {
      this.x += this.xSpeed;
      this.y += this.ySpeed;
    }
  
    if (this.x < 0 || this.x > width) this.xSpeed *= -1;
    if (this.y < 0 || this.y > height) this.ySpeed *= -1;
  }
  

  show() {
    noStroke();
    fill(0, 255, 255, 100);
    ellipse(this.x, this.y, this.r * 2);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
