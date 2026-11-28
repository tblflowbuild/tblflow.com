---
title: "Chat IA"
translationKey: "ai-chat"
description: "Usar el chat IA de TblFlow: menciones con @, propuestas validadas antes de escribir, apps completas, skills de navegador y base de conocimiento."
section: "Guías"
order: 14
---

El chat IA es un panel lateral, a la derecha de la base. Allí haces preguntas sobre tus datos, o pides al asistente que cree tablas, vistas, automatizaciones, interfaces o agentes. Para una petición de modificación, el asistente no hace nada por sí mismo: prepara una **propuesta** que aceptas o rechazas.

## Abrir el panel

El botón **Chat IA** está en la barra de herramientas de la vista. Un segundo botón con el mismo nombre aparece en la barra lateral de la base, para las personas que pueden modificar la base. El panel está cerrado en la primera visita; después se conserva tu última elección (abierto o cerrado).

Mientras la conversación esté vacía, el panel muestra sugerencias (por ejemplo, «Crear un CRM para mí»). Al hacer clic en una sugerencia, se copia en la entrada sin enviarse: puedes modificarla antes de validarla.

Intro envía el mensaje, Mayús + Intro pasa a la línea siguiente. Un mensaje puede contener hasta 100 000 caracteres.

## Conversaciones

- **Nueva conversación** vacía el panel y empieza desde cero.
- **Historial** enumera tus conversaciones (las cincuenta más recientes) y permite buscarlas por título. Solo ves tus propias conversaciones, vinculadas a la base abierta.

## Mencionar una tabla, una vista o un campo

Escribe `@` en la entrada para abrir un selector. Propone tres grupos: **Tablas**, **Vistas** y **Campos**, tomados de las bases del espacio que puedes leer. Elegir un objeto lo inserta en el mensaje en forma de chip, y entonces el asistente sabe de qué objeto estás hablando.

Algunas reglas:

- Solo las tablas, las vistas y los campos pueden mencionarse. Los registros, las automatizaciones o las interfaces no.
- Un mensaje admite como máximo 20 menciones.
- Pegar en la entrada la dirección de una tabla de TblFlow inserta directamente una mención de esa tabla.
- El servidor vuelve a comprobar cada mención: el objeto debe pertenecer al espacio y debes tener derecho a leer su tabla. Si no, la mención se rechaza con el mensaje «Esta mención no es accesible: elimínela o elija un objeto de la lista».
- Las menciones no se transmiten cuando conversas con un agente concreto.

## Ajustar la entrada

La barra situada debajo del área de texto agrupa los ajustes del mensaje.

| Ajuste | Efecto |
|---|---|
| **Tipo de resultado** | Limita lo que el asistente puede proponer: **Tabla**, **Interfaz**, **Automatización**, **Agente** o **Datos ficticios**. Sin elección, aparece «A elección de la IA». Salvo **Tabla**, los tipos exigen que ya exista una tabla en la base. |
| Modelo (icono del proveedor) | Abre la lista de modelos disponibles, agrupados por proveedor. Pasa el cursor sobre el icono para desplegarla. La lista depende de los modelos configurados para la base. |
| **Razonamiento** | **Rápido** (respuestas más rápidas, menos créditos), **Normal** (ajuste habitual del modelo) o **Profundo** (el modelo razona más, hasta 8 000 tokens de razonamiento adicionales, por lo que consume más créditos). **Profundo** está reservado a los planes Equipo y Enterprise. |
| **Búsqueda web** | Botón que se activa para la conversación en curso. Permanece deshabilitado mientras la búsqueda web no esté configurada. |
| **Adjuntar archivos** | Imágenes y PDF, hasta 10 por mensaje. El botón está deshabilitado si el modelo elegido no admite archivos. |
| **Dictar un mensaje** | Entrada por voz, mediante el reconocimiento de voz de tu navegador. El botón solo aparece si el navegador lo ofrece. |

Un indicador **Ventana de contexto** estima la parte de la memoria del modelo que ya usa la conversación.

El uso de la IA se descuenta en créditos; el nivel de razonamiento influye en ese consumo. Los volúmenes incluidos en cada plan figuran en [Planes y límites](/es/docs/plans-limits).

## Lo que puede hacer el asistente

**Leer, sin validación.** El asistente lee directamente la estructura del espacio, el esquema de las tablas, los registros, calcula agregados y busca en la base de conocimiento. También puede generar un archivo Excel, Word, PowerPoint o PDF.

**Proponer, con validación.** Para modificar algo, emite una propuesta que aparece en el chat en forma de tarjeta. Las propuestas cubren, entre otras cosas:

- crear una base, una tabla, una vista o una carpeta;
- renombrar una tabla o un campo, vincular dos tablas;
- crear o modificar un registro;
- eliminar un campo;
- crear una interfaz, una automatización o un agente, generar el código de una aplicación;
- crear o modificar un documento de la base de conocimiento, vincular dos documentos.

En cada tarjeta lees la vista previa y después haces clic en **Aceptar** o **Rechazar**. No se escribe nada antes de la aceptación, y la aceptación vuelve a comprobar tus derechos: el asistente no puede hacer lo que tú no tienes derecho a hacer.

Una propuesta de eliminación exige una confirmación explícita (**Confirmar la eliminación**). La tarjeta indica si el recurso puede restaurarse desde la papelera y qué depende de él (campos vinculados o calculados, vistas, automatizaciones, interfaces).

