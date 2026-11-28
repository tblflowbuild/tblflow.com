---
title: "Mapa de procesos"
translationKey: "process-map"
description: "Crear el mapa de procesos de un espacio, dibujar procesos, leer rupturas y costes estimados, comparar con lo real y seguir revisiones e informes."
section: "Guías"
order: 5
---

El mapa de procesos es una página de tu espacio donde dibujas quién hace qué y con qué herramientas, y después lees las rupturas y los costes estimados. Un proceso se puede diagnosticar gratis, con sus costes estimados visibles, sin el botón «Reemplazar», sin informe mensual, sin comparar lo estimado con lo real y sin biblioteca de procesos tipo. Estas funciones siguen visibles, bloqueadas. El mapa completo requiere el plan Esencial o superior.

## Abrir o crear el mapa

Cada espacio tiene como máximo un mapa de procesos. Se accede con el icono **Mapa de procesos** del grupo de botones arriba a la derecha del espacio, con la entrada **Mapa de procesos** del menú que se abre al pulsar el nombre del espacio, o con el acceso directo **Cartografía** presente en cada base.

Cuando el espacio todavía no tiene mapa, **Crear el mapa de este espacio** abre la pregunta **¿Cómo empezar?**:

- **Con ejemplos**: procesos, pasos y traspasos de ejemplo, para ver el modelo en acción.
- **Vacío**: solo se conservan el catálogo de herramientas y las capacidades de TblFlow; tú escribes tus propios procesos.
- **Ejemplo por sector**: un conjunto de ejemplo para Servicios y consultoría, Comercio y e-commerce, Industria y logística, o Contabilidad y jurídico. Las tasas son ficticias, hay que sustituirlas por las tuyas. Esta opción está reservada a los propietarios del espacio.

El mapa se apoya en una base normal del espacio (procesos, pasos, herramientas, roles, responsabilidades, objetos de datos, traspasos de datos): puedes filtrar y exportar sus tablas como las de cualquier otra base.

## Describir los procesos

El lienzo se desplaza arrastrándolo y se amplía con la rueda del ratón. Haz clic en un paso para seleccionarlo; doble clic o Espacio abre su ficha. Intro crea el paso siguiente, Tab una rama y F2 lo renombra. La barra de herramientas que aparece encima del paso seleccionado ofrece **Abrir**, **Probar**, **Reemplazar**, **Renombrar**, **Duplicar** y **Eliminar**.

Un mapa vacío propone cuatro puntos de partida: **Importar un documento**, **Responder al asistente**, **Conectar mis herramientas** o **Dibujarlo yo mismo**. Para la importación, añade un PDF, un documento de Word, una hoja de cálculo de Excel, un CSV, un texto o una imagen (foto de una pizarra, esquema). La IA prepara los procesos, pasos, responsables, herramientas y traspasos de datos; no se añade nada hasta que aceptes (**Añadir a la base** o **Añadir todo**).

Cada paso tiene un ejecutor: **Persona**, **Automatización**, **Agente de IA**, **Externo** o **Equipo**.

### Ficha del paso

La ficha agrupa cuatro bloques:

- **Detalles**: estado, tipo, ejecutor, herramientas y roles.
- **Coste y tiempo**: duración, frecuencia, coste (visible solo si puedes leer los importes) y pista de mejora.
- **Datos**: las entradas y salidas del paso.
- **Notas**.

En la parte superior, las flechas pasan al paso anterior o siguiente, **Copiar enlace** copia la dirección de la ficha y el menú **Más acciones** ofrece **Todas las columnas**. **Eliminar paso** pide confirmación.

Las responsabilidades se introducen en la tabla **Responsabilidades** (paso, rol, tipo). El tipo es **Responsable**, **Aprobador**, **Consultado** o **Informado**.

### Conectar tus herramientas

**Conectar mis herramientas**, en el menú **Más acciones**, conecta el mapa con Make, n8n, HubSpot o Zapier. TblFlow solo lee: no escribe nada en esas herramientas. Cada escenario de Make se convierte en un proceso y cada módulo en un paso; lo mismo ocurre con los flujos de n8n. HubSpot alimenta los objetos de datos. En el caso de Zapier, un webhook envía al mapa los errores de tus zaps. El mapa se actualiza cada 15 minutos. **Desconectar** detiene las sincronizaciones; los pasos ya cartografiados se mantienen. Esta función requiere el plan Esencial o superior.

### Actualizar la presencia de TblFlow

