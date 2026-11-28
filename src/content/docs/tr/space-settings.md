---
title: "Alanlar ve alan ayarları"
translationKey: "space-settings"
description: "Alan oluşturun, veritabanlarını klasörlere koyun; üyeler, alan adları, yapay zekâ, webhook'lar, denetim, RGPD ve AI Act ayarlarını gezin."
section: "Kılavuzlar"
order: 17
---

Bir **alan**, veritabanlarını ve işbirlikçileri bir araya getirir. Bu sayfa alanlar arasında nasıl geçileceğini, veritabanlarının klasörlere nasıl yerleştirileceğini ve alan ayarlarındaki her sekmenin neyi içerdiğini anlatır. Yalnızca hesabınızla ilgili ayarlar [Hesap ve güvenlik](/tr/docs/account-security) sayfasındadır.

## Alanlar

Geçerli alanın adı sol üstte görünür. Açmak için üzerine tıklayın; iki sütunlu bir menü açılır.

- **Sağ sütun**: alanlarınızın listesi ve bir arama alanı. Geçerli alanın yanında bir onay işareti vardır, bir yıldız ile bir alanı sabitleyebilirsiniz ve alttaki **Alan oluştur** bir ad alanı olan bir onay penceresi açar. Alanı boş bırakırsanız TblFlow önerilen adı kullanır. Alan oluşturulunca açılır.
- **Sol sütun**: alanın eylemleri: **Alan haritası**, **Süreç haritası** (bkz. [Süreç haritası](/tr/docs/process-map)), **Veritabanı oluştur**, **Şablon**, **İçe aktar**, **DocIndex**, **Bağlayıcılar**, **Çöp Kutusu** ve **Alan ayarları**. **İçe aktar** yalnızca alanı düzenleyebilen kişilere görünür, **Veritabanı oluştur** veritabanı oluşturma hakkı olmadan etkin değildir, **Alan ayarları** ise sahip ile bir ayarın devredildiği bir rol için görünür.

Bir alanın sayfası kendi veritabanlarını listeler. Sıralama seçici **Yeni** ve **Elle sıralama** seçeneklerini sunar: elle sıralamada, veritabanlarını düzenleme yetkisi olan bir rol sürükle-bırakla yeniden sıralayabilir.

Bir alanı silmek için **Genel** sekmesini kullanın (aşağıya bakın); geri yüklemek için **Çöp Kutusu**na gidin: bkz. [İçe aktarma, dışa aktarma ve çöp kutusu](/tr/docs/import-export-trash).

## Veritabanı klasörleri

Klasörler, bir alanın veritabanlarını düzenler. Klasörler **ortaktır**: alanın tüm üyeleri bunları görür. Liste görünümünde gösterilirler.

| Eylem | Nasıl |
|---|---|
| Klasör oluşturma | Listenin üstündeki çubukta **Yeni klasör**. |
| Alt klasör oluşturma | Bir klasörün üzerine gelin, **Yeni alt klasör** simgesi. |
| Yeniden adlandırma | Klasör adına çift tıklayın. |
| Veritabanını yerleştirme | Veritabanını klasörün üzerine sürükleyin. **Bu klasörden çıkmak için buraya bırakın** veritabanını köke geri koyar. |
| Silme | Klasörün üzerine gelin, onaydan sonra **Klasörü sil** simgesi. |

Birkaç kural:

- Yalnızca alanı düzenleyebilen kişi (sahip) klasörleri yönetir.
- En fazla iki düzey vardır: bir alt klasör başka bir klasör içeremez ve alt klasörü olan bir klasör başka bir klasörün içine konulamaz.
- Bir alanda en fazla 500 klasör olabilir. Aynı düzeydeki iki klasör aynı adı taşıyamaz.
- Bir klasörü silmek alt klasörlerini de siler, ancak **veritabanlarını silmez**: veritabanları köke çıkar.

## Alan ayarlarını açma

Alan menüsünde **Alan ayarları**'na tıklayın. Pencere, alanın ayarlarını kişisel ayarlarınızın yanında gösterir.

Kim neyi görür:

- **sahip** tüm sekmeleri görür;
- bir **devredilmiş rol** (özel rol) yalnızca kendisine devredilen sekmeleri görür, bkz. [Yetkiler ve roller](/tr/docs/permissions);
- alanın atanmış **DPO**'su **AI Act** ve **Kişisel veriler (RGPD)** sekmelerini görür (RGPD görünümü onun için salt okunurdur);
- **Marka** sekmesi alanın tüm üyeleri tarafından okunabilir.

Dört ayar eylemi özel bir role devredilebilir:

