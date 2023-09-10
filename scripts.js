import {authors, books, genres, BOOKS_PER_PAGE} from './data.js'

 const matches = books
 let page = 1 ;
 const range = [0, BOOKS_PER_PAGE]

 if (!books && !Array.isArray(books)) {
  throw new Error('Source required') 
 }
if (!range && range.length < 2) {
  throw new Error('Range must be an array with two numbers')
}

// A list of everything that needed to be fetched from the html document 
const dataHeaderSearch = document.querySelector('[data-header-search]')
const dataHeaderOverlay = document.querySelector('[data-search-overlay]')
const dataSearchCancel = document.querySelector('[data-search-cancel]')
const dataHeaderSettings = document.querySelector('[data-header-settings]')
const dataSettingsOverlay = document.querySelector('[data-settings-overlay]')
const dataSettingsCancel = document.querySelector('[data-settings-cancel]')
const themeChoice = document.querySelector('[data-settings-theme]')
const settingsForm = document.getElementById('settings')
const genreSearch = document.querySelector('[data-search-genres]') 
const authorSearch = document.querySelector('[data-search-authors]')
const dataListButton = document.querySelector('[data-list-button]')
const dataListItems = document.querySelector('[data-list-items]')
const dataListActive = document.querySelector('[data-list-active]')
const dataListCancel = document.querySelector('[data-list-close]')
const dataSearchForm = document.querySelector('[data-search-form]');
const dataListImage = document.querySelector('[data-list-image]')
const dataListTitle = document.querySelector('[data-list-title]')
const dataListDescription = document.querySelector('[data-list-description]')
const dataListSubtitle = document.querySelector('[data-list-subtitle]')
const dataListBlur = document.querySelector('[data-list-blur]')

// Opens the search overlay to allow a user to search books by title, genre or author.//
dataHeaderSearch.addEventListener('click', () =>
dataHeaderOverlay.show()
)

// Closes the search overlay when cancel is clicked. //
dataSearchCancel.addEventListener('click', () =>
dataHeaderOverlay.close(),
)

// Opens the settings overlay to allow user to choose light or dark theme. //
dataHeaderSettings.addEventListener('click', () =>
dataSettingsOverlay.show()
)

// Closes the settings overlay. //
dataSettingsCancel.addEventListener('click', () =>
dataSettingsOverlay.close()
)

/* Changes the theme of the website based on whether day or night is selected.
 Day is a light coloured screen and night is a dark coloured screen. */
 const style = {
 day : {
    dark: '10, 10, 20',
    light: '255, 255, 255',
},
 night : {
    dark: '255, 255, 255',
    light: '10, 10, 20',
}
 }

settingsForm.addEventListener('submit', (event) => {
event.preventDefault();
const theme = themeChoice.value;
document.documentElement.style.setProperty('--color-dark', style[themeChoice.value].dark),
document.documentElement.style.setProperty('--color-light', style[themeChoice.value].light)
document.querySelector('[data-settings-overlay]').close()
}
)
  const darkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches

  const chooseTheme = darkTheme ? 'night' : 'day' 

  document.documentElement.style.setProperty('--color-dark', style[chooseTheme].dark)
  document.documentElement.style.setProperty('--color-light', style[chooseTheme].light)

  // Allows the user to select the genre they want from a drop down list of preselected genres. //
  const genre = Object.values(genres) 
  let genreElement = document.createElement("option")
  genreElement.innerHTML = 'All Genres'
  genreElement.value = 'any'
  genreSearch.appendChild(genreElement)
  for (let i = 0; i < genre.length; i++) {
    let options = genre[i]
    let genreElement = document.createElement("option")
    genreElement.innerHTML = options
    genreElement.value = options
    genreSearch.appendChild(genreElement)
  }

  // Allows the user to select the author they want from a drop down list of all available authors. //
  const authorOption = Object.values(authors) 
  let element = document.createElement("option")
    element.innerHTML = 'All Authors'
    element.value = 'any'
    authorSearch.appendChild(element)
  for (let i = 0; i < authorOption.length; i++) {
    let options = authorOption[i]
    let element = document.createElement("option")
    element.innerHTML = options
    element.value = options
    authorSearch.appendChild(element)
  }

//  Adding "Show more" text onto the button that updates the remaining number every time it is clicked
const remainingBooks =  books.length - (page * BOOKS_PER_PAGE)
console.log(remainingBooks)
dataListButton.innerHTML = /* html */ `
    <span>Show more</span>
    <span class="list__remaining"> (${remainingBooks})</span>
      `

//  Creates the first page of the html which displays the preview of the first 36 books
const fragment = document.createDocumentFragment()
let startIndex = range[0]
let endIndex = startIndex + BOOKS_PER_PAGE
let bookList = books
let x = 0; // Define the initial start index
let y = 36; // Define the initial end index
let increment = 36; // Define how many more books to load each time

