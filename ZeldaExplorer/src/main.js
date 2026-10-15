import { obtenerArmas } from "./api.js";
import { mostrarArmas } from "./render.js";
import "./style.css";

import {
    obtenerZonas,
    filtrarPorZona,
    obtenerTipo,
    filtrarPorTipo,
    contarArmas
} from "./logic.js";

async function iniciar() {

    const contenedor = document.querySelector("#contenedor");
    const selectorZona = document.querySelector("#zona");
    const botonFiltrar = document.querySelector("#filtrar");
    const selectorTipo = document.querySelector("#tipo");
    const contador = document.querySelector("#contador");

    contenedor.replaceChildren();

    const cargando = document.createElement("p");
    cargando.classList.add("cargando");
    cargando.textContent = "Conectando con la tableta Sheikah...";

    contenedor.append(cargando);

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

        const tipos = [...new Set(armas.map(arma => obtenerTipo(arma)))];

        tipos.forEach(tipo => {
            const opcion = document.createElement("option");
            opcion.value = tipo;
            opcion.textContent = tipo;
            selectorTipo.append(opcion);
        });

        contador.textContent = `Equipamiento encontrado: ${contarArmas(armas)}`;

        // Aplicamos el filtro al pulsar el botón
        botonFiltrar.addEventListener("click", () => {
            const zonaSeleccionada = selectorZona.value;
            const tipoSeleccionado = selectorTipo.value;

            const armasPorZona = filtrarPorZona(armas, zonaSeleccionada);

            const armasFiltradas = filtrarPorTipo(
                armasPorZona,
                tipoSeleccionado
            );

            mostrarArmas(armasFiltradas);

            contador.textContent =
            `Equipamiento encontrado: ${contarArmas(armasFiltradas)}`;
        });

    } catch (error) {
        contenedor.textContent = "Error al cargar las armas";
        console.error(error);
    }
}

iniciar();
