---
title: "Cuenta y seguridad"
translationKey: "account-security"
description: "Iniciar sesión sin contraseña (clave de acceso, enlace por correo, acceso externo) y gestionar perfil, idioma, notificaciones y borrado de la cuenta."
section: "Guías"
order: 16
---

Esta página describe lo que concierne a **tu cuenta personal**: el inicio de sesión, el perfil, las preferencias, la búsqueda rápida, la exportación de tus datos y la eliminación de la cuenta. Los ajustes que se aplican a todo un espacio están en [Ajustes del espacio](/es/docs/space-settings).

## Iniciar sesión

La pantalla de inicio de sesión **no ofrece contraseña**. Existen tres formas de entrar. Las dos primeras siempre están presentes, la tercera depende de la instancia.

| Forma | Cómo usarla |
|---|---|
| Clave de acceso | Haz clic en **Iniciar sesión con una clave de acceso** y confirma con el método de tu dispositivo. |
| Enlace por correo electrónico | Debajo de **O iniciar sesión por correo electrónico**, escribe tu dirección y haz clic en **Enviarme un enlace**. |
| Inicio de sesión externo | Debajo de **O continuar con**, elige un proveedor: GitHub, Google u OIDC. Solo se muestran los proveedores activados en la instancia. |

### Clave de acceso

Una clave de acceso (passkey) se basa en Face ID, Touch ID, Windows Hello o una llave de seguridad. Se añade **después** de tu primer inicio de sesión, desde el perfil (ver más abajo).

### Enlace por correo electrónico

TblFlow envía a tu dirección un enlace de inicio de sesión y un código de 6 dígitos. El mensaje indica que el enlace caduca en 10 minutos. Puedes abrir el enlace o escribir el código en el campo **Código de 6 dígitos** y hacer clic en **Iniciar sesión**. **Reenviar un enlace** vuelve a enviarlo.

- Esta vía solo funciona con una dirección que ya tiene cuenta. Para una dirección desconocida, la pantalla responde igual que para una conocida, pero no se envía ningún correo: es intencionado, para no revelar qué direcciones tienen cuenta. Crea la cuenta mediante el registro.
- Las solicitudes están espaciadas: la pantalla indica los segundos que hay que esperar antes de pedir otro.
- Tras demasiados códigos erróneos, el inicio de sesión se bloquea durante unos minutos.
- Si la instancia usa un desafío de verificación anti-robots, aparece debajo del campo y debe completarse antes del envío.

Un ajuste de la instancia permite desactivar este enlace. En ese caso, la pantalla muestra « La conexión sin contraseña no está disponible en esta instancia ».

### Inicio de sesión externo y SSO

Los botones **GitHub**, **Google** y **OIDC** redirigen al proveedor. Solo aparecen si la instancia los ha configurado. El botón **OIDC** corresponde a un proveedor OpenID Connect configurado a nivel de instancia: no se ajusta en los ajustes del espacio.

## Crear una cuenta

Abre **Registrarse** desde la pantalla de inicio de sesión. El formulario pide:

- tu dirección de correo electrónico;
- la aceptación de las condiciones de uso y de la política de privacidad (obligatoria);
- un **código de verificación** enviado por correo, cuando la instancia lo exige;
- un **código de invitación**, cuando la instancia funciona con lista de espera. El enlace **Unirse a la lista de espera** permite inscribirse en ella.

No se crea ninguna contraseña. Según la configuración, la instancia también puede cerrar los registros: la pestaña de registro sigue disponible entonces solo mediante un enlace de invitación a un espacio, una base o una vista compartida.

## Mi perfil

Abre el menú de tu avatar y luego **Ajustes**. La ventana reúne tus ajustes personales: **Mi cuenta**, además de **Mis notificaciones**, **Conectores**, **Tokens de acceso personal**, **Mis skills** y **Aplicaciones OAuth**. Los ajustes del espacio actual aparecen en la misma ventana cuando tienes acceso a ellos.

La pestaña **Mi cuenta** (título **Mi perfil**) contiene:

| Ajuste | Detalle |
|---|---|
| Avatar | **Cambiar el avatar** abre la selección de una imagen. |
| Nombre para mostrar | El nombre con el que te llaman en TblFlow. Se guarda al salir del campo. |
| **Nombre** y **APELLIDO** | El apellido se guarda en mayúsculas. |
| Tema | **Claro**, **Oscuro** o **Sistema**. |
| Idioma | Ver más abajo. |
| **Vista de las bases** | Forma de mostrar la lista de bases de un espacio: **Automática**, **Tarjetas** o **Lista**. |
| **Vista dentro de una base** | Forma de mostrar una base al abrirla: las mismas tres opciones. |
| **Modo de interacción** | **Modo ratón**, **Modo táctil** o **Seguir el sistema**. Esta opción solo aparece en un dispositivo que admite a la vez táctil y ratón. |

### Idioma de la interfaz

El selector **Idioma** ofrece diez idiomas, más una entrada **Default** (idioma del navegador):

中文, English, Italiano, Français, Deutsch, 日本語, Русский, Українська, Türkçe y Español (Latinoamérica).

La elección se guarda en tu cuenta y después la página se recarga.

### Seguridad de la cuenta

La sección **Seguridad de la cuenta** reúne los siguientes elementos.

**Correo electrónico.** **Cambiar el correo electrónico** pide la nueva dirección, envía un código de verificación con **Enviar el código** y **Confirmar** lo valida. Tu sesión se cierra entonces y vuelves a la pantalla de inicio de sesión. Esta operación exige haber presentado una clave de acceso o un código de respaldo en los últimos 15 minutos: registra una clave de acceso antes de necesitarla.

