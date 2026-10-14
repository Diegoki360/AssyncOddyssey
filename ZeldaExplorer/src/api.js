const URL = "https://api.hyrule-compendium.com/v3/compendium/category/equipment";

export async function obtenerArmas(juego = "botw") {

    const respuesta = await fetch(
        `${URL}?game=${juego}`
    );

    if (!respuesta.ok) {
        throw new Error("Error al obtener las armas");
    }

    const datos = await respuesta.json();

    return datos.data;
}