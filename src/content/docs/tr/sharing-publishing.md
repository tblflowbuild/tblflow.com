---
title: "Paylaşım ve yayımlama"
translationKey: "sharing-publishing"
description: "Görünüm, tablo veya veritabanını bağlantıyla paylaşın, formu herkese açın, uygulamayı herkese açık ya da davetli yayımlayın, ortak çalışan davet edin."
section: "Kılavuzlar"
order: 12
---

TblFlow'da verilerinize erişim vermenin beş yolu vardır. Bunlar aynı yetkileri gerektirmez ve aynı gücü vermez; bu yüzden işinizi görecek en dar olanı seçin.

| Yapmak istediğiniz | Nerede | Gerekli yetki (varsayılan roller) |
|---|---|---|
| Bir görünümü bağlantıyla salt okunur göstermek | Tablo araç çubuğu, **Paylaş** | Görünümü değiştirmek ve paylaşmak: sahip, oluşturucu, düzenleyici |
| Bir tabloyu veya veritabanını bağlantıyla göstermek | **Paylaş** (araç çubuğu veya veritabanı menüsü) | Veritabanını değiştirmek: sahip, oluşturucu |
| Yanıt almak | Paylaşılan Form görünümü | Görünümle aynı |
| Bir uygulamayı yayımlamak | Uygulamanın **Yayımla** düğmesi | Uygulamayı değiştirmek: sahip, oluşturucu |
| Çalışma alanında veya veritabanında birinin çalışmasını sağlamak | **Davet et** düğmesi | Davet etmek: bkz. [Yetkiler ve roller](/tr/docs/permissions) |

## Bir görünümü bağlantıyla paylaşma

Bir tablonun araç çubuğunda **Paylaş** küçük bir menü açar: **Tabloyu paylaş** ve **Görünümü paylaş**. Görünümü değiştirme yetkiniz yoksa düğme soluk görünür.

**Görünümü paylaş**'ı seçin, ardından **Görünümü web'de paylaş**'ı etkinleştirin. Bir bağlantı belirir; tek tıkla kopyalama, bir QR kodu ve yeni bir bağlantı üretme düğmesi ile birlikte. Bağlantıya sahip kişiler, hesap olmadan görünümü görür.

**Gelişmiş** altında, görünüm türüne göre:

- **Görüntüleyenlerin bu görünümden veri kopyalamasına izin ver** ve **Genişletilmiş kayıtlarda tüm alanları göster** (yalnızca Izgara görünümü).
- **Yalnızca davetle**: aşağıya bakın.
- **Entegrasyon yapılandırması**: başka bir sayfaya yapıştırılacak bir `iframe` kodu kopyalar, önizlemesiyle birlikte. Burada temayı (sistem, açık veya koyu) seçersiniz; Form dışında **Araç çubuğunu gizle** seçeneği de bulunur. Bu ayarlar bağlantıyı değiştirir: değiştirdikten sonra bağlantıyı yeniden kopyalayın.

Güvenlik nedeniyle, Parola türündeki alanlar paylaşım bağlantısını açan kişiye hiçbir zaman gönderilmez. Veritabanının okunmasını yasakladığı bir alan da gönderilmez.

Bağlantıyı kapatmak için anahtarı kapatın. **Yeni bağlantı oluştur** adresi değiştirir.

## Bir tabloyu veya veritabanını bağlantıyla paylaşma

Tüm bir veritabanını paylaşmak için, çalışma alanındaki veritabanı listesinde bu veritabanının menüsünden **Paylaş**'ı kullanın. Bir tablo için **Paylaş**, ardından **Tabloyu paylaş**. Veritabanını değiştirebilmeniz gerekir: varsayılan olarak sahip veya oluşturucu.

**Web'de paylaş**'ı etkinleştirin. Bağlantı `/share/…/base` adresinde açılır. **Bağlantıya sahip herkes** menüsü, bağlantının neye izin verdiğini belirler:

