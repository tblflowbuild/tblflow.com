---
title: "Espacios y ajustes del espacio"
translationKey: "space-settings"
description: "Crear y cambiar de espacio, ordenar bases en carpetas y recorrer los ajustes: miembros, dominios, IA, webhooks, correo, auditoría, RGPD y AI Act."
section: "Guías"
order: 17
---

Un **espacio** reúne bases y colaboradores. Esta página explica cómo moverse entre espacios, ordenar las bases en carpetas y qué contiene cada pestaña de los ajustes del espacio. Los ajustes que afectan solo a tu cuenta están en [Cuenta y seguridad](/es/docs/account-security).

## Espacios

El nombre del espacio actual aparece arriba a la izquierda. Haz clic en él para abrir un menú de dos columnas.

- **Columna derecha**: la lista de tus espacios, con un campo de búsqueda. El espacio actual lleva una marca de verificación, una estrella permite fijar un espacio, y **Crear un espacio** al final abre una confirmación con un campo de nombre. Si dejas el campo vacío, TblFlow usa el nombre propuesto. Una vez creado, el espacio se abre.
- **Columna izquierda**: las acciones del espacio: **Mapa del espacio**, **Mapa de procesos** (ver [Mapa de procesos](/es/docs/process-map)), **Crear una base**, **Plantilla**, **Importar**, **DocIndex**, **Conectores**, **Papelera** y **Ajustes del espacio**. **Importar** solo aparece para quien puede modificar el espacio, **Crear una base** está inactivo sin el permiso para crear bases, y **Ajustes del espacio** aparece para el propietario y para un rol al que se haya delegado algún ajuste.

La página de un espacio lista sus bases. El selector de orden ofrece **Reciente** y **Orden manual**: en orden manual, un rol autorizado a modificar las bases puede reordenarlas arrastrándolas.

La eliminación de un espacio se hace desde la pestaña **General** (ver más abajo), y la restauración desde la **Papelera**: ver [Importación, exportación y papelera](/es/docs/import-export-trash).

## Carpetas de bases

Las carpetas ordenan las bases de un espacio. Son **comunes**: todos los miembros del espacio las ven. Se muestran en la vista de lista.

| Acción | Cómo |
|---|---|
| Crear una carpeta | **Nueva carpeta** en la barra encima de la lista. |
| Crear una subcarpeta | Al pasar el cursor sobre una carpeta, el icono **Nueva subcarpeta**. |
| Renombrar | Doble clic en el nombre de la carpeta. |
| Ordenar una base | Arrastra la base hasta la carpeta. **Soltar aquí para salir de una carpeta** la devuelve a la raíz. |
| Eliminar | Al pasar el cursor, el icono **Eliminar la carpeta**, tras confirmar. |

Algunas reglas:

- Solo quien puede modificar el espacio (el propietario) gestiona las carpetas.
- Hay dos niveles como máximo: una subcarpeta no puede contener otra carpeta, y una carpeta que tiene subcarpetas no puede colocarse dentro de otra.
- Un espacio admite 500 carpetas como máximo. Dos carpetas del mismo nivel no pueden tener el mismo nombre.
- Eliminar una carpeta elimina también sus subcarpetas, pero **no las bases**: estas suben a la raíz.

## Abrir los ajustes del espacio

En el menú del espacio, haz clic en **Ajustes del espacio**. La ventana muestra los ajustes del espacio junto a tus ajustes personales.

Quién ve qué:

- el **propietario** ve todas las pestañas;
- un **delegado** (rol personalizado) solo ve las pestañas que se le han delegado, ver [Permisos y roles](/es/docs/permissions);
- el **DPO** designado del espacio ve las pestañas **AI Act** y **Datos personales (RGPD)** (la vista RGPD es de solo lectura para él);
- la pestaña **Marca** es legible para todos los miembros del espacio.

Cuatro acciones de ajuste se pueden delegar a un rol personalizado:

| Acción delegada | Pestañas que se abren |
|---|---|
| `space\|settings_notifications` | **Notificaciones** |
| `space\|settings_mail` | **Correo** |
| `space\|settings_domains` | **Dominios verificados** |
| `space\|settings_ai` | **Ajustes de IA** y **Búsqueda web** |

## General

El nombre del espacio se modifica haciendo clic sobre él; el identificador del espacio se muestra con un botón de copia. La **Zona de peligro** contiene **Eliminar el espacio**, reservado a quien tiene derecho a eliminar el espacio. Una confirmación ofrece **Mover a la papelera**.

En la nube, la eliminación se rechaza para un espacio con plan Esencial o Equipo: «Este espacio tiene una suscripción activa. Cancela la suscripción antes de eliminar el espacio.»

## Colaboradores

La pestaña lista los colaboradores del espacio, con su rol, y el botón **Invitar**. Se invita por correo (**Invitar por correo**, direcciones separadas con Intro) o por enlace (**Invitar por enlace**). Un colaborador del espacio tiene acceso a todas las bases de ese espacio. Los enlaces de invitación creados se listan y pueden eliminarse, y **Eliminar el colaborador** retira a una persona. Los roles y sus derechos se detallan en [Permisos y roles](/es/docs/permissions).

