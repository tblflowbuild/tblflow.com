---
title: "Görünümler, filtreler ve kayıt kartları"
translationKey: "views-and-filters"
description: "Altı görünüm (ızgara, galeri, Kanban, takvim, Gantt, form), filtreler, sıralamalar, kişisel mod, kayıt kartı, yorumlar, whiteboard'lar ve grafikler."
section: "Kılavuzlar"
order: 10
---

Bir görünüm, bir tabloyu okumanın bir yoludur: hiçbir veriyi kopyalamaz. Aynı tablonun istediğiniz kadar görünümü olabilir; her birinin kendi filtreleri, sıralamaları ve görünen alanları vardır.

## Görünüm türleri

Görünüm sekmelerinin sağındaki **+** düğmesi altı tür sunar. Yeni bir görünüm, türünün adını alır (« Kanban », « Takvim »…); bu ad zaten varsa sonuna bir numara eklenir.

| Tür | Gösterdiği | Kendine özgü ayarlar |
|---|---|---|
| **Izgara görünümü** | Kayıtlar satır, alanlar sütun olarak. | Satır yüksekliği, gizli alanlar, koşullu biçimlendirme. |
| **Galeri görünümü** | Her kayıt için bir kart. | Kapak alanı, **Kartları özelleştir**. |
| **Kanban görünümü** | Sütunlar halinde yığılmış kartlar. | **Yığın alanını seçin**, **Boş yığını gizle**, **Kartları özelleştir**. |
| **Takvim görünümü** | Kayıtlar tarihlerine yerleştirilmiş. | **Takvim yapılandırması**: başlangıç tarihi, bitiş tarihi, başlık ve renk alanları. |
| **Gantt görünümü** | Bir zaman ölçeği üzerinde çubuklar. | **Ayarlar**: başlangıç, bitiş, başlık, bağımlılık ve renk alanları. |
| **Form görünümü** | Tablo üzerinde bir veri girişi formu. | Alanlar, sayfalar, görüntüleme koşulları, tema rengi. |

Birkaç ayrıntı:

- **Takvim ve Gantt** tarih alanları gerektirir. Gantt en az bir tarih veya tarih/saat alanı ister. Çubuklar fareyle taşınır ve ölçek **Gün** ile **Hafta**, **Ay** veya **Çeyrek** arasında değiştirilebilir.
- **Gantt**: bağımlılık alanı genellikle bir **Başka bir kayda bağlantı** alanıdır. **Hafta sonları** ve **Kritik yol** seçenekleri araç çubuğundan ayarlanır. Döngüsel bir bağımlılık işaretlenir; bu durumda kritik yol eksik kalabilir.
- **Takvim ve Gantt**, tarihi olmayan kayıtları listeleyen bir **Planlanacak** paneli gösterir. Birini tarihlerini vermek için görünüme sürükleyin.
- **Form**: gösterilecek alanları seçersiniz, sayfa sonları eklersiniz ve bir alanı yalnızca bir koşul sağlandığında gösterebilirsiniz. **Zorunlu** olarak tanımlanmış bir alan formdan kaldırılamaz. Bir formu yayımlamak için bkz. [Paylaşım ve yayımlama](/tr/docs/sharing-publishing).
- **Yapay zekâ ile oluştur**: aynı **+** menüsünde istediğiniz görünümü tarif edersiniz; TblFlow türü, filtreleri, sıralamaları ve sütunlarıyla birlikte bir görünüm oluşturur.

## Görünümleri yönetme

Bir görünüm sekmesine sağ tıklamak o görünümün menüsünü açar:

| Eylem | Gerekli yetki |
|---|---|
| **Yeniden adlandır**, **Kilitle** / **Kilidi aç**, **Paylaş** | Görünümleri düzenleme |
| **Çoğalt** | Görünüm oluşturma |
| **Sil** | Görünüm silme |
| **Csv indir** (ızgara görünümleri) | Tabloyu dışa aktarma |
| **Favorilere ekle** / **Favorilerden çıkar** | Özel bir yetki gerekmez |

