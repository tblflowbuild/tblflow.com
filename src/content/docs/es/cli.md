---
title: "CLI de TblFlow"
translationKey: "cli"
description: "Instalar y usar la CLI de TblFlow (@tblflow/cli): conexión con código de dispositivo o token, comandos, importación de CSV, exportación y servidor MCP local."
section: "Guías"
order: 8
---

La CLI de TblFlow maneja tus bases desde un terminal: leer y escribir registros, importar y exportar CSV, lanzar las automatizaciones y los agentes expuestos, y conectar un cliente MCP local (Claude Code, Cursor…) a tus datos. Se publica en npm con el nombre `@tblflow/cli`, con licencia MIT.

Requiere Node.js 20 o superior y no tiene ninguna dependencia de terceros.

## Instalar

```bash
npm install -g @tblflow/cli
tblflow --help
```

Sin instalar: `npx @tblflow/cli --help`.

## Conectarse

### En tu equipo

```bash
tblflow login     # aparece un código, lo apruebas en el navegador
tblflow whoami
tblflow logout    # borra la sesión local y revoca el token en el servidor
```

Antes de aprobar, comprueba que el código que aparece en el terminal es el mismo que el del navegador. Los tokens se guardan en el llavero del sistema (macOS, Linux Secret Service). Si no está disponible, se guardan en `~/.config/tblflow/credentials.json`, legible solo por ti, y la CLI te lo advierte.

### En integración continua

Crea un **token de servicio** en TblFlow: Ajustes del espacio → Seguridad y auditoría → Cuentas de servicio. Guárdalo en los secretos de tu CI y expónlo como variable de entorno:

```bash
export TBLFLOW_TOKEN=...      # inyectado por la CI, nunca escrito en el repositorio
tblflow bases
```

`TBLFLOW_TOKEN` tiene prioridad sobre cualquier sesión guardada y nunca se escribe en disco. Para guardar el token una vez en una máquina dedicada, léelo desde la entrada estándar:

```bash
printenv TBLFLOW_TOKEN | tblflow login --token -
```

`tblflow login --token <token>` también funciona, pero entonces el token queda en el historial del shell y en la lista de procesos: la CLI te lo recuerda. El token se verifica en el servidor antes de guardarse y no aparece en ninguna salida ni mensaje de error. `tblflow logout` olvida un token guardado así sin revocarlo: la revocación se hace en los ajustes del espacio.

### Elegir el servidor

Por defecto, la CLI se comunica con `https://app.tblflow.com`. Para otro servidor, usa `--host https://…` o la variable `TBLFLOW_URL`. HTTPS es obligatorio, salvo para `localhost`.

## Comandos

| Comando | Efecto |
|---|---|
| `bases` | Espacios y bases accesibles |
| `tables <baseId>` | Tablas de una base |
| `records list <tableId>` | `--take N` (100 como máximo), `--skip N`, `--fields a,b`, `--where "Campo=v"`, `--sort "Campo:desc"` |
| `records get <tableId> <recordId>` | Lee un registro |
| `records create <tableId>` | `--data '<json>'` o `--file f.json` (50 como máximo) |
| `records update <tableId> [<recordId>]` | Actualiza uno o varios registros |
| `records delete <tableId> <recordId>…` | Vista previa y después eliminación (papelera) con `--confirm` |
| `import <tableId> <archivo.csv>` | Añade las filas de un CSV; `--dry-run` |
| `import --new-table <baseId> <archivo.csv>` | Crea una tabla a partir de un CSV; `--name`, `--dry-run` |
| `export <tableId>` | CSV en la salida estándar o `--out archivo.csv`; `--view <viewId>` |
| `run automation <baseId> <workflowId>` | Lanza una automatización expuesta por su propietario |
| `run agent <baseId> <agentId> <tarea…>` | Lanza un agente expuesto por su propietario |
| `api <MÉTODO> <ruta>` | Llamada directa, solo rutas `/api/`; `DELETE` exige `--confirm` |
| `mcp serve` | Servidor MCP local (stdio) |

`--json` funciona con todos los comandos. Códigos de salida: 0 si todo va bien, 1 si hay un error, 2 si hay un error de uso o se requiere una confirmación.

### Crear una tabla a partir de un CSV

```bash
tblflow import --new-table <baseId> clientes.csv --name "Clientes" --dry-run
tblflow import --new-table <baseId> clientes.csv --name "Clientes"
```

`--dry-run` muestra lo que se crearía sin escribir nada.

## Conectar un cliente MCP local

`tblflow mcp serve` lanza un servidor MCP local sobre la entrada y la salida estándar. Decláralo en la configuración de tu cliente MCP:

```json
{ "mcpServers": { "tblflow": { "command": "npx", "args": ["-y", "@tblflow/cli", "mcp", "serve"] } } }
```

Para conectar Claude (web, escritorio o móvil) sin instalar nada, usa mejor el servidor MCP remoto: consulta la guía [Servidor MCP](/es/docs/mcp-server).

## Condiciones y datos personales

El uso de la CLI con una cuenta de TblFlow se rige por las [condiciones generales de uso](https://app.tblflow.com/legal/terms) y la [política de privacidad](https://app.tblflow.com/legal/privacy). La CLI no recopila ninguna telemetría: solo se comunica con el servidor de TblFlow que tú configuras.
