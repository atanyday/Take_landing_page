var usIsActive = false;
var greenlandIsActive = false;
var icelandIsActive = false;
var laIsActive = false;
var australiaIsActive = false;
var africaIsActive = false;
var europeIsActive = false;
var asiaIsActive = false;

var timeout = 250;

function onLoad(){

    // --------------------------------------------------------------------------------- CHANGE HEADER ACCORDING TO TIME
    var d = new Date();
    var currentHour = d.getHours();

    if (currentHour >= 6 && currentHour < 12) {
        document.getElementById("header").style.backgroundImage = "url('images/bg-morning.jpg')";
        document.getElementById("header-title-container").style = "color: #dfe4e0; padding-top: 320px; padding-bottom: 280px";
        document.getElementById("header-title").innerHTML = "Good morning!";
        document.getElementById("header-description").innerHTML = "Set a goal that makes you want to jump out of bed in the morning";
    } else if (currentHour >= 12 && currentHour < 18) {
        document.getElementById("header").style.backgroundImage = "url('images/bg-day.jpg')";
        document.getElementById("header-title-container").style = "color:#000000; padding-top:50px; padding-bottom:550px";
        document.getElementById("header-title").innerHTML = "Good afternoon!";
        document.getElementById("header-description").innerHTML = "Nothing is worth more than this day";
    } else if (currentHour >= 18 && currentHour < 22) {
        document.getElementById("header").style.backgroundImage = "url('images/bg-evening.jpg')";
        document.getElementById("header-title-container").style = "color:#0f1b23; padding-top:320px; padding-bottom:280px";
        document.getElementById("header-title").innerHTML = "Good evening!";
        document.getElementById("header-description").innerHTML = "It is almost impossible to watch a sunset and not dream";
    } else if ( currentHour >= 22 || currentHour < 6 ) {
        document.getElementById("header").style.backgroundImage = "url('images/bg-night.jpg')";
        document.getElementById("header-title-container").style = "color:#6f665e; padding-top:150px; padding-bottom:450px";
        document.getElementById("header-title").innerHTML = "Good night!";
        document.getElementById("header-description").innerHTML = "Without the dark, we'd never see the stars";
    }
    // --------------------------------------------------------------------------------------------------- SWITCH METHOD
    //var d = new Date();
    //var currentHour = d.getHours();
    //
    //switch (currentHour){
    //    case 22:
    //    case 23:
    //    case 0:
    //    case 1:
    //    case 2:
    //    case 3:
    //    case 4:
    //    case 5:
    //        document.getElementById("header").style.backgroundImage = "url('images/bg-night.jpg')";
    //        document.getElementById("header-title-container").style = "color:#6f665e; padding-top:150px; padding-bottom:450px";
    //        document.getElementById("header-title").innerHTML = "Good night!";
    //        document.getElementById("header-description").innerHTML = "Without the dark, we'd never see the stars";
    //        break;
    //    case 6:
    //    case 7:
    //    case 8:
    //    case 9:
    //    case 10:
    //    case 11:
    //        document.getElementById("header").style.backgroundImage = "url('images/bg-morning.jpg')";
    //        document.getElementById("header-title-container").style = "color: #dfe4e0; padding-top: 320px; padding-bottom: 280px";
    //        document.getElementById("header-title").innerHTML = "Good morning!";
    //        document.getElementById("header-description").innerHTML = "Set a goal that makes you want to jump out of bed in the morning";
    //        break;
    //    case 12:
    //    case 13:
    //    case 14:
    //    case 15:
    //    case 32:
    //    case 17:
    //        document.getElementById("header").style.backgroundImage = "url('images/bg-day.jpg')";
    //        document.getElementById("header-title-container").style = "color:#000000; padding-top:50px; padding-bottom:550px";
    //        document.getElementById("header-title").innerHTML = "Good afternoon!";
    //        document.getElementById("header-description").innerHTML = "Nothing is worth more than this day";
    //        break;
    //    case 18:
    //    case 19:
    //    case 20:
    //    case 21:
    //        document.getElementById("header").style.backgroundImage = "url('images/bg-evening.jpg')";
    //        document.getElementById("header-title-container").style = "color:#0f1b23; padding-top:320px; padding-bottom:280px";
    //        document.getElementById("header-title").innerHTML = "Good evening!";
    //        document.getElementById("header-description").innerHTML = "It is almost impossible to watch a sunset and not dream";
    //        break;
    //    default: console.error("wtf!!! currentHour: " + currentHour);
    //}



// ------------------------------------------------------------------------------------------------------ IMAGE-MAP AREA


    var fluffyPic = document.getElementById("puffle");

    var usArea = document.getElementsByTagName('area')[0];
    var greenlandArea = document.getElementsByTagName('area')[1];
    var icelandArea = document.getElementsByTagName('area')[2];
    var laArea = document.getElementsByTagName('area')[3];
    var australiaArea = document.getElementsByTagName('area')[4];
    var africaArea = document.getElementsByTagName('area')[5];
    var europeArea = document.getElementsByTagName('area')[6];
    var asiaArea = document.getElementsByTagName('area')[7];



    usArea.onclick = function(event) {
        usIsActive = true;
        greenlandIsActive = false;
        icelandIsActive = false;
        laIsActive = false;
        australiaIsActive = false;
        africaIsActive = false;
        europeIsActive = false;
        asiaIsActive = false;

        $('#greenland_shadow').animate({'opacity':0}, 250);
        $('#iceland_shadow').animate({'opacity':0}, 250);
        $('#la_shadow').animate({'opacity':0}, 250);
        $('#australia_shadow').animate({'opacity':0}, 250);
        $('#africa_shadow').animate({'opacity':0}, 250);
        $('#europe_shadow').animate({'opacity':0}, 250);
        $('#asia_shadow').animate({'opacity':0}, 250);

        fluffyPic.innerHTML = '<img src="images/puffleUs.png" />';

        setTimeout(function(){
            alert("Your choice is US!");
        }, timeout);

        $("#pin").css({"left": event.x,"top": event.y} );

        return false; // returning false stops the link being followed
    };

    greenlandArea.onclick = function() {
        usIsActive = false;
        greenlandIsActive = true;
        icelandIsActive = false;
        laIsActive = false;
        australiaIsActive = false;
        africaIsActive = false;
        europeIsActive = false;
        asiaIsActive = false;

        $('#us_shadow').animate({'opacity':0}, 250);
        $('#iceland_shadow').animate({'opacity':0}, 250);
        $('#la_shadow').animate({'opacity':0}, 250);
        $('#australia_shadow').animate({'opacity':0}, 250);
        $('#africa_shadow').animate({'opacity':0}, 250);
        $('#europe_shadow').animate({'opacity':0}, 250);
        $('#asia_shadow').animate({'opacity':0}, 250);

        fluffyPic.innerHTML = '<img src="images/puffleGreenland.png" />';

        setTimeout(function(){
            alert("Have a good time in Greenland!");
        }, timeout);

        $("#pin").css({"left": event.x,"top": event.y} );
        return false;
    };

    icelandArea.onclick = function() {
        usIsActive = false;
        greenlandIsActive = false;
        icelandIsActive = true;
        laIsActive = false;
        australiaIsActive = false;
        africaIsActive = false;
        europeIsActive = false;
        asiaIsActive = false;

        $('#us_shadow').animate({'opacity':0}, 250);
        $('#greenland_shadow').animate({'opacity':0}, 250);
        $('#la_shadow').animate({'opacity':0}, 250);
        $('#australia_shadow').animate({'opacity':0}, 250);
        $('#africa_shadow').animate({'opacity':0}, 250);
        $('#europe_shadow').animate({'opacity':0}, 250);
        $('#asia_shadow').animate({'opacity':0}, 250);

        fluffyPic.innerHTML = '<img src="images/puffleIceland.png" />';

        setTimeout(function(){
            alert("Wow, seems you're going to Iceland!");
        }, timeout);

        $("#pin").css({"left": event.x,"top": event.y} );

        return false;
    };

    laArea.onclick = function() {
        usIsActive = false;
        greenlandIsActive = false;
        icelandIsActive = false;
        laIsActive = true;
        australiaIsActive = false;
        africaIsActive = false;
        europeIsActive = false;
        asiaIsActive = false;

        $('#us_shadow').animate({'opacity':0}, 250);
        $('#greenland_shadow').animate({'opacity':0}, 250);
        $('#iceland_shadow').animate({'opacity':0}, 250);
        $('#australia_shadow').animate({'opacity':0}, 250);
        $('#africa_shadow').animate({'opacity':0}, 250);
        $('#europe_shadow').animate({'opacity':0}, 250);
        $('#asia_shadow').animate({'opacity':0}, 250);

        fluffyPic.innerHTML = '<img src="images/puffleLa.png" />';

        setTimeout(function(){
            alert("Los Angeles is gorgeous!");
        }, timeout);

        $("#pin").css({"left": event.x,"top": event.y} );
        return false;
    };

    australiaArea.onclick = function() {
        usIsActive = false;
        greenlandIsActive = false;
        icelandIsActive = false;
        laIsActive = false;
        australiaIsActive = true;
        africaIsActive = false;
        europeIsActive = false;
        asiaIsActive = false;

        $('#us_shadow').animate({'opacity':0}, 250);
        $('#greenland_shadow').animate({'opacity':0}, 250);
        $('#iceland_shadow').animate({'opacity':0}, 250);
        $('#la_shadow').animate({'opacity':0}, 250);
        $('#africa_shadow').animate({'opacity':0}, 250);
        $('#europe_shadow').animate({'opacity':0}, 250);
        $('#asia_shadow').animate({'opacity':0}, 250);

        fluffyPic.innerHTML = '<img src="images/puffleAustralia.png" />';

        setTimeout(function(){
            alert("Don't fight with kangaroo!");
        }, timeout);

        $("#pin").css({"left": event.x,"top": event.y} );
        return false;
    };

    africaArea.onclick = function() {
        usIsActive = false;
        greenlandIsActive = false;
        icelandIsActive = false;
        laIsActive = false;
        australiaIsActive = false;
        africaIsActive = true;
        europeIsActive = false;
        asiaIsActive = false;

        $('#us_shadow').animate({'opacity':0}, 250);
        $('#greenland_shadow').animate({'opacity':0}, 250);
        $('#iceland_shadow').animate({'opacity':0}, 250);
        $('#la_shadow').animate({'opacity':0}, 250);
        $('#australia_shadow').animate({'opacity':0}, 250);
        $('#europe_shadow').animate({'opacity':0}, 250);
        $('#asia_shadow').animate({'opacity':0}, 250);

        fluffyPic.innerHTML = '<img src="images/puffleAfrica.png" />';

        setTimeout(function(){
            alert("Interesting choice. See ya in Africa!");
        }, timeout);

        $("#pin").css({"left": event.x,"top": event.y} );
        return false;
    };

    europeArea.onclick = function() {
        usIsActive = false;
        greenlandIsActive = false;
        icelandIsActive = false;
        laIsActive = false;
        australiaIsActive = false;
        africaIsActive = false;
        europeIsActive = true;
        asiaIsActive = false;

        $('#us_shadow').animate({'opacity':0}, 250);
        $('#greenland_shadow').animate({'opacity':0}, 250);
        $('#iceland_shadow').animate({'opacity':0}, 250);
        $('#la_shadow').animate({'opacity':0}, 250);
        $('#australia_shadow').animate({'opacity':0}, 250);
        $('#africa_shadow').animate({'opacity':0}, 250);
        $('#asia_shadow').animate({'opacity':0}, 250);

        fluffyPic.innerHTML = '<img src="images/puffleEurope.png" />';

        setTimeout(function(){
            alert("Your next destination is Europe!");
        }, timeout);

        $("#pin").css({"left": event.x,"top": event.y} );
        return false;
    };

    asiaArea.onclick = function() {
        usIsActive = false;
        greenlandIsActive = false;
        icelandIsActive = false;
        laIsActive = false;
        australiaIsActive = false;
        africaIsActive = false;
        europeIsActive = false;
        asiaIsActive = true;

        $('#us_shadow').animate({'opacity':0}, 250);
        $('#greenland_shadow').animate({'opacity':0}, 250);
        $('#iceland_shadow').animate({'opacity':0}, 250);
        $('#la_shadow').animate({'opacity':0}, 250);
        $('#australia_shadow').animate({'opacity':0}, 250);
        $('#africa_shadow').animate({'opacity':0}, 250);
        $('#europe_shadow').animate({'opacity':0}, 250);

        fluffyPic.innerHTML = '<img src="images/puffleAsia.png" />';

        setTimeout(function(){
            alert("So many places to visit in Asia. Have a good time!");
        }, timeout);

        $("#pin").css({"left": event.x,"top": event.y} );
        return false;
    };

}



