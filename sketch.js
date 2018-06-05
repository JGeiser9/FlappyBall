let bird;
let pipes = [];

function setup() {
  createCanvas(400, 600);
  bird = new Bird();
  pipes.push(new Pipe());
}

function draw() {
  background(0);

  //Loop through the pipes array backwards
  for (let i = pipes.length-1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();
    if (pipes[i].hits(bird)) {
      console.log("You hit the Pipe!");
    }

    if (pipes[i].offScreen()) {
      pipes.splice(i, 1); //Getting rid of pipes when they move off the screen
    }
  }

  bird.show();
  bird.update();

  //Every 40 frames (remember 60fps) add a new pipe
  if (frameCount % 100 == 0) {
    pipes.push(new Pipe());
  }


}

function keyPressed() {
  if (key == ' ') {
    bird.up();
    //console.log("SPACE");
  }
}
