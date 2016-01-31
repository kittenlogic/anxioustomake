$(document).ready(function() {
    $('body').attr("spellcheck",false);

    var div = document.getElementById("whateveritis");
    var mugValue = $("#mugtype").val(); 
    
    div.onfocus = function() {
        window.setTimeout(function() {
            var sel, range;
            if (window.getSelection && document.createRange) {
                range = document.createRange();
                range.selectNodeContents(div);
                sel = window.getSelection();
                sel.removeAllRanges();
                sel.addRange(range);
            } else if (document.body.createTextRange) {
                range = document.body.createTextRange();
                range.moveToElementText(div);
                range.select();
            }
        }, 1);
    };    

    if(location.hash != "") {
        var start_text = location.hash.split(",")[0].substring(1);
        var mug = "";
        
        if(location.hash.split(",").length == 2)
            mug = location.hash.split(",")[1]
            console.log(mug);
            if (mug == "tonguetied"){
                setmugtype("tonguetied");
                setmugtype($("#mugtype").val("tonguetied"));
            } 
            if (mug == "breakup"){
                setmugtype("breakup");
                setmugtype($("#mugtype").val("breakup"));
            } 
            if (mug == "freedommug"){
                setmugtype("freedommug");
                setmugtype($("#mugtype").val("freedommug"));
            }
            if (mug == "revolution"){
                setmugtype("revolution");
                setmugtype($("#mugtype").val("revolution"));
            }
            if (mug == "distrust"){
                setmugtype("distrust");
                setmugtype($("#mugtype").val("distrust"));
            }

        if(start_text) {
            $("#whateveritis").text(decodeURIComponent(start_text));
            setTextHeight();
            // setmugtype(mug);
            // $('#mugtype option').filter(function() { 
            //     return ($(this).text().toLowerCase() == mug); 
            // }).prop('selected', true);

            // updateHash();
        }
    }
    else {

    }

    $("#whateveritis").on("blur keyup keydown paste input", function() {
        //$("#whateveritis").text($("#whateveritis").text())
        setTextHeight();
    });
    $("#whateveritis").on("blur", function() {
        resetMugText($("#mugtype").val());
        $("#mugtext").css("z-index", "10");
        updateHash();
    });
    $("#mugbox").on("mouseenter focus keydown paste input", function(){
        $("#mugtext").css("z-index", "9999");
    });
    $("#mugtype").on("change", function() {
        setmugtype($("#mugtype").val());
        updateHash();
    });
    
});

function setmugtype(mug) {

    var uneditableText = $('#uneditabletext').get(0);
    var changeUneditable = uneditableText.childNodes[0];
    var editableText = $('#whateveritis').get(0);
    var changeEditable = editableText.childNodes[0];

    if(mug == "freedommug") {
        $("#mug").attr("src", "img/mug2.png");
        $("#mugtext").removeClass("gold");
        $("#mugtext").css("font-size", "40px");
        $("#mugtext").addClass("black");
        changeUneditable.nodeValue = 'THE COLOR OF MY FREEDOM IS ';
        changeEditable.nodeValue = '___________';     
    }
    else if(mug == "breakup") {
        $("#mug").attr("src", "img/mug2.png");
        $("#mugtext").removeClass("gold");
        $("#mugtext").css("font-size", "40px");
        $("#mugtext").addClass("black");
        changeUneditable.nodeValue = 'I BROKE UP WITH ';
        changeEditable.nodeValue = 'MY ARTISTIC PRACTICE';         
    }
    else if(mug == "tonguetied") {
        $("#mug").attr("src", "img/mug2.png");
        $("#mugtext").removeClass("gold");
        $("#mugtext").css("font-size", "40px");
        $("#mugtext").addClass("black");
        changeUneditable.nodeValue = '';
        changeEditable.nodeValue = 'ARTIST STATEMENT GOES HERE';
    }
    else if(mug == "revolution") {
        $("#mug").attr("src", "img/mug2.png");
        $("#mugtext").removeClass("black gold");
        $("#mugtext").css("font-size", "40px");
        $("#mugtext").addClass("black");
        changeUneditable.nodeValue = '';
        changeEditable.nodeValue = 'MANIFESTO GOES HERE';
    }  
    else if(mug == "distrust") {
        $("#mug").attr("src", "img/mug2.png");
        $("#mugtext").removeClass("gold");
        $("#mugtext").css("font-size", "40px");
        $("#mugtext").addClass("black");
        changeUneditable.nodeValue = '';
        changeEditable.nodeValue = 'EXTERNALIZE DISTRUST HERE (REPEAT 5x)';
    }   
     
}

function resetMugText(mug){   
    var text = $('#whateveritis').text();
    if (mug == 'freedommug' && text == ''){
        $("#mugtext").css("font-size", "40px");
        $('#whateveritis').text('___________');
    } 
    else if (mug == 'breakup' && text == ''){
        $("#mugtext").css("font-size", "40px");
        $('#whateveritis').text('MY ARTISTIC PRACTICE');
    }
    else if (mug == 'tonguetied' && text == ''){
        $("#mugtext").css("font-size", "40px");
        $('#whateveritis').text('ARTIST STATEMENT GOES HERE');
    }
    else if (mug == 'revolution' && text == ''){
        $("#mugtext").css("font-size", "40px");
        $('#whateveritis').text('MANIFESTO GOES HERE');
    } 
    else if (mug == 'distrust' && text == ''){
        $("#mugtext").css("font-size", "40px");
        $('#whateveritis').text('EXTERNALIZE DISTRUST HERE (REPEAT 5x)');
    }      
   console.log('type of mug: ' + ' text on mug: ' + text);
}

function setTextHeight() {
    var min_height = 100;
    var max_height = 340;

    while($("#mugtext").height() > max_height) {
            $("#mugtext").css("font-size", "-=1px");
            console.log($("#mugtext").height() )
        }

        while($("#mugtext").height() <= min_height) {
            $("#mugtext").css("font-size", "+=1px");
            console.log($("#mugtext").height() )
        }
}
function updateHash() {
    location.hash = encodeURIComponent($("#whateveritis").text()) + "," + $("#mugtype").val()
    $("title").text($("#mugtext").text().toUpperCase());
}