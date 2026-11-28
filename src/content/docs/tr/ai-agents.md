---
title: "Yapay zekâ ajanları"
translationKey: "ai-agents"
description: "Bir TblFlow ajanını yapılandırın: model, araç kapsamı, bellek, tetikleyiciler, yazmalar için insan onayı, beceriler ve plan başına kotalar."
section: "Kılavuzlar"
order: 4
---

Ajan, bir veritabanına bağlı bir uygulayıcıdır. Talimatları, bir araç kümesi ve bir belleği vardır; varsayılan olarak her yazma işlemi sizin onayınızı bekler.

Bir ajanın profili beş sekmeden oluşur: **Talimatlar**, **Görevler**, **Beceriler**, **Bilgi** ve **Bellek**.

## Modeli seçme

Sağlayıcılar ve anahtarları her çalışma alanı için **Çalışma alanı yapay zekâ ayarları** içinde yapılandırılır. Bunları yalnızca çalışma alanı sahibi değiştirebilir. Anahtarlar dinlenirken şifrelenir ve kaydedildikten sonra artık açık metin olarak görünmez.

Kullanılabilir sağlayıcılar arasında OpenAI, Anthropic, Google, Azure, Cohere, Mistral, DeepSeek, xAI, Amazon Bedrock, OpenRouter, OpenAI uyumlu her uç nokta ve Ollama ile LM Studio üzerinden yerel modeller bulunur. Eklediğiniz anahtarlar, **Sunucunun modellerini varsayılan olarak kullan** seçeneğini devre dışı bırakmadığınız sürece sunucunun kendi anahtarlarına eklenir.

Ajanın profilindeki **Model** seçici ona kendi modelini atamanıza izin verir. Seçim yapılmazsa ajan, yapay zekâ yapılandırmasındaki varsayılan sohbet modelini kullanır.

## Kapsamı belirleme

Bir ajanın kapsamı üç şeye bağlıdır.

- **Veritabanı.** Ajan, başka bir veritabanının tablolarını okuyamaz ve yazamaz: veritabanında olmayan bir tablo reddedilir.
- **Araçları.** **Beceriler** sekmesi ajanın gerçekleştirebileceği eylemleri listeler. Devre dışı bırakılmış bir araç modele sunulmaz, dolayısıyla model onu çağıramaz. Kayıtlar, tablolar ve yorumlardaki araçların çoğu varsayılan olarak etkindir. Dış dünyaya dokunan veya dosya üreten araçlar varsayılan olarak devre dışıdır ve tek tek etkinleştirilir: web araması, Excel, Word, PowerPoint ve PDF dosyası üretimi, bir beceri veya kodun çalıştırılması, e-posta, Slack, Microsoft Teams, GitHub, takvim, Drive ve SharePoint, bir tarayıcı becerisinin yeniden oynatılması. Diğer ajanlara görev devretme yalnızca bir orkestratör ajan için varsayılan olarak etkindir.
- **Bağlantıları.** **Bağlayıcılar** bölümünde bağlanan hesaplar ajanlarınıza hizmet eder. Ajanı kimse başlatmadığında (zamanlama, tetikleyici), ajanın oluşturucusunun hesapları kullanılır. Ajana MCP sunucuları da ekleyebilirsiniz.

Ajanın ulaşabileceklerini kısıtlamak için ihtiyaç duymadığı araçları kaldırın. Bir destek sınıflandırma ajanının e-posta göndermesi ya da kayıt silmesi için bir neden yoktur.

## Yazma onayı

**Yazma onayı** ayarı her ajan için ayrı ayrı varsayılan olarak etkindir. Etkin olduğu sürece gerçek bir etkisi olan araç çalışmaz: ajan beklemeye geçer ve onayınızı ister. Bu kapsamdaki işlemler arasında kayıt oluşturma, değiştirme ve silme; tablo, alan ve görünüm oluşturma; yorumlar; e-posta veya mesaj gönderme; bir otomasyonu başlatma; bir kodu veya beceriyi çalıştırma ve belleğe yazma yer alır.

**Onayla** veya **Reddet** ile yanıt verirsiniz (isteğe bağlı bir gerekçeyle). Bekleyen istekler, veritabanının **Onaylar** sayfasında bulunur; bu sayfaya **Bekleyen onayları gör** bağlantısıyla gidilir. Yanıt verilmezse istek 7 gün sonra sona erer ve eylem gerçekleştirilmez.

