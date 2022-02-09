var canvas;
var backgroundImage, Kite1_img, Kite2_img, Sky;
var fuelImage, powerCoinImage, lifeImage;
var Bird1Image, Bird2Image;
var database, gameState;
var form, player, playerCount;
var allPlayers, Kite1, Kite2, fuels, powerCoins, obstacles;
var Kites = [];

function preload() {
  backgroundImage = loadImage("./assets/TitleImage .png");
  Kite1_img = loadImage("../assets/Kite01.png");
  Kite2_img = loadImage("../assets/Kite02.png");
  Sky = loadImage("../assets/Sky1.jpg");
  fuelImage = loadImage("./assets/life.png");
  powerCoinImage = loadImage("./assets/goldCoin.png");
  Bird1Image = loadImage("./assets/bird1.png");
  Bird2Image = loadImage("./assets/bird2.jpg");
  lifeImage = loadImage("./assets/life.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}