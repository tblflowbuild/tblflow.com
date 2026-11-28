---
title: "Planes y límites"
translationKey: "plans-limits"
description: "Los cuatro planes de TblFlow (Gratis, Esencial, Equipo, Enterprise) y sus límites: personas, bases, filas, almacenamiento, cuotas y créditos de IA."
section: "Guías"
order: 18
---

Cada espacio de TblFlow está en un plan. El plan fija el número de personas, de bases y de filas, el almacenamiento, las cuotas mensuales de ejecución y los créditos de IA incluidos. Esta página describe esos límites y lo que ocurre cuando se alcanza alguno. Los precios están en la página [Tarifas](/es/pricing), que es la referencia.

## Dónde ver tu plan

Abre los ajustes del espacio y luego la pestaña **Plan**. Muestra el plan actual, los cuatro planes con sus límites y el contador de lectores gratuitos de tu espacio. Los créditos de IA se siguen en la pestaña **Consumo de IA**, reservada al propietario del espacio. Los demás ajustes del espacio se describen en [Ajustes del espacio](/es/docs/space-settings).

Los planes se llaman **Gratis**, **Esencial**, **Equipo** y **Enterprise**.

## Personas y lectores

El precio es el del espacio, no el de cada persona: cada plan incluye un número de personas.

| | Gratis | Esencial | Equipo | Enterprise |
|---|---|---|---|---|
| Personas incluidas | 2 | 5 | 15 | 50 |
| Lectores gratuitos | 2 | 10 | 30 | ilimitado |
| Personas adicionales disponibles para compra | no | hasta 30 | hasta 30 | hasta 50 |

Una persona cuenta como **facturable** si es propietaria, creadora o editora del espacio (ver [Permisos](/es/docs/permissions)). Los roles de lector y comentarista comparten un único contador de lectores gratuitos. Más allá de ese contador, cada lector ocupa una persona incluida o adicional; si el espacio está lleno, la adición se rechaza.

Para añadir personas adicionales, en el plan de pago actual, escribe el número en **Personas adicionales** y haz clic en **Guardar**. Este ajuste no está disponible durante la prueba. El botón **Gestionar suscripción** abre el portal de pago, donde se gestionan el medio de pago, las facturas y la cancelación. Permanece inactivo mientras el espacio no haya realizado ningún pago.

## Límites de contenido

| | Gratis | Esencial | Equipo | Enterprise |
|---|---|---|---|---|
| Bases por espacio | 1 | 5 | 30 | ilimitado |
| Filas por tabla | 5 000 | 100 000 | 1 000 000 | ilimitado |
| Almacenamiento de las bases | 1 GB | 100 GB | 500 GB | ilimitado |
| Biblioteca de medios, total | 200 MB | 20 GB | 100 GB | ilimitado |
| Biblioteca de medios, por archivo | 25 MB | 200 MB | 500 MB | 500 MB |
| Espacios gratuitos por persona | 1 | ilimitado | ilimitado | ilimitado |

El Mapa de procesos (ver [Mapa de procesos](/es/docs/process-map)) no cuenta entre las bases del espacio. En el plan Gratis está en diagnóstico: un solo proceso. Los planes de pago tienen el mapa completo.

Algunas funciones también dependen del plan:

| | Gratis | Esencial | Equipo | Enterprise |
|---|---|---|---|---|
| Verificación de dominio | no | sí | sí | sí |
| Registro de auditoría | no | no | sí | sí |
| Permisos avanzados | no | no | sí | sí |
| Dominio personalizado | no | no | sí | sí |

## Cuotas mensuales

Estas cuotas miden lo que se ejecuta. Cada contador se reinicia al principio de cada mes (calendario UTC).

| Por mes | Gratis | Esencial | Equipo | Enterprise |
|---|---|---|---|---|
| Ejecuciones de agente | 100 | 5 000 | 50 000 | ilimitado |
| Ejecuciones de automatización | 500 | 25 000 | 250 000 | ilimitado |
| Correos de automatización | 50 | 2 000 | 20 000 | ilimitado |
| Llamadas a los conectores | 1 000 | 50 000 | 500 000 | ilimitado |
| Minutos de uso del ordenador | 30 | 600 | 3 000 | ilimitado |
| Repeticiones de uso del ordenador | 10 | 200 | 1 000 | ilimitado |
| Tokens de IA | 2 000 000 | 100 000 000 | 1 000 000 000 | ilimitado |
| Imágenes de IA | 20 | 500 | 5 000 | ilimitado |
| Audios de IA | 20 | 500 | 5 000 | ilimitado |
| Vídeos de IA | 0 | 20 | 200 | ilimitado |

Las llamadas a los conectores son las reales: las respuestas servidas desde la caché no cuentan. El plan Gratis no incluye vídeos de IA (límite en 0). Las automatizaciones y los agentes se describen en [Automatizaciones](/es/docs/automations) y [Agentes de IA](/es/docs/ai-agents).

La nota que se muestra en la pestaña **Plan** da un orden de magnitud: una fuente sincronizada cada 15 minutos para el mapa en vivo consume unas 3 000 ejecuciones de automatización al mes, más sus llamadas a los conectores.

## Créditos de IA

Los créditos de IA pagan la IA proporcionada por TblFlow. Las llamadas hechas con tu propia clave no consumen créditos. Se asignan cada mes según el plan:

| | Gratis | Esencial | Equipo | Enterprise |
|---|---|---|---|---|
| Créditos de IA incluidos al mes | 0 | 4 000 | 15 000 | 40 000 |

Para tener más, la pestaña **Consumo de IA** ofrece:

