const Engine = Matter.Engine
 const World = Matter.World
 const Events = Matter.Events
 const Bodies = Matter.Bodies;
 var world,engine
var snow1img,snow2img,snow3img
var snowobj=[]
function preload(){
 
 snow2img=loadImage("snow3.jpg")
}

function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world=engine.world
}

function draw() {
  background(snow2img);
  Engine.update(engine)  
  if(frameCount%5 === 0){

    snowobj.push(new Snow(random(10,width),10));
    }
    for( var p = 0; p <snowobj.length;p++){
      snowobj[p].display();

    }
  drawSprites();
}