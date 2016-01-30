var topic,
    topic2, 
    medium, 
    adjective,
    adjective2, 
    adverb, 
    gerund, 
    topicUrl,
    topicUrl2, 
    mediumUrl, 
    adjectiveUrl, 
    adverbUrl,
    gerundUrl,
    topicSource,
    topicSource2,
    mediumSource,
    adjectiveSource,
    adjectiveSource2,
    adverbSource,
    gerundSource;

function pickRandom(){

  var top = Math.floor((topicList.topics.length - 1)*Math.random());
  console.log("top is "+ top);
  topic = topicList.topics[top].topic;
  topicUrl = topicList.topics[top].url;
  topicSource = topicList.topics[top].store;
  console.log(topic);

  var top2 = Math.floor((topicListB.topics.length - 1)*Math.random());
  console.log("top2 is "+ top2);
  topic2 = topicListB.topics[top2].topic;
  topicUrl2 = topicListB.topics[top2].url;
  topicSource2 = topicListB.topics[top2].store;
  console.log(topic2);

  var med = Math.floor((mediumList.mediums.length - 1)*Math.random());
  console.log("med is "+ med);
  medium = mediumList.mediums[med].medium;
  mediumUrl = mediumList.mediums[med].url;
  mediumSource = mediumList.mediums[med].store;
  console.log(medium);

  var adj = Math.floor((adjectiveList.adjectives.length - 1)*Math.random());
  console.log("adj is "+ adj);
  adjective = adjectiveList.adjectives[adj].adj;
  adjectiveUrl = adjectiveList.adjectives[adj].url;
  adjectiveSource = adjectiveList.adjectives[adj].store;
  console.log(adjective);

  var adj2 = Math.floor((adjectiveListB.adjectives.length - 1)*Math.random());
  console.log("adj2 is "+ adj2);
  adjective2 = adjectiveListB.adjectives[adj2].adj;
  adjectiveUrl2 = adjectiveListB.adjectives[adj2].url;
  adjectiveSource2 = adjectiveListB.adjectives[adj2].store;
  console.log(adjective2);

  var adv = Math.floor((adverbList.adverbs.length - 1)*Math.random());
  console.log("adv is "+ adv);
  adverb = adverbList.adverbs[adv].adverb;
  adverbUrl = adverbList.adverbs[adv].url;
  adverbSource = adverbList.adverbs[adv].store;
  console.log(adverb);

  var ger = Math.floor((gerundList.gerunds.length - 1)*Math.random());
  console.log("ger is "+ ger);
  gerund = gerundList.gerunds[ger].gerund;
  gerundUrl = gerundList.gerunds[ger].url;
  gerundSource = gerundList.gerunds[ger].store;
  console.log(gerund);

}



