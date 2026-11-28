---
title: "Tablas y campos"
translationKey: "tables-and-fields"
description: "Los 28 tipos de campo, vínculos entre tablas, campos Búsqueda y Resumen, fórmulas, valores predeterminados, validación y tablas en PostgreSQL."
section: "Guías"
order: 2
---

Una tabla de TblFlow es una tabla real de PostgreSQL. Un campo es una columna real. Por eso esta página te resulta útil incluso si nunca sales de la interfaz: lo que eliges aquí es lo que existe en la base de datos.

## Las familias de campos

El menú **Tipo** ofrece 28 tipos de campo, a los que se suman dos entradas, **Búsqueda** y **Búsqueda condicional**. Los tipos no dependen de tu plan.

**Valores simples** — Texto de una línea, Texto largo, Correo electrónico, Teléfono, URL, Número, Fecha, Casilla de verificación, Valoración. Guardan lo que escribes, nada más. Correo electrónico, Teléfono y URL exigen un formato válido.

**Duraciones** — Duración, que se muestra como 1:30, 1:30:00 o 1h 30m, y Duración con seguimiento, que cronometra el tiempo dedicado a cada fila, por persona.

**Duración con seguimiento.** La celda muestra el tiempo total, en horas y minutos; la opción **Mostrar segundos** del campo añade los segundos. No hay nada que escribir en la celda: haz doble clic en ella (o pulsa Intro), o abre la ficha, para acceder al cronómetro. **Iniciar** arranca un periodo y **Detener** lo cierra; el total mostrado avanza cada segundo mientras corre, y el valor del campo se actualiza al detenerlo. Los periodos aparecen listados por persona, con su inicio. Cada persona solo puede eliminar sus propios periodos (**Eliminar este periodo**), y el total se recalcula. Solo hay un periodo en curso por persona, por fila y por campo. Iniciar y detener el cronómetro requiere permiso para modificar registros; con un rol de solo lectura, el total y los periodos siguen visibles sin el botón.

**Valores restringidos** — Selección única, Selección múltiple, Usuario. Las opciones se definen en el propio campo.

**Relaciones** — Registro vinculado, Búsqueda, Resumen, Búsqueda condicional, Resumen condicional. Ver más abajo.

**Calculados** — Fórmula (más de 200 funciones), Autonumeración, ID de fila, Hora de creación, Última modificación, Creado por, Última modificación por. No se escriben a mano.

**Activos** — Archivo adjunto, Botón, Campo IA, Canvas. El Campo IA genera el contenido de la celda a partir de otros campos. El campo Canvas crea un documento por fila en la biblioteca de documentos.

**Formatos.** Moneda y Porcentaje no son tipos aparte: son formatos del tipo **Número**, igual que **Anillo** y **Barra**, dos maneras de mostrar el valor. Del mismo modo, **Fecha** y **Fecha y hora** son dos ajustes del tipo **Fecha**.

El campo principal de la tabla, que identifica cada registro, solo admite algunos tipos: por ejemplo, ni Archivo adjunto ni Registro vinculado.

## Vincular dos tablas

El campo **Registro vinculado** crea una relación entre dos tablas: uno a uno, uno a muchos, muchos a uno o muchos a muchos. El vínculo puede ser unidireccional o bidireccional (**Crear un campo de vínculo recíproco en la tabla vinculada**), e incluso apuntar a otra base. Una vez establecida la relación:

- una **Búsqueda** trae un campo de la tabla vinculada (el nombre de la empresa en la fila del contacto);
- un **Resumen** agrega los registros vinculados con una función como **SUMA** o **CONTAR** (la suma de los negocios de una cuenta, el número de tareas de un proyecto).

Una **Búsqueda condicional** y un **Resumen condicional** no necesitan vínculo: eliges una tabla y luego las condiciones que filtran sus registros (la suma de los negocios cuyo estado es «Ganado»).

Estos campos se recalculan cuando cambia el dato de origen.

## Fórmulas

Las fórmulas se escriben a nivel de campo y se aplican a todas las filas. Las funciones se agrupan en seis familias: numéricas, de texto, lógicas, de fecha y hora, de tablas y de sistema. Una fórmula puede leer los campos Búsqueda y Resumen, pero no puede leer directamente un campo de otra tabla.

```
IF(
  AND({Estado} = "Ganado", {Importe} > 10000),
  "Cuenta clave",
  "Estándar"
)
```

Una fórmula no puede producir efectos secundarios: no puede escribir en otra tabla ni hacer llamadas de red. Para eso hace falta una [automatización](/es/docs/automations).

## Valor predeterminado y validación

En el panel de un campo, **Valor predeterminado** rellena las filas nuevas. Está disponible para los tipos Texto de una línea, Texto largo, Número, Duración, Teléfono, Casilla de verificación, Usuario, Selección única y Selección múltiple. El tipo Fecha ofrece en su lugar **Rellenar automáticamente con la fecha actual**.

Las **Reglas de validación de los valores del campo** son dos interruptores:

- **Solo valores únicos**: para los tipos Texto de una línea, Texto largo, Número, Duración, Fecha, Correo electrónico, Teléfono y URL;
- **Obligatorio**: para esos mismos tipos, además de las selecciones, Usuario, Valoración, Duración con seguimiento, Archivo adjunto y Registro vinculado. Esta regla se ajusta modificando un campo existente, no al crearlo.

Ninguna de las dos se aplica a un campo de tipo Búsqueda.

## Qué pasa en Postgres

Cada base es un esquema de PostgreSQL, cada tabla es una tabla física y cada campo es una columna. El propietario de la base puede abrir un **Acceso de solo lectura a Postgres** desde la página **Diseño** de la base y leer los datos con `psql`, un ORM o una herramienta de BI. Este acceso solo concede derechos de lectura: cualquier escritura pasa por TblFlow. En la oferta alojada, está reservado al plan Enterprise. Ver [API y desarrolladores](/es/docs/api-developers).

## Límites que conviene conocer

- Renombrar un campo cambia su etiqueta, no la referencia que usan las fórmulas, que se basa en el identificador interno del campo: nada se rompe.
- Cambiar el tipo de un campo convierte los valores existentes. Cuando la conversión es larga o afecta a campos de vínculo, la ventana **Confirmar la modificación del campo** muestra primero los campos afectados.
- Eliminar un campo abre una ventana que enumera los campos que dependen de él. El campo eliminado va a la papelera de la tabla, donde puedes restaurarlo con sus valores durante el periodo de conservación. Ver [Importación, exportación y papelera](/es/docs/import-export-trash).
