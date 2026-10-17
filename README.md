## Verificación

Para comprobar el funcionamiento de Zelda Armory se han realizado las siguientes pruebas:

- Carga del equipamiento desde la API de Hyrule Compendium.
- Filtrado de armas por zona, tipo y nombre.
- Combinación de varios filtros simultáneamente.
- Comprobación del contador y del resumen de equipamiento por tipo.
- Búsquedas sin resultados.
- Comprobación de la caché de `localStorage`, verificando que evita peticiones repetidas durante una hora.
- Prueba de errores de conexión y del botón de reintento.

**Resultado:** Todas las pruebas anteriores han sido superadas con éxito, la web se resuelve correctamente ante errores.

## Trabajo manual

El proyecto se ha desarrollado utilizando JavaScript, HTML y CSS.

El trabajo incluye la organización de módulos, la integración de la API, la creación dinámica de tarjetas mediante el DOM, la implementación de filtros, la transformación de datos con métodos de arrays y el diseño visual inspirado en la tableta Sheikah de The Legend of Zelda.

**Uso de IA:**  Durante el desarrollo del proyecto he utilizado ChatGPT como herramienta de apoyo para resolver dudas sobre JavaScript y comprender mejor algunos conceptos, especialmente el uso de async/await, fetch, las promesas, los módulos y los métodos de transformación de arrays como map(), filter() y reduce().

También he utilizado la IA para revisar errores en el código, identificar posibles mejoras en la organización de los módulos y reforzar la gestión de errores, los filtros y el almacenamiento en localStorage.

El desarrollo del proyecto se ha realizado de forma progresiva, intentando comprender el funcionamiento de cada parte antes de incorporarla. He participado en las decisiones sobre la estructura, las funcionalidades y el diseño visual de la aplicación, utilizando la IA como apoyo tanto para aprender como para implementar y corregir determinadas partes del código.GG

## Autopsia

**Decisión 1: Clasificación de las armas a partir de sus nombres.**

Se ha decidido identificar el tipo de equipamiento buscando palabras clave en el nombre de cada objeto, como `shield`, `bow` o `sword`.

Esta solución permite clasificar el equipamiento sin depender de una propiedad específica de la API, pero tiene una limitación: algunos objetos podrían clasificarse incorrectamente si su nombre no contiene las palabras previstas.

**Decisión 2: Uso de localStorage para almacenar los datos de la API.**

Se ha implementado una caché de una hora para reducir las peticiones a la API y acelerar las recargas de la página.

Esta decisión mejora el rendimiento, pero tiene el inconveniente de que los datos pueden quedar desactualizados durante ese periodo. Además, el almacenamiento disponible en el navegador es limitado.
