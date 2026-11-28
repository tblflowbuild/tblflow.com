---
title: "Conectores"
translationKey: "connectors"
description: "Conectar TblFlow con servicios externos: cuentas y claves de API, operaciones, tablas sincronizadas, disparador «Nuevo elemento» y permisos."
section: "Guías"
order: 13
---

Un conector une TblFlow con un servicio externo: una cuenta (Gmail, Slack…), una API a la que se accede con una clave o una base PostgreSQL. Después, tus columnas, tablas, automatizaciones y agentes pueden usarlo.

## Dónde encontrarlos

En una base, abre **Automatizar** y luego la pestaña **Conectores**. Hay dos vistas:

- **Los tuyos**: las cuentas, API y bases de datos que ya están conectadas;
- **Descubrir**: lo que puedes añadir, con un buscador y categorías (Mensajería, CRM, Productividad…).

El botón **Crear con IA** crea un conector a partir de la documentación de una API. Esta página no lo describe.

## Conectarse

### Una cuenta (OAuth)

En **Descubrir**, haz clic en el botón **+** del servicio (información emergente «Conectar» seguida del nombre): se abre una ventana del servicio para autorizar tu cuenta. Puedes dar un **Nombre de la cuenta** para reconocerla. Después, **Reconectar** y **Desconectar** están disponibles en el panel del conector. Desconectar detiene lo que usa la cuenta (automatizaciones, columnas, agentes) hasta que vuelvas a conectarla.

Si el servidor no tiene una aplicación OAuth para un servicio, este aparece en **No configurados (admin)**. Un administrador del espacio puede entonces indicar la aplicación OAuth de su organización, en la zona **Avanzado** de la ventana de conexión.

### Una API con clave

Los conectores de API están en la sección **Catálogo** de **Descubrir**. Un conector de API primero se instala (**Instalar**) y después se conecta (**Conectar**): pegas tu clave y la dirección de tu cuenta si se pide. TblFlow comprueba enseguida que la clave responde.

El ajuste **Cuenta utilizada** elige entre una **Cuenta compartida** para todo el espacio y una **Cuenta de cada usuario**. Con una cuenta compartida, todas las llamadas pasan por una única cuenta, conectada por un gestor del espacio.

### Una base PostgreSQL

El conector **PostgreSQL** lee las tablas de una base existente, en modo de solo lectura. No se envía ninguna escritura.

## Las operaciones

El panel de un conector enumera **Lo que permite**. Cada operación es de uno de estos tres tipos:

| Tipo | Significado |
|---|---|
| **Leer** | Lee un registro a partir de un valor |
| **Listar** | Devuelve una lista de elementos |
| **Actuar** | Crea, modifica o envía algo en el servicio |

El botón **Probar** ejecuta una operación desde el panel. Después, una operación se usa en cuatro lugares (sección **Dónde usarla**): una columna conectada, una tabla sincronizada, una automatización (paso **Llamar a una operación**) o un agente, que puede llamar a las operaciones como herramientas.

Para un conector instalado desde el catálogo, el ajuste **Permitir escrituras** está desactivado por defecto. Desactivado, las operaciones que crean, modifican o eliminan algo en el servicio se rechazan en todas partes (automatizaciones, botones, agentes); las lecturas siguen funcionando.

## Sincronizar con una tabla

Una tabla sincronizada importa una lista del servicio y la mantiene al día: cada elemento se convierte en una fila.

1. Activa el conector y abre su panel, sección **Dónde usarla** → **Tabla sincronizada**.
2. Elige la base y, después, **Crear una tabla sincronizada**.
3. Elige el **Conector** y la **Lista** (una operación que devuelve una lista). Una **Vista previa** muestra los primeros elementos.
4. Marca las **Columnas** (tipos: Texto, Texto largo, Número, Casilla de verificación, Fecha, Enlace, Correo electrónico) y el **Identificador único**, que localiza cada elemento de una sincronización a otra.
5. Ajusta la **Sincronización**: cada 15 minutos, cada hora, cada 6 horas, cada día, o manual.
6. Elige qué ocurre con los **Elementos desaparecidos** (**Conservar las filas** o **Eliminar las filas**), el **Número máximo de elementos** y el **Modo**, y después **Crear la tabla**.

El modo **Incremental** solo vuelve a leer los elementos modificados desde la última sincronización, y la lista completa cada 7 días por defecto. Solo se acepta si el conector lo declara para esa lista. El modo **Completo** vuelve a leer toda la lista en cada ejecución. Sin otro ajuste, la lectura se detiene en 5.000 elementos; el máximo ajustable es 50.000. Una tabla sincronizada tiene 100 columnas como máximo. Si el límite detiene la lectura, un mensaje lo indica.

El menú **Sincronización** de la tabla muestra el estado y ofrece **Sincronizar ahora**, **Volver a sincronizar todo** y **Detener la sincronización** (la tabla y sus filas se conservan).

Por defecto, la tabla es de solo lectura. La opción **Devolver los cambios a la API** ofrece **Tras la validación de un administrador de la base** o **Automáticamente, en cada modificación**; exige que las escrituras estén permitidas para el conector.

