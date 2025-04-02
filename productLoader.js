// products table in order to easily retrieve data from every book in here.
// however, keeping data on client-accessible code (on the client machine) is bad practice & extremely dangerous.
// only done for simplicity for the project.
const productsTable = {
    "Fiction":[
        {
            "Title": "The Great Gatsby",
            "Author": "F. Scott Fitzgerald",
            "Price": "£7.99",
            "Description": "A dazzling tale of love, wealth, and obsession, set against the backdrop of the Roaring Twenties. Gatsby’s pursuit of the unattainable dream will haunt you long after the final page.",
            "Reviews":[
              {"Reviewer":"John F. Belz","Review":"Pretty good book, along with good audio. I love it!","Stars":"★★★★★"},
              {"Reviewer":"Marcus Jhones","Review":"Good book selection and good audio. Would reccomend.","Stars":"★★★★☆"},
              {"Reviewer":"Bob Jon","Review":"Amazing service & amazing voicing.","Stars":"★★★★☆"}
            ]
        },
        {
            "Title": "To Kill a Mockingbird",
            "Author": "Harper Lee",
            "Price": "£9.99",
            "Description": "A poignant story of justice and morality in the Deep South, seen through the eyes of a fearless young girl. Harper Lee's classic challenges prejudice with warmth and humanity.",
            "Reviews":[
              {"Reviewer":"Charlie D","Review":"Loved it!","Stars":"★★★★☆"},
              {"Reviewer":"Kenneth Sav","Review":"100/100, please buy","Stars":"★★★★☆"},
              {"Reviewer":"Abrahm Linc","Review":"DO NOT MISS OUT! THEY HAVE POTENTIAL!","Stars":"★★★★☆"}
            ]
        },
        {
            "Title": "1984",
            "Author": " George Orwell",
            "Price": "£8.49",
            "Description": "A chilling dystopian masterpiece where Big Brother watches your every move. George Orwell’s vision of a totalitarian future feels eerily relevant today.",
            "Reviews":[
              {"Reviewer":"Salim D","Review":"Loved it! Buy NOW!","Stars":"★★★★☆"},
              {"Reviewer":"Karim Musa","Review":"Truly, trulyyyyy art!","Stars":"★★★★★"},
              {"Reviewer":"Lino Alpacino","Review":"pretty alright tbh","Stars":"★★★★☆"}
            ]
        },
    ],
    "Non-Fiction":[
        {
            "Title": "Sapiens A Brief History of Humankind",
            "Author": "Yuval Noah Harari",
            "Price": "£12.99",
            "Description":"An eye-opening journey through the history of our species, from prehistoric tribes to modern society. Yuval Noah Harari brilliantly unpacks what makes us human.",
            "Reviews":[
              {"Reviewer":"Joseph Klt","Review":"Not bad; honestly a pretty amazing read!","Stars":"★★★★☆"},
              {"Reviewer":"True reader","Review":"Listened to this about 2 times now; soon gonna make it 3!","Stars":"★★★★★"},
              {"Reviewer":"Luke Thompson","Review":"not as expected felt a bit soulless but not bad","Stars":"★★★☆☆"}
            ]
        },
        {
            "Title": "Educated",
            "Author": "Tara Westover",
            "Price": "£10.99",
            "Description":"A breathtaking memoir of a woman who escapes a strict survivalist family to pursue education. Tara Westover’s journey is a testament to resilience and self-discovery.",
            "Reviews":[
              {"Reviewer":"Thomas Jon","Review":"Good good book!","Stars":"★★★★☆"},
              {"Reviewer":"Micheal Sho","Review":"neither good nor bad tbh","Stars":"★★★☆☆"},
              {"Reviewer":"Nathaniel B","Review":"Complex downloads; however the audiobook was good quality so 50/50","Stars":"★★★☆☆"}
            ]
        },
        {
            "Title": "Becoming",
            "Author": "Michelle Obama",
            "Price": "£11.49",
            "Description":"A deeply personal memoir from Michelle Obama, tracing her journey from a modest Chicago upbringing to the White House. A powerful story of determination, love, and leadership.",
            "Reviews":[
              {"Reviewer":"Alice Show","Review":"An incredible listen. Highly reccomend!","Stars":"★★★★☆"},
              {"Reviewer":"Michelle Nelson","Review":"Truly empowering <333","Stars":"★★★★★"},
              {"Reviewer":"Roland Freud","Review":"Bit of inconsistent reading, but overall a great listen!","Stars":"★★★★☆"}
            ]
        },
    ],
    "Science Fiction & Fantasy": [
    {
      "Title": "Dune",
      "Author": "Frank Herbert",
      "Price": "£10.99",
      "Description":" A legendary sci-fi epic of power, prophecy, and survival on the desert planet of Arrakis. Frank Herbert’s masterpiece blends politics, adventure, and mysticism.",
      "Reviews":[
              {"Reviewer":"Alexander Bold","Review":"Incredible!","Stars":"★★★★☆"},
              {"Reviewer":"Lucilla Lovewright","Review":"Like I remembered! I love it!","Stars":"★★★★★"},
              {"Reviewer":"BL T","Review":"just as i read when i was a kid","Stars":"★★★★☆"}
            ]
    },
    {
      "Title": "The Hobbit",
      "Author": "J.R.R. Tolkien",
      "Price": "£9.49",
      "Description": "Join Bilbo Baggins on a thrilling quest filled with dragons, treasure, and unexpected bravery. J.R.R. Tolkien’s timeless adventure sparks the imagination.",
      "Reviews":[
              {"Reviewer":"Tony Stark","Review":"A classic; One of the best!","Stars":"★★★★★"},
              {"Reviewer":"David Shield","Review":"Like I remembered! I love it!","Stars":"★★★★★"},
              {"Reviewer":"Lucas Strike","Review":"<3 My whole generation!","Stars":"★★★★★"}
            ]
    },
    {
      "Title": "Ender's Game",
      "Author": "Orson Scott Card",
      "Price": "£8.99",
      "Description": "A gripping tale of a brilliant young strategist trained for an intergalactic war. Orson Scott Card delivers a mind-bending mix of sci-fi and psychological depth.",
      "Reviews":[
              {"Reviewer":"Miles Short","Review":"I loved it; And I never knew about it!","Stars":"★★★★★"},
              {"Reviewer":"Bart Simpson","Review":"Like I remembered! I love it!","Stars":"★★★★★"},
              {"Reviewer":"Lucas Tolkien","Review":"Loved it!","Stars":"★★★★☆"}
            ]
    }
  ],
  "Self-Help & Personal Development": [
    {
      "Title": "Atomic Habits",
      "Author": "James Clear",
      "Price": "£8.99",
      "Description": "Small changes, big results—this book reveals how tiny daily habits can transform your life. James Clear provides practical strategies backed by psychology.",
      "Reviews":[
              {"Reviewer":"Lisa Simpson","Review":"I loved it; And I never knew about it!","Stars":"★★★★☆"},
              {"Reviewer":"L Jungk","Review":"CHANGED MY WHOLE LIFE!","Stars":"★★★★★"},
              {"Reviewer":"John Bin","Review":"it's good i guess","Stars":"★★★★☆"}
            ]
    },
    {
      "Title": "The Power of Now",
      "Author": "Eckhart Tolle",
      "Price": "£9.99",
      "Description": "A life-changing guide to living fully in the present moment. Eckhart Tolle teaches how to let go of past regrets and future anxieties.",
      "Reviews":[
              {"Reviewer":"Kylo Ren","Review":"good good advice! yes!","Stars":"★★★★☆"},
              {"Reviewer":"Dave Bo","Review":"garbage quality, decent advice.","Stars":"★★☆☆☆"},
              {"Reviewer":"Stulinger Flood","Review":"Very thought provoiking, the quality is a bit off tho!","Stars":"★★★★☆"}
            ]
    },
    {
      "Title": "How to Win Friends and Influence People",
      "Author": "Dale Carnegie",
      "Price": "£7.99",
      "Description": "The ultimate guide to mastering social skills and persuasion. Dale Carnegie’s timeless wisdom helps you connect, lead, and succeed.",
      "Reviews":[
              {"Reviewer":"Misty Johnson","Review":"Very very useful. I loved it.","Stars":"★★★★☆"},
              {"Reviewer":"Bob Obo","Review":"tried to manipulate people; got manipulated instead.","Stars":"★★☆☆☆"},
              {"Reviewer":"Blossom Jr","Review":"I loved it all!","Stars":"★★★★☆"}
            ]
    }
  ],
  "Children's Books": [
    {
      "Title": "Harry Potter and the Philosopher's Stone",
      "Author": "J.K. Rowling",
      "Price": "£8.99",
      "Description": "A boy discovers he's a wizard and enters a magical world filled with adventure, friendship, and danger. J.K. Rowling’s beloved classic enchants readers of all ages.",
      "Reviews":[
              {"Reviewer":"Marlton J","Review":"So good! Just like when I was a kid!","Stars":"★★★★☆"},
              {"Reviewer":"Harry Potter Fan","Review":"DON'T MISS OUT! IT'S AMAZING.","Stars":"★★★★★"},
              {"Reviewer":"Alice Shield","Review":"I love Harry Potter! Reccomended!","Stars":"★★★★☆"}
            ]
    },
    {
      "Title": "Charlotte's Web",
      "Author": "E.B. White",
      "Price": "£6.99",
      "Description": "A heartwarming story of friendship between a pig and a wise spider who spins words into her web. E.B. White’s tale is a timeless lesson in kindness and hope.",
      "Reviews":[
              {"Reviewer":"David Johnes","Review":"My child loves it, huge reccomendation for parents!","Stars":"★★★★☆"},
              {"Reviewer":"Harry B","Review":"Just like when I was a kid.","Stars":"★★★★★"},
              {"Reviewer":"Marcus S.","Review":"loved it!","Stars":"★★★★☆"}
            ]
    },
    {
      "Title": "Matilda",
      "Author": "Roald Dahl",
      "Price": "£7.49",
      "Description": "A genius girl with extraordinary powers takes on cruel adults in this witty and empowering story. Roald Dahl’s magical tale proves that intelligence and courage always win.",
      "Reviews":[
              {"Reviewer":"Mary Lee","Review":"amazingly captivating!","Stars":"★★★★☆"},
              {"Reviewer":"Lily F","Review":"better than what I expected!","Stars":"★★★★★"},
              {"Reviewer":"Mario Pompi","Review":"my daughter loved it!","Stars":"★★★★☆"}
            ]
    }
  ]
}