**Lo que no hace.** El chat no tiene herramienta para eliminar registros ni tablas. Una simple pregunta, por ejemplo «¿Cómo creo una tabla?», recibe una respuesta escrita y no desencadena ninguna propuesta.

Los agentes y sus propuestas se describen en [Agentes IA](/es/docs/ai-agents).

## Crear con IA fuera del chat

Dos entradas abren una ventana de generación breve, sin pasar por el panel:

- **Crear con IA**, en el menú de añadir una tabla de la barra lateral, para una tabla;
- **Generar con IA**, en la parte superior del editor al crear un campo: la ventana permite entonces elegir entre un **Campo** y un **Botón**.

Describes lo que quieres y, al pulsar **Generar**, aparece una vista previa. No se crea nada hasta que hagas clic en **Crear**; **Modificar la petición** vuelve a la entrada.

## Generar una aplicación completa

En la entrada, **Aplicación completa** pasa el chat al modo de generación. Describes la aplicación, y el asistente la construye por pasos que validas:

1. el análisis de la petición, y después las **Tablas**;
2. las **Relaciones**;
3. la **Interfaz**, las **Automatizaciones**, las **Vistas**, los totales y los **Datos ficticios**;
4. la vinculación y la comprobación de los datos, y después un **Agente IA**.

Cada paso produce propuestas. **Aceptar todo** las valida de una vez, y **Modificar** permite ajustar el paso en curso mientras no se haya aceptado ninguna propuesta. La opción **Auto** deja que la IA acepte y encadene los pasos siguientes; se detiene si hay un fallo.

Al final, un informe indica lo que se ha creado y señala las automatizaciones que siguen inactivas: no se disparan mientras no las actives. Para lo que sigue (publicación, dominio), consulta [Crear tu primera aplicación](/es/docs/build-first-app).

## Asistente de proyecto

En el menú de añadir una tabla, en la raíz de la base, **Asistente de proyecto** instala en la base tres tablas, **Personas**, **Proyectos** y **Tareas**, además de un agente llamado «Asistente de proyecto». Debes tener derecho a crear tablas en la base.

El agente está programado de lunes a viernes a las 7:30. Prepara el orden del día de las reuniones del día, propone hitos de vencimiento en la agenda y enumera las tareas sin responsable. Sus escrituras (actualización de un proyecto, creación de un evento de agenda) siempre pasan por una aprobación. Volver a instalarlo no vuelve a crear las tablas que ya existen.

## Skills de navegador

Un skill de navegador registra un recorrido por un sitio web y luego lo reproduce bajo demanda. Se crea con **Nuevo skill de navegador**, en «Otros recursos» del menú de añadir. Esta función no está activada en todas las instancias.

1. **Abrir la sesión**: un navegador remoto se inicia en el servidor; ves su pantalla en directo y haces clic y escribes en ella. Una sesión dura 15 minutos como máximo y se cierra tras 2 minutos de inactividad.
2. Ve hasta la página de inicio y haz clic en **Grabar**. Cada clic, pulsación y desplazamiento se convierte en un paso. **Detener** termina la grabación.
3. **Reproducir** vuelve a ejecutar los pasos en un navegador separado y muestra un informe: pasos ejecutados, o paso fallido.

Alrededor de la grabación:

- **Pasos** enumera los pasos, permite eliminar uno o corregir un texto introducido.
- **Credenciales** guarda una contraseña, un código 2FA o una clave de seguridad. Se cifran, se reproducen por referencia y nunca se devuelven a la página ni se transmiten al modelo de IA. Una credencial está vinculada a la base: cualquier persona que pueda modificarla puede usarla para iniciar sesión, sin ver su valor.
- **Comentar** activa el micrófono para explicar tus gestos. Se conserva el texto, no el sonido, hasta la validación del skill, y después se elimina.
- **Analizar** extrae de la grabación un skill: un objetivo, entradas, reglas de negocio, cada una acompañada de la frase de la que procede. Revísalas y luego haz clic en **Validar el skill**. Volver a grabar lo invalida.
- **Reproducir con datos** aplica el skill validado a valores que proporcionas, en lugar de repetir los gestos tal cual.

Para lanzar un skill desde una automatización, añade el paso **Controlar un sitio web** (consulta [Automatizaciones](/es/docs/automations)). Exige un skill validado y la autorización para actuar sin supervisión, concedida en el propio skill.

## Base de conocimiento

La biblioteca de documentos del espacio está disponible con el icono «DocIndex» de la barra lateral del espacio. Allí creas documentos y carpetas, o importas archivos PDF, DOCX, TXT, MD y CSV (50 MB como máximo para un PDF, 25 MB para los demás). Importar requiere el derecho a modificar el espacio. Cada documento muestra su estado: **Indexando…**, y luego **Indexado**.

La búsqueda ofrece tres modos: **Semántica**, **Palabras clave** e **Híbrida**. La búsqueda semántica supone que hay un proveedor de embeddings configurado para el espacio; sin él, la búsqueda se limita a las palabras clave, y el chat responde que no hay ningún proveedor configurado.

El asistente del chat consulta esta base cuando lo pides. Los agentes disponen de la herramienta **Buscar en la base de conocimiento** ([Agentes IA](/es/docs/ai-agents)), y los asistentes externos de la herramienta `search_knowledge` del [servidor MCP](/es/docs/mcp-server).
