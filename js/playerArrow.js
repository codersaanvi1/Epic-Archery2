class playerArrow {
    constructor(x,y,w,h) {

        var opt={
            restitution : 1,
            friction : 1.0,
            density : 0.8,
            isStatic : true



        }

         this.body = Bodies.rectangle(x,y,width,height)
        this.width = w
        this.height = h
        this.image = loadImage("./assets/arrow.png")
        World.add(world,this.body)
    }

    shoot(archerAngle) {
        var velocity = p5.Vector.fromAngle(archerAngle);
        velocity.mult(20);
        Matter.Body.setStatic(this.body, false);
        Matter.Body.setVelocity(this.body, { x: velocity.x, y: velocity.y });
      }


    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
    
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
  

}