| Devredilen eylem | Açılan sekmeler |
|---|---|
| `space\|settings_notifications` | **Bildirimler** |
| `space\|settings_mail` | **E-posta** |
| `space\|settings_domains` | **Doğrulanmış alan adları** |
| `space\|settings_ai` | **Yapay zekâ ayarları** ve **Web araması** |

## Genel

Alanın adı, üzerine tıklanarak değiştirilir; alan kimliği bir kopyalama düğmesiyle gösterilir. **Tehlikeli bölge** alanında **Alanı sil** bulunur; bunu yalnızca alanı silme hakkı olan kişi kullanabilir. Onay penceresi **Çöp kutusuna taşı** seçeneğini sunar.

Bulutta, Essential veya Team planındaki bir alanın silinmesi reddedilir: « Bu alanın etkin bir aboneliği var. Alanı silmeden önce aboneliği iptal edin. »

## İşbirlikçiler

Bu sekme alanın işbirlikçilerini rolleriyle listeler ve **Davet et** düğmesini içerir. E-posta ile (**E-postayla davet et**, adresler Enter ile ayrılır) ya da bağlantıyla (**Bağlantıyla davet et**) davet edebilirsiniz. Alanın bir işbirlikçisi, o alanın tüm veritabanlarına erişir. Oluşturulan davet bağlantıları listelenir ve silinebilir; **İşbirlikçiyi sil** bir kişiyi çıkarır. Roller ve hakları [Yetkiler ve roller](/tr/docs/permissions) sayfasında ayrıntılıdır.

## Yetkiler

Bu sekme alanın özel rol matrislerini yönetir. Bkz. [Yetkiler ve roller](/tr/docs/permissions).

## Abonelik ve yapay zekâ tüketimi

**Abonelik** ve **Yapay zekâ tüketimi** sekmeleri [Planlar ve limitler](/tr/docs/plans-limits) sayfasında açıklanmıştır.

## Doğrulanmış alan adları

Doğrulanmış bir alan adı, yayımlanmış bir uygulamayı kendi adresinizde sunar.

1. **Alan adı ekle**'ye tıklayın, ardından `app.alanadiniz.com` gibi bir ad girin.
2. TblFlow, alan adı sağlayıcınızda oluşturmanız gereken bir DNS TXT kaydını gösterir: adı `_tblflow-verify.` ile alan adının birleşimidir, değeri `tblflow-verify=` ile başlar.
3. **Doğrula**'ya tıklayın. Alan adı **Doğrulandı** durumuna geçer.
4. Alan adını, uygulamanın düzenleyicisindeki **Yayımla** sekmesinden bir uygulamaya bağlayın. Paylaşımı etkinse, alan adının kökünü ziyaret etmek uygulamayı gösterir.

DNS kanıtı yedi gün sonra yeniden kontrol edilir: kayıt kaldırılmışsa alan adı yeniden doğrulanmamış duruma döner ve uygulamayı sunmayı bırakır. **Bu alan adını kaldır** onu siler. Ayrıca bkz. [Paylaşım ve yayımlama](/tr/docs/sharing-publishing).

## Yapay zekâ ayarları

Bu sekme alanın yapay zekâsını yapılandırır. Ayar, alanın tüm işbirlikçileri için geçerlidir.

- **Sağlayıcılar**: kendi model sağlayıcı anahtarlarınızı ekleyin. Anahtarlar durağan halde şifrelenir ve asla açık metin olarak yeniden görünmez. Her sağlayıcı test edilebilir, düzenlenebilir veya silinebilir.
- **Modeller ve yönlendirme**: bir sağlayıcı kullanılabilir olduğunda sohbet modelini, katmanları (hafif, standart, büyük), görsel, ses ve video modellerini ve gömme sağlayıcısını seçersiniz.
- **Sistem örneğinin varsayılan modellerini kullan**: kapalıyken alan yalnızca sizin anahtarlarınızı kullanır. Açıkken, anahtar yoksa yayıncının anahtarlarını kullanabilir.
- **Tam uygulamada API bağlayıcılarını kullan**: kapalıyken tam uygulama üretimi alana bağlı hiçbir API'yi çağırmaz.

### Özel sağlayıcı veya model ekleme

Bu ayarları yalnızca alanın sahibi değiştirebilir. **Sağlayıcılar** bölümünde **LLM sağlayıcısı ekle**, bir form açar:

- **Ad**: sağlayıcının görünen adı;
- **Sağlayıcı türü**: OpenAI, Anthropic, Google, Azure, Mistral, DeepSeek, OpenRouter, Ollama, LM Studio, Unsloth, **OpenAI Compatible** ve diğerleri. Seçilen türe göre bir **Temel URL** örneği gösterilir;
- **API anahtarı**: LM Studio için gerekmez;
- **Modeller**: önerilecek model adları. Türe göre **Modelleri yükle** (Ollama, LM Studio) veya **models.dev'den yükle** listeyi doldurur, **Algıla** ise girilmiş modellerin özelliklerini tamamlar.

