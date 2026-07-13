# Plantilla de solucion

## Analisis

- Entrada:
  - `listadoCarritos`: Un arreglo de objetos que contiene la información de los puestos de comida urbana (`nombre`, `calificacion`, `distanciaMetros`, `ingredientesDisponibles`).
  - `antojoCliente`: Una cadena de texto con el ingrediente principal obligatorio deseado por el comensal.

- Proceso:
  - El algoritmo valida que la lista de puestos de comida urbana contenga elementos para procesar.
  - Recorre secuencialmente cada uno de los puestos de comida usando bucles estructurados tradicionales.
  - Evalúa la presencia del ingrediente obligatorio deseado en la lista de insumos del carrito.
  - Aplica filtros rigurosos basados en la experiencia del cliente: distancia de cercanía máxima y reputación mínima.
  - Ordena internamente la selección priorizando la mejor calidad del servicio (calificación) y luego la cercanía.

- Salida:
  - Un arreglo con los nombres de los carritos de comida urbana idóneos que cumplen con todas las condiciones estratégicas de selección.

## Reglas identificadas

1. **Filtro de Antojo:** Es mandatorio que el puesto cuente con el ingrediente del `antojoCliente`; de lo contrario, el carrito es descartado automáticamente.
2. **Estándar de Calidad Urbana:** Únicamente se seleccionan aquellos carritos que posean una calificación mayor o igual a 4.2 estrellas y que se ubiquen a una distancia menor o igual a 800 metros.
3. **Manejo de Desabasto:** Si ningún negocio cumple simultáneamente con el ingrediente y las condiciones geográficas/calificación, el sistema debe retornar un listado vacío de forma segura.

## Pruebas

### Caso normal

Entrada:
- `listadoCarritos`: `[{ nombre: "Shucos El Chino", calificacion: 4.8, distanciaMetros: 300, ingredientesDisponibles: ["aguacate", "salchicha", "chirmol"] }, { nombre: "Tacos El Parcero", calificacion: 3.9, distanciaMetros: 100, ingredientesDisponibles: ["pastor", "aguacate"] }]`
- `antojoCliente`: `"aguacate"`

Resultado esperado:
- `["Shucos El Chino"]`

### Caso borde

Entrada:
- `listadoCarritos`: `[]`
- `antojoCliente`: `"salchicha"`

Resultado esperado:
- `[]`

## Explicacion final

Escribe aqui por que tu solucion funciona.
Esta solución funciona porque implementa un pipeline secuencial de filtrado lógico y directo sobre los arreglos de datos sin mutar la información de origen. Al condicionar estrictamente la evaluación a los parámetros de satisfacción (antojo específico, reputación y distancia), se asegura de rechazar carritos mediocres o excesivamente lejanos antes de realizar cualquier acumulación de memoria. La estructura limpia de ciclos anidados nativos evita el uso de abstracciones de librerías externas y garantiza un rendimiento óptimo en dispositivos con recursos limitados dentro del entorno de Campuslands.