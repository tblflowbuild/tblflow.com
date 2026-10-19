---
title: "Mapa de procesos"
translationKey: "process-map"
description: "Crea el mapa de procesos de un espacio, dibuja los procesos, lee las rupturas y los costes estimados, y usa Reemplazar para que TblFlow proponga una alternativa."
section: "Guides"
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

## Compartir

Un enlace público de solo lectura comparte el mapa, cuando lo pides. Los campos sensibles reservados siguen ocultos. Desactiva el enlace cuando ya no lo necesites.
