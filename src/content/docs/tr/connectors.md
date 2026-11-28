---
title: "Bağlayıcılar"
translationKey: "connectors"
description: "TblFlow'u dış hizmetlere bağlayın: hesaplar, API anahtarları, işlemler, tabloya senkronizasyon, « Yeni öğe » tetikleyicisi ve gerekli haklar."
section: "Kılavuzlar"
order: 13
---

Bir bağlayıcı, TblFlow'u dış bir hizmete bağlar: bir hesap (Gmail, Slack…), bir anahtarla erişilen bir API veya bir PostgreSQL veritabanı. Sütunlarınız, tablolarınız, otomasyonlarınız ve ajanlarınız ardından bunu kullanabilir.

## Nerede bulunurlar

Bir veritabanında **Otomasyon** bölümünü açın, ardından **Bağlayıcılar** sekmesine geçin. İki görünüm vardır:

- **Sizinkiler**: zaten bağlanmış hesaplar, API'ler ve veritabanları;
- **Keşfet**: ekleyebilecekleriniz; arama ve kategorilerle (Mesajlaşma, CRM, Üretkenlik…).

**Yapay zekâ ile oluştur** düğmesi, bir API'nin belgelerinden yola çıkarak bir bağlayıcı oluşturur. Bu sayfa bunu anlatmaz.

## Bağlanmak

### Bir hesap (OAuth)

**Keşfet** bölümünde, hizmetin **+** düğmesine tıklayın (ipucu « Bağlan », ardından hizmetin adı): hesabınızı yetkilendirmek için hizmetin bir penceresi açılır. Tanımak için bir **Hesap adı** verebilirsiniz. Ardından bağlayıcının panelinde **Yeniden bağlan** ve **Bağlantıyı kes** kullanılabilir. Bağlantıyı kesmek, hesabı kullanan şeyleri (otomasyonlar, sütunlar, ajanlar) yeniden bağlanana kadar durdurur.

Sunucunun bir hizmet için OAuth uygulaması yoksa, bu hizmet **Yapılandırılmamış (yönetici)** altında görünür. Bu durumda bir alan yöneticisi, bağlantı penceresinin **Gelişmiş** bölümünde kuruluşunun OAuth uygulamasını girebilir.

### Anahtarlı bir API

API bağlayıcıları **Keşfet** içindeki **Katalog** bölümündedir. Bir API bağlayıcısı önce yüklenir (**Yükle**), ardından bağlanır (**Bağlan**): anahtarınızı yapıştırırsınız ve gerekiyorsa hesabınızın adresini de girersiniz. TblFlow, anahtarın yanıt verdiğini hemen kontrol eder.

**Kullanılan hesap** ayarı, alanın tamamı için bir **Paylaşılan hesap** ile bir **Her kullanıcının hesabı** arasında seçim yapar. Paylaşılan hesapta tüm çağrılar, bir alan yöneticisi tarafından bağlanan tek bir hesaptan geçer.

### Bir PostgreSQL veritabanı

**PostgreSQL** bağlayıcısı, mevcut bir veritabanının tablolarını salt okunur olarak okur. Hiçbir yazma işlemi gönderilmez.

## İşlemler

Bir bağlayıcının panelinde **Neler yapabilir** listelenir. Her işlem şu üç türden birindedir:

| Tür | Anlamı |
|---|---|
| **Oku** | Bir değerden yola çıkarak bir kaydı okur |
| **Listele** | Bir öğe listesi döndürür |
| **Eylem** | Hizmette bir şey oluşturur, değiştirir veya gönderir |

**Test et** düğmesi, panelinden bir işlemi dener. Bir işlem ardından dört yerde kullanılır (**Nerede kullanılır** bölümü): bağlı bir sütun, senkronize bir tablo, bir otomasyon (**Bir işlem çağır** adımı) veya işlemleri araç olarak çağırabilen bir ajan.

Katalogdan kurulan bir bağlayıcı için **Yazmalara izin ver** ayarı varsayılan olarak kapalıdır. Kapalıyken, hizmette oluşturan, değiştiren veya silen işlemler her yerde reddedilir (otomasyonlar, düğmeler, ajanlar); okumalar devam eder.

## Bir tabloya senkronize etmek

Senkronize bir tablo, hizmetten bir liste içe aktarır ve onu güncel tutar: her öğe bir satır olur.