function onUsOut()   {
    if(usIsActive){

    } else {
        $('#us_shadow').animate({'opacity':0}, 250);
    }
}
function onUsOver()  { $('#us_shadow').animate({'opacity':1}, 250);  }



function onGreenlandOut()   {
    if(greenlandIsActive){

    } else {
        $('#greenland_shadow').animate({'opacity':0}, 250);
    }
}
function onGreenlandOver()  { $('#greenland_shadow').animate({'opacity':1}, 250);  }



function onIcelandOut()   {
    if(icelandIsActive){

    } else {
        $('#iceland_shadow').css('opacity', '0').animate({'opacity':0}, 250);
    }
}
function onIcelandOver()  { $('#iceland_shadow').animate({'opacity':1}, 250); }



function onLaOut()   {
    if(laIsActive){

    } else {
        $('#la_shadow').animate({'opacity':0}, 250);
    }
}
function onLaOver()  { $('#la_shadow').animate({'opacity':1}, 250);  }



function onAustraliaOut()   {
    if(australiaIsActive){

    } else {
        $('#australia_shadow').animate({'opacity':0}, 250);
    }
}
function onAustraliaOver()  { $('#australia_shadow').animate({'opacity':1}, 250);  }



function onAfricaOut()   {
    if(africaIsActive){

    } else {
        $('#africa_shadow').animate({'opacity':0}, 250);
    }
}
function onAfricaOver()  { $('#africa_shadow').animate({'opacity':1}, 250);  }



function onEuropeOut()   {
    if(europeIsActive){

    } else {
        $('#europe_shadow').animate({'opacity':0}, 250);
    }
}
function onEuropeOver()  { $('#europe_shadow').animate({'opacity':1}, 250);  }



function onAsiaOut()   {
    if(asiaIsActive){

    } else {
        $('#asia_shadow').animate({'opacity':0}, 250);
    }
}
function onAsiaOver()  { $('#asia_shadow').animate({'opacity':1}, 250);  }



function onMouseMove(event){
    console.log("x: " + event.x + ", y: " + event.y);

    $("#pin").css({"left": event.x,"top": event.y} );
    //document.getElementById("pin").style.left = 13;
    //document.getElementById("pin").clientTop = event.y;
    //console.log(event.y)
};

// -------------------------------------------------------------------------------------------------------------- CANVAS
