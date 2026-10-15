# Zelda Armory

## Descripción del proyecto

Zelda Armory es una aplicación web desarrollada con JavaScript y Vite que permite consultar el equipamiento de *The Legend of Zelda: Breath of the Wild*.

La aplicación obtiene información de la API pública Hyrule Compendium y muestra los objetos mediante tarjetas con sus imágenes, nombres, estadísticas, descripciones y localizaciones.

También permite filtrar el equipamiento según las zonas de Hyrule en las que aparece.

## Instalación y ejecución

Para ejecutar el proyecto es necesario tener Node.js instalado.

1. Descargar o clonar el repositorio.
2. Abrir una terminal en la carpeta `ZeldaExplorer`.
3. Ejecutar `npm install` para instalar las dependencias.
4. Ejecutar `npm run dev` para iniciar Vite.
5. Abrir en el navegador la dirección local indicada por Vite.

## Tecnologías utilizadas

- HTML y CSS para la estructura y el diseño.
- JavaScript para la lógica y la manipulación del DOM.
- Vite como herramienta de desarrollo.
- Fetch API y async/await para consultar la API.
- Módulos ES para organizar el código.

## Organización del proyecto

- `api.js`: realiza la petición a la API.
- `logic.js`: contiene las funciones de clasificación y filtrado.
- `render.js`: crea y muestra las tarjetas mediante el DOM.
- `main.js`: coordina la carga de datos y los eventos de la interfaz.
- `style.css`: define los estilos visuales.

## Decisiones de desarrollo

Se eligió Hyrule Compendium por su relación con el universo Zelda y porque permite trabajar con datos reales obtenidos de una API.

El código se dividió en módulos para separar las peticiones de red, el procesamiento de los datos y su representación en pantalla.

Se decidió utilizar métodos de arrays como `map()`, `flatMap()` y `filter()` para trabajar con el equipamiento y sus localizaciones.

La interfaz utiliza una estética inspirada en la tecnología Sheikah de Breath of the Wild.

## Uso de IA

Durante el desarrollo se utilizó ChatGPT como herramienta de apoyo para comprender conceptos de JavaScript, resolver dudas y proponer implementaciones.

Entre las consultas realizadas estuvieron:

- «¿Por qué utilizamos flatMap para obtener las localizaciones de las armas?»
- «Añadamos un botón que me permita filtrar por zona en la que aparece».

La herramienta también propuso fragmentos de código y estilos CSS para el filtro de localizaciones.

**Verificación:** [Explicar aquí qué funcionalidades probaste personalmente en el navegador y qué errores corregiste.]

**Trabajo manual:** [Indicar aquí qué partes escribiste, adaptaste o modificaste por tu cuenta. No atribuirte código generado directamente por IA.]

## Limitaciones

La aplicación necesita conexión a Internet para consultar la API. Si el servicio no responde, no se pueden cargar los datos.

Algunos objetos pueden carecer de estadísticas o localizaciones, por lo que se muestran valores alternativos cuando falta información.
