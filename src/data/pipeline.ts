import type { Locale } from '@/config';

/**
 * The stages TblFlow goes through when it builds from the process map, with a
 * 24×24 line icon each (inner SVG markup, stroke set by the parent).
 */
export const PIPELINE_STEPS: { label: Record<Locale, string>; icon: string }[] = [
  { label: { de: 'Analyse', en: 'Analysis', es: 'Análisis', fr: 'Analyse', it: 'Analisi', ja: '分析', ru: 'Анализ', tr: 'Analiz', uk: 'Аналіз', zh: '分析' }, icon: '<circle cx="10" cy="10" r="6.5"/><line x1="7.5" y1="8" x2="12.5" y2="8"/><line x1="7.5" y1="11" x2="11" y2="11"/><line x1="15" y1="15" x2="20.5" y2="20.5"/>' },
  { label: { de: 'Blueprint', en: 'Blueprint', es: 'Blueprint', fr: 'Plan', it: 'Blueprint', ja: 'ブループリント', ru: 'Blueprint', tr: 'Blueprint', uk: 'Blueprint', zh: '蓝图' }, icon: '<rect x="3" y="3" width="18" height="18" rx="2" stroke-dasharray="3 2.5"/><circle class="fill-icon" cx="9" cy="9" r="1.4"/><circle class="fill-icon" cx="15" cy="15" r="1.4"/><line x1="9.9" y1="9.9" x2="14.1" y2="14.1"/>' },
  { label: { de: 'Tabellen', en: 'Tables', es: 'Tablas', fr: 'Tables', it: 'Tabelle', ja: 'テーブル', ru: 'Таблицы', tr: 'Tablolar', uk: 'Таблиці', zh: '数据表' }, icon: '<rect x="3" y="3" width="18" height="18" rx="1.5"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/>' },
  { label: { de: 'Beziehungen', en: 'Relations', es: 'Relaciones', fr: 'Liaisons', it: 'Relazioni', ja: 'リレーション', ru: 'Связи', tr: 'İlişkiler', uk: 'Звʼязки', zh: '关联' }, icon: '<rect x="2" y="8.5" width="7" height="7" rx="1"/><rect x="15" y="8.5" width="7" height="7" rx="1"/><line x1="9" y1="12" x2="15" y2="12"/><circle class="fill-icon" cx="12" cy="12" r="1.3"/>' },
  { label: { de: 'Oberfläche', en: 'Interface', es: 'Interfaz', fr: 'Interface', it: 'Interfaccia', ja: 'インターフェース', ru: 'Интерфейс', tr: 'Arayüz', uk: 'Інтерфейс', zh: '界面' }, icon: '<rect x="3" y="4" width="18" height="16" rx="1.5"/><line x1="3" y1="8.5" x2="21" y2="8.5"/><line x1="8" y1="8.5" x2="8" y2="20"/>' },
  { label: { de: 'Automatisierungen', en: 'Automations', es: 'Automatizaciones', fr: 'Automatisations', it: 'Automazioni', ja: '自動化', ru: 'Автоматизации', tr: 'Otomasyonlar', uk: 'Автоматизації', zh: '自动化' }, icon: '<path class="fill-icon" d="M13 3 6 13h5l-1 8 8-11h-5l1-7z"/>' },
  { label: { de: 'KI-Agenten', en: 'AI agents', es: 'Agentes de IA', fr: 'Agents IA', it: 'Agenti IA', ja: 'AI エージェント', ru: 'ИИ-агенты', tr: 'Yapay zekâ ajanları', uk: 'ШІ-агенти', zh: 'AI 智能体' }, icon: '<path d="M12 2.6v2.6M12 18.8v2.6M2.6 12h2.6M18.8 12h2.6"/><path class="fill-icon" d="M12 7.2 13.6 10.4 16.8 12 13.6 13.6 12 16.8 10.4 13.6 7.2 12 10.4 10.4Z"/>' },
];
