import * as MODEL from "./model.js";

function route() {
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#",""); 
    let pageIDArray= pageID.split("/");
    pageID = pageIDArray[0];
    let subPageID = pageIDArray[1];
    console.log("sub "+ subPageID);
    
    if (pageID == "") {
        MODEL.changePage("home");
    } else {
        if(pageID == subPageID) {
        MODEL.changePage(pageID);
    } else {
        MODEL.changePage(pageID, subPageID);
    }
    }
}

function initListeners () {
    //$("nav a").click((e) => {
      //  console.log("click "+ btnID);
   // });
}

//initialize listeners on url
function initApp() {
    //event listneres, listen dor hash change
    $(window).on("hashchange", route);
}

//as soon as all the html has been read(by browser), function will be run
$(document).ready(function () {
    initApp();
    initListeners();
});