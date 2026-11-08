---
title: "TblFlow CLI"
translationKey: "cli"
description: "TblFlow CLI'yi (@tblflow/cli) kurun ve kullanın: cihaz koduyla veya hizmet belirteciyle giriş, komutlar, CSV içe aktarma, dışa aktarma ve yerel MCP sunucusu."
section: "Kılavuzlar"
order: 8
---

TblFlow CLI, veritabanlarınızı bir terminalden yönetir: kayıt okuma ve yazma, CSV içe aktarma ve dışa aktarma, kullanıma açılmış otomasyon ve ajanları çalıştırma ve yerel bir MCP istemcisini (Claude Code, Cursor…) verilerinize bağlama. npm'de `@tblflow/cli` adıyla, MIT lisansı altında yayımlanır.

Node.js 20 veya üstünü gerektirir ve üçüncü taraf bağımlılığı yoktur.

## Kurulum

```bash
npm install -g @tblflow/cli
tblflow --help
```

Kurulum yapmadan: `npx @tblflow/cli --help`.

## Bağlanın

### Kendi bilgisayarınızda

```bash
tblflow login     # bir kod görüntülenir, tarayıcıda onaylarsınız
tblflow whoami
tblflow logout    # yerel oturumu siler ve belirteci sunucu tarafında iptal eder
```

Onaylamadan önce, terminalde görüntülenen kodun tarayıcıdakiyle aynı olduğunu kontrol edin. Belirteçler sistemin anahtar zincirinde saklanır (macOS, Linux Secret Service). Bu mümkün değilse `~/.config/tblflow/credentials.json` dosyasında saklanır; dosyayı yalnızca siz okuyabilirsiniz ve CLI sizi bu konuda uyarır.

### Sürekli entegrasyonda

TblFlow'da bir **hizmet belirteci** oluşturun: Alan ayarları → Güvenlik ve denetim → Hizmet hesapları. Bunu CI'nizin gizli anahtarlarında saklayın, ardından bir ortam değişkeni olarak sunun:

```bash
export TBLFLOW_TOKEN=...      # CI tarafından enjekte edilir, depoya asla yazılmaz
tblflow bases
```

`TBLFLOW_TOKEN`, kayıtlı tüm oturumlardan önce gelir ve diske asla yazılmaz. Belirteci ayrılmış bir makinede bir kez kaydetmek için standart girdiden okuyun:

```bash
printenv TBLFLOW_TOKEN | tblflow login --token -
```

`tblflow login --token <belirteç>` da çalışır, ancak belirteç bu durumda kabuk geçmişinde ve işlem listesinde kalır: CLI bunu size hatırlatır. Belirteç, kaydedilmeden önce sunucuda doğrulanır ve hiçbir çıktıda veya hata mesajında görünmez. `tblflow logout`, bu şekilde kaydedilmiş bir belirteci iptal etmeden unutur: iptal işlemi alanın ayarlarından yapılır.

### Sunucuyu seçin

Varsayılan olarak CLI `https://app.tblflow.com` ile konuşur. Başka bir sunucu için `--host https://…` veya `TBLFLOW_URL` değişkenini kullanın. `localhost` dışında HTTPS zorunludur.

## Komutlar

| Komut | Etki |
|---|---|
| `bases` | Erişilebilir alanlar ve veritabanları |
| `tables <baseId>` | Bir veritabanının tabloları |
| `records list <tableId>` | `--take N` (en fazla 100), `--skip N`, `--fields a,b`, `--where "Alan=v"`, `--sort "Alan:desc"` |
| `records get <tableId> <recordId>` | Bir kaydı okur |
| `records create <tableId>` | `--data '<json>'` veya `--file f.json` (en fazla 50) |
| `records update <tableId> [<recordId>]` | Bir veya birden fazla kaydı günceller |
| `records delete <tableId> <recordId>…` | Önizleme, ardından `--confirm` ile silme (çöp kutusu) |
| `import <tableId> <dosya.csv>` | Bir CSV'nin satırlarını ekler; `--dry-run` |
| `import --new-table <baseId> <dosya.csv>` | Bir CSV'den tablo oluşturur; `--name`, `--dry-run` |
| `export <tableId>` | Standart çıktıya veya `--out dosya.csv` ile CSV; `--view <viewId>` |
| `run automation <baseId> <workflowId>` | Sahibi tarafından kullanıma açılmış bir otomasyonu çalıştırır |
| `run agent <baseId> <agentId> <görev…>` | Sahibi tarafından kullanıma açılmış bir ajanı çalıştırır |
| `api <YÖNTEM> <yol>` | Doğrudan çağrı, yalnızca `/api/` yolları; `DELETE` için `--confirm` gerekir |
| `mcp serve` | Yerel MCP sunucusu (stdio) |

`--json` tüm komutlarla çalışır. Çıkış kodları: başarıda 0, hatada 1, kullanım hatasında veya onay gerektiğinde 2.

### Bir CSV'den tablo oluşturun

```bash
tblflow import --new-table <baseId> musteriler.csv --name "Müşteriler" --dry-run
tblflow import --new-table <baseId> musteriler.csv --name "Müşteriler"
```

`--dry-run`, hiçbir şey yazmadan nelerin oluşturulacağını gösterir.

## Yerel bir MCP istemcisi bağlayın

`tblflow mcp serve`, standart girdi ve çıktı üzerinde yerel bir MCP sunucusu başlatır. Bunu MCP istemcinizin yapılandırmasında tanımlayın:

```json
{ "mcpServers": { "tblflow": { "command": "npx", "args": ["-y", "@tblflow/cli", "mcp", "serve"] } } }
```

Hiçbir şey kurmadan Claude'u (web, masaüstü veya mobil) bağlamak için bunun yerine uzak MCP sunucusunu kullanın: [MCP sunucusu](/tr/docs/mcp-server) kılavuzuna bakın.

## Koşullar ve kişisel veriler

CLI'nin bir TblFlow hesabıyla kullanımı, [kullanım koşulları](https://app.tblflow.com/legal/terms) ve [gizlilik politikası](https://app.tblflow.com/legal/privacy) ile düzenlenir. CLI hiçbir telemetri toplamaz: yalnızca sizin yapılandırdığınız TblFlow sunucusuyla konuşur.