- **Opción por usuario**: 5 000 créditos al mes por cada persona que marques;
- **Bolsa compartida**: una bolsa mensual de 20 000 o de 100 000 créditos;
- **Límite mensual por miembro**: limita lo que un miembro puede consumir de los créditos compartidos y de las recargas (vacío: sin límite);
- **Recargar créditos**: recargas de 5 000, 20 000 o 100 000 créditos, con pago único y sin caducidad. Los créditos llegan en cuanto se confirma el pago.

La opción por usuario y la bolsa se contratan una vez activado el plan de pago. Las tarifas están en la página [Tarifas](/es/pricing). 1 000 créditos equivalen a 1 dólar de coste real del modelo. La pestaña muestra también el saldo, el consumo por usuario y por origen, y el historial de movimientos.

## Crédito de bienvenida

Un espacio Gratis nuevo, creado sin iniciar la prueba, recibe una única vez 200 créditos de IA. Este crédito no tiene fecha de caducidad y se suma al saldo de las recargas. Solo se gasta si la IA proporcionada por TblFlow está activa y se aplica el recuento de créditos; si no, no tiene efecto.

Condiciones:

- solo se concede una vez por dirección de correo electrónico;
- una dirección de empresa solo recibe uno por dominio, contando todas las direcciones del dominio; los correos de uso general solo tienen el límite por dirección;
- la prueba y el crédito de bienvenida comparten el mismo límite por dirección: una persona recibe uno de los dos, no ambos;
- solo afecta a los espacios creados después de su introducción; un espacio existente no lo recibe.

Con tu propia clave no consumes ninguno. Cuando se agote, recarga créditos o usa tu clave.

## Cuando se alcanza un límite

| Límite | Qué ocurre |
|---|---|
| Bases | La creación se rechaza: «Tu plan permite como máximo N bases.» |
| Filas por tabla | Se rechaza añadir filas: «Límite máximo de N filas superado». |
| Personas | Se abre la ventana **Límite de personas alcanzado**. El propietario puede hacer clic en **Añadir una persona** (si el plan aún se vende) o en **Mejorar plan**. Otro miembro recibe la invitación a avisar al administrador. |
| Almacenamiento | Se rechazan las subidas de archivos: «Se ha alcanzado el límite de almacenamiento de tu plan». El cálculo se basa en la última medición registrada. |
| Archivo de la biblioteca de medios | Se rechaza un archivo demasiado grande o un total superado. |
| Espacio gratuito | Se rechaza un segundo espacio Gratis: el plan gratuito permite un solo espacio. |
| Cuota mensual | La ejecución se rechaza: «Tu cuota mensual de … está agotada.» Se reanuda al mes siguiente. |
| Créditos de IA | «Tus créditos de IA se han agotado. Compra una recarga para continuar.» |

Para una cuota mensual, el propietario del espacio recibe un correo al 80 %, al 90 % y al agotarse, salvo en una cuota en 0, que significa «no incluido». Cuando la aplicación muestra la ventana **Límites superados**, su botón **Mejorar plan** abre la pestaña **Plan**.

## Prueba Esencial

Un espacio puede empezar con una prueba Esencial de 14 días. Un aviso muestra **Prueba Esencial: N días restantes**, con el botón **Pasar a Esencial**. Durante la prueba, los límites son los de Esencial, salvo cuatro topes reducidos: 10 000 000 tokens de IA, 60 minutos de uso del ordenador, 200 correos de automatización y 2 vídeos de IA al mes. La prueba recibe un único crédito de IA de 1 000 créditos, sin caducidad, y no la asignación mensual. Este crédito sustituye al crédito de bienvenida: solo se concede una vez por dirección y por dominio de empresa.

Si al terminar la prueba no hay suscripción, el espacio vuelve al plan Gratis. No se elimina ningún dato: lo que supere los límites del plan Gratis queda en solo lectura hasta que haya suscripción.

## Suscribirse, cambiar de plan, facturar

Desde la pestaña **Plan**, elige **Mensual** o **Anual** (cuando se ofrecen ambos) y luego **Suscribirse**, y sigue el pago. En un espacio ya suscrito, el botón pasa a ser **Cambiar de plan**. Una confirmación indica que la suscripción cambia de inmediato, con el mismo ritmo de facturación; el prorrateo aparece en la próxima factura y las personas adicionales se ajustan al número de miembros del espacio. Pasar a un plan demasiado pequeño para el número de personas del espacio se rechaza: quita antes a los colaboradores.

La sección **Facturas y abonos** lista tus documentos, descargables en **PDF** o en **Factur-X**. Si falta tu SIREN, la pestaña te invita a indicarlo: sin él, no se pueden enviar tus facturas.

## Plan Enterprise con presupuesto

Enterprise se contrata con presupuesto. En la tarjeta del plan, el botón **Solicitar presupuesto** abre un formulario público: **Correo profesional**, **Empresa**, **Tamaño del equipo**, **Tu necesidad**, y de forma opcional **Herramientas a conectar** y **IA deseada**. Haz clic en **Enviar solicitud**.

Después recibes un enlace a la propuesta. La página muestra su número, el compromiso (mensual sin permanencia, anual, de 2 años o de 3 años), el despliegue (servidor compartido, nube dedicada o local), las líneas del presupuesto y el total sin impuestos. Para aceptar, marca la aceptación de las condiciones generales de venta en nombre de la empresa y haz clic en **Acepto**: se te redirige al pago seguro, con tarjeta o domiciliación SEPA. Si la propuesta no se puede aceptar, la página indica el motivo. Un enlace no válido o sustituido por un envío más reciente muestra «Presupuesto no encontrado».