Bu ayarı yalnızca ajanın hatalarını gözlemledikten sonra devre dışı bırakın. Devre dışı bırakıldığında ajan tüm yazmalarını kendi başına yapar; bu ayar tablo bazında ayarlanamaz.

## Bellek

**Bellek** sekmesi ajanın belleğini etkinleştirir veya devre dışı bırakır. Bellek iki bölümden oluşur:

| Bölüm | İçerik |
| --- | --- |
| Yakın | Yakın zamandaki işin kısa süreli anıları; 7 gün saklanır. En yeni 50 tanesi tutulur ve bir görevin başında en yeni 5 tanesi ajana verilir. |
| Tercihler | İnsanlar tarafından verilen, anahtar ve değer biçiminde yönergeler; her görevde ajana verilir. |

Ajan bir bilgiyi belleğe aldığında, varlıklar ve ilişkiler çalışma alanının bir grafiğinde çıkarılabilir; ajan bunu **Bellekte ara** aracıyla sorgular. Bellek bu nedenle bir sohbet geçmişi değildir: yazışmalar ayrı olarak, geçmişte saklanır.

**Anıları gör** ajanın anılarının listesini açar. Veritabanının düzenleyicileri bir anıyı **Düzelt** veya **Sil** ile değiştirebilir: ajan yanlış bir şey hatırladıysa talimatları değil, bu girdiyi düzeltin.

## Beceriler

Beceri, bir ajanın kullanabileceği, isteğe bağlı olarak bir betikle birlikte gelen adlandırılmış bir talimat bloğudur. Kişisel (hesaba ait) olabilir ya da çalışma alanında paylaşılabilir. Bir ajan için kullanılabilir beceriler, oluşturucusunun becerileri ve çalışma alanının becerileridir; her biri varsayılan olarak devre dışıdır ve **Beceriler** sekmesinde ajan için etkinleştirilir. Bir becerinin betiğinin çalıştırılması, o da varsayılan olarak devre dışı olan **Bir beceri betiğini çalıştır** aracı üzerinden yapılır.

## Tetikleyiciler

**Görevler** sekmesi ajanın ne zaman çalıştığını gösterir.

| Tetikleyici | İşleyiş |
| --- | --- |
| Bahsetme | Bir kayıtta etiketlendiğinde ajan çözümler ve yanıt verir (anahtar) |
| Özel mesaj | Ajan, kendisine gönderilen mesajlara yanıt verir (anahtar) |
| **Ajanı başlat** | İsteğe bağlı çalıştırma |
| Zamanlanmış | Yinelenen bir saatte veya özel bir cron ifadesine göre; 15 dakikadan kısa aralıklar varsayılan olarak reddedilir |
| Otomatik | Bir tablodaki bir kayıt oluşturulduğunda veya değiştirildiğinde |
| Gelen webhook | Bir HTTP çağrısı ajanı tetikler |

Bir kayıt tetikleyicisi yalnızca yazma onayı devre dışıysa çalışır: onay gerektiği sürece pasif kalır, çünkü otomatik bir tetiklemede hiçbir insana danışılamaz. Zamanlama ve webhook ise onayla birlikte çalışır: onay isteği Onaylar bölümüne düşer.

## Kotalar

Bir ajanın her çalıştırması, elle, zamanlanmış veya tetiklenmiş olsun, ay bazında sayılır.

| Plan | Ajan çalıştırması (ay başına) |
| --- | --- |
| Ücretsiz | 100 |
| Essential | 5.000 |
| Team | 50.000 |
| Enterprise | Sınırsız |

Kendi barındırdığınız kurulumlarda bu sınırlar uygulanmaz. Yapay zekâ kullanımı ayrıca plana özgü diğer sınırlara tabidir. [Otomasyonların](/tr/docs/automations) kotaları ayrı olarak sayılır.

## Geçmiş

Her çalıştırma, ajanın araç çağrıları, parametreleri ve sonuçlarıyla birlikte bir sohbet olarak saklanır. Sohbet geçmişine ajanın sohbetinden erişilebilir.

## En iyi uygulamalar

- Ajan başına tek bir hedef. "CRM'i yöneten" bir ajan dağınık biçimde başarısız olur; üç dar ajan ise okunabilir biçimde başarısız olur.
- Başlangıçta yazma onayını etkin tutun ve yalnızca hatalarının doğasını gördükten sonra devre dışı bırakın.
- Yalnızca ajanın görevi için gerekli araçları etkinleştirin.
