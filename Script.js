var cartas = ['♥', '♣', '♦', '♠'];
var numeros = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
var cartasUsadas = {
    player1: [],
    player2: [],
    player3: [],
    player4: []
};

var penitencias = {};

// Generar penitencias para todas las combinaciones de carta-número
for (var i = 0; i < cartas.length; i++) {
    for (var j = 0; j < numeros.length; j++) {
        var combinacion = cartas[i] + numeros[j];
        penitencias[combinacion] = generarPenitencia();
    }
}

function generarPenitencia() {
    // Aquí puedes personalizar la generación de penitencias
    var penitenciasPosibles = [
        'Bebe un tequila',
        'Baila una salsa',
        'Canta una canción',
        'Imita a alguien',
        'Dibuja un corazón en tu mano',
        'Habla con acento extranjero durante 2 minutos',
        'Cuenta un chiste malo',
        'Mueve como un robot durante 1 minuto',
        // Agrega más penitencias aquí
    ];

    return penitenciasPosibles[Math.floor(Math.random() * penitenciasPosibles.length)];
}

function mostrarCarta(player) {
    var mostrar = document.getElementById("mostrar-" + player);

    if (cartasUsadas[player].length === cartas.length * numeros.length) {
        mostrar.innerHTML = '¡Se han agotado todas las combinaciones de cartas y penitencias para el jugador ' + player + '!';
    } else {
        var carta, numero, combinacion, penitencia;

        do {
            carta = cartas[Math.floor(Math.random() * cartas.length)];
            numero = numeros[Math.floor(Math.random() * numeros.length)];
            combinacion = carta + numero;
        } while (cartasUsadas[player].includes(combinacion));

        cartasUsadas[player].push(combinacion);
        penitencia = penitencias[combinacion];
        var mCarta = `${carta}   ${numero}`;
        mostrar.innerHTML = 'Jugador ' + player + '<br>' + mCarta + "<br>" +penitencia;
    }
}
