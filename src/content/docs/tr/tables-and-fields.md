---
title: "Tablolar ve alanlar"
translationKey: "tables-and-fields"
description: "TblFlow'un 28 alan türü, tablolar arası bağlantılar, Arama ve Toplama, formüller, varsayılan değerler, doğrulama ve PostgreSQL'deki karşılığı."
section: "Kılavuzlar"
order: 2
---

Bir TblFlow tablosu gerçek bir PostgreSQL tablosudur. Bir alan gerçek bir sütundur. Arayüzden hiç çıkmasanız bile bu sayfayı yararlı kılan budur: burada seçtiğiniz şey veritabanında var olan şeydir.

## Alan aileleri

**Tür** menüsünde 28 alan türü ve buna ek olarak iki seçenek, **Arama** ve **Koşullu arama**, bulunur. Alan türleri planınıza bağlı değildir.

**Basit değerler**: Tek satırlık metin, Uzun metin, E-posta, Telefon, URL, Sayı, Tarih, Onay kutusu, Derecelendirme. Girdiğiniz değeri olduğu gibi saklarlar, başka bir şey yapmazlar. E-posta, Telefon ve URL alanları geçerli bir biçim ister.

**Süreler**: Süre, değeri 1:30, 1:30:00 veya 1sa 30dk biçiminde gösterir; İzlenen süre ise her satırda, kişi bazında harcanan zamanı kronometreyle ölçer.

**İzlenen süre.** Hücre toplam süreyi saat ve dakika olarak gösterir; alanın **Saniyeleri göster** seçeneği saniyeleri de ekler. Hücrede girilecek bir şey yoktur: zamanlayıcıya ulaşmak için hücreye çift tıklayın (ya da Enter tuşuna basın) veya kaydı açın. **Başlat** bir süre başlatır, **Durdur** o süreyi kapatır; çalışan süre sürerken toplam her saniye güncellenir ve alanın değeri durdurulduğunda kaydedilir. Süreler başlangıç saatiyle birlikte kişi bazında listelenir. Herkes yalnızca kendi sürelerini silebilir (**Bu süreyi sil**) ve toplam yeniden hesaplanır. Kişi, satır ve alan başına yalnızca bir çalışan süre olabilir. Zamanlayıcıyı başlatmak ve durdurmak kayıtları düzenleme iznini gerektirir; okuma rolünde toplam ve süreler düğme olmadan görünür kalır.

**Sınırlı değerler**: Tek seçim, Çoklu seçim, Kullanıcı. Seçenekler alan düzeyinde tanımlanır.

**İlişkiler**: Başka bir kayda bağlantı, Arama, Toplama, Koşullu arama, Koşullu toplama. Aşağıya bakın.

