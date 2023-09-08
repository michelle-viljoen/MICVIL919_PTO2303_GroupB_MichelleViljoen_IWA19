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

// const day = {
//     dark: '10, 10, 20',
//     light: '255, 255, 255',
// }

// const night = {
//     dark: '255, 255, 255',
//     light: '10, 10, 20',
// }

 
//  const variables = { author, image, title, id } 

// for (let i = variables; i < extracted; i++) {
//   fragment = document.createDocumentFragment()
//   extracted = books.slice(0, 36)
//     const preview = createPreview(
//         author,
//         id,
//         image,
//         title
//     )

//     fragment.appendChild(preview)
// }

// document.querySelector('[data-list-items]').appendChild(fragment)

// genres = document.createDocumentFragment()
// element = document.createElement('option')
// element.value = 'any'
// element = 'All Genres'
// genres.appendChild(element)

// for ([id, name]; Object.entries(genres); i++) {
//     document.createElement('option')
//     element.value = value
//     element.innerText = text
//     genres.appendChild(element)
// }

// data-search-genres.appendChild(genres)

// authors = document.createDocumentFragment()
// element = document.createElement('option')
// element.value = 'any'
// element.innerText = 'All Authors'
// authors.appendChild(element)

// for ([id, name];Object.entries(authors); id++) {
//     document.createElement('option')
//     element.value = value
//     element = text
//     authors.appendChild(element)
// }

// data-search-authors.appendChild(authors)

// const dataListButton = document.querySelector('[data-list-button]')
// const dataSettingsTheme = document.querySelector('[data-settings-theme]')
// dataSettingsTheme.value === window.matchMedia && window.matchMedia('prefers-color-scheme: dark').matches ? 'night' : 'day'
// //v = window.matchMedia && window.matchMedia('prefers-color-scheme: dark').matches ? 'night' | 'day' 

// document.background.style.setProperty('--color-dark', css[v].dark)
// documentElement.style.setProperty('--color-light', css[v].light),

// dataListButton  = `Show more (${books.length} - ${BOOKS_PER_PAGE})`

// dataListButton.disabled = !(matches.length - [page * BOOKS_PER_PAGE] > 0)


// dataListButton.innerHTML = /* html */ `[
//     '<span>Show more</span>',
//     '<span class="list__remaining"> (${matches.length - [page * BOOKS_PER_PAGE] > 0 ? matches.length - [page * BOOKS_PER_PAGE] : 0})</span>',
// ]`

// data-search-cancel.addEventListener('click', () => { data-search-overlay.open === false } )
// data-settings-cancel.addEventListener('click', () => { querySelector('[data-settings-overlay]').open === false } )
// data-settings-form.addEventListener('submit', () => { actions.settings.submit } )
// data-list-close.addEventListener('click', () =>  { data-list-active.open === false } )

// data-list-button.addEventListener('click', () => 
//     document.querySelector('[data-list-items]').appendChild(createPreviewsFragment(matches, page * [BOOKS_PER_PAGE], (page + 1) * [BOOKS_PER_PAGE])),
//     actions.list.updateRemaining(),
//     page = page + 1 
// )
// const dataHeaderSearch = document.querySelector('[data-header-search]')
// dataHeaderSearch.addEventListener('click', () => {
//     document.querySelector('[data-search-overlay]').open === true ;
//     document.querySelector('[data-search-title]').focus();
// })

// data-search-form.addEventListener('click', (filters) =>  {
//     preventDefault()
//     const formData = new FormData(event.target)
//      filters = Object.fromEntries(formData)
//     result = []

//     for (book; booksList; i++) {
//         titleMatch = filters.title.trim() = '' && book.title.toLowerCase().includes[filters.title.toLowerCase()]
//         authorMatch = filters.author = 'any' || book.author === filters.author

//         {
//             genreMatch = filters.genre = 'any'
//             for (genre; book.genres; i++) { if (singleGenre = filters.genre) { genreMatch === true }}}
//         }

//         if (titleMatch && authorMatch && genreMatch) { result.push(book) }
//     })

//     if (display.length < 1 ) 
//     data-list-message.class.add('list__message_show')
//     else data-list-message.class.remove('list__message_show')
    
//     const dataListItems = document.querySelector('[data-list-items]')
//     dataListItems.innerHTML = ''
//     const fragment = document.createDocumentFragment()
//     const extracted = source.slice(range[0], range[1])

//     for ({ author, image, title, id }; extracted; i++) {
//         const { author: authorId, id, image, title } = props

//         element = document.createElement('button')
//         element.classList = 'preview'
//         element.setAttribute('data-preview', id)

//         element.innerHTML = /* html */ `
//             <img
//                 class="preview__image"
//                 src="${image}"
//             />
            
//             <div class="preview__info">
//                 <h3 class="preview__title">${title}</h3>
//                 <div class="preview__author">${authors[authorId]}</div>
//             </div>
//         `

//         fragment.appendChild(element)
//     }
    
//     data-list-items.appendChild(fragments)
//     initial === matches.length - [page * BOOKS_PER_PAGE]
//     remaining === hasRemaining ? initial : 0
//     dataListButton.disabled = initial > 0

//     dataListButton.innerHTML = /* html */ `
//         <span>Show more</span>
//         <span class="list__remaining"> (${remaining})</span>
//     `

//     window.scrollTo({ top: 0, behavior: 'smooth' });
//     data-search-overlay.open === false


