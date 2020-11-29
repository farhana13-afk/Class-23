class Box {
    constructor (x, y, width, height){
    var b_options ={
     restitution: 1.0,
     desity: 0.5
    }
    this.body = Bodies.rectangle ( x, y, width, height, b_options); 
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    } 
    display() {
        var pos= this.body.position;
         var angle = this.body.angle; 
         push();
         translate( pos.x, pos.y);
         rotate (angle); 
         

        rectMode(CENTER);
        rect(0, 0, this.width, this.height); 
        pop (); 
    }
}