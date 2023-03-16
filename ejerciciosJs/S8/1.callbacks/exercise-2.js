const userAnwsers = [];

const confirmExample = (description) => {
    return confirm(description)
}

const promptExample = (description) => {
    return prompt(description)
}

const father = (description, callback) => {
    const mensaje = callback(description)
    userAnwsers.push(mensaje)
}

father("hola", confirmExample)
father("soyunpromp", promptExample)