Sahip, Oluşturan ve Düzenleyici rolleri görünüm oluşturabilir, düzenleyebilir ve silebilir. Yorumcu ve Okuyucu rolleri bunu yapamaz. Bkz. [Yetkiler ve roller](/tr/docs/permissions).

**Kilitli** bir görünümde kilit simgesi görünür. Görüntüsünü değiştirmek için kişisel moda geçmeniz gerekir (aşağıya bakın).

## Filtreleme, sıralama, gruplama, gizleme

Bu ayarlar görünümün araç çubuğundadır.

**Filtrele.** **Koşul ekle** bir satır ekler: bir alan, bir işleç ve bir değer. **Koşul grubu ekle** koşulları iç içe yerleştirir; en fazla üç düzey. Kayıtların **tüm koşulları karşılaması** mı yoksa **bir koşulu karşılaması** mı gerektiğini seçersiniz.

- İşleçler alan türüne bağlıdır: « eşittir », « içerir », « boştur », « şundan büyüktür », « şunlardan biridir »…
- Bir kullanıcı alanında **Ben (geçerli kullanıcı)** değeri, görünümü açan kişiyi izler.
- Bir tarihte göreli bir değerle (bugün, dün, geçen hafta, bu ay, geçmiş veya gelecek gün sayısı) ya da kesin bir tarihle filtreleyebilirsiniz.
- Geçersiz hale gelen bir koşul, örneğin bir liste seçeneği silindiği için, yok sayılır ve bir uyarıyla işaretlenir.

**Sırala.** **Sırala** birden fazla alan kabul eder; **Başka bir sıralama ekle** bir tane daha ekler. **Kayıtları otomatik sırala** seçeneği sıralamayı güncel tutar. Bu açıkken satırların elle sürüklenerek yeniden sıralanması kapanır.

**Grupla.** **Grupla** satırları bir alana göre gruplar; **Alt grup ekle** bir düzey daha ekler.

**Gizli alanlar.** Bu liste, alanları silmeden görünümde gizler. **Tümünü göster** ve **Tümünü gizle** tek hamlede uygulanır. Ana alan gizlenemez ve silinemez.

**Satır yüksekliği.** Dört düzey: kısa, orta, yüksek, çok yüksek.

**Koşullu biçimlendirme.** Kurallar bir hücreyi veya tüm satırı renklendirir (metin veya arka plan). **Tüm görünümlere uygula** seçeneği kuralı tablonun diğer görünümlerine de genişletir.

**Hızlı anahtarlar.** Izgarada **Bana atanmış** ve **Bitenleri gizle**, görünümün filtresine, hiçbir şey yazmadan eklenir. Yalnızca tabloda bir kullanıcı alanı veya « bitti » alanı (onay kutusu ya da bir seçeneğinin bitti anlamına geldiği liste) varsa görünürler.

## Ortak mod ve kişisel mod

Varsayılan olarak bir görünüm **ortaktır**: filtreler, sıralamalar, gruplar, gizli alanlar ve satır yüksekliği görünümün içinde kaydedilir. Biri bunları değiştirdiğinde, o görünümü açan tüm üyeler değişikliği görür.

Araç çubuğundaki **Kişisel** düğmesi bunu değiştirir: yapılandırma yalnızca size uygulanır. Tarayıcınızda saklanır, sunucuda değil. Kişisel moddan çıkarken bunu atmayı (**Çıkışı onayla**) ya da herkese uygulamayı (**Çık ve eşitle**) seçersiniz. İkinci seçenek görünümleri düzenleme yetkisi gerektirir.

Kilitli bir görünümün görüntüsünü ayarlamanın tek yolu da budur.

## Kayıt kartı

