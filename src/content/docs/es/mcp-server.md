---
title: "Servidor MCP"
translationKey: "mcp-server"
description: "Conectar TblFlow a Claude con el servidor MCP oficial: conexión, herramientas, permisos, elección de espacios y resolución de problemas."
section: "Guías"
order: 6
---

El servidor MCP oficial de TblFlow permite a Claude trabajar con tus datos desde la conversación. Es un servidor MCP remoto en Streamable HTTP, con autenticación OAuth 2.1 (tu inicio de sesión habitual de TblFlow). Está disponible desde el plan Gratis, como la [API REST](/es/docs/api-developers).

URL del servidor: `https://app.tblflow.com/mcp`

## Conectarse

### Claude (web, escritorio y móvil)

1. Abre **Ajustes → Conectores → Añadir conector personalizado**.
2. Introduce la URL `https://app.tblflow.com/mcp`.
3. Inicia sesión con tu cuenta de TblFlow.
4. Elige los espacios y las bases accesibles, y después los permisos.

### Claude Code

```bash
claude mcp add --transport http tblflow https://app.tblflow.com/mcp
```

## Las 27 herramientas

El servidor expone 27 herramientas, agrupadas así:

- **Explorar**: listar tus espacios y tus bases (`list_workspaces`), las vistas de una tabla (`list_views`) y los miembros de un espacio (`list_collaborators`, sin sus direcciones de correo).
- **Comprender**: describir el esquema de una base (`describe_base`) y leer el mapa de procesos de un espacio (`get_process_map`).
- **Leer**: listar, filtrar y leer registros, 100 como máximo por llamada (`list_records`, `get_record`).
- **Calcular**: calcular estadísticas sobre una tabla (`aggregate_records`), con filtro y agrupación, sin leer todas las filas. Funciones: recuento, vacíos, no vacíos, valores únicos, mínimo, máximo, suma, media, porcentajes de vacíos, no vacíos y únicos, fecha más antigua y fecha más reciente.
- **Buscar**: buscar en el grafo de conocimiento, con búsqueda semántica y de texto completo (`search_knowledge`).
- **Crear y modificar**: crear y modificar registros, 50 como máximo por llamada (`create_records`, `update_records`).
- **Importar**: importar un CSV de 2 MiB como máximo, en una tabla existente o en una tabla nueva (`import_csv`). Por defecto, una primera llamada solo muestra las columnas, los tipos detectados y el número de filas, sin escribir nada.
- **Eliminar y restaurar**: eliminar registros o un campo (`delete_records`, `delete_field`), con una vista previa y después una confirmación explícita; listar la papelera de una tabla y restaurar lo eliminado (`list_trash`, `restore_records`).
- **Estructurar**: crear una tabla (`create_table`), crear un campo (`create_field`), modificar el nombre, la descripción y, en un campo Canvas, las opciones del campo (`update_field`). El tipo de un campo nunca cambia.
- **Documentos y fichas Canvas**: leer la ficha de un registro (`get_canvas_doc`), modificarla (`update_canvas_doc`), lanzar la generación de las fichas de un campo Canvas para 25 registros como máximo por llamada (`generate_canvas_docs`, que consume créditos de IA en modo IA), y leer un documento del espacio (`get_doc`).
- **Automatizar**: listar las automatizaciones y los agentes expuestos (`list_exposed_actions`) y probar una automatización en seco (`run_automation`).
- **Delegar**: ejecutar un agente de IA (`run_agent`, con una espera de unos 100 segundos como máximo) y consultar el estado de sus últimas ejecuciones (`get_run_status`).

Cada herramienta llama a la API REST con tu token: el servidor no abre ningún acceso adicional.

## Recursos y prompts

El servidor también publica tres recursos de lectura y tres prompts listos para usar.

| Tipo | Nombre | Contenido |
|---|---|---|
| Recurso | `tblflow://workspaces` | Espacios accesibles (30 como máximo) |
| Recurso | `tblflow://bases/{baseId}` | Tablas de una base |
| Recurso | `tblflow://tables/{tableId}` | Campos de una tabla |
| Prompt | `summarize_table` | Describir una tabla y extraer sus cifras clave, sin modificarla |
| Prompt | `audit_data_quality` | Detectar campos vacíos y posibles duplicados, sin corregir nada |
| Prompt | `add_rows_safely` | Añadir registros tras verificar el esquema, y solo con tu acuerdo |

## Permisos y elección de espacios

Al conectar, TblFlow muestra la pantalla «solicita acceso a tu cuenta». En ella aparecen los permisos solicitados, con estas etiquetas:

| Permiso | Etiqueta mostrada |
| --- | --- |
| Lectura (por defecto) | Leer tus datos (espacios, tablas, registros, documentos) |
| Escritura | Crear y modificar registros |
| Eliminación | Eliminar registros (papelera) |
| Esquema | Crear tablas y campos |
| Activación | Probar en seco las automatizaciones y lanzar los agentes que hayas expuesto |

Después debes elegir los espacios y las bases accesibles para la aplicación. Un espacio marcado incluye todas sus bases. Si TblFlow no ha verificado la aplicación, la pantalla lo indica («Aplicación no verificada»): autoriza solo si tú has iniciado la conexión y comprueba el host de redirección que se muestra.

La **lectura** está activa por defecto; la **escritura**, la **eliminación**, el **esquema** y la **activación** son opciones. La eliminación incluye la restauración desde la papelera. Importar un CSV en una tabla existente requiere la escritura; la importación que crea una tabla requiere el esquema. Tus derechos actuales de TblFlow se aplican a cada solicitud: Claude nunca puede hacer más de lo que puedes hacer tú.

## Exponer una automatización o un agente

Una automatización o un agente solo se puede activar desde Claude si su propietario lo ha **expuesto**. Hoy, la exposición se hace por la API: `PUT /api/base/:baseId/mcp-exposure`. Un interruptor en la interfaz llegará próximamente.

## Límites por plan

| Plan | Solicitudes por minuto |
| --- | --- |
| Gratis | 60 |
| Esencial | 120 |
| Equipo | 300 |
| Enterprise | 600 |

## Desde un terminal

La [CLI de TblFlow](/es/docs/cli) también ofrece un servidor MCP local (`tblflow mcp serve`), para los clientes que lanzan un proceso en tu equipo. También sirve para importar un CSV o exportar una tabla desde la línea de comandos.

## Revocar el acceso

Elimina el conector en los ajustes de Claude: Claude deja de acceder a tus datos de TblFlow.

## Resolución de problemas

- **Error de autorización**: vuelve a conectar el conector y comprueba que el espacio o la base forma parte de los que elegiste, que el permiso necesario (escritura, eliminación, esquema o activación) está activado y que tus derechos de TblFlow lo permiten.
- **Un agente no se lanza**: la IA debe estar configurada en la base, y el agente debe haber sido expuesto por su propietario.
- **`run_automation` no modifica nada**: es una prueba en seco con datos de ejemplo. No se modifica ningún dato.

## Datos y privacidad

El contenido de las conversaciones no se registra: solo se conservan la herramienta llamada, la hora, la duración y el estado. Los resultados de las herramientas se transmiten al asistente (Claude) para responder a tu solicitud. Los detalles figuran en la [política de privacidad](/es/privacy) y en la [página del servidor MCP](/es/mcp).
