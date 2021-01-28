var canvas;
var music;
var surface1, surface2, surface3, surface4;
var box;
var edge;

function preload(){
    music = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(800,600);
    
    //create 4 different surfaces

    surface1 = createSprite(100,550,190,50);
    surface1.shapeColor = "red";
    surface2 = createSprite(300,550,190,50);
    surface2.shapeColor = "yellow";
    surface3 = createSprite(500,550,190,50);
    surface3.shapeColor = "green";
    surface4 = createSprite(700,550,190,50);
    surface4.shapeColor = "blue";

    //create box sprite and give velocity

    box = createSprite(random(20,750),100,50,50);
    box.shapeColor = "white";
    box.velocityX = 5;
    box.velocityY = 4;

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edge = createEdgeSprites();
    box.bounceOff(edge);
    //add condition to check if box touching surface and make it box

    if(surface1.isTouching(box) && box.bounceOff(surface1)){
        box.shapeColor = "red";
    }
    if(surface2.isTouching(box) && box.bounceOff(surface2)){
        box.shapeColor = "yellow";
        box.velocityX = 0;
        box.velocityY = 0;
    }
    if(surface3.isTouching(box) && box.bounceOff(surface3)){
        box.shapeColor = "green";
    }
    if(surface4.isTouching(box) && box.bounceOff(surface4)){
        box.shapeColor = "blue";
        music.stop();
    }
    
    drawSprites();
}   