const alumnos = [
    {
        name: 'Pepe Viruela',
        T1: false,
        T2: false,
        T3: true
    }, {
        name: 'Lucia Aranda',
        T1: true,
        T2: false,
        T3: true
    }, {
        name: 'Abel Cabeza',
        T1: false,
        T2: true,
        T3: true
    }, {
        name: 'Alfredo Blanco',
        T1: false,
        T2: false,
        T3: false
    }, {
        name: 'Raquel Benito',
        T1: true,
        T2: true,
        T3: true
    }
];





for (const estudiante of alumnos) { estudiante.T1 == true && estudiante.T2 == true ||  estudiante.T2 == true && estudiante.T3 == true || estudiante.T1 == true && estudiante.T3 == true  
   ? console.log("Este estudiante ha aprobado", estudiante.name)
   : console.log("Este estudiante ha suspendido", estudiante.name)
                                    
                                       
    
}









// for (let i = 0; i < alumnos.length; i++) {
//     if (alumnos[i].T1 == true && alumnos[i].T2 == true ||
//         alumnos[i].T2 == true && alumnos[i].T3 == true ||
//         alumnos[i].T1 == true && alumnos[i].T3 == true ) {
//             alumnos[i].isApproves = true;
//         }else {
//             alumnos[i].isApproves = false;
//         }
//         console.log(alumnos[i])

// }


