---
title: "Crea tu primera aplicación"
translationKey: "first-app"
description: "Crea una aplicación de negocio desde una base de TblFlow, generada por IA o construida en el editor, y publícala con acceso público o solo por invitación."
section: "Guías"
order: 5
---

Una base de TblFlow no se limita a consultarse en la cuadrícula: puede publicarse como una aplicación real, con sus propias páginas, un enlace público o reservado a invitados, y un nombre de dominio propio. Esta página cubre las dos formas de construir una.

## Opción 1 — describirla a la IA

En el panel de chat de la base, elige el modo **Aplicación completa** y describe lo que quieres: «Un CRM con un panel de control, la lista de cuentas y el pipeline de oportunidades en Kanban». La generación avanza por etapas: primero las tablas y sus relaciones, después la interfaz, las automatizaciones, las vistas y datos de ejemplo, y por último un agente de IA. Cada etapa produce propuestas que aceptas antes de pasar a la siguiente, y puedes modificar la propuesta en curso mientras no hayas aceptado ninguna. No se publica nada hasta que haces clic en **Publicar**.

## Opción 2 — construirla en el editor

En la base, el menú de creación ofrece **Nueva aplicación** (si el chat de IA está activado y puedes crear aplicaciones). El editor se abre con tres pestañas, **Vista previa**, **Código** y **Logs**, y el chat de IA a la derecha: describe ahí tu aplicación y luego afínala.

Hacer clic en un bloque de la vista previa lo referencia en el chat. **Editar el texto directamente** corrige un texto mostrado sin pasar por una solicitud. **Historial** enumera las versiones de la aplicación; **Restaurar esta versión** vuelve a la que hayas seleccionado.

## Publicar

El botón **Publicar**, en la parte superior del editor, abre el panel **Publicación de la aplicación**. Ofrece dos modos de acceso, a elegir:

- **Solo por invitación — personas invitadas y miembros de la base** (opción por defecto). Cada persona inicia sesión con su cuenta de TblFlow, sin contraseña: enlace mágico o llave de seguridad.
- **Pública — cualquier persona que tenga el enlace.** Se pide una confirmación: quien reciba el enlace abre la aplicación sin cuenta y ve los datos que muestra.

**Permitir escritura de datos** está desactivado por defecto. Una aplicación de solo lectura no puede romper nada; actívalo solo si los visitantes necesitan realmente crear o modificar registros desde la aplicación.

Hacer clic en **Publicar — generar el enlace** produce una URL de inmediato. No hay contraseña para compartir ni cuenta de visitante propia de la aplicación. Los invitados, la personalización de la página, la despublicación y el dominio personalizado se describen en [Compartir y publicar](/es/docs/sharing-publishing).

## El código sigue siendo tuyo

Una aplicación publicada es código real de React y Tailwind, no una caja negra: **Código → Exportar código** recupera la totalidad. A la inversa, **Importar código** permite partir de una base existente para adaptarla a mano tras una generación con IA.

## Y después

- [Automatizaciones](/es/docs/automations) — conectar flujos de trabajo a las acciones de tus visitantes.
- [Agentes de IA](/es/docs/ai-agents) — delegar una tarea recurrente en lugar de exponerla en la aplicación.
- [Tablas y campos](/es/docs/tables-and-fields) — revisar la estructura de datos antes de publicarla.
- [Compartir y publicar](/es/docs/sharing-publishing) — invitados, dominio personalizado, enlaces de vista y de base.
