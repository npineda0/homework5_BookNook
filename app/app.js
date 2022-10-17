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

// function initListeners () {
//     //$("nav a").click((e) => {
//       //  console.log("click "+ btnID);
//    // });
// }

// //initialize listeners on url
// function initApp() {
//     //event listneres, listen dor hash change
//     $(window).on("hashchange", route);
// }

// //as soon as all the html has been read(by browser), function will be run
// $(document).ready(function () {
//     initApp();
//     initListeners();
// });

// NEW 

import * as MODEL from "./model.js";

function changeRoute() {
let hashTag = window.location.hash;
 let pageID = hashTag.replace('#', '');
  console.log(hashTag + ' ' + pageID);
  if(pageID == "" || pageID == "home" || pageID == "account"){
    MODEL.changePage(pageID, initSubmitListener);
  } else if (pageID == "books"){
    MODEL.changePage(pageID, buyNow);
  } else if (pageID == "blog"){
    MODEL.changePage(pageID);
  }else{
    MODEL.changePage(pageID);
  }


}

function initURLListener() {
$(window).on('hashchange', changeRoute);
changeRoute();
}

function buyNow(){
    $(".bookInfo button").on("click", (e) => {
        let bookID = e.currentTarget.id;
        MODEL.addToCart(bookID);
        // console.log(bookID);
    });
}

// function trace(fileName, log){
//     console.log(fileName + ' ' +log);
// }

function initSubmitListener() {
    $("#submit").on('click', function (e){
        console.log("submit");

        let fn = $("#fName").val();
        let ln = $("#lName").val();
        let em = $("#email").val();
        let pw = $("#pw").val();

        if(fn == ''){
            alert ('Enter first name.');

        }else if (ln == ''){
            alert ('Enter last name.');

        }else if (em == '') {
            alert ('Enter email.');

        }else if (pw == '') {
            alert ('Enter password.');
        } else{
            console.log("hello");
            let userObj = {
                firstName: fn,
                lastName: ln,
                email: em,
                password: pw,

            };

            MODEL.setUserInfo(userObj);
        }
    });

    }




$(document).ready(function () {
initURLListener();

});