// get queried title
const title = new URLSearchParams(window.location.search).get('title');
let currentIndex = 0;

let bookTitle, Price, Author, Description = "";
let Reviews;

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

              bookTitle = book.Title;
              Price = book.Price;
              Description = book.Description;
              Author = book.Author;
              Reviews = book.Reviews;


                throw foundException;
            }
        }
    }
} catch (Exception) {
    if (Exception === foundException) {
        console.log("Found the target book!!");
    }
}

function loadReview(reviewIndex){
  const reviewCard = document.getElementById(`card${reviewIndex}`)
  const reviewerArea = reviewCard.querySelector('h3');
  const reviewArea = reviewCard.querySelector('p');
  const reviewStarsArea = reviewCard.querySelector('.stars');

  let index = 1
  Reviews.forEach(review => {
      if( index == reviewIndex ){
        reviewerArea.innerHTML = review.Reviewer;
        reviewArea.innerHTML = review.Review;
        reviewStarsArea.innerHTML - review.Stars;
      }
      index += 1;
  });


}

// only adds image of the current index whenever the DOM object's content is ready
document.addEventListener("DOMContentLoaded", () => {
    updateImage();

    loadReview(1);
    loadReview(2);
    loadReview(3);

    document.getElementById("bookTitle").innerHTML = `${bookTitle} - By: ${Author}`
    document.getElementById("shortDescription").innerHTML = `${Description}`
    document.getElementById("purchaseButton").innerHTML = `PURCHASE - ${Price}`
});
