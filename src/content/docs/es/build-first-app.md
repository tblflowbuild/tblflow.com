---
title: "Crea tu primera aplicación"
translationKey: "first-app"
description: "Publica una aplicación de negocio a partir de una base de TblFlow: generada con IA o construida a mano, con autenticación de visitantes, control de escritura de datos y un enlace público."
section: "Guías"
order: 5
---

Una base de TblFlow no solo se consulta en la cuadrícula: puede publicarse como una aplicación real, con sus propias páginas, su propia autenticación y su propio dominio. Esta página cubre las dos formas de construir una.

## Opción 1 — descríbela a la IA

En el panel de chat de la base, elige **Aplicación completa** y describe lo que quieres: «Un CRM con un panel de control, la lista de cuentas y el pipeline de oportunidades como Kanban». La IA propone una estructura de páginas y bloques a partir de tus tablas existentes. No se publica nada hasta que apruebas la propuesta y haces clic en **Publicar**.

Es el camino más rápido, y el que la página de inicio de TblFlow recorre en detalle en «Pipeline de generación».

## Opción 2 — constrúyela a mano

Desde la base, **Nueva interfaz**. Una interfaz se compone de páginas, y cada página de bloques: métricas numéricas, una lista o cuadrícula vinculada a una tabla, un cuadro de búsqueda, un Kanban. Cada bloque apunta a una tabla o vista existente, así que no duplicas datos, los pones en escena.

Añade un bloque, elige su origen (una tabla o una vista concreta, incluida una vista Kanban o Calendario ya filtrada) y después ajusta su diseño. La navegación de la izquierda se construye página a página, en el orden en que las creas.

## Publicación

El botón **Publicar**, en la parte superior de la interfaz, abre tres ajustes:

- **Contraseña** — si se deja vacía, cualquiera que tenga el enlace puede acceder a la aplicación. Si se define (o se genera), la contraseña es necesaria para entrar.
- **Permitir escritura de datos** — desactivado por defecto. Una aplicación de solo lectura no puede romper nada; actívalo solo si los visitantes necesitan realmente crear o editar registros desde la aplicación.
- **Cuentas de visitantes** — activa un sistema de cuentas con correo y contraseña propio de esta aplicación, aislado de las cuentas de TblFlow. Es lo que permite a un cliente externo iniciar sesión en su propio espacio sin tocar nunca tu cuenta de TblFlow.

Al hacer clic en **Publicar — generar el enlace público** se produce al instante una URL operativa. El plan Business añade un dominio personalizado.

## El código sigue siendo tuyo

Una aplicación publicada es código React y Tailwind real, no una caja negra: **Código → Exportar código** recupera todo. A la inversa, **Importar código** permite partir de una base existente para ajustarla a mano después de una generación con IA.

## Siguientes pasos

- [Automatizaciones](/es/docs/automations) — conecta flujos de trabajo a lo que hacen tus visitantes.
- [Agentes de IA](/es/docs/ai-agents) — delega una tarea recurrente en lugar de exponerla en la aplicación.
- [Tablas y campos](/es/docs/tables-and-fields) — revisa la estructura de los datos antes de publicarlos.