**Claves de acceso.** **Añadir una clave de acceso** inicia el registro en tu dispositivo y te pide que le pongas un nombre. Cada clave listada tiene un botón **Eliminar**. En cuanto tu cuenta tiene una clave de acceso o un código de respaldo, añadir o eliminar una clave exige la misma presentación reciente de un factor fuerte. Una cuenta que aún no tiene ninguna puede registrar su primera clave directamente.

**Códigos de respaldo.** **Generar** crea diez códigos de un solo uso. Sustituyen a tu clave de acceso si la pierdes, pero no sirven para iniciar sesión. Solo se muestran una vez: usa **Copiar** o **Descargar** de inmediato. **Regenerar** sustituye el lote completo, y los códigos antiguos dejan de funcionar. Se indica cuántos códigos quedan.

**Acceso del soporte de TblFlow.** Un interruptor autoriza al soporte a iniciar sesión en tu lugar cuando pides ayuda. Está desactivado por defecto. Según el texto mostrado, cada sesión dura 30 minutos como máximo, es de solo lectura salvo acuerdo en contrario y queda registrada con su motivo. Puedes retirar el acceso en cualquier momento.

**Tratamiento de tus datos.** Dos interruptores:

- **Limitar el tratamiento de mis datos (RGPD Art. 18)**: congela los tratamientos automatizados no esenciales, sin eliminar nada. Tu cuenta sigue funcionando.
- **Oponerme al tratamiento de IA de mis contenidos (RGPD Art. 21)**: tus documentos importados dejan de indexarse y de ser leídos por las funciones de IA. Siguen almacenados y se pueden descargar.

La limitación ya cubre el tratamiento de IA: en ese caso, el segundo interruptor queda bloqueado.

La sección también muestra las integraciones de terceros autorizadas, que puedes revocar. Los conectores, los tokens personales y las aplicaciones OAuth tienen sus propias páginas: ver [Conectores](/es/docs/connectors) y [API y desarrolladores](/es/docs/api-developers).

## Notificaciones

### El centro de notificaciones

El icono de campana muestra el número de notificaciones sin leer. El panel ofrece dos listas, las no leídas y las leídas (**Leído**), el botón **Marcar todo como leído** y **Ver más** para cargar el resto.

### Los correos electrónicos

**Mis notificaciones** define lo que recibes por correo electrónico. Tres niveles:

| Nivel | Contenido |
|---|---|
| **Todas las notificaciones** | Menciones y comentarios, además de los mensajes de la plataforma: fin de importación o exportación, automatización o generación de IA con error, cuotas y facturación. |
| **Solo menciones y comentarios** | Únicamente cuando alguien te nombra en una celda o en un comentario, o comenta. |
| **Ningún correo** | Las notificaciones siguen visibles dentro de la aplicación. |

El envío a Slack, Teams o Google Chat es un ajuste del espacio, no personal: ver [Ajustes del espacio](/es/docs/space-settings).

## Paleta de comandos y búsqueda

**Ctrl+K** (**⌘+K** en Mac) abre la paleta **Acciones rápidas**. Un botón con forma de lupa también la abre, y el mismo atajo la cierra.

- **Dentro de una base**: la paleta enumera las tablas, aplicaciones y automatizaciones de la base. También ofrece las acciones de creación, **Abrir el asistente de IA** (o **Preguntar al asistente** con el texto escrito), la elección del tema y la apertura de los ajustes.
- **Dentro de un espacio**: escribir lanza una búsqueda en el servidor dentro del espacio. Los resultados pueden ser bases, tablas, vistas, paneles, automatizaciones o aplicaciones, en páginas de 10 con **Cargar más**. Un resultado abre el elemento. La acción **Crear una base** aparece si tu rol lo permite.

Las acciones propuestas dependen de tus permisos: una acción prohibida no aparece.

**Dentro de una tabla**, **Ctrl+F** (**⌘+F** en Mac) sitúa el cursor en la búsqueda de la barra de herramientas. Ofrece la **Búsqueda global** (todos los campos salvo fechas, casillas de verificación y botones) o la **Búsqueda por campo**. Ver [Vistas y filtros](/es/docs/views-and-filters).

## Exportar mis datos

En la parte inferior de la pestaña **Mi cuenta**, **Descargar el archivo** genera un archivo zip. Contiene un archivo `profile.json` con los campos de tu perfil, una carpeta por cada base de la que eres propietario en un espacio (registros y archivos adjuntos) y, si los tienes, los metadatos de tus credenciales de sitios de terceros. Las contraseñas asociadas no se exportan.

## Eliminar mi cuenta

En la parte inferior de la pestaña **Mi cuenta**, **Eliminar la cuenta** abre una confirmación. La acción es irreversible.

1. Primero abandona tus espacios. Mientras seas miembro de un espacio, o propietario o creador de un espacio enviado a la papelera, la eliminación se rechaza y la pantalla enumera los espacios afectados, con un enlace a cada uno.
2. Escribe `DELETE` en el campo de confirmación. El botón **Eliminar** permanece inactivo mientras el texto no coincida.
3. El servidor exige un inicio de sesión de menos de 15 minutos (una clave de acceso o un código de respaldo reciente si los tienes). Si no, vuelve a iniciar sesión y repite la operación.

Lo que ocurre después:

- tu dirección se sustituye, tu nombre se borra y tu avatar se reemplaza por un avatar predeterminado;
- tus tokens de acceso, cuentas vinculadas, claves de acceso, códigos de respaldo, notificaciones y conversaciones con los agentes se eliminan;
- tus comentarios se vacían;
- los registros de las bases compartidas se conservan: pertenecen al equipo y tú solo figuras bajo el nombre « Deleted User ».
