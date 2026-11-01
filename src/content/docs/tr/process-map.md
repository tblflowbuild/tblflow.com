---
title: "Süreç haritası"
translationKey: "process-map"
description: "Bir alanın süreç haritasını oluşturun, süreçleri çizin, kopuklukları ve tahmini maliyetleri okuyun, Değiştir'i kullanın; ardından gözden geçirmeleri takip edin, gerçek maliyetleri ölçün ve yönetime sunun."
section: "Kılavuzlar"
order: 5
---

Süreç haritası, alanınızda kimin ne yaptığını ve hangi araçlarla yaptığını çizdiğiniz, ardından kopuklukları ve tahmini maliyetleri okuduğunuz bir sayfadır. Pro veya üzeri plan gerektirir.

## Haritayı açın veya oluşturun

Her alanda en fazla bir süreç haritası bulunur. Alanın sağ taraftaki rozetindeki simgeden, sol menüdeki satırdan veya her tabandaki bir kısayoldan ulaşırsınız.

İlk açılışta tek bir tıklama haritayı oluşturur. Keşfetmek için **örneklerle**, kendi süreçlerinizden başlamak için **boş** oluşturmayı seçersiniz. Harita alandaki sıradan bir tabana dayanır (süreçler, adımlar, araçlar, roller, sorumluluklar, veri nesneleri, veri aktarımları): bunlar filtreleyip dışa aktarabileceğiniz gerçek PostgreSQL tablolarıdır.

## Süreçleri anlatın

Tuvali kaydırmak için sürükleyin, yakınlaştırmak için tekerleği kullanın. Bir adımı seçmek için tıklayın; çift tıklama veya Boşluk tuşu kaydını açar. Enter sonraki adımı, Tab bir dalı oluşturur, F2 yeniden adlandırır.

Daha hızlı ilerlemek için bir belge içe aktarın, asistanın sorularını yanıtlayın veya otomasyon araçlarınızı bağlayın. Her adımı bir insan, bir otomasyon veya bir yapay zeka ajanı üstlenir.

## Bir okuma biçimi seçin

Bir seçici, haritayı değiştirmeden okuma biçimini değiştirir:

