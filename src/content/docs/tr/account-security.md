---
title: "Hesap ve güvenlik"
translationKey: "account-security"
description: "TblFlow'a parolasız girin (passkey, e-posta bağlantısı, harici sağlayıcı); profil, dil, bildirim, veri dışa aktarımı ve hesap silmeyi yönetin."
section: "Kılavuzlar"
order: 16
---

Bu sayfa **kişisel hesabınızla** ilgili konuları anlatır: giriş, profil, tercihler, hızlı arama, verilerinizin dışa aktarılması ve hesabın silinmesi. Bir alanın tamamını etkileyen ayarlar [Alan ayarları](/tr/docs/space-settings) sayfasındadır.

## Giriş yapmak

Giriş ekranında **parola yoktur**. Üç yöntem vardır. İlk ikisi her zaman bulunur, üçüncüsü ise instance yapılandırmasına bağlıdır.

| Yöntem | Nasıl kullanılır |
|---|---|
| Passkey | **Passkey ile giriş yap** düğmesine tıklayın, ardından cihazınızın doğrulama yöntemiyle onaylayın. |
| E-posta bağlantısı | **Ya da e-posta ile giriş yapın** altında e-posta adresinizi girin ve **Bağlantı gönder** düğmesine tıklayın. |
| Harici bağlantı | **Ya da şununla devam edin** altında bir sağlayıcı seçin: GitHub, Google veya OIDC. Yalnızca instance üzerinde etkinleştirilmiş sağlayıcılar görünür. |

### Passkey

Passkey; Face ID, Touch ID, Windows Hello veya bir güvenlik anahtarına dayanır. İlk girişinizden **sonra**, profilinizden eklenir (aşağıya bakın).

### E-posta bağlantısı

TblFlow, adresinize bir giriş bağlantısı ve 6 haneli bir kod gönderir. İletide bağlantının 10 dakika içinde süresinin dolacağı belirtilir. Bağlantıyı açabilir ya da **6 haneli kod** alanına kodu girip **Giriş yap** düğmesine tıklayabilirsiniz. **Bağlantıyı yeniden gönder** işlemi göndermeyi tekrarlar.

- Bu yöntem yalnızca zaten hesabı olan bir adres için çalışır. Bilinmeyen bir adres için ekran, bilinen bir adresteymiş gibi davranır ama hiçbir e-posta gönderilmez. Bu bilerek yapılır: hangi adreslerin hesabı olduğu açığa çıkmasın. Hesap oluşturmak için kayıt işlemini kullanın.
- İstekler arasında bekleme süresi vardır: ekran, yeni bir istek göndermeden önce beklenmesi gereken saniye sayısını gösterir.
- Çok sayıda hatalı kod girildikten sonra giriş birkaç dakikalığına kilitlenir.
- Instance bir robot doğrulama (anti-bot) testi kullanıyorsa, test alanın altında görünür ve gönderimden önce tamamlanmalıdır.

Bir instance ayarı bu bağlantı yöntemini devre dışı bırakabilir. Bu durumda ekran şu mesajı gösterir: « Parolasız giriş bu instance üzerinde kullanılamıyor ».

### Harici bağlantı ve SSO

**GitHub**, **Google** ve **OIDC** düğmeleri sizi ilgili sağlayıcıya yönlendirir. Yalnızca instance'ta yapılandırılmışlarsa görünürler. **OIDC** düğmesi, instance düzeyinde yapılandırılmış bir OpenID Connect sağlayıcısına karşılık gelir: alan ayarlarından yönetilmez.

## Hesap oluşturmak

Giriş ekranından **Kaydol** seçeneğini açın. Form şunları ister:

- e-posta adresiniz;
- kullanım koşulları ve gizlilik politikasının kabulü (zorunlu);
- instance istediğinde, e-postayla gönderilen bir **doğrulama kodu**;
- instance bir bekleme listesiyle çalıştığında bir **davet kodu**. **Bekleme listesine katıl** bağlantısı sizi listeye kaydeder.

Parola oluşturulmaz. Yapılandırmaya bağlı olarak instance kayıtları da kapatabilir: bu durumda kayıt sekmesi yalnızca bir alana, veritabanına veya paylaşılan bir görünüme ait davet bağlantısıyla kullanılabilir.

## Profilim

Avatar menüsünü açın, ardından **Ayarlar** seçeneğine tıklayın. Pencere kişisel ayarlarınızı bir arada toplar: **Hesabım**, ardından **Bildirimlerim**, **Bağlayıcılar**, **Kişisel erişim belirteçleri**, **Becerilerim** ve **OAuth uygulamaları**. Erişiminiz varsa, mevcut alanın ayarları da aynı pencerede yer alır.