## Disparar una automatización: «Nuevo elemento»

En una [automatización](/es/docs/automations), el disparador **Nuevo elemento en un conector** lanza la automatización una vez por cada nuevo elemento de una lista.

- Elige el conector, una lista cuyos elementos tengan un identificador, sus parámetros y la frecuencia de **Comprobar**: 15 minutos, 1 hora, 6 horas o 1 día.
- La primera lectura retiene los elementos ya presentes sin lanzar nada. Solo los elementos que aparezcan después disparan la automatización.
- Los campos del elemento se leen con `{{item.<ruta>}}`.
- Una lectura lanza 50 ejecuciones como máximo y recorre 5 páginas como máximo.

## Conectores propuestos en Descubrir

### Cuentas (OAuth)

| Cuenta | Lo que indica el panel |
|---|---|
| Gmail | Buscar y leer correos, enviar un correo |
| Google Calendar | Listar eventos, crear un evento |
| Google Drive | Buscar archivos, leer la información de un archivo |
| Google Meet | Crear un enlace de reunión |
| Google Chat | Listar espacios, publicar un mensaje |
| Slack | Listar canales, leer los mensajes de un canal, enviar un mensaje |
| GitHub | Listar y leer issues, crear issues, listar pull requests, comentar |
| Outlook | Listar correos, enviar un correo |
| Microsoft Teams | Listar tus equipos y sus canales, leer, publicar y responder, crear una reunión |
| Discord | Leer tu perfil, listar tus servidores |

### API con clave

| Conector | Lo que permite | Lo que hay que proporcionar |
|---|---|---|
| Make | Leer tus organizaciones, equipos y escenarios, su estado y su blueprint (solo lectura) | Un token de API de Make (permisos `scenarios:read` y `teams:read`) y la dirección de tu zona |
| n8n | Leer tus workflows y sus ejecuciones, en una instancia de n8n Cloud | Una clave de API de n8n y la dirección de tu instancia |
| HubSpot | Leer, buscar, crear y actualizar contactos, empresas y negocios, y asociarlos | El token de una aplicación privada de HubSpot |

Make, n8n y HubSpot también alimentan el [mapa de procesos](/es/docs/process-map).

### ClickUp (todavía no en Descubrir)

El conector ClickUp existe, pero todavía está en fase de pruebas sobre una cuenta real: no aparece en **Descubrir**, que solo muestra los conectores publicados. No hay ningún botón para instalarlo desde la interfaz. Mientras no esté publicado, no cuentes con él para un uso habitual.

Se conecta con un **token personal** de ClickUp (empieza por `pk_`). La guía de conexión indica dónde generarlo: en ClickUp, tu avatar, **Configuración**, **Aplicaciones**, sección **Token de API**. El token no tiene permisos: actúa con tus derechos, en todos los espacios de trabajo a los que tengas acceso. Para limitar el acceso, genéralo desde una cuenta de invitado solo en los espacios útiles.

| Tipo | Operaciones |
|---|---|
| **Listar** | Los espacios de trabajo; los espacios de un espacio de trabajo; las carpetas de un espacio; las listas de una carpeta; las listas situadas directamente en un espacio, fuera de cualquier carpeta; las tareas de una lista; los miembros de una lista |
| **Leer** | Una tarea, con sus campos personalizados y, si hace falta, sus subtareas |
| **Actuar** | Crear una tarea en una lista; modificar una tarea o archivarla (solo cambian los campos enviados, los campos personalizados no se modifican aquí); comentar una tarea |

Las tres operaciones que actúan son escrituras: se rechazan mientras el ajuste **Permitir escrituras** esté desactivado, igual que para los demás conectores del catálogo. Las tareas de una lista se leen en páginas de 100, las más recientes primero por defecto.

TblFlow espacia sus llamadas a ClickUp: 2 como máximo a la vez, con al menos 600 ms entre dos llamadas. Esto se mantiene por debajo del límite de 100 peticiones por minuto y por token que ClickUp aplica a sus planes más básicos.

El disparador **Nuevo elemento en un conector** (ver arriba) funciona con la operación **Listar las tareas de una lista**: una automatización se lanza con cada nueva tarea de una lista de ClickUp.

## Permisos necesarios

| Acción | Rol en el espacio |
|---|---|
| Usar un conector, conectar tu propia cuenta | Todos los roles |
| Crear y modificar un conector | Propietario, creador, editor |
| Instalar desde el catálogo | Propietario; creador si la instalación es libre |
| Eliminar un conector | Propietario, creador |

La gobernanza del catálogo se configura en el espacio: **Libre (propietarios y creadores del espacio)** o **Con aprobación de un administrador del espacio**. En este segundo caso, los demás miembros usan **Solicitar la instalación**.

Crear una tabla sincronizada requiere el permiso de crear una tabla en la base. Los permisos de cada rol se detallan en [Permisos y roles](/es/docs/permissions).

## Cuota de llamadas

Cada plan limita las llamadas reales a conectores de API por mes (las respuestas servidas desde la caché no cuentan): Gratis 1.000, Esencial 50.000, Equipo 500.000. Consulta [Planes y límites](/es/docs/plans-limits).
