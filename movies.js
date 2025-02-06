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

  



