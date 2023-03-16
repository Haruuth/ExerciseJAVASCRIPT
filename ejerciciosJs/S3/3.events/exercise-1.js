let button$$ = document.createElement('button');
button$$.setAttribute ("id", "btnToclick");

document.body.appendChild(button$$);

button$$.addEventListener ("click", clickkk)
function clickkk(event){
    console.log (event)
}

