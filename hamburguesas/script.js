function colorpag(){
    let color = document.getElementById('color').value;
    if(color == 'oscuro'){
        document.getElementById('body').classList.add('theme-darck');
        document.getElementById('body').classList.remove('theme-light');

    }else if (color == 'blanco'){
        document.getElementById('body').classList.remove('theme-darck');
        document.getElementById('body').classList.add('theme-light');
    }
}
function idiomapag(){
    let idioma = document.getElementById('idioma').value;
    if(idioma == 'ingles'){
        document.getElementById('burger1').innerText ='1 crispy BBQ sandwich (1 breaded chicken fillet)';
        document.getElementById('burger2').innerText ='1 Kentucky hamburger / sandwich (1 breaded chicken breast fillet, pickles...)';
        document.getElementById('burger3').innerText ='1 BBQ crunch sandwich (1 breaded chicken fillet) + 1 small potato + pet soda...';
        document.getElementById('burger4').innerText ='1 Kentucky Colonel burger/sandwich (1 chicken fillet, breaded chicken breast, salad...)';
        document.getElementById('burger5').innerText ='1 Kentucky hamburger / sandwich (1 breaded chicken breast fillet, pickles...)';
        document.getElementById('burger6').innerText ='1 Kentucky Colonel burger / sandwich (1 breaded chicken breast fillet, salad...)';
        document.getElementById('burger7').innerText ='1 crispy BBQ sandwich (1 extra large breast fillet, triple breaded, crispy onion...)';
        document.getElementById('burger8').innerText ='1 crispy BBQ sandwich (1 extra large breast fillet, triple breaded, crispy onion...)';
        document.getElementById('boton1').innerText = 'buy';
        document.getElementById('boton2').innerText = 'buy';
        document.getElementById('boton3').innerText = 'buy';
        document.getElementById('boton4').innerText = 'buy';
        document.getElementById('boton5').innerText = 'buy';
        document.getElementById('boton6').innerText = 'buy';
        document.getElementById('boton7').innerText = 'buy';
        document.getElementById('boton8').innerText = 'buy';
    }else if(idioma == 'español'){
        document.getElementById('burger1').innerText ='1 sandwich BBQ crunch (1 filete de pollo apanado)';
        document.getElementById('burger2').innerText ='1 Kentucky hamburguesa / sandwich (1 filete de pechuga de pollo apanado ,pepinillos...)';
        document.getElementById('burger3').innerText ='1 sandwich BBQ crunch(1 filete de pollo apanado)+ 1 papa pequeña + gaseosa pet...';
        document.getElementById('burger4').innerText ='1 Kentucky coronel hamburguesa / sandwich (1 filete de pollo de pechuga de pollo apanado, ensalada...)';
        document.getElementById('burger5').innerText ='1 Kentucky hamburguesa / sandwich (1 filete de pechuga de pollo apanado, pepinillos...)';
        document.getElementById('burger6').innerText ='1 Kentucky coronel hamburguesa / sandwich (1 filete de pechuga de pollo apanado, ensalada...)';
        document.getElementById('burger7').innerText ='1 sandwich crispy BBQ (1 filete de pechuga extra grande, triple empanizado, cebolla crisp...)';
        document.getElementById('burger8').innerText ='1 sandwich crispy BBQ (1 filete de pechuga extra grande, triple empanizado, cebolla crisp...)';
        document.getElementById('boton1').innerText = 'comprar';
        document.getElementById('boton2').innerText = 'comprar';
        document.getElementById('boton3').innerText = 'comprar';
        document.getElementById('boton4').innerText = 'comprar';
        document.getElementById('boton5').innerText = 'comprar';
        document.getElementById('boton6').innerText = 'comprar';
        document.getElementById('boton7').innerText = 'comprar';
        document.getElementById('boton8').innerText = 'comprar';
    }
}