## Permisos

Esta pestaña gestiona las matrices de roles personalizados del espacio. Ver [Permisos y roles](/es/docs/permissions).

## Plan y consumo de IA

Estas dos pestañas, **Plan** y **Consumo de IA**, se describen en [Planes y límites](/es/docs/plans-limits).

## Dominios verificados

Un dominio verificado sirve una aplicación publicada en tu propia dirección.

1. **Añadir un dominio**, y luego escribe un nombre como `app.midominio.com`.
2. TblFlow muestra un registro DNS TXT que debes crear en tu proveedor de dominios: el nombre es `_tblflow-verify.` seguido del dominio, y el valor empieza por `tblflow-verify=`.
3. Haz clic en **Verificar**. El dominio pasa a **Verificado**.
4. Asocia el dominio a una aplicación desde la pestaña **Publicar** de su editor. Al visitar la raíz del dominio se mostrará entonces la aplicación, si su uso compartido está activado.

La prueba DNS se vuelve a comprobar al cabo de siete días: si el registro ha desaparecido, el dominio vuelve a no verificado y deja de servir la aplicación. **Quitar este dominio** lo elimina. Ver también [Compartir y publicar](/es/docs/sharing-publishing).

## Ajustes de IA

Esta pestaña configura la IA del espacio. El ajuste se aplica a todos sus colaboradores.

- **Proveedores**: añade tus propias claves de proveedores de modelos. Se cifran en reposo y nunca vuelven a mostrarse en texto claro. Cada proveedor se puede probar, modificar o eliminar.
- **Modelos y enrutamiento**: una vez disponible un proveedor, eliges el modelo de chat, los niveles (ligero, estándar, grande), los modelos de imagen, audio y vídeo, y el proveedor de embeddings.
- **Usar los modelos de la instancia por defecto**: desactivado, el espacio solo usa tus claves. Activado, puede consumir las del editor si no hay clave.
- **Usar los conectores de API en la aplicación completa**: desactivado, la generación de una aplicación completa no llama a ninguna API conectada al espacio.

### Añadir un proveedor o un modelo personalizado

Solo un propietario del espacio puede modificar estos ajustes. En **Proveedores**, **Añadir un proveedor LLM** abre un formulario:

- **Nombre**: el nombre mostrado del proveedor;
- **Tipo de proveedor**: OpenAI, Anthropic, Google, Azure, Mistral, DeepSeek, OpenRouter, Ollama, LM Studio, Unsloth, **OpenAI Compatible** y otros. Según el tipo elegido, se muestra un ejemplo de **URL base**;
- **Clave de API**: no aparece para LM Studio;
- **Modelos**: los nombres de los modelos que se ofrecerán. Según el tipo, **Cargar los modelos** (Ollama, LM Studio) o **Cargar desde models.dev** rellena la lista, y **Detectar** completa las características de los modelos ya introducidos.

Haz clic en **Probar**: TblFlow intenta cada modelo introducido. Cuando la prueba tiene éxito (**Prueba correcta**), aparece el botón **Añadir**. Un proveedor añadido se modifica con el icono de lápiz y se retira con el icono de papelera.

Para Ollama, LM Studio y Unsloth instalados en tu equipo: en una instancia de TblFlow alojada, «localhost» designa el servidor de TblFlow, no tu equipo. Expón tu servidor por HTTPS y pega su URL pública en **URL base**. Protege un Ollama expuesto mediante un proxy con token, e introduce ese token como **Clave de API**.

Las llamadas hechas con tu propia clave no consumen créditos de IA de TblFlow. Ver también [Agentes de IA](/es/docs/ai-agents).

## Búsqueda web

Permite al asistente y a los agentes del espacio buscar en la web. Introduce una clave de API de Tavily: se prueba antes de guardarse (**Clave válida** o **Clave no válida**). Sin clave propia, el espacio usa la búsqueda web de la instancia si existe, salvo que desactives **Usar la clave de la instancia por defecto**.

## Notificaciones

Reenvía las notificaciones del espacio a un canal de mensajería: **Slack**, **Microsoft Teams** y **Google Chat**. Pega la URL del webhook entrante de cada servicio. Esta URL es un secreto: no vuelve a mostrarse tras guardarse, y un campo rellenado la reemplaza.

Las notificaciones reenviadas son las menciones, los comentarios, la finalización de una exportación, el fallo de una automatización, el fallo de una generación de IA, la facturación y las notificaciones del sistema.

El interruptor **Usar los webhooks de la instancia por defecto** decide si se usan los webhooks de la instancia cuando el espacio no tiene los suyos. Haz clic en **Guardar** para aplicar los cambios.

## Correo

Configura el servidor SMTP por el que salen los correos de las **automatizaciones** del espacio: **Servidor SMTP**, **Puerto**, **Dirección del remitente**, **Nombre del remitente**, **Usuario** y **Contraseña**. La contraseña nunca se vuelve a mostrar. Los correos del sistema de TblFlow, como las invitaciones, no pasan por este servidor. El interruptor **Usar el SMTP de la instancia por defecto** tiene el mismo papel que para los webhooks. Ver [Automatizaciones](/es/docs/automations).

