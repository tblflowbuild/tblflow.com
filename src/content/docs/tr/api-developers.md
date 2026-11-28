---
title: "API ve geliştirici erişimi"
translationKey: "api-developers"
description: "TblFlow API'sini çağırın: kişisel erişim belirteçleri, OAuth uygulamaları, betikler ve CI için hizmet hesapları, OpenAPI belgeleri ve gelen webhook'lar."
section: "Kılavuzlar"
order: 15
---

TblFlow REST API'si, arayüzle aynı verilere erişim sağlar; çağıran kişinin veya hesabın haklarıyla. Tüm rotaları `/api/` ile başlar. Bu sayfa dört kimlik doğrulama yöntemini, ardından gelen webhook'ları anlatır.

| İhtiyaç | Yöntem |
|---|---|
| Kendi betiğiniz veya aracınız | Kişisel erişim belirteci |
| Kullanıcılar adına hareket eden üçüncü taraf uygulama | OAuth uygulaması |
| Bir kişiye bağlı olmayan betik, entegrasyon veya CI | Hizmet hesabı |
| Bir otomasyonu veya ajanı tetikleyen dış araç | Gelen webhook |

Belirteçler `Authorization: Bearer <belirteç>` başlığıyla gönderilir.

## Kişisel erişim belirteçleri

Kişisel erişim belirteci sizin haklarınızla çalışır; yalnızca seçtiğiniz kapsamlar ve çalışma alanları veya tabanlarla sınırlıdır. Erişimi yalnızca kendiniz erişebildiğiniz taban ve çalışma alanlarına verebilirsiniz.

Kişisel ayarlarınızda **Kişisel erişim belirteçleri** bölümünü açın, ardından **Yeni belirteç oluştur**:

- **Ad** ve **Açıklama**;
- **Son kullanma**: 7, 30, 60, 90 veya 365 gün, ya da özel bir tarih. Hiçbir belirteç 365 günden uzun yaşamaz;
- **Kapsamlar**: izin verilen işlemler;
- **Erişim**: bir taban, bir çalışma alanı (mevcut ve gelecekteki tüm tabanları) veya **Tüm kaynaklar**.

Belirteç yalnızca bir kez gösterilir: o anda kopyalayın. **Belirteci yeniden oluştur** yeni bir belirteç üretir; eskisini kullanan betiklerin güncellenmesi gerekir. Bir belirteç silindiğinde, onu kullanan betikler artık API'ye erişemez. Son kullanma tarihinden önce bir e-posta gelir (14 ve 3 gün eşikleri); bu e-posta hiçbir zaman belirteci içermez.

| İşlem | Rota |
|---|---|
| Listele, oluştur | `GET` ve `POST /api/access-token` |
| Düzenle, sil | `PUT` ve `DELETE /api/access-token/:accessTokenId` |
| Yeniden oluştur | `POST /api/access-token/:accessTokenId/refresh` |

## API sorgu oluşturucu

Belirteç sayfasından **API sorgu oluşturucu** bağlantısı `/developer/tool/query-builder` adresini açar. Bir taban ve bir tablo seçin; görünümü, aramayı, filtreyi, sıralamayı ve hücre biçimini ayarlayın: **API oluşturucu** sekmesi sorguyu oluşturur ve dönüş değerinin bir önizlemesini gösterir. **YZ bağlamı** sekmesi, yapay zeka asistanınıza kopyalayabileceğiniz bir metin üretir; tam veya kısa sürümde. Bu metin asistanın tabloyla nasıl etkileşim kuracağını anlamasını sağlar.

## OpenAPI belgeleri

Uygulama, API'sinin OpenAPI açıklamasını üretir ve bunu `/docs` (Swagger) ve `/redocs` (Redoc) yollarında yayımlar; sunucuda belge seçeneği devre dışı bırakılmadıysa.

## OAuth uygulamaları

Bir OAuth uygulaması, üçüncü taraf bir hizmetin kullanıcılarınızın hesabına erişim istemesine olanak tanır. Kişisel ayarlarınızda **OAuth uygulamaları** bölümünü açın, ardından **Yeni OAuth uygulaması**:

- **OAuth uygulamasının adı**, **Açıklama**, **Ana sayfa URL'si**, **Logo**;
- **Geri çağırma URL'si** (birden fazla olabilir): uygulamaya izin verdikten sonra kullanıcının yönlendirildiği adres;
- **Kapsamlar**: uygulamanın ihtiyaç duyduğu yetkiler;
- **İstemci gizli anahtarları**: **Yeni istemci gizli anahtarı oluştur**. Gizli anahtar yalnızca oluşturulduğunda görünür. Her gizli anahtar, son kullanım tarihini gösterir.

**İstemci kimliği** uygulamanın sayfasında okunabilir. Akış OAuth 2.0 yetkilendirme kodudur:

1. Uygulama kullanıcıyı `GET /api/oauth/authorize` adresine yönlendirir (`client_id` ve `response_type` ile).
2. Kullanıcı oturum açar, « {ad} hesabınıza erişim istiyor » mesajını ve istenen kapsamları görür, ardından **İzin ver** seçeneğini seçer.
3. Uygulama, kodu `POST /api/oauth/access_token` ile belirteçlere çevirir; kendi istemcisiyle kimlik doğrulayarak. Bir yenileme belirteci yeni bir belirteç almayı sağlar.