**Actualizar la presencia de TblFlow** vuelve a leer tu espacio, enumera los recursos de TblFlow que ya existen y sugiere los pasos y herramientas que cubren. Aceptas cada sugerencia, o **Aceptar todo**. TblFlow solo sugiere cobertura para un paso vinculado a una automatización de TblFlow o que lleva el mismo nombre que un recurso de TblFlow. Un paso cubierto lleva la insignia **Cubierto por TblFlow**.

### Adaptar el vocabulario a tu sector

En los ajustes del lienzo, sección **Vocabulario**, un preajuste adapta las palabras «cliente» y «pedido» a tu actividad:

| Preajuste | Cliente | Pedido |
|---|---|---|
| Servicios y consultoría | Cliente | Misión |
| Comercio y e-commerce | Cliente | Pedido |
| Industria y logística | Cliente | Orden de fabricación |
| Contabilidad y jurídico | Cliente | Expediente |
| Salud y cuidados | Paciente | Expediente |

Solo cambian las palabras mostradas: las tablas y los campos no se renombran.

## Elegir una lectura

El selector **Lente** cambia la lectura sin cambiar el mapa. Ofrece seis lentes:

- **Quién hace qué**: el ejecutor y el responsable de cada paso.
- **Costes**: coste humano (tarifa por rol), coste de las herramientas (suscripciones, llamadas a API, tokens de IA), ahorros posibles y ganancia obtenida. Estas cifras son **estimaciones** que introduces, no mediciones. Los importes están reservados a los propietarios de la base: sin ese derecho, la lente no aparece.
- **Rupturas**: cada paso muestra su número de rupturas, con un botón **Corregir**. Las causas reconocidas son la reintroducción manual entre herramientas, un dato sin fuente maestra, ningún responsable, varios responsables, la ausencia de paso siguiente, un dato leído que ningún paso produce, una automatización fallida y la última ejecución fallida del flujo de TblFlow.
- **Datos**: los objetos de datos y las herramientas que los producen o consumen. Una corona marca la herramienta de fuente maestra, y cada herramienta aún no reemplazada lleva un botón **Reemplazar**.
- **Conectores**: los traspasos de datos entre herramientas, con su modo (API, conector de TblFlow, archivo o exportación, reintroducción manual) y su frecuencia. El **Relato de los traspasos** los reproduce uno a uno. Para una reintroducción manual, **Simular con** muestra el efecto de un conector sin escribir nada; **Aplicar** escribe en el traspaso tras confirmación.
- **Síntesis**: una vista general de todo el mapa (ver más abajo).

La franja del lienzo recuerda el coste, las rupturas, los ahorros posibles, el reparto de ejecutores, la ganancia obtenida y la parte cubierta por TblFlow. También señala los pasos sin responsable y los pasos sin duración: son faltas de datos, no rupturas. **Completar** lleva al siguiente paso por rellenar. **Presentar** oculta los importes y la lente Costes.

## Leer la Síntesis

La lente **Síntesis** agrega todo el mapa. Muestra indicadores (coste por mes y por año, ahorros posibles, ganancia obtenida, cobertura de TblFlow, horas liberadas, tasa de automatización, coste de herramientas, retorno de la inversión, rupturas, pasos sin responsable, completitud), el reparto de ejecutores, una tabla por dominio y tres clasificaciones: los procesos más costosos, los de mayores ahorros y los que tienen más rupturas. Los filtros **Dominio** y **Estado** restringen la vista. Un indicador sin datos invita a completar el mapa: nunca muestra cero en su lugar.

Los importes están reservados a los propietarios de la base. El retorno de la inversión se calcula a partir del **Coste mensual de TblFlow**, introducido en la sección **ROI** de la **Configuración del mapa**.

El bloque **Evolución** compara el estado actual con una instantánea: se toma una instantánea mensual el día 1 a las 8 h (hora del servidor), y los propietarios pueden tomar una en cualquier momento con **Congelar el estado actual**. La comparación abarca todo el mapa, sin tener en cuenta los filtros.

**Exportar** ofrece **Exportar a PDF** (impresión de la vista) y **Exportar a CSV**. El CSV tiene una línea por proceso: proceso, dominio, estado, número de pasos, rupturas, completitud y cobertura de TblFlow, además del coste mensual, los ahorros posibles y la ganancia obtenida para un propietario. Está codificado para Excel en configuración francesa (UTF-8, separador punto y coma) y abarca todo el mapa, sin tener en cuenta los filtros de la vista. Está limitado a 5 000 procesos; por encima de ese número, TblFlow lo indica.

## Estimar los costes del mapa

