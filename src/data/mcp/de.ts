import type { McpKey } from './fr';

const de = {
  nav: 'MCP-Server',
  'meta.title': 'Offizieller MCP-Server: TblFlow in Claude',
  'meta.description':
    'Verbinden Sie TblFlow mit Claude: Der offizielle MCP-Server liest und schreibt Ihre Daten mit Ihren Rechten und gewählten Spaces. Ab dem Kostenlos-Tarif.',
  breadcrumb: 'MCP-Server',
  'hero.eyebrow': 'Offizieller MCP-Server',
  'hero.title': 'Arbeiten Sie mit Ihren TblFlow-Daten direkt in Claude.',
  'hero.subtitle':
    'Fügen Sie TblFlow als Connector in Claude hinzu, melden Sie sich mit Ihrem gewohnten Konto an und wählen Sie die zugänglichen Spaces. Claude kann dann Ihre Datensätze direkt in der Unterhaltung abfragen, anlegen und ändern.',
  'hero.cta.primary': 'So verbinden Sie',
  'hero.cta.secondary': 'Dokumentation lesen',
  'hero.note': 'Ab dem Kostenlos-Tarif verfügbar, wie die REST-API.',
  'hero.url.label': 'Server-URL',
  'benefits.title': 'Was sich ändert',
  'benefits.1.title': 'Ihre Daten abfragen',
  'benefits.1.body':
    'Stellen Sie Claude Ihre Fragen: Es liest das Schema Ihrer Bases, filtert Datensätze und durchsucht den knowledge graph per semantischer Suche und Volltextsuche.',
  'benefits.2.title': 'Aus der Unterhaltung heraus handeln',
  'benefits.2.body':
    'Legen Sie Datensätze an und ändern Sie sie, fügen Sie eine Tabelle oder ein Feld hinzu, lösen Sie eine Automatisierung aus oder starten Sie einen KI-Agenten, ohne Claude zu verlassen.',
  'benefits.3.title': 'Die Kontrolle behalten',
  'benefits.3.body':
    'Bei der Verbindung wählen Sie die zugänglichen Spaces und Bases sowie die Berechtigungen. Ihre TblFlow-Rechte gelten für jede Anfrage.',
  'tools.title': '13 Tools, einfach erklärt',
  'tools.intro':
    'Das kann Claude tun. Die sensibleren Fähigkeiten sind Optionen, die Sie bei der Verbindung aktivieren.',
  'tools.1.title': 'Erkunden',
  'tools.1.body': 'Ihre Spaces und Ihre Bases auflisten.',
  'tools.2.title': 'Verstehen',
  'tools.2.body': 'Das Schema einer Base beschreiben.',
  'tools.3.title': 'Lesen',
  'tools.3.body': 'Datensätze auflisten, filtern und lesen.',
  'tools.4.title': 'Suchen',
  'tools.4.body': 'Den knowledge graph per semantischer Suche und Volltextsuche durchsuchen.',
  'tools.5.title': 'Anlegen und ändern',
  'tools.5.body': 'Datensätze anlegen und ändern.',
  'tools.6.title': 'Löschen',
  'tools.6.body':
    'Datensätze löschen: zuerst eine Vorschau, dann eine ausdrückliche Bestätigung. Die Datensätze landen im Papierkorb.',
  'tools.7.title': 'Strukturieren',
  'tools.7.body': 'Eine Tabelle oder ein Feld anlegen.',
  'tools.8.title': 'Automatisieren',
  'tools.8.body': 'Eine Automatisierung auslösen, sofern ihr Eigentümer sie freigegeben hat.',
  'tools.9.title': 'Delegieren',
  'tools.9.body': 'Einen KI-Agenten starten, sofern sein Eigentümer ihn freigegeben hat.',
  'tools.perm.read': 'Lesen (Standard)',
  'tools.perm.write': 'Schreiben (Option)',
  'tools.perm.delete': 'Löschen (Option)',
  'tools.perm.schema': 'Schema (Option)',
  'tools.perm.trigger': 'Auslösen (Option)',
  'steps.title': 'In drei Schritten verbinden',
  'steps.1.title': 'Einen benutzerdefinierten Connector hinzufügen',
  'steps.1.body':
    'In Claude (Web, Desktop oder Mobil): Einstellungen → Connectors → Benutzerdefinierten Connector hinzufügen, dann die Server-URL eingeben.',
  'steps.2.title': 'Anmelden',
  'steps.2.body': 'Melden Sie sich mit Ihrem gewohnten TblFlow-Konto an (OAuth 2.1).',
  'steps.3.title': 'Spaces auswählen',
  'steps.3.body':
    'Wählen Sie die zugänglichen Spaces und Bases und dann die Berechtigungen. Lesen ist standardmäßig aktiv.',
  'steps.code.title': 'Mit Claude Code',
  'steps.code.body': 'Ein Befehl genügt:',
  'control.title': 'Was Sie kontrollieren',
  'control.1':
    'Sie wählen, was Claude sieht: Spaces, Bases und Berechtigungen. Lesen ist der Standard; Schreiben, Löschen, Schema und Auslösen sind Optionen.',
  'control.2': 'Ihre bestehenden TblFlow-Rechte gelten für jede Anfrage.',
  'control.3':
    'Automatisierungen und Agenten lassen sich nur auslösen, wenn ihr Eigentümer sie freigegeben hat.',
  'control.4':
    'Ein Löschvorgang läuft über eine Vorschau und dann eine ausdrückliche Bestätigung, und die Datensätze landen im Papierkorb.',
  'control.5':
    'Der Inhalt der Unterhaltungen wird nicht protokolliert: Gespeichert werden nur das aufgerufene Tool, der Zeitpunkt, die Dauer und der Status. Die Ergebnisse der Tools werden an den Assistenten (Claude) übermittelt, um Ihre Anfrage zu beantworten.',
  'control.6':
    'Entwickelt nach den Vorgehensweisen von ISO 27001 und ISO 42001, der DSGVO und dem AI Act. Das ist ein Konzeptionsansatz: Bislang liegt keine Zertifizierung vor.',
  'limits.title': 'Ratenlimits je Tarif',
  'limits.intro':
    'Der MCP-Server ist in jedem Tarif enthalten. Nur das Limit der Anfragen pro Minute ändert sich.',
  'limits.col.tier': 'Tarif',
  'limits.col.rate': 'Anfragen pro Minute',
  'status.title': 'Wo Sie ihn finden',
  'status.body':
    'Der Server ist in der offiziellen MCP-Registry unter dem Namen com.tblflow/tblflow veröffentlicht (Version 1.0.0). Die Einreichung im Connector-Verzeichnis von Claude steht noch aus. ChatGPT wird noch nicht unterstützt.',
  'faq.title': 'Häufige Fragen',
  'faq.1.q': 'Wer sieht meine Daten?',
  'faq.1.a':
    'Sie wählen bei der Verbindung die zugänglichen Spaces und Bases, und Ihre TblFlow-Rechte gelten für jede Anfrage. Die Ergebnisse der Tools werden an den Assistenten (Claude) übermittelt, um Ihre Anfrage zu beantworten. TblFlow protokolliert den Inhalt der Unterhaltungen nicht: Gespeichert werden nur das aufgerufene Tool, der Zeitpunkt, die Dauer und der Status.',
  'faq.2.q': 'Kann ich den Zugriff widerrufen?',
  'faq.2.a':
    'Ja. Entfernen Sie den Connector in den Einstellungen von Claude: Claude greift dann nicht mehr auf Ihre TblFlow-Daten zu.',
  'faq.3.q': 'Wird ChatGPT unterstützt?',
  'faq.3.a':
    'Noch nicht. Der Server ist in der offiziellen MCP-Registry veröffentlicht (com.tblflow/tblflow, Version 1.0.0) und verbindet sich mit Claude. Die Einreichung im Connector-Verzeichnis von Claude steht noch aus.',
  'faq.4.q': 'Ist der MCP-Server im Kostenlos-Tarif verfügbar?',
  'faq.4.a':
    'Ja, ab dem Kostenlos-Tarif, wie die REST-API. Nur das Ratenlimit ändert sich: 60, 120, 300 und 600 Anfragen pro Minute für Kostenlos, Pro, Business und Enterprise.',
  'faq.5.q': 'Was kann Claude mit meinen Automatisierungen und Agenten tun?',
  'faq.5.a':
    'Es kann sie nur auslösen, wenn ihr Eigentümer sie freigegeben hat. Bei einer Automatisierung startet run_automation einen Probelauf mit Beispieldaten: Es werden keine Daten geändert.',
  'home.line': 'Verbinden Sie TblFlow mit Claude — offizieller MCP-Server',
  'home.card.title': 'Claude',
  'home.card.body':
    'Fragen Sie Ihre TblFlow-Daten ab und ändern Sie sie direkt in der Unterhaltung, mit Ihren Rechten und den Spaces, die Sie wählen.',
  'home.card.cta': 'MCP-Server entdecken',
  'pricing.row': 'MCP-Server: Anfragen / Minute',
  'pricing.highlight': 'MCP-Server inklusive: {n} Anfragen / Minute',
  'privacy.heading': 'MCP-Server',
  'privacy.p1':
    'Dieser Abschnitt beschreibt die Verarbeitungen, die speziell den MCP-Server von TblFlow (https://app.tblflow.com/mcp) betreffen, über den ein KI-Assistent wie Claude auf Ihren TblFlow-Space zugreifen kann. Der Server ist Teil der Anwendung: Seine Dokumente (Nutzungsbedingungen, Datenschutzerklärung, Auftragsverarbeitungsvertrag) sind auf app.tblflow.com veröffentlicht.',
  'privacy.p2':
    'Verarbeitete Daten: bei der Verbindung Ihre TblFlow-Identität (OAuth 2.1) sowie die Spaces, Bases und Berechtigungen, die Sie wählen; bei jedem Aufruf die Daten Ihres Spaces, die das angeforderte Tool liest oder schreibt, im Rahmen Ihrer Rechte.',
  'privacy.p3':
    'Zweck: die Aktionen auszuführen, die Sie vom Assistenten verlangen, und die Sicherheit des Dienstes zu gewährleisten.',
  'privacy.p4':
    "Aufbewahrung: Der Inhalt von Unterhaltungen sowie die Argumente und Ergebnisse der Tools werden nie gespeichert. Ein Audit-Protokoll speichert für jeden Tool-Aufruf die Kennung des Nutzers, den Namen des Tools, den Zeitpunkt, die Dauer in Millisekunden und den Status (Erfolg oder Fehler) für 6 Monate und wird danach automatisch gelöscht. Dynamisch registrierte OAuth-Clients, die ungenutzt bleiben, werden nach 30 Tagen gelöscht.",
  'privacy.p5':
    'Weitergabe: Die Ergebnisse der Tools werden an den Assistenten übermittelt, den Sie verbunden haben (zum Beispiel Claude von Anthropic), der sie nach seiner eigenen Datenschutzerklärung verarbeitet, um Ihre Anfrage zu beantworten. Verbinden Sie nur Spaces, deren Inhalt an den Assistenten übermittelt werden darf.',
  'privacy.p6':
    'Rahmen: Der Server ist nach den Vorgehensweisen von ISO 27001 und ISO 42001, der DSGVO und dem AI Act konzipiert. Bislang liegt keine Zertifizierung vor.',
  'privacy.p7':
    'Ihre Rechte (Auskunft, Berichtigung, Löschung, Einschränkung, Widerspruch, Datenübertragbarkeit sowie Beschwerde bei der Aufsichtsbehörde) üben Sie für diese Verarbeitungen wie oben beschrieben aus. Kontakt für den Datenschutz:',
} as const satisfies Record<McpKey, string>;

export default de;
