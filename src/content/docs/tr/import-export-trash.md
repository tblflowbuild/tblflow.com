---
title: "İçe aktarma, dışa aktarma ve çöp kutusu"
translationKey: "import-export-trash"
description: "CSV, TSV ve Excel içe aktarın, tablo veya veritabanı dışa aktarın, çöpten geri yükleyin, işlemi geri alın, çoğaltın ve şablondan başlayın."
section: "Kılavuzlar"
order: 11
---

Bu sayfa TblFlow'a neyin girdiğini, nelerin çıktığını ve nasıl geri dönüleceğini bir araya getirir.

## Dosya içe aktarma

TblFlow üç biçimi içe aktarır: **CSV**, **TSV** ve **Excel** (`.xlsx`, `.xls` ve `.xlsm` uzantıları). Yerel bir dosya için biçim uzantısından tanınır. Bilgisayarınızdan gönderilen bir Excel dosyası 5 MB'ı aşamaz.

Yeni bir tablo mu istediğinize yoksa mevcut bir tabloya satır mı eklemek istediğinize bağlı olarak iki giriş noktası vardır.

### Yeni bir tabloya

1. Veritabanının kenar çubuğunda **+** menüsünü açın, **Diğer kaynaklardan ekle** bölümünde **Verileri içe aktar** seçeneğini tıklayın.
2. **Yerel dosyalar** sekmesini (dosyayı alana sürükleyin) veya **Bağlantı (URL)** sekmesini (bir dosyanın adresini yapıştırın) seçin.
3. **Veri önizlemesi**, algılanan sütunları gösterir. **Yapay zekâyla analiz et ve uygula** seçeneğini etkinleştirebilirsiniz: yapay zekâ sütun adları ve alan türleri önerir; bunları bir sonraki adımda tutabilir veya düzeltebilirsiniz.
4. İçe aktarmayı ayarlayın:
   - **İlk satırı başlık olarak kullan**;
   - **Alan türlerini otomatik seç**;
   - her alanın adı ve türü, ya da bir sütunu dışarıda bırakmak için **İçe aktarma**;
   - **Ana alan**;
   - **Verileri içe aktar** (yalnızca yapıyı oluşturmak için işaretini kaldırın);
   - Excel çalışma kitabı için yapılandırma sayfa sayfa yapılır (**Sayfa adı**).
5. **İçe aktar** düğmesine tıklayın, ardından uyarı mesajında **Onayla ve devam et** seçeneğine tıklayın.

Alan adları benzersiz ve boş olmayan olmalıdır. İçe aktarma yalnızca başarı ya da hata ile sona erer: durumu tablonun sağ üstünde görünür ve bir bildirim sonucu duyurur. İçe aktarma sürerken alanları değiştirmekten kaçının.

### Mevcut bir tabloya

Tablonun menüsünü açın, **Verileri içe aktar**, ardından **CSV dosyası** veya **Microsoft Excel** seçeneğini tıklayın. Dosyanın her sütununu tablonun bir alanıyla eşleştirirsiniz; isterseniz **İçe aktarmada ilk satırı hariç tut** seçeneğini işaretleyebilirsiniz. Satırlar mevcut satırlara eklenir.

Bu giriş bir tabloya içe aktarma hakkı gerektirir: Sahip ve Oluşturucu rolleri. İçe aktarmayla yeni bir tablo oluşturmak ise tablo oluşturma hakkı gerektirir.

### Sınırlar ve hatalar

İçe aktarma, planınızdaki tablo başına satır sınırına tabidir: Ücretsiz planda 5.000, Essential planda 100.000, Team planda 1.000.000; Enterprise planda sınır yoktur. Sınır aşılırsa içe aktarma **"Satır sınırına ulaşıldı"** mesajıyla durur. Bkz. [Planlar ve sınırlar](/tr/docs/plans-limits).

Diğer olası hatalar: geçerli aralığın dışında bir tarih, boş bırakılmış bir **Zorunlu** alan, yalnızca **Benzersiz değerler** kabul eden bir alandaki yinelenen kayıtlar veya zaman aşımı.

### Diğer içe aktarma yolları

- **Tabloya yapıştırma.** Bir elektronik tablodan hücre kopyalayın ve bir tablo görünümüne yapıştırın. Yapıştırma tabloyu aşarsa TblFlow kayıt eklenip eklenmeyeceğini sorar; mevcut satırların üzerine yazmadan önce ayrıca onay ister.
- **Komut satırından**: `tblflow import --new-table` bir CSV dosyası gönderir. Bkz. [CLI](/tr/docs/cli).
- **Bir ajan aracılığıyla**: MCP sunucusu bir `import_csv` aracı sunar. Bkz. [MCP sunucusu](/tr/docs/mcp-server).

## Dışa aktarma

### Bir tabloyu CSV olarak

Tablonun menüsünde **CSV indir** seçeneğini tıklayın. Bir tablo görünümünde aynı seçenek sekmenin menüsünde (sağ tık) bulunur: bu durumda dışa aktarma görünümden yapılır ve görünümün filtresini ve sıralamasını korur. Tabloyu okuyabilen tüm roller dışa aktarabilir.

### Tüm bir veritabanı

Çalışma alanının veritabanı listesinde, bir veritabanının menüsü **Dışa aktar** seçeneğini sunar. **Dışa aktar** penceresindeki **Kayıtları dahil et** seçeneği kapalıysa yalnızca yapı ve yapılandırma dışa aktarılır.

