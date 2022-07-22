var liftOff, satellite;
var asteroid, comet, meteor, meteorit, solarFlare;
var coolWalaLiftOff

function preload(){
 comet       = loadImage("/Assets/Comet.png");
 asteroid    = loadImage("/Assets/Asteroid.png");
 meteor      = loadImage("/Assets/Meteor.png");
 meteorit    = loadImage("/Assets/Meteorit.png");
 solarFlare  = loadImage("/Assets/Solar Flare.png");
 liftOff     = loadImage("/Assets/liftoff.png");
 satellite   = loadImage("/Assets/Satellite.png");
}

function setup(){
 var canvas      = createCanvas(windowWidth,windowHeight);
 coolWalaLiftOff = createSprite(width/2,height-100,10,10);
 coolWalaLiftOff.addImage(liftOff);
}

function draw(){
drawSprites();
}