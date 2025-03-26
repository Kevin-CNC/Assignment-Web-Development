// products table in order to easily retrieve data from every book in here.
// however, keeping data on client-accessible code (on the client machine) is bad practice & extremely dangerous.
// only done for simplicity for the project.
const productsTable = {
    "Fiction":[
        {
            "Title": "The Great Gatsby",
            "Author": "F. Scott Fitzgerald",
            "Price": "£7.99",
        },
        {
            "Title": "To Kill a Mockingbird",
            "Author": "Harper Lee",
            "Price": "£9.99",
        },
        {
            "Title": "1984",
            "Author": " George Orwell",
            "Price": "£8.49",
        },
    ],
    "Non-Fiction":[
        {
            "Title": "Sapiens A Brief History of Humankind",
            "Author": "Yuval Noah Harari",
            "Price": "£12.99",
        },
        {
            "Title": "Educated",
            "Author": "Tara Westover",
            "Price": "£10.99",
        },
        {
            "Title": "Becoming",
            "Author": "Michelle Obama",
            "Price": "£11.49",
        },
    ],
    "Science Fiction & Fantasy": [
    {
      "Title": "Dune",
      "Author": "Frank Herbert",
      "Price": "£10.99"
    },
    {
      "Title": "The Hobbit",
      "Author": "J.R.R. Tolkien",
      "Price": "£9.49"
    },
    {
      "Title": "Ender's Game",
      "Author": "Orson Scott Card",
      "Price": "£8.99"
    }
  ],
  "Self-Help & Personal Development": [
    {
      "Title": "Atomic Habits",
      "Author": "James Clear",
      "Price": "£8.99"
    },
    {
      "Title": "The Power of Now",
      "Author": "Eckhart Tolle",
      "Price": "£9.99"
    },
    {
      "Title": "How to Win Friends and Influence People",
      "Author": "Dale Carnegie",
      "Price": "£7.99"
    }
  ],
  "Children's Books": [
    {
      "Title": "Harry Potter and the Philosopher's Stone",
      "Author": "J.K. Rowling",
      "Price": "£8.99"
    },
    {
      "Title": "Charlotte's Web",
      "Author": "E.B. White",
      "Price": "£6.99"
    },
    {
      "Title": "Matilda",
      "Author": "Roald Dahl",
      "Price": "£7.49"
    }
  ]
}

window.onload = function(){
    const table = document.querySelector("#audiobooksTable");

    // Algorithm for book table generation on website (on^2) 
    for( const [categoryName,categoryLibrary] of Object.entries(productsTable)){
        table.innerHTML += `<tr id="categoryName"> <td colspan=3>${categoryName}</td> </tr>`

        for( const [_,book] of Object.entries(categoryLibrary)){

            const currentTitle = book.Title;
            const currentAuthor = book.Author;
            const currentPrice = book.Price;

            table.innerHTML += `<tr> <td><a id="bookTitle" href="product.html?title=${currentTitle}">${currentTitle}</a></td> <td id="bookAuthor">${currentAuthor}</td> <td id="bookPrice">${currentPrice}</td> </tr>`

        }
    }
}