var persona = {
    name: 'Franco',
    apellido: 'Etcheverry',
    edad: 27,
    hobbies: ['Jugar al Basquet', 'Comer'],
    trabaja: true,
    saludar: function () {
        return 'Hola, como andan?';
    }
}

persona.name
persona.apellido
persona.hobbies
persona.saludar()

persona['name']
persona['apellido']
persona['hobbies']
persona['saludar']()

function mostrarCiertaPropiedad(prop) {
    // return persona.prop; MALLLL
    // return persona['prop']; MALLLL
    return persona[prop]; 
    // sin comillas
}
   
mostrarCiertaPropiedad('edad') -->  return persona['edad'];
mostrarCiertaPropiedad('trabaja') --> return persona['trabaja'];