---
title: "Yapay zekâ sohbeti"
translationKey: "ai-chat"
description: "Yapay zekâ sohbetini kullanın: @ anmaları, giriş ayarları, yazmadan önce onaylanan öneriler, tam uygulamalar, tarayıcı becerileri ve bilgi tabanı."
section: "Kılavuzlar"
order: 14
---

Yapay zekâ sohbeti, veritabanının sağında yer alan bir kenar panelidir. Verileriniz hakkında sorular sorabilir ya da asistandan tablo, görünüm, otomasyon, arayüz veya ajan oluşturmasını isteyebilirsiniz. Bir değişiklik istediğinizde asistan kendisi bir şey yapmaz: kabul edebileceğiniz ya da reddedebileceğiniz bir **öneri** hazırlar.

## Paneli açma

**Yapay zekâ sohbeti** düğmesi görünümün araç çubuğunda yer alır. Veritabanı kenar çubuğunda da aynı adlı ikinci bir düğme bulunur; bu düğme, veritabanını değiştirebilen kişiler içindir. Panel ilk ziyarette kapalıdır; son seçiminiz (açık ya da kapalı) daha sonra korunur.

Konuşma boşken panel öneriler sunar (ör. « Benim için bir CRM oluştur »). Bir öneriye tıklamak metni göndermeden giriş alanına kopyalar; göndermeden önce değiştirebilirsiniz.

Enter mesajı gönderir, Shift + Enter ise satır başı ekler. Bir mesaj en fazla 100 000 karakter içerebilir.

## Konuşmalar

- **Yeni konuşma** paneli boşaltır ve baştan başlatır.
- **Geçmiş**, konuşmalarınızı listeler (en yeni elli tanesi) ve başlığa göre aramanıza izin verir. Yalnızca açık olan veritabanına bağlı kendi konuşmalarınızı görürsünüz.

## Bir tabloyu, görünümü veya alanı anma

Girişte `@` yazarak bir seçici açın. Üç grup sunar: **Tablolar**, **Görünümler** ve **Alanlar**. Bunlar, okuma hakkınız olan veritabanlarından alınır. Bir nesneyi seçmek, mesaja bir hap biçiminde anma ekler ve asistan hangi nesneden söz ettiğinizi bilir.

Birkaç kural:

- Yalnızca tablolar, görünümler ve alanlar anılabilir. Kayıtlar, otomasyonlar ve arayüzler anılamaz.
- Bir mesaj en fazla 20 anma içerebilir.
- Girişe bir TblFlow tablosunun adresini yapıştırmak, o tablonun anmasını doğrudan ekler.
- Sunucu her anmayı yeniden denetler: nesne alana ait olmalı ve tablosunu okuma hakkınız bulunmalıdır. Aksi halde anma şu mesajla reddedilir: « Bu anma erişilebilir değil: kaldırın veya listeden bir nesne seçin ».
- Belirli bir ajanla yazıştığınızda anmalar iletilmez.

## Girişi ayarlama

Metin alanının altındaki çubuk, mesajın ayarlarını bir araya getirir.

| Ayar | Etkisi |
|---|---|
| **Sonuç türü** | Asistanın önerebileceklerini sınırlar: **Tablo**, **Arayüz**, **Otomasyon**, **Ajan** veya **Örnek veri**. Seçim yapılmazsa « Yapay zekâ seçsin » geçerlidir. **Tablo** dışındaki türler, veritabanında zaten bir tablo bulunmasını gerektirir. |
| Model (sağlayıcı simgesi) | Kullanılabilir modelleri sağlayıcıya göre gruplanmış biçimde açar. Listeyi açmak için simgenin üzerine gelin. Liste, veritabanı için yapılandırılmış modellere bağlıdır. |
| **Düşünme** | **Hızlı** (daha hızlı yanıtlar, daha az kredi), **Normal** (modelin olağan ayarı) veya **Derin** (model daha uzun düşünür; 8 000 düşünme jetonuna kadar ek, dolayısıyla daha fazla kredi). **Derin** yalnızca Team ve Enterprise planlarında kullanılabilir. |
| **Web araması** | Geçerli konuşma için etkinleştirilen bir düğme. Web araması yapılandırılana kadar soluk kalır. |
| **Dosya ekle** | Görseller ve PDF'ler, mesaj başına en fazla 10 adet. Seçilen model dosya kabul etmiyorsa düğme soluk kalır. |
| **Mesajı dikte et** | Tarayıcınızın konuşma tanımasıyla sesli giriş. Düğme yalnızca tarayıcı bunu sunuyorsa görünür. |

