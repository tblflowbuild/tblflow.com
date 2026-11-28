---
title: "Vistas, filtros y fichas"
translationKey: "views-and-filters"
description: "Seis tipos de vista, filtros, orden, agrupaciones, modo personal, fichas, comentarios, pizarras y gráficos para leer y organizar las tablas."
section: "Guías"
order: 10
---

Una vista es una manera de leer una tabla: no copia ningún dato. Una misma tabla puede tener tantas vistas como quiera, cada una con sus filtros, sus ordenaciones y sus campos visibles.

## Los tipos de vista

El botón **+** a la derecha de las pestañas de vistas ofrece seis tipos. Una vista nueva toma el nombre de su tipo («Kanban», «Calendario»…), seguido de un número si ese nombre ya existe.

| Tipo | Qué muestra | Ajustes propios |
|---|---|---|
| **Vista en cuadrícula** | Los registros en filas, los campos en columnas. | Altura de fila, campos ocultos, formato condicional. |
| **Vista en galería** | Un registro por tarjeta. | Campo de portada, **Personalizar las tarjetas**. |
| **Vista Kanban** | Tarjetas apiladas en columnas. | **Elegir un campo de apilado**, **Ocultar el apilado vacío**, **Personalizar las tarjetas**. |
| **Vista de calendario** | Los registros colocados en sus fechas. | **Configuración del calendario**: campo de fecha de inicio, de fin, de título y de color. |
| **Vista Gantt** | Barras sobre una escala de tiempo. | **Parámetros**: campo de inicio, de fin, de título, de dependencia y de color. |
| **Vista de formulario** | Un formulario de entrada sobre la tabla. | Campos, páginas, condiciones de visualización, color del tema. |

Algunas precisiones:

- **Calendario y Gantt** requieren campos de fecha. El Gantt exige al menos un campo de fecha o de fecha/hora. Las barras se mueven con el ratón, y la escala pasa de **Día** a **Semana**, **Mes** o **Trimestre**.
- **Gantt**: el campo de dependencia suele ser un campo **Enlace a otro registro**. Las opciones **Fines de semana** y **Ruta crítica** se ajustan en la barra de herramientas. Si hay una dependencia circular, se indica, y la ruta crítica puede quedar incompleta.
- **Calendario y Gantt** muestran un panel **Por planificar**: lista los registros sin fechas. Arrastre uno a la vista para asignarle sus fechas.
- **Formulario**: usted elige los campos que se muestran, añade saltos de página y puede mostrar un campo solo si se cumple una condición. Un campo definido como **Obligatorio** no puede quitarse del formulario. Para publicar un formulario, consulte [Compartir y publicar](/es/docs/sharing-publishing).
- **Generar con IA**: en el mismo menú **+**, describa la vista que quiere y TblFlow la crea, con su tipo, sus filtros, sus ordenaciones y sus columnas.

## Gestionar las vistas

Un clic derecho en la pestaña de una vista abre su menú:

| Acción | Permiso requerido |
|---|---|
| **Renombrar**, **Bloquear** / **Desbloquear**, **Compartir** | Editar vistas |
| **Duplicar** | Crear vistas |
| **Eliminar** | Eliminar vistas |
| **Descargar csv** (vistas en cuadrícula) | Exportar la tabla |
| **Añadir a favoritos** / **Quitar de favoritos** | Sin permiso especial |

Los roles Propietario, Creador y Editor pueden crear, modificar y eliminar vistas. Los roles Comentarista y Lector no pueden. Consulte [Permisos y roles](/es/docs/permissions).

Una vista **bloqueada** muestra un candado. Para cambiar su visualización, hay que pasar al modo personal (véase más abajo).

## Filtrar, ordenar, agrupar, ocultar

Estos ajustes se encuentran en la barra de herramientas de la vista.

**Filtrar.** **Añadir una condición** añade una fila: un campo, un operador y un valor. **Añadir un grupo de condiciones** anida condiciones, hasta tres niveles como máximo. Usted elige si los registros deben **cumplir todas las condiciones** o **una condición**.

