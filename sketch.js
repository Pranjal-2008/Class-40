var form,game,player;
var database;
var playerCount;
var gameState = 0;
var allPlayers;
var cars , car1 , car2 , car3 , car4;
var distance = 0;
var finishedPlayers = 0;
var passFinish;
var C1,C2,C3,C4,track,ground;
var M1,M2,M3;

function preload(){
    C1 = loadImage("images/car1.png");
    C2 = loadImage("images/car2.png");
    C3 = loadImage("images/car3.png");
    C4 = loadImage("images/car4.png");
    track = loadImage("images/track.jpg");
    ground = loadImage("images/track.png");
    M1 = loadImage("images/gold.png");
    M2 = loadImage("images/silver.png");
    M3 = loadImage("images/bronze.png");
}

function setup(){
    createCanvas(displayWidth , displayHeight);
    database = firebase.database();
    
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    if (playerCount === 4 && finishedPlayers === 0){
        game.updateState(1);
    }
    if (gameState === 1){
        clear();
        game.play();
    }
    if (finishedPlayers === 4){
        game.updateState(2);
    }
    if (gameState === 2 && finishedPlayers === 4){
        game.displayRank();
    }
}
