//primero accedemos al body
//hacemos un bucle para encontrar las clases a borrar
//seleccionamos las clases correspondientes
//y las eliminamos

let mybody$$ = document.querySelectorAll(".fn-remove-me");

for (let index = 0; index < mybody$$.length; index++) {
    mybody$$[index].remove();
    console.log(mybody$$)
}

    
