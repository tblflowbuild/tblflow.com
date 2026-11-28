---
title: "Permisos y roles"
translationKey: "permissions"
description: "Gestiona los permisos en TblFlow: los cinco roles predeterminados y sus derechos, los roles personalizados en un espacio, una base o una tabla, y las reglas."
section: "Guías"
order: 7
---

Los permisos deciden quién puede ver, modificar o administrar qué en TblFlow. Esta página explica **dónde** y **cómo** gestionarlos, y enumera los derechos de los roles **presentes por defecto**.

## Vocabulario

| Término | Significado |
|---|---|
| **Acción** | Un derecho unitario, por ejemplo modificar un registro o configurar los permisos de una base. |
| **Rol predeterminado** | Uno de los cinco roles fijos: propietario, creador, editor, comentarista, lector. No se pueden modificar. |
| **Matriz de permisos** | Un conjunto con nombre de roles en un espacio, una base o una tabla. Se llama **Permission** en la interfaz. |
| **Rol personalizado** | Un rol al que pones nombre en una matriz, con la lista de acciones que elijas. |
| **Asignación** | El vínculo entre un rol personalizado y un usuario. |

Los roles personalizados **se añaden** a los roles predeterminados: sus derechos se suman a los del rol del usuario, no los reemplazan. La pantalla de asignación solo propone a los colaboradores del ámbito.

## Los roles predeterminados

### Los cinco roles

La jerarquía es: propietario, creador, editor, comentarista, lector (de más a menos derechos). Un usuario obtiene un rol al convertirse en **colaborador** de un espacio o de una base: invitación por correo electrónico, enlace de invitación o alta de un miembro o de un departamento de la organización. En una base, los derechos del rol de la base y los del rol del espacio padre se **acumulan**.

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
| Espacio: configurar los permisos | ✅ | ❌ | ❌ | ❌ | ❌ |
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
| Historial de registros | ✅ | ✅ | ✅ | ❌ | ❌ |
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
| Conector: conectar su propia cuenta | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Aplicación**: crear, modificar, eliminar | ✅ | ✅ | ❌ | ❌ | ❌ |
| Aplicación: leer | ✅ | ✅ | ✅ | ✅ | ✅ |

### Derechos que ningún rol de espacio concede

Algunos derechos no pasan por los roles anteriores: se deniegan a todos:

- **Administración de la instancia** (páginas de administración, importación del organigrama): reservada a los administradores de la instancia.
- **Configuración de la empresa** (acciones «enterprise»): ningún rol de espacio los incluye, y un rol personalizado no puede concederlos.

## Dónde gestionar los permisos

Existen dos acciones: **asignar un rol predeterminado** y **crear un rol personalizado**.

### Asignar un rol predeterminado

En el nivel de un espacio o de una base, invita a un usuario (por correo electrónico o por enlace) eligiendo su rol. Hay que tener el derecho de invitar en ese nivel (consulta la tabla: la invitación por enlace está reservada al propietario y al creador).

### Crear un rol personalizado

Hay tres ámbitos, con la misma pantalla:

| Ámbito | Dónde en la interfaz | Derecho requerido |
|---|---|---|
| **Espacio** | Ajustes del espacio, pestaña **Permisos** | Configurar los permisos del espacio |
| **Base** | Iconos de la base, **Permission** (candado) | Configurar los permisos de la base |
| **Tabla** | Menú de la tabla, entrada **Permisos** (candado) | Configurar los permisos de la tabla |

Por defecto, la entrada **Permission** de una base solo aparece para el propietario y el creador, y requiere el plan Equipo o superior: por debajo, muestra una insignia del plan y lleva a la mejora. En una tabla, los usuarios a los que se puede asignar un rol son los **colaboradores de la base padre**: una tabla no tiene colaboradores propios.

## Crear un rol personalizado, paso a paso

1. **Crea la matriz.** En la pantalla Permission del ámbito deseado, haz clic en **Nueva permission**. Basta con un nombre; la descripción es opcional. Una matriz agrupa varios roles.
2. **Añade un rol** (**Añadir un rol**) en la matriz: asígnale un nombre y marca las acciones. Se agrupan en bloques plegables (Tablas, Campos, Vistas, Registros, Colaboración, Base, Automatizaciones, Otros), con búsqueda.
3. **Asigna el rol** (**Asignar**) a uno o varios usuarios, elegidos entre los colaboradores del ámbito. El efecto es inmediato: los derechos del usuario se recalculan en cuanto se asigna y en cuanto se revoca.
4. **Modifica o retira.** Un rol se renombra, cambia de acciones o se elimina. Una asignación se retira. Eliminar una matriz elimina también sus roles y sus asignaciones.

## Reglas y límites que conviene conocer

- **Solo aditivo.** Los derechos de un rol personalizado se suman a los del rol predeterminado, sin quitarlos. En una tabla, se suman a los que la base ya concede.
- **Acciones validadas.** El servidor rechaza cualquier acción que no pertenezca a la lista oficial. También rechaza la administración del espacio (crear, eliminar o modificar el espacio, asignar un rol, configurar los permisos del espacio) y las acciones de instancia y de empresa. Las demás acciones, incluidas las de los conectores y las que abren un ajuste del espacio (notificaciones, correo electrónico, dominios, IA), pueden concederse.
- **Coherencia de ámbito.** El servidor comprueba que la matriz pertenece al recurso correspondiente y que el rol pertenece a la matriz.
- **Una asignación es única** para cada par rol-usuario: volver a hacerla no la duplica.
- **Token de acceso personal.** Solo puede restringir los derechos de su propietario, nunca ampliarlos.
