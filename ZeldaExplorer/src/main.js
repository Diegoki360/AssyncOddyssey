import { obtenerArmas } from "./api.js";
import { mostrarArmas } from "./render.js";
import "./style.css";

async function iniciar() {

    const contenedor = document.querySelector("#contenedor");

    contenedor.textContent = "Cargando armas...";

    try {
        const armas = await obtenerArmas("botw");

        console.log("Armas obtenidas:", armas.length);

        mostrarArmas(armas);

    } catch (error) {
        contenedor.textContent = "Error al cargar las armas";
        console.error(error);
    }
}

iniciar();