Her satır bir karta açılır: kaydın tüm alanlarını gösteren bir sayfa. **Konum** menüsü kartı ortaya, bir yan panele veya tam ekrana yerleştirir; **Önceki kayıt** ve **Sonraki kayıt** düğmeleri satırlar arasında geçiş yapar.

Kartın üst kısmında, doğrudan bağlantıyı paylaşmak için **Kayıt URL'sini kopyala** düğmesi ve geçmişi gösteren bir düğme bulunur. Menüsünden **Tabloda göster**, **Yazdır / PDF**, **Kaydı çoğalt** ve **Kaydı sil** seçeneklerine ulaşırsınız.

Görünümde gizlenmiş alanlara **N gizli alanı göster** ile erişilebilir.

**Sayfa düzeni.** **Sayfa düzeni** menüsü alanların sırasını, genişliklerini (yarım veya tam genişlik) ve daraltılabilir bölümleri ayarlar. Adlandırılmış birden fazla sayfa düzeni oluşturabilirsiniz. Yapılan değişiklikler görünümün tüm kullanıcıları için geçerlidir.

**Geçmiş.** Geçmiş, değişiklikleri **Önce** ve **Sonra** değerleriyle listeler. Zaman aralığına, alana ve kullanıcıya göre süzülür; **Tablo olarak gör** veya **Cümle olarak gör** ile gösterilir. Tablo menüsündeki **Tablonun kayıt geçmişi**, yalnızca Sahip, Oluşturan ve Düzenleyici rollerine açıktır.

## Yorumlar

Kartın **Yorumlar** sekmesi kaydın tartışmasını açar. Bir yorum bağlantı, görsel, etiketleme, emoji, sesli mesaj ya da ekran kaydı içerebilir. **Tüm yorumlar** için mi yoksa yalnızca size ilgili olanlar için mi bildirim alacağınızı seçersiniz. **Etkinlik** sekmesi kaydın geçmişini gösterir; yalnızca kayıtları düzenleyebilen roller için görünür.

Yorum yazmak yorum yetkisi gerektirir: Sahip, Oluşturan, Düzenleyici ve Yorumcu rollerinde bu yetki vardır; Okuyucu rolünde yoktur.

**Sesli mesaj ve ekran kaydı.** Yorum düzenleyicisinin araç çubuğunda **Sesli mesaj kaydet** ve **Ekran kaydı yap** seçenekleri bulunur. Tarayıcı mikrofon veya ekran erişimi ister; reddedilirse « Mikrofon veya ekran erişimi reddedildi. » mesajı görünür. Kayıt sırasında geçen süre gösterilir ve **Durdur** kaydı bitirir; kayıt gönderilir ve yoruma eklenir. En uzun süre sesli mesaj için 5 dakika, ekran kaydı için 3 dakikadır; bu süreyi aşan kayıt kendiliğinden durur.

**Yapay zekâ asistanına sorun.** Bir yorumda **@** yazın, ardından **IA** (mention listesinde **Yapay zekâ asistanı**) seçin: veritabanının asistanı satırı okur ve « Yapay zekâ asistanı » imzalı bir yorumla yanıt verir. İlk çağrıda veritabanında oluşturulur. Kayıtları ve tabloları, yapılarını ve bir satırın etkinliğini arayıp okuyabilir, bilgi tabanına bakabilir. Kayıtları oluşturabilir veya değiştirebilir, ama her yazma işlemi bir insan onayına tabidir (bkz. [Yapay zekâ ajanları](/tr/docs/ai-agents) içindeki **Yazma işlemlerinin onayı**). Yanıtı 4 000 karakterle sınırlıdır. Yapay zekâ kotası ve uygulanan yetkiler, onu etiketleyen kişinin yetkileridir; yapay zekâ reddedilirse (kota doldu, işlemeye itiraz) yanıt yorumu bunu belirtir. Veritabanında « Yapay zekâ asistanı » ajanı devre dışıysa @IA artık yanıt vermez.

