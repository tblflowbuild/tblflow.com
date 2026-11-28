---
title: "MCP sunucusu"
translationKey: "mcp-server"
description: "TblFlow'u resmî MCP sunucusuyla Claude'a bağlayın: bağlantı, araçlar, izinler ve alan seçimi, otomasyon ve ajanları açma, sınırlar ve sorun giderme."
section: "Kılavuzlar"
order: 6
---

TblFlow'un resmî MCP sunucusu, Claude'un konuşma içinden verileriniz üzerinde çalışmasını sağlar. Streamable HTTP üzerinden çalışan uzak bir MCP sunucusudur ve OAuth 2.1 ile kimlik doğrular (olağan TblFlow girişiniz). [REST API](/tr/docs/api-developers) gibi Ücretsiz plandan itibaren kullanılabilir.

Sunucu URL'si: `https://app.tblflow.com/mcp`

## Bağlanın

### Claude (web, masaüstü ve mobil)

1. **Ayarlar → Bağlayıcılar → Özel bağlayıcı ekle**'yi açın.
2. `https://app.tblflow.com/mcp` URL'sini girin.
3. TblFlow hesabınızla oturum açın.
4. Erişilebilir alanları ve veritabanlarını, ardından izinleri seçin.

### Claude Code

```bash
claude mcp add --transport http tblflow https://app.tblflow.com/mcp
```

## 27 araç

Sunucu 27 araç sunar. Bunlar şu şekilde gruplanır:

- **Keşfetme**: alanlarınızı ve veritabanlarınızı listeleme (`list_workspaces`), bir tablonun görünümlerini (`list_views`) ve bir alanın üyelerini (`list_collaborators`, e-posta adresleri olmadan).
- **Anlama**: bir veritabanının şemasını tanımlama (`describe_base`), bir alanın süreç haritasını okuma (`get_process_map`).
- **Okuma**: kayıtları listeleme, filtreleme ve okuma, çağrı başına en fazla 100 (`list_records`, `get_record`).
- **Hesaplama**: bir tablo üzerinde istatistik hesaplama (`aggregate_records`), filtre ve gruplama ile, tüm satırları okumadan. İşlevler: sayma, boşlar, dolular, benzersiz değerler, minimum, maksimum, toplam, ortalama, boş, dolu ve benzersiz yüzdeleri, en eski ve en yeni tarih.
- **Arama**: bilgi grafiğinde anlamsal ve tam metin araması (`search_knowledge`).
- **Oluşturma ve değiştirme**: kayıtları oluşturma ve değiştirme, çağrı başına en fazla 50 (`create_records`, `update_records`).
- **İçe aktarma**: mevcut bir tabloya veya yeni bir tabloya en fazla 2 MiB'lik bir CSV aktarma (`import_csv`). Varsayılan olarak ilk çağrı yalnızca sütunları, tahmin edilen türleri ve satır sayısını gösterir, hiçbir şey yazmaz.
- **Silme ve geri yükleme**: kayıtları veya bir alanı silme (`delete_records`, `delete_field`), önce önizleme, ardından açık onay ile; bir tablonun çöp kutusunu listeleme ve silinenleri geri yükleme (`list_trash`, `restore_records`).
- **Yapılandırma**: tablo oluşturma (`create_table`), alan oluşturma (`create_field`), adı ve açıklamayı değiştirme ve bir Canvas alanı için alan seçeneklerini güncelleme (`update_field`). Bir alanın türü hiçbir zaman değişmez.
- **Canvas belgeleri ve fişleri**: bir satırın fişini okuma (`get_canvas_doc`), değiştirme (`update_canvas_doc`), bir Canvas alanı için fiş üretimini çağrı başına en fazla 25 satır için başlatma (`generate_canvas_docs`, yapay zekâ modunda yapay zekâ kredisi harcar) ve bir alanın belgesini okuma (`get_doc`).
- **Otomasyon**: açılmış otomasyonları ve ajanları listeleme (`list_exposed_actions`), bir otomasyonu kuru çalıştırma (`run_automation`).
- **Devretme**: bir yapay zekâ ajanı başlatma (`run_agent`, en fazla yaklaşık 100 saniye bekler) ve son çalıştırmalarının durumunu izleme (`get_run_status`).

Her araç, jetonunuzla REST API'yi çağırır: sunucu hiçbir ek erişim açmaz.

## Kaynaklar ve istemler