**Hesabım** sekmesi (başlık **Profilim**) şunları içerir:

| Ayar | Ayrıntı |
|---|---|
| Avatar | **Avatarı değiştir** bir görsel seçme penceresi açar. |
| Görünen ad | TblFlow içinde size verilen ad. Alandan çıkınca kaydedilir. |
| **Ad** ve **SOYAD** | Soyad büyük harflerle kaydedilir. |
| Tema | **Açık**, **Koyu** veya **Sistem**. |
| Dil | Aşağıya bakın. |
| **Veritabanı görünümü** | Bir alandaki veritabanı listesinin görünümü: **Otomatik**, **Kart** veya **Liste**. |
| **Veritabanı içinde görünüm** | Bir veritabanı açıldığında kullanılan görünüm: aynı üç seçenek. |
| **Etkileşim modu** | **Fare modu**, **Dokunmatik mod** veya **Sistemi takip et**. Bu seçenek yalnızca hem dokunmatik hem fareyi destekleyen cihazlarda görünür. |

### Arayüz dili

**Dil** seçici on dil ve ayrıca bir **Default** seçeneği (tarayıcının dili) sunar:

中文, English, Italiano, Français, Deutsch, 日本語, Русский, Українська, Türkçe ve Español (Latinoamérica).

Seçim hesabınıza kaydedilir, ardından sayfa yeniden yüklenir.

### Hesap güvenliği

**Hesap güvenliği** bölümü şu öğeleri içerir.

**E-posta adresi.** **E-posta adresini değiştir** yeni adresi ister, **Kodu gönder** ile bir doğrulama kodu yollar, ardından **Onayla** işlemi tamamlar. Oturumunuz kapanır ve giriş ekranına dönersiniz. Bu işlem için son 15 dakika içinde bir passkey veya bir yedek kod kullanmış olmanız gerekir: ihtiyacınız olmadan önce bir passkey kaydedin.

**Passkey'ler.** **Passkey ekle** cihazınızda kaydı başlatır ve anahtara bir ad vermenizi ister. Listelenen her anahtarın yanında bir **Sil** düğmesi vardır. Hesabınızda bir passkey ya da yedek kod olduğu anda, passkey eklemek veya silmek için aynı şekilde yakın zamanda güçlü bir doğrulama yapmanız gerekir. Henüz hiçbiri olmayan bir hesap, ilk passkey'ini doğrudan kaydedebilir.

**Yedek kodlar.** **Oluştur** on adet tek kullanımlık kod üretir. Passkey'inizi kaybederseniz bunlar onun yerine geçer, ancak giriş yapmak için kullanılmazlar. Kodlar yalnızca bir kez gösterilir: hemen **Kopyala** ya da **İndir** ile kaydedin. **Yeniden oluştur** tüm seti değiştirir, eski kodlar artık çalışmaz. Kalan kod sayısı gösterilir.

**TblFlow desteği erişimi.** Bir anahtar, yardım istediğinizde desteğin yerinize giriş yapmasına izin verir. Varsayılan olarak kapalıdır. Görüntülenen metne göre her oturum en fazla 30 dakika sürer, aksi kararlaştırılmadıkça salt okunurdur ve nedeniyle birlikte kaydedilir. Bu izni istediğiniz zaman geri alabilirsiniz.

**Verilerinizin işlenmesi.** İki anahtar:

- **Verilerimin işlenmesini sınırla (GDPR Md. 18)**: zorunlu olmayan otomatik işlemleri hiçbir şey silmeden dondurur. Hesabınız çalışmaya devam eder.
- **İçeriklerimin yapay zeka işlemesine itiraz et (GDPR Md. 21)**: içe aktardığınız belgeler artık yapay zeka özellikleri tarafından dizinlenmez ve okunmaz. Yine saklanır ve indirilebilir.

İşlemenin sınırlandırılması yapay zeka işlemesini de kapsar: bu durumda ikinci anahtar kilitlenir.

Bu bölüm ayrıca yetkilendirdiğiniz üçüncü taraf entegrasyonlarını gösterir ve bunları iptal edebilirsiniz. Bağlayıcılar, kişisel belirteçler ve OAuth uygulamalarının kendi sayfaları vardır: [Bağlayıcılar](/tr/docs/connectors) ve [API ve geliştiriciler](/tr/docs/api-developers) sayfalarına bakın.

