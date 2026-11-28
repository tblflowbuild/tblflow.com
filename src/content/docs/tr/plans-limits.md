---
title: "Planlar ve sınırlar"
translationKey: "plans-limits"
description: "Dört plan (Ücretsiz, Essential, Team, Enterprise) ve sınırları: kişi, okuyucu, veritabanı, satır, depolama, aylık kota, yapay zekâ kredisi ve deneme."
section: "Kılavuzlar"
order: 18
---

Her TblFlow çalışma alanı bir plandadır. Plan; kişi, veritabanı ve satır sayısını, depolamayı, aylık yürütme kotalarını ve dahil edilen yapay zekâ kredilerini belirler. Bu sayfa bu sınırları ve biri aşıldığında ne olduğunu anlatır. Fiyatlar [Fiyatlandırma](/tr/pricing) sayfasındadır ve geçerli olan odur.

## Planınızı nerede görürsünüz

Çalışma alanı ayarlarını açın, ardından **Plan** sekmesine gidin. Bu sekme geçerli planı, dört planın sınırlarını ve çalışma alanınızın ücretsiz okuyucu sayacını gösterir. Yapay zekâ kredileri, yalnızca çalışma alanı sahibine açık olan **Yapay zekâ kullanımı** sekmesinde izlenir. Diğer çalışma alanı ayarları [Çalışma alanı ayarları](/tr/docs/space-settings) sayfasında anlatılır.

Planların adı **Ücretsiz**, **Essential**, **Team** ve **Enterprise**'dır.

## Kişiler ve okuyucular

Fiyat çalışma alanınınkidir, her kişinin ayrı değildir: her plan belirli sayıda kişi içerir.

| | Ücretsiz | Essential | Team | Enterprise |
|---|---|---|---|---|
| Dahil kişi | 2 | 5 | 15 | 50 |
| Ücretsiz okuyucu | 2 | 10 | 30 | sınırsız |
| Satın alınabilir ek kişi | hayır | 30'a kadar | 30'a kadar | 50'ye kadar |

Sahip, yaratıcı veya düzenleyici olan kişi **faturalandırılabilir** sayılır (bkz. [Yetkiler](/tr/docs/permissions)). Okuyucu ve yorumcu rolleri tek bir ücretsiz okuyucu sayacını paylaşır. Bu sayacın ötesinde her okuyucu, dahil kişilerden veya ek kişilerden birini kullanır; çalışma alanı doluysa ekleme reddedilir.

Ek kişi eklemek için, geçerli ödemeli planda **Ek kişiler** alanına sayıyı yazın ve **Kaydet**'e tıklayın. Bu ayar deneme sırasında kullanılamaz. **Aboneliğimi yönet** düğmesi ödeme portalını açar; ödeme yöntemi, faturalar ve fesih burada yönetilir. Bu düğme, çalışma alanında henüz ödeme yapılmayana kadar etkin olmaz.

## İçerik sınırları

| | Ücretsiz | Essential | Team | Enterprise |
|---|---|---|---|---|
| Çalışma alanı başına veritabanı | 1 | 5 | 30 | sınırsız |
| Tablo başına satır | 5 000 | 100 000 | 1 000 000 | sınırsız |
| Veritabanı depolaması | 1 GB | 100 GB | 500 GB | sınırsız |
| Medya kitaplığı, toplam | 200 MB | 20 GB | 100 GB | sınırsız |
| Medya kitaplığı, dosya başına | 25 MB | 200 MB | 500 MB | 500 MB |
| Kişi başına ücretsiz çalışma alanı | 1 | sınırsız | sınırsız | sınırsız |

Süreç haritası (bkz. [Süreç haritası](/tr/docs/process-map)) çalışma alanının veritabanları arasında sayılmaz. Ücretsiz planda tanı modundadır: tek bir süreç. Ücretli planlarda tam harita vardır.

Bazı işlevler de plana bağlıdır:

| | Ücretsiz | Essential | Team | Enterprise |
|---|---|---|---|---|
| Alan adı doğrulaması | hayır | evet | evet | evet |
| Denetim günlüğü | hayır | hayır | evet | evet |
| Gelişmiş yetkiler | hayır | hayır | evet | evet |
| Özel alan adı | hayır | hayır | evet | evet |

## Aylık kotalar

Bu kotalar çalıştırılanları ölçer. Her sayaç, her ayın başında (UTC takvimi) sıfırdan başlar.

