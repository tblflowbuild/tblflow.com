---
title: "Permisos y roles"
translationKey: "permissions"
description: "Gestionar los permisos en TblFlow: los cinco roles predeterminados y sus derechos, la creación de roles personalizados en un espacio, una base o una tabla, y las reglas que conviene conocer."
section: "Guías"
order: 7
---

Los permisos deciden quién puede ver, modificar o administrar qué en TblFlow. Esta página explica **dónde** y **cómo** gestionarlos, y enumera los derechos de los roles **presentes por defecto**.

## Vocabulario

| Término | Significado |
|---|---|
| **Acción** | Un derecho unitario, por ejemplo modificar un registro o configurar los permisos de una base. |
| **Rol predeterminado** | Uno de los cinco roles fijos: propietario, creador, editor, comentarista, lector. No se pueden modificar. |
| **Matriz de permisos** | Un conjunto con nombre de roles en un espacio, una base o una tabla. Se llama «Permission» en la interfaz. |
| **Rol personalizado** | Un rol al que pones nombre en una matriz, con la lista de acciones que elijas. |
| **Asignación** | El vínculo entre un rol personalizado y un usuario. |

Los roles personalizados **se añaden** a los roles predeterminados: dan derechos adicionales, nunca acceso a un espacio o a una base de los que el usuario no sea ya miembro.

## Los roles predeterminados

### Los cinco roles

La jerarquía es: propietario, creador, editor, comentarista, lector (de más a menos derechos). Un usuario obtiene un rol al convertirse en **colaborador** de un espacio o de una base: invitación por correo electrónico, enlace de invitación o alta directa. En una base, los derechos del rol de la base y los del rol del espacio padre se **acumulan**.

Los roles que se pueden ofrecer dependen del nivel:

- **Espacio**: los cinco roles.
- **Base**: creador, editor, comentarista y lector (no propietario).
- **Tabla**: creador, editor y lector.

Los roles de propietario, creador y editor cuentan como una plaza facturable.

### Qué puede hacer cada rol

✅ permitido, ❌ denegado.

| Derecho | Propietario | Creador | Editor | Comentarista | Lector |
|---|---|---|---|---|---|
| **Espacio**: crear, eliminar, modificar | ✅ | ❌ | ❌ | ❌ | ❌ |
| Espacio: leer | ✅ | ✅ | ✅ | ✅ | ✅ |
| Espacio: invitar por correo electrónico | ✅ | ✅ | ✅ | ✅ | ✅ |
| Espacio: crear un enlace de invitación | ✅ | ✅ | ❌ | ❌ | ❌ |
| Espacio: asignar un rol, configurar los permisos | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Base**: crear, eliminar, modificar | ✅ | ✅ | ❌ | ❌ | ❌ |
| Base: leer | ✅ | ✅ | ✅ | ✅ | ✅ |
| Base: invitar por correo electrónico | ✅ | ✅ | ✅ | ✅ | ✅ |
| Base: crear un enlace de invitación | ✅ | ✅ | ❌ | ❌ | ❌ |
| Base: exportar tablas | ✅ | ✅ | ✅ | ✅ | ✅ |
| Base: importar tablas | ✅ | ✅ | ✅ | ❌ | ❌ |
| Base: configurar los permisos | ✅ | ✅ | ❌ | ❌ | ❌ |
| Base: consultas de datos | ✅ | ✅ | ❌ | ❌ | ❌ |
| Base: conexión a la base de datos | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Tabla**: crear, modificar, eliminar, importar | ✅ | ✅ | ❌ | ❌ | ❌ |
| Tabla: leer, exportar | ✅ | ✅ | ✅ | ✅ | ✅ |
| Tabla: leer y modificar la papelera | ✅ | ✅ | ✅ | ❌ | ❌ |
| Tabla: vaciar la papelera | ✅ | ✅ | ❌ | ❌ | ❌ |
| Tabla: configurar los permisos | ✅ | ✅ | ❌ | ❌ | ❌ |
| Historial de los registros | ✅ | ✅ | ✅ | ❌ | ❌ |
| **Vista**: crear, modificar, eliminar, compartir | ✅ | ✅ | ✅ | ❌ | ❌ |
| Vista: leer | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Campo**: crear, modificar, eliminar | ✅ | ✅ | ❌ | ❌ | ❌ |
| Campo: leer | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Registro**: crear, modificar, eliminar | ✅ | ✅ | ✅ | ❌ | ❌ |
| Registro: leer, copiar | ✅ | ✅ | ✅ | ✅ | ✅ |
| Registro: comentar | ✅ | ✅ | ✅ | ✅ | ❌ |
| **Automatización**: crear, modificar, eliminar | ✅ | ✅ | ❌ | ❌ | ❌ |
| Automatización: leer | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Conector**: crear, modificar | ✅ | ✅ | ✅ | ❌ | ❌ |
| Conector: eliminar, instalar desde el catálogo | ✅ | ✅ | ❌ | ❌ | ❌ |
| Conector: conectar tu propia cuenta | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Aplicación**: crear, modificar, eliminar | ✅ | ✅ | ❌ | ❌ | ❌ |
| Aplicación: leer | ✅ | ✅ | ✅ | ✅ | ✅ |

