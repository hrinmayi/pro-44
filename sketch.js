var bg,bgimg,bg2;
var gameState=0;
var seed,seedimg;
var ground, human,humanimg,humangrp;

function preload(){
    bgimg=loadImage("BG1.png");
    seedimg=loadImage("mangoSeed.png");
    humanimg=loadImage("human.png");
}
function setup(){
    canvar=createCanvas(1400,650)
    if(gameState === 0){
        bg=createSprite(700,350,1200,650);
        bg.addImage(bgimg);
        bg.scale=2.69;
        bg.velocityX=-3;
        bg2=createSprite(2095,350,1200,650);
        bg2.addImage(bgimg);
        bg2.scale=2.69;
        bg2.velocityX=-3
        seed=createSprite(100,550,10,10);
        seed.addImage(seedimg);
        seed.scale=0.7;
        ground=createSprite(700,585,1400,20);
        ground.visible=false;
        humangrp=createGroup();
    }
}
function draw(){
    background("green");
    if(bg.x<0){
        bg.x=700;
    }
    if(bg2.x<700){
        bg2.x=2095
    }
    if(keyDown(UP_ARROW) && seed.y>350){
        seed.velocityY=-10;

    }
    seed.velocityY+=1;
    seed.collide(ground);
    seed.debug=false;
    seed.setCollider("circle",5,-10,40);
    humans();
    drawSprites();
}
function humans(){
    if(frameCount %320 === 0){
        human=createSprite(1400,530,10,10);
        human.addImage(humanimg);
        human.velocityX=-3;
        human.scale=0.8;
        human.lifetime=1400/3;
    } 
}