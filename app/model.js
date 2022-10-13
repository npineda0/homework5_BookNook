// export function changePage(pageID, subPageID){
//     //pages is the folder name, r

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

var userInfo = {};

var cart = [];

var bookList = [
    {
        bookTitle: "Emma Rocks",
        bookAuthor: "Todd",
        bookImage: "cat and the hat.jpg",
        price: "19.99"
    },
    {
        bookTitle: "Zuzu Rocks",
        bookAuthor: "Zuzu",
        bookImage: "cat and the hat.jpg",
        price: "12.99"
    },
    {
        bookTitle: "Mom & Dad Rocks",
        bookAuthor: "Zuzu",
        bookImage: "cat and the hat.jpg",
        price: "17.99"
    },
]

export function changePage(pageID, callback) {

    if (pageID == '' || pageID == "home") {
        $.get(`pages/home.html`, function (data) {
            // console.log('data ' + data);
             $('#app').html(data);
             callback();
            });
        
        } else if (pageID == "books"){
            $.get(`pages/${pageID}.html`,
            function(data){
                // console.log('data ' + data);
         $('#app').html(data);
         $.each(bookList, function(idx, book){

            $(".allBooks").append (`<div class="book">
            <div class="bookImage">
              <img src="images/${book.bookImage}" alt="" />
            </div>
            <div class="bookInfo">
              <h4>${book.bookTitle}</h4>
              <p>Author: ${book.bookAuthor}</p>
              <p>Price: ${book.price}</p>
              <button id="${idx}">Buy</button>
            </div>
          </div>`);
         } )
         callback();
            });
        } else {
            $.get(`pages/${pageID}.html`, function (data) {
                console.log('data ' + data);
                $('#app').html(data);
                $.each(cart, function(idx, cartItem){
                    console.log(bookList[cartItem]);
                    let book = bookList[cartItem];
                    $(".items").append (`<div class="book">
                    <div class="bookImage">
                      <img src="images/${book.bookImage}" alt="" />
                    </div>
                    <div class="bookInfo">
                      <h4>${book.bookTitle}</h4>
                      <p>Author: ${book.bookAuthor}</p>
                      <p>Price: ${book.price}</p>
                      <p>Qty: 1</p>
                    </div>
                  </div>`);
                })
               });
        
     
        }
}

export function setUserInfo(userObject) {
  userInfo = userObject;
  console.log(userInfo);
}

export function addToCart (bookIndex){
    cart.push(bookIndex);
    $("#cartCount").html(cart.length.toString ());
}