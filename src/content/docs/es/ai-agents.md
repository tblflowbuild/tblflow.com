---
title: "Agentes de IA"
translationKey: "ai-agents"
description: "Configurar un agente de TblFlow: proveedor de modelo, alcance de las herramientas, memoria persistente en grafo, programación y propuestas que requieren aprobación antes de escribir nada."
section: "Guías"
order: 4
---

Un agente es un trabajador autónomo asociado a una base. Tiene un objetivo, un alcance de herramientas y una memoria, y produce propuestas en lugar de escrituras directas.

## Elegir el proveedor del modelo

El modelo se configura por base, con tus propias claves de API: OpenAI, Anthropic, Google Gemini, Azure OpenAI, DeepSeek, Mistral, Groq, Cohere, cualquier endpoint compatible con OpenAI, además de modelos locales mediante Ollama y LM Studio.

Con alojamiento propio y un modelo local, ningún dato de la base sale de tu infraestructura.

## Definir el alcance

El alcance es la parte que importa para la seguridad. Un agente solo recibe las herramientas que corresponden a su intención declarada: tabla, interfaz, automatización, agente, aplicación, datos de prueba. Las demás herramientas no figuran en su esquema, así que no puede llamarlas, y cada herramienta vuelve a comprobar su propia autorización en el momento de la ejecución.

Restringe también las tablas accesibles. Un agente de triaje de soporte no tiene por qué acceder a la tabla de nóminas.

## Propuestas

Cuando un agente quiere modificar la estructura o los datos, emite una **propuesta**: una vista previa del cambio, con un identificador. No se escribe nada hasta que la aceptas.

Puedes permitir escrituras directas en tablas concretas para trabajos de bajo riesgo (enriquecer un campo, aplicar una etiqueta). Decídelo tabla por tabla, nunca de forma global.

## Memoria

La memoria de un agente es un grafo de entidades y relaciones extraídas de sus ejecuciones anteriores, no un registro de conversación. Cada tarea recarga solo los fragmentos pertinentes: el agente recuerda sin que el coste de contexto crezca sin límite.

La memoria se puede inspeccionar y editar. Cuando un agente ha aprendido algo erróneo, corriges la entrada en lugar del prompt.

## Programación

Un agente puede ejecutarse bajo demanda, según una programación (cron) o ser llamado como un paso dentro de una [automatización](/es/docs/automations). Las ejecuciones mensuales de agentes dependen del plan.

## Prácticas que funcionan

- Un solo objetivo por agente. Un agente que «lleva el CRM» falla de forma difusa; tres agentes acotados fallan de forma legible.
- Empieza con propuestas para todo, y pasa a escrituras directas solo cuando hayas visto cómo son sus errores.
- Conserva el registro: cada ejecución guarda su plan, sus llamadas a herramientas y sus escrituras.