## Gösterge panelleri

Veritabanının kenar çubuğundaki **Gösterge panelleri** girişi, grafikleri ve göstergeleri bir araya getiren bir sayfa açar. Burada **Gösterge panelleriniz** listelenir; yani veritabanındaki tabloların grafik bloğu türündeki görünümleri. Yeni bir tane için **Yapay zekâ ile oluştur** serbest bir istekle sohbeti başlatır; **Şablonlar** bölümü üç başlangıç noktası sunar: **Proje takibi**, **CRM** ve **Süreç haritası maliyetleri**. Bu giriş, veritabanını okuma yetkisiyle görünür.

## Whiteboard'lar

Bir whiteboard, tablolara ek olarak veritabanının bir kaynağıdır: yapılandırmadan önce düşünmek için boş bir alan. Kenar çubuğundaki **+** menüsünde, **Diğer kaynaklar** bölümünden **Yeni whiteboard** ile oluşturulur. Bu, veritabanını düzenleme yetkisi gerektirir: Sahip ve Oluşturan rolleri.

- Araçlar: **Seçim**, **Post-it**, **Metin**, **Çerçeve**, **Kayıt**, **Kalem**, **Görsel**, **Yorum**. **Kayıt** aracı tahtaya mevcut bir kayda bağlı bir kart yerleştirir.
- Altı başlangıç şablonu: Beyin fırtınası, Proje çerçevesi, Süreç, Veritabanı tasarımı, Retrospektif, Organizasyon şeması. Boş bir tuvalden de başlayabilirsiniz.
- **Bu tahtayı kullan** seçimi tablo kayıtlarına dönüştürür. Çerçeveler için tablo önerileri de sunar; hiçbir tablo oluşturulmadan önce sizin onayınızı alır.
- **Dışa aktar** bir PNG görseli veya PDF belgesi üretir.

## Grafikler

Bir grafik, görünüm oluşturmadan tablonun yanındaki **Eklenti paneli**ne yerleştirilir. Panelin düğmesi (bir yapboz parçası simgesi) tablonun araç çubuğundadır.

1. Paneli açın. Boşsa **Eklenti paneli oluştur**'a tıklayın, bir ad verin ve **Onayla** ile doğrulayın.
2. Panelde **Eklenti ekle**'ye, ardından **Grafik**'in karşısındaki **Kur**'a tıklayın.
3. İlk ekran **Veri sorgusu yapılandırması**dır; grafiği besleyen sorguyu **Kaynak**, **Seç**, **Nerede**, **Gruplandır**, **Toplama**, **Sırala**, **Limit**, **Ofset** ve **Birleştir** bloklarıyla kurarsınız. **Kaydet**'e tıklayın.
4. Ardından sağdaki bölmeden **Grafik türü**nü seçin: **Çubuk**, **Çizgi**, **Pasta**, **Alan** veya **Tablo**.

Ayarlar türe göre değişir:

- **Çubuk, Çizgi, Alan**: **X ekseni**, **Y ekseni**, **Başka bir seri ekle**, **Seri dağılımı ekle**, **Yığ**, **Hedef çizgisi**, **Aralık** (**En küçük**, **En büyük**), **Çizgi stili**, **Y ekseni konumu**;
- **Pasta**: **Boyut**, **Ölçü**, **Toplamı göster**;
- Türün desteklediği durumlarda **Grafikte değer etiketlerini göster** ve **Açıklamayı göster**.

Her grafiğin üst kısmında **Genişlet**, **Çoğalt**, **Yeniden adlandır** ve **Sil** bulunur. **Yeniden adlandır** ve **Sil** tabloyu düzenleme yetkisi gerektirir. **Sorguyu güncelle** düğmesi sorgu yapılandırmasını yeniden açar, **Sorguyu yeniden yükle** ise verileri yeniden okur.