El **Presupuesto** del mapa (botón **Presupuesto** de la franja) reúne lo necesario para estimar los costes: **Por completar**, **Tarifas por hora**, **Herramientas** y **Oportunidades**. No se proporciona ningún valor: todo viene de ti, y no se escribe nada sin tu confirmación.

- **Tarifas por hora**: introduce una tarifa horaria directa o un salario anual con cargas, que TblFlow convierte con un coeficiente de cargas y un número de horas productivas al año. También puedes proponer una tarifa diaria facturable (TJM).
- **Herramientas**: el precio mensual por licencia (suscripción), el coste por llamada (API) o el precio por millón de tokens (modelo de IA). Las herramientas se acercan al catálogo SaaS.
- **Oportunidades**: lo que TblFlow puede reemplazar total o parcialmente, lo que una automatización o un agente puede asumir, y la palanca de mejora de cada paso (automatizar, suprimir el paso, reducir errores, renegociar).

Las tarifas y los precios solo son legibles para los propietarios. La **Configuración del mapa** (icono **Configuración del mapa** de la barra de herramientas) agrupa los costes, los campos leídos, el vocabulario, las frecuencias, las listas de valores, los umbrales y el ROI. Solo los propietarios del espacio la modifican. Los umbrales fijan el plazo de revisión en días y la completitud mínima de una ficha.

## Reemplazar

En un paso o una herramienta, **Reemplazar** da a la IA el contexto del mapa. Propone un reemplazo por TblFlow, que eliges entre **Base + interfaz**, **Automatización**, **Agente de IA** y **Tarea web (RPA)**; la opción sugerida está señalada. Una herramienta SaaS se convierte en una base y una interfaz, un conector en una automatización, un paso humano en un agente, y una entrada en un sitio web en una reproducción en el navegador (Computer Use).

No se crea nada antes de tu validación. Una automatización se crea **inactiva**, y la programación de un agente también: revísalas y actívalas tú mismo; nada se ejecuta antes. Para una herramienta SaaS, eliges una base nueva (TblFlow propone primero la división, que revisas) o una base existente (la creación se desarrolla paso a paso en el asistente, donde validas cada paso). El mapa indica el estado del reemplazo: **Reemplazo propuesto**, **Reemplazado · creado inactivo**, y luego **Reemplazado por TblFlow** una vez que el recurso está activo. Solo este último estado cuenta en la ganancia obtenida.

### Evaluar la reemplazabilidad

**Reemplazabilidad IA** clasifica cada paso y cada herramienta del mapa: tabla, interfaz, automatización, agente de IA, navegador (RPA) o no reemplazable. Un modelo de IA explica cada clasificación, con un nivel de confianza y una ganancia estimada; las propuestas inciertas se marcan **Por confirmar**. **Aceptar** abre **Reemplazar** con el modo propuesto, **Ignorar** lo descarta. No se crea nada antes del botón **Crear** de esa ventana. El análisis abarca 250 elementos como máximo.

### Probar un paso

**Probar** lanza un ensayo en blanco de la automatización vinculada al paso: no se envía ni se escribe nada, y la ventana indica el estado de cada paso de la automatización. La prueba solo es posible si el campo «Fuente automatización» del paso designa una automatización de TblFlow; de lo contrario, el botón queda inactivo e indica por qué.

## Seguir las revisiones

Cada proceso lleva un **propietario**, una fecha de **última revisión**, una fecha de **próxima revisión**, un **estado** (Borrador, En revisión, Validado o Archivado en el modelo), un campo «Aprobado por» y una versión. Cada paso lleva una **ficha de procedimiento**: un documento de tipo Canvas (ver más abajo). La documentación y el esquema viven en el mismo lugar: se corrigen juntos.

## Ser avisado de los procedimientos caducados

Las alertas se activan desde el menú **Más acciones** del lienzo (entrada **Alertas de caducidad**) y requieren una base V2. Como la alerta es una automatización de la base, hay que poder modificar las automatizaciones de la base. Cada lunes a las 7 h (hora del servidor), un correo electrónico enumera los procesos cuya próxima revisión está vencida o vence en los próximos 14 días. Los procesos archivados se ignoran, y no sale ningún correo si no hay nada que revisar. Se examinan 100 procesos como máximo en cada envío. Por defecto, el destinatario es la persona que activa las alertas; puedes cambiar los destinatarios (10 como máximo). Solo se aceptan direcciones cuyo dominio sea el de un miembro del espacio.

## Recibir un informe mensual

