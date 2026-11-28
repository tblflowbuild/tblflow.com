---
title: "Importar, exportar y papelera"
translationKey: "import-export-trash"
description: "Importar CSV, TSV o Excel, exportar tablas o bases, recuperar elementos de la papelera, deshacer una acción, duplicar o partir de una plantilla."
section: "Guías"
order: 11
---

Esta página reúne lo que entra en TblFlow, lo que sale de él y cómo volver atrás.

## Importar un archivo

TblFlow importa tres formatos: **CSV**, **TSV** y **Excel** (extensiones `.xlsx`, `.xls` y `.xlsm`). En el caso de un archivo local, el formato se reconoce por la extensión. Un archivo Excel enviado desde tu equipo no puede superar los 5 MB.

Hay dos entradas, según quieras una tabla nueva o añadir filas a una tabla existente.

### En una tabla nueva

1. En la barra lateral de la base, abre el menú **+**, sección **Añadir desde otras fuentes**, y luego **Importar datos**.
2. Elige la pestaña **Archivos locales** (arrastra el archivo a la zona) o **Enlace (URL)** (pega la dirección de un archivo).
3. Una **Vista previa de los datos** muestra las columnas detectadas. Puedes activar **Analizar e implementar con IA**: la IA propone nombres de columnas y tipos de campo, que conservas o corriges en el paso siguiente.
4. Ajusta la importación:
   - **Usar la primera fila como encabezado**;
   - **Selección automática de los tipos de campo**;
   - el nombre y el tipo de cada campo, o **No importar** para descartar una columna;
   - el **Campo principal**;
   - **Importar datos** (desmárcalo para crear solo la estructura);
   - en un libro de Excel, la configuración se hace hoja por hoja (**Nombre de la hoja**).
5. Haz clic en **Importar** y luego en **Confirmar y continuar** en el mensaje de advertencia.

Los nombres de los campos deben ser únicos y no estar vacíos. La importación solo se detiene al terminar con éxito o con error: su estado aparece arriba a la derecha de la tabla, y una notificación anuncia el resultado. Evita modificar los campos durante la importación.

### En una tabla existente

Abre el menú de la tabla, **Importar datos**, y luego **Archivo CSV** o **Microsoft Excel**. Asocias cada columna del archivo a un campo de la tabla, y puedes marcar **Excluir la primera fila de la importación**. Las filas se añaden a las que ya existen.

Esta entrada requiere el derecho de importar en una tabla: roles Propietario y Creador. Crear una tabla nueva mediante importación requiere el derecho de crear tablas.

### Límites y errores

La importación está sujeta al límite de filas por tabla de tu plan: 5 000 en Gratis, 100 000 en Esencial, 1 000 000 en Equipo, sin tope en Enterprise. Si se supera, la importación se detiene con el mensaje «Límite de filas alcanzado». Consulta [Planes y límites](/es/docs/plans-limits).

Los demás errores posibles: una fecha fuera del rango válido, un campo **Obligatorio** dejado vacío, duplicados en un campo que solo acepta **Valores únicos**, o un tiempo de espera agotado.

### Otras formas de importar

- **Pegar en la cuadrícula.** Copia celdas de una hoja de cálculo y pégalas en una vista de cuadrícula. Si el pegado supera la tabla, TblFlow pregunta si debe añadir registros, y pide confirmación antes de sobrescribir filas existentes.
- **Desde la línea de comandos**: `tblflow import --new-table` envía un archivo CSV. Consulta [La CLI](/es/docs/cli).
- **Mediante un agente**: el servidor MCP expone una herramienta `import_csv`. Consulta [El servidor MCP](/es/docs/mcp-server).

## Exportar

### Una tabla en CSV

En el menú de la tabla, **Descargar csv**. En una vista de cuadrícula, la misma opción existe en el menú de la pestaña (clic derecho): la exportación parte entonces de la vista y conserva su filtro y su orden. Todos los roles que pueden leer la tabla pueden exportar.

### Una base completa

En la lista de bases del espacio, el menú de una base ofrece **Exportar**. La ventana **Exportar** incluye la opción **Incluir los registros**: desactivada, solo se exportan la estructura y la configuración.

