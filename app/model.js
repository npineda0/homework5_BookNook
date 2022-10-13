// export function changePage(pageID, subPageID){
//     //pages is the folder name, r

<<<<<<< HEAD
    if(subPageID == undefined) {
    $.get(`pages/${pageID}/${pageID}.html`, function (data) {
        console.log(data);
        $("#app").html(data);
    }).fail((error) => {
        if(error.status == "404") {
            alert("Page cannot be found")
        }
        // + concatenate
        console.log("error", error.status);
    });
}  else {
    $.get(`pages/${pageID}/${subPageID}.html`, function (data) {
        console.log(data);
        $("#app").html(data);
    }).fail((error) => {
        if(error.status == "404") {
            alert("Page cannot be found")
        }
        console.log("error", error.status);
    });
}
}
=======
//     if(subPageID == undefined) {
//     $.get(`pages/${pageID}/${pageID}.html`, function (data) {
//         console.log(data);
//         $("#app").html(data);
//     }).fail((error) => {
//         if(error.status == "404") {
//             alert("Page cannot be found")
//         }
//         // + concatenate
//         console.log("error", error.status);
//     });
// }  else {
//     $.get(`pages/${pageID}/${subPageID}.html`, function (data) {
//         console.log(data);
//         $("#app").html(data);
//     }).fail((error) => {
//         if(error.status == "404") {
//             alert("Page cannot be found")
//         }
//         // + concantinates 
//         console.log("error", error.status);
//     });
// }
// }
>>>>>>> 237d0b51ae81b59d196d13859e0a81caa43d4e14