1. Bağlayıcıyı etkinleştirin, ardından panelini açın ve **Nerede kullanılır** → **Senkronize tablo** bölümüne gidin.
2. Veritabanını seçin, ardından **Senkronize tablo oluştur**.
3. **Bağlayıcı** ile **Liste** seçin (bir liste döndüren bir işlem). Bir **Önizleme** ilk öğeleri gösterir.
4. **Sütunları** işaretleyin (türler: Metin, Uzun metin, Sayı, Onay kutusu, Tarih, Bağlantı, E-posta) ve her öğeyi bir senkronizasyondan diğerine bulan **Benzersiz kimlik**i seçin.
5. **Senkronizasyon** ayarını yapın: 15 dakikada bir, saatte bir, 6 saatte bir, günde bir veya **Elle**.
6. **Kayıp öğeler**in akıbetini seçin (**Satırları koru** veya **Satırları sil**), **En fazla öğe sayısı**nı ve **Mod**u belirleyin, ardından **Tabloyu oluştur**.

**Artımlı** mod, yalnızca son senkronizasyondan beri değişen öğeleri yeniden okur; tüm liste varsayılan olarak 7 günde bir yeniden okunur. Bu mod yalnızca bağlayıcı bunu o liste için belirtmişse kabul edilir. **Tam** mod her seferinde tüm listeyi yeniden okur. Ek bir ayar yoksa okuma 5 000 öğede durur; ayarlanabilir en yüksek değer 50 000'dir. Senkronize bir tablo en fazla 100 sütun içerebilir. Sınır okumayı durdurursa bir ileti bunu belirtir.

Tablonun **Senkronizasyon** menüsü durumu gösterir ve şunları sunar: **Şimdi senkronize et**, **Tümünü yeniden senkronize et** ve **Senkronizasyonu durdur** (tablo ve satırları korunur).

Varsayılan olarak tablo salt okunurdur. **Değişiklikleri API'ye geri gönder** seçeneği, **Veritabanı yöneticisinin onayından sonra** ya da **Her değişiklikte otomatik olarak** seçeneklerini sunar; bu seçenek bağlayıcı için yazmaların izinli olmasını gerektirir.

## Bir otomasyonu tetiklemek: « Yeni öğe »

Bir [otomasyonda](/tr/docs/automations), **Bir bağlayıcıda yeni öğe** tetikleyicisi, bir listenin her yeni öğesi için otomasyonu bir kez başlatır.

- Bağlayıcıyı, öğelerinin bir kimliği olan bir listeyi, bu listenin parametrelerini ve **Kontrol et** sıklığını seçin: 15 dakika, 1 saat, 6 saat veya 1 gün.
- İlk okuma, zaten var olan öğeleri hiçbir şey başlatmadan kaydeder. Yalnızca sonradan görünen öğeler otomasyonu tetikler.
- Öğenin alanları `{{item.<yol>}}` ile okunur.
- Tek bir okuma en fazla 50 çalıştırma başlatır ve en fazla 5 sayfa tarar.

## Keşfet'te sunulan bağlayıcılar

### Hesaplar (OAuth)

| Hesap | Panelin gösterdikleri |
|---|---|
| Gmail | E-posta arama ve okuma, e-posta gönderme |
| Google Agenda | Etkinlikleri listeleme, etkinlik oluşturma |
| Google Drive | Dosya arama, bir dosyanın bilgilerini okuma |
| Google Meet | Bir toplantı bağlantısı oluşturma |
| Google Chat | Alanları listeleme, ileti yayımlama |
| Slack | Kanalları listeleme, bir kanalın iletilerini okuma, ileti gönderme |
| GitHub | Issue'ları listeleme ve okuma, yenilerini oluşturma, pull request'leri listeleme, yorum yazma |
| Outlook | E-postaları listeleme, e-posta gönderme |
| Microsoft Teams | Ekiplerinizi ve kanallarını listeleme, okuma, yayımlama ve yanıtlama, toplantı oluşturma |
| Discord | Profilinizi okuma, sunucularınızı listeleme |

### Anahtarlı API'ler

