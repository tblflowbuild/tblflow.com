import type { McpKey } from './fr';

const es = {
  nav: 'Servidor MCP',
  'meta.title': 'Servidor MCP oficial: TblFlow en Claude',
  'meta.description':
    'Conecta TblFlow a Claude con un clic: el servidor MCP oficial lee y escribe tus datos con tus permisos y los espacios que elijas. Desde el plan Gratis.',
  breadcrumb: 'Servidor MCP',
  'hero.eyebrow': 'Servidor MCP oficial',
  'hero.title': 'Trabaja con tus datos de TblFlow desde Claude.',
  'hero.subtitle':
    'Añade TblFlow como conector en Claude, inicia sesión con tu cuenta habitual y elige los espacios accesibles. Claude podrá entonces consultar, crear y modificar tus registros desde la conversación.',
  'hero.cta.primary': 'Ver cómo conectar',
  'hero.cta.secondary': 'Leer la documentación',
  'hero.note': 'Disponible desde el plan Gratis, como la API REST.',
  'hero.url.label': 'URL del servidor',
  'benefits.title': 'Qué cambia',
  'benefits.1.title': 'Consultar tus datos',
  'benefits.1.body':
    'Hazle tus preguntas a Claude: lee el esquema de tus bases, filtra los registros y busca en el knowledge graph, con búsqueda semántica y de texto completo.',
  'benefits.2.title': 'Actuar desde la conversación',
  'benefits.2.body':
    'Crea y modifica registros, añade una tabla o un campo, activa una automatización o ejecuta un agente de IA, sin salir de Claude.',
  'benefits.3.title': 'Mantener el control',
  'benefits.3.body':
    'Al conectarte, eliges los espacios y bases accesibles y los permisos. Tus permisos de TblFlow se aplican a cada solicitud.',
  'tools.title': '13 herramientas, en lenguaje sencillo',
  'tools.intro':
    'Esto es lo que Claude puede hacer. Las capacidades más sensibles son opciones que activas al conectarte.',
  'tools.1.title': 'Explorar',
  'tools.1.body': 'Listar tus espacios y tus bases.',
  'tools.2.title': 'Comprender',
  'tools.2.body': 'Describir el esquema de una base.',
  'tools.3.title': 'Leer',
  'tools.3.body': 'Listar, filtrar y leer registros.',
  'tools.4.title': 'Buscar',
  'tools.4.body': 'Buscar en el knowledge graph, con búsqueda semántica y de texto completo.',
  'tools.5.title': 'Crear y modificar',
  'tools.5.body': 'Crear y modificar registros.',
  'tools.6.title': 'Eliminar',
  'tools.6.body':
    'Eliminar registros: primero una vista previa y después una confirmación explícita. Los registros van a la papelera.',
  'tools.7.title': 'Estructurar',
  'tools.7.body': 'Crear una tabla o un campo.',
  'tools.8.title': 'Automatizar',
  'tools.8.body': 'Activar una automatización, si su propietario la ha expuesto.',
  'tools.9.title': 'Delegar',
  'tools.9.body': 'Ejecutar un agente de IA, si su propietario lo ha expuesto.',
  'tools.perm.read': 'Lectura (por defecto)',
  'tools.perm.write': 'Escritura (opción)',
  'tools.perm.delete': 'Eliminación (opción)',
  'tools.perm.schema': 'Esquema (opción)',
  'tools.perm.trigger': 'Activación (opción)',
  'steps.title': 'Conectar en tres pasos',
  'steps.1.title': 'Añadir un conector personalizado',
  'steps.1.body':
    'En Claude (web, escritorio o móvil): Ajustes → Conectores → Añadir conector personalizado, y luego introduce la URL del servidor.',
  'steps.2.title': 'Iniciar sesión',
  'steps.2.body': 'Inicia sesión con tu cuenta habitual de TblFlow (OAuth 2.1).',
  'steps.3.title': 'Elegir los espacios',
  'steps.3.body':
    'Selecciona los espacios y bases accesibles y después los permisos. La lectura está activada por defecto.',
  'steps.code.title': 'Con Claude Code',
  'steps.code.body': 'Basta un comando:',
  'control.title': 'Lo que controlas',
  'control.1':
    'Tú eliges lo que Claude ve: espacios, bases y permisos. Lectura por defecto; escritura, eliminación, esquema y activación son opciones.',
  'control.2': 'Tus permisos actuales de TblFlow se aplican a cada solicitud.',
  'control.3':
    'Las automatizaciones y los agentes solo se pueden activar si su propietario los ha expuesto.',
  'control.4':
    'Una eliminación pasa por una vista previa y después por una confirmación explícita, y los registros van a la papelera.',
  'control.5':
    'El contenido de las conversaciones no se registra: solo se conservan la herramienta invocada, la hora, la duración y el estado. Los resultados de las herramientas se transmiten al asistente (Claude) para responder a tu solicitud.',
  'control.6':
    'Diseñado según las prácticas de ISO 27001 e ISO 42001, el RGPD y el AI Act. Es un enfoque de diseño: a día de hoy no se ha obtenido ninguna certificación.',
  'limits.title': 'Límites de velocidad por plan',
  'limits.intro':
    'El servidor MCP está incluido en todos los planes. Solo cambia el límite de solicitudes por minuto.',
  'limits.col.tier': 'Plan',
  'limits.col.rate': 'Solicitudes por minuto',
  'status.title': 'Dónde encontrarlo',
  'status.body':
    'El servidor está publicado en el registro MCP oficial con el nombre com.tblflow/tblflow (versión 1.0.0). El envío al directorio de conectores de Claude está pendiente. ChatGPT aún no es compatible.',
  'faq.title': 'Preguntas frecuentes',
  'faq.1.q': '¿Quién ve mis datos?',
  'faq.1.a':
    'Tú eliges los espacios y bases accesibles al conectarte, y tus permisos de TblFlow se aplican a cada solicitud. Los resultados de las herramientas se transmiten al asistente (Claude) para responder a tu solicitud. TblFlow no registra el contenido de las conversaciones: solo se conservan la herramienta invocada, la hora, la duración y el estado.',
  'faq.2.q': '¿Puedo revocar el acceso?',
  'faq.2.a':
    'Sí. Elimina el conector en los ajustes de Claude: Claude deja de acceder a tus datos de TblFlow.',
  'faq.3.q': '¿Es compatible ChatGPT?',
  'faq.3.a':
    'Todavía no. El servidor está publicado en el registro MCP oficial (com.tblflow/tblflow, versión 1.0.0) y se conecta a Claude. El envío al directorio de conectores de Claude está pendiente.',
  'faq.4.q': '¿Está disponible el servidor MCP en el plan Gratis?',
  'faq.4.a':
    'Sí, desde el plan Gratis, como la API REST. Solo cambia el límite de velocidad: 60, 120, 300 y 600 solicitudes por minuto para Gratis, Pro, Business y Enterprise.',
  'faq.5.q': '¿Qué puede hacer Claude con mis automatizaciones y mis agentes?',
  'faq.5.a':
    'Solo puede activarlos si su propietario los ha expuesto. En el caso de una automatización, run_automation lanza una prueba en seco con datos de ejemplo: no se modifica ningún dato.',
  'home.line': 'Conecta TblFlow a Claude — servidor MCP oficial',
  'home.card.title': 'Claude',
  'home.card.body':
    'Consulta y modifica tus datos de TblFlow desde la conversación, con tus permisos y los espacios que elijas.',
  'home.card.cta': 'Descubrir el servidor MCP',
  'pricing.row': 'Servidor MCP: solicitudes / minuto',
  'pricing.highlight': 'Servidor MCP incluido: {n} solicitudes / minuto',
  'privacy.heading': 'Servidor MCP',
  'privacy.p1':
    'Esta sección describe los tratamientos propios del servidor MCP de TblFlow (https://app.tblflow.com/mcp), que permite a un asistente de IA como Claude acceder a tu espacio de TblFlow. El servidor forma parte de la aplicación: sus documentos (condiciones, política de privacidad, acuerdo de tratamiento de datos) se publican en app.tblflow.com.',
  'privacy.p2':
    'Datos tratados: al conectarte, tu identidad de TblFlow (OAuth 2.1) y los espacios, bases y permisos que elijas; en cada llamada, los datos de tu espacio que la herramienta solicitada lee o escribe, dentro del límite de tus permisos.',
  'privacy.p3':
    'Finalidad: ejecutar las acciones que pides al asistente y garantizar la seguridad del servicio.',
  'privacy.p4':
    "Conservación: el contenido de las conversaciones, los argumentos y los resultados de las herramientas nunca se registran. Un registro de auditoría conserva, por cada llamada a una herramienta, el identificador del usuario, el nombre de la herramienta, la hora, la duración en milisegundos y el estado (éxito o error) durante 6 meses, y después se purga automáticamente. Los clientes OAuth registrados dinámicamente que no se utilizan se eliminan a los 30 días.",
  'privacy.p5':
    'Comunicación: los resultados de las herramientas se transmiten al asistente que hayas conectado (por ejemplo Claude, de Anthropic), que los trata para responder a tu solicitud conforme a su propia política de privacidad. Conecta únicamente los espacios cuyo contenido aceptes que se transmita al asistente.',
  'privacy.p6':
    'Marco: el servidor está diseñado según las prácticas de ISO 27001 e ISO 42001, el RGPD y el AI Act. A día de hoy no se ha obtenido ninguna certificación.',
  'privacy.p7':
    'Tus derechos (acceso, rectificación, supresión, limitación, oposición, portabilidad y reclamación ante la autoridad de control) se ejercen respecto de estos tratamientos como se describe más arriba. Contacto de protección de datos:',
} as const satisfies Record<McpKey, string>;

export default es;
