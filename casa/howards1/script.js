


let estudiante = {
    nombre :'',
    edad : '',
    familia : '',
    linaje : '',
    casa : '',
    animal : '',
    cualidades : ''
}

let clases = {
    transformaciones : 'Profesor kevin Slughorn',
    herbologia : 'Profesor Maria Umbridge',
    pociones : 'Profesor Liliana McGonagall',
    encantamientos : 'Profesora Jackie',
    defensaContraLasArtesOscuras : 'Profesor Robinson Snape',
    animalesMagicos : 'Profesor David Filch',
    historiasDeMagias : 'Profesor Ronald Sprout'
}
let sombrero = {
    griffindor : {
        cualidades: ['valor','fuerza','audacia'],
        linaje : ['mestizo','muggle','sangre pura']
    },
    hufflepuff : {
        cualidades : ['justicia','lealtad','paciencia'],
        linaje: ['mestizo','muggle'] 
    },
    ravenclaw: {
        cualidades: ['creatividad','erudicion','inteligencia'],
        linaje: ['mestizo','muggle','sangre pura']
    },
    slytherin: {
        cualidades: ['ambicion','determinacion','astucia'],
        linaje: 'sangre pura'
    },   
}

function seleccionar(){
        
    let nom = document.getElementById('nombre').value;
    let ed = document.getElementById('edad').value;
    let fami = document.getElementById('familia').value;
    //let lin = document.getElementById('linaje').value;

    estudiante.nombre = nom;
    estudiante.edad = ed;
    estudiante.familia = fami;
    //estudiante.linaje = lin;
    
    localStorage.setItem("estudiante", JSON.stringify(estudiante));
        
        console.log(estudiante);
        
}

/*let cualidad = prompt('escoje una de las siguientes cualidades: \n valor \n justicia \n creatividad \n ambicion');
        
        */