Kullanıcı, izin verdiği uygulamaları **Profil → Güvenlik → Yetkili uygulamalar** bölümünde bulur ve erişimlerini iptal edebilir (iptal düğmesi).

| İşlem | Rota |
|---|---|
| Uygulamaları listele, oluştur | `GET` ve `POST /api/oauth/client` |
| Oku, düzenle, sil | `GET`, `PUT` ve `DELETE /api/oauth/client/:clientId` |
| Gizli anahtar oluştur veya sil | `POST /api/oauth/client/:clientId/secret`, `DELETE …/secret/:secretId` |
| Tüm kullanıcıların erişimini iptal et | `POST /api/oauth/client/:clientId/revoke-access` |
| Kendi yetkilendirmenizi iptal et | `POST /api/oauth/client/:clientId/revoke-token` |
| Yetkili uygulamaları listele | `GET /api/oauth/client/authorized/list` |

[MCP sunucusu](/tr/docs/mcp-server) ve [CLI](/tr/docs/cli) da TblFlow'un OAuth sunucusundan geçer.

## Hizmet hesapları

Bir hizmet hesabı, bir betiğe, entegrasyona veya CI'ye hiçbir kişiye bağlı olmayan bir çalışma alanı erişimi verir. Seçilen rolle çalışma alanının üyesidir (asla sahibi değildir), koltuk kullanmaz ve belirteçleri yalnızca bu çalışma alanında geçerlidir.

Sayfa yalnızca çalışma alanının sahiplerine açıktır: **Çalışma alanı ayarları → Güvenlik ve denetim → Hizmet hesapları**.

1. **Hesap adı** girin ve **Rol** seçin: **Okuyucu**, **Düzenleyici** veya **Oluşturucu**, ardından **Hesap oluştur**.
2. Bir belirteç vermek için bir **Belirteç adı**, bir **Erişim** (**Yalnızca okuma**, **Kayıt okuma ve yazma** veya **Rolün izin verdiği her şey**) ve 30, 90, 180 veya 365 günlük bir **Geçerlilik** girin, ardından **Belirteç ver**.
3. Belirteci kopyalayın: bir daha asla gösterilmeyecektir.

Gerçek erişim, belirtecin kapsamları ile hesabın rolünün kesişimidir. Bir belirteci **İptal et** veya bir hesabı **Sil** işlemi onaylandığı anda geçerli olur. Bir çalışma alanı en fazla 50 hizmet hesabı, bir hesap en fazla 20 belirteç içerebilir. Her oluşturma, rol değişikliği, belirteç verme ve iptal çalışma alanı günlüğüne yazılır; sahipler, bir belirtecin son kullanım tarihinden önce e-posta alır. [CLI](/tr/docs/cli) bunu sürekli entegrasyonda kullanır.

| İşlem | Rota (çalışma alanı sahibi) |
|---|---|
| Listele, oluştur | `GET` ve `POST /api/space/:spaceId/service-account` |
| Rolü değiştir, sil | `PATCH` ve `DELETE /api/space/:spaceId/service-account/:serviceAccountId` |
| Belirteç ver | `POST …/:serviceAccountId/token` (`name`, `scopes`, `expiredTime`, isteğe bağlı `baseIds`) |
| Belirteci iptal et | `DELETE …/:serviceAccountId/token/:accessTokenId` |

## Gelen webhook'lar

### Bir otomasyonu tetikleme

Tetikleyicisi **Bir webhook alındığında** olan bir [otomasyon](/tr/docs/automations), bir HTTP isteğiyle başlatılır:

```bash
curl -X POST "https://app.tblflow.com/api/base/<baseId>/workflow/<workflowId>/webhook" \
  -H "X-Webhook-Secret: <secret>" \
  -H "Idempotency-Key: commande-4821" \
  -H "Content-Type: application/json" \
  -d '{"client": "Ada", "montant": 120}'
```

- Adres, otomasyon düzenleyicisinde ve **Otomatikleştir → Webhook'lar** bölümünde **Adresi kopyala** ile birlikte gösterilir.
- Gizli anahtar zorunludur. Doğru `X-Webhook-Secret` yoksa istek 401 hatası alır. Otomasyonun kimliği kimlik doğrulamak için yeterli değildir.
- `Idempotency-Key` (veya `X-Idempotency-Key`, en fazla 255 karakter) aynı olayın iki kez işlenmesini önler: yanıt bu durumda `duplicate: true` içerir.
- Olay kaydedilir kaydedilmez yanıt `{ "received": true, "queued": true, "eventId": "…" }` olur. Kayıt başarısız olursa sunucu 503 yanıtı verir: yeniden deneyin.
- JSON gövdesi, otomasyonun adımlarında kök düzeyinde okunur.
- Otomasyon etkin değilse istek `{ "received": true, "steps": 0 }` yanıtını verir ve hiçbir şey çalıştırmaz.

Kabul edilen her çağrı, otomasyon çalıştırmalarının aylık kotasına eklenir.

### Bir ajanı tetikleme

Bir [ajan](/tr/docs/ai-agents) da **Gelen webhook** tetikleyicisine sahip olabilir. İstek, `X-Agent-Secret` başlığı ve bir JSON gövdesiyle `POST /api/agent/:agentId/webhook` şeklindedir. Geçersiz bir gizli anahtar 401 hatası alır. Yanıt `{ "received": true }` olur ve ajan ardından çalışır; bu çağrı ajan çalıştırma kotasını tüketir.
