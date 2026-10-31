---
title: "Mapa de procesos"
translationKey: "process-map"
description: "Crea el mapa de procesos de un espacio, dibuja los procesos, lee las rupturas y los costes estimados, usa Reemplazar, y después haz el seguimiento de las revisiones, mide los costes reales e informa a la dirección."
section: "Guías"
order: 5
---

El mapa de procesos es una página de tu espacio donde dibujas quién hace qué y con qué herramientas, y después lees las rupturas y los costes estimados. Requiere el plan Pro o superior.

## Abrir o crear el mapa

Cada espacio tiene como máximo un mapa de procesos. Se accede desde el icono de la insignia derecha del espacio, desde la línea del menú izquierdo o desde un acceso directo en cada base.

La primera vez que lo abres, un clic crea el mapa. Eliges crearlo **con ejemplos** para explorar, o **vacío** para partir de tus propios procesos. Se apoya en una base normal del espacio (procesos, pasos, herramientas, roles, responsabilidades, objetos de datos, traspasos de datos): son tablas PostgreSQL reales que puedes filtrar y exportar.

## Describir los procesos

Arrastra para desplazar el lienzo y usa la rueda para ampliar. Haz clic en un paso para seleccionarlo; con doble clic o Espacio se abre su registro. Intro crea el paso siguiente, Tab una rama y F2 lo renombra.

Para ir más rápido, importa un documento, responde a las preguntas del asistente o conecta tus herramientas de automatización. Cada paso lo lleva a cabo una persona, una automatización o un agente de IA.

## Elegir una lectura

Un selector cambia la lectura sin cambiar el mapa:

- **Quién hace qué**: quién ejecuta cada paso y quién es su responsable.
- **Costes**: coste de las personas (tarifa por rol), coste de las herramientas (suscripciones, llamadas a la API, tokens de IA), ahorros posibles y ganancia conseguida. Estas cifras son **estimaciones** que introduces tú, no mediciones. Los costes de las personas solo los ve el propietario.
- **Rupturas**: reintroducción manual de datos entre herramientas, datos sin fuente maestra, un objeto consumido sin productor, un paso sin responsable, sin duración, huérfano o sin paso siguiente, una automatización con errores.
- **Datos**: los objetos de datos y las herramientas que los producen o consumen.

## Reemplazar

En un paso o una herramienta, **Reemplazar** da a la IA el contexto del mapa. Ella propone un reemplazo con TblFlow: una herramienta SaaS se convierte en una base y una interfaz, un conector en una automatización, un paso humano en un agente, la introducción de datos en un sitio web en una repetición en el navegador (Computer Use).

La IA propone y después crea elementos **inactivos**. Revísalos y actívalos tú mismo: no se ejecuta nada antes.

## Hacer el seguimiento de las revisiones

Cada proceso lleva una **ficha de procedimiento** (campo Canvas), un **responsable**, una fecha de última revisión, una fecha de próxima revisión y un **estado**. La documentación y el diagrama conviven en el mismo lugar, así que se corrigen juntos.

## Recibir alertas sobre procedimientos desactualizados

Las alertas se activan desde el menú **Más acciones** del lienzo y requieren una base V2. Cada lunes a las 7:00 (hora del servidor), un correo enumera los procesos cuya próxima revisión está vencida o llega en los próximos 14 días. Los procesos archivados se ignoran y no se envía ningún correo cuando no hay nada que revisar. Por defecto, el destinatario es la persona que activa las alertas; puedes cambiar los destinatarios.

## Recibir un informe mensual

El informe mensual se envía por correo el día 1 de cada mes a las 8:00 (hora del servidor) y también requiere una base V2. Indica el coste, la ganancia potencial, los tres procesos con mayor ganancia y el número de revisiones vencidas. Los importes solo aparecen si el propietario de la base los activa.

## Validar pasos

Un paso puede llevar un estado de validación (**por validar**, **validado**, **por revisar**), la persona que lo validó, la fecha y un comentario. Una insignia en el paso, dentro del lienzo, muestra el estado de un vistazo; el detalle aparece al pasar el cursor.

## Comparar estimado y real

En cada paso, introduce **mediciones**: minutos, volumen, tasa de error y la fuente de la medición. El panel **Estimado vs real** compara la estimación con la medición, **solo en los pasos medidos**, y muestra la proporción de pasos medidos, para que sepas cuánta confianza merece el total. También ofrece una lectura por proceso y por paso, con un enlace al paso en el lienzo. Los costes siguen siendo datos introducidos por tu equipo: TblFlow los compara, no los mide.

## Comparar antes y después

Antes de un cambio, **congela el mapa**: TblFlow crea una copia con la fecha en el nombre. Una vez hecho el cambio, abre **Antes / después** y compara el **coste total del mes** y el **número de pasos** entre la copia y el mapa actual.

## Hacer el seguimiento de las mejoras

El **registro de mejoras** da seguimiento a tus ideas por estado, con los pasos vinculados, el coste de implantación y la ganancia buscada.

## ¿Dónde estás perdiendo dinero?

Este recorrido de solo lectura clasifica tus procesos, y después sus pasos, por ganancia potencial: parte de la ganancia total, coste, rupturas y un enlace directo al paso en el lienzo. Para las personas que no tienen permiso para leer los importes, la clasificación se hace por número de rupturas y así se indica claramente.

## Presentar a la dirección

La **vista de dirección** cabe en una sola página de solo lectura, imprimible en PDF: coste, ganancia potencial, los cinco procesos donde más se pierde, mejoras por estado y revisiones vencidas.

## Partir de un proceso tipo

La **biblioteca de procesos tipo** ofrece 13 procesos para importar uno a uno, agrupados por sector: facturación a clientes, contratación, reclamaciones, compras, además de series para comercio, industria y logística, y contabilidad y asuntos jurídicos. Cada proceso llega con sus pasos encadenados, duraciones y frecuencias de ejemplo, y roles sin tarifas: introduce tus propios costes. Importar dos veces el mismo proceso no crea un duplicado. El contenido importado está por ahora en francés.

## Actualizar el modelo

Los mapas existentes pasan al modelo actualizado mediante el banner **Actualizar el modelo**: TblFlow muestra una vista previa de los cambios y pide confirmación antes de aplicar nada.

## Compartir

Un enlace público de solo lectura comparte el mapa. Está **cerrado por defecto**: actívalo cuando lo necesites y desactívalo cuando ya no lo necesites. Los campos sensibles reservados siguen ocultos, y los importes y los campos de coste se ocultan a quien no tiene permiso para leerlos. La exportación `.tbl` y la duplicación se rechazan si un campo no es legible para la persona que las solicita.
