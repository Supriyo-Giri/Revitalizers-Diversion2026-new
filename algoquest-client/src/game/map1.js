export function createMap() {

  // Player
  window.ball = createSprite(10, 10, 15, 15);
  ball.shapeColor = "blue";

  // Group for walls
  window.walls = new Group();

  function addWall(x, y, w, h) {
    let wall = createSprite(x, y, w, h);
    wall.shapeColor = "black";
    walls.add(wall);
  }

  // Walls
  addWall(0, 60, 100, 10);
  addWall(100, 0, 10, 100);
  addWall(200, 100, 100, 10);
  addWall(100, 250, 10, 100);
  addWall(360, 390, 10, 100);
  addWall(395, 290, 100, 10);
  addWall(290, 200, 10, 150);
  addWall(180, 310, 100, 10);
  addWall(180, 395, 10, 100);
  addWall(0, 120, 200, 10);
  addWall(330, 160, 10, 100);
  addWall(250, 330, 10, 100);
  addWall(300, 20, 10, 100);
  addWall(50, 325, 10, 100);
  addWall(180, 245, 100, 10);
  addWall(220, 150, 150, 10);
  addWall(165, 35, 100, 10);
  addWall(395, 153, 140, 10);
  addWall(0, 200, 130, 10);
  addWall(360, 0, 10, 200);
  addWall(315, 395, 10, 140);

  // Win plate
  window.winplate = createSprite(395, 395, 29, 20);
  winplate.shapeColor = "green";
}