import type { SolutionsLocale } from './types';

/**
 * Copy (es), translated from fr.ts of the "Who is it for?" and "Use cases" pages. Every
 * claim was checked against the TblFlow application code (origin/main, November
 * 2026): templates "Pilotage financier" and "Gestion des stocks", the library
 * of process types, DocIndex, automations, agents under approval. Costs are
 * always "estimated", figures are labelled as examples, and each use case says
 * plainly what TblFlow does not do (docs/positionnement.md).
 */
const es = {
  ui: {
    forNav: '¿Para quién?',
    useCasesNav: 'Casos de uso',
    forIndex: {
      metaTitle: '¿Para quién es TblFlow? Finanzas, industria, comercio',
      metaDescription:
        'TblFlow es para las pymes que reintroducen los mismos datos de una herramienta a otra: dirección, finanzas, ventas, industria, comercio y despachos.',
      title: '¿Para quién?',
      subtitle:
        'Para las pymes que funcionan con Excel y una decena de herramientas. Cada área reintroduce datos distintos: esto es lo que TblFlow cambia en la suya.',
    },
    useCasesIndex: {
      metaTitle: 'Casos de uso de TblFlow: del presupuesto al cobro, compras',
      metaDescription:
        'Seis flujos en los que la misma información se reintroduce de herramienta en herramienta, y cómo TblFlow los mapea, los automatiza y los confía a agentes.',
      title: 'Casos de uso',
      subtitle:
        'Seis flujos en los que la misma información pasa de mano en mano y de herramienta en herramienta. Para cada uno: lo que cuesta hoy y lo que TblFlow hace con él.',
    },
    today: 'Hoy',
    withTblflow: 'Con TblFlow',
    journeyTitle: 'Cómo lo asume TblFlow',
    limitsTitle: 'Lo que TblFlow no hace',
    promptsTitle: 'Lo que le pediría a TblFlow',
    promptsNote: 'Peticiones escritas con sus palabras. La IA propone; nada se activa sin su validación.',
    faqTitle: 'Preguntas frecuentes',
    useCasesFor: 'Casos de uso',
    audiencesFor: 'Para quién',
    planNote:
      'El mapa de un proceso es gratuito, con los costes estimados incluidos. El mapa completo, Reemplazar y el informe mensual se incluyen desde el plan Esencial.',
    cta: 'Empezar',
    secondaryCta: 'Ver el Mapa de procesos',
    example: 'Ejemplo',
    more: 'Más información',
  },

  useCases: {
    'quote-to-cash': {
      nav: 'Del presupuesto al cobro',
      card: 'Presupuesto, pedido, factura y reclamación sin reintroducir datos entre herramientas.',
      metaTitle: 'Del presupuesto al cobro sin reintroducir datos | TblFlow',
      metaDescription:
        'El presupuesto en Word, el pedido en Excel, la factura en otro sitio: TblFlow los conecta en una sola base, con automatizaciones y agentes bajo validación.',
      eyebrow: 'Caso de uso · Ventas y facturación',
      title: 'Del presupuesto al cobro, sin volver a teclear el mismo importe cuatro veces',
      subtitle:
        'El presupuesto aceptado se convierte en pedido, el pedido prepara la factura, la factura vencida activa la reclamación. Una sola introducción, al principio.',
      flow: {
        steps: [
          { title: 'Presupuesto', tool: 'Word', after: 'human' },
          { title: 'Pedido', tool: 'Excel', after: 'automation' },
          { title: 'Factura', tool: 'Google Sheets', after: 'automation' },
          { title: 'Reclamación', tool: 'Gmail', after: 'agent' },
        ],
        rekeyed: 'Aurora Ops · 4820 €',
        calc: '40 presupuestos al mes × 3 reintroducciones × 10 minutos ≈ 20 horas al mes.',
      },
      problem: {
        title: 'El mismo cliente, el mismo importe, cuatro veces',
        body: 'El presupuesto sale de Word, el pedido se copia en una hoja de cálculo, la factura retoma las líneas a mano y la reclamación se hace de memoria. Cada copia es una oportunidad de error, y nadie ve de un vistazo lo que queda por cobrar.',
      },
      journey: [
        {
          label: 'Comprender',
          title: 'Suba su procedimiento de facturación',
          body: 'Su procedimiento de facturación y sus reglas de reclamación, en PDF o en Markdown, se indexan en DocIndex. Las herramientas que conserva siguen conectadas.',
        },
        {
          label: 'Mapear',
          title: 'Vea dónde se vuelve a teclear el importe',
          body: 'Parta del proceso tipo «Facturación a clientes» de la biblioteca: solicitud, control del pedido, preparación, validación de los importes elevados, envío, seguimiento de vencimientos, reclamación, cobro. Introduzca sus volúmenes: TblFlow estima el coste de cada paso.',
        },
        {
          label: 'Construir',
          title: 'Una base para presupuestos, pedidos y facturas',
          body: 'TblFlow genera las tablas y sus relaciones: el cliente, el presupuesto, el pedido y la factura se introducen una sola vez. Sus datos existentes se importan desde sus archivos CSV o Excel.',
        },
        {
          label: 'Automatizar y luego confiar',
          title: 'La regla, a una automatización; la reclamación, a un agente',
          body: 'Cuando un presupuesto pasa a «Aceptado», una automatización crea el pedido y prepara la factura. Un agente reclama las facturas vencidas según su procedimiento: prepara los mensajes y usted los valida.',
        },
      ],
      build: {
        title: 'Lo que usted construye',
        items: [
          { title: 'Un seguimiento de presupuestos', body: 'Por estado, del borrador a la aceptación, con el importe y el cliente vinculados.' },
          { title: 'Un calendario de cobros', body: 'Las facturas futuras, vencidas y cobradas, con lo que queda por cobrar este mes.' },
          { title: 'Reclamaciones preparadas', body: 'Un agente que sigue su procedimiento y le somete cada reclamación antes de enviarla.' },
        ],
      },
      limits:
        'TblFlow no lleva su contabilidad ni emite facturas electrónicas conformes. Su factura sale de su herramienta de facturación; TblFlow mantiene el vínculo entre el presupuesto, el pedido, la factura y la reclamación, y lo que queda por cobrar.',
      prompts: [
        'Cuando un presupuesto pase a «Aceptado», crea el pedido con las mismas líneas y avisa a administración de ventas.',
        'Lista las facturas vencidas hace más de 30 días y prepara una reclamación para cada una, según nuestro procedimiento.',
        'Muéstrame lo que queda por cobrar este mes, por cliente.',
      ],
      faq: [
        {
          q: '¿Tengo que abandonar mi software de facturación?',
          a: 'No. TblFlow conecta los pasos y mantiene el seguimiento; la factura puede seguir saliendo de su herramienta actual. Si esa herramienta publica una API, TblFlow puede conectarse a ella.',
        },
        {
          q: '¿Las reclamaciones salen solas?',
          a: 'No. El agente prepara cada reclamación a partir de su procedimiento y de sus tablas, y usted la valida antes de enviarla. Nada se activa sin su acuerdo.',
        },
        {
          q: '¿Puedo recuperar mis presupuestos y facturas existentes?',
          a: 'Sí. Importe sus archivos CSV o Excel en una tabla existente o en una tabla nueva.',
        },
      ],
    },

    'procure-to-pay': {
      nav: 'De la necesidad al pago a proveedores',
      card: 'Solicitudes de compra, pedidos, recepciones y facturas de proveedores conectados.',
      metaTitle: 'Compras y facturas de proveedores sin reintroducir datos',
      metaDescription:
        'Solicitud de compra, pedido, recepción, factura de proveedor: TblFlow conecta cada paso en una sola base y prepara la conciliación, bajo su validación.',
      eyebrow: 'Caso de uso · Compras y contabilidad de proveedores',
      title: 'De la necesidad al pago a proveedores, con cada factura conciliada con su pedido',
      subtitle:
        'La solicitud se convierte en pedido, la recepción confirma lo que ha llegado y la factura se concilia con el pedido antes de pasar al pago.',
      flow: {
        steps: [
          { title: 'Solicitud de compra', tool: 'Correo electrónico', after: 'human' },
          { title: 'Pedido a proveedor', tool: 'Excel', after: 'automation' },
          { title: 'Recepción', tool: 'Albarán en papel', after: 'human' },
          { title: 'Factura de proveedor', tool: 'Software de contabilidad', after: 'agent' },
        ],
        rekeyed: 'BC-1187 · 2340 €',
        calc: '60 facturas de proveedores al mes × 3 reintroducciones × 6 minutos ≈ 18 horas al mes.',
      },
      problem: {
        title: 'Llega la factura y nadie encuentra el pedido',
        body: 'La solicitud de compra está en un correo, el pedido en una hoja de cálculo y el albarán de recepción en papel. Cuando llega la factura, hay que buscarlo todo para saber si corresponde a lo pedido y recibido.',
      },
      journey: [
        {
          label: 'Comprender',
          title: 'Suba sus reglas de compra',
          body: 'Umbrales de validación, proveedores homologados, circuito de firma: sus reglas se indexan en DocIndex y sirven de contexto a los agentes.',
        },
        {
          label: 'Mapear',
          title: 'Vea dónde se copia el pedido',
          body: 'Parta del proceso tipo «Compras y aprovisionamiento»: necesidad, validación, presupuesto, comparación de ofertas, pedido, recepción, conciliación con la factura, pago. TblFlow estima el coste de cada paso a partir de sus volúmenes.',
        },
        {
          label: 'Construir',
          title: 'Solicitudes, pedidos, recepciones y facturas vinculados',
          body: 'La plantilla «Control financiero» aporta las tablas de facturas de proveedores y de gastos. Una solicitud se introduce mediante un formulario; el pedido y la factura permanecen vinculados a ella.',
        },
        {
          label: 'Automatizar y luego confiar',
          title: 'La conciliación propuesta, la decisión conservada',
          body: 'Una automatización crea el pedido en cuanto se valida la solicitud. Suba la factura del proveedor al Chat IA: propone las líneas, un agente las concilia con el pedido y la recepción, y usted valida antes del pago.',
        },
      ],
      build: {
        title: 'Lo que usted construye',
        items: [
          { title: 'Un formulario de solicitud de compra', body: 'Los campos adecuados, el aprobador adecuado según el importe, un estado visible para todos.' },
          { title: 'Un registro de facturas de proveedores', body: 'Cada factura vinculada a su pedido y a su recepción, con su vencimiento.' },
          { title: 'Un control antes del pago', body: 'Las diferencias entre lo pedido, lo recibido y lo facturado, señaladas antes de que la factura pase al pago.' },
        ],
      },
      limits:
        'TblFlow no paga a sus proveedores: la transferencia sale de su banco. No lee automáticamente las facturas escaneadas; el Chat IA propone las líneas a partir de la factura subida, y usted las valida. No hace la conciliación bancaria.',
      prompts: [
        'Crea un formulario de solicitud de compra con un aprobador distinto a partir de 1500 €.',
        'Concilia esta factura de proveedor con el pedido BC-1187 y su recepción, y señala las diferencias.',
        'Lista las facturas de proveedores que hay que pagar esta semana, indicando las que tienen alguna diferencia.',
      ],
      faq: [
        {
          q: '¿TblFlow lee las facturas en PDF?',
          a: 'El Chat IA lee la factura que usted sube y propone los registros correspondientes; no se crea nada antes de que usted lo acepte. No se trata de una lectura automática masiva de facturas escaneadas.',
        },
        {
          q: '¿Mi software de contabilidad se mantiene?',
          a: 'Sí. TblFlow se ocupa del circuito previo a la contabilidad: solicitud, pedido, recepción, control. El registro contable permanece en su software.',
        },
        {
          q: '¿Se puede exigir una validación a partir de cierto importe?',
          a: 'Sí: el estado, el importe y el aprobador son campos; una automatización avisa al aprobador correcto según el umbral que usted fije.',
        },
      ],
    },

    'financial-close': {
      nav: 'Cierre y control financiero',
      card: 'Márgenes, EBITDA y presupuesto frente a real, sin copiar las exportaciones cada mes.',
      metaTitle: 'Cierre mensual, márgenes y EBITDA sin copiar hojas | TblFlow',
      metaDescription:
        'Importe sus exportaciones contables, deje que las fórmulas recalculen márgenes, EBITDA y presupuesto frente a real, y reciba cada mes una síntesis para validar.',
      eyebrow: 'Caso de uso · Finanzas y control de gestión',
      title: 'El cierre del mes sin copiar las mismas exportaciones en las mismas hojas de cálculo',
      subtitle:
        'Sus exportaciones contables llegan a una base; los márgenes, el EBITDA y la desviación respecto al presupuesto se recalculan; la síntesis del mes queda preparada para la dirección.',
      flow: {
        steps: [
          { title: 'Exportación del balance', tool: 'Software de contabilidad', after: 'human' },
          { title: 'Formateo', tool: 'Excel', after: 'automation' },
          { title: 'Márgenes y EBITDA', tool: 'Excel', after: 'automation' },
          { title: 'Síntesis del mes', tool: 'PowerPoint', after: 'agent' },
        ],
        rekeyed: 'Balance de octubre · 186 líneas',
        calc: '1 cierre al mes × 4 archivos copiados × 1 h 30 ≈ 6 horas al mes.',
      },
      problem: {
        title: 'Cada mes, los mismos copiar y pegar',
        body: 'La exportación del balance se copia en un archivo de reprocesado, luego en la tabla de márgenes y después en la presentación de la dirección. Una fórmula rota o una línea olvidada, y la cifra presentada ya no es la correcta.',
      },
      journey: [
        {
          label: 'Comprender',
          title: 'Suba su procedimiento de cierre',
          body: 'Su calendario de cierre y sus reglas de reprocesado se indexan en DocIndex: sus equipos los consultan y los agentes los utilizan.',
        },
        {
          label: 'Mapear',
          title: 'Vea dónde se copian las cifras',
          body: 'Parta del proceso tipo «Cierre mensual»: extractos bancarios, conciliación bancaria, registro de facturas, reclamación de justificantes, regularizaciones, revisión, balance, presentación a la dirección.',
        },
        {
          label: 'Construir',
          title: 'Tablas que calculan por usted',
          body: 'Importe el balance o el libro mayor en CSV cada mes. Las fórmulas y los rollups calculan el margen por misión, el EBITDA y la desviación respecto al presupuesto; los gráficos y una interfaz de control los muestran.',
        },
        {
          label: 'Automatizar y luego confiar',
          title: 'La síntesis preparada, el comentario validado',
          body: 'Una automatización recalcula y avisa en cuanto se ha hecho la importación. Un agente redacta la síntesis del mes a partir de las tablas: variaciones, partidas que vigilar. Usted la revisa antes de que salga.',
        },
      ],
      build: {
        title: 'Lo que usted construye',
        items: [
          { title: 'Una tabla de márgenes', body: 'Por misión, proyecto o cliente, a partir de la plantilla «Control financiero».' },
          { title: 'Un seguimiento de EBITDA y presupuesto', body: 'El real del mes frente al presupuesto, con las desviaciones que superan su umbral.' },
          { title: 'Una síntesis mensual', body: 'Preparada por un agente a partir de sus tablas, revisada por usted antes de difundirla.' },
        ],
      },
      limits:
        'TblFlow no es un software de contabilidad: no lleva los asientos ni se conecta a su banco. El EBITDA y los márgenes los calculan sus fórmulas, a partir de las exportaciones que usted importa.',
      prompts: [
        'Importa el balance de octubre y recalcula el EBITDA y la desviación respecto al presupuesto.',
        'Muestra el margen por cliente de los últimos tres meses, del más alto al más bajo.',
        'Redacta la síntesis del mes para la dirección: variaciones, partidas por encima del presupuesto, puntos que decidir.',
      ],
      faq: [
        {
          q: '¿TblFlow calcula el EBITDA por sí solo?',
          a: 'No hay un cálculo de EBITDA ya hecho: usted lo define una vez con fórmulas y rollups, sobre sus propias cuentas, y se recalcula en cada importación.',
        },
        {
          q: '¿Hay que conectar el software de contabilidad?',
          a: 'No. Basta una exportación CSV del balance o del libro mayor. Si su software publica una API, TblFlow puede generar un conector para automatizar la importación.',
        },
        {
          q: '¿Quién ve los importes?',
          a: 'Los permisos se fijan por rol y por campo: usted elige quién lee los importes, quién los modifica y quién no los ve.',
        },
      ],
    },

    'stock-to-shipping': {
      nav: 'Del stock al envío',
      card: 'Inventarios, umbrales, reposición y preparación en una sola base.',
      metaTitle: 'Stocks, inventarios y reposición sin reintroducir datos',
      metaDescription:
        'Inventario rotativo, alertas de umbral, pedidos de reposición, preparación y envío: TblFlow conecta artículos, movimientos y pedidos, bajo su validación.',
      eyebrow: 'Caso de uso · Stocks y logística',
      title: 'Del stock al envío, sin volver a contar en tres archivos',
      subtitle:
        'El recuento actualiza el stock, el umbral activa la reposición y el pedido del cliente pasa a preparación. Las cantidades ya no se vuelven a teclear.',
      flow: {
        steps: [
          { title: 'Recuento', tool: 'Hoja en papel', after: 'human' },
          { title: 'Diferencias de stock', tool: 'Excel', after: 'automation' },
          { title: 'Reposición', tool: 'Correo al proveedor', after: 'agent' },
          { title: 'Preparación', tool: 'Sitio web del transportista', after: 'human' },
        ],
        rekeyed: 'Ref. A-204 · 36 unidades',
        calc: '150 referencias contadas al mes × 2 reintroducciones × 2 minutos ≈ 10 horas al mes.',
      },
      problem: {
        title: 'El stock, correcto un día al mes',
        body: 'El recuento se hace en papel, las diferencias se copian en una hoja de cálculo y el pedido de reposición sale por correo. Entre dos inventarios, nadie sabe realmente lo que queda, y la rotura de stock se descubre a la hora de preparar.',
      },
      journey: [
        {
          label: 'Comprender',
          title: 'Suba sus reglas de stock',
          body: 'Umbrales, proveedores, plazos, reglas de preparación: indexados en DocIndex, sirven de contexto a los agentes.',
        },
        {
          label: 'Mapear',
          title: 'Vea dónde se copian las cantidades',
          body: 'Parta de los procesos tipo «Inventario rotativo», «Reposición y pedido a proveedor» y «Preparación y envío». TblFlow estima el coste de cada paso a partir de sus volúmenes.',
        },
        {
          label: 'Construir',
          title: 'Artículos, movimientos e inventarios vinculados',
          body: 'La plantilla «Gestión de stocks» aporta los artículos, los movimientos, las ubicaciones, los proveedores, los pedidos de reposición y los inventarios físicos, con el valor del stock y las alertas de umbral.',
        },
        {
          label: 'Automatizar y luego confiar',
          title: 'El umbral avisa, el agente prepara el pedido',
          body: 'Una automatización calcula las diferencias de inventario y señala los artículos por debajo del umbral. Un agente prepara el pedido de reposición al proveedor adecuado; usted lo valida antes de enviarlo.',
        },
      ],
      build: {
        title: 'Lo que usted construye',
        items: [
          { title: 'Un stock al día', body: 'Cada entrada y cada salida registrada como un movimiento, con el valor del stock calculado.' },
          { title: 'Inventarios rotativos', body: 'Las referencias que contar, la introducción de los recuentos y las diferencias que volver a contar.' },
          { title: 'Una reposición preparada', body: 'Los artículos por debajo del umbral y un borrador de pedido a proveedor para validar.' },
        ],
      },
      limits:
        'TblFlow no es un software de gestión de almacén: no lee códigos de barras, no gestiona la preparación mediante terminal de radiofrecuencia y no sigue el stock en tiempo real. No genera etiquetas de transportista.',
      prompts: [
        'Lista los artículos por debajo de su umbral de reposición y prepara un pedido por proveedor.',
        'Crea el inventario rotativo de la semana: las 30 referencias más vendidas.',
        'Muestra las diferencias del último inventario superiores al 5 %, con su valor.',
      ],
      faq: [
        {
          q: '¿Se pueden escanear códigos de barras?',
          a: 'No. El código EAN es un campo del artículo, pero TblFlow no lee códigos de barras. Los recuentos se introducen con el teclado o mediante un formulario.',
        },
        {
          q: '¿TblFlow sustituye a mi ERP?',
          a: 'No. Se ocupa de lo que el ERP o las hojas de cálculo cubren mal: inventarios rotativos, umbrales, reposición, seguimiento de diferencias. Si su ERP publica una API, TblFlow puede conectarse a ella.',
        },
        {
          q: '¿Los pedidos de reposición salen solos?',
          a: 'No. El agente prepara el pedido; usted lo valida antes de que salga hacia el proveedor.',
        },
      ],
    },

    quality: {
      nav: 'Calidad y no conformidades',
      card: 'Controles, no conformidades y acciones correctivas seguidos de principio a fin.',
      metaTitle: 'No conformidades y acciones correctivas sin papel | TblFlow',
      metaDescription:
        'Control, registro, decisión, acción correctiva: TblFlow vincula cada no conformidad con su lote, su coste de reproceso y su acción, y prepara recordatorios.',
      eyebrow: 'Caso de uso · Calidad y producción',
      title: 'Cada no conformidad seguida hasta su acción correctiva',
      subtitle:
        'El control registra la desviación, el lote se bloquea, la decisión queda trazada, la acción correctiva se recuerda hasta su cierre. Ni una ficha perdida entre el taller y la oficina.',
      flow: {
        steps: [
          { title: 'Control', tool: 'Ficha en papel', after: 'human' },
          { title: 'Registro', tool: 'Excel', after: 'automation' },
          { title: 'Decisión', tool: 'Correo electrónico', after: 'human' },
          { title: 'Acción correctiva', tool: 'Excel', after: 'agent' },
        ],
        rekeyed: 'Lote 2611-B · 12 piezas',
        calc: '30 no conformidades al mes × 3 reintroducciones × 8 minutos ≈ 12 horas al mes.',
      },
      problem: {
        title: 'La ficha del taller no llega a la oficina',
        body: 'El controlador rellena una ficha, alguien la copia en una hoja de cálculo, la decisión se toma por correo y la acción correctiva vive en otro archivo. El coste del reproceso y la causa se pierden por el camino.',
      },
      journey: [
        {
          label: 'Comprender',
          title: 'Suba sus procedimientos de calidad',
          body: 'Gamas de control, criterios de aceptación, circuito de decisión: indexados en DocIndex, guían a los agentes.',
        },
        {
          label: 'Mapear',
          title: 'Cuantifique lo que cuestan los reprocesos',
          body: 'Parta del proceso tipo «Control de calidad y no conformidades»: muestras, mediciones, resultados, lote aceptado o no, bloqueo, causas, decisión, acción correctiva. La tasa de error y el coste de reproceso forman parte de la cuantificación.',
        },
        {
          label: 'Construir',
          title: 'Un registro vinculado a los lotes',
          body: 'Cada no conformidad está vinculada a su lote, a su proveedor o a su puesto, con su causa y su decisión: retoque, desecho o desviación autorizada.',
        },
        {
          label: 'Automatizar y luego confiar',
          title: 'La decisión sigue siendo humana, el seguimiento ya no se pierde',
          body: 'El formulario de control crea el registro y avisa al responsable. La decisión sigue siendo de una persona. Un agente recuerda las acciones correctivas atrasadas y prepara la síntesis del mes.',
        },
      ],
      build: {
        title: 'Lo que usted construye',
        items: [
          { title: 'Un formulario de control', body: 'Rellenado en el taller, crea la no conformidad sin copiar nada.' },
          { title: 'Un registro de no conformidades', body: 'Por lote, causa, decisión y coste de reproceso.' },
          { title: 'Un seguimiento de acciones correctivas', body: 'Responsable, fecha límite, recordatorio y cierre.' },
        ],
      },
      limits:
        'TblFlow no es un sistema de gestión documental certificado ni un software de control de taller: no controla las máquinas y no sustituye a su sistema de calidad certificado. Vincula los controles, las decisiones y las acciones.',
      prompts: [
        'Crea un formulario de control que registre el lote, la medición y la foto de la pieza.',
        'Lista las acciones correctivas atrasadas y prepara un recordatorio para cada responsable.',
        'Muestra el coste de los reprocesos por proveedor en el trimestre.',
      ],
      faq: [
        {
          q: '¿La decisión sobre un lote puede ser automática?',
          a: 'Puede automatizar el bloqueo de un lote según una regla, pero la decisión de retoque, desecho o desviación autorizada sigue siendo de una persona.',
        },
        {
          q: '¿Se pueden adjuntar fotos desde el taller?',
          a: 'Sí: el formulario admite archivos adjuntos, y el formulario público se abre en un teléfono.',
        },
        {
          q: '¿TblFlow sustituye a nuestro sistema de calidad?',
          a: 'No. Sigue las no conformidades y las acciones; su sistema documental certificado se mantiene.',
        },
      ],
    },

    procedures: {
      nav: 'Sus procedimientos, por fin al día',
      card: 'Procedimientos indexados, revisados a tiempo, y respuestas extraídas de sus documentos.',
      metaTitle: 'Procedimientos internos al día y consultables | TblFlow',
      metaDescription:
        'Suba sus procedimientos: TblFlow los indexa, le avisa cuando una revisión está vencida y los agentes responden a partir de sus documentos.',
      eyebrow: 'Caso de uso · Documentación interna',
      title: 'Procedimientos que se encuentran, que se revisan y que la IA utiliza',
      subtitle:
        'Sus procedimientos se indexan en DocIndex, se vinculan a los procesos del mapa, se revisan a tiempo gracias a las alertas y sirven de contexto a los agentes.',
      flow: {
        steps: [
          { title: 'Redacción', tool: 'Word', after: 'human' },
          { title: 'Difusión', tool: 'Carpeta compartida', after: 'automation' },
          { title: 'Revisión', tool: 'Recordatorio de agenda', after: 'automation' },
          { title: 'Pregunta de un compañero', tool: 'Correo electrónico', after: 'agent' },
        ],
        rekeyed: 'Procedimiento reclamaciones v3',
        calc: '20 preguntas por semana × 5 minutos ≈ 7 horas al mes.',
      },
      problem: {
        title: 'La versión correcta está en algún sitio',
        body: 'Los procedimientos duermen en una carpeta compartida, en varias versiones. Nadie sabe cuál está al día, la revisión se olvida y las mismas preguntas vuelven por correo.',
      },
      journey: [
        {
          label: 'Comprender',
          title: 'Suba sus documentos tal como están',
          body: 'PDF, Word, Markdown: DocIndex los indexa con búsqueda semántica y de texto completo. Sus equipos buscan con sus propias palabras.',
        },
        {
          label: 'Mapear',
          title: 'Vincule cada procedimiento a su proceso',
          body: 'En el mapa, cada proceso tiene su ficha de procedimiento, su responsable y su próxima fecha de revisión.',
        },
        {
          label: 'Construir',
          title: 'Una base de conocimiento viva',
          body: 'Los procedimientos, sus versiones y sus responsables reunidos, consultables por todo el equipo según sus permisos.',
        },
        {
          label: 'Automatizar y luego confiar',
          title: 'Las revisiones recordadas, las preguntas respondidas',
          body: 'Cada lunes, un correo lista los procedimientos cuya revisión está vencida o próxima. Los agentes se apoyan en sus procedimientos indexados para responder y para actuar según sus reglas.',
        },
      ],
      build: {
        title: 'Lo que usted construye',
        items: [
          { title: 'Una base de procedimientos', body: 'Indexada, con búsqueda, vinculada a los procesos del mapa.' },
          { title: 'Revisiones a su fecha', body: 'Un responsable y una fecha de revisión por procedimiento, con una alerta semanal.' },
          { title: 'Agentes que siguen sus reglas', body: 'Leen sus procedimientos antes de proponer una acción.' },
        ],
      },
      limits:
        'TblFlow no es una gestión documental electrónica certificada: no incluye firma electrónica ni circuito de aprobación documental regulado. Indexa sus procedimientos y los vincula a sus procesos.',
      prompts: [
        'Encuentra el procedimiento de reclamación a clientes más reciente y resúmelo en cinco pasos.',
        'Lista los procedimientos sin responsable o cuya revisión esté vencida.',
        'Responde a esta pregunta de un compañero a partir de nuestros procedimientos, indicando la fuente.',
      ],
      faq: [
        {
          q: '¿Qué formatos se indexan?',
          a: 'Los documentos PDF, Word, PowerPoint, Markdown y de texto. El texto de los PDF, Word y PowerPoint se extrae y se indexa.',
        },
        {
          q: '¿Quién ve qué procedimientos?',
          a: 'Se aplican los permisos de su espacio: cada persona solo ve lo que su rol le permite leer.',
        },
        {
          q: '¿La IA se inventa las respuestas?',
          a: 'Los agentes buscan en sus procedimientos indexados y le muestran la fuente. Verifique siempre antes de actuar sobre una respuesta importante.',
        },
      ],
    },
  },

  audiences: {
    leaders: {
      nav: 'Dirección',
      card: 'Ver lo que cuestan las reintroducciones de datos y decidir qué confiar.',
      metaTitle: 'TblFlow para la dirección: el coste de reintroducir datos',
      metaDescription:
        'Un mapa de sus procesos con sus costes estimados, la lista de los procesos donde más pierde, una vista de dirección imprimible y un informe mensual.',
      eyebrow: 'Para quién · Dirección',
      title: 'Vea lo que le cuestan sus reintroducciones de datos y decida qué confiar',
      subtitle:
        'Usted sabe que sus equipos pasan tiempo copiando datos. TblFlow le muestra dónde, cuánto, y qué se puede automatizar o confiar a agentes.',
      pains: {
        title: 'Lo que le cuesta hoy',
        items: [
          { title: 'Horas invisibles', body: 'La misma información tecleada de nuevo de una herramienta a otra no aparece en ningún cuadro de mando.' },
          { title: 'Herramientas duplicadas', body: 'Una decena de suscripciones de las que nadie sabe cuáles siguen siendo útiles.' },
          { title: 'Decisiones a ciegas', body: 'Las cifras llegan tarde, copiadas, y cada uno tiene su versión.' },
        ],
      },
      build: {
        title: 'Lo que obtiene',
        items: [
          { title: 'El mapa de sus procesos', body: 'Quién hace qué, con qué herramienta, dónde se vuelve a introducir la información, y los costes estimados.' },
          { title: '«¿Dónde pierde dinero?»', body: 'Sus procesos ordenados por ganancia potencial, para elegir por dónde empezar.' },
          { title: 'Una vista de dirección y un informe mensual', body: 'Coste, ganancia potencial, revisiones atrasadas: una página imprimible y un correo el día 1 del mes.' },
        ],
      },
      faq: [
        {
          q: '¿Los costes son medidos?',
          a: 'No: son estimaciones a partir de los volúmenes y las tarifas que usted introduce. Después puede introducir mediciones reales para comparar lo estimado con lo real.',
        },
        {
          q: '¿Hay que migrarlo todo de golpe?',
          a: 'No. Empiece por un proceso. Las herramientas que conserva siguen conectadas, y lo que TblFlow genera permanece inactivo mientras usted no lo haya validado.',
        },
        {
          q: '¿Qué pasa con mi equipo?',
          a: 'Las tareas repetitivas pasan a las automatizaciones y a los agentes; sus equipos conservan la relación con el cliente, el asesoramiento y la decisión.',
        },
      ],
    },

    finance: {
      nav: 'Finanzas y contabilidad',
      card: 'Compras, facturas, cierre y control sin copiar las exportaciones.',
      metaTitle: 'TblFlow para finanzas: facturas y cierre sin reintroducir',
      metaDescription:
        'Para dirección financiera, control de gestión y contabilidad: facturas de proveedores conciliadas, calendario de cobros, márgenes y EBITDA recalculados.',
      eyebrow: 'Para quién · Finanzas y contabilidad',
      title: 'El control financiero que falta entre su contabilidad y sus hojas de cálculo',
      subtitle:
        'Su software de contabilidad lleva los asientos. TblFlow asume todo lo que ocurre a su alrededor: las compras, las facturas, las reclamaciones, los reprocesados y los cuadros de la dirección.',
      pains: {
        title: 'Lo que le cuesta hoy',
        items: [
          { title: 'Facturas sin pedido', body: 'Hay que encontrar la solicitud, el pedido y la recepción antes de pagar.' },
          { title: 'Exportaciones copiadas', body: 'Cada mes, el balance pasa de archivo en archivo hasta la presentación.' },
          { title: 'Reclamaciones de memoria', body: 'Nadie ve de un vistazo lo que queda por cobrar.' },
        ],
      },
      build: {
        title: 'Lo que usted construye',
        items: [
          { title: 'Un circuito de facturas de proveedores', body: 'Solicitud, pedido, recepción y factura vinculados, controlados antes del pago.' },
          { title: 'Un calendario de cobros y reclamaciones', body: 'Las facturas de clientes seguidas hasta el cobro, con las reclamaciones preparadas por un agente.' },
          { title: 'Márgenes y EBITDA al día', body: 'Recalculados en cada importación, con una síntesis mensual para revisar.' },
        ],
      },
      faq: [
        {
          q: '¿TblFlow es un software de contabilidad?',
          a: 'No. No lleva los asientos, no emite facturas electrónicas conformes y no hace la conciliación bancaria. Conecta los pasos que rodean a su contabilidad.',
        },
        {
          q: '¿Cómo llegan los datos contables?',
          a: 'Mediante una exportación CSV del balance o del libro mayor, importada en una tabla. Si su software publica una API, TblFlow puede generar un conector.',
        },
        {
          q: '¿Los importes están protegidos?',
          a: 'Los permisos se ajustan por rol y por campo: usted decide quién lee, quién modifica y quién no ve los importes.',
        },
      ],
    },

    'sales-admin': {
      nav: 'Administración de ventas',
      card: 'Del presupuesto a la factura sin copiar los pedidos.',
      metaTitle: 'Administración de ventas: del presupuesto a la factura',
      metaDescription:
        'Presupuestos, pedidos, facturas y reclamaciones en una base: datos introducidos una vez, automatizaciones para el resto y agentes que preparan reclamaciones.',
      eyebrow: 'Para quién · Administración de ventas',
      title: 'Introduzca el pedido una vez, no en cada herramienta',
      subtitle:
        'El presupuesto aceptado se convierte en pedido, el pedido prepara la factura y la factura vencida se reclama. Administración de ventas conserva la relación con el cliente, no la introducción de datos.',
      pains: {
        title: 'Lo que le cuesta hoy',
        items: [
          { title: 'El pedido vuelto a teclear', body: 'El presupuesto aceptado se copia en la hoja de pedidos y luego en la factura.' },
          { title: 'Errores de precio', body: 'Cada copia es una oportunidad de equivocarse de línea o de descuento.' },
          { title: 'El cliente que espera', body: 'Para saber en qué punto está su pedido, hay que abrir tres archivos.' },
        ],
      },
      build: {
        title: 'Lo que usted construye',
        items: [
          { title: 'Un pipeline de presupuesto a pedido', body: 'El estado del presupuesto activa el pedido, con las mismas líneas.' },
          { title: 'Un seguimiento de pedidos', body: 'En qué punto está cada pedido, visible para todo el equipo según sus permisos.' },
          { title: 'Reclamaciones listas', body: 'Un agente prepara las reclamaciones según su procedimiento; usted valida.' },
        ],
      },
      faq: [
        {
          q: '¿Podemos conservar nuestro CRM?',
          a: 'Sí. Las herramientas que conserva siguen conectadas. TblFlow incluye también una plantilla «Ventas y relación con el cliente» si quiere reunirlo todo.',
        },
        {
          q: '¿Los clientes pueden hacer pedidos por sí mismos?',
          a: 'Un formulario público puede alimentar sus pedidos. No hay cuentas de cliente con permisos propios.',
        },
        {
          q: '¿Cuánto se tarda en empezar?',
          a: 'Un proceso se mapea gratis. Las tablas se generan a partir del mapa, y sus datos existentes se importan en CSV o Excel.',
        },
      ],
    },

    manufacturing: {
      nav: 'Industria y producción',
      card: 'Calidad, aprovisionamiento y stocks gestionados alrededor del ERP.',
      metaTitle: 'TblFlow para industria: calidad, aprovisionamiento y stocks',
      metaDescription:
        'No conformidades, aprovisionamiento, stocks y envío conectados alrededor de su ERP, con el coste de los reprocesos estimado y agentes bajo validación.',
      eyebrow: 'Para quién · Industria y producción',
      title: 'Gestione el taller alrededor de su ERP, sin sustituirlo',
      subtitle:
        'Su ERP gestiona la producción. TblFlow asume lo que aún circula en papel y en hojas de cálculo: los controles, las no conformidades, los umbrales, las reposiciones y los recordatorios.',
      pains: {
        title: 'Lo que le cuesta hoy',
        items: [
          { title: 'Fichas en papel', body: 'Controles y desviaciones introducidos dos veces, entre el taller y la oficina.' },
          { title: 'Reprocesos sin cuantificar', body: 'El coste de las no conformidades no se refleja en ningún sitio.' },
          { title: 'Roturas de materia prima', body: 'El umbral se supera antes de que alguien lo vea.' },
        ],
      },
      build: {
        title: 'Lo que usted construye',
        items: [
          { title: 'Un registro de calidad', body: 'No conformidades vinculadas a los lotes, causas, decisiones y acciones correctivas.' },
          { title: 'Un aprovisionamiento con seguimiento', body: 'Umbrales, solicitudes, pedidos y recepciones de materias conectados.' },
          { title: 'Un mapa cuantificado del taller', body: 'Tasa de error, coste de reproceso y el vocabulario «orden de fabricación» en el mapa.' },
        ],
      },
      faq: [
        {
          q: '¿TblFlow hace planificación de la producción o MRP?',
          a: 'No. No planifica la producción y no sigue el taller en tiempo real; el mapa describe sus procesos, no los ejecuta. Asume los flujos que rodean al ERP.',
        },
        {
          q: '¿Se puede utilizar el vocabulario de la fábrica?',
          a: 'Sí: el ajuste predefinido «Industria y logística» muestra «orden de fabricación» en lugar de «pedido» en el mapa.',
        },
        {
          q: '¿Se puede conectar nuestro ERP?',
          a: 'Si publica una API, TblFlow puede generar un conector a partir de su documentación. Para una herramienta sin API, se puede repetir una tarea web grabada.',
        },
      ],
    },

    retail: {
      nav: 'Comercio y distribución',
      card: 'Stocks, reposición, pedidos y posventa en una sola base.',
      metaTitle: 'TblFlow para el comercio: stocks, reposición y posventa',
      metaDescription:
        'Inventarios rotativos, alertas de umbral, pedidos de reposición, preparación y posventa conectados en una base, con agentes que preparan y usted que valida.',
      eyebrow: 'Para quién · Comercio y distribución',
      title: 'Stocks, reposición y posventa en una sola base',
      subtitle:
        'Los artículos, los movimientos, los pedidos y las devoluciones en un mismo lugar. El umbral avisa, el agente prepara la reposición, usted valida.',
      pains: {
        title: 'Lo que le cuesta hoy',
        items: [
          { title: 'Roturas de stock descubiertas demasiado tarde', body: 'El stock solo es correcto en el momento del inventario.' },
          { title: 'Pedidos a proveedores hechos a mano', body: 'Cada reposición es un correo redactado a partir de una hoja de cálculo.' },
          { title: 'Una posventa dispersa', body: 'Garantía, devolución, reparación: cada paso en una herramienta distinta.' },
        ],
      },
      build: {
        title: 'Lo que usted construye',
        items: [
          { title: 'Un stock seguido por movimientos', body: 'La plantilla «Gestión de stocks»: artículos, movimientos, valor del stock, alertas de umbral.' },
          { title: 'Una reposición preparada', body: 'Los artículos por debajo del umbral y un borrador de pedido por proveedor, para validar.' },
          { title: 'Un seguimiento de la posventa', body: 'Solicitud, garantía, diagnóstico, devolución y cierre vinculados al pedido.' },
        ],
      },
      faq: [
        {
          q: '¿TblFlow se conecta a mi tienda en línea?',
          a: 'No hay un conector de comercio electrónico integrado. Si su plataforma publica una API, TblFlow puede generar un conector; si no, los pedidos se importan en CSV.',
        },
        {
          q: '¿Se pueden leer códigos de barras?',
          a: 'No. El código EAN es un campo del artículo, pero no hay lectura de códigos de barras.',
        },
        {
          q: '¿Por dónde empezar?',
          a: 'Por el inventario rotativo o la reposición: dos procesos tipo listos para importar al mapa, y una plantilla de base de stock.',
        },
      ],
    },

    firms: {
      nav: 'Despachos y servicios',
      card: 'Misiones, expedientes, tiempo y facturación sin hojas de cálculo copiadas.',
      metaTitle: 'TblFlow para despachos: misiones, expedientes y márgenes',
      metaDescription:
        'Para consultoría, asesoría contable y jurídica: misiones y expedientes con seguimiento, margen por misión, facturación y reclamaciones.',
      eyebrow: 'Para quién · Despachos y servicios',
      title: 'Sus misiones y sus expedientes, de la carta de encargo al cobro',
      subtitle:
        'Cada misión o expediente vinculado a su cliente, a su tiempo dedicado, a su factura y a su margen. Los procedimientos del despacho indexados, las reclamaciones preparadas.',
      pains: {
        title: 'Lo que le cuesta hoy',
        items: [
          { title: 'Márgenes adivinados', body: 'El tiempo dedicado y la facturación viven en archivos separados.' },
          { title: 'Expedientes dispersos', body: 'Documentos, vencimientos y reclamaciones de justificantes en el correo.' },
          { title: 'Procedimientos orales', body: 'El saber hacer del despacho está en la cabeza de unas pocas personas.' },
        ],
      },
      build: {
        title: 'Lo que usted construye',
        items: [
          { title: 'Un seguimiento de misiones', body: 'La plantilla «Control financiero»: misiones y proyectos con su margen bruto.' },
          { title: 'Expedientes y vencimientos', body: 'Cada expediente, sus documentos, sus vencimientos y sus reclamaciones en un mismo lugar.' },
          { title: 'Los procedimientos del despacho', body: 'Indexados en DocIndex, vinculados a los procesos, utilizados por los agentes.' },
        ],
      },
      faq: [
        {
          q: '¿El vocabulario puede ser el del despacho?',
          a: 'Sí: los ajustes predefinidos «Servicios y consultoría» y «Contabilidad y asuntos jurídicos» muestran «misión» o «expediente» en el mapa.',
        },
        {
          q: '¿Se puede compartir un seguimiento con un cliente?',
          a: 'Sí, en solo lectura mediante un enlace o un formulario público. No hay un espacio de cliente con cuentas y permisos propios para cada cliente.',
        },
        {
          q: '¿Los datos de los clientes se quedan con nosotros?',
          a: 'Viven en un PostgreSQL real, exportable, y TblFlow puede autoalojarse con el plan Enterprise.',
        },
      ],
    },
  },
} satisfies SolutionsLocale;

export default es;
