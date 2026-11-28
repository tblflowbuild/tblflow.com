---
title: "Süreç haritası"
translationKey: "process-map"
description: "Alanınızda süreç haritası kurun, süreçleri çizin, kopuklukları ve tahmini maliyetleri okuyun, Değiştir'i kullanın, gerçek maliyetle karşılaştırın."
section: "Kılavuzlar"
order: 5
---

Süreç haritası, alanınızda kimin neyi hangi araçlarla yaptığını çizdiğiniz, ardından kopuklukları ve tahmini maliyetleri okuduğunuz bir sayfadır. Bir süreç ücretsiz olarak teşhis edilebilir: tahmini maliyetleri görünür, ancak «Değiştir» düğmesi, aylık rapor, tahminin gerçekle karşılaştırılması ve süreç tipleri kitaplığı yoktur. Bu işlevler görünür kalır, ancak kilitlidir. Tam harita Essential planından itibaren kullanılabilir.

## Haritayı açın veya oluşturun

Her alanda en fazla bir süreç haritası bulunur. Ona alanın adının üstündeki açılır menüdeki **Süreç haritası** girişinden, sağ üstteki düğme grubundaki **Süreç haritası** simgesinden veya her veritabanında bulunan **Haritalama** kısayolundan ulaşırsınız.

Alanın henüz haritası yoksa **Bu alanın haritasını oluştur** düğmesi **Nasıl başlanır?** sorusunu açar:

- **Örneklerle**: modelin işleyişini görmek için örnek süreçler, adımlar ve geçişler.
- **Boş**: yalnızca araç kataloğu ve TblFlow yetenekleri korunur; kendi süreçlerinizi siz girersiniz.
- **Sektör örneği**: Hizmet ve danışmanlık, Ticaret ve e-ticaret, Sanayi ve lojistik veya Muhasebe ve hukuk için bir örnek seti. Oranlar kurgusaldır, kendi oranlarınızla değiştirilmelidir. Bu seçenek yalnızca alanın sahiplerine açıktır.

Süreç haritası alanın sıradan bir veritabanına dayanır (süreçler, adımlar, araçlar, roller, sorumluluklar, veri nesneleri, veri geçişleri). Bu tabloları, diğer herhangi bir veritabanındaki gibi filtreleyip dışa aktarabilirsiniz.

## Süreçleri anlatın

Canvas'ı sürükleyerek kaydırır, fare tekerleğiyle yakınlaştırırsınız. Bir adımı seçmek için tıklayın; çift tıklama veya Boşluk tuşu adım kartını açar. Enter sonraki adımı oluşturur, Tab bir dal oluşturur, F2 ise yeniden adlandırır. Seçili adımın üzerinde beliren araç çubuğunda **Aç**, **Test**, **Değiştir**, **Yeniden Adlandır**, **Çoğalt** ve **Sil** seçenekleri bulunur.

Boş bir harita dört başlangıç noktası sunar: **Belge içe aktar**, **Asistanın sorularını yanıtla**, **Araçlarımı bağla** veya **Kendim çizeyim**. İçe aktarma için bir PDF, bir Word belgesi, bir Excel tablosu, bir CSV, bir metin veya bir görsel (beyaz tahta fotoğrafı, şema) ekleyebilirsiniz. Yapay zekâ süreçleri, adımları, sorumluları, araçları ve veri geçişlerini hazırlar; siz kabul edene kadar hiçbir şey eklenmez (**Veritabanına ekle** veya **Hepsini ekle**).

Her adımın bir yürütücüsü vardır: **İnsan**, **Otomasyon**, **Yapay zekâ ajanı**, **Harici** veya **Ekipman**.

### Adım kartı

Adım kartı dört bloğu bir araya getirir:

- **Ayrıntılar**: durum, tür, yürütücü, araçlar ve roller.
- **Maliyet ve süre**: süre, sıklık, maliyet (yalnızca tutarları okuyabiliyorsanız görünür) ve iyileştirme önerisi.
- **Veriler**: adımın girdileri ve çıktıları.
- **Notlar**.