| Ayar | Etkisi |
|---|---|
| **Görüntüleyebilir** | Bağlantıya sahip herkes verileri görüntüler. |
| **Değiştirebilir** | Oturum açmış kullanıcılar tablonun kayıtlarını değiştirir: düzenleyici hakları alırlar. Bir veritabanı, bir tablo veya bir klasör için önerilir. |
| **Bir kopya kaydet** | Bağlantıya sahip herkes çalışma alanına bir kopya kaydedebilir. |

**Gelişmiş** altında: **Okuyucuların verileri kopyalamasına izin ver**, **Yalnızca davetle** ve **Entegrasyon yapılandırması** (`iframe` kodu). **Bağlantıyı yeniden oluştur** adresi değiştirir. **Web'de paylaş** seçeneğini kapatmak onay ister: bu işlem geri alınamaz ve bağlantıya sahip olan kişiler erişimini kaybeder.

**Değiştirebilir** seçeneği etkin olsa bile, bir veritabanı bağlantısı e-posta daveti, görünüm paylaşımı veya veri sorguları sağlamaz.

## Bağlantıyı davetlilere sınırlama

**Yalnızca davetle** görünüm ve veritabanı bağlantılarında kullanılabilir. **Davetliler** alanı belirir: virgül, noktalı virgül veya boşlukla ayrılmış adresleri girin, sonra **Davet et**'e tıklayın.

- Davet etmeden önce bağlantının etkin olması gerekir. Gönderim başına en fazla 50 adres.
- Yalnızca yeni adresler, bağlantıyla birlikte bir e-posta alır.
- Kişinin TblFlow'a giriş yapması gerekir. Hesabı davet edilmediyse **Yalnızca davetle erişim** yazısını görür ve hesap değiştirebilir.
- Veritabanının üyeleri davet olmadan erişir.
- Davetli eklemek veya çıkarmak, çalışma alanını değiştirme yetkisi ister; varsayılan olarak yalnızca sahibe aittir.

## Form herkese açık

Bir Form görünümü, diğer görünümler gibi paylaşılır: **Paylaş** > **Görünümü paylaş** > **Görünümü web'de paylaş**. Bağlantıyı açan herkes formu doldurup gönderebilir; yanıtlar tablonun kayıtları olarak gelir.

**Göndermek için giriş gerekli** seçeneği, kişinin göndermeden önce TblFlow'a giriş yapmasını zorunlu kılar. Bu durumda formun üstünde bir mesaj ve **Giriş yap** düğmesi görünür. **Yalnızca davetle** ile birlikte kullanıldığında, yalnızca davetliler ve veritabanının üyeleri forma erişir.

## Bir uygulamayı yayımlama

Bir uygulamanın düzenleyicisinde **Yayımla** düğmesi **Uygulama yayımı** panelini açar. Burada şunları ayarlarsınız:

| Ayar | Değerler |
|---|---|
| **Erişim** | **Herkese açık: bağlantıya sahip herkes** veya **Davetli: davet edilen kişiler ve veritabanı üyeleri** |
| **Verilerin yazılmasına izin ver** | Varsayılan olarak kapalı: ziyaretçiler yalnızca okuyabilir |

Önerilen erişim varsayılan olarak **Davetli**'dir. **Herkese açık** seçmek onay ister: hesap veya davet olmadan, bağlantıyı alan herkes uygulamayı açar ve uygulamanın gösterdiği verileri görür.

**Yayımla — bağlantı oluştur**'a tıklayın. Panel bağlantıyı gösterir ve kopyalayabilirsiniz. Ardından erişimi ve yazma iznini yeniden yayımlamadan değiştirebilirsiniz.

**Davetli** modunda her kişi kendi TblFlow hesabıyla, parolasız giriş yapar: sihirli bağlantı veya güvenlik anahtarı. Davet edilmişse veya veritabanının üyesiyse girer; değilse sayfa bunu belirtir. **Davetliler** alanı görünüm bağlantılarındaki gibi çalışır, ancak davet etmeden önce uygulamanın yayımlanmış olması gerekir. Paylaşım parolası veya uygulamaya özel bir ziyaretçi hesabı yoktur.

