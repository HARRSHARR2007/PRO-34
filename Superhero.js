class Superhero {
    constructor(x,y,width,height) {
      var options = {
          restitution:0,
          isStatic: true,
          friction:1,
          density:1.2
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("superhero.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var pos =this.body.positon;
      push();
      translate(this.body.position.x,this.body.position.y);
      imageMode(CENTER);
      image(this.image,0,0,this.width,this.height);
       pop();
    }
  };