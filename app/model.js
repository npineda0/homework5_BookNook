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
      bookImage: "twilight-box-set.jpg",
      bookTxt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
      price: "$99.99"
    },
    {
      bookImage: "hp-box-set.jpg",
      bookTxt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
      price: "$100"
    },
    {
      bookImage: "got-box-set.jpg",
      bookTxt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
      price: "$100"
    },
    /*
    {
      bookImage: "finding me.jpg",
      bookTxt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
      price: "$27.99"
    },
    {
      bookImage: "mlk-biography.jpg",
      bookTxt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
      price: "$19.99"
    },
    {
      bookImage: "elenor-roosevelt-biography.jpg",
      bookTxt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
      price: "$17.99"
    },
    {
      bookImage: "misery.jpg",
      bookTxt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
      price: "$19.99"
    },
    {
      bookImage: "frankenstein.jpg",
      bookTxt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
      price: "$15.99"
    },
    {
      bookImage: "phantoms.jpg",
      bookTxt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
      price: "$19.99"
    },
    {
      bookImage: "winnie-the-pooh.jpg",
      bookTxt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
      price: "$19.99"
    },
    {
      bookImage: "cat-and-the-hat.jpg",
      bookTxt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
      price: "$15.99"
    },
    {
      bookImage: "fun-facts-about-space.jpg",
      bookTxt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
      price: "$7.99"
    }
    */
]

export function changePage(pageID, callback) {

    if (pageID == '' || pageID == "home") {
        $.get(`pages/home/home.html`, function (data) {
            // console.log('data ' + data);
             $('#app').html(data);
             callback();
            });
        
        } else if (pageID == "books"){
            $.get(`pages/${pageID}/${pageID}.html`,
            function(data){
                // console.log('data ' + data);
         $('#app').html(data);
         $.each(bookList, function(idx, book){
            $(".booksRow").append (`<div class="bookSection">
            <img class="bookSetImg" src="images/${book.bookImage}" alt="twilight">
            <div class="bookInfo">
                <p class="bookTxt">${book.bookTxt}</p>
                <p class="bookPrice">${book.price}</p>
                <button id=${idx} class="booksBtn">ADD TO CART</button>
            </div>
        </div>`);
         } )
         callback();
            });
        } else {
            $.get(`pages/${pageID}/${pageID}.html`, function (data) {
                console.log('data ' + data);
                $('#app').html(data);
                $.each(cart, function(idx, cartItem){
                    console.log(bookList[cartItem]);
                    let book = bookList[cartItem];
                    $(".items").append (`<div class="bookSection">
                    <img class="bookSetImg" src="images/${book.bookImage}" alt="twilight">
                    <div class="bookInfo">
                        <p class="bookTxt">${book.bookTxt}</p>
                        <p class="bookPrice">${book.price}</p>
                        <button id=${idx} class="booksBtn">ADD TO CART</button>
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
