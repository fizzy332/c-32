class goku {
                constructor(x,y){
                var options= {
                    isStatic:true,
                }
                this.image=loadImage("goku.png")
                this.umbrella=Bodies.circle(x,y,20,options)
                        this.radius=20
                        World.add(world, this.umbrella);
                    }
                    
                    display(){
                        push()
                        var pos= this.umbrella.position;
                    imageMode(CENTER);
                    image( this.image,pos.x,pos.y+70,300,300);
                    pop();
                    }
                }