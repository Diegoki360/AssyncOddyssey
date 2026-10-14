export function obtenerTipo(arma) {

    const nombre = arma.name.toLowerCase();

    if (nombre.includes("shield")) {
        return "Escudo";
    }

    if (nombre.includes("bow")) {
        return "Arco";
    }

    if (nombre.includes("spear") ||
        nombre.includes("halberd") ||
        nombre.includes("trident")) {
        return "Lanza";
    }

    if (nombre.includes("claymore") ||
        nombre.includes("crusher") ||
        nombre.includes("greatsword")) {
        return "Arma a dos manos";
    }

    if (nombre.includes("sword") ||
        nombre.includes("blade") ||
        nombre.includes("scimitar")) {
        return "Espada";
    }

    return "Otro equipamiento";
}