**Test**'e tıklayın: TblFlow girilen her modeli dener. Test başarılı olunca (**Test başarılı**) **Ekle** düğmesi belirir. Eklenen bir sağlayıcı kalem simgesiyle düzenlenir, çöp kutusu simgesiyle kaldırılır.

Kendi bilgisayarınızda kurulu Ollama, LM Studio ve Unsloth için: barındırılan bir TblFlow örneğinde « localhost » sizin bilgisayarınızı değil, TblFlow sunucusunu gösterir. Sunucunuzu HTTPS ile açın ve genel adresini **Temel URL** alanına yapıştırın. Bir belirteçle korunan bir proxy üzerinden açılmış Ollama'yı, bu belirteci **API anahtarı** olarak girerek kullanın.

Kendi anahtarınızla yapılan çağrılar TblFlow yapay zekâ kredilerinden düşmez. Ayrıca bkz. [Yapay zekâ ajanları](/tr/docs/ai-agents).

## Web araması

Asistanın ve alanın ajanlarının web'de arama yapmasını sağlar. Bir Tavily API anahtarı girin: kaydedilmeden önce test edilir (**Geçerli anahtar** veya **Geçersiz anahtar**). Kendi anahtarınız yoksa ve bir sistem örneğinin web araması varsa, alan onu kullanır; **Yedek olarak sistem anahtarını kullan** seçeneğini kapatmadığınız sürece.

## Bildirimler

Alanın bildirimlerini bir mesajlaşma kanalına iletir: **Slack**, **Microsoft Teams** ve **Google Chat**. Her hizmetin gelen webhook adresini yapıştırın. Bu adres bir sırdır: kaydedildikten sonra yeniden gösterilmez; doldurulmuş bir alan onu değiştirir.

İletilen bildirimler şunlardır: anmalar, yorumlar, bir dışa aktarmanın bitişi, bir otomasyonun başarısızlığı, bir yapay zekâ üretiminin başarısızlığı, faturalama ve sistem bildirimleri.

**Yedek olarak sistem webhook'larını kullan** anahtarı, alanın kendi webhook'u yokken sistem webhook'larının kullanılıp kullanılmayacağını belirler. Uygulamak için **Kaydet**'e tıklayın.

## E-posta

Alanın **otomasyonlarından** giden e-postaların SMTP sunucusunu yapılandırır: **SMTP sunucusu**, **Bağlantı noktası**, **Gönderen adresi**, **Gönderen adı**, **Kullanıcı** ve **Parola**. Parola bir daha gösterilmez. Davetler gibi TblFlow sistem e-postaları bu sunucudan geçmez. **Yedek olarak sistem SMTP'sini kullan** anahtarı, webhook'lardakiyle aynı işlevi görür. Bkz. [Otomasyonlar](/tr/docs/automations).

## Organizasyon şeması

Alanın organizasyon yapısını yönetir: ağaç biçiminde **departmanlar**, üyeleri ve her kişinin kartında girilen yöneticiye göre hesaplanan bir organizasyon şeması. Bir kartta görev, yönetici, işe giriş tarihi, ülke, istihdam durumu, çıkış tarihi, çalışma oranı ve konum bulunur. Sekme dışa aktarmaya ve CSV dosyası içe aktarmaya izin verir: önce **Önizleme**'ye tıklayın; onaylayana kadar hiçbir şey yazılmaz.

## Marka

Marka adı ve tasarım sistemi (renkler, tipografi, bileşenler, illüstrasyonlar), alan için üretilen uygulamaları, arayüzleri ve belgeleri yönlendirir. Markayı yalnızca sahip değiştirebilir; diğer üyeler onu görüntüleyebilir ve `design.md` dosyasını dışa aktarabilir. **Sistem örneğinin markasıyla tamamla**, sizin doldurmadığınız alanları sistem örneğinden alır.

## Güvenlik ve denetim

Yalnızca alanın sahibine açıktır.