- Los operadores dependen del tipo de campo: «es», «contiene», «está vacío», «es mayor que», «es uno de»…
- En un campo de usuario, el valor **Yo (usuario actual)** sigue a la persona que mira la vista.
- En una fecha, puede filtrar por valor relativo (hoy, ayer, la semana pasada, este mes, un número de días pasados o futuros) o por fecha exacta.
- Una condición que deja de ser válida, por ejemplo porque se eliminó una opción de lista, se ignora y se marca con una advertencia.

**Ordenar.** **Ordenar** admite varios campos; **Añadir otro orden** añade uno más. La opción **Ordenar automáticamente los registros** mantiene el orden actualizado. Cuando está activa, no se pueden reordenar las filas arrastrándolas manualmente.

**Agrupar.** **Agrupar** agrupa las filas por un campo, y **Añadir un subgrupo** añade un nivel.

**Campos ocultos.** Esta lista oculta campos en la vista sin eliminarlos. **Mostrar todo** y **Ocultar todo** actúan de una vez. El campo principal no puede ocultarse ni eliminarse.

**Altura de fila.** Cuatro niveles: corta, media, alta, muy alta.

**Formato condicional.** Las reglas colorean una celda o una fila completa (texto o fondo). La opción **Aplicar a todas las vistas** extiende la regla a las demás vistas de la tabla.

**Accesos rápidos.** En la cuadrícula, **Asignado a mí** y **Ocultar los terminados** se añaden al filtro de la vista, sin escribir nada en ella. Solo aparecen si la tabla tiene un campo de usuario, o un campo de «terminado» (casilla de verificación o lista en la que una opción significa terminado).

## Modo colaborativo y modo personal

Por defecto, una vista es **colaborativa**: los filtros, los órdenes, los grupos, los campos ocultos y la altura de fila se guardan en la vista. Cuando alguien los modifica, todos los miembros que abren esa vista ven el cambio.

El botón **Personal** de la barra de herramientas cambia esto: la configuración solo se aplica entonces a usted. Se conserva en su navegador, no en el servidor. Al salir del modo personal, puede elegir descartarla (**Confirmar la salida**) o aplicarla a todo el mundo (**Salir y sincronizar**). Esta segunda opción requiere el permiso para editar vistas.

Es también la única manera de ajustar la visualización de una vista bloqueada.

## La ficha de registro

Cada fila se abre en una ficha: una página que muestra todos los campos del registro. El menú **Posición** la coloca en el centro, en un panel lateral o en pantalla completa, y los botones **Ficha anterior** y **Ficha siguiente** pasan de una fila a otra.

El encabezado de la ficha ofrece un botón **Copiar la URL del registro**, para compartir un enlace directo, y un botón para mostrar el historial. Su menú permite **Ver en la tabla**, **Imprimir / PDF**, **Duplicar el registro** y **Eliminar el registro**.

Los campos ocultos en la vista siguen accesibles mediante **Mostrar N campos ocultos**.

**Diseño.** El menú **Diseño** ajusta el orden de los campos, su ancho (media anchura o anchura completa) y las secciones plegables. Puede crear varios diseños con nombre. Los cambios valen para todos los usuarios de la vista.

**Historial.** El historial muestra las modificaciones con el valor **Antes** y el valor **Después**. Se filtra por intervalo de tiempo, por campo y por usuario, y se muestra como tabla (**Ver en tabla**) o como frases (**Ver en frases**). El menú de la tabla también ofrece **Historial de los registros de la tabla**, reservado a los roles Propietario, Creador y Editor.

## Comentarios

La pestaña **Comentarios** de la ficha abre la conversación del registro. Un comentario puede contener un enlace, una imagen, una mención, un emoji, un mensaje de voz o un clip de pantalla. Puede elegir recibir notificaciones de **todos los comentarios** o solo de los que le afectan. La pestaña **Actividad** muestra el historial del registro; solo aparece para los roles que pueden modificar registros.

Escribir un comentario requiere el permiso para comentar: los roles Propietario, Creador, Editor y Comentarista lo tienen; el rol Lector no.

**Mensaje de voz y clip de pantalla.** La barra de herramientas del editor de comentarios ofrece **Grabar un mensaje de voz** y **Grabar un clip de pantalla**. El navegador pide acceso al micrófono o a la pantalla; si se rechaza, aparece el mensaje «Acceso al micrófono o a la pantalla denegado.». Durante la grabación se ve el tiempo transcurrido, y **Detener** finaliza la toma, que se envía y se adjunta al comentario. La duración máxima es de 5 minutos para un mensaje de voz y de 3 minutos para un clip de pantalla; al superarla, la grabación se detiene sola.

