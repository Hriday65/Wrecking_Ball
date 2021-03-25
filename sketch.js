const Engine=Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var engine,world
var ground
var box1,box2,box3

function setup(){
    createCanvas(3000,800)
    engine=Engine.create()
    world=engine.world

    ground = new Ground(600,600,1200,20)
    box1 = new Building(600,100,150,500)
    box2 = new Building(800,100,150,450)
    box3 = new Building(1000,100,150,350)
    ball = new Ball(200,200,80,80)
    rope = new Rope(ball.body,{x:500,y:50})
}


function draw(){
    background(255)
    Engine.update(engine)
    
    ground.display()
    box1.display()
    box2.display()
    box3.display()
    ball.display()
    rope.display()
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}