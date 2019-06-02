let mainBody = document.querySelector("body");
mainBody.style.backgroundImage = "url('./images/back.jpg')";
mainBody.style.backgroundSize = "cover";
mainBody.style.backgroundRepeat = "no-repeat";

let mainDiv = document.getElementById("container");
mainDiv.style.backgroundColor = "rgba(0, 0, 0, 0.25)";
mainDiv.style.borderRadius = "5%";
mainDiv.style.padding = "2.5%";

// let navHeader = document.querySelector("h1");
// navHeader.style.fontFamily = 

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

// for (i=0; i < myBooks.length; i++) {
//    let li = document.createElement("li");
//    ul.appendChild(li);
//    li.innerHTML = myBooks[i];
// }


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

for (i = 0; i < booksDetailed.length; i++) {
   let li = document.createElement("li");
   ul.appendChild(li);
   li.style.listStyleType = "none"
   li.innerHTML = `${booksDetailed[i].title}`;
   let ul1 = document.createElement("ul");
   li.appendChild(ul1);
   ul1.innerHTML = `${booksDetailed[i].author}`;
   let ul2 = document.createElement("ul");
   li.appendChild(ul2);
   ul2.innerHTML = `${booksDetailed[i].language}`;
   // let ul3 = document.createElement("ul");
   // li.appendChild(ul3);
   // ul3.id = "covers";
}

const imagePaths = [
   { cover: "./images/image1.png" },

   { cover: "./images/image2.png" },

   { cover: "./images/image3.png" },

   { cover: "./images/image4.png" },

   { cover: "./images/image5.png" },

   { cover: "./images/image6.png" },

   { cover: "./images/image7.png" },

   { cover: "./images/image8.png" },

   { cover: "./images/image9.png" },

   { cover: "./images/image10.png" },
];

let liElements = ul.getElementsByTagName("li");
for (let i = 0; i < liElements.length; i++) {
   let imageElement = document.createElement("img");
   imageElement.src = imagePaths[i].cover;
   imageElement.width = 50;
   liElements[i].appendChild(imageElement);
   imageElement.addEventListener("mouseover", mouseOver);
   imageElement.addEventListener("mouseout", mouseOut);
   function mouseOver() {
      imageElement.width = 200;
   }
   function mouseOut() {
      imageElement.width = 50;
    }
};

