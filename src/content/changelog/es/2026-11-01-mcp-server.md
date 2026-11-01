---
title: "Servidor MCP oficial: conecta TblFlow a Claude"
date: 2026-11-01
translationKey: "mcp-server"
type: "feature"
---

TblFlow abre un **servidor MCP oficial**: conecta tu espacio a Claude y trabaja con tus datos desde la conversación. Es un servidor remoto (`https://app.tblflow.com/mcp`, Streamable HTTP, OAuth 2.1), **disponible desde el plan Gratis**, como la API REST.

- **13 herramientas**: listar espacios y bases, describir el esquema, listar, filtrar y leer registros, buscar en el knowledge graph, crear y modificar registros, eliminar (vista previa y después confirmación explícita, papelera), crear una tabla o un campo, activar una automatización, ejecutar un agente de IA.
- **Tú mantienes el control**: al conectarte, eliges los espacios, las bases y los permisos. Lectura por defecto; escritura, eliminación, esquema y activación son opciones. Tus permisos de TblFlow se aplican a cada solicitud.
- **Límites de velocidad**: 60, 120, 300 y 600 solicitudes por minuto para Gratis, Pro, Business y Enterprise.
- **Registro MCP oficial**: el servidor está publicado como `com.tblflow/tblflow` (versión 1.0.0). El envío al directorio de conectores de Claude está pendiente.

Resumen: [/es/mcp](/es/mcp). Guía de conexión: [documentación](/es/docs/mcp-server). Anuncio: [el servidor MCP de TblFlow](/en/blog/tblflow-mcp-server-in-claude).
