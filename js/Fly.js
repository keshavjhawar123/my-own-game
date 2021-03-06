class Fly{
    constructor(){
        this.rect=createSprite(100,100,100,10);;
        this.rect.shapeColor="blue";
        this.rect.visible=false;
        this.length=100;
    }
    display(){

        push();
        this.length -=1;
        fill("blue");     
        pop();
    }
}