const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }
    var ball_options ={
        restitution: 2
    }

   ground= Bodies.rectangle(200,390,width,20,ground_options);
   ball= Bodies.rectangle(200,200,40,40,ball_options)
    World.add(world,ground);
    World.add(world,ball);




}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,width,50);
    rect(ball.position.x,ball.position.y,40,40);
}
