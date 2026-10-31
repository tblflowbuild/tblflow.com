---
title: "Tablas y campos"
translationKey: "tables-and-fields"
description: "Los 28 tipos de campo de TblFlow, los registros vinculados, las búsquedas y los resúmenes, y en qué se convierte realmente cada uno dentro de tu base de datos PostgreSQL."
section: "Guías"
order: 2
---

Una tabla de TblFlow es una tabla PostgreSQL real. Un campo es una columna real. Por eso esta página es útil aunque nunca salgas de la interfaz: lo que eliges aquí es lo que existe en la base de datos.

## Familias de campos

**Valores simples** — Texto de una línea, Texto largo, Número, Moneda, Porcentaje, Fecha, Casilla de verificación, Valoración, Correo electrónico, Teléfono, URL. Almacenan lo que escribes, nada más.

**Valores restringidos** — Selección única, Selección múltiple, Usuario. Las opciones se definen en el campo, y eso es lo que hace fiables las agrupaciones y los filtros: no pueden coexistir dos grafías de «En curso».

**Relacionales** — Registro vinculado, Búsqueda, Resumen, Resumen condicional. Ver más abajo.

**Calculados** — Fórmula (más de 200 funciones), Autonumeración, Hora de creación, Hora de última modificación, Creado por, Modificado por última vez por. No se pueden editar: se recalculan al escribir.

**Activos** — Archivo adjunto, Botón, IA. El campo de IA llama al modelo configurado en la base y escribe la respuesta en la celda.

## Vincular dos tablas

Un campo **Registro vinculado** crea una relación entre dos tablas. Una vez creada la relación:

- una **Búsqueda** extrae un campo de la tabla vinculada (el nombre de la empresa en la fila del contacto);
- un **Resumen** agrega los registros vinculados (`SUM` de los negocios de una cuenta, `COUNT` de las tareas de un proyecto);
- un **Resumen condicional** hace lo mismo sobre un subconjunto (`SUM` de los negocios cuya etapa es «Ganado»).

Los tres se recalculan cuando cambian los datos de origen, incluso cuando se modifican desde un cliente SQL externo.

## Fórmulas

Las fórmulas se definen en el campo y se aplican a todas las filas. Familias disponibles: texto, numéricas, de fecha, lógicas y agregados sobre registros vinculados.

```
IF(
  AND({Stage} = "Won", {Amount} > 10000),
  "Key account",
  "Standard"
)
```

Una fórmula no puede producir ningún efecto secundario: ni escribir en otra tabla ni hacer una llamada de red. Para eso necesitas una [automatización](/es/docs/automations).

## Cómo se ve esto en Postgres

Cada base es un esquema, cada tabla una tabla física, cada campo una columna tipada. Puedes apuntar `psql`, un ORM o una herramienta de BI a la misma instancia y leer tus datos directamente: sin exportación, sin capa de sincronización, sin retraso de replicación.

El corolario práctico: un `pg_dump` es una copia de seguridad completa y utilizable en cualquier otro sitio. Eso es lo que significa aquí «sin dependencia de un proveedor».

## Cosas que conviene saber

- Cambiar el nombre de un campo modifica su etiqueta, no la referencia que usan las fórmulas: nada se rompe.
- Cambiar el tipo de un campo intenta una conversión y te avisa de los valores que se perderían.
- Eliminar un campo elimina la columna. La operación queda registrada, pero no se puede deshacer más allá de la papelera de la base.
