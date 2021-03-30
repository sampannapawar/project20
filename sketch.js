var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);

  
  car = createSprite(50,280,50,50)
  wall = createSprite(1500,200,60,30)

  speed= random(55,90);
  weight = random(400,1500);
  
  car.velocityx = speed;
}

function draw() {
  background("black");  
  
  ;
  if(wall.x - car.x < (car.width + wall. width)/2) {
     car.velocityX = 0;
     var defoemation = 0.5 * weight * speed * speed/22509;
     if(deformation>180){
    car.shapecolour = "red";
     }
     if (deformatioln<180 && deformation> 100){
       car.shapecolour = "yellow";
     }
     if (deformation<100){
       car.shapecolour = "green"
     }
    }
   
   
  drawSprites();
}
  