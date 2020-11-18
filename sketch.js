var wall, bullet, speed, weight;
var damage, thickness;

function setup() {
  createCanvas(1600, 400);
  bullet = createSprite(50, 200, 20, 50);
  bullet.shapeColour = "white";
  thickness = random(22, 83);
  wall = createSprite(800, 200, thickness, height / 2);
  wall.shapeColour = (80, 80, 80);
  speed = random(223, 321);
  bullet.velocityX = speed;
  weight = random(30, 52);
  damage = 0.5 * weight * speed * speed / thickness * thickness * thickness;
}

function draw() {
  background("black");
  if (hasCollided(bullet, wall)) {
    bullet.velocityX = 0;
   

    if (damage > 10) {
      bullet.shapeColor = "green";
    }
    if (damage < 10) {
      bullet.shapeColor = "red";
    }
  }
  console.log(damage);
  drawSprites();
}
function hasCollided(bullet, wall) {
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;
  if (bulletRightEdge >= wallLeftEdge) {
    return true;
  }
  return false;
}