El informe mensual sale el día 1 de cada mes a las 8 h (hora del servidor), por correo electrónico, y también requiere una base V2 y el derecho de modificar las automatizaciones. Se activa desde **Más acciones**, entrada **Informe mensual**. Da el coste, la ganancia potencial, los tres procesos con mayor ganancia y el número de revisiones atrasadas. Los importes solo aparecen si la persona que lo activa es propietaria de la base. Si no, el informe no contiene ningún importe y clasifica los procesos por número de rupturas. Un informe que contiene importes solo puede ser activado, o cambiar sus destinatarios, por un propietario; los demás pueden apagarlo. Si el espacio vuelve al diagnóstico gratuito, el informe queda configurado pero suspendido: no sale ningún correo hasta que se restablezca el plan Esencial.

## Validar los pasos

Un paso puede tener un estado de validación, la persona que validó, la fecha y un comentario. El modelo incluye los estados **Por validar**, **Validado** y **A revisar**; la insignia muestra el estado tal como lo nombra tu base. Una insignia en el paso, dentro del lienzo, muestra el estado de un vistazo; el detalle aparece al pasar el ratón. Esta información se introduce en la tabla de pasos (campos «Estado de validación», «Validado por», «Fecha de validación» y «Comentario de validación»).

## Comparar lo estimado con lo real

El panel **Estimado vs real** compara lo estimado con lo medido, **solo en los pasos medidos**, e indica la proporción de pasos medidos, para saber qué confianza dar al total. Una diferencia positiva significa que lo real cuesta más de lo previsto. Ofrece una lectura **Por proceso** y **Por paso**, con un enlace al paso en el lienzo. Sin el derecho a leer los importes, solo se muestran la proporción de pasos medidos y el origen de las mediciones.

En la lectura por paso, **Introducir las mediciones** abre un editor: minutos medidos, volumen medido por mes, tasa de error medida (entre 0 y 100 %) y fuente de la medición. Deja un campo vacío para conservar lo estimado. El coste medido se recalcula automáticamente. Los costes siguen siendo datos introducidos por tu equipo: TblFlow los compara, no los mide.

En un paso ejecutado por una automatización, el botón **Importar desde la automatización** rellena las mediciones a partir de las ejecuciones de los últimos 30 días: duración media en minutos, volumen por mes y tasa de fallo. Una vista previa muestra el antes y el después, y no se escribe nada sin tu confirmación. La importación reemplaza las mediciones introducidas a mano. No se ofrece para un paso humano, externo o asumido por un agente. Si la automatización no tiene ninguna ejecución en 30 días, un mensaje lo indica y no se importa nada.

## Comparar antes y después

Antes de un cambio, **congela el mapa** (menú **Más acciones**, entrada **Antes / después**): TblFlow crea una copia, con el nombre que le das y la fecha. Una vez hecho el cambio, compara el **coste total del mes** y el **número de pasos** entre la copia y el mapa actual. Congelar el mapa requiere el plan Esencial o superior y, como la copia incluye todos los campos, solo un propietario de la base puede hacerlo cuando hay campos de coste cerrados a los demás. Los importes de la comparación están reservados a los propietarios.

## Seguir las mejoras

El **registro de mejoras** sigue tus ideas por estado (**Idea**, **Planificada**, **En curso**, **Realizada**, **Abandonada**), con los pasos vinculados, el coste de implementación, la ganancia buscada y un retorno (ganancia a 12 meses dividida por el coste de implementación). Es de solo lectura: añade o modifica las filas en la tabla **Mejoras**.

## ¿Dónde pierdes dinero?

Este recorrido de solo lectura clasifica tus procesos, y luego sus pasos, por ganancia potencial: proporción de la ganancia total, coste, rupturas y enlace directo al paso en el lienzo. Para las personas que no tienen derecho a leer los importes, la clasificación se hace por número de rupturas, y se indica claramente. Solo se leen los primeros 1 000 pasos.

## Presentar a la dirección

La **vista dirección** cabe en una página de lectura, imprimible en PDF con **Imprimir / PDF**: coste y ganancia potencial por mes, número de procesos activos, los cinco procesos donde más se pierde, las mejoras por estado y las revisiones atrasadas. Los importes solo aparecen para los propietarios de la base.

## Partir de un proceso tipo

La **biblioteca de procesos tipo** ofrece 13 procesos para importar uno a uno, agrupados por sector: facturación a clientes, contratación, reclamaciones, compras, y series para comercio, industria y logística, contabilidad y jurídico. Cada proceso llega con sus pasos encadenados, duraciones y frecuencias de ejemplo, y roles sin tarifas: introduce tus propios costes. La importación solo añade filas: un rol ya presente se reutiliza con su tarifa, no se crea ninguna herramienta, y un proceso con el mismo nombre no se importa por segunda vez. El contenido importado está, por ahora, en francés.

