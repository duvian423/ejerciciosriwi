
const valor = localStorage.getItem("estudiante");
estudiante = JSON.parse(valor);
    
console.log(estudiante);

function elegirCasa(){
    let cualidad = document.getElementById('cualidad').value;
    let linaje = document.getElementById('linaje').value;

    if (cualidad == 'valor'){
        estudiante.casa = 'griffindor';
        estudiante.cualidades = ['valor','fuerza','audacia']
    }else if (cualidad == 'justicia'){
        estudiante.casa = 'hufflepuff';
        estudiante.cualidades = ['justicia','lealtad','paciencia'];
    }else if(cualidad == 'creatividad'){
        estudiante.casa = 'ravenclaw';
        estudiante.cualidades = ['mestizo','muggle','sangre pura'];
    }else if(cualidad == 'ambicion'){
        estudiante.casa = 'slytherin';
        estudiante.cualidades = ['ambicion','determinacion','astucia'];
    }else (
        console.log('esta cualidad no corresponde a las opcionales')
    )
    estudiante.linaje = linaje;

    console.log(estudiante);
    localStorage.setItem('estudiante', JSON.stringify(estudiante));

    console.log(estudiante);
}


