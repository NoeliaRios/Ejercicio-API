const movies=[];

//obtener el input de busqueda

const input = document.querySelector('#search');

const title = document.querySelector('.movie-info .title')

input.addEventListener('keypress', function(event){
    //pregunto si la persona presionó enter
    if(event.keycode === 13){
        //guardo el valor que la persona ingreso en el input
        const movieName = input.nodeValue;

        //filtro las peliculas que tengan el titulo igual a lo que tipeamos en el input
        movies.filter(movie => movie.Title ===movieName);
        console.log(moviesFiltered);

        //si tengo al menos una peli filtrada
        if (moviesFiltered.length>0){
            //me quedo con la primer pelicula que encontramos
            const movie = moviesFiltered[0];

            //title.innerText = movie.Title;
            title.innerHTML = 'movie.Title'
        }
    }
});