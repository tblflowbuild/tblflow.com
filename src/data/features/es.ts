import type { FeaturesCopy } from './types';

const es = {
  nav: 'Funciones',
  metaTitle: 'Funciones: todo lo que hace TblFlow',
  metaDescription:
    'Tablas, interfaces, automatizaciones, pizarras, agentes de IA, documentación, permisos, auditorías RGPD y AI Act: el catálogo de funciones de TblFlow.',
  eyebrow: 'Funciones',
  title: 'Todo lo que TblFlow hace por ti.',
  subtitle:
    'Siete recursos que TblFlow genera a partir de tus procesos, y las funciones que los rodean: permisos, IA bajo control, conexiones con tus herramientas.',
  availability: 'La disponibilidad de algunas funciones depende del plan.',
  pricingLink: 'Ver precios',
  home: {
    title: 'Todo lo que TblFlow sabe hacer',
    body: 'Tablas, interfaces, automatizaciones, pizarras, agentes, documentación, permisos, auditorías: el catálogo completo, agrupado en cuatro familias.',
    link: 'Ver todas las funciones',
  },
  groups: {
    build: {
      title: 'Lo que TblFlow genera',
      intro: 'Siete recursos, creados a partir del mapa de tus procesos. Los revisas antes de ponerlos en marcha.',
    },
    team: {
      title: 'Trabajar en equipo sin perder el control',
      intro: 'Cada persona ve y hace lo que tú has decidido, y todo lo que ocurre queda registrado.',
    },
    ai: {
      title: 'Una IA que tú controlas',
      intro: 'El proveedor, el contexto, el consumo y las auditorías: la IA sigue bajo tu control.',
    },
    connect: {
      title: 'Conectado a tus herramientas, listo para producción',
      intro: 'Tus otras herramientas siguen conectadas, y pruebas antes de publicar.',
    },
  },
  items: {
    tables: {
      title: 'Tablas con su API',
      body: 'Tablas sobre PostgreSQL de verdad, cada una accesible mediante la API REST.',
    },
    interfaces: {
      title: 'Interfaces que puedes publicar en línea',
      body: 'Interfaces construidas sobre tus tablas, que puedes publicar en línea.',
    },
    automations: {
      title: 'Automatizaciones',
      body: 'Secuencias de acciones que evitan volver a introducir los datos. Se crean desactivadas: las revisas antes de activarlas.',
    },
    whiteboards: {
      title: 'Pizarras',
      body: 'Una pizarra colaborativa dentro de una base, para esquematizar y pensar en equipo, con la ayuda de la IA.',
    },
    browsers: {
      title: 'Automatizaciones de navegador',
      body: 'Para un sitio sin API, un navegador manejado por la IA (computer use) repite la tarea por ti, una vez que das tu visto bueno.',
    },
    agents: {
      title: 'Agentes de IA',
      body: 'Agentes con una misión concreta, con las herramientas y los permisos que tú les das, bajo tus reglas y tu validación.',
    },
    docs: {
      title: 'Documentación indexada por la IA (DocIndex)',
      body: 'Tus documentos se indexan para buscar tanto por significado como por palabras, y la IA y tus agentes pueden consultarlos.',
    },
    permissions: {
      title: 'Permisos a medida',
      body: 'Roles y permisos granulares que tú defines, aplicados a cada solicitud, incluidas las de la IA.',
    },
    invitations: {
      title: 'Colaboradores y personas externas',
      body: 'Invita a tus colaboradores o a personas ajenas a la empresa, con solo los accesos que tú elijas.',
    },
    orgchart: {
      title: 'Un organigrama de empresa',
      body: 'Importa el organigrama de tu empresa para que TblFlow refleje tu organización.',
    },
    tokens: {
      title: 'Tokens de acceso personales',
      body: 'Cada usuario crea y gestiona sus propios tokens para llamar a la API.',
    },
    myNotifications: {
      title: 'Tus notificaciones, a tu manera',
      body: 'Cada usuario configura las notificaciones que recibe.',
    },
    logs: {
      title: 'Un registro de actividad',
      body: 'Un rastro de las acciones realizadas en tu espacio, para consultar qué ha pasado.',
    },
    providers: {
      title: 'El proveedor de IA que prefieras',
      body: 'TblFlow no depende de ningún proveedor de IA: conecta el de tu empresa o una cuenta individual.',
    },
    context: {
      title: 'Una IA que conoce tu contexto',
      body: 'El asistente conoce la estructura de tu espacio (bases, campos, procesos) y responde a partir de ella.',
    },
    usage: {
      title: 'Tu consumo de IA',
      body: 'Sigue lo que consume la IA en tu espacio.',
    },
    aiAct: {
      title: 'Auditoría AI Act',
      body: 'Una solución generada por la IA se audita automáticamente para ayudarte a preparar tus obligaciones derivadas del reglamento europeo sobre IA. No sustituye el asesoramiento jurídico.',
    },
    gdpr: {
      title: 'Auditoría RGPD automática',
      body: 'Una auditoría RGPD automática de lo que construyes, para detectar los puntos que hay que tratar.',
    },
    designMd: {
      title: 'Tu identidad visual con design.md',
      body: 'Incorpora tu archivo design.md: la IA lo usa para que las interfaces generadas sigan tu identidad visual.',
    },
    skills: {
      title: 'Skills: generar e importar',
      body: 'Genera o importa Skills para dar a tus agentes habilidades reutilizables.',
    },
    connectors: {
      title: 'Un generador de conectores de API',
      body: 'Crea, con la ayuda de la IA, un conector con la API de una herramienta que no tiene uno listo para usar.',
    },
    oauth: {
      title: 'Aplicaciones OAuth',
      body: 'Conecta tus aplicaciones mediante OAuth, sin compartir ninguna contraseña.',
    },
    mcp: {
      title: 'MCP, allí donde actúa la IA',
      body: 'Conecta servidores MCP: se pueden usar en el chat de IA, en las automatizaciones y en los agentes. TblFlow también tiene su propio servidor MCP.',
    },
    chatNotifications: {
      title: 'Notificaciones en Slack, Teams y Google Chat',
      body: 'Recibe las notificaciones de TblFlow en la herramienta de mensajería de tu equipo.',
    },
    email: {
      title: 'Correos de las automatizaciones',
      body: 'Configura el envío de correos desde tus automatizaciones.',
    },
    preprod: {
      title: 'Un espacio de preproducción',
      body: 'Prueba tus soluciones en un espacio aparte antes de ponerlas en marcha.',
    },
  },
} satisfies FeaturesCopy;

export default es;
