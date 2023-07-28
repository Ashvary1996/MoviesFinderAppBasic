
function displaySearched(data) {
    document.getElementById("container").innerHTML = null;
    data.map(element => {
        let img = document.createElement("img");
        img.src = element.Poster;

        let title = document.createElement("h2")
        title.innerText = "Title : " + element.Title;

        let year = document.createElement("p")
        year.innerText = "Year : " + element.Year;

        let type = document.createElement("p")
        type.innerText = "Type : " + element.Type;



        let div = document.createElement("div");
        div.setAttribute("class", "box")
        div.append(img, title, year, type);


        document.getElementById("container").append(div);

        // console.log(element.Title);


    });
}


async function getMovies() {
    try {
        let query = document.getElementById("inputM").value;
        let url = `https://www.omdbapi.com/?apikey=96efd45f&s=${query}`;
        let fetched = await fetch(url);
        let data = await fetched.json();
        data = data.Search;
        displaySearched(data);
        document.getElementById("inputM").value = null;
    } catch (error) {
        console.log(error, "Error in Fetching");
    }


}
//...........................................................................//

function display(data) {

    data.map(function (el) {

        let img = document.createElement("img");
        img.src = `https://image.tmdb.org/t/p/original/${el.poster_path}`;

        let title = document.createElement("h2")
        title.innerText = el.title;

        let releaseDate = document.createElement("p")
        releaseDate.innerText = "Release Date :" + el.release_date;

        let vote = document.createElement("p")
        vote.innerText = "Rating :" + el.vote_average;

        let overview = document.createElement("p")
        overview.innerText = el.overview;

        let div = document.createElement("div");
        div.setAttribute("class", "allbox")
        div.append(img, title, releaseDate, vote, vote, overview);


        document.getElementById("container").append(div);

    });

}

async function getData() {
    try {
        // https://api.themoviedb.org/3/movie/550?api_key=dda8fa67acc4cf4afd4d95aa3e706cca
        // let url = "https://fakestoreapi.com/products";
        let url = "https://api.themoviedb.org/3/movie/popular?api_key=dda8fa67acc4cf4afd4d95aa3e706cca&language=en-IN&page=1";
        let res = await fetch(url);
        let data = await res.json();
        // console.log(data);
        display(data.results);
    } catch (error) {
        console.log("error here", error)
    }
}
getData();

//add page 2 = let url = "https://api.themoviedb.org/3/movie/popular?api_key=dda8fa67acc4cf4afd4d95aa3e706cca&language=en-US&page=2";
var input = document.getElementById("inputM");
input.addEventListener("keypress", enter);

function enter(event, data) {
    if (event.key === "Enter") {
        getMovies();
    }
}