Üstteki oklar önceki veya sonraki adıma geçer, **Bağlantıyı kopyala** kartın adresini kopyalar, **Diğer işlemler** menüsündeki **Tüm sütunlar** ise tüm alanları gösterir. **Adımı sil** onay ister.

Sorumluluklar **Sorumluluklar** tablosunda girilir (adım, rol, tür). Tür **Sorumlu**, **Onaylayan**, **Danışılan** veya **Bilgilendirilen** olabilir.

### Araçlarınızı bağlayın

**Araçlarımı bağla**, **Diğer işlemler** menüsünde, haritayı Make, n8n, HubSpot veya Zapier'a bağlar. TblFlow yalnızca okur: bu araçlara hiçbir şey yazmaz. Her Make senaryosu bir süreç, her modül bir adım olur; n8n iş akışları için de aynısı geçerlidir. HubSpot veri nesnelerini besler. Zapier için bir webhook, zap'lerinizdeki hataları haritaya iletir. Harita her 15 dakikada bir güncellenir. **Bağlantıyı kes** eşitlemeleri durdurur; zaten haritalanmış adımlar kalır. Bu işlev Essential planından itibaren kullanılabilir.

### TblFlow varlığını güncelleyin

**TblFlow varlığını güncelle**, alanınızı yeniden okur, zaten var olan TblFlow kaynaklarını listeler ve bunların kapsadığı adım ve araçları önerir. Her öneriyi kabul edersiniz ya da **Tümünü kabul et** seçeneğini kullanırsınız. TblFlow, yalnızca bir TblFlow otomasyonuna bağlı veya bir TblFlow kaynağıyla aynı adı taşıyan bir adım için kapsama önerir. Kapsanan bir adım **TblFlow tarafından kapsanıyor** rozetini taşır.

### Sözcük dağarcığını sektörünüze uyarlayın

Canvas ayarlarındaki **Sözcük dağarcığı** bölümünde bir hazır ayar, «müşteri» ve «sipariş» sözcüklerini mesleğinize uyarlar:

| Hazır ayar | Müşteri | Sipariş |
|---|---|---|
| Hizmet ve danışmanlık | Müşteri | Görev |
| Ticaret ve e-ticaret | Müşteri | Sipariş |
| Sanayi ve lojistik | Müşteri | İş emri |
| Muhasebe ve hukuk | Müşteri | Dosya |
| Sağlık ve bakım | Hasta | Dosya |

Yalnızca görüntülenen sözcükler değişir: tabloların ve alanların adları değişmez.

## Bir okuma biçimi seçin

**Mercek** seçici, haritayı değiştirmeden okuma biçimini değiştirir. Altı mercek sunar:

