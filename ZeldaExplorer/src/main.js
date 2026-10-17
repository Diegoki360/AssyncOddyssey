import { obtenerArmas } from "./api.js";
import {
    mostrarArmas,
    mostrarCarga,
    mostrarError
} from "./render.js";
import "./style.css";

import {
    obtenerZonas,
    filtrarPorZona,
    obtenerTipo,
    filtrarPorTipo,
    contarPorTipo,
    filtrarPorNombre
} from "./logic.js";

async function iniciar() {

    const contenedor = document.querySelector("#contenedor");
    const selectorZona = document.querySelector("#zona");
    const botonFiltrar = document.querySelector("#filtrar");
    const selectorTipo = document.querySelector("#tipo");
    const resumenTipos = document.querySelector("#resumenTipos");
    const buscador = document.querySelector("#busqueda");

    mostrarCarga(contenedor);

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

        const cantidades = contarPorTipo(armas);

        resumenTipos.textContent = Object.entries(cantidades).map(([tipo, cantidad]) => `${tipo}: ${cantidad}`).join(" | ");

        // Aplicamos el filtro al pulsar el botón
        botonFiltrar.addEventListener("click", () => {

             const zonaSeleccionada = selectorZona.value;
             const tipoSeleccionado = selectorTipo.value;

            const armasPorZona = filtrarPorZona(armas, zonaSeleccionada);

            const armasPorTipo = filtrarPorTipo(armasPorZona,tipoSeleccionado);

            const armasFiltradas = filtrarPorNombre(armasPorTipo,buscador.value);

            mostrarArmas(armasFiltradas);
        });

    } catch (error) {
        mostrarError(contenedor, error, iniciar);
        console.error(error);
    }
}

iniciar();