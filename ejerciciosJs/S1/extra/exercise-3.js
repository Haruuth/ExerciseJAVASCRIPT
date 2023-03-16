const movies = [
    {
        name: "Your Name",
        durationInMinutes: 130
    }, {
        name: "Pesadilla antes de navidad",
        durationInMinutes: 225
    }, {
        name: "Origen",
        durationInMinutes: 165
    }, {
        name: "El señor de los anillos",
        durationInMinutes: 967
    }, {
        name: "Solo en casa",
        durationInMinutes: 214
    }, {
        name: "El jardin de las palabras",
        durationInMinutes: 40
    }];

const pelisPeques = [];
const pelisMedianas = [];
const pelisGrandes = [];

for (let i = 0; i < movies.length; i++) {
    //     if (movies[i].durationInMinutes < 100) pelisPeques.push(movies[i]);
    // else if (movies[i].durationInMinutes >= 200) pelisGrandes.push(movies[i]); 
    // else pelisMedianas.push(movies[i])
    //    
    
    
    movies[i].durationInMinutes < 100 ?  pelisPeques.push(movies[i]) : movies[i].durationInMinutes >= 200 ? pelisGrandes.push(movies[i]):
    
    console.log("Las pelis pequeñas", pelisPeques);
    console.log("Las pelis medianas", pelisMedianas);
    console.log("Las pelis grandes", pelisGrandes);
}