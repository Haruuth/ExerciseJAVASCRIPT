let impt$$ = document.querySelector('input');

function eject (event){
    console.log(event.target.value)
};

impt$$.addEventListener('focus', eject);