var salario = 2500000;
function comidas(){
    
    let comida = document.getElementById('op-comidas').value;
    if(comida == 'mal'){
        salario = salario - 15000;
        document.getElementById('sele-comida').innerHTML = `<img src="https://www.clarin.com/1969/12/31/SJe6U3FNe_360x240__1.jpg" alt=""> <p>Esta comida le callo muy mal ya que estaba lleno</p> <p>a Hildebrando le quedan ${salario} pesos</p>`;
        
    }else if(comida == 'llenito'){
        salario = salario - 23000;
        document.getElementById('sele-comida').innerHTML = `<img src="https://c8.alamy.com/compes/fw3dah/el-hombre-mal-aliento-y-estomago-lleno-fw3dah.jpg" alt=""><p>Hildebrando quedo llenito </p> <p>a Hildebrando le quedan ${salario} pesos</p>`;
        
    }else if(comida == 'hambre'){
    document.getElementById('sele-comida').innerHTML = `<img src="https://www.eluniversal.com.mx/resizer/i43vVvVDPCK55I5a8MSsi6q31p4=/1100x666/cloudfront-us-east-1.images.arcpublishing.com/eluniversal/NQHUSH5QJBGDTECROZHC3GLFSE.jpg" alt=""><p>Hildebrando se va aguntando hambre para poder ahorrar </p> <p>a Hildebrando le quedan ${salario} pesos</p>`;
    }
}
function diametroMaleta(){
    let altodefi = 55;
    let anchoDefi = 40;
    let fondoDefi = 20;
    let altoUsuario = document.getElementById('alto').value; 
    let anchoUsuario = document.getElementById('ancho').value; 
    let fondoUsuario = document.getElementById('fondo').value; 
    if(altodefi >= altoUsuario){
        document.getElementById('alto').classList.add('inputValid');
        document.getElementById('alto').classList.remove('inputInvalid');
        document.getElementById('spanAlto').classList.add('spanVerde');
        document.getElementById('spanAlto').classList.remove('spanRojo');
        document.getElementById('spanAlto').innerText = 'la altura esta bien';
        
        
    }else{
        document.getElementById('alto').classList.add('inputInvalid');
        document.getElementById('alto').classList.remove('inputValid');
        document.getElementById('spanAlto').classList.add('spanRojo');
        document.getElementById('spanAlto').classList.remove('spanVerde');
        document.getElementById('spanAlto').innerText = 'la altura sobrepasa lo permitido';
    }
    if(anchoDefi >= anchoUsuario){
        document.getElementById('ancho').classList.add('inputValid');
        document.getElementById('ancho').classList.remove('inputInvalid');
        document.getElementById('spanAncho').classList.add('spanVerde');
        document.getElementById('spanAncho').classList.remove('spanRojo');
        document.getElementById('spanAncho').innerText = 'El ancho esta bien';
        
        
    }else{
        document.getElementById('ancho').classList.add('inputInvalid');
        document.getElementById('ancho').classList.remove('inputValid');
        document.getElementById('spanAncho').classList.add('spanRojo');
        document.getElementById('spanAncho').classList.remove('spanVerde');
        document.getElementById('spanAncho').innerText = 'El ancho sobrepasa lo permitido';
    }
    if(fondoDefi >= fondoUsuario){
        document.getElementById('fondo').classList.add('inputValid');
        document.getElementById('fondo').classList.remove('inputInvalid');
        document.getElementById('spanFondo').classList.add('spanVerde');
        document.getElementById('spanFondo').classList.remove('spanRojo');
        document.getElementById('spanFondo').innerText = 'El fondo esta bien';
        
        
    }else{
        document.getElementById('fondo').classList.add('inputInvalid');
        document.getElementById('fondo').classList.remove('inputValid');
        document.getElementById('spanFondo').classList.add('spanRojo');
        document.getElementById('spanFondo').classList.remove('spanVerde');
        document.getElementById('spanFondo').innerText = 'El fondo sobrepasa lo permitido';
    }
}
function wifi(){
    let contraseña = '01110010_01101001_01110111_0110100';
    contraseña = contraseña.split('_')
    contraseña.forEach(function(contra){
    let red = String.fromCodePoint(parseInt(contraseña[contra],2))
    console.log(red);
    })
}