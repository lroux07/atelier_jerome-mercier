let f = 0

function setup() {
  createCanvas(innerWidth, innerHeight);
  // bgColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  background(1,13,133)
}

function draw() {
  f++;
  for(let i of tab) {
    i.x += random(-50, 2);
    i.y += random(-50, 2);
    i.z += random(-50, 2);

    if(i.x > width / 2) {
      fill(255)
      stroke(0)
    } else {
      fill(0)
      stroke(255)
    }

    circle(i.x, i.y, i.z)
  }


  // fill(255);
  // noStroke();
  // ellipse(width * 0.5, height * 0.5, f);
}

// function windowResized() {
//   resizeCanva(windowWidth, windowHeight)
// }


tab = [];

function mousePressed() {
  let x = mouseX
  let y = mouseY
  let d = random(300, 400)

  tab.push(createVector(x, y, d));
  console.log(tab.length);
}