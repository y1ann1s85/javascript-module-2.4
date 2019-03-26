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

let ul = document.createElement("ul");
document.querySelector("#list").appendChild(ul);

for (i=0; i < myBooks.length; i++) {
   let li = document.createElement("li");
   ul.appendChild(li);
   li.innerHTML = myBooks[i];
}


const booksDetailed = [
   {
      title: "title1",
      author: "author1",
      language: "lang1"
   },
   {
      title: "title2",
      author: "author2",
      language: "lang2"
   },
   {
      title: "title3",
      author: "author3",
      language: "lang3"
   },
   {
      title: "title4",
      author: "author4",
      language: "lang4"
   },
   {
      title: "title5",
      author: "author5",
      language: "lang5"
   },
   {
      title: "title6",
      author: "author6",
      language: "lang6"
   },
   {
      title: "title7",
      author: "author7",
      language: "lang7"
   },
   {
      title: "title8",
      author: "author8",
      language: "lang8"
   },
   {
      title: "title9",
      author: "author9",
      language: "lang9"
   },
   {
      title: "title10",
      author: "author10",
      language: "lang10"
   }
];


for (i=0; i < booksDetailed.length; i++) {
   let li = document.createElement("li");
   ul.appendChild(li);
   li.innerHTML = `${booksDetailed[i].title} ${booksDetailed[i].author} ${booksDetailed[i].language}`;
}

const imagePaths = {
    "book1": "./images/image1.jpg",
 
    "book2": "./images/image1.jpg",
 
    "book3": "./images/image1.jpg",
 
    "book4": "./images/image1.jpg",
 
    "book5": "./images/image1.jpg",
 
    "book6": "./images/image1.jpg",
 
    "book7": "./images/image1.jpg",
 
    "book8": "./images/image1.jpg",
 
    "book9": "./images/image1.jpg",
 
    "book10": "./images/image1.jpg"
};

let addImagePaths = function (paths) {

   let liElements = ul.getElementsByTagName("li");    
   for (let i = 0; i < liElements.length; i++) {
       let id = liElements[i].getAttribute("id");
       let imageElement = document.createElement("img");
       imageElement.setAttribute("src", paths[id]);
       imageElement.setAttribute("alt", "book cover");
       imageElement.setAttribute("class", "cover");
       imageElement.width = 50;
       liElements[i].appendChild(imageElement);
   }
};
addImagePaths(imagePaths);
