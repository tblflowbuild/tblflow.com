---
title: "MCP sunucusu"
translationKey: "mcp-server"
description: "TblFlow'u resmî MCP sunucusuyla Claude'a bağlayın: bağlantı, kullanılabilir araçlar, izinler ve alan seçimi, otomasyon ve ajanları kullanıma açma, sınırlar ve sorun giderme."
section: "Kılavuzlar"
order: 6
---

TblFlow'un resmî MCP sunucusu, Claude'un konuşma içinden verileriniz üzerinde çalışmasını sağlar. Streamable HTTP üzerinden çalışan uzak bir MCP sunucusudur ve OAuth 2.1 ile kimlik doğrular (olağan TblFlow girişiniz). REST API gibi Ücretsiz plandan itibaren kullanılabilir.

Sunucu URL'si: `https://app.tblflow.com/mcp`

## Bağlanın

### Claude (web, masaüstü ve mobil)

1. **Ayarlar → Bağlayıcılar → Özel bağlayıcı ekle**'yi açın.
2. `https://app.tblflow.com/mcp` URL'sini girin.
3. TblFlow hesabınızla giriş yapın.
4. Erişilebilecek alanları ve tabanları, ardından izinleri seçin.

### Claude Code

```bash
claude mcp add --transport http tblflow https://app.tblflow.com/mcp
```

## 13 araç

Sunucu, aşağıdaki gibi gruplanan 13 araç sunar:

- **Keşfetmek**: alanlarınızı ve tabanlarınızı listelemek.
- **Anlamak**: bir tabanın şemasını açıklamak.
- **Okumak**: kayıtları listelemek, filtrelemek ve okumak.
- **Aramak**: knowledge graph içinde anlamsal ve tam metin aramasıyla arama yapmak.
- **Oluşturmak ve düzenlemek**: kayıt oluşturmak ve düzenlemek.
- **Silmek**: kayıtları silmek; önce bir önizleme, ardından açık bir onay. Kayıtlar çöp kutusuna gider.
- **Yapılandırmak**: bir tablo veya alan oluşturmak.
- **Otomatikleştirmek**: bir otomasyonu tetiklemek.
- **Devretmek**: bir yapay zeka ajanı çalıştırmak.

## İzinler ve alan seçimi

Bağlanırken erişilebilecek alanları ve tabanları ve izinleri siz seçersiniz. **Okuma** varsayılan olarak açıktır; **yazma**, **silme**, **şema** ve **tetikleme** seçeneklerdir. Mevcut TblFlow yetkileriniz her istekte geçerlidir: Claude hiçbir zaman sizin yapabildiğinizden fazlasını yapamaz.

## Bir otomasyonu veya ajanı kullanıma açın

Bir otomasyon veya ajan, yalnızca sahibi onu **kullanıma açtıysa** Claude'dan tetiklenebilir. Bugün kullanıma açma API üzerinden yapılır: `PUT /api/base/:baseId/mcp-exposure`. Arayüzde bir anahtar yakında geliyor.

## Plana göre sınırlar

| Plan | Dakika başına istek |
| --- | --- |
| Ücretsiz | 60 |
| Pro | 120 |
| Business | 300 |
| Enterprise | 600 |

## Erişimi iptal edin

Claude ayarlarında bağlayıcıyı kaldırın: Claude TblFlow verilerinize erişmeyi bırakır.

## Sorun giderme

- **Yetkilendirme hatası**: bağlayıcıyı yeniden bağlayın, ardından alanın veya tabanın sizin seçtiğiniz biri olduğunu, gereken iznin (yazma, silme, şema veya tetikleme) açık olduğunu ve TblFlow yetkilerinizin buna izin verdiğini kontrol edin.
- **Bir ajan başlamıyor**: tabanda yapay zeka yapılandırılmış olmalı ve ajan sahibi tarafından kullanıma açılmış olmalıdır.
- **`run_automation` hiçbir şeyi değiştirmiyor**: örnek verilerle bir deneme çalıştırmasıdır. Hiçbir veri değiştirilmez.

## Veriler ve gizlilik

Konuşmaların içeriği günlüğe kaydedilmez: yalnızca çağrılan araç, saat, süre ve durum saklanır. Araç sonuçları, isteğinizi yanıtlamak için asistana (Claude) iletilir. Ayrıntılar [gizlilik politikasında](/tr/privacy) ve [MCP sunucusu sayfasında](/tr/mcp) yer alır.