- **Kim ne yapar**: her adımın yürütücüsü ve sorumlusu.
- **Maliyetler**: insan maliyeti (rol başına ücret), araç maliyeti (abonelikler, API çağrıları, yapay zekâ token'ları), olası tasarruflar ve elde edilen kazanç. Bu rakamlar sizin girdiğiniz **tahminlerdir**, ölçüm değildir. Tutarlar yalnızca veritabanının sahiplerine açıktır: bu haklara sahip değilseniz mercek görünmez.
- **Kopukluklar**: her adım kendi kopukluk sayısını gösterir ve yanında **Düzelt** düğmesi bulunur. Tanınan nedenler şunlardır: araçlar arasında elle yeniden giriş, ana kaynağı olmayan veri, sorumlusu olmayan adım, birden fazla sorumlusu olan adım, sonraki adımın bulunmaması, hiçbir adımın üretmediği ama okunan bir veri, başarısız olan bir otomasyon ve başarısız olan son TblFlow iş akışı çalıştırması.
- **Veriler**: veri nesneleri ve bunları üreten veya tüketen araçlar. Ana kaynak aracın etrafında bir taç işareti bulunur; henüz değiştirilmemiş her araçta **Değiştir** düğmesi yer alır.
- **Bağlayıcılar**: araçlar arasındaki veri geçişleri; modları (API, TblFlow bağlayıcısı, dosya veya dışa aktarma, elle yeniden giriş) ve sıklıkları ile birlikte. **Geçiş anlatısı** bunları tek tek oynatır. Elle yeniden giriş için **Şununla simüle et** hiçbir şey yazmadan bir bağlayıcının etkisini gösterir; **Uygula** ise onaydan sonra geçişe yazar.
- **Özet**: tüm haritanın genel görünümü (aşağıya bakın).

Canvas'ın üst şeridi maliyeti, kopuklukları, olası tasarrufları, yürütücülerin dağılımını, elde edilen kazancı ve TblFlow'un kapsadığı payı hatırlatır. Ayrıca sorumlusu olmayan adımları ve süresi olmayan adımları işaretler: bunlar eksik girişlerdir, kopukluk değildir. **Tamamla** bir sonraki doldurulması gereken adıma götürür. **Sun** ise tutarları ve Maliyetler merceğini gizler.

## Özet'i okuyun

**Özet** merceği tüm haritayı toplar. Şu göstergeleri içerir: ay ve yıl başına maliyet, olası tasarruflar, elde edilen kazanç, TblFlow kapsamı, kurtarılan saatler, otomasyon oranı, araç maliyeti, yatırım getirisi, kopukluklar, sorumlusu olmayan adımlar ve tamamlanma oranı. Ayrıca yürütücülerin dağılımını, alan bazında bir tabloyu ve üç sıralamayı gösterir: en pahalı süreçler, en yüksek tasarruf potansiyeli olan süreçler ve en çok kopukluğu olan süreçler. **Alan** ve **Durum** filtreleri görünümü daraltır. Verisi olmayan bir gösterge haritayı tamamlamaya davet eder: asla yerine sıfır göstermez.

Tutarlar yalnızca veritabanının sahiplerine açıktır. Yatırım getirisi, **Harita yapılandırması** içindeki **YG** bölümünde girilen **TblFlow aylık maliyeti** üzerinden hesaplanır.

**Gelişim** bloğu mevcut durumu bir anlık görüntüyle karşılaştırır: her ayın 1'inde saat 08:00'de (sunucu saati) aylık bir anlık görüntü alınır ve sahipler istedikleri zaman **Mevcut durumu dondur** ile bir tane alabilir. Karşılaştırma filtreler yok sayılarak tüm haritayı kapsar.

**Dışa aktar** menüsünde **PDF olarak dışa aktar** (görünümün yazdırılması) ve **CSV olarak dışa aktar** seçenekleri bulunur. CSV her süreç için bir satır içerir: süreç, alan, durum, adım sayısı, kopukluk, tamamlanma ve TblFlow kapsamı; ayrıca bir sahip için aylık maliyet, olası tasarruflar ve elde edilen kazanç. Excel'in Fransızca ayarlarına göre kodlanmıştır (UTF-8, noktalı virgül ayracı) ve filtreler yok sayılarak tüm haritayı kapsar. En fazla 5.000 süreçle sınırlıdır; bu sınırın üzerinde TblFlow bunu bildirir.

## Haritayı maliyetlendirin

Haritanın **Maliyetlendirme** düğmesi (üst şerit), maliyetleri tahmin etmek için gereken her şeyi bir araya getirir: **Tamamlanacaklar**, **Saatlik ücretler**, **Araçlar** ve **Fırsatlar**. Hiçbir değer hazır gelmez: her şey sizden gelir ve siz onaylamadan hiçbir şey yazılmaz.

- **Saatlik ücretler**: doğrudan bir saatlik ücret girebilir ya da TblFlow'un yük katsayısı ve yıllık verimli saat sayısıyla çevirdiği bir brüt yıllık maaş girebilirsiniz. Ayrıca bir faturalandırılabilir günlük ücret (TJM) da önerebilirsiniz.
- **Araçlar**: lisans başına aylık fiyat (abonelik), çağrı başına maliyet (API) veya bir milyon token başına fiyat (yapay zekâ modeli). Araçlar SaaS kataloğuna yaklaşır.
- **Fırsatlar**: TblFlow'un tamamen veya kısmen değiştirebileceği şeyler, bir otomasyonun veya ajanın devralabileceği işler ve her adımdaki iyileştirme kaldıracı (otomatikleştirme, adımı kaldırma, hataları azaltma, yeniden pazarlık).

Ücretler ve fiyatlar yalnızca sahipler tarafından okunabilir. **Harita yapılandırması** (araç çubuğundaki **Harita yapılandırması** simgesi) maliyetleri, okunan alanları, sözcük dağarcığını, sıklıkları, değer listelerini, eşikleri ve YG'yi bir araya getirir. Yalnızca alan sahipleri bunu değiştirebilir. Eşikler, gün cinsinden gözden geçirme süresini ve bir adım kartının asgari tamamlanma oranını belirler.

## Değiştir

Bir adımda veya araçta **Değiştir**, yapay zekâya haritanın bağlamını verir. Yapay zekâ bir TblFlow ile değiştirme önerir; siz **Veritabanı + arayüz**, **Otomasyon**, **Yapay zekâ ajanı** ve **Web görevi (RPA)** seçeneklerinden birini seçersiniz; önerilen seçenek işaretlenir. Bir SaaS aracı bir veritabanı ve arayüze, bir bağlayıcı bir otomasyona, bir insan adımı bir ajana, bir web sitesine veri girişi ise tarayıcıda yeniden oynatmaya (Computer Use) dönüşür.

Siz onaylamadan hiçbir şey oluşturulmaz. Bir otomasyon **etkin olmadan** oluşturulur; bir ajanın zamanlaması da öyledir: bunları gözden geçirin ve kendiniz etkinleştirin, o zamana kadar hiçbir şey çalışmaz. Bir SaaS aracı için yeni bir veritabanı seçersiniz (TblFlow önce bölümlemeyi önerir, siz bunu gözden geçirirsiniz) ya da mevcut bir veritabanı (oluşturma, sihirbazda adım adım ilerler ve her adımı siz onaylarsınız). Harita değiştirme durumunu gösterir: **Değiştirme önerildi**, **Değiştirildi · etkin olmadan oluşturuldu**, kaynak etkinleştirildikten sonra **TblFlow ile değiştirildi**. Yalnızca son durum elde edilen kazanca dahil edilir.

### Değiştirilebilirliği değerlendirin

**Yapay zekâ ile değiştirilebilirlik**, haritadaki her adımı ve her aracı sınıflandırır: tablo, arayüz, otomasyon, yapay zekâ ajanı, tarayıcı (RPA) veya değiştirilemez. Bir yapay zekâ modeli her sınıflandırmayı güven düzeyi ve tahmini kazançla açıklar; emin olunmayan öneriler **Onaylanacak** olarak işaretlenir. **Kabul et** önerilen modla **Değiştir** penceresini açar, **Yoksay** ise öneriyi eler. Bu pencerenin **Oluştur** düğmesine basılana kadar hiçbir şey oluşturulmaz. Analiz en fazla 250 öğeyi kapsar.

### Bir adımı test edin

**Test**, adıma bağlı otomasyonun kuru bir denemesini başlatır: hiçbir şey gönderilmez veya yazılmaz, pencere otomasyonun her adımının durumunu gösterir. Test yalnızca adımın «Otomasyon kaynağı» alanı bir TblFlow otomasyonunu gösteriyorsa mümkündür; aksi halde düğme etkin olmaz ve nedenini belirtir.

## Gözden geçirmeleri takip edin

Her süreç bir **sorumlu**, bir **son gözden geçirme** tarihi, bir **sonraki gözden geçirme** tarihi, bir **durum** (modelde Taslak, İncelemede, Onaylandı veya Arşivlendi), bir «Onaylayan» alanı ve bir sürüm bilgisi taşır. Her adım bir **prosedür kartı** taşır: Canvas türünde bir belge (aşağıya bakın). Dokümantasyon ve şema aynı yerde durur; böylece birlikte düzeltilirler.

## Güncelliğini yitirmiş prosedürler hakkında uyarı alın

Uyarılar, canvas'ın **Diğer işlemler** menüsündeki **Güncellik uyarıları** girişiyle etkinleştirilir ve bir V2 veritabanı gerektirir. Uyarı bir veritabanı otomasyonu olduğu için veritabanının otomasyonlarını değiştirme hakkına sahip olmanız gerekir. Her pazartesi 07:00'de (sunucu saati) bir e-posta, sonraki gözden geçirme tarihi geçmiş veya 14 gün içinde gelecek olan süreçleri listeler. Arşivlenmiş süreçler yok sayılır ve gözden geçirilecek bir şey yoksa e-posta gönderilmez. Her gönderimde en fazla 100 süreç incelenir. Varsayılan alıcı, uyarıları etkinleştiren kişidir; alıcıları değiştirebilirsiniz (en fazla 10 adet). Yalnızca alan üyelerinin alan adına sahip adresler kabul edilir.

## Aylık rapor alın

Aylık rapor her ayın 1'inde saat 08:00'de (sunucu saati) e-posta ile gönderilir; bu da bir V2 veritabanı ve otomasyonları değiştirme hakkı gerektirir. **Diğer işlemler** menüsündeki **Aylık rapor** girişiyle etkinleştirilir. Maliyeti, olası kazancı, en büyük kazancı olan en fazla üç süreci ve geciken gözden geçirmelerin sayısını verir. Tutarlar yalnızca raporu etkinleştiren kişi veritabanının sahibiyse yer alır. Aksi halde rapor hiçbir tutar içermez ve süreçleri kopukluk sayısına göre sıralar. Tutar içeren bir raporu yalnızca bir sahip etkinleştirebilir ya da alıcılarını değiştirebilir; diğerleri yalnızca kapatabilir. Alan ücretsiz teşhise dönerse rapor yapılandırılmış kalır ancak askıya alınır: Essential planı yeniden etkinleşmedikçe hiçbir e-posta gönderilmez.

## Adımları doğrulayın

Bir adım bir doğrulama durumu, onu doğrulayan kişiyi, tarihi ve bir yorumu taşıyabilir. Modelin durumları **Doğrulanacak**, **Doğrulandı** ve **Gözden geçirilecek** şeklindedir; rozet, veritabanınızın durumu nasıl adlandırdıysa onu gösterir. Canvas'taki adım rozeti durumu bir bakışta gösterir; ayrıntı fareyle üzerine gelindiğinde görünür. Bu bilgiler adım tablosunda girilir («Doğrulama durumu», «Doğrulayan», «Doğrulama tarihi» ve «Doğrulama yorumu» alanları).

## Tahmin ile gerçeği karşılaştırın

**Tahmin ve gerçek** paneli, tahmini ölçülen değerle karşılaştırır; **yalnızca ölçülen adımlar** üzerinden yapar ve ölçülen adımların oranını gösterir, böylece toplama ne kadar güvenebileceğinizi bilirsiniz. Pozitif bir fark, gerçek maliyetin beklenenden yüksek olduğu anlamına gelir. **Süreç bazında** ve **Adım bazında** okuma sunar; adım bazında okumada, canvas'taki adıma bir bağlantı bulunur. Tutarları okuma hakkınız yoksa yalnızca ölçülen adımların oranı ve ölçümlerin kaynağı görünür.

Adım bazındaki okumada **Ölçümleri gir** bir düzenleyici açar: ölçülen dakika, ay başına ölçülen hacim, ölçülen hata oranı (0 ile %100 arasında) ve ölçümün kaynağı. Tahmini korumak için bir alanı boş bırakın. Ölçülen maliyet kendiliğinden yeniden hesaplanır. Maliyetler ekibinizin girdiği veriler olarak kalır: TblFlow bunları karşılaştırır, ölçmez.

Bir otomasyon tarafından yürütülen bir adımda **Otomasyondan içe aktar** düğmesi, son 30 günün çalıştırmalarından ölçümleri doldurur: dakika cinsinden ortalama süre, ay başına hacim ve başarısızlık oranı. Bir önizleme öncesini ve sonrasını gösterir; siz onaylamadan hiçbir şey yazılmaz. İçe aktarma, elle girilen ölçümlerin yerine geçer. İnsan, harici veya yapay zekâ ajanı tarafından yürütülen adımlar için önerilmez. Otomasyonun 30 gün içinde hiç çalıştırması yoksa bir ileti bunu belirtir ve hiçbir şey içe aktarılmaz.

## Önce ve sonrayı karşılaştırın

Bir değişiklikten önce **haritayı dondurun** (**Diğer işlemler** menüsündeki **Önce / sonra** girişi): TblFlow, verdiğiniz ad ve tarihle adlandırılmış bir kopya oluşturur. Değişiklik yapıldıktan sonra kopya ile güncel harita arasında **ayın toplam maliyetini** ve **adım sayısını** karşılaştırın. Haritayı dondurmak Essential planı veya üstünü gerektirir; kopya tüm alanları devraldığı için, maliyet alanları diğerlerine kapalıysa yalnızca veritabanının bir sahibi bunu yapabilir. Karşılaştırmadaki tutarlar yalnızca sahiplere açıktır.

## İyileştirmeleri takip edin

**İyileştirme kaydı**, fikirlerinizi durumlarına göre takip eder: **Fikir**, **Planlandı**, **Devam ediyor**, **Gerçekleşti**, **Vazgeçildi**. Bağlantılı adımlar, uygulama maliyeti, hedeflenen kazanç ve bir geri dönüş oranı (12 aylık kazanç, uygulama maliyetine bölünür) ile birlikte gösterilir. Salt okunurdur: satırları **İyileştirmeler** tablosunda ekleyin veya değiştirin.

## Parayı nerede kaybediyorsunuz?

Bu salt okunur yol, süreçlerinizi ve ardından adımlarınızı olası kazanca göre sıralar: toplam kazançtaki pay, maliyet, kopukluklar ve canvas'taki adıma doğrudan bağlantı. Tutarları okuma hakkı olmayan kişiler için sıralama kopukluk sayısına göre yapılır ve bu açıkça belirtilir. Yalnızca ilk 1.000 adım okunur.

## Yönetime sunun

**Yönetim görünümü** tek bir okunabilir sayfaya sığar; **Yazdır / PDF** ile PDF olarak yazdırılabilir: ay başına maliyet ve olası kazanç, etkin süreç sayısı, en çok kayıp yaşanan beş süreç, duruma göre iyileştirmeler ve geciken gözden geçirmeler. Tutarlar yalnızca veritabanının sahipleri için yer alır.

## Hazır bir süreçle başlayın

**Hazır süreç kitaplığı**, tek tek içe aktarabileceğiniz 13 süreç sunar; sektöre göre gruplanmıştır: müşteri faturalandırma, işe alım, şikâyetler, satın alma; ayrıca ticaret, sanayi ve lojistik ile muhasebe ve hukuk için seriler. Her süreç, zincirlenmiş adımları, örnek süre ve sıklıklarını ve ücretsiz roller ile birlikte gelir: kendi maliyetlerinizi girin. İçe aktarma yalnızca satır ekler: zaten bulunan bir rol mevcut ücretiyle yeniden kullanılır, hiçbir araç oluşturulmaz ve aynı adlı bir süreç ikinci kez içe aktarılmaz. İçe aktarılan içerik şimdilik Fransızcadır.

## Modeli güncelleyin

Mevcut haritalar, güncel modele **Modeli güncelle** bandı üzerinden geçer; bu bant yalnızca sahiplere açıktır. **Değişiklikleri gör** bir önizleme gösterir, ardından **Güncellemeyi onayla** değişiklikleri uygular. Hiçbir şey silinmez ve yeni alanlar boş kaldığı sürece toplamlarınız değişmez. Güncelleme durursa, durduğu yerden devam etmek için yeniden başlatın.

## Dışa aktarın ve paylaşın

Araç çubuğundaki **Dışa aktar** düğmesi **Görsel (PNG)**, **PDF (yazdırma)** ve **Tüm verileri dışa aktar** seçeneklerini sunar. Sonuncusu yalnızca veritabanını düzenleyebilenlere açıktır ve indirme bağlantısını içeren bir bildirimle size haber verir.

**Paylaş** üzerinden haritayı salt okunur, herkese açık bir bağlantıyla paylaşabilirsiniz. Bağlantı **varsayılan olarak kapalıdır**: istediğinizde açın, artık ihtiyaç duymadığınızda kapatın; kapatmak bağlantıyı hemen keser. Paylaşımı yalnızca veritabanını düzenleyebilen kişiler yönetebilir. Maliyetler, ücretler ve kazançlar hiçbir zaman paylaşılmaz ve bağlantı yazarları asla göstermez. Ayrılmış hassas alanlar gizli kalır; tutarlar ve maliyet alanları, okuma hakkı olmayan kişilerden gizlenir. Dışa aktarma `.tbl` ve çoğaltma, isteyen kişi için okunamayan bir alan varsa reddedilir.

## Bir alanın neye bağlı olduğunu bilin

Bir alanı silmeden veya değiştirmeden önce ona neyin bağlı olduğunu listeleyebilirsiniz. Bunu üç yerde görürsünüz:

- Bir alanın silinmesi onayı, etkilenen öğeleri listeler: görünümler ve otomasyonlar dahil.
- Bir yapay zekâ ajanı bir alanı silmeyi önerdiğinde, öneri **Etkilenecek olanlar** bölümünü gösterir: bağlı veya hesaplanan alanlar, görünümler, otomasyonlar ve arayüzler; ayrıca çöp kutusundan geri yükleme olanağı. Bu liste hesaplanamazsa silme reddedilir.
- `GET /api/table/{tableId}/field/{fieldId}/impact` API'si (alanın okuma hakkı) bağlı alanları, görünümleri ve otomasyonları bir ciddiyet düzeyiyle döndürür: nesne **bozulur**, **kötüleşir** veya **kontrol edilmeli** olarak işaretlenir. Liste 200 öğeyle sınırlıdır; okuyamadığınız veritabanlarındaki bağımlılıklar, bunları adlandırmadan bir göstergeyle belirtilir.

## Bir satırın belgesini oluşturun (Canvas alanı)

Bir Canvas alanı, her satır için bir belge taşır; tıpkı bir adımın **Prosedür kartı** gibi. Tabloda hücreye çift tıkladığınızda **Satır belgesi** paneli açılır; boş bir hücreyi açmak belgeyi oluşturur. Alan ayarları başlangıç içeriğini seçer: **Şablon** (kitaplıktaki bir belgenin kopyası; alan adları satırın değerleriyle değiştirilir), **Yapay zekâ** (belge satırın alanlarından yazılır), **Yapay zekâ sayfası** (bir potansiyel müşteri kartı veya bir sunum) veya **Boş**. **Satır eklenince oluştur** seçeneği belgeyi otomatik oluşturur; içe aktarmalar hiçbir zaman belge oluşturmaz.

Panelde başlık ve içerik kendiliğinden kaydedilir. **Yeniden üret** belgeyi yeniden yazar; belge elle değiştirilmişse TblFlow değiştirmeden önce **Değişikliklerinizin üzerine yazılsın mı?** diye sorar. **Sayfa** oluşturulmuş görünümü gösterir, **Düzenle** düzenleyiciye döner ve **Kitaplıkta aç** alanın belge kitaplığına götürür. Belge başka bir yerde değiştirilmişse bir ileti bunu belirtir ve **Yeniden yükle** kayıtlı sürümü geri getirir. **Belgeleri oluştur** belgesi olmayan satırların belgelerini tek seferde oluşturur; her başlatmada en fazla 100 adet. Yapay zekâ tarafından yazılan her belge yapay zekâ kullanımına sayılır.

## Alanın organizasyon şeması

Alan ayarlarında **Organizasyon şeması** sekmesi bulunur; bu sayfa üç sekme sunar: **Organizasyon şeması** (her kişinin profilinde girilen yöneticiye göre hesaplanan «kim kime bağlı» ağacı), **Departmanlar** (ağaç yapısı ve üyeler) ve **Değiştirilecek**. Yöneticisi olmayan bir çalışan kök olarak görünür. Bir departman yalnızca boşsa silinebilir.

**İçe aktar**, organizasyon şemasını bir CSV dosyasından yükler: önce **Önizleme**'ye tıklayın; siz onaylayana kadar hiçbir şey yazılmaz ve aynı dosyayı yeniden içe aktarmak hiçbir yinelenen kayıt oluşturmaz. **Şablonu indir** beklenen sütunları verir. **Dışa aktar** organizasyon şemasını CSV olarak indirir.
