class Snow{
constructor(x,y){
var options = {
     frction:0.2,
    density:0.5
}
this.body = Matter.Bodies.rectangle(x,y,50,50,options)
this.image = loadImage("snow4.webp");
Matter.World.add(world,this.body)
}
display(){
    image(this.image,this.body.position.x,this.body.position.y,50,50)
}
}