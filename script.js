let myBooks = [
   "book1",
   "book2",
   "book3",
   "book4",
   "book5",
   "book6",
   "book7",
   "book8",
   "book9",
   "book10"
];

console.log(myBooks);

// let ul = document.createElement("ul");
// document.querySelector("#list").appendChild(ul);

// // myBooks.forEach(function(myBook){

// //    let li = document.createElement("li");
// //    ul.appendChild(li);
// //    li.innerHTML += myBooks;
// // });

// for (i=0; i<myBooks.length; i++) {
//    let li = document.createElement("li");
//    ul.appendChild(li);
//    li.innerHTML += myBooks[i];

// }


// const bookDetails = {
//    book1: {
//       title: "title1",
//       author: "author1",
//       language: "lang1"
//    },
//    book2: {
//       title: "title2",
//       author: "author2",
//       language: "lang2"
//    },
//    book3: {
//       title: "title3",
//       author: "author3",
//       language: "lang3"
//    },
//    book4: {
//       title: "title4",
//       author: "author4",
//       language: "lang4"
//    },
//    book5: {
//       title: "title5",
//       author: "author5",
//       language: "lang5"
//    },
//    book6: {
//       title: "title6",
//       author: "author6",
//       language: "lang6"
//    },
//    book7: {
//       title: "title7",
//       author: "author7",
//       language: "lang7"
//    },
//    book8: {
//       title: "title8",
//       author: "author8",
//       language: "lang8"
//    },
//    book9: {
//       title: "title9",
//       author: "author9",
//       language: "lang9"
//    },
//    book10: {
//       title: "title10",
//       author: "author10",
//       language: "lang10"
//    }
// }

let myBooks2 = [
   {
      book1: "title, author, lang "
   },
   {
      book2: "title, author, lang"
   },
   {
      book3: "title, author, lang"
   },
   {
      book4: "title, author, lang"
   },
   {
      book5: "title, author, lang"
   },
   {
      book6: "title, author, lang"
   },
   {
      book7: "title, author, lang"
   },
   {
      book8: "title, author, lang"
   },
   {
      book9: "title, author, lang"
   },
   {
      book10: "title, author, lang"
   }

];

let ul = document.createElement("ul");
document.querySelector("#list").appendChild(ul);

// myBooks2.forEach(function(myBook2){
//    let li = document.createElement("li");
//    ul.appendChild(li);
//    li.innerHTML += myBooks2;
// });

for (i=0; i<myBooks2.length; i++) {
   let li = document.createElement("li");
   ul.appendChild(li);
   li.innerHTML += myBooks2[i];
}
