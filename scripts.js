/* =========================================================
   RETO 3 - MANIPULACIÓN DEL DOM CON JQUERY
   ========================================================= */

$(document).ready(function () {

    /* -----------------------------------------------------
       1. SELECCIÓN DE ELEMENTOS
       ----------------------------------------------------- */
    const $parrafos = $("p");
    console.log("Número de párrafos en la página:", $parrafos.length);

    const $parrafosClase = $(".parrafo");
    console.log("Párrafos con clase .parrafo:", $parrafosClase.length);

    const $cajas = $(".caja");
    console.log("Divs con clase .caja:", $cajas.length);

    const $lista = $("#lista-elementos");
    console.log("Lista seleccionada por ID:", $lista.length);

    /* -----------------------------------------------------
       2. MODIFICACIÓN DE CONTENIDO, ESTILOS Y ATRIBUTOS
       ----------------------------------------------------- */

    $("header h1").text("Código Samurái - Reto 3 (jQuery)");

    $("#btnCambiarColor").on("click", function () {
        $(".parrafo").css({
            "color": "#2c3e50",
            "font-weight": "bold",
            "background-color": "#f1f1f1",
            "padding": "8px",
            "border-radius": "4px"
        });
    });

    $("#btnAnadirBorde").on("click", function () {
        $(".caja").css({
            "border": "3px solid #e74c3c",
            "background-color": "#fdecea"
        });
    });

    $("#nombre").attr("placeholder", "Introduce tu nombre completo");

    let ocultos = false;
    $("#btnOcultarParrafos").on("click", function () {
        if (!ocultos) {
            $(".parrafo").slideUp(400);
            $(this).text("Mostrar párrafos");
        } else {
            $(".parrafo").slideDown(400);
            $(this).text("Ocultar párrafos");
        }
        ocultos = !ocultos;
    });

    /* -----------------------------------------------------
       3. ELIMINACIÓN DE ELEMENTOS DEL DOM
       ----------------------------------------------------- */

    $("#btnEliminarElemento").on("click", function () {
        const $ultimo = $("#lista-elementos li").last();
        if ($ultimo.length > 0) {
            $ultimo.fadeOut(300, function () {
                $(this).remove();
            });
        } else {
            alert("No quedan elementos en la lista.");
        }
    });

    let contador = 5;
    $("#btnAnadirElemento").on("click", function () {
        const $nuevo = $("<li>").text("Elemento " + contador);
        $nuevo.hide().appendTo("#lista-elementos").fadeIn(300);
        contador++;
    });

    /* -----------------------------------------------------
       4. INTERACCIÓN CON FORMULARIO
       ----------------------------------------------------- */
    $("#miFormulario").on("submit", function (e) {
        e.preventDefault();
        const nombre = $("#nombre").val().trim();
        const email = $("#email").val().trim();

        if (nombre === "" || email === "") {
            alert("Por favor, rellena todos los campos.");
            return;
        }

        alert("¡Gracias, " + nombre + "! Hemos recibido tu email: " + email);
        $(this)[0].reset();
    });

});
