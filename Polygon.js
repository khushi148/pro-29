class Polygon{
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':0.9,
          'density':20
      }
      this.body = Bodies.circle(x, y, 50, options);
      
      World.add(world, this.body);

      this.image=loadImage("polygon.png");

    }
    display(){
    
    //this.body.position.x=mouseX;
   //this.body.position.y=mouseY;
   

     imageMode(CENTER);
    image(this.image, this.body.position.x, this.body.position.y, 50, 50);
    

    }
  };
