export async function obtenerArmas() {

    const respuesta = await fetch(
        "https://api.hyrule-compendium.com/v3/compendium/category/equipment?game=botw"
    );

    if (!respuesta.ok) {
        throw new Error("Error al obtener las armas");
    }

    const datos = await respuesta.json();

    if (!Array.isArray(datos.data)) {
        throw new Error("La API no ha devuelto una lista válida");
    }

    return datos.data;
}