**Hesaplanan alanlar**: Formül (200'den fazla işlev), Otomatik numara, Satır kimliği, Oluşturulma zamanı, Son değişiklik, Oluşturan, Son değiştiren. Bunlar elle girilmez.

**Varlıklar**: Ek dosya, Düğme, Yapay zekâ alanı, Tuval. Yapay zekâ alanı hücre içeriğini diğer alanlardan üretir. Tuval alanı, belge kitaplığında her satır için bir belge oluşturur.

**Biçimler.** Para birimi ve Yüzde ayrı türler değildir: **Sayı** türünün biçimleridir. **Halka** ve **Çubuk** de aynı değeri göstermenin iki yoludur. Benzer şekilde **Tarih** ve **Tarih ve saat**, **Tarih** türünün iki ayarıdır.

Tablonun, her kaydı tanımlayan ana alanı yalnızca bazı türleri kabul eder: örneğin Ek dosya ve Başka bir kayda bağlantı türleri kabul edilmez.

## İki tabloyu bağlamak

**Başka bir kayda bağlantı** alanı iki tablo arasında bir ilişki kurar: bire bir, bire çok, çoktan bire veya çoka çok. Bağlantı tek yönlü ya da çift yönlü olabilir (**Bağlantı tablosunda karşılıklı bağlantı alanı oluştur**) ve başka bir veritabanını gösterebilir. İlişki kurulduktan sonra:

- bir **Arama**, bağlı tablodaki bir alanı getirir (kişinin satırında şirket adı gibi);
- bir **Toplama**, bağlı kayıtları **TOPLA** veya **SAY** gibi bir işlevle birleştirir (bir hesabın tüm anlaşmalarının toplamı, bir projenin görev sayısı).

**Koşullu arama** ve **Koşullu toplama** bir bağlantı gerektirmez: bir tablo seçersiniz, ardından bu tablonun kayıtlarını süzen koşulları belirlersiniz (durumu « Kazanıldı » olan anlaşmaların toplamı gibi).

Bu alanlar, kaynak veri değiştiğinde yeniden hesaplanır.

## Formüller

Formüller alan düzeyinde yazılır ve tüm satırlara uygulanır. İşlevler altı ailede toplanır: sayısal, metin, mantıksal, tarih ve saat, dizi, sistem. Bir formül Arama ve Toplama alanlarını okuyabilir, ancak doğrudan başka bir tablonun alanını okuyamaz.

```
IF(
  AND({Durum} = "Kazanıldı", {Tutar} > 10000),
  "Kilit hesap",
  "Standart"
)
```

Bir formül yan etki üretemez: başka bir tabloya yazamaz, ağ çağrısı yapamaz. Bunun için bir [otomasyon](/tr/docs/automations) gerekir.

## Varsayılan değer ve doğrulama

Bir alanın panelinde **Varsayılan değer**, yeni satırları önceden doldurur. Tek satırlık metin, Uzun metin, Sayı, Süre, Telefon, Onay kutusu, Kullanıcı, Tek seçim ve Çoklu seçim türlerinde bulunur. Tarih türünde bunun yerine **Geçerli tarihle otomatik doldur** seçeneği vardır.

**Alan değeri doğrulama kuralları** iki anahtardan oluşur:

- **Yalnızca benzersiz değerler**: Tek satırlık metin, Uzun metin, Sayı, Süre, Tarih, E-posta, Telefon ve URL türleri için;
- **Zorunlu**: aynı türler için ve ayrıca seçim alanları, Kullanıcı, Derecelendirme, İzlenen süre, Ek dosya ve Başka bir kayda bağlantı için. Bu kural alan oluşturulurken değil, mevcut bir alan düzenlenerek ayarlanır.

Hiçbiri Arama türündeki bir alan için geçerli değildir.

## Postgres'te ne görünür

Her veritabanı bir PostgreSQL şemasıdır, her tablo fiziksel bir tablodur, her alan bir sütundur. Veritabanının sahibi, veritabanının **Tasarım** sayfasından **Salt okunur Postgres erişimi** açabilir ve verileri `psql`, bir ORM veya bir BI aracıyla okuyabilir. Bu erişim yalnızca okuma hakkı verir: her yazma işlemi TblFlow üzerinden yapılır. Barındırılan sürümde bu erişim Enterprise planla sınırlıdır. Bkz. [API ve geliştiriciler](/tr/docs/api-developers).

## Bilmeniz gereken sınırlar

- Bir alanı yeniden adlandırmak yalnızca etiketini değiştirir; formüllerin kullandığı başvuru alanın dahili kimliğine dayandığı için hiçbir şey bozulmaz.
- Bir alanın türünü değiştirmek mevcut değerleri dönüştürür. Dönüştürme uzun sürerse ya da bağlantı alanlarını etkilerse, **Alan değişikliğini onayla** penceresi önce etkilenen alanları gösterir.
- Bir alanı silmek, ona bağlı alanları listeleyen bir pencere açar. Silinen alan tablonun çöp kutusuna gider; saklama süresi boyunca değerleriyle birlikte geri yüklenebilir. Bkz. [İçe aktarma, dışa aktarma ve çöp kutusu](/tr/docs/import-export-trash).
