var tiles=[];
var player;
var rolls=[]
var index=0;
var avgrolls=0;
var avgP;
var myc;
var gamec;


function setup() {
  createCanvas(400,400);
  avgP=createP('');
  rolls[index]=0;
  var resl=40;
  var rows=height/resl;
  var coloums=width/resl;
  var x=0;
  var y=(rows-1)*resl;
  var dir=1;
  for(var i=0;i<coloums*rows;i++){
    var tile=new Tile(x,y,resl,i,i+1);
    tiles.push(tile);
x=x+(resl*dir);
if(x>=width||x<=-resl){
  dir*=-1;
  x=x+(resl*dir);
y=y-resl;
}



  }
  for(var i=0;i<3;i++){
    var index=floor(random(coloums,tiles.length));
    tiles[index].snakeorladder=-1*floor(random(index%coloums,index-1))
  }
  player=new Player();


}

function draw() {

  frameRate(4);
  background(255);  
  for(var tile of tiles){
    tile.display(tiles);

  }
  player.roll(tiles);
  rolls[index]++
var gameOver=false;
if(player.spot>=tiles.length-1){
  player.spot=tiles.length-1;
  gameOver=true;
}
if(gameOver){
  player.reset(); 
  index++;
  rolls[index]=0;
  
}
var sum=0;
for(var i=0;i<rolls.length-1;i++){
  sum=sum+rolls[i];

}
var avg=sum/(rolls.length-1);
  avgP.html(avg);
  player.display(tiles);
  
}