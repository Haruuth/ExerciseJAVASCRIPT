let inpt$$ = document.querySelector('input');

function eject (event) {console.log(event.target.value)};

inpt$$.addEventListener ('input', eject);