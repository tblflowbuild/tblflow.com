---
title: "Agentes de IA"
translationKey: "ai-agents"
description: "Configurar un agente de TblFlow: modelo, herramientas activadas, memoria, disparadores, aprobación humana de escrituras, skills y cuotas por plan."
section: "Guías"
order: 4
---

Un agente es un ejecutor vinculado a una base. Tiene instrucciones, un conjunto de herramientas y una memoria, y por defecto cada una de sus escrituras espera tu aprobación.

El perfil de un agente se organiza en cinco pestañas: **Instrucciones**, **Trabajos**, **Skills**, **Conocimiento** y **Memoria**.

## Elegir el modelo

Los proveedores y sus claves se configuran por espacio, en **Ajustes de IA del espacio**. Solo un propietario del espacio puede modificarlos. Las claves se cifran en reposo y no vuelven a aparecer en texto plano después de guardarlas.

Entre los proveedores disponibles están OpenAI, Anthropic, Google, Azure, Cohere, Mistral, DeepSeek, xAI, Amazon Bedrock, OpenRouter, cualquier punto de conexión compatible con OpenAI, además de modelos locales mediante Ollama y LM Studio. Las claves que añades se suman a las de la instancia, salvo que desactives **Usar los modelos de la instancia por defecto**.

En el perfil de un agente, el selector **Modelo** le asigna un modelo propio. Si no eliges ninguno, el agente usa el modelo de chat predeterminado de la configuración de IA.

## Definir el alcance

El alcance de un agente depende de tres cosas.

- **Su base.** Un agente no lee ni escribe en las tablas de otra base: una tabla que no está en su base se rechaza.
- **Sus herramientas.** La pestaña **Skills** enumera las acciones que puede realizar el agente. Una herramienta desactivada no se ofrece al modelo, que por tanto no puede llamarla. La mayoría de herramientas sobre registros, tablas y comentarios están activas por defecto. Las herramientas que actúan fuera de TblFlow o generan archivos están desactivadas por defecto y se activan una a una: búsqueda en la Web, generación de archivos Excel, Word, PowerPoint y PDF, ejecución de un skill o de código, correo electrónico, Slack, Microsoft Teams, GitHub, calendario, Drive y SharePoint, reproducción de un skill de navegador. La delegación en otros agentes solo está activa por defecto para un agente orquestador.
- **Sus conexiones.** Las cuentas conectadas en Conectores son las que usan tus agentes. Cuando nadie lanza el agente (programación, disparador), se usan las cuentas de su creador. También puedes añadir servidores MCP al agente.

Para limitar lo que el agente puede alcanzar, quítale las herramientas que no necesita. Un agente de triaje de soporte no tiene motivo para enviar correos ni eliminar registros.

## Aprobación de escrituras

El ajuste **Aprobación de escrituras** está activado por defecto, agente por agente. Mientras esté activo, una herramienta con efecto real no se ejecuta: el agente se pone en espera y pide tu aprobación. Esto afecta en particular a la creación, modificación y eliminación de registros, la creación de tablas, campos y vistas, los comentarios, el envío de correos o mensajes, el lanzamiento de una automatización, la ejecución de código o de un skill, y la escritura en memoria.

Respondes con **Aprobar** o **Rechazar** (con un motivo opcional). Las solicitudes pendientes aparecen en la página **Aprobaciones** de la base, accesible desde el enlace **Ver las aprobaciones pendientes**. Si no hay respuesta, la solicitud caduca a los 7 días y la acción no se ejecuta.

Desactiva este ajuste solo después de haber observado los errores del agente. Una vez desactivado, el agente escribe por su cuenta, y lo hace para todas sus escrituras: el ajuste no se configura tabla por tabla.

## Memoria

La pestaña **Memoria** activa o desactiva la memoria del agente, que incluye dos apartados:

| Apartado | Contenido |
| --- | --- |
| Reciente | recuerdos a corto plazo del trabajo reciente, conservados 7 días; se retienen los 50 más recientes y se proporcionan al agente los 5 más recientes al inicio de una tarea |
| Preferencias | instrucciones dadas por personas, en forma de clave y valor, que se proporcionan al agente en cada tarea |

Cuando el agente memoriza un dato, pueden extraerse entidades y relaciones hacia un grafo del espacio, que el agente consulta con la herramienta **Buscar en la memoria**. La memoria, por tanto, no es un historial de conversación: los intercambios se guardan aparte, en el historial.

**Ver los recuerdos** abre la lista de recuerdos del agente. Los editores de la base pueden **Corregir** o **Borrar** un recuerdo: si el agente ha retenido algo falso, se corrige la entrada en lugar de las instrucciones.

## Skills

Un skill es un bloque de instrucciones con nombre, que puede ir acompañado de un script, y que un agente puede utilizar. Puede ser personal (de tu cuenta) o compartido en el espacio. Los skills disponibles para un agente son los de su creador y los del espacio; cada uno está desactivado por defecto y se activa para el agente en la pestaña **Skills**. La ejecución del script de un skill pasa por la herramienta **Ejecutar el script de un skill**, también desactivada por defecto.

## Disparadores

La pestaña **Trabajos** indica cuándo se ejecuta el agente.

| Disparador | Funcionamiento |
| --- | --- |
| Mención | el agente analiza y responde cuando se le menciona en un registro (interruptor) |
| Mensaje privado | el agente responde a los mensajes que le envías (interruptor) |
| **Lanzar el agente** | ejecución a demanda |
| Programado | a una hora recurrente, o según una expresión cron personalizada; un intervalo inferior a 15 minutos se rechaza por defecto |
| Automatizado | al crear o modificar un registro de una tabla |
| Webhook entrante | una llamada HTTP dispara el agente |

Un disparador sobre registros solo actúa si la aprobación de escrituras está desactivada: mientras sea obligatoria, permanece inactivo, porque no se puede pedir la intervención de una persona durante un disparo automático. En cambio, una programación o un webhook sí funcionan con la aprobación: la solicitud de aprobación llega a Aprobaciones.

## Cuotas

Cada ejecución de un agente se cuenta por mes, tanto si se lanza a mano, como si está programada o se dispara.

| Plan | Ejecuciones de agente por mes |
| --- | --- |
| Gratis | 100 |
| Esencial | 5 000 |
| Equipo | 50 000 |
| Enterprise | ilimitadas |

En alojamiento propio, estos límites no se aplican. El uso de la IA está además sujeto a otros límites propios de cada plan. Las cuotas de las [automatizaciones](/es/docs/automations) se cuentan por separado.

## Historial

Cada ejecución se conserva como una conversación, con las llamadas a herramientas del agente, sus parámetros y sus resultados. El historial de conversaciones se consulta desde el chat del agente.

## Buenas prácticas

- Un objetivo por agente. Un agente que «gestiona el CRM» falla de forma difusa; tres agentes acotados fallan de forma legible.
- Deja la aprobación de escrituras activa al principio, y desactívala solo después de haber visto la naturaleza de sus errores.
- Activa solo las herramientas necesarias para la misión del agente.