**Pedir ayuda al asistente IA.** En un comentario, escriba **@** y luego elija **IA** (**Asistente IA** en la lista de menciones): el asistente de la base lee el registro y responde con un comentario firmado «Asistente IA». Se crea en la primera llamada, dentro de la base. Puede buscar y leer registros, tablas, su estructura y la actividad de un registro, y consultar la base de conocimiento. También puede crear o modificar registros, pero cada escritura está sujeta a una aprobación humana (véase **Validación de escrituras** en [Agentes IA](/es/docs/ai-agents)). Su respuesta se trunca a 4 000 caracteres. La cuota de IA y los derechos aplicables son los de la persona que lo mencionó; si la IA se rechaza (cuota alcanzada, oposición al tratamiento), el comentario de respuesta lo indica. Si el agente «Asistente IA» está desactivado en la base, @IA ya no responde.

## Paneles

La entrada **Paneles** de la barra lateral de la base abre una página que reúne los gráficos e indicadores. Lista **Sus paneles**, es decir, las vistas de tipo bloque gráfico de las tablas de la base. Para crear uno, **Crear con IA** lanza el chat con una petición libre, y la sección **Plantillas** propone tres puntos de partida: **Seguimiento de proyecto**, **CRM** y **Costes de cartografía**. Esta entrada es visible con el derecho a leer la base.

## Pizarras

Una pizarra es un recurso de la base, junto a las tablas: un espacio libre para pensar antes de estructurar. Se crea desde el menú **+** de la barra lateral, en la sección **Otros recursos**, con **Nueva pizarra**. Esto requiere el derecho a modificar la base: roles Propietario y Creador.

- Las herramientas: **Selección**, **Post-it**, **Texto**, **Marco**, **Registro**, **Lápiz**, **Imagen**, **Comentario**. La herramienta **Registro** coloca en la pizarra una tarjeta vinculada a un registro existente.
- Seis plantillas de inicio: Lluvia de ideas, Definición del proyecto, Proceso, Diseño de base, Retrospectiva, Organigrama. También puede partir de un lienzo vacío.
- **Aprovechar esta pizarra** convierte la selección en registros de una tabla. En el caso de los marcos, también propone tablas, que usted aprueba antes de cualquier creación.
- **Exportar** genera una imagen PNG o un documento PDF.

## Gráficos

Un gráfico se coloca en el **Panel de plugins**, junto a la tabla, sin crear una vista. El botón del panel (un icono con forma de pieza de puzzle) se encuentra en la barra de herramientas de la tabla.

1. Abra el panel. Si está vacío, haga clic en **Crear un panel de plugin**, póngale un nombre y valide con **Confirmar**.
2. En el panel, haga clic en **Añadir un plugin**, y luego en **Instalar** frente a **Gráfico**.
3. Una primera pantalla, **Configuración de consulta de datos**, le pide construir la consulta que alimenta el gráfico, con los bloques **De**, **Seleccionar**, **Donde**, **Agrupar por**, **Agregación**, **Ordenar por**, **Límite**, **Desplazamiento** y **Unir**. Haga clic en **Guardar**.
4. Elija después el **Tipo de gráfico** en el panel de la derecha: **Barras**, **Línea**, **Sectores**, **Área** o **Tabla**.

Los ajustes dependen del tipo:

- **Barras, Línea, Área**: **Eje X**, **Eje Y**, **Añadir otra serie**, **Añadir una división de serie**, **Apilar**, **Línea de objetivo**, **Rango** (**Mínimo**, **Máximo**), **Estilo de línea**, **Posición del eje Y**;
- **Sectores**: **Dimensión**, **Medida**, **Mostrar el total**;
- **Mostrar las etiquetas de valores en el gráfico** y **Mostrar la leyenda** para los tipos que las tienen.

El encabezado de cada gráfico ofrece **Expandir**, **Duplicar**, **Renombrar** y **Eliminar**. **Renombrar** y **Eliminar** requieren el derecho a modificar la tabla. El botón **Actualizar la consulta** reabre la configuración de la consulta, y **Recargar la consulta** vuelve a leer los datos.