function updateArtProjectGenerator(){
    
    var mediumPopup, topicPopup, topicPopup2, adjectivePopup, adjectivePopup2, adverbPopup, gerundPopup;
    
    pickRandom();
    
    r = Math.floor(13*Math.random());

    if (mediumUrl === "") {
        mediumPopup = "";
    } else {
        mediumPopup = '<div class="wrapper"><sup><span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span></sup><div class="tooltip">We recommend <a href="' + mediumUrl + '" target="_blank">' + mediumSource + '</a></div></div>';
    }  

    if (topicUrl === "") {
        topicPopup = "";
    } else {
        topicPopup = '<div class="wrapper"><sup><span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span></sup><div class="tooltip">We recommend <a href="' + topicUrl + '" target="_blank">' + topicSource + '</a></div></div>';
    }  

    if (topicUrl2 === "") {
        topicPopup2 = "";
    } else {
        topicPopup2 = '<div class="wrapper"><sup><span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span></sup><div class="tooltip">We recommend <a href="' + topicUrl2 + '" target="_blank">' + topicSource2 + '</a></div></div>';
    } 

    if (adjectiveUrl === "") {
        adjectivePopup = "";
    } else {
        adjectivePopup = '<div class="wrapper"><sup><span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span></sup><div class="tooltip">We recommend <a href="' + adjectiveUrl + '" target="_blank">' + adjectiveSource + '</a></div></div>';
    }  

    if (adjectiveUrl2 === "") {
        adjectivePopup2 = "";
    } else {
        adjectivePopup2 = '<div class="wrapper"><sup><span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span></sup><div class="tooltip">We recommend <a href="' + adjectiveUrl2 + '" target="_blank">' + adjectiveSource2 + '</a></div></div>';
    } 

    if (adverbUrl === "") {
        adverbPopup = "";
    } else {
        adverbPopup = '<div class="wrapper"><sup><span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span></sup><div class="tooltip">We recommend <a href="' + adverbUrl + '" target="_blank">' + adverbSource + '</a></div></div>';
    } 

    if (gerundUrl === "") {
        gerundPopup = "";
    } else {
        gerundPopup = '<div class="wrapper"><sup><span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span></sup><div class="tooltip">We recommend <a href="' + gerundUrl + '" target="_blank">' + gerundSource + '</a></div></div>';
    } 

    if (r == 0){
      $(".newproject").append("<span>Commission a " + medium + mediumPopup + " about " + topic + topicPopup + ", made " + adverb + adverbPopup + "</span>");
    }
    else if (r == 1){
      $(".newproject").append("<span>Commission a " + medium + mediumPopup + " about " + topic + topicPopup + "</span>");
    }
    else if (r == 2){
      $(".newproject").append("<span>Commission a " + medium + mediumPopup + " about " + topic + topicPopup + ", generated by " + gerund + gerundPopup + "</span>");
    }
    else if (r == 3){ 
      $(".newproject").append("<span>Commission a " + medium + mediumPopup +"  about " + topic + topicPopup + ", generated by " + gerund + " " + adverb + adverbPopup + "</span>");
    }
    else if (r == 4){
      $(".newproject").append("<span>Commission " + adjective + adjectivePopup + " " + medium + mediumPopup + "</span>");
    }
    else if (r == 5){
      $(".newproject").append("<span>Commission " + adjective + adjectivePopup + " " + medium + mediumPopup + " about " + topic + topicPopup + "</span>");
    }
    else if (r == 6){
      $(".newproject").append("<span>Commission " + adjective + adjectivePopup + " " + medium + mediumPopup + " about " + topic + topicPopup + ", made " + adverb + adverbPopup + "</span>");
    }
    else if (r == 7){
      $(".newproject").append("<span>Commission " + adjective + adjectivePopup + " " + medium + mediumPopup + " about " + topic + topicPopup + ", generated by " + gerund + gerundPopup + "</span>");
    }
    else if (r == 8){
      $(".newproject").append("<span>Commission " + adjective + adjectivePopup + " " + medium + mediumPopup + " about " + topic + topicPopup + ", generated by " + gerund + gerundPopup + " " + adverb + adverbPopup + "</span>");
    }
    else if (r == 9){
      $(".newproject").append("<span>Commission " + adjective + adjectivePopup + " " + medium + mediumPopup + " about " + adjective2 + adjectivePopup2 + " " + topic2 + topicPopup2 + "</span>");
    }
    else if (r == 10){
      $(".newproject").append("<span>Commission " + adjective + adjectivePopup + " " + medium + mediumPopup + " about " + adjective2 + adjectivePopup2 + " " + topic2 + topicPopup2 + ", made " + adverb + adverbPopup + "</span>");
    }
    else if (r == 11){
      $(".newproject").append("<span>Commission " + adjective + adjectivePopup + " " + medium + mediumPopup + " about " + topic + topicPopup + ", generated by " + gerund + gerundPopup + "</span>");
    }
    else if (r == 12){
      $(".newproject").append("<span>Commission " + adjective + adjectivePopup + " " + medium + mediumPopup + " about " + topic + topicPopup + ", generated by " + gerund + gerundPopup + " " + adverb + adverbPopup + "</span>");
    }
    
}

$(".makeart").on('click', function(){
  $(".newproject").empty();
  updateArtProjectGenerator();
});
