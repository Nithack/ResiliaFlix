async function buscar() {
    let input = document.getElementById("movie").value;
    let containerfluid = document.getElementById("containerp");
    containerfluid.style.height = "50px";
    let url = "http://www.omdbapi.com/?i=tt3896198&apikey=e8537246";

    try {
        const result = await axios.get(url + "&t=" + input)
        if (result.data.Error) console.log('Filme não encontrado');

        if (result.data.Error) {
            let errorFilm = document.getElementById('error');
            errorFilm.style.display = 'initial';
        }

        if (result.data.Title) {
            let image = document.getElementById("posterA");
            image.setAttribute("src", result.data.Poster);
            image.style.border = "none";
            let title = document.getElementById("title-p");
            title.textContent = result.data.Title;
            let year = document.getElementById("year-p");
            year.textContent = result.data.Year;
            let actor = document.getElementById("actor-p");
            actor.textContent = result.data.Actors;
            let plot = document.getElementById("infos-p");
            plot.textContent = result.data.Plot;
            document.getElementById('container-erro').style.margin="0px";
        }
        console.log(result)
    } catch (error) {
        console.log(error.message)
    }
}