- **Alan günlüğü**: kimin neyi yaptığı; **Ne zaman**, **Olay**, **Kullanıcı**, **Kaynak** ve **Ayrıntı** sütunlarıyla. Olaya ve tarih aralığına göre (**Başlangıç**, **Bitiş**) filtreleyin, ardından **CSV olarak dışa aktar**: dışa aktarma filtreyi korur ve 5 000 satırda durur. Altı aydan eski kayıtlar otomatik olarak temizlenir; RGPD taleplerine ve silmelere bağlı olaylar bunun dışındadır.
- **Ayrıntılı MCP çağrı günlüğü**: varsayılan olarak kapalıdır. Bir yapay zekâ asistanının (MCP) veya CLI'nin her çağrısı her zaman aracı, sonucu, süresi ve yazarıyla günlüğe kaydedilir. Açıkken günlük ayrıca etkilenen nesnelerin kimliklerini tutar. İçerikler (hücre değerleri, sorgular, ajan yönergeleri) asla saklanmaz; yalnızca boyutları saklanır. Varsayılan olarak bu kayıtlar 180 gün sonra silinir. Bkz. [MCP sunucusu](/tr/docs/mcp-server).
- **Servis hesapları**: bir betik veya sürekli entegrasyon zincirine, hiçbir kişiye bağlı olmayan bir alan erişimi verir. Bir rol seçin (**Okuyucu**, **Düzenleyici** veya **Oluşturucu**), ardından bir erişim düzeyiyle (**Yalnızca okuma**, **Kayıt okuma ve yazma** veya **Rolün izin verdiği her şey**) ve bir geçerlilik süresiyle bir belirteç çıkarın. Belirteç yalnızca bir kez gösterilir. **İptal et** onu hemen kullanılamaz kılar. Bkz. [TblFlow CLI](/tr/docs/cli).

## AI Act

Sahip ve DPO'ya açıktır. **Yapay zekâ kullanımlarım** sekmesi, alanda oluşturulan yapay zekâ kullanımlarını envanterler: yapay zekâ alanı, ajan, yapay zekâ adımı içeren otomasyon, MCP açığa çıkarımı, belge arama, sohbet ve üretim. Her kullanımın bir risk kategorisi (**Yasak**, **Yüksek risk**, **Şeffaflık**, **Minimal**, **Değerlendirilmemiş**), bir durumu (**Güncel**, **Gözden geçirilmeli**, **Yıllık inceleme gerekli**) ve düzeltilmesi gereken maddelerin listesi vardır.

**Amacı tanımla**, kısa dört soru sorar ve düzeltebileceğiniz bir kategori önerir. **İncelendi olarak işaretle** incelemeyi yeniler. Uyarılar hiçbir şeyi engellemez. **TblFlow yapay zekâ işlevleri** sekmesi TblFlow'un sağladığı yapay zekâ işlevlerini sunar.

Bu envanter incelenmesi gereken kullanımları bulmanıza yardımcı olur; kendi değerlendirmenizin yerini tutmaz.

## Kişisel veriler (RGPD)

Sahibe açıktır; DPO için salt okunur bir görünüm vardır. Dört sekme bulunur:

- **Envanter**: her alanı sınıflandırın (**Kişisel değil**, **Kişisel**, **Doğrudan tanımlayıcı**, **Hassas (md. 9)**), bir amaç ve gün cinsinden saklama süresiyle. **Öner** bir kategori önerir; bu, sizin onayınız olmadan asla uygulanmaz. **Madde 30 kaydı (CSV)** kaydı dışa aktarır.
- **Günlük**: kişisel alan içeren tablolara yapılan okumalar, dışa aktarmalar ve değişiklikler ile kişilerin talepleri.
- **Talepler**: bir kişiyi e-postasına, adına veya kimliğine göre arayın; alanın tüm veritabanlarındaki metin alanları taranır (en az 3 karakter). Bulunan satırları **Dışa aktar (CSV)** veya **Seçileni sil** (yalnızca sahip) ile işleyebilirsiniz. Silinen satırlar çöp kutusuna gider; geçmişteki eski değerleri de silinir.
- **DPO**: sahip, üyeler arasından bir DPO atar. DPO salt okunur görünümü inceler ve veritabanları üzerinde hiçbir değişiklik hakkı yoktur.

## Ön üretim

Sahibe açıktır; Team ve Enterprise planlarında kullanılabilir. Ön üretim, değişiklikleri denemek için alanın bir kopyasıdır. **Ön üretimi oluştur**, **Ön üretimi aç**, **Üretimden yenile** (yayımlanmamış değişiklikler kaybolur) ve **Üretime yayımla** seçeneklerini kullanabilirsiniz. Üretime yalnızca yapı ve mantık yayımlanır, verilerin hiçbir zaman yayımlanmaz: tablolar, alanlar, görünümler, otomasyonlar, ajanlar ve uygulamalar. İki tarafta da değiştirilmiş bir öğe çakışma olarak işaretlenir ve yayımlama engellenir.

## Eklentiler

Alana kurulmuş üçüncü taraf MCP sunucularını listeler. Kurulum sırasında, istenen izinleri gösteren bir onay ekranı çıkar. Bu izinleri daha sonra etkinleştirebilir ya da iptal edebilirsiniz.
