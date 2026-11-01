---
title: "Inicio rápido"
translationKey: "quickstart"
description: "Crea tu primera base de TblFlow, importa datos, abre una segunda vista y compártela con tu equipo, en cinco minutos y sin escribir nada de SQL."
section: "Primeros pasos"
order: 1
---

Esta página te lleva de una cuenta vacía a una base en la que tu equipo puede trabajar. Cuenta con cinco minutos.

## 1. Crear una base

Desde el panel, **Nueva base**. Una base es un espacio de trabajo: contiene varias tablas, sus propias vistas, automatizaciones y agentes. Por debajo, es un esquema PostgreSQL dedicado.

Tres formas de empezar:

- **Tabla vacía** — defines tú mismo los campos.
- **Importar** — CSV, Excel, o pegar directamente desde una hoja de cálculo. Los tipos de campo se deducen de los datos y puedes corregirlos antes de confirmar.
- **Descripción en lenguaje natural** — describe lo que gestionas («un pipeline de ventas con contactos, empresas y negocios») y el asistente propone un esquema. No se crea nada hasta que aceptas la propuesta.

## 2. Elegir bien los tipos de campo

El tipo de campo es lo que distingue una base de datos de una hoja de cálculo. Dedícale un minuto: las fórmulas, los filtros y las automatizaciones dependen de él.

| Lo que necesitas | Tipo de campo |
| --- | --- |
| Un valor de un conjunto fijo | Selección única |
| Un vínculo con otra tabla | Registro vinculado |
| Un valor extraído de la tabla vinculada | Búsqueda |
| Un agregado sobre registros vinculados | Resumen |
| Un cálculo por fila | Fórmula |

Los 28 tipos están disponibles en todos los planes, incluido el alojamiento propio.

## 3. Abrir una segunda vista

Una vista es una lectura de la tabla, no una copia. Cambiar de vista no duplica nada.

En una tabla con un campo de estado, añade una vista **Kanban** agrupada por ese estado. En una tabla con fechas, añade una vista **Calendario** o **Gantt**. Los filtros, las ordenaciones y las agrupaciones pertenecen a la vista: la vista «Mis elementos vencidos» de un compañero no cambia la tuya.

## 4. Invitar a tu equipo

**Compartir**, arriba a la derecha. Los permisos se definen a nivel de base (propietario, editor, comentarista, lector) y pueden restringirse por tabla y por campo.

La edición es colaborativa en tiempo real: dos personas pueden trabajar a la vez en la misma tabla, con cursores y cambios visibles al instante.

## Siguientes pasos

- [Tablas y campos](/es/docs/tables-and-fields) — los tipos de campo en detalle.
- [Automatizaciones](/es/docs/automations) — dispara acciones sobre tus datos.
- [Agentes de IA](/es/docs/ai-agents) — delega el trabajo recurrente.
