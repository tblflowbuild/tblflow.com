---
title: "Compartir y publicar"
translationKey: "sharing-publishing"
description: "Compartir por enlace una vista, tabla o base, abrir un formulario al público, publicar una app pública o por invitación e invitar colaboradores."
section: "Guías"
order: 12
---

TblFlow ofrece cinco formas de dar acceso a tus datos. No requieren los mismos derechos ni dan los mismos poderes, así que elige la más restringida que te basta.

| Quieres | Dónde | Derecho requerido (roles por defecto) |
|---|---|---|
| Mostrar una vista en modo lectura, por enlace | Barra de herramientas de la tabla, **Compartir** | Modificar la vista y compartirla: propietario, creador, editor |
| Mostrar una tabla o una base, por enlace | **Compartir** (barra de herramientas o menú de la base) | Modificar la base: propietario, creador |
| Recibir respuestas | Vista Formulario compartida | Igual que la vista |
| Publicar una aplicación | Botón **Publicar** de la aplicación | Modificar la aplicación: propietario, creador |
| Hacer que alguien trabaje en el espacio o en la base | Botón **Invitar** | Invitar: ver [Permisos y roles](/es/docs/permissions) |

## Compartir una vista por enlace

En la barra de herramientas de una tabla, **Compartir** abre un pequeño menú con **Compartir la tabla** y **Compartir la vista**. El botón aparece desactivado si no tienes derecho a modificar la vista.

Elige **Compartir la vista** y, después, activa **Compartir la vista en la web**. Aparece un enlace, con copia en un clic, un código QR y un botón para generar un enlace nuevo. Las personas que tienen el enlace ven la vista, sin necesidad de cuenta.

En **Avanzado**, según el tipo de vista:

- **Permitir a los espectadores copiar datos de esta vista** y **Mostrar todos los campos en los registros ampliados** (solo en la vista Cuadrícula).
- **Solo por invitación**: ver más abajo.
- **Configuración de integración**: copia un código `iframe` para pegarlo en otra página, con una vista previa. Ahí eliges el tema (sistema, claro u oscuro) y, salvo en el formulario, **Ocultar la barra de herramientas**. Estos ajustes cambian el enlace: cópialo de nuevo después de modificarlos.

Los campos de tipo Contraseña nunca se envían a una persona que consulta un enlace compartido. Tampoco se envía un campo que la base prohíbe leer.

Desactiva el interruptor para cerrar el enlace. Generar un enlace nuevo cambia la dirección.

## Compartir una tabla o una base por enlace

Para una base completa, usa **Compartir** en el menú de la base (lista de bases del espacio). Para una tabla, **Compartir** y luego **Compartir la tabla**. Hace falta poder modificar la base: propietario o creador por defecto.

Activa **Compartir en la web**. El enlace se abre en `/share/…/base`. El menú **Cualquier persona con el enlace** define lo que permite el enlace:

| Ajuste | Efecto |
|---|---|
| **Puede consultar** | Cualquier persona con el enlace consulta los datos. |
| **Puede modificar** | Los usuarios conectados modifican los registros de la tabla: reciben derechos de editor. Se propone para una base, una tabla o una carpeta. |
| **Guardar una copia** | Cualquier persona con el enlace puede guardar una copia en su espacio. |

En **Avanzado**: **Permitir a los lectores copiar los datos**, **Solo por invitación** y **Configuración de integración** (código `iframe`). **Regenerar el enlace** cambia la dirección. Desactivar **Compartir en la web** pide confirmación: la acción es irreversible y las personas que tenían el enlace pierden el acceso.

Incluso con **Puede modificar**, un enlace de base no da la invitación por correo electrónico, ni la compartición de vistas, ni las consultas de datos.

## Restringir un enlace a invitados

**Solo por invitación** se aplica a los enlaces de vista y de base. Aparece un campo **Invitados**: escribe direcciones separadas por una coma, un punto y coma o un espacio, y haz clic en **Invitar**.

- El enlace debe estar activado antes de invitar. Hasta 50 direcciones por envío.
- Solo las direcciones nuevas reciben un correo con el enlace.
- La persona debe iniciar sesión en TblFlow. Si su cuenta no ha sido invitada, ve «Acceso por invitación» y puede cambiar de cuenta.
- Los miembros de la base tienen acceso sin invitación.
- Añadir o quitar invitados requiere el derecho de modificar el espacio, reservado por defecto al propietario.

## Formulario público

Una vista Formulario se comparte como cualquier otra vista: **Compartir** > **Compartir la vista** > **Compartir la vista en la web**. Cualquier persona que abra el enlace puede rellenar el formulario y enviarlo; las respuestas llegan como registros de la tabla.