function displayBooksList(DomAppend, bookList, startIndex, endIndex) {
    const fragment = document.createDocumentFragment();
    
    // Loop through the bookList within the specified range
    for (let i = startIndex; i < endIndex && i < bookList.length; i++) {
        const { author, image, title, id } = bookList[i];
        let element = document.createElement('button');
        element.classList = 'preview';
        element.setAttribute('data-preview', id);
        element.innerHTML =
            `<img
                class="preview__image"
                src="${image}"
            />
            <div class="preview__info">
                <h3 class="preview__title">${title}</h3>
                <div class="preview__author">${authors[author]}</div>
            </div>`;
        
        fragment.appendChild(element);
    }
    
    DomAppend.appendChild(fragment);
}

function loadMoreBooks() {
    // Update the start and end indices for the next batch of books
    x = y; // Move the start index to the previous end index
    y += increment; // Increase the end index by the increment value
    
    // Display the next batch of books
    displayBooksList(dataListItems, bookList, x, y);
    
    // Check if there are more books to load
    if (y >= bookList.length) {
        // Hide the "Load More" button if all books are loaded
        loadMoreButton.style.display = 'none';
    }
}

// Initial display of books
displayBooksList(dataListItems, bookList, x, y);

// Attach a click event handler to the "Load More" button
dataListButton.addEventListener('click', loadMoreBooks);

// Closes the dataListActive overlay when you click on close
dataListCancel.addEventListener('click', () =>
dataListActive.close())

//Displays a more in depth view of a book when you click on it from the preview
const eachListItems = (event) => {

    let pathArray = Array.from(event.path || event.composedPath())
    let active;

    for (let i = 0; i <= pathArray.length; i++) {
      if (active) break;
      const previewId = pathArray[i].dataset.preview
  
      for (const singleBook of books) {
          if (singleBook.id === previewId) active = singleBook
      } 
  }
  
  if (!active) return  


     if (!active) return
     dataListActive.open = true
     dataListImage.src = active.image
     dataListBlur.src = active.image
     dataListTitle.innerText = active.title
    
     dataListSubtitle.innerText = `${authors[active.author]} (${new Date(active.published).getFullYear()})`
     dataListDescription.innerText = active.description

     const dataListCancel = document.querySelector('[data-list-close]')
     dataListCancel.addEventListener('click', () =>
     dataListActive.open = false)
 } 
 const summaryList = document.querySelectorAll('.preview')
 summaryList.forEach(b => b.addEventListener('click', eachListItems))

 // Using the search form, this will push the books to the preview that match the search criteria 
let filteredBooks = []
dataSearchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const title = event.target.querySelector('[data-search-title]').value.toLowerCase();
    const author = event.target.querySelector('[data-search-authors]').value.toLowerCase();
    const genre = event.target.querySelector('[data-search-genres]').value.toLowerCase();

    const filters = {
        title,
        author,
        genre,
    };
    const formData = new FormData(event.target);
   // const filters = Object.fromEntries(formData);
   
    let results = filterBooks(books, filters);

    // Clear the existing book list
    dataListItems.innerHTML = '';
    
    filteredBooks = filterBooks(books, filters);

    // Display the search results
     displayBooksList2(dataListItems, results);
     updateShowMoreButton()
 });

 function filterBooks(books, filters) {
  const filteredBooks = books.filter((book) => {
      const titleMatch = filters.title.trim() === '' || book.title.toLowerCase().includes(filters.title.toLowerCase());
      const authorMatch = filters.author == 'any' || authors[book.author].toLowerCase() === filters.author.toLowerCase();
      const genreMatch = filters.genre === 'any' ||  book.genres.includes(Object.keys(genres).find(key => genres[key]))

  return titleMatch && authorMatch && genreMatch;
  
});


return filteredBooks

}

function displayBooksList2(dataListItems, books) {
  const bookFragment = document.createDocumentFragment()
      for (const book of books) {
    
        const elementNew = document.createElement('button');
        elementNew.classList = 'book';
        elementNew.setAttribute('data-preview', book.id);
        elementNew.innerHTML = `
            <img class="preview__image" src="${book.image}" />
            <div class="preview__info">
                <h3 class="preview__title">${book.title}</h3>
                <div class="preview__author">${authors[book.author]}</div>
            </div>`;

        bookFragment.appendChild(elementNew)
  
     } 
     dataListItems.appendChild(bookFragment)

    } 
    function updateShowMoreButton() {
      const remainingBooks = filteredBooks.length - (page * BOOKS_PER_PAGE);
      dataListButton.innerHTML = `
          <span>Show more</span>
          <span class="list__remaining"> (${remainingBooks})</span>`;
  }
  
