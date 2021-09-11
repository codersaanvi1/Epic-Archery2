class comArcher {

    constructor(x,y,w,h) {

        var opt = {
            isStatic : true
        }

        this.body = Bodies.rectangle(x,y,w,h,opt)
        this.width = w
        this.height = h
        this.image = loadImage("./assets/computerArcher.png")
        World.add(world,this.body)

        Matter.Body.setAngle(this.body, PI / 2);

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