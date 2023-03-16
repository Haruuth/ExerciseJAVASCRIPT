const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple'];
const foodSchedule = [
    {
        name: "Salad",
        isVegan: true
    }, {
        name: "Salmon",
        isVegan: false
    }, {
        name: "Tofu",
        isVegan: true
    }, {
        name: "Burger",
        isVegan: false
    }, {
        name: "Rice", isVegan: true
    }, {
        name: "Pasta",
        isVegan: true
    }]; 

    // for(let i = 0; i < foodSchedule.length; i++){
    //     if(foodSchedule[i].isVegan === false) {
    //         console.log(foodSchedule[i])
    //     }
    // }




// for(let index = 0; index < foodSchedule.length; index++){
//     const food = foodSchedule[index];
//     if(!food.isVegan);{
//     // console.log(food.name)
//     food.name = fruits[index];
//     food.isVegan = true;
//     }
// }


foodSchedule.forEach(
    function(food) {
    if(!food.isVegan) {
        food.name = fruits.shift();
        food.isVegan = true;
    }
});

console.log(foodSchedule)