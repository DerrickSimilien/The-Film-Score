// https://www.omdbapi.com/?apikey=b89bd989&s=fast
const element = document.querySelector(".Filter")
async function Searchmovie() {
    const MovieTitle = document.querySelector(".BrowseMovieInput").value 
    const data = await fetch(`https://www.omdbapi.com/?apikey=b89bd989&s=${MovieTitle || ""}`)
    const moviedata = await data.json() 
    const results = moviedata.Search
    element.innerHTML = results.map((movies) => getMovies(movies)) 
    console.log(results)
}


function getMovies(movies) {
    return `
    <div >
                <div >
                
                <img  src="${movies.Poster}" alt="">
                
                <h4 class="MovieTitle"> ${movies.Title} </h4>
                
                <h5 class="MovieTitle">Year: <span>${movies.Year} </span></h5>
                
                <h5 class="MovieTitle">Type: <span>${movies.Type} </span></h5>
                
                </div>
                
                </div>
    `

}

document.getElementById("searchButton").addEventListener("click", function () {
    let filmRoll = document.getElementById("filmRoll");
    let movieTitle = document.getElementById("movieTitle");
    let movieYear = document.getElementById("movieYear");
    let movieType = document.getElementById("movieType");

    
    let movieFound = true; 

    if (movieFound) {
        filmRoll.classList.remove("hidden");
        movieTitle.classList.remove("hidden");
        movieYear.classList.remove("hidden");
        movieType.classList.remove("hidden");
    }
});

// document.getElementById("searchButton").addEventListener("click", function () {
//     let movieElements = document.querySelectorAll(".MovieTitle"); // 

//     movieElements.forEach(element => {
//         element.style.display = "block"; // 
//     });
// });


document.querySelector('#searchButton').addEventListener('click', function() {
    const searchQuery = document.querySelector('#searchInput').value.trim(); // The search query input
    const results = document.querySelector('.results'); // Assuming you display your movie results here
    
    // Get the movie info elements
    const movieTitle = document.querySelector('.MovieTitle:nth-of-type(1)');
    const movieYear = document.querySelector('.MovieTitle:nth-of-type(2)');
    const movieType = document.querySelector('.MovieTitle:nth-of-type(3)');
  
    // Clear previous content
    movieTitle.classList.add('hidden');
    movieYear.classList.add('hidden');
    movieType.classList.add('hidden');
    
    if (searchQuery) {
      // Placeholder: Simulate fetching movie details (replace this with your actual logic)
      let movie = {
        title: "Sample Movie",  // Example data
        year: "2025",           // Example data
        type: "Action"          // Example data
      };
  
      if (movie) {
        // Update the content dynamically
        document.getElementById('movieTitle').textContent = movie.title;
        document.getElementById('movieYear').textContent = movie.year;
        document.getElementById('movieType').textContent = movie.type;
  
        // Show the movie info
        movieTitle.classList.remove('hidden');
        movieYear.classList.remove('hidden');
        movieType.classList.remove('hidden');
      } else {
        // Handle no results found (if needed)
        alert("No movie found for your search.");
      }
    } else {
      // If no search query is entered, do nothing or show a default message
      alert("Please enter a search query.");
    }
  });
  