| Aylık | Ücretsiz | Essential | Team | Enterprise |
|---|---|---|---|---|
| Ajan çalıştırmaları | 100 | 5 000 | 50 000 | sınırsız |
| Otomasyon çalıştırmaları | 500 | 25 000 | 250 000 | sınırsız |
| Otomasyon e-postaları | 50 | 2 000 | 20 000 | sınırsız |
| Bağlayıcı çağrıları | 1 000 | 50 000 | 500 000 | sınırsız |
| Bilgisayar kullanımı dakikaları | 30 | 600 | 3 000 | sınırsız |
| Bilgisayar kullanımı yeniden oynatmaları | 10 | 200 | 1 000 | sınırsız |
| Yapay zekâ jetonları | 2 000 000 | 100 000 000 | 1 000 000 000 | sınırsız |
| Yapay zekâ görselleri | 20 | 500 | 5 000 | sınırsız |
| Yapay zekâ sesleri | 20 | 500 | 5 000 | sınırsız |
| Yapay zekâ videoları | 0 | 20 | 200 | sınırsız |

Bağlayıcı çağrıları gerçek çağrılardır: önbellekten sunulan yanıtlar sayılmaz. Ücretsiz plan yapay zekâ videosu içermez (sınır 0). Otomasyonlar ve ajanlar [Otomasyonlar](/tr/docs/automations) ve [Yapay zekâ ajanları](/tr/docs/ai-agents) sayfalarında anlatılır.

**Plan** sekmesinde gösterilen not kabaca bir fikir verir: canlı harita için 15 dakikada bir eşitlenen bir kaynak, ayda yaklaşık 3 000 otomasyon çalıştırması ve bağlayıcı çağrılarını tüketir.

## Yapay zekâ kredileri

Yapay zekâ kredileri, TblFlow'un sağladığı yapay zekâyı öder. Kendi anahtarınızla yapılan çağrılar bunları tüketmez. Plana göre her ay şu kadar verilir:

| | Ücretsiz | Essential | Team | Enterprise |
|---|---|---|---|---|
| Aylık dahil yapay zekâ kredisi | 0 | 4 000 | 15 000 | 40 000 |

Daha fazlası için **Yapay zekâ kullanımı** sekmesi şunları sunar:

- **Kişi başına seçenek**: işaretlediğiniz her kişi için ayda 5 000 kredi;
- **Ortak havuz**: aylık 20 000 veya 100 000 kredilik bir havuz;
- **Üye başına aylık sınır**: bir üyenin ortak kredilerden ve yüklemelerden ne kadar harcayabileceğini sınırlar (boşsa: sınır yok);
- **Kredi yükleme**: 5 000, 20 000 veya 100 000 kredilik, tek seferlik ve süresiz yüklemeler. Ödeme onaylanır onaylanmaz krediler gelir.

Kişi başına seçenek ve ortak havuz, ücretli plan etkinleştirildikten sonra abone olunarak alınır. Fiyatlar [Fiyatlandırma](/tr/pricing) sayfasındadır. 1 000 kredi, model için 1 dolarlık gerçek maliyete karşılık gelir. Sekme ayrıca bakiyeyi, kişi ve kaynak bazındaki tüketimi ve hareket geçmişini gösterir.

## Karşılama kredisi

Deneme başlatılmadan oluşturulan yeni bir Ücretsiz çalışma alanı, bir kez 200 yapay zekâ kredisi alır. Bu kredinin son kullanma tarihi yoktur ve yükleme kredilerinin bakiyesine eklenir. Yalnızca TblFlow'un sağladığı yapay zekâ etkinse ve kredi sayımı uygulanıyorsa harcanır; aksi halde etkisiz kalır.

Koşullar:

- yalnızca bir kez, e-posta adresi başına verilir;
- kurumsal bir adres, alan adı başına yalnızca bir tane alır; genel e-posta sağlayıcıları yalnızca adres başına sınıra tabidir;
- deneme ve karşılama aynı adres sınırını paylaşır: bir kişi bunlardan yalnızca birini alır, ikisini birden değil;
- yalnızca tanıtımından sonra oluşturulan çalışma alanları için geçerlidir; mevcut bir çalışma alanı almaz.

Kendi anahtarınızla hiç tüketmezsiniz. Tükendiğinde kredi yükleyin ya da kendi anahtarınızı kullanın.

## Bir sınıra ulaşıldığında

