const users = [{id: 1, name: 'Abel'}, {id:2, name: 'Julia'},{id:3, name: 'Pedro'}, {id:4, name: 'Amanda'}];

const nombreUsers = users.map((personas) =>{
    return personas.name.startsWith('A') ? {
        name: "Anacleto"
    }:{
        ...personas
    }
})

console.log(nombreUsers);