class Particle {
    constructor(x,y){
        var options={
            restituition:2,
            friction: 0,
        }
        this.r= 10;
        this.ball = Bodies.circle(x,y,this.r,options);
        this.color=color(random(0,255),random(0,255),random(0,255));
        World.add(world,this.ball);
    }
    display(){
        var pos = this.ball.position;
        var angle = this.ball.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}