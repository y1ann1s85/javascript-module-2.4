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
    // let ulElement = document.createElement("ul");
    
    // document.getElementsByTagName("body")[0].appendChild(ulElement);
    
    // let displayBookIds = function (myBooksArray) {
    //     for (let i = 0; i < myBooks.length; i++) {
    
    //         let element = document.createElement("li");
    
    //         element.innerHTML = myBooksArray[i];
    
    //         ulElement.appendChild(element);
    
    //     }
    // };
    
    
    // displayBookIds(myBooks);
    
    
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
    
    // for (i=0; i < li.length; i++) {
    //     let li = document.createElement("li");
    //     ul.appendChild(li);
    //     myJSON = JSON.stringify(booksDetailed);
    //     li.innerHTML += myJSON;
    //  }

    let displayBooks = function (booksDetailedObject) {
    
       let liElements = ul.getElementsByTagName("li");
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