## Bildirimler

### Bildirim merkezi

Çan simgesi okunmamış bildirim sayısını gösterir. Panelde iki liste bulunur: okunmamışlar ve okunmuşlar (**Okundu**). Ayrıca **Tümünü okundu olarak işaretle** düğmesi ve daha fazlasını yüklemek için **Daha fazla göster** vardır.

### E-postalar

**Bildirimlerim**, e-posta ile ne alacağınızı belirler. Üç düzey vardır:

| Düzey | İçerik |
|---|---|
| **Tüm bildirimler** | Etiketlemeler ve yorumlar, artı platform iletileri: içe aktarma veya dışa aktarma bitişi, otomasyon veya yapay zeka üretiminin başarısızlığı, kotalar ve faturalandırma. |
| **Yalnızca etiketlemeler ve yorumlar** | Yalnızca biri sizi bir hücrede veya yorumda etiketlediğinde ya da yorum yaptığında. |
| **Hiç e-posta yok** | Bildirimler yalnızca uygulama içinde görünür kalır. |

Slack, Teams veya Google Chat'e iletim, kişisel değil bir alan ayarıdır: [Alan ayarları](/tr/docs/space-settings) sayfasına bakın.

## Komut paleti ve arama

**Ctrl+K** (Mac'te **⌘+K**) **Hızlı işlemler** paletini açar. Büyüteç simgesi de paleti açar; aynı kısayol onu kapatır.

- **Bir veritabanının içinde**: palet veritabanının tablolarını, uygulamalarını ve otomasyonlarını listeler. Ayrıca oluşturma işlemlerini, **Yapay zeka asistanını aç** seçeneğini (ya da yazdığınız metinle **Asistana sor**), tema seçimini ve ayarları açma işlemini sunar.
- **Bir alanın içinde**: yazdığınız metin, alan içinde sunucuda bir arama başlatır. Sonuçlar veritabanı, tablo, görünüm, pano, otomasyon veya uygulama olabilir; **Daha fazla yükle** ile 10'arlı sayfalarla gelir. Bir sonuca tıklamak öğeyi açar. Rolünüz izin veriyorsa **Veritabanı oluştur** işlemi de burada görünür.

Önerilen işlemler haklarınıza bağlıdır: izniniz olmayan bir işlem görünmez.

**Bir tablonun içinde**, **Ctrl+F** (Mac'te **⌘+F**) imleci araç çubuğundaki arama alanına götürür. **Genel arama** (tarihler, onay kutuları ve düğmeler hariç tüm alanlar) veya **Alana göre arama** sunulur. Bkz. [Görünümler ve filtreler](/tr/docs/views-and-filters).

## Verilerimi dışa aktarmak

**Hesabım** sekmesinin altında **Arşivi indir** bir zip dosyası üretir. Dosya; profil alanlarınızı içeren bir `profile.json` dosyası, bir alanın sahibi olarak sahip olduğunuz her veritabanı için bir klasör (kayıtlar ve ekler) ve varsa üçüncü taraf site kimlik bilgilerinizin meta verilerini içerir. İlgili parolalar dışa aktarılmaz.

## Hesabımı silmek

**Hesabım** sekmesinin altında **Hesabı sil** bir onay penceresi açar. İşlem geri alınamaz.

1. Önce alanlarınızdan çıkın. Bir alanın üyesi olduğunuz sürece, ya da çöp kutusuna taşınmış bir alanın sahibi veya oluşturanı olduğunuz sürece silme reddedilir ve ekran ilgili alanları, her biri için bir bağlantıyla listeler.
2. Onay alanına `DELETE` yazın. Yazılan metin farklıysa **Sil** düğmesi etkin olmaz.
3. Sunucu, 15 dakikadan daha yeni bir giriş ister (varsa yakın zamanda kullanılmış bir passkey ya da yedek kod). Değilse yeniden giriş yapıp işlemi tekrarlayın.

Bundan sonra olanlar:

- e-posta adresiniz değiştirilir, adınız silinir, avatarınız varsayılan bir avatarla değiştirilir;
- erişim belirteçleriniz, bağlı hesaplarınız, passkey'leriniz, yedek kodlarınız, bildirimleriniz ve ajanlarla olan konuşmalarınız silinir;
- yorumlarınız temizlenir;
- paylaşılan veritabanlarındaki kayıtlar korunur: bunlar ekibe aittir ve yalnızca « Deleted User » adıyla görünürsünüz.
