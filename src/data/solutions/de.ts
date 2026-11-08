import type { SolutionsLocale } from './types';

/**
 * Copy (de), translated from fr.ts of the "Who is it for?" and "Use cases" pages. Every
 * claim was checked against the TblFlow application code (origin/main, November
 * 2026): templates "Pilotage financier" and "Gestion des stocks", the library
 * of process types, DocIndex, automations, agents under approval. Costs are
 * always "estimated", figures are labelled as examples, and each use case says
 * plainly what TblFlow does not do (docs/positionnement.md).
 */
const de = {
  ui: {
    forNav: 'Für wen?',
    useCasesNav: 'Anwendungsfälle',
    forIndex: {
      metaTitle: 'Für wen ist TblFlow? Geschäftsführung, Finanzen, Handel',
      metaDescription:
        'TblFlow ist für KMU, die Informationen von Tool zu Tool neu erfassen: Geschäftsführung, Finanzen, Vertriebsinnendienst, Industrie, Handel, Kanzleien.',
      title: 'Für wen?',
      subtitle:
        'Für KMU, die mit Excel und rund zehn Tools arbeiten. Jeder Bereich erfasst etwas anderes doppelt: Hier sehen Sie, was TblFlow für Ihren ändert.',
    },
    useCasesIndex: {
      metaTitle: 'TblFlow-Anwendungsfälle: vom Angebot zum Zahlungseingang',
      metaDescription:
        'Sechs durchgängige Abläufe mit Neuerfassung von Tool zu Tool und wie TblFlow sie abbildet, automatisiert und Agenten unter Ihrer Freigabe übergibt.',
      title: 'Anwendungsfälle',
      subtitle:
        'Sechs Abläufe, in denen dieselbe Information von Hand zu Hand und von Tool zu Tool wandert. Zu jedem: was er heute kostet und was TblFlow daraus macht.',
    },
    today: 'Heute',
    withTblflow: 'Mit TblFlow',
    journeyTitle: 'Wie TblFlow ihn übernimmt',
    limitsTitle: 'Was TblFlow nicht tut',
    promptsTitle: 'Was Sie TblFlow fragen würden',
    promptsNote: 'Anfragen in Ihren eigenen Worten. Die KI macht Vorschläge, nichts wird ohne Ihre Freigabe aktiviert.',
    faqTitle: 'Häufige Fragen',
    useCasesFor: 'Anwendungsfälle',
    audiencesFor: 'Für wen',
    planNote:
      'Die Karte eines Prozesses ist kostenlos, einschließlich der geschätzten Kosten. Die vollständige Karte, „Ersetzen“ und der Monatsbericht sind ab dem Tarif Essential enthalten.',
    cta: 'Loslegen',
    secondaryCta: 'Prozesslandkarte ansehen',
    example: 'Beispiel',
    more: 'Mehr erfahren',
  },

  useCases: {
    'quote-to-cash': {
      nav: 'Vom Angebot zum Zahlungseingang',
      card: 'Angebot, Auftrag, Rechnung und Mahnung ohne erneute Erfassung zwischen den Tools.',
      metaTitle: 'Vom Angebot zum Zahlungseingang ohne Neuerfassung | TblFlow',
      metaDescription:
        'Angebot in Word, Auftrag in Excel, Rechnung anderswo: TblFlow verbindet Angebot, Auftrag, Rechnung und Mahnung in einer Datenbank.',
      eyebrow: 'Anwendungsfall · Vertrieb und Fakturierung',
      title: 'Vom Angebot zum Zahlungseingang, ohne denselben Betrag viermal abzutippen',
      subtitle:
        'Das angenommene Angebot wird zum Auftrag, der Auftrag bereitet die Rechnung vor, die überfällige Rechnung löst die Mahnung aus. Eine einzige Erfassung, am Anfang.',
      flow: {
        steps: [
          { title: 'Angebot', tool: 'Word', after: 'human' },
          { title: 'Auftrag', tool: 'Excel', after: 'automation' },
          { title: 'Rechnung', tool: 'Google Sheets', after: 'automation' },
          { title: 'Mahnung', tool: 'Gmail', after: 'agent' },
        ],
        rekeyed: 'Aurora Ops · 4.820 €',
        calc: '40 Angebote pro Monat × 3 Neuerfassungen × 10 Minuten ≈ 20 Stunden pro Monat.',
      },
      problem: {
        title: 'Derselbe Kunde, derselbe Betrag, viermal',
        body: 'Das Angebot entsteht in Word, der Auftrag wird in eine Tabelle abgetippt, die Rechnung übernimmt die Positionen von Hand, und die Mahnung läuft aus dem Gedächtnis. Jede Kopie ist eine Fehlerquelle, und niemand sieht auf einen Blick, was noch aussteht.',
      },
      journey: [
        {
          label: 'Verstehen',
          title: 'Legen Sie Ihr Fakturierungsverfahren ab',
          body: 'Ihr Fakturierungsverfahren und Ihre Mahnregeln werden als PDF oder Markdown in DocIndex indexiert. Die Tools, die Sie behalten, bleiben verbunden.',
        },
        {
          label: 'Abbilden',
          title: 'Sehen Sie, wo der Betrag neu getippt wird',
          body: 'Beginnen Sie mit dem Standardprozess „Kundenfakturierung“ aus der Bibliothek: Anfrage, Auftragsprüfung, Vorbereitung, Freigabe hoher Beträge, Versand, Fälligkeitsüberwachung, Mahnung, Zahlungseingang. Geben Sie Ihre Mengen ein: TblFlow schätzt die Kosten jedes Schritts.',
        },
        {
          label: 'Aufbauen',
          title: 'Eine Datenbank für Angebote, Aufträge und Rechnungen',
          body: 'TblFlow erzeugt die Tabellen und ihre Verknüpfungen: Kunde, Angebot, Auftrag und Rechnung werden nur einmal erfasst. Ihre vorhandenen Daten werden aus Ihren CSV- oder Excel-Dateien importiert.',
        },
        {
          label: 'Automatisieren, dann übergeben',
          title: 'Die Regel an eine Automatisierung, die Mahnung an einen Agenten',
          body: 'Sobald ein Angebot auf „Angenommen“ wechselt, legt eine Automatisierung den Auftrag an und bereitet die Rechnung vor. Ein Agent mahnt überfällige Rechnungen nach Ihrem Verfahren: Er bereitet die Nachrichten vor, Sie geben sie frei.',
        },
      ],
      build: {
        title: 'Was Sie aufbauen',
        items: [
          { title: 'Eine Angebotsverfolgung', body: 'Nach Status, vom Entwurf bis zur Annahme, mit verknüpftem Betrag und Kunden.' },
          { title: 'Ein Kundenzahlungsplan', body: 'Kommende, überfällige und bezahlte Rechnungen, mit dem, was diesen Monat noch einzuziehen ist.' },
          { title: 'Vorbereitete Mahnungen', body: 'Ein Agent, der Ihrem Verfahren folgt und Ihnen jede Mahnung vor dem Versand vorlegt.' },
        ],
      },
      limits:
        'TblFlow führt nicht Ihre Buchhaltung und stellt keine konforme elektronische Rechnung aus. Ihre Rechnung geht weiterhin von Ihrem Fakturierungstool aus; TblFlow behält die Verbindung zwischen Angebot, Auftrag, Rechnung und Mahnung sowie den noch offenen Betrag.',
      prompts: [
        'Sobald ein Angebot auf „Angenommen“ wechselt, lege den Auftrag mit denselben Positionen an und informiere den Vertriebsinnendienst.',
        'Liste die Rechnungen auf, die seit mehr als 30 Tagen überfällig sind, und bereite für jede eine Mahnung nach unserem Verfahren vor.',
        'Zeige mir, was diesen Monat noch einzuziehen ist, nach Kunde.',
      ],
      faq: [
        {
          q: 'Muss ich meine Fakturierungssoftware aufgeben?',
          a: 'Nein. TblFlow verbindet die Schritte und behält die Verfolgung; die Rechnung kann weiterhin von Ihrem aktuellen Tool ausgehen. Wenn dieses Tool eine API anbietet, kann TblFlow sich damit verbinden.',
        },
        {
          q: 'Gehen die Mahnungen von allein raus?',
          a: 'Nein. Der Agent bereitet jede Mahnung auf Grundlage Ihres Verfahrens und Ihrer Tabellen vor, und Sie geben sie vor dem Versand frei. Nichts wird ohne Ihre Zustimmung aktiviert.',
        },
        {
          q: 'Kann ich meine vorhandenen Angebote und Rechnungen übernehmen?',
          a: 'Ja. Importieren Sie Ihre CSV- oder Excel-Dateien in eine vorhandene oder in eine neue Tabelle.',
        },
      ],
    },

    'procure-to-pay': {
      nav: 'Vom Bedarf zur Lieferantenzahlung',
      card: 'Bestellanforderungen, Bestellungen, Wareneingänge und Lieferantenrechnungen verbunden.',
      metaTitle: 'Einkauf und Lieferantenrechnungen ohne Neuerfassung',
      metaDescription:
        'Bestellanforderung, Bestellung, Wareneingang, Lieferantenrechnung: TblFlow verbindet jeden Schritt in einer Datenbank und bereitet den Abgleich vor.',
      eyebrow: 'Anwendungsfall · Einkauf und Kreditorenbuchhaltung',
      title: 'Vom Bedarf zur Lieferantenzahlung, jede Rechnung mit ihrer Bestellung abgeglichen',
      subtitle:
        'Die Anforderung wird zur Bestellung, der Wareneingang bestätigt, was angekommen ist, die Rechnung wird vor der Zahlung mit der Bestellung abgeglichen.',
      flow: {
        steps: [
          { title: 'Bestellanforderung', tool: 'E-Mail', after: 'human' },
          { title: 'Lieferantenbestellung', tool: 'Excel', after: 'automation' },
          { title: 'Wareneingang', tool: 'Papierbeleg', after: 'human' },
          { title: 'Lieferantenrechnung', tool: 'Buchhaltungssoftware', after: 'agent' },
        ],
        rekeyed: 'BC-1187 · 2.340 €',
        calc: '60 Lieferantenrechnungen pro Monat × 3 Neuerfassungen × 6 Minuten ≈ 18 Stunden pro Monat.',
      },
      problem: {
        title: 'Die Rechnung kommt, und niemand findet die Bestellung',
        body: 'Die Bestellanforderung steckt in einer E-Mail, die Bestellung in einer Tabelle, der Wareneingangsbeleg liegt auf Papier. Wenn die Rechnung eintrifft, muss man alles zusammensuchen, um zu wissen, ob sie zu dem passt, was bestellt und erhalten wurde.',
      },
      journey: [
        {
          label: 'Verstehen',
          title: 'Legen Sie Ihre Einkaufsregeln ab',
          body: 'Freigabeschwellen, gelistete Lieferanten, Unterschriftenlauf: Ihre Regeln werden in DocIndex indexiert und dienen den Agenten als Kontext.',
        },
        {
          label: 'Abbilden',
          title: 'Sehen Sie, wo die Bestellung abgetippt wird',
          body: 'Beginnen Sie mit dem Standardprozess „Einkauf und Beschaffung“: Bedarf, Freigabe, Angebot, Angebotsvergleich, Bestellung, Wareneingang, Abgleich mit der Rechnung, Zahlung. TblFlow schätzt die Kosten jedes Schritts anhand Ihrer Mengen.',
        },
        {
          label: 'Aufbauen',
          title: 'Anforderungen, Bestellungen, Wareneingänge und Rechnungen verknüpft',
          body: 'Das Modell „Finanzsteuerung“ bringt die Tabellen für Lieferantenrechnungen und Spesenabrechnungen mit. Eine Anforderung wird per Formular erfasst, Bestellung und Rechnung bleiben mit ihr verknüpft.',
        },
        {
          label: 'Automatisieren, dann übergeben',
          title: 'Der Abgleich wird vorgeschlagen, die Entscheidung bleibt bei Ihnen',
          body: 'Eine Automatisierung legt die Bestellung an, sobald die Anforderung freigegeben ist. Legen Sie die Lieferantenrechnung im KI-Chat ab: Er schlägt die Positionen vor, ein Agent gleicht sie mit Bestellung und Wareneingang ab, und Sie geben vor der Zahlung frei.',
        },
      ],
      build: {
        title: 'Was Sie aufbauen',
        items: [
          { title: 'Ein Formular für Bestellanforderungen', body: 'Die richtigen Felder, der richtige Freigeber je nach Betrag, ein für alle sichtbarer Status.' },
          { title: 'Ein Register der Lieferantenrechnungen', body: 'Jede Rechnung mit ihrer Bestellung und ihrem Wareneingang verknüpft, samt Fälligkeit.' },
          { title: 'Eine Kontrolle vor der Zahlung', body: 'Abweichungen zwischen bestellt, erhalten und berechnet werden gemeldet, bevor die Rechnung zur Zahlung geht.' },
        ],
      },
      limits:
        'TblFlow bezahlt Ihre Lieferanten nicht: Die Überweisung geht von Ihrer Bank aus. Es liest gescannte Rechnungen nicht automatisch; der KI-Chat schlägt die Positionen anhand der abgelegten Rechnung vor, und Sie geben sie frei. Den Bankabgleich nimmt es nicht vor.',
      prompts: [
        'Erstelle ein Formular für Bestellanforderungen mit einem anderen Freigeber ab 1.500 €.',
        'Gleiche diese Lieferantenrechnung mit der Bestellung BC-1187 und ihrem Wareneingang ab und melde die Abweichungen.',
        'Liste die Lieferantenrechnungen auf, die diese Woche zu zahlen sind, und kennzeichne die mit einer Abweichung.',
      ],
      faq: [
        {
          q: 'Liest TblFlow PDF-Rechnungen?',
          a: 'Der KI-Chat liest die Rechnung, die Sie ablegen, und schlägt die passenden Datensätze vor; vor Ihrer Annahme wird nichts angelegt. Es handelt sich nicht um ein automatisches Massenlesen gescannter Rechnungen.',
        },
        {
          q: 'Bleibt meine Buchhaltungssoftware bestehen?',
          a: 'Ja. TblFlow kümmert sich um den Ablauf vor der Buchhaltung: Anforderung, Bestellung, Wareneingang, Kontrolle. Die Buchung bleibt in Ihrer Software.',
        },
        {
          q: 'Kann man ab einem bestimmten Betrag eine Freigabe vorschreiben?',
          a: 'Ja: Status, Betrag und Freigeber sind Felder; eine Automatisierung benachrichtigt den richtigen Freigeber je nach der Schwelle, die Sie festlegen.',
        },
      ],
    },

    'financial-close': {
      nav: 'Abschluss und Finanzsteuerung',
      card: 'Margen, EBITDA und Budget gegen Ist, ohne jeden Monat Exporte abzutippen.',
      metaTitle: 'Monatsabschluss, Margen und EBITDA ohne Abtippen | TblFlow',
      metaDescription:
        'Importieren Sie Buchhaltungsexporte, lassen Sie Formeln Margen, EBITDA und Budget gegen Ist neu berechnen und prüfen Sie eine Monatszusammenfassung.',
      eyebrow: 'Anwendungsfall · Finanzen und Controlling',
      title: 'Der Monatsabschluss, ohne dieselben Exporte in dieselben Tabellen zu kopieren',
      subtitle:
        'Ihre Buchhaltungsexporte landen in einer Datenbank; Margen, EBITDA und Budgetabweichung werden neu berechnet; die Monatszusammenfassung wird für die Geschäftsführung vorbereitet.',
      flow: {
        steps: [
          { title: 'Export der Saldenliste', tool: 'Buchhaltungssoftware', after: 'human' },
          { title: 'Aufbereitung', tool: 'Excel', after: 'automation' },
          { title: 'Margen und EBITDA', tool: 'Excel', after: 'automation' },
          { title: 'Monatszusammenfassung', tool: 'PowerPoint', after: 'agent' },
        ],
        rekeyed: 'Saldenliste Oktober · 186 Zeilen',
        calc: '1 Abschluss pro Monat × 4 abgetippte Dateien × 1 Std. 30 Min. ≈ 6 Stunden pro Monat.',
      },
      problem: {
        title: 'Jeden Monat dasselbe Kopieren und Einfügen',
        body: 'Der Export der Saldenliste wird in eine Aufbereitungsdatei kopiert, dann in die Margentabelle, dann in die Präsentation für die Geschäftsführung. Eine kaputte Formel oder eine vergessene Zeile, und die präsentierte Zahl stimmt nicht mehr.',
      },
      journey: [
        {
          label: 'Verstehen',
          title: 'Legen Sie Ihr Abschlussverfahren ab',
          body: 'Ihr Abschlusskalender und Ihre Aufbereitungsregeln werden in DocIndex indexiert: Ihre Teams schlagen darin nach, die Agenten nutzen sie.',
        },
        {
          label: 'Abbilden',
          title: 'Sehen Sie, wo die Zahlen abgetippt werden',
          body: 'Beginnen Sie mit dem Standardprozess „Monatsabschluss“: Kontoauszüge, Bankabgleich, Rechnungserfassung, Anforderung fehlender Belege, Abgrenzungen, Prüfung, Saldenliste, Präsentation für die Geschäftsführung.',
        },
        {
          label: 'Aufbauen',
          title: 'Tabellen, die für Sie rechnen',
          body: 'Importieren Sie die Saldenliste oder das Hauptbuch jeden Monat als CSV. Formeln und Rollups berechnen die Marge je Auftrag, das EBITDA und die Budgetabweichung; Diagramme und eine Steuerungsoberfläche zeigen sie an.',
        },
        {
          label: 'Automatisieren, dann übergeben',
          title: 'Die Zusammenfassung vorbereitet, der Kommentar freigegeben',
          body: 'Eine Automatisierung rechnet neu und benachrichtigt, sobald der Import erfolgt ist. Ein Agent verfasst die Monatszusammenfassung aus den Tabellen: Veränderungen, im Auge zu behaltende Posten. Sie lesen sie durch, bevor sie rausgeht.',
        },
      ],
      build: {
        title: 'Was Sie aufbauen',
        items: [
          { title: 'Eine Margentabelle', body: 'Nach Auftrag, Projekt oder Kunde, auf Basis des Modells „Finanzsteuerung“.' },
          { title: 'Eine EBITDA- und Budgetverfolgung', body: 'Das Ist des Monats gegenüber dem Budget, mit den Abweichungen, die Ihre Schwelle überschreiten.' },
          { title: 'Eine Monatszusammenfassung', body: 'Von einem Agenten aus Ihren Tabellen vorbereitet, von Ihnen vor der Verteilung gelesen.' },
        ],
      },
      limits:
        'TblFlow ist keine Buchhaltungssoftware: Es führt keine Buchungen und verbindet sich nicht mit Ihrer Bank. EBITDA und Margen werden von Ihren Formeln berechnet, auf Grundlage der Exporte, die Sie importieren.',
      prompts: [
        'Importiere die Saldenliste von Oktober und berechne EBITDA und Budgetabweichung neu.',
        'Zeige die Marge je Kunde über die letzten drei Monate, vom höchsten zum niedrigsten Wert.',
        'Verfasse die Monatszusammenfassung für die Geschäftsführung: Veränderungen, Posten über dem Budget, offene Entscheidungen.',
      ],
      faq: [
        {
          q: 'Berechnet TblFlow das EBITDA von selbst?',
          a: 'Es gibt keine fertige EBITDA-Berechnung: Sie definieren es einmal mit Formeln und Rollups auf Ihren eigenen Konten, und es wird bei jedem Import neu berechnet.',
        },
        {
          q: 'Muss die Buchhaltungssoftware angebunden werden?',
          a: 'Nein. Ein CSV-Export der Saldenliste oder des Hauptbuchs genügt. Wenn Ihre Software eine API anbietet, kann TblFlow einen Konnektor erzeugen, um den Import zu automatisieren.',
        },
        {
          q: 'Wer sieht die Beträge?',
          a: 'Die Rechte werden nach Rolle und Feld festgelegt: Sie bestimmen, wer die Beträge liest, wer sie ändert und wer sie nicht sieht.',
        },
      ],
    },

    'stock-to-shipping': {
      nav: 'Vom Bestand zum Versand',
      card: 'Inventuren, Schwellen, Nachschub und Kommissionierung in einer einzigen Datenbank.',
      metaTitle: 'Bestand, Inventur und Nachschub ohne Neuerfassung | TblFlow',
      metaDescription:
        'Permanente Inventur, Schwellenwert-Warnungen, Nachschub, Kommissionierung und Versand: TblFlow verbindet Artikel, Bewegungen und Bestellungen.',
      eyebrow: 'Anwendungsfall · Bestand und Logistik',
      title: 'Vom Bestand zum Versand, ohne in drei Dateien neu zu zählen',
      subtitle:
        'Die Zählung aktualisiert den Bestand, die Schwelle löst den Nachschub aus, der Kundenauftrag geht in die Kommissionierung. Die Mengen werden nicht mehr neu getippt.',
      flow: {
        steps: [
          { title: 'Zählung', tool: 'Papierzettel', after: 'human' },
          { title: 'Bestandsabweichungen', tool: 'Excel', after: 'automation' },
          { title: 'Nachschub', tool: 'E-Mail an den Lieferanten', after: 'agent' },
          { title: 'Kommissionierung', tool: 'Website des Transporteurs', after: 'human' },
        ],
        rekeyed: 'Art. A-204 · 36 Stück',
        calc: '150 gezählte Artikel pro Monat × 2 Neuerfassungen × 2 Minuten ≈ 10 Stunden pro Monat.',
      },
      problem: {
        title: 'Der Bestand stimmt nur an einem Tag im Monat',
        body: 'Die Zählung erfolgt auf Papier, die Abweichungen werden in eine Tabelle abgetippt, die Nachschubbestellung geht per E-Mail raus. Zwischen zwei Inventuren weiß niemand wirklich, was noch da ist, und der Engpass fällt erst bei der Kommissionierung auf.',
      },
      journey: [
        {
          label: 'Verstehen',
          title: 'Legen Sie Ihre Bestandsregeln ab',
          body: 'Schwellen, Lieferanten, Lieferzeiten, Kommissionierregeln: in DocIndex indexiert, dienen sie den Agenten als Kontext.',
        },
        {
          label: 'Abbilden',
          title: 'Sehen Sie, wo die Mengen abgetippt werden',
          body: 'Beginnen Sie mit den Standardprozessen „Permanente Inventur“, „Nachschub und Lieferantenbestellung“ und „Kommissionierung und Versand“. TblFlow schätzt die Kosten jedes Schritts anhand Ihrer Mengen.',
        },
        {
          label: 'Aufbauen',
          title: 'Artikel, Bewegungen und Inventuren verknüpft',
          body: 'Das Modell „Bestandsverwaltung“ bringt Artikel, Bewegungen, Lagerplätze, Lieferanten, Nachschubbestellungen und Stichtagsinventuren mit, samt Bestandswert und Schwellenwert-Warnungen.',
        },
        {
          label: 'Automatisieren, dann übergeben',
          title: 'Die Schwelle warnt, der Agent bereitet die Bestellung vor',
          body: 'Eine Automatisierung berechnet die Inventurabweichungen und meldet Artikel unter der Schwelle. Ein Agent bereitet die Nachschubbestellung beim richtigen Lieferanten vor; Sie geben sie vor dem Versand frei.',
        },
      ],
      build: {
        title: 'Was Sie aufbauen',
        items: [
          { title: 'Ein aktueller Bestand', body: 'Jeder Zu- und Abgang wird als Bewegung erfasst, der Bestandswert berechnet.' },
          { title: 'Permanente Inventuren', body: 'Die zu zählenden Artikel, die Erfassung der Zählungen und die nachzuzählenden Abweichungen.' },
          { title: 'Ein vorbereiteter Nachschub', body: 'Die Artikel unter der Schwelle und ein Entwurf der Lieferantenbestellung zur Freigabe.' },
        ],
      },
      limits:
        'TblFlow ist keine Lagerverwaltungssoftware: Es liest keine Barcodes, steuert keine Kommissionierung per Funkterminal und verfolgt den Bestand nicht in Echtzeit. Es erzeugt keine Transporteuretiketten.',
      prompts: [
        'Liste die Artikel unter ihrem Nachschubschwellenwert auf und bereite eine Bestellung je Lieferant vor.',
        'Lege die permanente Inventur der Woche an: die 30 meistverkauften Artikel.',
        'Zeige die Abweichungen der letzten Inventur über 5 %, mit ihrem Wert.',
      ],
      faq: [
        {
          q: 'Kann man Barcodes scannen?',
          a: 'Nein. Der EAN-Code ist ein Feld des Artikels, aber TblFlow liest keine Barcodes. Die Zählungen werden per Tastatur oder über ein Formular erfasst.',
        },
        {
          q: 'Ersetzt TblFlow mein ERP?',
          a: 'Nein. Es kümmert sich um das, was ERP oder Tabellen schlecht abdecken: permanente Inventuren, Schwellen, Nachschub, Verfolgung der Abweichungen. Wenn Ihr ERP eine API anbietet, kann TblFlow sich damit verbinden.',
        },
        {
          q: 'Gehen die Nachschubbestellungen von allein raus?',
          a: 'Nein. Der Agent bereitet die Bestellung vor; Sie geben sie frei, bevor sie an den Lieferanten geht.',
        },
      ],
    },

    quality: {
      nav: 'Qualität und Abweichungen',
      card: 'Prüfungen, Abweichungen und Korrekturmaßnahmen durchgängig verfolgt.',
      metaTitle: 'Abweichungen und Korrekturmaßnahmen ohne Papier | TblFlow',
      metaDescription:
        'Prüfung, Erfassung, Entscheidung, Korrekturmaßnahme: TblFlow verknüpft jede Abweichung mit Charge, Nacharbeitskosten und Maßnahme und bereitet Erinnerungen vor.',
      eyebrow: 'Anwendungsfall · Qualität und Produktion',
      title: 'Jede Abweichung verfolgt bis zu ihrer Korrekturmaßnahme',
      subtitle:
        'Die Prüfung erfasst die Abweichung, die Charge wird gesperrt, die Entscheidung dokumentiert, die Korrekturmaßnahme nachverfolgt, bis sie abgeschlossen ist. Kein Formular geht mehr zwischen Werkstatt und Büro verloren.',
      flow: {
        steps: [
          { title: 'Prüfung', tool: 'Papierformular', after: 'human' },
          { title: 'Erfassung', tool: 'Excel', after: 'automation' },
          { title: 'Entscheidung', tool: 'E-Mail', after: 'human' },
          { title: 'Korrekturmaßnahme', tool: 'Excel', after: 'agent' },
        ],
        rekeyed: 'Charge 2611-B · 12 Teile',
        calc: '30 Abweichungen pro Monat × 3 Neuerfassungen × 8 Minuten ≈ 12 Stunden pro Monat.',
      },
      problem: {
        title: 'Das Formular aus der Werkstatt kommt nicht im Büro an',
        body: 'Der Prüfer füllt ein Formular aus, jemand tippt es in eine Tabelle ab, die Entscheidung fällt per E-Mail, und die Korrekturmaßnahme lebt in einer anderen Datei. Nacharbeitskosten und Ursache gehen unterwegs verloren.',
      },
      journey: [
        {
          label: 'Verstehen',
          title: 'Legen Sie Ihre Qualitätsverfahren ab',
          body: 'Prüfpläne, Annahmekriterien, Entscheidungsablauf: in DocIndex indexiert, leiten sie die Agenten.',
        },
        {
          label: 'Abbilden',
          title: 'Beziffern Sie, was die Nacharbeit kostet',
          body: 'Beginnen Sie mit dem Standardprozess „Qualitätskontrolle und Abweichungen“: Stichproben, Messungen, Ergebnisse, Charge angenommen oder nicht, Sperrung, Ursachen, Entscheidung, Korrekturmaßnahme. Fehlerquote und Nacharbeitskosten gehen in die Berechnung ein.',
        },
        {
          label: 'Aufbauen',
          title: 'Ein Register, das mit den Chargen verknüpft ist',
          body: 'Jede Abweichung ist mit ihrer Charge, ihrem Lieferanten oder ihrem Arbeitsplatz verknüpft, samt Ursache und Entscheidung: Nacharbeit, Ausschuss oder Sonderfreigabe.',
        },
        {
          label: 'Automatisieren, dann übergeben',
          title: 'Die Entscheidung bleibt menschlich, die Verfolgung geht nicht mehr verloren',
          body: 'Das Prüfformular legt den Datensatz an und benachrichtigt den Verantwortlichen. Die Entscheidung trifft weiterhin eine Person. Ein Agent erinnert an verspätete Korrekturmaßnahmen und bereitet die Monatszusammenfassung vor.',
        },
      ],
      build: {
        title: 'Was Sie aufbauen',
        items: [
          { title: 'Ein Prüfformular', body: 'In der Werkstatt ausgefüllt, legt es die Abweichung ohne Abtippen an.' },
          { title: 'Ein Abweichungsregister', body: 'Nach Charge, Ursache, Entscheidung und Nacharbeitskosten.' },
          { title: 'Eine Verfolgung der Korrekturmaßnahmen', body: 'Verantwortlicher, Frist, Erinnerung und Abschluss.' },
        ],
      },
      limits:
        'TblFlow ist kein zertifiziertes Dokumentenmanagementsystem und keine Software zur Werkstattsteuerung: Es steuert keine Maschinen und ersetzt nicht Ihr zertifiziertes Qualitätssystem. Es verbindet Prüfungen, Entscheidungen und Maßnahmen.',
      prompts: [
        'Erstelle ein Prüfformular, das Charge, Messwert und Foto des Teils erfasst.',
        'Liste die verspäteten Korrekturmaßnahmen auf und bereite für jeden Verantwortlichen eine Erinnerung vor.',
        'Zeige die Nacharbeitskosten je Lieferant für das Quartal.',
      ],
      faq: [
        {
          q: 'Kann die Entscheidung über eine Charge automatisch fallen?',
          a: 'Sie können die Sperrung einer Charge nach einer Regel automatisieren, aber die Entscheidung über Nacharbeit, Ausschuss oder Sonderfreigabe trifft weiterhin eine Person.',
        },
        {
          q: 'Kann man aus der Werkstatt Fotos anhängen?',
          a: 'Ja: Das Formular akzeptiert Anhänge, und das öffentliche Formular lässt sich auf einem Smartphone öffnen.',
        },
        {
          q: 'Ersetzt TblFlow unser Qualitätssystem?',
          a: 'Nein. Es verfolgt die Abweichungen und Maßnahmen; Ihr zertifiziertes Dokumentensystem bleibt bestehen.',
        },
      ],
    },

    procedures: {
      nav: 'Ihre Verfahren, endlich aktuell',
      card: 'Indexierte Verfahren, rechtzeitig geprüft, und Antworten aus Ihren Dokumenten.',
      metaTitle: 'Aktuelle und durchsuchbare interne Verfahren | TblFlow',
      metaDescription:
        'Legen Sie Ihre Verfahren ab, TblFlow indexiert sie, warnt Sie bei überfälliger Überprüfung, und die Agenten antworten auf Grundlage Ihrer Dokumente.',
      eyebrow: 'Anwendungsfall · Interne Dokumentation',
      title: 'Verfahren, die man findet, überprüft und die die KI nutzt',
      subtitle:
        'Ihre Verfahren sind in DocIndex indexiert, den Prozessen der Karte zugeordnet, dank Warnungen rechtzeitig überprüft und dienen den Agenten als Kontext.',
      flow: {
        steps: [
          { title: 'Verfassen', tool: 'Word', after: 'human' },
          { title: 'Verteilung', tool: 'Gemeinsamer Ordner', after: 'automation' },
          { title: 'Überprüfung', tool: 'Kalendererinnerung', after: 'automation' },
          { title: 'Frage eines Kollegen', tool: 'E-Mail', after: 'agent' },
        ],
        rekeyed: 'Verfahren Mahnungen v3',
        calc: '20 Fragen pro Woche × 5 Minuten ≈ 7 Stunden pro Monat.',
      },
      problem: {
        title: 'Die richtige Version liegt irgendwo',
        body: 'Die Verfahren schlummern in einem gemeinsamen Ordner, in mehreren Versionen. Niemand weiß, welche aktuell ist, die Überprüfung wird vergessen, und dieselben Fragen kommen immer wieder per E-Mail.',
      },
      journey: [
        {
          label: 'Verstehen',
          title: 'Legen Sie Ihre Dokumente so ab, wie sie sind',
          body: 'PDF, Word, Markdown: DocIndex indexiert sie für die semantische Suche und die Volltextsuche. Ihre Teams suchen in ihren eigenen Worten.',
        },
        {
          label: 'Abbilden',
          title: 'Ordnen Sie jedes Verfahren seinem Prozess zu',
          body: 'Auf der Karte hat jeder Prozess sein Verfahrensblatt, seinen Verantwortlichen und sein nächstes Überprüfungsdatum.',
        },
        {
          label: 'Aufbauen',
          title: 'Eine lebendige Wissensdatenbank',
          body: 'Die Verfahren, ihre Versionen und ihre Verantwortlichen an einem Ort, für das ganze Team nach seinen Rechten durchsuchbar.',
        },
        {
          label: 'Automatisieren, dann übergeben',
          title: 'Überprüfungen angemahnt, Fragen beantwortet',
          body: 'Jeden Montag listet eine E-Mail die Verfahren auf, deren Überprüfung überfällig oder bald fällig ist. Die Agenten stützen sich auf Ihre indexierten Verfahren, um zu antworten und nach Ihren Regeln zu handeln.',
        },
      ],
      build: {
        title: 'Was Sie aufbauen',
        items: [
          { title: 'Eine Verfahrensdatenbank', body: 'Indexiert, durchsuchbar, den Prozessen der Karte zugeordnet.' },
          { title: 'Termingerechte Überprüfungen', body: 'Ein Verantwortlicher und ein Überprüfungsdatum je Verfahren, mit einer wöchentlichen Warnung.' },
          { title: 'Agenten, die Ihren Regeln folgen', body: 'Sie lesen Ihre Verfahren, bevor sie eine Aktion vorschlagen.' },
        ],
      },
      limits:
        'TblFlow ist kein zertifiziertes elektronisches Dokumentenmanagement: keine elektronische Signatur und kein regulierter Freigabeablauf für Dokumente. Es indexiert Ihre Verfahren und ordnet sie Ihren Prozessen zu.',
      prompts: [
        'Finde das neueste Verfahren zur Kundenmahnung und fasse es in fünf Schritten zusammen.',
        'Liste die Verfahren ohne Verantwortlichen oder mit überfälliger Überprüfung auf.',
        'Beantworte diese Frage eines Kollegen anhand unserer Verfahren, mit Quellenangabe.',
      ],
      faq: [
        {
          q: 'Welche Formate werden indexiert?',
          a: 'PDF-, Word-, PowerPoint-, Markdown- und Textdokumente. Der Text aus PDF-, Word- und PowerPoint-Dateien wird extrahiert und indexiert.',
        },
        {
          q: 'Wer sieht welche Verfahren?',
          a: 'Die Rechte Ihres Arbeitsbereichs gelten: Jeder sieht nur, was seine Rolle ihm zu lesen erlaubt.',
        },
        {
          q: 'Erfindet die KI Antworten?',
          a: 'Die Agenten suchen in Ihren indexierten Verfahren und zeigen Ihnen die Quelle. Prüfen Sie stets nach, bevor Sie auf eine wichtige Antwort hin handeln.',
        },
      ],
    },
  },

  audiences: {
    leaders: {
      nav: 'Geschäftsführung',
      card: 'Sehen, was die Neuerfassungen kosten, und entscheiden, was übergeben wird.',
      metaTitle: 'TblFlow für die Geschäftsführung: was Neuerfassungen kosten',
      metaDescription:
        'Eine Karte Ihrer Prozesse mit geschätzten Kosten, die Prozesse mit den größten Verlusten, eine druckbare Geschäftsführungsansicht und ein Monatsbericht.',
      eyebrow: 'Für wen · Geschäftsführung',
      title: 'Sehen Sie, was Ihre Neuerfassungen Sie kosten, und entscheiden Sie dann, was übergeben wird',
      subtitle:
        'Sie wissen, dass Ihre Teams Zeit mit Abtippen verbringen. TblFlow zeigt Ihnen, wo, wie viel und was sich automatisieren oder Agenten übergeben lässt.',
      pains: {
        title: 'Was Sie heute kostet',
        items: [
          { title: 'Unsichtbare Stunden', body: 'Dieselbe Information, von Tool zu Tool neu getippt, taucht in keinem Dashboard auf.' },
          { title: 'Doppelte Tools', body: 'Rund zehn Abonnements, bei denen niemand weiß, welche noch gebraucht werden.' },
          { title: 'Entscheidungen im Blindflug', body: 'Die Zahlen kommen spät, abgetippt, und jeder hat seine eigene Version.' },
        ],
      },
      build: {
        title: 'Was Sie erhalten',
        items: [
          { title: 'Die Karte Ihrer Prozesse', body: 'Wer was womit macht, wo die Information neu erfasst wird, und die geschätzten Kosten.' },
          { title: '„Wo verlieren Sie Geld?“', body: 'Ihre Prozesse nach Einsparpotenzial geordnet, um zu wählen, wo Sie anfangen.' },
          { title: 'Eine Geschäftsführungsansicht und ein Monatsbericht', body: 'Kosten, Einsparpotenzial, überfällige Überprüfungen: eine druckbare Seite und eine E-Mail am 1. des Monats.' },
        ],
      },
      faq: [
        {
          q: 'Sind die Kosten gemessen?',
          a: 'Nein: Es sind Schätzungen auf Grundlage der Mengen und Sätze, die Sie eingeben. Anschließend können Sie reale Messwerte erfassen, um Schätzung und Ist zu vergleichen.',
        },
        {
          q: 'Muss man alles auf einmal umstellen?',
          a: 'Nein. Beginnen Sie mit einem Prozess. Die Tools, die Sie behalten, bleiben verbunden, und was TblFlow erzeugt, bleibt inaktiv, bis Sie es freigegeben haben.',
        },
        {
          q: 'Was wird aus meinem Team?',
          a: 'Die wiederkehrenden Aufgaben gehen an Automatisierungen und Agenten; Ihre Teams behalten Kundenbeziehung, Beratung und Entscheidung.',
        },
      ],
    },

    finance: {
      nav: 'Finanzen und Buchhaltung',
      card: 'Einkauf, Rechnungen, Abschluss und Steuerung, ohne Exporte abzutippen.',
      metaTitle: 'TblFlow für die Finanzabteilung: Rechnungen und Abschluss',
      metaDescription:
        'Für Finanzleitung, Controlling und Buchhaltung: abgeglichene Lieferantenrechnungen, Kundenzahlungsplan, neu berechnete Margen und EBITDA, Monatszusammenfassung.',
      eyebrow: 'Für wen · Finanzen und Buchhaltung',
      title: 'Die Finanzsteuerung, die zwischen Ihrer Buchhaltung und Ihren Tabellen fehlt',
      subtitle:
        'Ihre Buchhaltungssoftware führt die Buchungen. TblFlow übernimmt alles, was darum herum geschieht: Einkäufe, Rechnungen, Mahnungen, Aufbereitungen und die Tabellen der Geschäftsführung.',
      pains: {
        title: 'Was Sie heute kostet',
        items: [
          { title: 'Rechnungen ohne Bestellung', body: 'Vor der Zahlung müssen Anforderung, Bestellung und Wareneingang gesucht werden.' },
          { title: 'Abgetippte Exporte', body: 'Jeden Monat wandert die Saldenliste von Datei zu Datei bis zur Präsentation.' },
          { title: 'Mahnungen aus dem Gedächtnis', body: 'Niemand sieht auf einen Blick, was noch einzuziehen ist.' },
        ],
      },
      build: {
        title: 'Was Sie aufbauen',
        items: [
          { title: 'Ein Ablauf für Lieferantenrechnungen', body: 'Anforderung, Bestellung, Wareneingang und Rechnung verknüpft und vor der Zahlung geprüft.' },
          { title: 'Ein Zahlungsplan und Mahnungen', body: 'Kundenrechnungen bis zum Zahlungseingang verfolgt, Mahnungen von einem Agenten vorbereitet.' },
          { title: 'Aktuelle Margen und ein aktuelles EBITDA', body: 'Bei jedem Import neu berechnet, mit einer Monatszusammenfassung zum Durchlesen.' },
        ],
      },
      faq: [
        {
          q: 'Ist TblFlow eine Buchhaltungssoftware?',
          a: 'Nein. Es führt keine Buchungen, stellt keine konforme elektronische Rechnung aus und nimmt keinen Bankabgleich vor. Es verbindet die Schritte rund um Ihre Buchhaltung.',
        },
        {
          q: 'Wie kommen die Buchhaltungsdaten hinein?',
          a: 'Über einen CSV-Export der Saldenliste oder des Hauptbuchs, in eine Tabelle importiert. Wenn Ihre Software eine API anbietet, kann TblFlow einen Konnektor erzeugen.',
        },
        {
          q: 'Sind die Beträge geschützt?',
          a: 'Die Rechte werden nach Rolle und Feld eingestellt: Sie entscheiden, wer die Beträge liest, wer sie ändert und wer sie nicht sieht.',
        },
      ],
    },

    'sales-admin': {
      nav: 'Vertriebsinnendienst',
      card: 'Vom Angebot zur Rechnung, ohne Aufträge abzutippen.',
      metaTitle: 'TblFlow für den Vertriebsinnendienst: Angebot bis Rechnung',
      metaDescription:
        'Angebote, Aufträge, Rechnungen und Mahnungen in einer Datenbank: Der Innendienst erfasst einmal, Automatisierungen erledigen den Rest, Agenten bereiten vor.',
      eyebrow: 'Für wen · Vertriebsinnendienst',
      title: 'Erfassen Sie den Auftrag einmal, nicht in jedem Tool',
      subtitle:
        'Das angenommene Angebot wird zum Auftrag, der Auftrag bereitet die Rechnung vor, die überfällige Rechnung wird gemahnt. Der Innendienst behält die Kundenbeziehung, nicht das Erfassen.',
      pains: {
        title: 'Was Sie heute kostet',
        items: [
          { title: 'Der neu getippte Auftrag', body: 'Das angenommene Angebot wird in die Auftragstabelle abgetippt, dann in die Rechnung.' },
          { title: 'Preisfehler', body: 'Jede Kopie ist eine Gelegenheit, die falsche Zeile oder den falschen Rabatt zu erwischen.' },
          { title: 'Der wartende Kunde', body: 'Um zu wissen, wo seine Bestellung steht, muss man drei Dateien öffnen.' },
        ],
      },
      build: {
        title: 'Was Sie aufbauen',
        items: [
          { title: 'Eine Pipeline von Angebot zu Auftrag', body: 'Der Angebotsstatus löst den Auftrag aus, mit denselben Positionen.' },
          { title: 'Eine Auftragsverfolgung', body: 'Wo jeder Auftrag steht, für das ganze Team nach seinen Rechten sichtbar.' },
          { title: 'Vorbereitete Mahnungen', body: 'Ein Agent bereitet die Mahnungen nach Ihrem Verfahren vor; Sie geben frei.' },
        ],
      },
      faq: [
        {
          q: 'Können wir unser CRM behalten?',
          a: 'Ja. Die Tools, die Sie behalten, bleiben verbunden. TblFlow enthält außerdem ein Modell „Vertrieb und Kundenbeziehung“, falls Sie alles zusammenführen möchten.',
        },
        {
          q: 'Können Kunden selbst bestellen?',
          a: 'Ein öffentliches Formular kann Ihre Aufträge speisen. Es gibt keine Kundenkonten mit eigenen Rechten.',
        },
        {
          q: 'Wie lange dauert der Einstieg?',
          a: 'Ein Prozess lässt sich kostenlos abbilden. Die Tabellen werden aus der Karte erzeugt, und Ihre vorhandenen Daten lassen sich als CSV oder Excel importieren.',
        },
      ],
    },

    manufacturing: {
      nav: 'Industrie und Produktion',
      card: 'Qualität, Beschaffung und Bestände rund um das ERP gesteuert.',
      metaTitle: 'TblFlow für die Industrie: Qualität, Beschaffung, Bestände',
      metaDescription:
        'Abweichungen, Materialbeschaffung, Bestände und Versand rund um Ihr ERP verbunden, mit geschätzten Nacharbeitskosten und Agenten unter Ihrer Freigabe.',
      eyebrow: 'Für wen · Industrie und Produktion',
      title: 'Steuern Sie die Werkstatt rund um Ihr ERP, ohne es zu ersetzen',
      subtitle:
        'Ihr ERP steuert die Produktion. TblFlow übernimmt, was noch auf Papier und in Tabellen läuft: Prüfungen, Abweichungen, Schwellen, Nachschub und Erinnerungen.',
      pains: {
        title: 'Was Sie heute kostet',
        items: [
          { title: 'Papierformulare', body: 'Prüfungen und Abweichungen werden zweimal erfasst, zwischen Werkstatt und Büro.' },
          { title: 'Unbezifferte Nacharbeit', body: 'Die Kosten der Abweichungen tauchen nirgends auf.' },
          { title: 'Materialengpässe', body: 'Die Schwelle ist unterschritten, bevor es jemand sieht.' },
        ],
      },
      build: {
        title: 'Was Sie aufbauen',
        items: [
          { title: 'Ein Qualitätsregister', body: 'Abweichungen mit Chargen verknüpft, Ursachen, Entscheidungen und Korrekturmaßnahmen.' },
          { title: 'Eine verfolgte Beschaffung', body: 'Schwellen, Anforderungen, Bestellungen und Wareneingänge von Material verbunden.' },
          { title: 'Eine bezifferte Karte der Werkstatt', body: 'Fehlerquote, Nacharbeitskosten und das Vokabular „Fertigungsauftrag“ auf der Karte.' },
        ],
      },
      faq: [
        {
          q: 'Macht TblFlow Feinplanung oder MRP?',
          a: 'Nein. Es plant die Produktion nicht und verfolgt die Werkstatt nicht in Echtzeit; die Karte beschreibt Ihre Prozesse, sie führt sie nicht aus. Es übernimmt die Abläufe rund um das ERP.',
        },
        {
          q: 'Kann man das Vokabular der Fabrik verwenden?',
          a: 'Ja: Die Voreinstellung „Industrie und Logistik“ zeigt auf der Karte „Fertigungsauftrag“ statt „Auftrag“ an.',
        },
        {
          q: 'Kann unser ERP angebunden werden?',
          a: 'Wenn es eine API anbietet, kann TblFlow anhand seiner Dokumentation einen Konnektor erzeugen. Für ein Tool ohne API lässt sich eine aufgezeichnete Webaufgabe wiederholen.',
        },
      ],
    },

    retail: {
      nav: 'Handel und Vertrieb',
      card: 'Bestände, Nachschub, Aufträge und Kundendienst in einer einzigen Datenbank.',
      metaTitle: 'TblFlow für den Handel: Bestände, Nachschub, Kundendienst',
      metaDescription:
        'Permanente Inventuren, Schwellenwert-Warnungen, Nachschub, Kommissionierung und Kundendienst in einer Datenbank verbunden. Agenten bereiten vor, Sie geben frei.',
      eyebrow: 'Für wen · Handel und Vertrieb',
      title: 'Bestände, Nachschub und Kundendienst in einer einzigen Datenbank',
      subtitle:
        'Artikel, Bewegungen, Bestellungen und Retouren an einem Ort. Die Schwelle warnt, der Agent bereitet den Nachschub vor, Sie geben frei.',
      pains: {
        title: 'Was Sie heute kostet',
        items: [
          { title: 'Zu spät entdeckte Engpässe', body: 'Der Bestand stimmt nur zum Zeitpunkt der Inventur.' },
          { title: 'Lieferantenbestellungen von Hand', body: 'Jeder Nachschub ist eine E-Mail, die aus einer Tabelle heraus geschrieben wird.' },
          { title: 'Ein zersplitterter Kundendienst', body: 'Garantie, Rücksendung, Reparatur: jeder Schritt in einem anderen Tool.' },
        ],
      },
      build: {
        title: 'Was Sie aufbauen',
        items: [
          { title: 'Ein nach Bewegungen geführter Bestand', body: 'Das Modell „Bestandsverwaltung“: Artikel, Bewegungen, Bestandswert, Schwellenwert-Warnungen.' },
          { title: 'Ein vorbereiteter Nachschub', body: 'Die Artikel unter der Schwelle und ein Bestellentwurf je Lieferant zur Freigabe.' },
          { title: 'Eine Kundendienstverfolgung', body: 'Anfrage, Garantie, Diagnose, Rücksendung und Abschluss, mit der Bestellung verknüpft.' },
        ],
      },
      faq: [
        {
          q: 'Verbindet sich TblFlow mit meinem Onlineshop?',
          a: 'Es gibt keinen integrierten E-Commerce-Konnektor. Wenn Ihre Plattform eine API anbietet, kann TblFlow einen Konnektor erzeugen; andernfalls werden die Bestellungen als CSV importiert.',
        },
        {
          q: 'Kann man Barcodes lesen?',
          a: 'Nein. Der EAN-Code ist ein Feld des Artikels, aber es gibt kein Barcode-Lesen.',
        },
        {
          q: 'Wo fängt man an?',
          a: 'Bei der permanenten Inventur oder beim Nachschub: zwei Standardprozesse, die sich fertig auf die Karte importieren lassen, und ein Basismodell für den Bestand.',
        },
      ],
    },

    firms: {
      nav: 'Kanzleien und Dienstleister',
      card: 'Mandate, Akten, Zeiten und Fakturierung ohne abgetippte Tabellen.',
      metaTitle: 'TblFlow für Kanzleien und Dienstleister: Mandate und Akten',
      metaDescription:
        'Für Beratung, Steuerberatung und Rechtsberatung: verfolgte Mandate und Akten, Marge je Mandat, Fakturierung und Mahnungen, indexierte Verfahren.',
      eyebrow: 'Für wen · Kanzleien und Dienstleister',
      title: 'Ihre Mandate und Akten, vom Mandatsschreiben bis zum Zahlungseingang',
      subtitle:
        'Jedes Mandat oder jede Akte mit Kunde, geleisteter Zeit, Rechnung und Marge verknüpft. Die Verfahren der Kanzlei indexiert, die Mahnungen vorbereitet.',
      pains: {
        title: 'Was Sie heute kostet',
        items: [
          { title: 'Erratene Margen', body: 'Geleistete Zeit und Fakturierung leben in getrennten Dateien.' },
          { title: 'Verstreute Akten', body: 'Unterlagen, Fristen und Belegmahnungen im E-Mail-Postfach.' },
          { title: 'Mündliche Verfahren', body: 'Das Know-how der Kanzlei steckt in den Köpfen weniger Personen.' },
        ],
      },
      build: {
        title: 'Was Sie aufbauen',
        items: [
          { title: 'Eine Mandatsverfolgung', body: 'Das Modell „Finanzsteuerung“: Mandate und Projekte mit ihrer Bruttomarge.' },
          { title: 'Akten und Fristen', body: 'Jede Akte, ihre Unterlagen, ihre Fristen und ihre Erinnerungen an einem Ort.' },
          { title: 'Die Verfahren der Kanzlei', body: 'In DocIndex indexiert, den Prozessen zugeordnet, von den Agenten genutzt.' },
        ],
      },
      faq: [
        {
          q: 'Kann das Vokabular das der Kanzlei sein?',
          a: 'Ja: Die Voreinstellungen „Services und Beratung“ und „Buchhaltung und Recht“ zeigen auf der Karte „Mandat“ oder „Akte“ an.',
        },
        {
          q: 'Kann man eine Verfolgung mit einem Kunden teilen?',
          a: 'Ja, lesend per Link oder über ein öffentliches Formular. Es gibt keinen Kundenbereich mit Konten und eigenen Rechten für jeden Kunden.',
        },
        {
          q: 'Bleiben die Kundendaten bei uns?',
          a: 'Sie liegen in einer echten PostgreSQL-Datenbank, exportierbar, und TblFlow kann mit dem Tarif Enterprise selbst gehostet werden.',
        },
      ],
    },
  },
} satisfies SolutionsLocale;

export default de;
