document.addEventListener("DOMContentLoaded", () => {
    const books = [
        {
            title: "Septimus Heap Book One: Magyk",
            date: "2022-07-05",
            age: "10-14",
            genre: "Fantasy",
            rating: 4,
            description: "If you enjoy stories about seventh sons of seventh sons and magyk, this is the book for you.",
            image: "magyk.jpg"
        },
        {
            title: "Magnus Chase Book One: Sword of Summer",
            date: "2021-12-12",
            age: "12-16",
            genre: "Fantasy",
            rating: 5,
            description: "If you love Norse mythology and adventure, join Magnus Chase in his thrilling quest.",
            image: "sword_of_summer.jpg"
        }
    ];

    const bookList = document.querySelector(".book-list");
    const sortSelect = document.getElementById("sort");
    const ageSelect = document.getElementById("age");
    const genreSelect = document.getElementById("genre");
    const ratingSelect = document.getElementById("rating");

    function displayBooks(filteredBooks) {
        bookList.innerHTML = "";
        filteredBooks.forEach(book => {
            const bookReview = document.createElement("article");
            bookReview.classList.add("book-review");
            bookReview.innerHTML = `
                <div class="book-info">
                    <p>${new Date(book.date).toLocaleDateString()}</p>
                    <p>${book.age}</p>
                    <p>${book.genre}</p>
                    <p>${"*".repeat(book.rating)}</p>
                </div>
                <div class="book-details">
                    <h2>${book.title}</h2>
                    <img src="${book.image}" alt="${book.title} cover">
                    <p>${book.description} <a href="#">Read More...</a></p>
                </div>
            `;
            bookList.appendChild(bookReview);
        });
    }

    function filterBooks() {
        let filteredBooks = [...books];

        // Filter by age
        const selectedAge = ageSelect.value;
        if (selectedAge !== "All Ages") {
            filteredBooks = filteredBooks.filter(book => book.age === selectedAge);
        }

        // Filter by genre
        const selectedGenre = genreSelect.value;
        if (selectedGenre !== "All Genres") {
            filteredBooks = filteredBooks.filter(book => book.genre === selectedGenre);
        }

        // Filter by rating
        const selectedRating = ratingSelect.value;
        if (selectedRating !== "All Ratings") {
            filteredBooks = filteredBooks.filter(book => book.rating === parseInt(selectedRating));
        }

        // Sort books
        const selectedSort = sortSelect.value;
        if (selectedSort === "Newest") {
            filteredBooks.sort((a, b) => new Date(b.date) - new Date(a.date));
        } else if (selectedSort === "Oldest") {
            filteredBooks.sort((a, b) => new Date(a.date) - new Date(b.date));
        }

        displayBooks(filteredBooks);
    }

    // Event listeners for filters
    sortSelect.addEventListener("change", filterBooks);
    ageSelect.addEventListener("change", filterBooks);
    genreSelect.addEventListener("change", filterBooks);
    ratingSelect.addEventListener("change", filterBooks);

    // Initial display
    displayBooks(books);
});
