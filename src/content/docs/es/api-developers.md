---
title: "API y desarrolladores"
translationKey: "api-developers"
description: "Usar la API de TblFlow: tokens de acceso personal, aplicaciones OAuth, cuentas de servicio para scripts y CI, OpenAPI y webhooks entrantes."
section: "Guías"
order: 15
---

La API REST de TblFlow da acceso a los mismos datos que la interfaz, con los derechos de la persona o de la cuenta que hace la llamada. Todas sus rutas empiezan por `/api/`. Esta página presenta las cuatro formas de autenticarse y, después, los webhooks entrantes.

| Necesidad | Método |
|---|---|
| Un script o una herramienta propia | Token de acceso personal |
| Una aplicación de terceros que actúa en nombre de usuarios | Aplicación OAuth |
| Un script, una integración o una CI sin vínculo con una persona | Cuenta de servicio |
| Una herramienta externa que dispara una automatización o un agente | Webhook entrante |

Los tokens se envían en la cabecera `Authorization: Bearer <token>`.

## Tokens de acceso personal

Un token de acceso personal actúa con tus derechos, limitado a los ámbitos y a los espacios o bases que elijas. Solo puedes conceder acceso a las bases y espacios a los que tú mismo tienes acceso.

En tus ajustes personales, abre **Tokens de acceso personal** y, después, **Crear nuevo token**:

- **Nombre** y **Descripción**;
- **Caducidad**: 7, 30, 60, 90 o 365 días, o una fecha personalizada. Ningún token vive más de 365 días;
- **Ámbitos**: las acciones permitidas;
- **Acceso**: una base, un espacio (todas sus bases actuales y futuras) o **Todos los recursos**.

El token solo se muestra una vez: cópialo en ese momento. **Regenerar token** crea uno nuevo, y los scripts que usen el anterior deben actualizarse. Una vez eliminado un token, los scripts que lo usan dejan de acceder a la API. Un correo te avisa antes de que caduque (con umbrales de 14 y 3 días); nunca contiene el token.

| Acción | Ruta |
|---|---|
| Listar, crear | `GET` y `POST /api/access-token` |
| Modificar, eliminar | `PUT` y `DELETE /api/access-token/:accessTokenId` |
| Regenerar | `POST /api/access-token/:accessTokenId/refresh` |

## Generador de consultas API

Desde la página de tokens, el enlace **Generador de consultas API** abre `/developer/tool/query-builder`. Elige una base y una tabla, y ajusta la vista, la búsqueda, el filtro, la ordenación y el formato de las celdas: la pestaña **Generador API** construye la consulta y una vista previa del valor de retorno. La pestaña **Contexto IA** genera un texto para copiar en tu asistente de IA, en versión completa o compacta, para que entienda cómo interactuar con la tabla.

## Documentación OpenAPI

La aplicación genera la descripción OpenAPI de su API y la publica en las rutas `/docs` (Swagger) y `/redocs` (Redoc), salvo que la opción de documentación esté desactivada en el servidor.

## Aplicaciones OAuth

Una aplicación OAuth permite a un servicio de terceros solicitar acceso a la cuenta de tus usuarios. En tus ajustes personales, abre **Aplicaciones OAuth** y, después, **Nueva aplicación OAuth**:

- **Nombre de la aplicación OAuth**, **Descripción**, **URL de la página de inicio**, **Logotipo**;
- **URL de redirección** (puede haber varias): la dirección a la que se devuelve al usuario tras autorizar la aplicación;
- **Ámbitos**: los permisos que necesita la aplicación;
- **Secretos del cliente**: **Generar nuevo secreto de cliente**. El secreto solo es visible al crearlo. Cada secreto muestra su último uso.

El **ID de cliente** se consulta en la página de la aplicación. El flujo es el código de autorización OAuth 2.0:

1. La aplicación redirige al usuario a `GET /api/oauth/authorize` (con `client_id` y `response_type`).
2. El usuario inicia sesión, ve «{nombre} solicita acceso a tu cuenta» con los ámbitos pedidos y elige **Autorizar**.
3. La aplicación canjea el código por tokens con `POST /api/oauth/access_token`, autenticándose con su cliente. Un token de renovación permite obtener uno nuevo.

El usuario encuentra las aplicaciones que ha autorizado en **Perfil → Seguridad → Aplicaciones autorizadas**, y puede retirarles el acceso (botón de revocación).

