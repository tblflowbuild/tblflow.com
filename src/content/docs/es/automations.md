---
title: "Automatizaciones"
translationKey: "automations"
description: "Crear automatizaciones en TblFlow: disparadores por registro, formulario, horario, webhook o correo, pasos condicionales, prueba sin efectos y cuotas."
section: "Guías"
order: 3
---

Una automatización es un flujo de trabajo asociado a una base: un disparador y, después, una serie de pasos. Se ejecuta en el servidor, incluso cuando nadie tiene la pestaña abierta.

La creas con **Nueva automatización**, o describiendo lo que quieres con **Generar con IA**: la IA propone una configuración que revisas y ajustas en el editor. Un interruptor activa o desactiva la automatización. No puede activarse mientras su disparador no esté configurado.

## Disparadores

| Disparador | Se activa cuando |
| --- | --- |
| **Cuando se crea un registro** | se añade una fila a la tabla elegida |
| **Cuando se modifica un registro** | se modifica una fila de la tabla elegida |
| **Cuando un registro cumple las condiciones** | una fila cumple todas tus condiciones (campo, operador, valor) |
| **Cuando se elimina un registro** | se elimina una fila |
| **Cuando se envía un formulario** | se envía un formulario de la tabla (una vista de formulario concreta, o todos) |
| **Cuando se hace clic en un botón** | alguien hace clic en un campo Botón de la tabla (un campo concreto, o todos) |
| **A la hora programada** | al intervalo elegido: minutos, horas, días, semanas o meses |
| **Cuando se recibe un webhook** | llega una llamada HTTP a la URL que se muestra en el editor |
| **Cuando se recibe un nuevo correo** | llega un nuevo correo no leído a la bandeja de entrada de una cuenta de Gmail conectada |
| **Nuevo elemento en un conector** | aparece un nuevo elemento en una lista de un conector |
| **Desde una interfaz** | una interfaz generada de la base lanza la automatización |

Algunas precisiones:

- **Horario.** Las automatizaciones programadas se ejecutan en la zona horaria del espacio o, si el espacio no tiene una, en UTC. Un intervalo inferior a 15 minutos se rechaza por defecto.
- **Webhook.** La llamada es un `POST` y debe incluir la cabecera `X-Webhook-Secret`. El secreto se configura en el editor; sin un secreto válido, la llamada se rechaza. El cuerpo recibido se puede leer directamente en la raíz de las variables.
- **Correo recibido.** Solo los nuevos correos no leídos de la bandeja de entrada activan la automatización; los que ya estaban al activarla se ignoran. La cuenta de Gmail se conecta en la pantalla **Conectores**.
- **Cadenas de disparos.** Un paso que escribe en la tabla que vigila puede volver a disparar la automatización. El motor corta una cadena así después de cinco generaciones sucesivas, pero es preferible diseñar la automatización para no depender de ello.

## Pasos

El menú **Añadir un paso** agrupa los pasos en tres familias.

| Familia | Pasos |
| --- | --- |
| Construir con IA | **Ejecutar un script**, **Slack**, **Microsoft Teams**, **Enviar un correo**, **Generación con IA**, **Crear, actualizar y obtener registros**, **Enviar una solicitud HTTP** |
| Construir manualmente | **Crear un registro**, **Obtener registros**, **Actualizar un registro**, **Crear o actualizar según una clave**, **Ejecutar el campo de IA**, **Sincronizar ahora**, **Controlar un sitio web** |
| Lógica | **Si se cumplen las condiciones** (ramas Entonces y Si no), **Bucle (para cada)** |

El botón **Conectar una API** añade un paso **Llamar a una API conectada**, que ejecuta una operación de una API de terceros conectada mediante su documentación OpenAPI.

El editor no tiene un paso para eliminar registros, ni de espera, ni de aprobación humana. Para que una persona apruebe una escritura antes de que se produzca, usa un [agente](/es/docs/ai-agents) con validación de escrituras.

Cada paso lee los datos del disparador y la salida de los pasos anteriores. El botón **Insertar una variable** propone los valores realmente disponibles en ese punto del flujo de trabajo. Las formas básicas son `{{record.fields.<identificador del campo>}}` para el registro del disparador y `{{steps.<identificador del paso>.<ruta>}}` para la salida de un paso. Un filtro añadido después de `|` transforma un valor (fecha, número, lista, valor por defecto, mayúsculas o minúsculas). Un paso con error interrumpe la ejecución: los pasos siguientes no se ejecutan.

El paso **Enviar un correo** puede salir de una cuenta de Gmail conectada; si no eliges ninguna cuenta, el envío pasa por el servicio de envío de TblFlow.

## Probar

**Ejecutar la prueba** ejecuta la automatización en modo simulado, con datos de ejemplo para el disparador. Una ventana muestra el resultado de cada paso. El mensaje «Esto es una simulación: no se ha modificado ningún dato real» lo recuerda. La prueba aparece en el historial con el estado **Prueba**.

## Historial de ejecuciones

El botón **Historial de ejecuciones** lista las ejecuciones de la automatización, de la más reciente a la más antigua. Cada una indica su estado (**Correcto**, **Error**, **En curso** o **Prueba**), su duración, su hora de inicio, su disparador y, para cada paso, el tipo, el estado y una nota. El historial conserva las últimas 50 ejecuciones. No hay forma de relanzar una ejecución desde el historial: tras corregir el problema, vuelve a lanzar la automatización mediante su disparador.

## Cuotas

El número de ejecuciones mensuales depende del plan. Se cuenta una ejecución en cada disparo, sea cual sea el número de pasos. Los correos enviados por las automatizaciones se cuentan por separado.

| Plan | Ejecuciones al mes | Correos de automatización al mes |
| --- | --- | --- |
| Gratis | 500 | 50 |
| Esencial | 25.000 | 2.000 |
| Equipo | 250.000 | 20.000 |
| Enterprise | ilimitadas | ilimitados |

En alojamiento propio, estos límites no se aplican. Las cuotas de los agentes se detallan en la página [Agentes de IA](/es/docs/ai-agents).

## ¿Automatización o agente?

Una automatización ejecuta la serie de pasos que has escrito: misma entrada, mismo camino, mismo resultado. Es lo que necesitas cuando la regla es conocida.

Un [agente](/es/docs/ai-agents) decide por sí mismo los pasos a partir de un objetivo. Es lo que necesitas cuando la regla depende del contenido, por ejemplo para clasificar solicitudes entrantes heterogéneas. Ambos se combinan: un agente puede listar y lanzar tus automatizaciones con sus herramientas, sujeto a la validación de escrituras.
