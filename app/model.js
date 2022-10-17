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
      bookTitle:"Twilight Box Set",
      bookImage: "twilight-box-set.jpg",
      bookTxt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
      price: "$99.99"
    },
    {
      bookTitle:"Harry Potter Set",
      bookImage: "hp-box-set.jpg",
      bookTxt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
      price: "$100"
    },
    {
      bookTitle:"Game of Thrones Set",
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
var bookList2 = [
  {
    bookTitle:"Finding Me By Viola Davis",
    bookImage: "finding me.jpg",
    bookTxt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    price: "$27.99"
  },
  {
    bookTitle:"The Autobiography of Martin Luther King Jr. Edited By Clayborne Carson",
    bookImage: "mlk-biography.jpg",
    bookTxt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    price: "$19.99"
  },
  {
    bookTitle:"The Autobiography of Eleanor Roosevelt",
    bookImage: "elenor-roosevelt-biography.jpg",
    bookTxt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    price: "$17.99"
  }
]
var bookList3 = [
  {
    bookTitle:"Misery By Stephen King",
    bookImage: "misery.jpg",
    bookTxt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    price: "$19.99"
  },
  {
    bookTitle:"Frankenstein by Mary Shelly",
    bookImage: "frankenstein.jpg",
    bookTxt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    price: "$15.99"
  },
  {
    bookTitle:"Phantoms By Dean Koontz",
    bookImage: "phantoms.jpg",
    bookTxt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    price: "$19.99"
  }
]
var bookList4 = [
  {
    bookTitle:"Winnie The Pooh By A. A. Milne",
    bookImage: "winnie-the-pooh.jpg",
    bookTxt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    price: "$19.99"
  },
  {
    bookTitle:"The Cat In The Hat By Dr.Seuss",
    bookImage: "cat-and-the-hat.jpg",
    bookTxt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    price: "$15.99"
  },
  {
    bookTitle:"Fun Facts About Space By Baby Professor",
    bookImage: "fun-facts-about-space.jpg",
    bookTxt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
    price: "$7.99"
  }
]

export function changePage(pageID, callback,subPageID) {

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
            $(".booksRow").append (`<div class="bookSetSection">
            <img class="bookSetImg" src="images/${book.bookImage}" alt="twilight">
            <div class="bookInfo">
                <p class="bookTxt">${book.bookTxt}</p>
                <p class="bookPrice">${book.price}</p>
                <button id=${idx} class="booksBtn">ADD TO CART</button>
            </div>
        </div>`);
         } )
         $.each(bookList2, function(idx, book){
          $(".booksRow2").append (`<div class="bookSection">
          <img class="bookImg" src="images/${book.bookImage}" alt="twilight">
          <div class="bookInfo">
              <p class="bookTxt">${book.bookTxt}</p>
              <p class="bookPrice">${book.price}</p>
              <button id=${idx} class="booksBtn">ADD TO CART</button>
          </div>
      </div>`);
        } )
        $.each(bookList3, function(idx, book){
          $(".booksRow3").append (`<div class="bookSection">
          <img class="bookImg" src="images/${book.bookImage}" alt="twilight">
          <div class="bookInfo">
              <p class="bookTxt">${book.bookTxt}</p>
              <p class="bookPrice">${book.price}</p>
              <button id=${idx} class="booksBtn">ADD TO CART</button>
          </div>
      </div>`);
        } )
        $.each(bookList4, function(idx, book){
          $(".booksRow4").append (`<div class="bookSection">
          <img class="bookImg" src="images/${book.bookImage}" alt="twilight">
          <div class="bookInfo">
              <p class="bookTxt">${book.bookTxt}</p>
              <p class="bookPrice">${book.price}</p>
              <button id=${idx} class="booksBtn">ADD TO CART</button>
          </div>
      </div>`);
        } )
         callback();
            });
          
        } /*else if(subPageID == undefined) {
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
        } else if(subPageID == '') {
          $.get(`pages/${pageID}/${subPageID}.html`, function (data) {
              console.log(data);
              $("#app").html(data);
          }).fail((error) => {
              if(error.status == "404") {
                  alert("Page cannot be found")
              }
              // + concantinates 
              console.log("error", error.status);
          });
        } */ else {
            $.get(`pages/${pageID}/${pageID}.html`, function (data) {
                console.log('data ' + data);
                $('#app').html(data);
                $.each(cart, function(idx, cartItem){
                    console.log(bookList[cartItem]);
                    let book = bookList[cartItem];
                    $(".items").append (`<div class="bookSetSection">
                    <img class="bookSetImg" src="images/${book.bookImage}" alt="twilight">
                    <div class="bookInfo">
                        <p class="bookTitle">${book.bookTitle}</p>
                        <p class="bookPrice">${book.price}</p>
                        <p class="bookStock">In Stock</p>
                        <div class="bookQty"><p>Qty:1</p>  <p class="change"> change</p> <p>|</p> <p class="delete">delete</p></div>
                    </div>
                </div>`);
                })
                //solo book
                $.each(cart, function(idx, cartItem){
                  console.log(bookList2[cartItem]);
                  let book = bookList2[cartItem];
                  $(".items").append (`<div class="bookSection">
                  <img class="bookImg" src="images/${book.bookImage}" alt="twilight">
                  <div class="bookInfo">
                    <p class="bookTitle">${book.bookTitle}</p>
                    <p class="bookPrice">${book.price}</p>
                    <p class="bookStock">In Stock</p>
                    <div class="bookQty"><p>Qty:1</p>  <p class="change"> change</p> <p>|</p> <p class="delete">delete</p></div>
                  </div>
              </div>`);
              })
              $.each(cart, function(idx, cartItem){
                console.log(bookList3[cartItem]);
                let book = bookList3[cartItem];
                $(".items").append (`<div class="bookSection">
                <img class="bookImg" src="images/${book.bookImage}" alt="twilight">
                <div class="bookInfo">
                  <p class="bookTitle">${book.bookTitle}</p>
                  <p class="bookPrice">${book.price}</p>
                  <p class="bookStock">In Stock</p>
                  <div class="bookQty"><p>Qty:1</p>  <p class="change"> change</p> <p>|</p> <p class="delete">delete</p></div>
                  </div>
            </div>`);
            })
            $.each(cart, function(idx, cartItem){
              console.log(bookList4[cartItem]);
              let book = bookList4[cartItem];
              $(".items").append (`<div class="bookSection">
              <img class="bookImg" src="images/${book.bookImage}" alt="twilight">
              <div class="bookInfo">
                <p class="bookTitle">${book.bookTitle}</p>
                <p class="bookPrice">${book.price}</p>
                <p class="bookStock">In Stock</p>
                <div class="bookQty"><p>Qty:1</p>  <p class="change"> change</p> <p>|</p> <p class="delete">delete</p></div>
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