## Organigrama

Gestiona la estructura organizativa del espacio: **departamentos** en forma de árbol, sus miembros, y un organigrama calculado a partir del responsable indicado en la ficha de cada persona. Una ficha incluye el puesto, el responsable, la fecha de incorporación, el país, el estado de empleo, la fecha de salida, la dedicación y el lugar. La pestaña permite exportar, e importar un archivo CSV: haz clic primero en **Vista previa**; no se escribe nada hasta que confirmes.

## Marca

El nombre de la marca y el sistema de diseño (colores, tipografía, componentes, ilustraciones) guían las aplicaciones, interfaces y documentos generados para el espacio. Solo el propietario modifica la marca; los demás miembros pueden consultarla y exportar el `design.md`. **Completar con la marca de la instancia** toma lo que no hayas rellenado.

## Seguridad y auditoría

Reservado al propietario del espacio.

- **Registro del espacio**: quién hizo qué, con las columnas **Cuándo**, **Evento**, **Usuario**, **Recurso** y **Detalle**. Filtra por evento y por período (**Desde**, **Hasta**), y luego **Exportar a CSV**: la exportación respeta el filtro y se detiene en 5 000 líneas. Las entradas de más de seis meses se purgan automáticamente, salvo los eventos relacionados con solicitudes RGPD y borrados.
- **Registro detallado de llamadas MCP**: desactivado por defecto. Cada llamada de un asistente de IA (MCP) o de la CLI se registra siempre con la herramienta, el resultado, la duración y su autor. Activado, el registro conserva además los identificadores de los objetos afectados. Los contenidos (valores de celdas, consultas, instrucciones de agentes) nunca se guardan; solo su tamaño. Por defecto, estas entradas se borran a los 180 días. Ver [Servidor MCP](/es/docs/mcp-server).
- **Cuentas de servicio**: dan a un script o a una cadena de integración continua acceso al espacio sin depender de ninguna persona. Elige un rol (**Lector**, **Editor** o **Creador**), y luego emite un token con un acceso (**Solo lectura**, **Lectura y escritura de registros** o **Todo lo que permite el rol**) y una duración de validez. El token solo se muestra una vez. **Revocar** lo deja inutilizable de inmediato. Ver [CLI](/es/docs/cli).

## AI Act

Reservado al propietario y al DPO. La pestaña **Mis usos de la IA** inventaría los usos de IA creados en el espacio: campo de IA, agente, automatización con paso de IA, exposición MCP, búsqueda documental, chat y generación. Cada uso tiene una categoría de riesgo (**Prohibido**, **Alto riesgo**, **Transparencia**, **Mínimo**, **No evaluado**), un estado (**Al día**, **Por revisar**, **Revisión anual pendiente**) y la lista de lo que queda por corregir.

**Describir la finalidad** plantea cuatro preguntas breves y sugiere una categoría que puedes corregir. **Marcar como revisado** renueva la revisión. Las advertencias no bloquean nada. La pestaña **Funciones de IA de TblFlow** presenta las funciones de IA que ofrece TblFlow.

Este inventario ayuda a detectar los usos que conviene revisar; no sustituye tu propio análisis.

## Datos personales (RGPD)

Reservado al propietario, con una vista de solo lectura para el DPO. Cuatro pestañas:

- **Inventario**: clasifica cada campo (**No personal**, **Personal**, **Identificador directo**, **Sensible (art. 9)**) con una finalidad y un plazo de conservación en días. **Sugerir** propone una categoría, que nunca se aplica sin tu validación. **Registro art. 30 (CSV)** exporta el registro.
- **Registro**: las lecturas, exportaciones y modificaciones de tablas que contienen campos personales, y las solicitudes de las personas.
- **Solicitudes**: busca a una persona por correo, nombre o identificador en los campos de texto de todas las bases del espacio (3 caracteres como mínimo). Puedes **Exportar (CSV)** las filas encontradas o **Borrar la selección** (solo propietario). Las filas borradas van a la papelera; sus valores antiguos del historial se eliminan.
- **DPO**: el propietario designa a un DPO entre los miembros. El DPO consulta la vista de solo lectura y no tiene ningún derecho de modificación sobre las bases.

## Preproducción

Reservado al propietario, en los planes Equipo y Empresa. Una preproducción es una copia del espacio para probar cambios. Puedes **Crear la preproducción**, **Abrir la preproducción**, **Actualizar desde producción** (los cambios no publicados se pierden) y **Publicar en producción**. Solo se publican la estructura y la lógica a producción, nunca los datos: tablas, campos, vistas, automatizaciones, agentes y aplicaciones. Un elemento modificado en ambos lados se marca como conflicto y la publicación se bloquea.

## Extensiones

Lista los servidores MCP de terceros instalados en el espacio. Al instalarlos, una pantalla de consentimiento muestra los permisos solicitados. Después puedes activar o revocar esos permisos.
