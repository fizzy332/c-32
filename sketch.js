const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var p1

var engine, world;
var rand;
var maxdrops=100;
function preload() {
                p1=loadImage("rock.png");
}

function setup(){
   
                engine = Engine.create();
                world = engine.world;
                createCanvas(1000,500);
               goku1= new goku(200,500)
     }
function draw(){
                    Engine.update(engine);
                    background(0);
               
                    goku1.display();
                    rock1();
                }
        
function rock1(){

    rand=Math.round(random(1,4))
    if(frameCount%80===0){
       rock=createSprite(random(1000,1200),random(200,500),10,10)
       rock=addImage(p1)
     rock.velocityX=-5
    
    }
    }


