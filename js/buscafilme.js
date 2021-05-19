async function buscar() {
    let input = document.getElementById("movie").value;
    let containerfluid = document.getElementById("containerp");
    containerfluid.style.height = "50px";
    let url = "http://www.omdbapi.com/?i=tt3896198&apikey=e8537246";

    try {
        const result = await axios.get(url + "&t=" + input)
        if (result.data.Error) {
            let valor = "Filme não disponível"
            document.getElementById('error').innerText = valor}
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
        }
        console.log(result)

    } catch (error) {
        console.log(error.message)
    }


    // .then(function (response) {
    //     
    // })

}















// var data;
// function getanswer(q){
//     $.get("http://www.omdbapi.com/?s="+q+"&apikey=e8537246",function(){
// var rawstring = JSON.stringfy(rawdata);
// data = JSON.parse(rawstring)
// var title = data.Search[0].Title;
// var year = data.Search[0].Year;
// var imdburl ="https://www.imdb.com/title/"+data.Search[0].imdbID+"/";
// var posterurl = data.Search[0].Poster;
// document.getElementById('movie').innerHTML="<h1>"+title+"<h1><br><img src"+posterurl+"/><br><p>Year Released:"+year+"</p><br><p>IMDb page: <a href="+imdburl+"target='_blank'>"+imdburl+"</a></p>";
// } )
// }