---
title: "Inicio rápido"
translationKey: "quickstart"
description: "Crea tu primera base en TblFlow, importa datos, abre una vista y comparte todo con tu equipo en cinco minutos, sin escribir SQL."
section: "Guías"
order: 1
---

Esta página te lleva de una cuenta vacía a una base compartida con tu equipo. Son unos cinco minutos.

## 1. Crear una base

Dentro de un espacio, haz clic en **Crear una base**. Una base reúne tablas, automatizaciones y agentes; cada tabla tiene sus propias vistas. Por debajo, cada base es un esquema PostgreSQL dedicado.

Una ventana te pregunta qué quieres construir:

- **Describir la aplicación** — escribe lo que quieres seguir (« una herramienta para gestionar los horarios de clase de un centro de formación »), y luego haz clic en **Generar la aplicación**. La IA propone un esquema, vistas, una interfaz y automatizaciones, que validas paso a paso. El espacio necesita una IA configurada; si no la tiene, el botón se convierte en **Conectar la IA para generar** y lleva a los ajustes. Consulta [Chat con IA](/es/docs/ai-chat).
- **Partir de una base vacía** — la base se crea sin generación por IA; añadirás tus tablas después.

En un espacio que todavía no contiene ninguna base, también puedes **Partir de una plantilla**. La plantilla **Gestión de proyectos** forma parte de la galería incluida con TblFlow: crea las tablas Proyectos, Tareas (con subtareas y dependencias), Sprints y Personas, las vistas Kanban, Gantt y calendario, una vista **Panel** (cuadrícula agrupada por estado, con totales) y dos automatizaciones que rellenan o borran la fecha «Terminada el» de una tarea. Se incluyen un proyecto, un sprint y cinco tareas de ejemplo; hay que adaptarlos o eliminarlos. Un archivo **.tbl**, exportado desde otra base, se vuelve a importar en el espacio con **Importar**. Consulta [Importación, exportación y papelera](/es/docs/import-export-trash).

### Añadir una tabla

En la barra lateral de la base, el botón de añadir ofrece:

- **Nueva tabla** — defines los campos a mano;
- **Crear con IA** — describes la tabla, aparece una vista previa y no se crea nada hasta que haces clic en **Crear**;
- **Añadir desde otras fuentes** — importación de un archivo CSV, TSV o Excel, o de un enlace a un archivo (**Enlace (URL)**). Los tipos de campo se deducen de los datos (opción **Selección automática de tipos de campo**) y puedes corregirlos antes de importar. También se pueden pegar en una vista de cuadrícula celdas copiadas desde una hoja de cálculo.

## 2. Estructurar tus campos

El tipo de campo es lo que distingue una base de datos de una hoja de cálculo. Tómate el tiempo de elegirlo bien: lo demás (fórmulas, filtros, automatizaciones) depende de él.

| Necesidad | Tipo de campo a usar |
| --- | --- |
| Un valor dentro de un conjunto fijo | Selección única |
| Un enlace a otra tabla | Enlace a otro registro |
| Un valor tomado de la tabla enlazada | Búsqueda |
| Un agregado sobre los registros enlazados | Resumen |
| Un cálculo fila por fila | Fórmula |

Los tipos de campo no dependen de tu plan. Consulta [Tablas y campos](/es/docs/tables-and-fields).

## 3. Abrir una segunda vista

Una vista es una lectura de la tabla, no una copia. Cambiar de vista no duplica ningún dato.

En una tabla con un campo de estado, añade una vista **Kanban** apilada por ese estado. En una tabla con fechas, añade una vista **Calendario** o **Gantt**. Los filtros, las ordenaciones y las agrupaciones se guardan en cada vista. Por defecto, una vista es colaborativa: si un compañero modifica el filtro de «Mis expedientes atrasados», todos ven el cambio. El botón **Personal** limita tus ajustes solo a ti. Consulta [Vistas, filtros y fichas](/es/docs/views-and-filters).

## 4. Invitar a tu equipo

El botón **Invitar** de la barra lateral de la base abre el uso compartido; está reservado a los roles que pueden modificar la base. Cada persona recibe un rol: creador, editor, comentarista o lector sobre una base (el rol de propietario se asigna a nivel de espacio). También se pueden definir roles personalizados en una base o en una tabla. Para publicar o compartir una vista fuera de la aplicación, consulta [Compartir y publicar](/es/docs/sharing-publishing). Consulta [Permisos y roles](/es/docs/permissions).

La edición es colaborativa en tiempo real: dos personas pueden modificar la misma tabla al mismo tiempo, y la celda activa de cada participante se señala en la cuadrícula.

## Y después

- [Tablas y campos](/es/docs/tables-and-fields) — los tipos de campo en detalle.
- [Automatizaciones](/es/docs/automations) — desencadenar acciones sobre tus datos.
- [Agentes de IA](/es/docs/ai-agents) — delegar tareas recurrentes.
- [Conectores](/es/docs/connectors) — conectar tus herramientas.
- [API y desarrolladores](/es/docs/api-developers) — acceder a los datos por programa.
- [Cuenta y seguridad](/es/docs/account-security), [Ajustes del espacio](/es/docs/space-settings) y [Planes y límites](/es/docs/plans-limits).
