var bgImg
var m1Img, m2Img, m3Img, m4Img
var c1Img, c2Img, c3Img, c4Img
var cat1, cat2, cat3, cat4
var mouse1, mouse2, mouse3, mouse4
var mouse
var cat

function preload() {
    //load the images here
    bgImg = loadImage("garden.png")
    m1Img = loadAnimation("images/mouse1.png")
    m2Img = loadAnimation("images/mouse2.png")
    //m3Img = loadAnimation("images/mouse3.png")
    //m4Img = loadAnimation("images/mouse4.png")
    c1Img = loadAnimation("images/cat1.png")
    //c2Img = loadAnimation("images/cat2.png")
    c3Img = loadAnimation("images/cat3.png")
    //c4Img = loadAnimation("images/cat4.png")

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(870,600)
    cat.addAnimation("catSitting", c1Img)
    cat.sclae = 0.2
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.velocityX = 0
        cat.addAnimation("catLasImage", c3Img)
        cat.changeAnimation("catLastImage")
        cat,x = 300
        cat.scale = 0.2
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode === LEFT_ARROW){
        mouse.addAnimation("mousingTeasing", m2Img)
        mouse.changeAnimation("mouseTeasing")
        mouse.frameDelay = 25

        cat.velocitX = -5
        cat.velocityY = 5
    }

}
