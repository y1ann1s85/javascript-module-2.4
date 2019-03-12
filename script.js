document.getElementsByTagName("body")[0].onload = function () {

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

// for (i=0; i < myBooks.length; i++) {
//    let li = document.createElement("li");
//    li.innerHTML += myBooks[i];
//    ul.appendChild(li);
// }
let ulElement = document.createElement("ul");

document.getElementsByTagName("body")[0].appendChild(ulElement);

let displayBookIds = function (myBooksArray) {
    for (let i = 0; i < myBooks.length; i++) {

        let element = document.createElement("li");

        element.innerHTML = myBooksArray[i];

        ulElement.appendChild(element);

    }
};


displayBookIds(myBooks);


const booksDetailed = {
   "book1": {
      title: "title1",
      author: "author1",
      language: "lang1"
   },
   "book2": {
      title: "title2",
      author: "author2",
      language: "lang2"
   },
   "book3": {
      title: "title3",
      author: "author3",
      language: "lang3"
   },
   "book4": {
      title: "title4",
      author: "author4",
      language: "lang4"
   },
   "book5": {
      title: "title5",
      author: "author5",
      language: "lang5"
   },
   "book6": {
      title: "title6",
      author: "author6",
      language: "lang6"
   },
   "book7": {
      title: "title7",
      author: "author7",
      language: "lang7"
   },
   "book8": {
      title: "title8",
      author: "author8",
      language: "lang8"
   },
   "book9": {
      title: "title9",
      author: "author9",
      language: "lang9"
   },
   "book10": {
      title: "title10",
      author: "author10",
      language: "lang10"
   }
}

let displayBooks = function (booksDetailedObject) {

   let liElements = ulElement.getElementsByTagName("li");
   for (let i = 0; i < liElements.length; i++) {

       let id = liElements[i].innerHTML;
       let book = booksDetailedObject[id];
       let title = book["title"];
       let language = book["language"];
       let author = book["author"];
       let titleElement = document.createElement("h2");
       titleElement.innerHTML = title;
       titleElement.setAttribute("class", "title");
       let languageElement = document.createElement("p");
       languageElement.innerHTML = "Language: " + language;
       languageElement.setAttribute("class", "language");
       let authorElement = document.createElement("p");
       authorElement.setAttribute("class", "author");
       authorElement.innerHTML = "by " + author;

       liElements[i].innerHTML = "";
       liElements[i].appendChild(titleElement);
       liElements[i].appendChild(languageElement);
       liElements[i].appendChild(authorElement);

       liElements[i].setAttribute("id", id);
   }
};

displayBooks(booksDetailed);

let imagePaths = {
   "book1": "./images/great_expectations.jpg",

   "book2": "./images/our_mutual_friend.jpg",

   "book3": "./images/david_copperfield.jpg",

   "book4": "./images/bleak_house.jpg",

   "book5": "./images/little_dorrit.jpg",

   "book6": "./images/oliver_twist.jpg",

   "book7": "./images/nicholas_nickleby.jpg",

   "book8": "./images/dombey_and_son.jpg",

   "book9": "./images/the_pickwick_papers.jpg",

   "book10": "./images/the_selected_letters_of_charles_dickens.jpg"
};

let addImagePaths = function (paths) {
   let liElements = ulElement.getElementsByTagName("li");

   // Now loop over these entries

   for (let i = 0; i < liElements.length; i++) {
       let id = liElements[i].getAttribute("id");
       let imageElement = document.createElement("img");
       imageElement.setAttribute("src", paths[id]);
       imageElement.setAttribute("alt", "book cover");
       imageElement.setAttribute("class", "cover");
       liElements[i].appendChild(imageElement);
   }
};
addImagePaths(imagePaths);//finally you can see your images on your own page!

};
