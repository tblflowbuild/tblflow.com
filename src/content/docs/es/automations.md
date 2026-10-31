---
title: "Automatizaciones"
translationKey: "automations"
description: "Crear un flujo de trabajo en TblFlow: disparadores por evento y cron, pasos condicionales, llamadas salientes y pasos de aprobación humana, con un registro de ejecuciones reproducible."
section: "Guías"
order: 3
---

Una automatización es un flujo de trabajo asociado a una base: un disparador y después una secuencia de pasos. Se ejecuta en el servidor, incluso cuando nadie tiene la pestaña abierta.

## Disparadores

| Disparador | Se activa cuando |
| --- | --- |
| Registro creado | se añade una fila a la tabla vigilada |
| Registro actualizado | cambia el valor de un campo vigilado |
| Registro cumple una condición | una fila entra en el alcance de un filtro |
| Cron | según la programación indicada (expresión cron, zona horaria de la base) |
| Webhook | una llamada HTTP llega a la URL generada |
| Manual | alguien hace clic en un campo Botón |

Limitar un disparador de «actualizado» a los campos que realmente te interesan evita el bucle clásico: una automatización que escribe en la tabla que vigila y se vuelve a disparar a sí misma.

## Pasos

Pasos disponibles: crear / actualizar / eliminar un registro, buscar registros, enviar un correo, llamar a una URL, ejecutar una rama condicional, iterar sobre una lista, esperar, solicitar aprobación, llamar a un agente.

Cada paso recibe el resultado de los anteriores. Haces referencia a un valor con `{{step.field}}`, y el editor ofrece los campos que existen realmente en ese punto del flujo.

## Aprobación humana

El paso **Aprobación** pausa la ejecución y avisa a las personas que designes. El flujo se reanuda cuando se acepta, se detiene cuando se rechaza y caduca tras el plazo que hayas fijado.

Colócalo antes de cualquier cosa que se dirija al exterior: correo a un cliente, llamada a una API facturada, publicación. Una automatización que se equivoca internamente se puede corregir; una que se equivoca ante un cliente es mucho más difícil de deshacer.

## Registro de ejecuciones

Cada ejecución se conserva con su disparador, la entrada y la salida de cada paso y el motivo de cualquier fallo. Una ejecución fallida se puede reproducir desde el registro una vez corregida la causa, sin volver a ejecutar los pasos que ya tuvieron éxito.

## Cuotas

Las ejecuciones mensuales dependen del plan; son ilimitadas a partir del plan Business y con alojamiento propio. Una ejecución equivale a un disparador, sea cual sea el número de pasos que contenga.

## ¿Automatización o agente?

Una automatización ejecuta la secuencia que tú has escrito: misma entrada, mismo camino, mismo resultado. Es lo que quieres cuando la regla es conocida.

Un [agente](/es/docs/ai-agents) decide sus propios pasos a partir de un objetivo. Es lo que quieres cuando la regla depende del contenido, por ejemplo al clasificar solicitudes entrantes heterogéneas. Las dos se combinan: una automatización puede llamar a un agente como un paso más.