**Özelleştirme** bölümünde bir sekme simgesi (favicon) yükleyebilir ve arama motorlarında ve bağlantı önizlemelerinde gösterilen **Sayfa açıklaması**'nı yazabilirsiniz.

**Yayını kaldır (bağlantıyı iptal eder)** onaydan sonra bağlantıyı kapatır. Yeniden yayımlamak yeni bir bağlantı oluşturur. Yayımlamak, yayını kaldırmak ve erişimi ayarlamak uygulamayı değiştirme yetkisi ister; davetlileri yönetmek ise çalışma alanını değiştirme yetkisi ister.

Uygulamanın kendisini oluşturmak için bkz. [İlk uygulamanızı oluşturun](/tr/docs/build-first-app).

## Özel alan adı

Yayımlanmış bir uygulama, size ait bir alan adının kökünde sunulabilir. Önce bu alan adının çalışma alanı ayarlarında doğrulanması gerekir.

1. Çalışma alanı ayarlarında, **Doğrulanmış alan adları** sekmesinde **Alan adı ekle**'ye tıklayın ve adı girin (örneğin `app.alanadiniz.com`).
2. DNS sağlayıcınızda gösterilen TXT kaydını ekleyin: adı `_tblflow-verify.` ile, değeri `tblflow-verify=` ile başlar.
3. **Doğrula**'ya tıklayın. Alan adı **Doğrulandı** durumuna geçer.
4. Uygulamanın yayımlama panelinde, **Özel alan adı** bölümünde, **Doğrulanmış bir alan adı seçin…** ile alan adını seçin. **Kaldır** onu bağlantıdan ayırır.

Bir alan adı yalnızca tek bir uygulamaya hizmet eder ve yalnızca tek bir çalışma alanında doğrulanabilir. Doğrulanmış alan adı yoksa panel şunu gösterir: «Kullanılabilir doğrulanmış alan adı yok». TXT kaydı alan adının size ait olduğunu kanıtlar; TblFlow'un doğruladığı tek şey budur. Yedi gün sonra, alan adı uygulamayı sunarken kanıt yeniden kontrol edilir: kayıt kaldırılmışsa alan adı yeniden doğrulanmamış duruma döner.

## Ortak çalışanları davet etme

Bir ortak çalışanı davet etmek ona çalışma alanında veya veritabanında bir rol verir; bu bir bağlantı paylaşımı değildir. Her rolün hakları [Yetkiler ve roller](/tr/docs/permissions) sayfasında açıklanmıştır.

- **Çalışma alanı**: çalışma alanının **Davet et** düğmesi, «Çalışma alanını paylaş» penceresi. Çalışma alanının bir ortak çalışanı tüm veritabanlarına erişir.
- **Veritabanı**: veritabanı çubuğundaki davet düğmesi (kullanıcı simgesi, ipucu **Davet et**), veritabanının adının izlediği «Paylaş» penceresi.

Her pencere şunları sunar:

- **E-posta ile davet et**: adresleri girin (her birini Enter veya Boşluk ile onaylayın), bir rol seçin, sonra **Daveti gönder**.
- **Bağlantı ile davet et**: bir rol seçin, **Bağlantı oluştur**. Bağlantıyı açan herkes, giriş yaptıktan sonra bu rolü alır. Bir bağlantının rolü değiştirilebilir ve **Bağlantıyı sil** onu iptal eder. Yalnızca sahip ve varsayılan oluşturucu için ayrılmıştır.
- Hesabınız bir kuruluşa bağlıysa, kuruluşun bir üyesini veya bölümünü ekleme.
- Ortak çalışanların listesi: ad veya e-postaya göre arama, rol değiştirme ve **Ortak çalışanı kaldır**.

## Sırada ne var

- [Yetkiler ve roller](/tr/docs/permissions): her rolün yapabilecekleri, özel roller.
- [İlk uygulamanızı oluşturun](/tr/docs/build-first-app): yayımlanacak uygulamayı oluşturun veya inşa edin.
- [Görünümler ve filtreler](/tr/docs/views-and-filters): paylaşabileceğiniz görünüm türleri.
