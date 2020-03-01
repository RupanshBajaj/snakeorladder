class Tile{
    constructor(x,y,wh,index,next){
        this.x=x;
        this.y=y;
        this.wh=wh;
        this.index=index;
        this.next=next;
        this.snakeorladder=0;
        if(this.index%2==0){
            this.color="orange";

        }
        else{
            this.color="yellow";
        }
    }
    display(tiles){
        noStroke();
        fill (this.color);
        rect(this.x,this.y,this.wh,this.wh);
        fill(0);
        textSize(20);
        text(this.index+1,this.x,this.y+this.wh);
        if(this.snakeorladder!==0){
            var myc =this.getCentre();
            var gamec=tiles[this.index+this.snakeorladder].getCentre();
            strokeWeight(4);
            if(this.snakeorladder<0){
                stroke(255);
            }
            else{
                stroke(0);
            }
        line (myc[0],myc[1],gamec[0],gamec[1]);

        }

    }
    getCentre(){
        var cx=this.x+this.wh/2;
        var cy=this.y+this.wh/2;
        return[cx,cy]
    }

}