Bir **Bağlam penceresi** göstergesi, konuşmanın modelin belleğinin ne kadarını kullandığını tahmin eder.

Yapay zekâ kullanımı kredilerle sayılır; düşünme düzeyi bu tüketimi etkiler. Plan başına dahil edilen hacimler [Planlar ve limitler](/tr/docs/plans-limits) sayfasında yer alır.

## Asistanın yapabilecekleri

**Okumak, onaysız.** Asistan alanın yapısını, tablo şemasını ve kayıtları doğrudan okur, toplamları hesaplar ve bilgi tabanında arama yapar. Ayrıca Excel, Word, PowerPoint veya PDF dosyası da üretebilir.

**Önermek, onayla.** Herhangi bir şeyi değiştirmek için sohbette kart olarak görünen bir öneri yayımlar. Öneriler özellikle şunları kapsar:

- bir veritabanı, tablo, görünüm veya klasör oluşturma;
- bir tablo ya da alanın adını değiştirme, iki tabloyu bağlama;
- kayıt oluşturma veya değiştirme;
- bir alanı silme;
- arayüz, otomasyon veya ajan oluşturma, uygulama kodu üretme;
- bilgi tabanı belgesi oluşturma veya değiştirme, iki belgeyi bağlama.

Her kartta önizlemeyi okursunuz, ardından **Kabul et** ya da **Reddet** düğmesine tıklarsınız. Kabul edilmeden hiçbir şey yazılmaz ve kabul, haklarınızı yeniden denetler: asistan sizin yapamayacağınız bir şeyi yapamaz.

Bir silme önerisi açık bir onay ister (**Silmeyi onayla**). Kart, kaynağın çöp kutusundan geri alınıp alınamayacağını ve neyin buna bağlı olduğunu (bağlı veya hesaplanan alanlar, görünümler, otomasyonlar, arayüzler) belirtir.

**Yapmadıkları.** Sohbetin kayıt veya tablo silmek için bir aracı yoktur. « Tablo nasıl oluşturulur? » gibi basit bir soru yazılı bir yanıt alır ve hiçbir öneri tetiklemez.

Ajanlar ve önerileri [Yapay zekâ ajanları](/tr/docs/ai-agents) sayfasında anlatılır.

## Sohbet dışında yapay zekâ ile oluşturma

İki giriş, sohbet panelini kullanmadan kısa bir oluşturma penceresi açar:

- **Yapay zekâ ile oluştur**, kenar çubuğundaki tablo ekleme menüsünde, bir tablo için;
- **Yapay zekâ ile üret**, alan oluştururken düzenleyicinin üstünde. Pencere bu durumda **Alan** ile **Düğme** arasında seçim sunar.

Ne istediğinizi tarif edersiniz; ardından **Üret** bir önizleme gösterir. **Oluştur** tıklanana kadar hiçbir şey oluşturulmaz. **Talebi değiştir** sizi girişe geri götürür.

## Tam bir uygulama üretme

Giriş alanında **Tam uygulama**, sohbeti üretim moduna geçirir. Uygulamayı tarif edersiniz; asistan, onayladığınız adımlarla onu inşa eder:

1. talebin analizi, ardından **Tablolar**;
2. **İlişkiler**;
3. **Arayüz**, **Otomasyonlar**, **Görünümler**, toplamlar ve **Örnek veriler**;
4. veri bağlama ve denetimi, ardından bir **Yapay zekâ ajanı**.

Her adım öneriler üretir. **Hepsini kabul et** bunların hepsini bir kerede onaylar; **Düzenle**, hiçbir öneri kabul edilmediği sürece geçerli adımı ayarlamanıza izin verir. **Otomatik** seçeneği, yapay zekânın önerileri kendisinin kabul edip sonraki adımlara geçmesini sağlar; bir hata olursa durur.

Sonunda bir rapor neyin oluşturulduğunu gösterir ve etkin olmayan otomasyonları işaretler: siz etkinleştirmedikçe tetiklenmezler. Yayımlama ve alan adı için bkz. [İlk uygulamanızı oluşturun](/tr/docs/build-first-app).

## Proje asistanı

