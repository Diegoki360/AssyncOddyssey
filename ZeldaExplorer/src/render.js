import { obtenerTipo } from "./logic.js";

export function mostrarCarga(contenedor) {
    contenedor.replaceChildren();

    const mensaje = document.createElement("p");
    mensaje.classList.add("cargando");
    mensaje.textContent = "Conectando con la tableta Sheikah...";

    contenedor.append(mensaje);
}

export function mostrarError(contenedor, error, reintentar) {
    contenedor.replaceChildren();

    const mensaje = document.createElement("p");
    mensaje.classList.add("error");
    mensaje.textContent = `Error al cargar las armas: ${error.message}`;

    const boton = document.createElement("button");
    boton.id = "reintentar";
    boton.textContent = "Reintentar";
    boton.addEventListener("click", reintentar);

    contenedor.append(mensaje, boton);
}

export function mostrarArmas(armas) {

    const contenedor = document.querySelector("#contenedor");
    contenedor.replaceChildren(); // Limpiar el contenedor antes de mostrar las armas

    if (armas.length === 0) {
        contenedor.textContent = "No se encontraron armas";
        return;
    }

    const tarjetas = armas.map(arma => {

        const tarjeta = document.createElement("article");
        tarjeta.classList.add("tarjeta");

        // Imagen
        const imagen = document.createElement("img");
        imagen.src = arma.image;
        imagen.alt = arma.name;
        imagen.loading = "lazy";

        // Nombre
        const nombre = document.createElement("h3");
        nombre.textContent = arma.name;

        // Propiedades del equipamiento
        const propiedades = arma.properties ?? {};

        const tipo = document.createElement("p");
        tipo.textContent = `Tipo: ${obtenerTipo(arma)}`;

        const ataque = document.createElement("p");
        ataque.textContent =
            `Ataque: ${propiedades.attack ?? "No disponible"}`;

        const defensa = document.createElement("p");
        defensa.textContent =
            `Defensa: ${propiedades.defense ?? "No disponible"}`;

        // Sección de detalles desplegable
        const detalles = document.createElement("details");

        const botonDetalles = document.createElement("summary");
        botonDetalles.textContent = "Ver detalles";

        const descripcion = document.createElement("p");
        descripcion.textContent =
            arma.description ?? "Sin descripción";

        const localizaciones = document.createElement("p");
        localizaciones.textContent =
            "Localizaciones: " +
            (arma.common_locations?.join(", ") || "No especificadas");

        detalles.append(
            botonDetalles,
            descripcion,
            localizaciones
        );

        tarjeta.append(
            imagen,
            nombre,
            tipo,
            ataque,
            defensa,
            detalles
        );

        return tarjeta;
    });

    contenedor.append(...tarjetas);
}