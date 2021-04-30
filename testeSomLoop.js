let song;
let font, fontsize = 40;

function preload() {
  song = loadSound('data/1.mp3');
  font = loadFont('data/SourceSansPro-Regular.otf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //createCanvas(710, 400);

  var load0 = song.isLoaded();
  print("load0 "+load0);
  song.loop();

  textFont(font);
  textSize(fontsize);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(0);

  song.amp(1);

  textAlign(CENTER);
  drawWords(width * 0.5);
}

function drawWords(x) {
  fill(192);
  text('recomendado uso de fones de ouvidos', x, 80);

  fill(128);
  text('uso recomendado de auriculares', x, 150);

  fill(64);
  text('recommended use of headphones', x, 220);
}
