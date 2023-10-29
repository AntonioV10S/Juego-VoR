// Funcion de Registro
let contador = 0;
let nombresRegistrados = []; // Variable global para almacenar nombres

function agregarNombre() {
    const nombre = document.getElementById("nombre").value;
    if (nombre) {
        contador++;
        const tabla = document.getElementById("tablaNombres");
        const row = tabla.insertRow(-1);
        const idCell = row.insertCell(0);
        const nombreCell = row.insertCell(1);
        idCell.innerHTML = contador;
        nombreCell.innerHTML = nombre;
        document.getElementById("nombre").value = "";
        actualizarTotalRegistros();

        // Agregar el nombre a la variable global
        nombresRegistrados.push(nombre);

        // Guardar los nombres en el almacenamiento local
        guardarDatosEnLocalStorage();
    }
}

function actualizarTotalRegistros() {
    const totalRegistros = document.getElementById("totalRegistros");
    totalRegistros.innerHTML = contador;
}

function guardarDatosEnLocalStorage() {
    localStorage.setItem("nombres", JSON.stringify(nombresRegistrados));
}