- **Kim ne yapıyor**: her adımın yürütücüsü ve sorumlusu.
- **Maliyetler**: insan maliyeti (rol başına ücret), araç maliyeti (abonelikler, API çağrıları, yapay zeka token'ları), olası tasarruf ve elde edilen kazanç. Bu rakamlar ölçüm değil, sizin girdiğiniz **tahminlerdir**. İnsan maliyetlerini yalnızca sahibi görebilir.
- **Kopukluklar**: araçlar arasında elle tekrar giriş, ana kaynağı olmayan veri, üretilmeden kullanılan nesne, sorumlusu veya süresi olmayan, yetim kalmış ya da devamı olmayan adım, başarısız olan otomasyon.
- **Veriler**: veri nesneleri ve bunları üreten ya da kullanan araçlar.

## Değiştir

Bir adımda veya araçta **Değiştir**, haritanın bağlamını yapay zekaya verir. Yapay zeka TblFlow ile bir değişiklik önerir: SaaS aracı bir taban ve arayüze, bağlayıcı bir otomasyona, insan adımı bir ajana, bir web sitesine veri girişi ise tarayıcıda yeniden oynatmaya (Computer Use) dönüşür.

Yapay zeka önerir, ardından **etkin olmayan** öğeler oluşturur. Bunları kendiniz gözden geçirip etkinleştirin: o zamana kadar hiçbir şey çalışmaz.

## Gözden geçirmeleri takip edin

Her sürecin bir **prosedür sayfası** (Canvas alanı), bir **sorumlusu**, son gözden geçirme tarihi, sonraki gözden geçirme tarihi ve bir **durumu** vardır. Dokümantasyon ve şema aynı yerde durur; böylece birlikte düzeltilirler.

## Güncelliğini yitirmiş prosedürler için uyarı alın

Uyarılar, canvas'ın **Diğer işlemler** menüsünden etkinleştirilir ve bir V2 tabanı gerektirir. Her pazartesi 07:00'de (sunucu saati) bir e-posta, sonraki gözden geçirmesi gecikmiş veya 14 gün içinde gelecek süreçleri listeler. Arşivlenmiş süreçler yok sayılır; gözden geçirilecek bir şey yoksa e-posta gönderilmez. Alıcı varsayılan olarak uyarıları etkinleştiren kişidir; alıcıları değiştirebilirsiniz.

## Aylık rapor alın

Aylık rapor her ayın 1'inde 08:00'de (sunucu saati) e-posta ile gönderilir ve o da bir V2 tabanı gerektirir. Maliyeti, olası kazancı, en büyük kazancı olan üç süreci ve geciken gözden geçirmelerin sayısını verir. Tutarlar yalnızca tabanın sahibi etkinleştirirse görünür.

## Adımları doğrulayın

Bir adım bir doğrulama durumu (**doğrulanacak**, **doğrulandı**, **gözden geçirilecek**), doğrulayan kişi, tarih ve bir yorum taşıyabilir. Canvas'ta adımın üzerindeki bir rozet durumu bir bakışta gösterir; ayrıntı fareyle üzerine gelince görünür.

## Tahmin ve gerçeği karşılaştırın

Her adıma **ölçümler** girin: dakika, hacim, hata oranı ve ölçümün kaynağı. **Tahmin ve gerçek** paneli tahmini ölçümle **yalnızca ölçülen adımlarda** karşılaştırır ve ölçülen adımların oranını gösterir; böylece toplama ne kadar güvenebileceğinizi bilirsiniz. Ayrıca süreç başına ve adım başına bir okuma sunar, canvas'taki adıma bir bağlantıyla birlikte. Maliyetler ekibinizin girdiği veriler olarak kalır: TblFlow bunları karşılaştırır, ölçmez.

## Önce ve sonrayı karşılaştırın

Bir değişiklikten önce **haritayı dondurun**: TblFlow tarihle adlandırılmış bir kopya oluşturur. Değişiklik yapıldıktan sonra **Önce / sonra** bölümünü açın ve kopya ile güncel harita arasında **ayın toplam maliyetini** ve **adım sayısını** karşılaştırın.

## İyileştirmeleri takip edin

**İyileştirme kaydı**, fikirlerinizi duruma göre; bağlantılı adımlar, uygulama maliyeti ve hedeflenen kazançla birlikte izler.

## Nerede para kaybediyorsunuz?

Salt okunur bu yol, süreçlerinizi, ardından adımlarını olası kazanca göre sıralar: toplam kazançtaki pay, maliyet, kopuklukların sayısı ve canvas'taki adıma doğrudan bir bağlantı. Tutarları okuma izni olmayanlar için sıralama kopukluk sayısına göre yapılır ve bu açıkça belirtilir.

## Yönetime sunun

**Yönetim görünümü**, PDF olarak yazdırılabilen salt okunur tek bir sayfaya sığar: maliyet, olası kazanç, en çok kayıp yaşanan beş süreç, duruma göre iyileştirmeler ve geciken gözden geçirmeler.

## Hazır bir süreçle başlayın

**Hazır süreç kitaplığı**, tek tek içe aktarabileceğiniz 13 süreç sunar ve bunları sektöre göre gruplandırır: müşteri faturalama, işe alım, şikâyetler, satın alma; ayrıca perakende, sanayi ve lojistik ile muhasebe ve hukuk serileri. Her süreç, zincirlenmiş adımları, örnek süreleri ve sıklıkları ile ücreti girilmemiş roller halinde gelir: maliyetleri kendiniz girin. Aynı süreci iki kez içe aktarmak bir kopya oluşturmaz. İçe aktarılan içerik şimdilik Fransızcadır.

## Modeli güncelleyin

Mevcut haritalar güncellenmiş modele **Modeli güncelle** bandı üzerinden geçer: TblFlow değişikliklerin bir önizlemesini gösterir ve herhangi bir şey uygulamadan önce onay ister.

## Paylaşın

Herkese açık, salt okunur bir bağlantı haritayı paylaşır. Bağlantı **varsayılan olarak kapalıdır**: isteğe bağlı olarak açın, artık gerekmediğinde kapatın. Ayrılmış hassas alanlar gizli kalır; tutarlar ve maliyet alanları okuma izni olmayan herkesten gizlenir. İsteyen kişi için okunamayan bir alan varsa `.tbl` dışa aktarma ve çoğaltma reddedilir.
