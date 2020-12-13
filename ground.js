class Ground{

    constructor(x,y,w,h){
    
    var options={
    
    'isStatic':true
    }
    
    this.x=x
    this.y=y
    this.w=w
    this.h=h
    
    this.body=Bodies.rectangle(x,y,this.w,this.h,options)
    
    World.add(world,this.body)
    }
    
    display(){
    
    var pos=this.body.positon
    var angle=this.body.angle
    
    push();
    //translate(pos.x,pos,y)
    //rotate(angle)
    
    fill(255)
    rectMode(CENTER)
    rect(this.x,this.y,this.w,this.h)
    pop();
    
    }
    
    }