### Derechos que ningún rol de espacio concede

Algunos derechos no pasan por los roles anteriores y se deniegan a todos:

- **Administración de la instancia** (páginas de administración, importación del organigrama): reservada a los administradores de la instancia.
- **Funciones Enterprise**: reservadas al plan Enterprise.
- **Operador de plataforma** (despliegue multiinquilino): reservado al operador TblFlow del despliegue.

## Dónde gestionar los permisos

Existen dos gestos: **dar un rol predeterminado** y **crear un rol personalizado**.

### Dar un rol predeterminado

En el nivel de un espacio o de una base, invita a un usuario (por correo electrónico o mediante enlace) eligiendo su rol. Hay que poder invitar en ese nivel y, para asignar un rol en un espacio, tener el derecho «asignar un rol».

### Crear un rol personalizado

Hay tres alcances, con la misma pantalla:

| Alcance | Dónde en la interfaz | Derecho requerido |
|---|---|---|
| **Espacio** | Ajustes del espacio, pestaña **Permission** | Configurar los permisos del espacio |
| **Base** | Menú de la base, entrada **Permission** (icono de candado) | Configurar los permisos de la base |
| **Tabla** | Clic derecho en una tabla, **Permisos de la tabla** | Configurar los permisos de la tabla |

Por defecto, la entrada **Permission** de una base solo aparece para el propietario y el creador. En una tabla, los usuarios a los que se puede dirigir son los **colaboradores de la base padre**: una tabla no tiene colaboradores propios.

## Crear un rol personalizado, paso a paso

1. **Crea la matriz.** En la pantalla Permission del alcance deseado, usa el botón de creación. Basta con un nombre; la descripción es opcional. Una matriz agrupa varios roles.
2. **Añade un rol** en la matriz: ponle un nombre y marca las acciones. Están organizadas en grupos plegables (Tablas, Campos, Vistas, Registros, Colaboración, Base, Automatizaciones, Otros), con un buscador.
3. **Asigna el rol** a uno o varios usuarios, elegidos entre los colaboradores del alcance. El efecto es inmediato: los derechos del usuario se recalculan en cuanto se asigna y en cuanto se revoca.
4. **Modifica o retira.** Un rol se puede renombrar, cambiar de acciones o eliminar. Una asignación se puede retirar. Eliminar una matriz elimina también sus roles y sus asignaciones.

## Reglas y límites que conviene conocer

- **Solo aditivo.** Un rol personalizado nunca sustituye la pertenencia al espacio o a la base. En una tabla, añade acciones a las que la base ya concede.
- **Acciones validadas.** El servidor rechaza cualquier acción que no pertenezca a la lista oficial. Un rol personalizado no puede conceder los derechos sobre los conectores ni los derechos de operador de plataforma.
- **Coherencia de alcance.** El servidor comprueba que la matriz pertenece al recurso afectado y que el rol pertenece a la matriz.
- **Una asignación es única** para una pareja rol y usuario: repetirla no la duplica.
- **Token de acceso personal.** Solo puede restringir los derechos de su propietario, nunca ampliarlos.