## Actualizar el modelo

Los mapas existentes pasan al modelo actualizado mediante la franja **Actualizar el modelo**, reservada a los propietarios: **Ver los cambios** muestra una vista previa, y luego **Confirmar la actualización** aplica los cambios. No se elimina nada, y tus totales no cambian mientras los nuevos campos estén vacíos. Si la actualización se detiene, vuelve a lanzarla para continuar donde se detuvo.

## Exportar y compartir

El botón **Exportar** de la barra de herramientas ofrece **Imagen (PNG)**, **PDF (impresión)** y **Exportar todos los datos**. Esta última opción está reservada a quien puede modificar la base y te avisa mediante una notificación que contiene el enlace de descarga.

Un enlace público de solo lectura comparte el mapa, desde **Compartir**. Está **cerrado por defecto**: actívalo cuando lo necesites, y desactívalo cuando ya no lo necesites, lo que corta el enlace de inmediato. Solo las personas que pueden modificar la base gestionan el uso compartido. Los costes, tarifas y ganancias nunca se comparten, y el enlace nunca muestra los autores. Los campos sensibles reservados siguen ocultos, y los importes y campos de coste se ocultan a quien no tiene derecho a leerlos. La exportación `.tbl` y la duplicación se rechazan si un campo es ilegible para la persona que las solicita.

## Saber qué depende de un campo

Antes de eliminar o modificar un campo, puedes listar lo que depende de él. Tres lugares lo muestran:

- La confirmación de eliminación de un campo enumera los elementos afectados, incluidas las vistas y las automatizaciones.
- Cuando un agente propone eliminar un campo, la propuesta muestra **Qué depende de él y se verá afectado**: campos vinculados o calculados, vistas, automatizaciones e interfaces, así como la posibilidad de restaurarlo desde la papelera. Si esta lista no puede calcularse, la eliminación se rechaza.
- La API `GET /api/table/{tableId}/field/{fieldId}/impact` (derecho de lectura del campo) devuelve los campos, vistas y automatizaciones que dependen de él, con una gravedad: el objeto **se rompe**, **se degrada** o **hay que verificarlo**. La lista está limitada a 200 elementos; un indicador señala las dependencias en bases que no puedes leer, sin nombrarlas.

## Generar la documentación de una fila (campo Canvas)

Un campo Canvas lleva un documento por fila, como la **Ficha de procedimiento** de un paso. Haz doble clic en la celda de la cuadrícula: se abre el panel **Documento de la fila**, y abrir una celda vacía crea el documento. Las opciones del campo eligen el contenido inicial: **Plantilla** (copia de un documento de la biblioteca, donde los nombres de campo se sustituyen por los valores de la fila), **IA** (el documento se redacta a partir de los campos de la fila), **Página IA** (una ficha de cliente potencial o una presentación) o **Vacío**. La opción **Crear al añadir una fila** crea el documento automáticamente; las importaciones nunca crean documentos.

En el panel, el título y el contenido se guardan automáticamente. **Regenerar** reescribe el documento; si se ha modificado a mano, TblFlow pide **¿Sobrescribir tus cambios?** antes de reemplazarlo. **Página** muestra la vista renderizada, **Editar** vuelve al editor, y **Abrir en la biblioteca** lleva a la biblioteca de documentos del espacio. Si el documento se ha modificado en otro lugar, un mensaje lo indica y **Recargar** recupera la versión guardada. **Generar los documentos** crea de una vez los documentos de las filas que no tienen, 100 como máximo por lanzamiento. Cada documento redactado por la IA cuenta en el consumo de IA.

## Organigrama del espacio

Los ajustes del espacio tienen una pestaña **Organigrama**, cuya página ofrece tres pestañas: **Organigrama** (árbol «quién reporta a quién», calculado según el responsable indicado en el perfil de cada persona), **Departamentos** (estructura y miembros) y **Por reemplazar**. Un colaborador sin responsable aparece como raíz. Un departamento solo se elimina si está vacío.

**Importar** carga un organigrama desde un archivo CSV: haz primero clic en **Vista previa**; no se escribe nada hasta que confirmes, y volver a importar el mismo archivo no crea duplicados. **Descargar la plantilla** da las columnas esperadas. **Exportar** descarga el organigrama en CSV.