La opción **Se requiere inicio de sesión para enviar** obliga a la persona a iniciar sesión en TblFlow antes de enviar. Entonces, un mensaje y el botón **Iniciar sesión** cubren el formulario. Con **Solo por invitación**, solo los invitados y los miembros de la base acceden al formulario.

## Publicar una aplicación

En el editor de una aplicación, el botón **Publicar** abre el panel **Publicación de la app**. Allí configuras:

| Ajuste | Valores |
|---|---|
| **Acceso** | **Pública: cualquier persona con el enlace**, o **Por invitación: personas invitadas y miembros de la base** |
| **Permitir la escritura de datos** | Desactivado por defecto: los visitantes son de solo lectura |

El acceso propuesto por defecto es **Por invitación**. Elegir **Pública** pide confirmación: sin cuenta ni invitación, cualquiera que reciba el enlace abre la app y ve los datos que muestra.

Haz clic en **Publicar — generar el enlace**. El panel muestra entonces el enlace, que puedes copiar. Después puedes cambiar el acceso y la escritura sin volver a publicar.

En modo **Por invitación**, cada persona inicia sesión con su cuenta de TblFlow, sin contraseña: enlace mágico o llave de seguridad. Entra si ha sido invitada o si es miembro de la base; si no, la página se lo indica. El campo **Invitados** funciona como en los enlaces de vista, pero la app debe estar publicada antes de invitar. No hay contraseña de compartición ni cuenta de visitante propia de la aplicación.

La sección **Personalización** permite subir un icono de pestaña (favicon) y escribir la **Descripción de la página**, que muestran los motores de búsqueda y las vistas previas de enlace.

**Despublicar (revoca el enlace)** corta el enlace tras confirmación. Volver a publicar genera un enlace nuevo. Publicar, despublicar y cambiar el acceso requiere el derecho de modificar la aplicación; gestionar los invitados requiere el de modificar el espacio.

Para la construcción de la aplicación en sí, consulta [Crear tu primera aplicación](/es/docs/build-first-app).

## Dominio personalizado

Una aplicación publicada puede servirse en la raíz de un nombre de dominio que te pertenece. Primero hay que verificarlo en los ajustes del espacio.

1. En los ajustes del espacio, pestaña **Dominios verificados**, haz clic en **Añadir un dominio** y escribe el nombre (por ejemplo `app.midominio.com`).
2. Añade en tu proveedor DNS el registro TXT que se muestra: su nombre empieza por `_tblflow-verify.` y su valor por `tblflow-verify=`.
3. Haz clic en **Verificar**. El dominio pasa a **Verificado**.
4. En el panel de publicación de la aplicación, sección **Dominio personalizado**, elige el dominio en **Elegir un dominio verificado…**. **Desvincular** lo retira.

Un dominio sirve a una sola aplicación y solo puede verificarse en un único espacio. Sin dominio verificado, el panel indica: «No hay ningún dominio verificado disponible». El registro TXT demuestra que el dominio es tuyo; es lo único que TblFlow verifica. Al cabo de siete días, la prueba se vuelve a comprobar cuando el dominio sirve la aplicación: si el registro ha desaparecido, el dominio vuelve a estar no verificado.

## Invitar colaboradores

Invitar a un colaborador le asigna un rol en el espacio o en la base; no es un enlace compartido. Los derechos de cada rol se describen en [Permisos y roles](/es/docs/permissions).

- **Espacio**: botón **Invitar** del espacio, ventana «Compartir el espacio». Un colaborador del espacio accede a todas sus bases.
- **Base**: botón de invitación (icono de usuario, información emergente **Invitar**) de la barra de la base, ventana «Compartir» seguida del nombre de la base.

Cada ventana ofrece:

- **Invitar por correo electrónico**: escribe direcciones (confírmalas con Intro o Espacio), elige el rol y luego **Enviar la invitación**.
- **Invitar por enlace**: elige un rol y **Crear el enlace**. Quien abra el enlace obtiene ese rol, tras iniciar sesión. El rol de un enlace se puede modificar, y **Eliminar el enlace** lo revoca. Reservado al propietario y al creador por defecto.
- La adición de un miembro o de un departamento de la organización, cuando tu cuenta pertenece a una organización.
- La lista de colaboradores, con búsqueda por nombre o correo electrónico, cambio de rol y **Eliminar al colaborador**.

## Y después

- [Permisos y roles](/es/docs/permissions): lo que puede hacer cada rol, roles personalizados.
- [Crear tu primera aplicación](/es/docs/build-first-app): generar o construir la aplicación que vas a publicar.
- [Vistas y filtros](/es/docs/views-and-filters): los tipos de vista que puedes compartir.
