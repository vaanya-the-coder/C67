var snake,snakeImg;
var appleImg,bananaImg,grapesImg,orangeImg,strawberryImg;
var backgroundImg;
var w,h;
var rez = 20;

function preload(){
    backgroundImg = loadImage("images/background.png");
    appleImg = loadImage("images/apple.png");
    bananaImg = loadImage("images/banana.png");
    grapesImg = loadImage("images/grapes.png");
    orangeImg = loadImage("images/orange.png");
    strawberryImg = loadImage("images/strawberry.png");
}

function setup(){
    createCanvas(400,400);
    w = floor(width/rez);
    h = floor(height/rez);
    frameRate(5);
//gbnjbugnbjgbgngjbngjbngjbnj
}

function draw(){
    background(backgroundImg);
}

