const articles = [
    {
        id: 1,
        title: "Septimus Heap Book One: Magyk",
        date: "July 5, 2022",
        description: "If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.",
        imgSrc: "images/septimus_heap_magyk.jpg",  // Local image file
        imgAlt: "Book cover for Septimus Heap 1",
        ages: "10-14",
        genre: "Fantasy",
        stars: "****"
    },
    {
        id: 2,
        title: "Magnus Chase Book One: Sword of Summer",
        date: "December 12, 2021",
        description: "The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.",
        imgSrc: "images/magnus_chase_sword_of_summer.jpg",  // Local image file
        imgAlt: "Book cover for Magnus Chase 1",
        ages: "12-16",
        genre: "Fantasy",
        stars: "⭐⭐⭐⭐"
    },
    {
        id: 3,
        title: "Belgariad Book One: Pawn of Prophecy",
        date: "Feb 12, 2022",
        description: "A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his Aunt Pol and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
        imgSrc: "images/belgariad_pawn_of_prophecy.jpg",  // Local image file
        imgAlt: "Book cover for Pawn of Prophecy",
        ages: "12-16",
        genre: "Fantasy",
        stars: "⭐⭐⭐⭐⭐"
    }
];

function displayArticles() {
    const articlesSection = document.getElementById('articles');
    articles.forEach(article => {
        const articleElement = document.createElement('article');
        articleElement.innerHTML = `
            <h2>${article.title}</h2>
            <img src="${article.imgSrc}" alt="${article.imgAlt}" />
            <p><strong>Date:</strong> ${article.date}</p>
            <p>${article.description}</p>
            <p><strong>Ages:</strong> ${article.ages}</p>
            <p><strong>Genre:</strong> ${article.genre}</p>
            <p><strong>Rating:</strong> ${article.stars}</p>
        `;
        articlesSection.appendChild(articleElement);
    });
}

document.addEventListener('DOMContentLoaded', displayArticles);
