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