1. **Dışa aktarmayı başlat** düğmesine tıklayın. Bu işlem zaman alabilir; pencereyi kapatabilirsiniz.
2. Verilerin hazır olduğunu bir bildirim duyurur.
3. `.tbl` dosyasını **İndir**.

Tekrar içe aktarmak için `.tbl` dosyasını çalışma alanı sayfasına bırakın: "İçe aktarmak için .tbl dosyanızı bırakın". Başka bir veritabanına bağlantı veren alanlar, dışa aktarımda tek satırlık metne dönüştürülür.

Bir veritabanını dışa aktarmak veya çoğaltmak, veritabanını düzenleme hakkı gerektirir: Sahip ve Oluşturucu rolleri.

## Geri alma ve yineleme

Araç çubuğundaki **Geri al** ve **Yinele** düğmeleri (Ctrl veya Cmd + Z ve Ctrl veya Cmd + Shift + Z kısayolları) tablodaki son işlemlerinizi geri alır veya yeniden uygular. Kayıtları düzenleyebiliyorsanız etkindirler.

Kapsam: hücre girişi ve yapıştırma, kayıt oluşturma, silme ve yeniden sıralama, alan oluşturma, silme ve dönüştürme, görünüm oluşturma, düzenleme ve silme.

Geri alma geçmişi her kişiye ve her tabloya özeldir. Varsayılan olarak son 200 işlemi 24 saat boyunca saklar. Yeni bir işlem yineleme yığınını boşaltır.

**Kayıt geçmişi** farklı bir araçtır: kimin neyi değiştirdiğini, önceki ve sonraki değerleriyle birlikte izler. Bkz. [Görünümler, filtreler ve kartlar](/tr/docs/views-and-filters).

## Çöp kutusu

Bir tablo, veritabanı, kayıt, alan veya görünümü silmek onu hemen yok etmez: öğe bir çöp kutusuna gider ve oradan **Geri yükle** seçeneğiyle kurtarılabilir.

| Çöp kutusu | Nerede bulunur | İçerdikleri |
|---|---|---|
| **Tablo çöp kutusu** | Tablonun menüsü | Silinen görünümler, alanlar ve kayıtlar |
| **Veritabanı çöp kutusu** | Veritabanının kenar çubuğundaki **Çöp kutusu** simgesi | Silinen tablolar, uygulamalar, otomasyonlar, ajanlar ve tarayıcı becerileri |
| **Çalışma alanı çöp kutusu** | Çalışma alanının menüsü | Bu çalışma alanından silinen veritabanları |
| **Çalışma alanı çöp kutusu** | Çalışma alanı seçici | Üç sekmede silinen çalışma alanları, veritabanları ve tablolar |

**Tür**, **Silen** ve **Tarih** sütunları neyin, kim tarafından ve ne zaman silindiğini gösterir; tablo çöp kutusunda **Başlangıç** ve **Bitiş** filtreleri dönemi daraltır. **Çalışma alanı çöp kutusu** sayfası ayrıca **Kalıcı olarak sil** seçeneğini sunar.

- **Saklama süresi.** Varsayılan olarak 30 gün. Bu süre dolduktan sonra otomatik temizlik öğeyi kalıcı olarak siler. Veritabanı ve çalışma alanı çöp kutuları, örneğinizde uygulanan süreyi gösterir ("son N gün içinde silindi").
- **Boşalt** işlemi, onaydan sonra veritabanı çöp kutusunun içeriğini kalıcı olarak siler.
- **Kota.** Çöp kutusundaki veriler kayıt ve ek kullanımınıza yine de dahil edilir.
- **Geri yükleme sırası.** Üst öğesi kendisi çöp kutusunda olan bir öğe geri yüklenemez: önce veritabanını, sonra tablolarını geri yükleyin.
- **Alanlar.** Bir alanı geri yüklemek değerlerini geri getirir. İşlem çok sayıda kaydı etkileyebileceğinden bir ilerleme penceresi görünür.

Bir tablonun çöp kutusunu okumak ve geri yüklemek yalnızca Sahip, Oluşturucu ve Düzenleyici rollerine ayrılmıştır. Yorumcu ve Okuyucu rolleri erişemez. Bkz. [Yetkiler ve roller](/tr/docs/permissions).

## Tablo veya veritabanını çoğaltma

**Bir tablo.** Tablonun menüsünde **Çoğalt** seçeneği. Kopyayı adlandırırsınız ve **Kayıtları dahil et** seçeneğiyle satırların kopyalanıp kopyalanmayacağını seçersiniz (varsayılan olarak etkin). Tabloyu okuyabiliyor ve veritabanında kayıt oluşturabiliyor olmanız gerekir: Sahip ve Oluşturucu rolleri.

**Bir veritabanı.** Veritabanının menüsünde **Çoğalt**, ardından **Veritabanını çoğalt** seçeneği. Hedef çalışma alanını ve kayıtların çoğaltılıp çoğaltılmayacağını seçersiniz. Revizyon geçmişiniz ve iş birlikçileriniz çoğaltılmaz.

## Bir şablondan başlama

Şablon, hemen kullanıma hazır bir veritabanıdır. Bir şablon seçtikten sonra **Şablondan veritabanı oluştur** penceresi hedef çalışma alanını sorar ve **Kayıtları çoğalt** seçeneğini sunar: etkinse veritabanı şablonun örnek verilerini alır; kapalıysa yalnızca yapı kopyalanır. Seçilen çalışma alanında veritabanı oluşturabiliyor olmanız gerekir.

Kendi şablonlarınızı paylaşmak için bkz. [Paylaşım ve yayımlama](/tr/docs/sharing-publishing).