| Sınır | Ne olur |
|---|---|
| Veritabanları | Oluşturma reddedilir: « Planınız en fazla N veritabanına izin veriyor. » |
| Tablo başına satır | Satır ekleme reddedilir: « Maksimum satır sınırı N aşıldı ». |
| Kişiler | **Kişi sınırına ulaşıldı** penceresi açılır. Sahip **Kişi ekle** (plan hâlâ satıyorsa) ya da **Yükselt** düğmesine tıklayabilir. Başka bir üye, yöneticiyi uyarması için davet edilir. |
| Depolama | Dosya yüklemeleri reddedilir: « Planınızın depolama sınırına ulaşıldı ». Hesap, kaydedilen son ölçüme dayanır. |
| Medya kitaplığı dosyası | Çok büyük bir dosya ya da aşılan bir toplam reddedilir. |
| Ücretsiz çalışma alanı | İkinci bir Ücretsiz çalışma alanı reddedilir: ücretsiz plan yalnızca bir çalışma alanına izin verir. |
| Aylık kota | Çalıştırma reddedilir: « … aylık kotanız tükendi. » Bir sonraki ay yeniden başlar. |
| Yapay zekâ kredileri | « Yapay zekâ kredileriniz tükendi. Devam etmek için bir yükleme satın alın. » |

Aylık bir kota için çalışma alanı sahibine yüzde 80'de, yüzde 90'da ve tükendiğinde e-posta gönderilir; kotası 0 olanlar hariçtir, çünkü bu « dahil değil » anlamına gelir. Uygulama **Sınır aşımı** penceresini gösterdiğinde, **Yükselt** düğmesi **Plan** sekmesini açar.

## Essential denemesi

Bir çalışma alanı 14 günlük bir Essential denemesiyle başlayabilir. Bir şerit **Essential denemesi: N gün kaldı** yazar ve **Essential'a geç** düğmesi bulunur. Deneme sırasında sınırlar Essential'dakilerdir; ancak dört tavan düşürülmüştür: ayda 10 000 000 yapay zekâ jetonu, 60 dakika bilgisayar kullanımı, 200 otomasyon e-postası ve 2 yapay zekâ videosu. Deneme, aylık dotasyon yerine bir kez verilen, son kullanma tarihi olmayan 1 000 kredilik bir yapay zekâ kredisi alır. Bu kredi karşılama kredisinin yerini alır: yalnızca adres ve kurumsal alan adı başına bir kez verilir.

Deneme bitiminde abonelik yoksa çalışma alanı Ücretsiz plana döner. Hiçbir veri silinmez: Ücretsiz planın sınırlarını aşan içerik, abone olunana kadar salt okunur kalır.

## Abone olma, plan değiştirme, faturalandırma

**Plan** sekmesinden **Aylık** ya da **Yıllık** seçin (ikisi de sunulduğunda), ardından **Abone ol**'a tıklayıp ödemeyi tamamlayın. Zaten abone olunmuş bir çalışma alanında düğme **Planı değiştir** olur. Onay penceresi, aboneliğin hemen değiştiğini ve aynı faturalandırma sıklığında kalacağını belirtir; orantılı tutar bir sonraki faturada görünür ve ek kişiler çalışma alanının kişi sayısına göre ayarlanır. Çalışma alanının kişi sayısı için çok küçük bir plana geçiş reddedilir: önce ekipten kişi çıkarın.

**Faturalar ve iade faturaları** bölümü belgelerinizi listeler; **PDF** veya **Factur-X** olarak indirilebilir. SIREN numaranız eksikse sekme bunu girmenizi ister: bu olmadan faturalar size iletilemez.

## Kurumsal plan teklif üzerine

Enterprise, teklif üzerine alınır. Plan kartındaki **Teklif iste** düğmesi herkese açık bir form açar: **İş e-postası**, **Şirket**, **Ekip büyüklüğü**, **İhtiyacınız** ve isteğe bağlı olarak **Bağlanacak araçlar** ile **İstenen yapay zekâ**. **Talebi gönder**'e tıklayın.

Ardından teklifin bağlantısını alırsınız. Sayfa teklif numarasını, taahhüdü (aylık taahhütsüz, yıllık, 2 yıl veya 3 yıl), dağıtımı (paylaşımlı sunucu, özel bulut veya yerinde), teklif satırlarını ve vergi hariç toplamı gösterir. Kabul etmek için şirket adına Genel Satış Koşulları'nı kabul kutusunu işaretleyin, ardından **Kabul ediyorum**'a tıklayın: kart veya SEPA doğrudan borçlandırma ile güvenli ödemeye yönlendirilirsiniz. Teklif kabul edilemiyorsa sayfa nedenini belirtir. Geçersiz bağlantı ya da daha yeni bir gönderimle değiştirilmiş bağlantı « Teklif bulunamadı » mesajını gösterir.
