// ------------------------------------------------------------------------------------- CHANGE HEADER ACCORDING TO TIME
function onLoad(){
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
    // ------------------------------------------------------------------------------------------------------- SWITCH METHOD
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
    //    case 16:
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
    // -------------------------------------------------------------------------------------------------- /end switch method
    // -------------------------------------------------------------------------------- /end change header according to time


}


// ------------------------------------------------------------------------------------------------ HOVER IMAGE-MAP AREA

//document.getElementById("the_us_shadow").style.visibility = "hidden";
//document.getElementById("the_us_shadow").style.visibility = "visible";

function onUsOut()   { $('#us_shadow').fadeOut('fast'); }
function onUsOver()  { $('#us_shadow').fadeIn('fast');  }

function onGreenlandOut()   { $('#greenland_shadow').fadeOut('fast'); }
function onGreenlandOver()  { $('#greenland_shadow').fadeIn('fast');  }

function onIcelandOut()   { $('#iceland_shadow').fadeOut('fast'); }
function onIcelandOver()  { $('#iceland_shadow').fadeIn('fast');  }

function onLaOut()   { $('#la_shadow').fadeOut('fast'); }
function onLaOver()  { $('#la_shadow').fadeIn('fast');  }

function onAustraliaOut()   { $('#australia_shadow').fadeOut('fast'); }
function onAustraliaOver()  { $('#australia_shadow').fadeIn('fast');  }

function onAfricaOut()   { $('#africa_shadow').fadeOut('fast'); }
function onAfricaOver()  { $('#africa_shadow').fadeIn('fast');  }

function onEuropeOut()   { $('#europe_shadow').fadeOut('fast'); }
function onEuropeOver()  { $('#europe_shadow').fadeIn('fast');  }

function onAsiaOut()   { $('#asia_shadow').fadeOut('fast'); }
function onAsiaOver()  { $('#asia_shadow').fadeIn('fast');  }


// ------------------------------------------------------------------------------------------- /end hover image-map area