1. Haz clic en **Comenzar la exportación**. Puede tardar un rato; puedes cerrar la ventana.
2. Una notificación anuncia que los datos están listos.
3. **Descarga** el archivo `.tbl`.

Para volver a importarlo, arrastra el archivo `.tbl` a la página del espacio: «Suelta tu archivo .tbl para importarlo». Los campos de enlace a otra base se convierten en texto de una sola línea en la exportación.

Exportar o duplicar una base requiere el derecho de modificar la base: roles Propietario y Creador.

## Deshacer y rehacer

Los botones **Deshacer** y **Rehacer** de la barra de herramientas (atajos Ctrl o Cmd + Z, y Ctrl o Cmd + Mayús + Z) deshacen o rehacen tus últimas acciones sobre la tabla. Están activos si puedes modificar registros.

Afectan a: la escritura y el pegado de celdas, la creación, eliminación y reordenación de registros, la creación, eliminación y conversión de campos, y la creación, modificación y eliminación de vistas.

El historial de deshacer es propio de cada persona y de cada tabla. Por defecto, conserva las últimas 200 acciones durante 24 horas. Una nueva acción vacía la pila de rehacer.

El **historial de registros** es otra herramienta: registra quién cambió qué, con los valores anteriores y posteriores. Consulta [Vistas, filtros y fichas](/es/docs/views-and-filters).

## La papelera

Eliminar una tabla, una base, un registro, un campo o una vista no lo borra de inmediato: el elemento va a una papelera, desde donde puedes **Recuperarlo**.

| Papelera | Dónde encontrarla | Qué contiene |
|---|---|---|
| **Papelera de la tabla** | Menú de la tabla | Vistas, campos y registros eliminados |
| **Papelera** de la base | Icono **Papelera** de la barra lateral de la base | Tablas, aplicaciones, automatizaciones, agentes y skills de navegador eliminados |
| **Papelera** del espacio | Menú del espacio | Bases eliminadas de este espacio |
| **Papelera del espacio** | Selector de espacios | Espacios, bases y tablas eliminados, en tres pestañas |

Las columnas **Tipo**, **Por** y **Fecha** indican qué se eliminó, por quién y cuándo; en la papelera de una tabla, los filtros **Desde** y **Hasta** restringen el periodo. La página **Papelera del espacio** ofrece también **Eliminación permanente**.

- **Periodo de conservación.** Por defecto, 30 días. Transcurrido ese plazo, una purga automática elimina el elemento de forma definitiva. Las papeleras de base y de espacio muestran el plazo aplicado a tu instancia («eliminados en los últimos N días»).
- **Vaciar** elimina de forma definitiva el contenido de la papelera de la base, previa confirmación.
- **Cuota.** Los datos en la papelera siguen contando en tu uso de registros y de adjuntos.
- **Orden de restauración.** No se puede recuperar un elemento cuyo padre está a su vez en la papelera: restaura primero la base y luego sus tablas.
- **Campos.** Restaurar un campo devuelve sus valores. Aparece una ventana de progreso, porque la operación puede afectar a muchos registros.

Leer y restaurar la papelera de una tabla está reservado a los roles Propietario, Creador y Editor. Los roles Comentarista y Lector no tienen acceso. Consulta [Permisos y roles](/es/docs/permissions).

## Duplicar una tabla o una base

**Una tabla.** Menú de la tabla, **Duplicar**. Nombras la copia y eliges con **Incluir los registros** si las filas se copian (activado por defecto). Hay que poder leer la tabla y crear tablas en la base: roles Propietario y Creador.

**Una base.** Menú de la base, **Duplicar**, y luego **Duplicar la base**. Eliges el espacio de destino y si los registros se duplican. Tu historial de revisiones y tus colaboradores no se duplican.

## Partir de una plantilla

Una plantilla es una base lista para usar. Tras elegir una plantilla, la ventana **Crear una base a partir de una plantilla** pide el espacio de destino y propone **Duplicar los registros**: activado, la base recupera los datos de ejemplo de la plantilla; desactivado, solo se copia la estructura. Hay que poder crear bases en el espacio elegido.

Para proponer tus propias plantillas, consulta [Compartir y publicar](/es/docs/sharing-publishing).
