// Funcion de Registro
let contador = 0;
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
            guardarDatosEnLocalStorage();
        }
}function actualizarTotalRegistros() {
    const totalRegistros = document.getElementById("totalRegistros");
    totalRegistros.innerHTML = contador;
}
function guardarDatosEnLocalStorage() {
    const nombres = [];
        for (let i = 1; i <= contador; i++) {
                const nombre = document.querySelector(`#tablaNombres tr:nth-child(${i + 1}) td:nth-child(2)`).textContent;
                nombres.push(nombre);
        }
    localStorage.setItem("nombres", JSON.stringify(nombres));
}