| Acción | Ruta |
|---|---|
| Listar, crear una aplicación | `GET` y `POST /api/oauth/client` |
| Leer, modificar, eliminar | `GET`, `PUT` y `DELETE /api/oauth/client/:clientId` |
| Crear o eliminar un secreto | `POST /api/oauth/client/:clientId/secret`, `DELETE …/secret/:secretId` |
| Retirar el acceso a todos los usuarios | `POST /api/oauth/client/:clientId/revoke-access` |
| Retirar tu propia autorización | `POST /api/oauth/client/:clientId/revoke-token` |
| Listar las aplicaciones autorizadas | `GET /api/oauth/client/authorized/list` |

El [servidor MCP](/es/docs/mcp-server) y la [CLI](/es/docs/cli) también pasan por el servidor OAuth de TblFlow.

## Cuentas de servicio

Una cuenta de servicio da a un script, una integración o una CI acceso a un espacio que no depende de ninguna persona. Es miembro del espacio con el rol elegido (nunca propietario), no ocupa ningún puesto, y sus tokens solo valen para ese espacio.

La página está reservada a los propietarios del espacio: **Ajustes del espacio → Seguridad y auditoría → Cuentas de servicio**.

1. Escribe el **Nombre de la cuenta** y elige el **Rol**: **Lector**, **Editor** o **Creador**, y después **Crear cuenta**.
2. Para emitir un token, indica un **Nombre del token**, un **Acceso** (**Solo lectura**, **Lectura y escritura de registros** o **Todo lo que permite el rol**) y una **Validez** de 30, 90, 180 o 365 días, y después **Emitir token**.
3. Copia el token: nunca volverá a mostrarse.

El acceso real es la intersección de los ámbitos del token y del rol de la cuenta. **Revocar** un token o **Eliminar** una cuenta surte efecto en cuanto se confirma. Un espacio puede tener como máximo 50 cuentas de servicio, y una cuenta como máximo 20 tokens. Cada creación, cambio de rol, emisión y revocación queda registrada en el registro del espacio, y los propietarios reciben un correo antes de que caduque un token. La [CLI](/es/docs/cli) la usa en integración continua.

| Acción | Ruta (propietario del espacio) |
|---|---|
| Listar, crear | `GET` y `POST /api/space/:spaceId/service-account` |
| Cambiar el rol, eliminar | `PATCH` y `DELETE /api/space/:spaceId/service-account/:serviceAccountId` |
| Emitir un token | `POST …/:serviceAccountId/token` (`name`, `scopes`, `expiredTime`, `baseIds` opcional) |
| Revocar un token | `DELETE …/:serviceAccountId/token/:accessTokenId` |

## Webhooks entrantes

### Disparar una automatización

Una [automatización](/es/docs/automations) cuyo disparador es **Cuando se recibe un webhook** se inicia mediante una solicitud HTTP:

```bash
curl -X POST "https://app.tblflow.com/api/base/<baseId>/workflow/<workflowId>/webhook" \
  -H "X-Webhook-Secret: <secret>" \
  -H "Idempotency-Key: commande-4821" \
  -H "Content-Type: application/json" \
  -d '{"client": "Ada", "montant": 120}'
```

- La dirección aparece en el editor de la automatización y en **Automatizar → Webhooks** con **Copiar dirección**.
- El secreto es obligatorio. Sin el `X-Webhook-Secret` correcto, la solicitud recibe un error 401. El identificador de la automatización no basta para autenticarse.
- `Idempotency-Key` (o `X-Idempotency-Key`, 255 caracteres como máximo) evita procesar dos veces el mismo evento: la respuesta lleva entonces `duplicate: true`.
- La respuesta es `{ "received": true, "queued": true, "eventId": "…" }` en cuanto el evento queda registrado. Si el registro falla, el servidor responde 503: vuelve a intentarlo.
- El cuerpo JSON se lee en la raíz de los pasos de la automatización.
- Si la automatización está inactiva, la solicitud responde `{ "received": true, "steps": 0 }` sin ejecutar nada.

Cada llamada aceptada cuenta para la cuota mensual de ejecuciones de automatizaciones.

### Disparar un agente

Un [agente](/es/docs/ai-agents) también puede tener un disparador **Webhook entrante**. La solicitud es `POST /api/agent/:agentId/webhook` con la cabecera `X-Agent-Secret` y un cuerpo JSON. Un secreto no válido recibe un error 401. La respuesta es `{ "received": true }` y el agente se ejecuta después; la llamada consume la cuota de ejecuciones de agentes.
