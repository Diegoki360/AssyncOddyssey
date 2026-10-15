import { obtenerArmas } from "./api.js";
import { mostrarArmas } from "./render.js";
import { obtenerZonas, filtrarPorZona } from "./logic.js";
import "./style.css";

async function iniciar() {

    const contenedor = document.querySelector("#contenedor");
    const selectorZona = document.querySelector("#zona");
    const botonFiltrar = document.querySelector("#filtrar");

    contenedor.textContent = "Cargando armas...";

    try {
        const armas = await obtenerArmas("botw");

        mostrarArmas(armas);

        // Obtenemos las zonas disponibles
        const zonas = obtenerZonas(armas);

        // Creamos una opción para cada zona
        zonas.forEach(zona => {
            const opcion = document.createElement("option");
            opcion.value = zona;
            opcion.textContent = zona;
            selectorZona.append(opcion);
        });

        // Aplicamos el filtro al pulsar el botón
        botonFiltrar.addEventListener("click", () => {
            const zonaSeleccionada = selectorZona.value;

            const armasFiltradas = filtrarPorZona(
                armas,
                zonaSeleccionada
            );

            mostrarArmas(armasFiltradas);
        });

    } catch (error) {
        contenedor.textContent = "Error al cargar las armas";
        console.error(error);
    }
}

iniciar();