// data-settings-overlay.submit; {
//     preventDefault()
//     const formData = new FormData(event.target)
//     const result = Object.fromEntries(formData)
//     document.documentElement.style.setProperty('--color-dark', css[result.theme].dark);
//     document.documentElement.style.setProperty('--color-light', css[result.theme].light);
//     data-settings-overlay.open === false
// }

// data-list-items.addEventListener('click', () => {
//     pathArray = Array.from(event.path || event.composedPath())
//     active;

//     for (node; pathArray; i++) {
//         if (active) break;
//         const previewId = node?.dataset?.preview
    
//         for (const singleBook of books) {
//             if (singleBook.id === id) active = singleBook
// } } 
    
//     if (!active) return
//     data-list-active.open === true
//     data-list-blur + data-list-image === active.image
//     data-list-title === active.title
    
//     data-list-subtitle === '${authors[active.author]} (${Date(active.published).year})'
//     data-list-description === active.description

// } )




/////////////////////////////////////////////////////////////
//                      MY CODE BELOW                     // 
///////////////////////////////////////////////////////////
//
//
// Opens the search overlay to allow a user to search books by title, genre or author.//
//
//
document.querySelector('[data-header-search]').addEventListener('click', () =>
document.querySelector('[data-search-overlay]').show()
)

//
//
// Closes the search overlay when cancel is clicked. //
//
//
document.querySelector('[data-search-cancel]').addEventListener('click', () =>
document.querySelector('[data-search-overlay').close(),
)
//
//
// Opens the settings overlay to allow user to choose light or dark theme. //
//
//
document.querySelector('[data-header-settings]').addEventListener('click', () =>
document.querySelector('[data-settings-overlay]').show()
)
//
//
// Closes the settings overlay. //
//
//
document.querySelector('[data-settings-cancel]').addEventListener('click', () =>
document.querySelector('[data-settings-overlay]').close()
)
//
//
// Changes the theme of the website based on whether day or night is selected. //
// Day is a light coloured screen and night is a dark coloured screen. //
//
//
 const themeChoice = document.querySelector('[data-settings-theme]')
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
const settingsForm = document.getElementById('settings')
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
  //
  //
  // Allows the user to select the genre they want from a drop down list of preselected genres. //
  //
  //
  const genreSearch = document.querySelector('[data-search-genres]') 
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
  //
  //
  // Allows the user to select the author they want from a drop down list of all available authors. //
  //
  //
  const authorSearch = document.querySelector('[data-search-authors]')
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
//
//
//  Adding "Show more" text onto the button that updates the remaining number every time it is clicked
//
//
//
const dataListButton = document.querySelector('[data-list-button]')

const remainingBooks = Math.max(0, books.length - (page * BOOKS_PER_PAGE))
console.log(remainingBooks)
dataListButton.innerHTML = /* html */ `
    <span>Show more</span>
    <span class="list__remaining"> (${remainingBooks})</span>
      `
    
//
//
//  Creates the first div element which shows the first 36 books
//
//
//
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

const dataListItems = document.querySelector('[data-list-items]');

// Initial display of books
displayBooksList(dataListItems, bookList, x, y);

// Attach a click event handler to the "Load More" button
dataListButton.addEventListener('click', loadMoreBooks);




  const dataSearchTitle = document.querySelector('[data-search-title]')

//
//
// Opens the overlay when you click on an individual book from the list of books
//
//
        const dataListActive = document.querySelector('[data-list-active]')
//
//
// Closes the dataListActive overlay when you click on close
//
//
        const dataListCancel = document.querySelector('[data-list-close]')
        dataListCancel.addEventListener('click', () =>
        dataListActive.close())
//
//
//
//
//
    
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

const dataListImage = document.querySelector('[data-list-image]')
const dataListTitle = document.querySelector('[data-list-title]')
const dataListDescription = document.querySelector('[data-list-description]')
const dataListSubtitle = document.querySelector('[data-list-subtitle]')
const dataListBlur = document.querySelector('[data-list-blur]')
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
 //
 //
 //
 //
 //
 //

const dataSearchForm = document.querySelector('[data-search-form]');
//const dataListItems = document.querySelector('[data-list-items]');

dataSearchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const filters = Object.fromEntries(formData);
    const searchResults = filterBooks(books, filters);
    
    // Clear the existing book list
    dataListItems.innerHTML = '';
    
    // Display the search results
    displayBooksList(dataListItems, searchResults);
});

function filterBooks(books, filters) {
    return books.filter((book) => {
        const titleMatch = filters.title.trim() !== '' && book.title.toLowerCase().includes(filters.title.toLowerCase());
        const genreMatch = filters.genre !== 'any' && book.genres.includes(filters.genre);
        const authorMatch = filters.author !== 'any' && book.author.includes(filters.author);
        
        return titleMatch || authorMatch || genreMatch;
    });
}

// function displayBooksList(DomAppend, bookList) {
//     const fragment = document.createDocumentFragment();
    
//     for (const { author, image, title, id } of bookList) {
//         const element = document.createElement('button');
//         element.classList = 'preview';
//         element.setAttribute('data-preview', id);
//         element.innerHTML = `
//             <img class="preview__image" src="${image}" />
//             <div class="preview__info">
//                 <h3 class="preview__title">${title}</h3>
//                 <div class="preview__author">${author}</div>
//             </div>`;
        
//         fragment.appendChild(element);
//     }
    
//     DomAppend.appendChild(fragment);
// }
