import type { FeaturesCopy } from './types';

const de = {
  nav: 'Funktionen',
  metaTitle: 'Funktionen: alles, was TblFlow leistet',
  metaDescription:
    "Tabellen, Oberflächen, Automatisierungen, Whiteboards, KI-Agenten, Dokumentation, Berechtigungen, DSGVO- und AI-Act-Audits: der Funktionskatalog von TblFlow.",
  eyebrow: 'Funktionen',
  title: 'Alles, was TblFlow für Sie tut.',
  subtitle:
    "Sieben Ressourcen, die TblFlow aus Ihren Prozessen erzeugt, und die Funktionen drumherum: Berechtigungen, kontrollierte KI, Anbindung an Ihre Tools.",
  availability: "Die Verfügbarkeit einiger Funktionen hängt vom Tarif ab.",
  pricingLink: 'Preise ansehen',
  home: {
    title: 'Alles, was TblFlow kann',
    body: "Tabellen, Oberflächen, Automatisierungen, Whiteboards, Agenten, Dokumentation, Berechtigungen, Audits: der vollständige Katalog in vier Bereichen.",
    link: 'Alle Funktionen ansehen',
  },
  groups: {
    build: {
      title: 'Was TblFlow erzeugt',
      intro: "Sieben Ressourcen, erstellt aus der Landkarte Ihrer Prozesse. Sie prüfen, bevor Sie live gehen.",
    },
    team: {
      title: 'Gemeinsam arbeiten, die Kontrolle behalten',
      intro: "Jeder sieht und tut, was Sie festgelegt haben, und alles bleibt nachvollziehbar.",
    },
    ai: {
      title: "Eine KI, die Sie kontrollieren",
      intro: "Anbieter, Kontext, Verbrauch und Audits: Die KI bleibt unter Ihrer Kontrolle.",
    },
    connect: {
      title: 'Mit Ihren Tools verbunden, bereit für die Produktion',
      intro: "Ihre anderen Tools bleiben angebunden, und Sie testen, bevor Sie veröffentlichen.",
    },
  },
  items: {
    tables: {
      title: 'Tabellen mit eigener API',
      body: "Tabellen auf echtem PostgreSQL, jede über die REST-API erreichbar.",
    },
    interfaces: {
      title: 'Oberflächen, online veröffentlichbar',
      body: "Oberflächen auf Basis Ihrer Tabellen, die Sie online veröffentlichen können.",
    },
    automations: {
      title: 'Automatisierungen',
      body: "Abfolgen von Aktionen, die das erneute Eintippen ersetzen. Sie werden inaktiv angelegt: Sie prüfen sie, bevor Sie sie aktivieren.",
    },
    whiteboards: {
      title: 'Whiteboards',
      body: "Ein gemeinsames Whiteboard innerhalb einer Base, um zu skizzieren und gemeinsam zu denken, mit Unterstützung der KI.",
    },
    browsers: {
      title: 'Browser-Automatisierungen',
      body: "Für eine Website ohne API führt ein von der KI gesteuerter Browser (computer use) die Aufgabe für Sie aus, nach Ihrer Zustimmung.",
    },
    agents: {
      title: 'KI-Agenten',
      body: "Agenten mit einer klar umrissenen Aufgabe, mit den Tools und Rechten, die Sie ihnen geben, nach Ihren Regeln und mit Ihrer Freigabe.",
    },
    docs: {
      title: "Von der KI indexierte Dokumentation (DocIndex)",
      body: "Ihre Dokumente werden für eine Suche nach Bedeutung wie nach Wörtern indexiert und können von der KI und Ihren Agenten genutzt werden.",
    },
    permissions: {
      title: 'Maßgeschneiderte Berechtigungen',
      body: "Rollen und feingranulare Rechte, die Sie festlegen und die für jede Anfrage gelten, auch für die der KI.",
    },
    invitations: {
      title: 'Kollegen und externe Personen',
      body: "Laden Sie Kollegen oder Personen außerhalb des Unternehmens ein, mit genau den Zugriffen, die Sie wählen.",
    },
    orgchart: {
      title: "Ein Organigramm des Unternehmens",
      body: "Importieren Sie das Organigramm Ihres Unternehmens, damit TblFlow Ihre Organisation abbildet.",
    },
    tokens: {
      title: "Persönliche Zugriffstoken",
      body: "Jeder Nutzer erstellt und verwaltet seine eigenen Token, um die API aufzurufen.",
    },
    myNotifications: {
      title: 'Ihre Benachrichtigungen, nach Ihren Wünschen',
      body: "Jeder Nutzer legt fest, welche Benachrichtigungen er erhält.",
    },
    logs: {
      title: 'Ein Protokoll der Aktivitäten',
      body: "Eine Aufzeichnung der Aktionen in Ihrem Space, zum Nachvollziehen dessen, was passiert ist.",
    },
    providers: {
      title: "Der KI-Anbieter Ihrer Wahl",
      body: "TblFlow ist an keinen KI-Anbieter gebunden: Verbinden Sie den Ihres Unternehmens oder ein individuelles Konto.",
    },
    context: {
      title: 'Eine KI, die Ihren Kontext kennt',
      body: "Der Assistent kennt die Struktur Ihres Spaces (Bases, Felder, Prozesse) und antwortet auf dieser Grundlage.",
    },
    usage: {
      title: "Ihr KI-Verbrauch",
      body: "Verfolgen Sie, was die KI in Ihrem Space verbraucht.",
    },
    aiAct: {
      title: 'AI-Act-Audit',
      body: "Eine von der KI erzeugte Lösung wird automatisch geprüft, damit Sie Ihre Pflichten aus der europäischen KI-Verordnung vorbereiten können. Das ersetzt keine Rechtsberatung.",
    },
    gdpr: {
      title: 'Automatisches DSGVO-Audit',
      body: "Ein automatisches DSGVO-Audit dessen, was Sie bauen, um die Punkte zu erkennen, die Aufmerksamkeit brauchen.",
    },
    designMd: {
      title: 'Ihr Corporate Design mit design.md',
      body: "Binden Sie Ihre design.md-Datei ein: Die KI nutzt sie, damit erzeugte Oberflächen Ihrem Corporate Design folgen.",
    },
    skills: {
      title: 'Skills: erzeugen und importieren',
      body: "Erzeugen oder importieren Sie Skills, um Ihren Agenten wiederverwendbares Know-how mitzugeben.",
    },
    connectors: {
      title: 'Ein Generator für API-Connectors',
      body: "Erstellen Sie mit Hilfe der KI einen Connector zur API eines Tools, für das es keinen fertigen gibt.",
    },
    oauth: {
      title: 'OAuth-Anwendungen',
      body: "Verbinden Sie Ihre Anwendungen per OAuth, ohne ein Passwort weiterzugeben.",
    },
    mcp: {
      title: "MCP, überall dort, wo die KI handelt",
      body: "Binden Sie MCP-Server ein: Sie sind im KI-Chat, in Automatisierungen und in Agenten nutzbar. TblFlow hat außerdem einen eigenen MCP-Server.",
    },
    chatNotifications: {
      title: 'Benachrichtigungen in Slack, Teams, Google Chat',
      body: "Erhalten Sie die Benachrichtigungen von TblFlow im Messaging-Tool Ihres Teams.",
    },
    email: {
      title: 'E-Mails aus Automatisierungen',
      body: "Richten Sie den E-Mail-Versand aus Ihren Automatisierungen ein.",
    },
    preprod: {
      title: 'Ein Vorproduktions-Space',
      body: "Testen Sie Ihre Lösungen in einem getrennten Space, bevor Sie sie in Betrieb nehmen.",
    },
  },
} satisfies FeaturesCopy;

export default de;