| Bağlayıcı | Neler yapabilir | Neyi sağlamak gerekir |
|---|---|---|
| Make | Organizasyonlarınızı, ekiplerinizi ve senaryolarınızı, bunların durumunu ve blueprint'lerini okuma (salt okunur) | Bir Make API belirteci (`scenarios:read` ve `teams:read` kapsamları) ve bölgenizin adresi |
| n8n | Bir n8n Cloud örneğindeki iş akışlarınızı ve yürütmelerini okuma | Bir n8n API anahtarı ve örneğinizin adresi |
| HubSpot | Kişileri, şirketleri ve işlemleri okuma, arama, oluşturma ve güncelleme, ve bunları ilişkilendirme | Bir HubSpot özel uygulamasının belirteci |

Make, n8n ve HubSpot ayrıca [süreç haritasını](/tr/docs/process-map) besler.

### ClickUp (henüz Keşfet'te yok)

ClickUp bağlayıcısı mevcut, ancak henüz gerçek bir hesapta test aşamasında: **Keşfet**'te görünmez, çünkü orada yalnızca yayımlanmış bağlayıcılar gösterilir. Arayüzden yüklemek için bir düğme de yoktur. Yayımlanana kadar günlük kullanım için buna güvenmeyin.

ClickUp'ın **kişisel belirteci** (`pk_` ile başlar) ile bağlanır. Bağlantı kılavuzu nerede üretileceğini gösterir: ClickUp'ta avatarınız, **Ayarlar**, **Uygulamalar**, **API belirteci** bölümü. Belirtecin kapsamı yoktur: sizin haklarınızla, erişiminiz olan tüm çalışma alanlarında etkin olur. Erişimi sınırlamak için, belirteci bir konuk hesabından yalnızca işe yarar alanlarda üretin.

| Tür | İşlemler |
|---|---|
| **Listele** | Çalışma alanları; bir çalışma alanının alanları; bir alanın klasörleri; bir klasörün listeleri; hiçbir klasörde olmayıp doğrudan bir alanda bulunan listeler; bir listenin görevleri; bir listenin üyeleri |
| **Oku** | Bir görev, özel alanlarıyla birlikte ve gerekirse alt görevleriyle |
| **Eylem** | Bir listede görev oluşturma; bir görevi değiştirme ya da arşivleme (yalnızca gönderilen alanlar değişir, özel alanlar burada değiştirilmez); bir göreve yorum yazma |

Eylem yapan üç işlem yazmadır: **Yazmalara izin ver** ayarı kapalıyken, katalogdaki diğer bağlayıcılarda olduğu gibi reddedilirler. Bir listenin görevleri 100'lük sayfalar halinde okunur; varsayılan olarak en yenileri önce gelir.

TblFlow, ClickUp'a yaptığı çağrıları düzenler: aynı anda en fazla 2 çağrı, iki çağrı arasında en az 600 ms. Bu, ClickUp'ın en düşük planlarına uyguladığı, belirteç başına dakikada 100 istek sınırının altında kalır.

**Bir bağlayıcıda yeni öğe** tetikleyicisi (yukarıya bakın), **Bir listenin görevlerini listele** işlemiyle çalışır: bir otomasyon, bir ClickUp listesinde her yeni görev için başlar.

## Gerekli haklar

| İşlem | Alan rolü |
|---|---|
| Bir bağlayıcıyı kullanmak, kendi hesabını bağlamak | Tüm roller |
| Bir bağlayıcı oluşturmak ve değiştirmek | Sahip, oluşturucu, düzenleyici |
| Katalogdan yüklemek | Sahip; kurulum serbestse oluşturucu |
| Bir bağlayıcıyı silmek | Sahip, oluşturucu |

Katalogun yönetimi alanda ayarlanır: **Serbest (alanın sahipleri ve oluşturucuları)** ya da **Bir alan yöneticisinin onayıyla**. İkinci durumda diğer üyeler **Kurulum talep et** kullanır.

Senkronize bir tablo oluşturmak, veritabanında tablo oluşturma hakkını gerektirir. Rollerin hakları [Yetkiler ve roller](/tr/docs/permissions) sayfasında ayrıntılıdır.

## Çağrı kotası

Her plan, aylık gerçek API bağlayıcı çağrılarını sınırlar (önbellekten sunulan yanıtlar sayılmaz): Ücretsiz 1 000, Essential 50 000, Team 500 000. Bkz. [Planlar ve sınırlar](/tr/docs/plans-limits).
