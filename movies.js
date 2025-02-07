// https://www.omdbapi.com/?apikey=b89bd989&s=fast
const element = document.querySelector(".Filter");
const loadingState = document.querySelector(".LoadingState"); // Get the loading element

async function Searchmovie(Love) {
    const MovieTitle = document.querySelector(".BrowseMovieInput").value;

    // Show loading state
    loadingState.classList.add("hidden"); // Make sure it's visible before fetching

    try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=b89bd989&s=${MovieTitle || ""}`);
        const moviedata = await response.json();
        if(Love === "NEW_TO_OLD") {
            moviedata.Search.sort((a, b) => b.Year - a.Year)
        }
        if(Love === "OLD_TO_NEW") {
            moviedata.Search.sort((a, b) => a.Year - b.Year)
        }
        

        // Add a delay before displaying the results
        setTimeout(() => {
            if (moviedata.Search) {
                element.innerHTML = moviedata.Search.map((movies) => getMovies(movies)).join("");
            } else {
                element.innerHTML = "<p>No movies found!</p>";
            }

            // Hide loading state after delay
            loadingState.classList.remove("hidden");
        }, 2000); // Delay of 2 seconds (2000ms)
    } catch (error) {
        element.innerHTML = "<p>Error fetching data!</p>";
        loadingState.classList.add("hidden"); // Ensure loading state is hidden in case of error
    }
}

function filterMovies(event) {
    Searchmovie(event.target.value)  
}

function getMovies(movies) {
    return `
        <div>
            <div>
                <img src="${movies.Poster}" alt="">
                <h4 class="MovieTitle"> ${movies.Title} </h4>
                <h5 class="MovieTitle">Year: <span>${movies.Year} </span></h5>
                <h5 class="MovieTitle">Type: <span>${movies.Type} </span></h5>
            </div>
        </div>
    `;
}

document.querySelector(".SearchButton").addEventListener("click", Searchmovie);



  



