// Global Mode — No imports needed

let ball;
let walls;
let winplate;
let run_d1,run_back,idle,left_run,idle_left;
let a,lastMov;
window.preload = function () {
 run_d1 = loadAnimation("/img/run_1.png", "/img/run_2.png");
 run_back = loadAnimation("/img/rb_1.png", "/img/rb_2.png");
 idle = loadAnimation("/img/idle_0.png");
 left_run = loadAnimation("/img/leftrun_1.png","/img/leftIdle.png", "/img/leftrun_2.png");
 idle_left = loadAnimation("/img/leftIdle.png");

}
window.setup = function () {
  createCanvas(window.innerWidth, window.innerHeight);



  // Group for walls
  walls = new Group();

  function addWall(x, y, w, h) {
    let wall = createSprite(x, y, w, h);
    wall.shapeColor = "black";
    walls.add(wall);
  }

  a = createSprite(200,200,40,40);

  // Your 21 walls
 
  addWall(315, 395, 10, 140);

  // Win plate
  winplate = createSprite(395, 395, 29, 20);
  winplate.shapeColor = "green";

    // Player
  ball = createSprite(10, 10, 15, 15);
  ball.shapeColor = "blue";
    ball.addAnimation("idle", idle); 
     ball.addAnimation("idle_b", idle); 
      ball.addAnimation("idle_l", idle_left); 
    ball.addAnimation("run_up", run_back);
    ball.addAnimation("run_down", run_d1); 
    ball.addAnimation("run_left", left_run);
    ball.addAnimation("run_right", run_d1);
    ball.Collider = true;
    ball.scale = 0.35;
    ball.setCollider("circle", 0, 0, 70);
};

window.draw = function () {
  background(0,220,10);

  createEdgeSprites();
  //ball.bounceOff(edges);
    camera.position.x = ball.position.x;
    camera.position.y = ball.position.y;

    if(lastMov === "W"){
      ball.changeAnimation("idle_b"); 
    } else if(lastMov === "D"){
      ball.changeAnimation("idle_l"); 
    } else if(lastMov === "A"){
        ball.changeAnimation("idle_l");
    }else{
        ball.changeAnimation("idle");
    }


  // Movement
  if (keyDown("W")) {
    ball.y-=2
    ball.changeAnimation("run_up"); 
    lastMov = "W";
  } if (keyDown("A")) {
   ball.x-=2;
   lastMov = "A";
   ball.changeAnimation("run_left");
  } if (keyDown("S")) {
    ball.y+=2;
     ball.changeAnimation("run_down"); 
        lastMov = "S";
  } if (keyDown("D")) {
    ball.x+=2
    ball.changeAnimation("run_right"); 
    lastMov = "D";
  }
  
  

  // Reset if touching walls
    ball.collide(a)
    ball.debug = true

  // Win condition
  if (ball.overlap(winplate)) {
    textSize(40);
    fill("red");
    text("YOU WIN", 80, 200);

    ball.velocityX = 0;
    ball.velocityY = 0;
  }

  drawSprites();
};