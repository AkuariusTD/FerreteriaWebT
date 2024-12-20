document.addEventListener('DOMContentLoaded', init);
function init() {

    /** sliderdown Menu */
    const btnUsuarios  = document.querySelector("#btn-usuarios");
    const btnProductos = document.querySelector("#btn-productos");
    const btnCategorias  = document.querySelector("#btn-categorias");
    const btnReportes = document.querySelector("#btn-reportes"); // Agregado

    btnUsuarios.addEventListener("click", function(e) {
        e.preventDefault();
        showList("usuarios");
    });
    btnProductos.addEventListener("click", function(e) {
        e.preventDefault();
        showList("productos");
    });
    btnCategorias.addEventListener("click", function(e) {
        e.preventDefault();
        showList("categorias");
    });
    btnReportes.addEventListener("click", function(e) { // Agregado
        e.preventDefault();
        showList("reportes"); // Agregado
    }); // Agregado

    function showList(idLista) {
        document.querySelector(`#sub-${idLista}`).classList.toggle("show");
        document.querySelector(`#${idLista}Arrow`).classList.toggle("rotate");
    }

    /** Validamos que el archivo de imagen no sea muy pesado  */
    const inputFile = document.querySelector("#input-file");
    inputFile.addEventListener("change", function(e) {
        const MAXIMO_SIZE = 1500000; // 1MB = 1 millón de bytes

        if (e.target.files.length <= 0) return;

        // Validamos el primer archivo únicamente
        const archivo = e.target.files[0];
        if (archivo.size > MAXIMO_SIZE) {
            const tamanioEnMb = MAXIMO_SIZE / 1000000;
            alert(`El tamaño máximo es ${tamanioEnMb} MB`);
            // Limpiar
            inputFile.value = "";
        }
    });
}