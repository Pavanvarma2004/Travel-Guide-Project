// DOM Elements
const navbar = document.querySelector('.header .navbar');
const menuBtn = document.getElementById('menu-btn');
const navClose = document.getElementById('nav-close');
const searchBtn = document.getElementById('search-btn');
const closeSearch = document.getElementById('close-search');
const searchForm = document.querySelector('.search-form');
const searchBox = document.getElementById('search-box');
const header = document.querySelector('.header');

// Toggle Navbar
menuBtn.addEventListener('click', () => navbar.classList.add('active'));
navClose.addEventListener('click', () => navbar.classList.remove('active'));

// Toggle Search Form
searchBtn.addEventListener('click', () => searchForm.classList.add('active'));
closeSearch.addEventListener('click', () => searchForm.classList.remove('active'));

// Filter Adventure & Packages Based on Search Input
searchBox.addEventListener('input', function () {
    const searchQuery = this.value.toLowerCase();

    // Reusable function to filter items
    const filterItems = (selector) => {
        document.querySelectorAll(selector).forEach(item => {
            const title = item.querySelector('h3').textContent.toLowerCase();
            const description = item.querySelector('p').textContent.toLowerCase();
            item.style.display = (title.includes(searchQuery) || description.includes(searchQuery)) ? 'block' : 'none';
        });
    };

    filterItems('.category .box');   // Filter adventure items
    filterItems('.packages .box');   // Filter package items
});

// Adjust Header Style on Scroll
const toggleHeaderStyle = () => {
    header.classList.toggle('active', window.scrollY > 0);
};

// Event Listeners for Scroll and Page Load
window.addEventListener('scroll', toggleHeaderStyle);
window.addEventListener('load', toggleHeaderStyle);
