import type { Locale } from '@/config';
import fr, { type McpKey } from './mcp/fr';
import en from './mcp/en';
import de from './mcp/de';
import es from './mcp/es';
import it from './mcp/it';
import ja from './mcp/ja';
import ru from './mcp/ru';
import tr from './mcp/tr';
import uk from './mcp/uk';
import zh from './mcp/zh';

export type { McpKey };

const STRINGS: Record<Locale, Record<McpKey, string>> = { de, en, es, fr, it, ja, ru, tr, uk, zh };

export function mcp(locale: Locale, key: McpKey): string {
  return STRINGS[locale][key];
}

/** Server endpoint and the Claude Code command: product constants, never translated. */
export const MCP_URL = 'https://app.tblflow.com/mcp';
export const MCP_CLAUDE_CODE_COMMAND = `claude mcp add --transport http tblflow ${MCP_URL}`;

/** Requests per minute by tier, from the launch brief (Free / Pro / Business / Enterprise). */
export const MCP_RATE_PER_MINUTE = { free: 60, pro: 120, business: 300, enterprise: 600 } as const;

/** FR docs use a French slug, every other locale the English one. */
export const mcpDocsSlug = (locale: Locale): string =>
  locale === 'fr' ? 'docs/serveur-mcp' : 'docs/mcp-server';
