---
title: "Proveedores de IA locales expuestos por HTTPS"
date: 2026-11-07
translationKey: "local-ai-providers"
type: "improvement"
---

Puedes conectar un modelo que se ejecuta en tu propia máquina (Ollama, LM Studio o Unsloth) a un espacio de TblFlow alojado.

- **Exponer el servidor por HTTPS** y pegar su URL pública: `unsloth studio --secure` para Unsloth, un túnel para Ollama o LM Studio. En una instancia alojada, «localhost» designa el servidor de TblFlow, no tu máquina: el formulario te lo recuerda.
- **Clave Bearer**: una clave puede acompañar las llamadas a Ollama (detrás de un proxy con token) y a Unsloth.
- **Protección de red**: se rechaza una dirección que apunte a la red interna del servidor.
