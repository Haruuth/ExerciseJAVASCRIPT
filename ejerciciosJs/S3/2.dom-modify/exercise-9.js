let div$$ = document.querySelectorAll(".fn-insert-here");


for (let index = 0; index < div$$.length; index++){
        // console.log(div$$[index])
    let p$$ = document.createElement("p");
    p$$.textContent = "Voy dentro!"
    div$$[index].appendChild(p$$)
}

