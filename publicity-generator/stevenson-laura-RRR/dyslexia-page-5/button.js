function button(x,y){
  this.x = random(width/2 + 2,width/2 - 2);
  this.y = height/3;
  this.flash = random(70);

  
  
  
  
  
  
  
  this.display = function(){
    textAlign(CENTER);
    textFont("Kozuka Gothic Pro EL");
    stroke(255,this.flash);
    fill(255,this.flash);
    textSize(50);
    text(word,this.x,this.y);
    
  }
  
  
  this.hover = function(){
    var d = dist(mouseX,mouseY,this.x,this.y);
    if(d < 100){
      this.flash = random(70,255);
      
      
    }
  }
  
  
  
  this.press = function(){
    var d = dist(mouseX,mouseY,this.x,this.y);
    if(d<100){
      click = true;
      word = "because";
      
    }
    
    
    
  }
}
  
  
  
  
  
  
  
  
  
  
  
