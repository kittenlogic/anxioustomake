(function( $ ) {
  
  var playing = false;
  var videoObj = document.querySelector('#anxious-video');
  var playButton = document.querySelector('#anxious-play');
  var pauseButton = document.querySelector('#anxious-pause');
  var closeButton = $('#anxious-close');
  var infoButton = $('#anxious-info');
  var resume = $('#anxious-resume');
  var next = $('#anxious-next');
  var controls = $('#anxious-controls');
  var mediaPlayer = $('#anxious-media-player');
  var video = seeThru
  .create('#anxious-video', { start: 'autoplay', end : 'stop'})
  .ready(function(instance, video, canvas){
    video.addEventListener('ended', function(){
        infoButton.remove();
        closeButton.hide();
        next.show();
    });
  });

  playButton.addEventListener('click', function() {
    videoObj.play();
    playing = true;
  });
  pauseButton.addEventListener('click', function() {
    videoObj.pause();
    playing = false;
  });
  videoObj.addEventListener('click', function() {
    videoObj[playing ? 'pause' : 'play']();
    playing = !playing;
  });
  videoObj.addEventListener('mouseover', function(){
    controls.fadeIn();
  });
  mediaPlayer.on('mouseleave', function(){
    controls.fadeOut();
  }); 

  closeButton.on('click', function(){
    videoObj.pause();
    mediaPlayer.hide();
    resume.show();
  });

  infoButton.on('click', function(){
    resume.hide();
    mediaPlayer.fadeIn();
    videoObj.play();
  });

})( jQuery );

function checkForm(form){
  if(!form.terms.checked) {
    alert("Please indicate that you accept the Terms and Conditions");
    form.terms.focus();
    return false;
  }
  return true;
}   

// Fall v2.1 By MaxxBlade - http://www.maxxblade.co.uk/fall

var fallObjects=new Array();function newObject(url,height,width){fallObjects[fallObjects.length]=new Array(url,height,width);}

///////////// EDIT THIS SECTION //////////////
var numObjs=40, waft=50, fallSpeed=15, wind=0;
newObject("img/sweepstakes-prize-1.gif",50,50);
newObject("img/sweepstakes-prize-2.gif",40,40);
newObject("img/sweepstakes-prize-3.gif",30,30);
newObject("img/sweepstakes-prize-4.gif",50,50);
newObject("img/sweepstakes-prize-5.gif",70,70);
newObject("img/sweepstakes-prize-6.gif",30,30);
newObject("img/sweepstakes-prize-7.gif",40,40);
newObject("img/sweepstakes-prize-8.gif",50,50);
newObject("img/sweepstakes-prize-9.gif",50,50);
newObject("img/sweepstakes-prize-10.gif",40,40);
newObject("img/sweepstakes-prize-11.gif",30,30);
newObject("img/sweepstakes-prize-12.gif",50,50);
newObject("img/sweepstakes-prize-13.gif",70,70);
newObject("img/sweepstakes-prize-14.gif",30,30);
newObject("img/sweepstakes-prize-15.gif",40,40);
newObject("img/sweepstakes-prize-16.gif",50,50);


/////////////////////////////////////////////

function winSize(){winWidth=(moz)?window.innerWidth:document.body.clientWidth;winHeight=(moz)?window.innerHeight:document.body.clientHeight;}
function winOfy(){winOffset=(moz)?window.pageYOffset:document.body.scrollTop;}
function fallObject(num,vari,nu){
    objects[num] = new Array( parseInt(Math.random() * (winWidth-waft)), -30,( parseInt( Math.random() * waft)) * ((Math.random() > 0.5)?1: -1),0.02 + Math.random() / 20, 0, 1 + parseInt( Math.random() * fallSpeed), vari, fallObjects[vari][1], fallObjects[vari][2]);
  if( nu==1 ){
    document.write('<img class="falling-object" id="fO'+i+'" src="'+fallObjects[vari][0]+'">'); 
  }
}
function fall(){
  for( i=0; i<numObjs; i++ ){
    var fallingObject = document.getElementById('fO' + i);
    if((objects[i][1] > ( winHeight - (objects[i][5] + objects[i][7]))) || (objects[i][0] > (winWidth - (objects[i][2] + objects[i][8])))){
      fallObject(i, objects[i][6], 0);
    }

    objects[i][0] += wind;
    objects[i][1] += objects[i][5];
    objects[i][4] += objects[i][3];
    with(fallingObject.style){ 
      top = objects[i][1] + winOffset + "px";
      left = objects[i][0] + (objects[i][2] * Math.cos(objects[i][4])) + "px";
    }
  }
  setTimeout("fall()", 31);
}
var objects=new Array(),winOffset=0,winHeight,winWidth,togvis,moz=(document.getElementById&&!document.all)?1:0;winSize();
for (i=0;i<numObjs;i++){fallObject(i,parseInt(Math.random()*fallObjects.length),1);}
window.onscroll=winOfy;
window.onresize=winSize;

// fall();

 $('.clickme').on('click', fall);
 
 $('marquee, #makingothers').on('mouseover', function(){
    $('.clickhere').show();
 });
 
 $('#makingothers, #makingyou').on('mouseleave', function(){
    $('.clickhere').hide();
 });



