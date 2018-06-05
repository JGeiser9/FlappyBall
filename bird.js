//Constructor function for the bird
function Bird() {
  //Setting the initial position
  this.y = height/2;
  this.x = 64;

  this.gravity = 0.7;
  this.lift = -15;
  this.velocity = 0;

  this.show = () => {
    fill(255);
    ellipse(this.x, this.y, 32, 32);
  }

  this.up = () => {
    this.velocity += this.lift;
  }

  //Function to update the positioning of the bird (make it fall down)
  this.update = () => {
    this.velocity += this.gravity;
    this.velocity *= 0.9;
    this.y += this.velocity;

    if (this.y > height) {
      this.y = height;
      this.velocity = 0;
    }

    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }
  }
}
