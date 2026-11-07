---
title: "Servidor MCP: importación de CSV, 23 herramientas y página Seguridad y auditoría"
date: 2026-11-06
translationKey: "mcp-import-audit"
type: "feature"
---

- **23 herramientas** en lugar de 13: importación de un CSV (`import_csv`), estadísticas sobre una tabla, papelera y restauración, renombrado y eliminación de un campo, vistas de una tabla, miembros de un espacio, lectura del mapa de procesos, seguimiento de las ejecuciones de un agente.
- **Importación de CSV**: en una tabla existente o en una tabla nueva. Una primera llamada muestra las columnas, los tipos deducidos y el número de filas sin escribir nada; la importación solo se hace después de tu acuerdo. Hasta 2 MiB por llamada; por encima de eso, la [CLI](/es/docs/cli) toma el relevo.
- **Página Seguridad y auditoría** en los ajustes del espacio, reservada a los propietarios: registro del espacio filtrable por tipo de evento y por período, exportación a CSV y un registro MCP detallado que puedes activar si quieres conservar los identificadores de los objetos afectados. Los contenidos (valores, consultas, instrucciones) nunca se conservan.
- **Aplicaciones no verificadas señaladas**: una aplicación que se ha registrado por sí misma en TblFlow muestra «Aplicación no verificada» en la pantalla de consentimiento.
- **Tokens personales**: un correo te avisa 14 días y después 3 días antes de que caduque un token.

Guía: [Servidor MCP](/es/docs/mcp-server).
