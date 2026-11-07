---
title: "Servidor MCP"
translationKey: "mcp-server"
description: "Conecta TblFlow a Claude con el servidor MCP oficial: conexión, herramientas disponibles, permisos y selección de espacios, exposición de automatizaciones y agentes, límites y resolución de problemas."
section: "Guías"
order: 6
---

El servidor MCP oficial de TblFlow permite a Claude trabajar con tus datos desde la conversación. Es un servidor MCP remoto sobre Streamable HTTP, con autenticación OAuth 2.1 (tu inicio de sesión habitual de TblFlow). Está disponible desde el plan Gratis, como la API REST.

URL del servidor: `https://app.tblflow.com/mcp`

## Conectar

### Claude (web, escritorio y móvil)

1. Abre **Ajustes → Conectores → Añadir conector personalizado**.
2. Introduce la URL `https://app.tblflow.com/mcp`.
3. Inicia sesión con tu cuenta de TblFlow.
4. Elige los espacios y bases accesibles, y después los permisos.

### Claude Code

```bash
claude mcp add --transport http tblflow https://app.tblflow.com/mcp
```

## Las 23 herramientas

El servidor expone 23 herramientas, agrupadas así:

- **Explorar**: listar tus espacios y tus bases, las vistas de una tabla y los miembros de un espacio.
- **Comprender**: describir el esquema de una base, leer el mapa de procesos de un espacio.
- **Leer**: listar, filtrar y leer registros.
- **Calcular**: calcular estadísticas sobre una tabla (suma, media, mínimo, máximo, recuento), con filtro y agrupación, sin leer todas las filas.
- **Buscar**: buscar en el knowledge graph, con búsqueda semántica y de texto completo.
- **Crear y modificar**: crear y modificar registros.
- **Importar**: importar un CSV, en una tabla existente o en una tabla nueva.
- **Eliminar y restaurar**: eliminar registros o un campo, con una vista previa y después una confirmación explícita; listar la papelera y restaurar lo que se ha eliminado.
- **Estructurar**: crear una tabla, crear o renombrar un campo.
- **Automatizar**: listar las automatizaciones y los agentes expuestos, activar una automatización.
- **Delegar**: ejecutar un agente de IA y consultar el estado de sus últimas ejecuciones.

## Permisos y selección de espacios

Al conectarte, eliges los espacios y bases accesibles y los permisos. La **lectura** está activada por defecto; la **escritura**, la **eliminación**, el **esquema** y la **activación** son opciones. Tus permisos actuales de TblFlow se aplican a cada solicitud: Claude nunca puede hacer más de lo que puedes hacer tú.

## Exponer una automatización o un agente

Una automatización o un agente solo se puede activar desde Claude si su propietario lo ha **expuesto**. Por ahora, la exposición se hace a través de la API: `PUT /api/base/:baseId/mcp-exposure`. Un interruptor en la interfaz llegará próximamente.

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

- **Error de autorización**: vuelve a conectar el conector y comprueba que el espacio o la base es uno de los que elegiste, que el permiso necesario (escritura, eliminación, esquema o activación) está activado y que tus permisos de TblFlow lo permiten.
- **Un agente no se inicia**: la IA debe estar configurada en la base y el agente debe haber sido expuesto por su propietario.
- **`run_automation` no cambia nada**: es una prueba en seco con datos de ejemplo. No se modifica ningún dato.

## Datos y privacidad

El contenido de las conversaciones no se registra: solo se conservan la herramienta invocada, la hora, la duración y el estado. Los resultados de las herramientas se transmiten al asistente (Claude) para responder a tu solicitud. Los detalles figuran en la [política de privacidad](/es/privacy) y en la [página del servidor MCP](/es/mcp).