Tablo ekleme menüsünde, veritabanının kökünde **Proje asistanı**, veritabanına üç tablo kurar: **Kişiler**, **Projeler** ve **Görevler** (Türkçe arayüz için Türkçe adlar). Ayrıca « Proje asistanı » adlı bir ajan ekler. Veritabanında tablo oluşturma hakkına sahip olmanız gerekir.

Ajan pazartesiden cumaya, her gün saat 07:30'da çalışacak şekilde planlanır. Günün toplantılarının gündemini hazırlar, takvimde son tarih işaretleri önerir ve sorumlusu olmayan görevleri listeler. Yazmaları (bir projeyi güncelleme, bir takvim etkinliği oluşturma) her zaman onaydan geçer. Kurulumu ikinci kez yapmak, zaten var olan tabloları yeniden oluşturmaz.

## Tarayıcı becerileri

Tarayıcı becerisi, bir web sitesi üzerindeki bir yolu kaydeder, ardından istek üzerine yeniden oynatır. **Yeni tarayıcı becerisi** ile oluşturulur; ekleme menüsünün « Diğer kaynaklar » bölümündedir. Bu özellik her örnekte etkin değildir.

1. **Oturumu aç**: sunucuda uzak bir tarayıcı başlar, ekranını canlı görürsünüz ve içinde tıklayıp yazarsınız. Bir oturum en fazla 15 dakika sürer ve 2 dakika hareketsizlikten sonra kapanır.
2. Başlangıç sayfasına gidin, ardından **Kaydet**'e tıklayın. Her tıklama, tuş vuruşu ve kaydırma bir adım olur. **Durdur** kaydı sonlandırır.
3. **Oynat**, adımları ayrı bir tarayıcıda yeniden çalıştırır ve bir rapor gösterir: çalıştırılan adımlar veya başarısız olan adım.

Kayıt çevresinde:

- **Adımlar** adımları listeler; birini kaldırmanıza ya da girilmiş bir metni düzeltmenize izin verir.
- **Kimlik bilgileri** bir parolayı, 2FA kodunu veya güvenlik anahtarını saklar. Bunlar şifrelenir, referansla yeniden oynatılır ve asla sayfaya geri gönderilmez ya da yapay zekâ modeline iletilmez. Bir kimlik bilgisi veritabanına bağlıdır: onu değiştirebilen herkes, değerini görmeden bununla oturum açabilir.
- **Yorumla** mikrofonu etkinleştirir; hareketlerinizi açıklarsınız. Ses değil, metin saklanır ve beceri onaylanana kadar tutulup sonra silinir.
- **Analiz et** kayıttan bir beceri çıkarır: bir amaç, girdiler, iş kuralları; her biri kendisini doğuran cümleyle birlikte. Gözden geçirin, ardından **Beceriyi onayla**. Yeniden kayıt yaparsanız öncekisi geçersiz olur.
- **Verilerle yeniden oynat**, onaylanmış beceriyi hareketleri aynen tekrarlamak yerine sizin verdiğiniz değerlere uygular.

Onaylanmış bir beceriyi bir otomasyondan başlatmak için **Web sitesini yönet** adımını ekleyin (bkz. [Otomasyonlar](/tr/docs/automations)). Bu adım, onaylanmış bir beceri ile becerinin içinde verilmiş, gözetimsiz hareket etme iznini gerektirir.

## Bilgi tabanı

Alanın belge kütüphanesine, alanın kenar çubuğundaki « DocIndex » simgesiyle ulaşılır. Burada belgeler ve klasörler oluşturur ya da PDF, DOCX, TXT, MD ve CSV dosyalarını içe aktarırsınız (bir PDF için en fazla 50 MB, diğerleri için 25 MB). İçe aktarmak alanı değiştirme hakkı gerektirir. Her belge durumunu gösterir: **Dizinleniyor…**, ardından **Dizinlendi**.

Arama üç mod sunar: **Anlamsal**, **Anahtar kelime** ve **Karma**. Anlamsal arama, alan için bir gömme sağlayıcısının yapılandırılmış olmasını gerektirir. Yoksa arama yalnızca anahtar kelimelerle sınırlı kalır ve sohbet, hiçbir sağlayıcının yapılandırılmadığını yanıtlar.

Sohbet asistanı, siz istediğinizde bu tabanı sorgular. Ajanlar **Bilgi tabanında ara** aracını kullanır ([Yapay zekâ ajanları](/tr/docs/ai-agents)); dış asistanlar ise [MCP sunucusunun](/tr/docs/mcp-server) `search_knowledge` aracını kullanır.
