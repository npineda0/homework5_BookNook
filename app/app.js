// import * as MODEL from "./model.js";

// function route() {
//     let hashTag = window.location.hash;
//     let pageID = hashTag.replace("#",""); 
//     let pageIDArray= pageID.split("/");
//     pageID = pageIDArray[0];
//     let subPageID = pageIDArray[1];
//     console.log("sub "+ subPageID);
    
//     if (pageID == "") {
//         MODEL.changePage("home");
//     } else {
//         if(pageID == subPageID) {
//         MODEL.changePage(pageID);
//     } else {
//         MODEL.changePage(pageID, subPageID);
//     }
//     }
// }

<<<<<<< HEAD
=======
// function initListeners () {
//     //$("nav a").click((e) => {
//       //  console.log("click "+ btnID);
//    // });
// }

>>>>>>> 237d0b51ae81b59d196d13859e0a81caa43d4e14
//initialize listeners on url
function initApp() {
    //event listneres, listen dor hash change
    $(window).on("hashchange", route);
}

/*
function toCart() {
    //get button inside book info class
    $(".bookInfo button").on("click", function(e){
        let bookID = e.currentTarget.id;
        MODEL.addToCart(bookID);
        console.log(bookID);
    });
}
*/

//as soon as all the html has been read(by browser), function will be run
$(document).ready(function () {
    initApp();
});