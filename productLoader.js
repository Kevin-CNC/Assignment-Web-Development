// products table in order to easily retrieve data from every book in here.
// however, keeping data on client-accessible code (on the client machine) is bad practice & extremely dangerous.
// only done for simplicity for the project.
const productsTable = {
    "Fiction":[
        {
            "Title": "The Great Gatsby",
            "Author": "F. Scott Fitzgerald",
            "Price": "£7.99",
            "Description": "A dazzling tale of love, wealth, and obsession, set against the backdrop of the Roaring Twenties. Gatsby’s pursuit of the unattainable dream will haunt you long after the final page."
        },
        {
            "Title": "To Kill a Mockingbird",
            "Author": "Harper Lee",
            "Price": "£9.99",
            "Description": "A poignant story of justice and morality in the Deep South, seen through the eyes of a fearless young girl. Harper Lee's classic challenges prejudice with warmth and humanity."
        },
        {
            "Title": "1984",
            "Author": " George Orwell",
            "Price": "£8.49",
            "Description": "A chilling dystopian masterpiece where Big Brother watches your every move. George Orwell’s vision of a totalitarian future feels eerily relevant today."
        },
    ],
    "Non-Fiction":[
        {
            "Title": "Sapiens A Brief History of Humankind",
            "Author": "Yuval Noah Harari",
            "Price": "£12.99",
            "Description":"An eye-opening journey through the history of our species, from prehistoric tribes to modern society. Yuval Noah Harari brilliantly unpacks what makes us human."
        },
        {
            "Title": "Educated",
            "Author": "Tara Westover",
            "Price": "£10.99",
            "Description":"A breathtaking memoir of a woman who escapes a strict survivalist family to pursue education. Tara Westover’s journey is a testament to resilience and self-discovery."
        },
        {
            "Title": "Becoming",
            "Author": "Michelle Obama",
            "Price": "£11.49",
            "Description":"A deeply personal memoir from Michelle Obama, tracing her journey from a modest Chicago upbringing to the White House. A powerful story of determination, love, and leadership."
        },
    ],
    "Science Fiction & Fantasy": [
    {
      "Title": "Dune",
      "Author": "Frank Herbert",
      "Price": "£10.99",
      "Description":" A legendary sci-fi epic of power, prophecy, and survival on the desert planet of Arrakis. Frank Herbert’s masterpiece blends politics, adventure, and mysticism."
    },
    {
      "Title": "The Hobbit",
      "Author": "J.R.R. Tolkien",
      "Price": "£9.49",
      "Description": "Join Bilbo Baggins on a thrilling quest filled with dragons, treasure, and unexpected bravery. J.R.R. Tolkien’s timeless adventure sparks the imagination."
    },
    {
      "Title": "Ender's Game",
      "Author": "Orson Scott Card",
      "Price": "£8.99",
      "Description": "A gripping tale of a brilliant young strategist trained for an intergalactic war. Orson Scott Card delivers a mind-bending mix of sci-fi and psychological depth."
    }
  ],
  "Self-Help & Personal Development": [
    {
      "Title": "Atomic Habits",
      "Author": "James Clear",
      "Price": "£8.99",
      "Description": "Small changes, big results—this book reveals how tiny daily habits can transform your life. James Clear provides practical strategies backed by psychology."
    },
    {
      "Title": "The Power of Now",
      "Author": "Eckhart Tolle",
      "Price": "£9.99",
      "Description": "A life-changing guide to living fully in the present moment. Eckhart Tolle teaches how to let go of past regrets and future anxieties."
    },
    {
      "Title": "How to Win Friends and Influence People",
      "Author": "Dale Carnegie",
      "Price": "£7.99",
      "Description": "The ultimate guide to mastering social skills and persuasion. Dale Carnegie’s timeless wisdom helps you connect, lead, and succeed."
    }
  ],
  "Children's Books": [
    {
      "Title": "Harry Potter and the Philosopher's Stone",
      "Author": "J.K. Rowling",
      "Price": "£8.99",
      "Description": "A boy discovers he's a wizard and enters a magical world filled with adventure, friendship, and danger. J.K. Rowling’s beloved classic enchants readers of all ages."
    },
    {
      "Title": "Charlotte's Web",
      "Author": "E.B. White",
      "Price": "£6.99",
      "Description": "A heartwarming story of friendship between a pig and a wise spider who spins words into her web. E.B. White’s tale is a timeless lesson in kindness and hope."
    },
    {
      "Title": "Matilda",
      "Author": "Roald Dahl",
      "Price": "£7.49",
      "Description": "A genius girl with extraordinary powers takes on cruel adults in this witty and empowering story. Roald Dahl’s magical tale proves that intelligence and courage always win."
    }
  ]
}

// get queried title
const title = new URLSearchParams(window.location.search).get('title');
let currentIndex = 0;

let bookTitle, Price, Author, Description = "";

const imgs = [
    `/products-images/${title}/Front.jpg`,
    `/products-images/${title}/Back.jpg`,
];

// source loader
function updateImage() {
    const bookImage = document.getElementById("bookImage");
    if (bookImage) {
        bookImage.src = imgs[currentIndex];
    } else {
        console.error("Book image element not found!!");
    }
}

function goForth() {
    currentIndex = (currentIndex + 1) % imgs.length;
    updateImage();
}

function goBack() {
    currentIndex = (currentIndex - 1 + imgs.length) % imgs.length;
    updateImage();
}

// we get the book's details here:
let foundException = {};
try {
    for (const category in productsTable) {
        for (const book of productsTable[category]) {
            if (book.Title.toLowerCase().trim() === title.toLowerCase().trim()) {

              Title = book.Title;
              Price = book.Price;
              Description = book.Description;
              Author = book.Author


                throw foundException;
            }
        }
    }
} catch (Exception) {
    if (Exception === foundException) {
        console.log("Found the target book!!");
    }
}

// only adds image of the current index whenever the DOM object's content is ready
document.addEventListener("DOMContentLoaded", () => {
    updateImage();

    document.getElementById("bookTitle").innerHTML = `${Title} - By: ${Author}`
    document.getElementById("shortDescription").innerHTML = `${Description}`
    document.getElementById("purchaseButton").innerHTML = `PURCHASE - ${Price}`
});
