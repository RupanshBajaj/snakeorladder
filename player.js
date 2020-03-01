class Player
{
    constructor(){
        this.spot=0;

    }
    roll(tiles){
        var r=floor(random(1,7));
        console.log(r);
        this.spot+=r;
        var tile=tiles[this.spot]
        if(tile){
            this.spot+=tile.snakeorladder

        }

    }
    display(tiles){
        var current=tiles[this.spot]
        fill ("red");
        var center=current.getCentre();
        ellipse(center[0],center[1],30,30);
    }
    reset(){
        this.spot=0;
    }

}