Sunucu ayrıca üç okunabilir kaynak ve üç hazır istem yayımlar.

| Tür | Ad | İçerik |
|---|---|---|
| Kaynak | `tblflow://workspaces` | Erişilebilir alanlar (en fazla 30) |
| Kaynak | `tblflow://bases/{baseId}` | Bir veritabanının tabloları |
| Kaynak | `tblflow://tables/{tableId}` | Bir tablonun alanları |
| İstem | `summarize_table` | Bir tabloyu tanımlar ve temel rakamlarını çıkarır, tabloyu değiştirmeden |
| İstem | `audit_data_quality` | Boş alanları ve olası yinelenen kayıtları bulur, hiçbir şeyi düzeltmeden |
| İstem | `add_rows_safely` | Şema doğrulandıktan sonra ve yalnızca sizin onayınızla kayıt ekler |

## İzinler ve alan seçimi

Bağlanırken TblFlow, « hesabınıza erişim istiyor » ekranını gösterir. Ekran istenen izinleri şu etiketlerle listeler:

| İzin | Gösterilen etiket |
| --- | --- |
| Okuma (varsayılan) | Verilerinizi okuma (alanlar, tablolar, kayıtlar, belgeler) |
| Yazma | Kayıt oluşturma ve değiştirme |
| Silme | Kayıt silme (çöp kutusu) |
| Şema | Tablo ve alan oluşturma |
| Tetikleme | Açtığınız otomasyonları kuru çalıştırma ve ajanları başlatma |

Ardından uygulamanın erişebileceği alanları ve veritabanlarını seçmeniz gerekir. İşaretlenen bir alan, tüm veritabanlarını kapsar. Uygulama TblFlow tarafından doğrulanmadıysa ekran bunu belirtir (« Doğrulanmamış uygulama »): yalnızca bağlantıyı kendiniz başlattıysanız onaylayın ve gösterilen yönlendirme ana makinesini kontrol edin.

**Okuma** varsayılan olarak etkindir; **yazma**, **silme**, **şema** ve **tetikleme** isteğe bağlıdır. Silme, çöp kutusundan geri yüklemeyi de kapsar. Mevcut bir tabloya CSV içe aktarmak yazma iznini; tablo oluşturan içe aktarma ise şema iznini gerektirir. Mevcut TblFlow haklarınız her istekte geçerlidir: Claude, sizin yapabileceğinizden fazlasını hiçbir zaman yapamaz.

## Bir otomasyonu veya ajanı açma

Bir otomasyon veya ajan, ancak sahibi onu **açtığında** Claude'dan tetiklenebilir. Bugün açma API üzerinden yapılır: `PUT /api/base/:baseId/mcp-exposure`. Arayüzde bir anahtar yakında gelecek.

## Plana göre sınırlar

| Plan | Dakika başına istek |
| --- | --- |
| Ücretsiz | 60 |
| Essential | 120 |
| Team | 300 |
| Enterprise | 600 |

## Terminalden

[TblFlow CLI](/tr/docs/cli), bilgisayarınızda bir işlem başlatan istemciler için yerel bir MCP sunucusu da sunar (`tblflow mcp serve`). Ayrıca komut satırından CSV içe aktarmak veya bir tabloyu dışa aktarmak için de kullanılır.

## Erişimi iptal etme

Claude ayarlarında bağlayıcıyı silin: Claude artık TblFlow verilerinize erişmez.

## Sorun giderme

- **Yetkilendirme hatası**: bağlayıcıyı yeniden bağlayın, ardından alanın veya veritabanının seçtiklerinizin arasında olduğunu, gerekli iznin (yazma, silme, şema veya tetikleme) açık olduğunu ve TblFlow haklarınızın buna izin verdiğini kontrol edin.
- **Bir ajan başlamıyor**: yapay zekânın veritabanında yapılandırılmış olması ve ajanın sahibi tarafından açılmış olması gerekir.
- **`run_automation` hiçbir şeyi değiştirmiyor**: bu bir kuru çalıştırmadır, örnek verilerle yapılır. Hiçbir veri değiştirilmez.

## Veriler ve gizlilik

Konuşmaların içeriği günlüğe kaydedilmez: yalnızca çağrılan araç, saat, süre ve durum tutulur. Araç sonuçları, isteğinize yanıt vermesi için asistana (Claude) iletilir. Ayrıntılar [gizlilik politikasında](/tr/privacy) ve [MCP sunucusu sayfasında](/tr/mcp) yer alır.
