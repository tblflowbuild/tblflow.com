---
title: "Otomasyonlar"
translationKey: "automations"
description: "TblFlow otomasyonu: kayıt, form, zamanlama, webhook veya e-posta tetikleyicileri, koşullu adımlar, deneme çalıştırması, yürütme geçmişi ve kotalar."
section: "Kılavuzlar"
order: 3
---

Otomasyon, bir tabloya bağlı bir iş akışıdır: bir tetikleyici, ardından bir dizi adım. Sunucu tarafında çalışır; kimse sekmeyi açık tutmasa bile.

Onu **Yeni otomasyon** ile oluşturursunuz ya da istediğinizi **Yapay zekâ ile oluştur** ile tarif edersiniz: yapay zekâ bir yapılandırma önerir, siz bunu düzenleyicide gözden geçirip ayarlarsınız. Bir anahtar otomasyonu etkinleştirir veya devre dışı bırakır. Tetikleyicisi yapılandırılmadan etkinleştirilemez.

## Tetikleyiciler

| Tetikleyici | Ne zaman çalışır |
| --- | --- |
| **Kayıt oluşturulduğunda** | seçilen tabloya bir satır eklendiğinde |
| **Kayıt güncellendiğinde** | seçilen tablodaki bir satır değiştirildiğinde |
| **Kayıt koşulları karşıladığında** | bir satır tüm koşullarınızı (alan, operatör, değer) karşıladığında |
| **Kayıt silindiğinde** | bir satır silindiğinde |
| **Form gönderildiğinde** | tablodaki bir form gönderildiğinde (belirli bir form görünümü veya hepsi) |
| **Düğmeye tıklandığında** | biri tablodaki bir Düğme alanına tıkladığında (belirli bir alan veya hepsi) |
| **Zamanlanmış saatte** | seçilen aralıkta: dakika, saat, gün, hafta veya ay |
| **Webhook alındığında** | düzenleyicide gösterilen URL'ye bir HTTP çağrısı geldiğinde |
| **Yeni e-posta alındığında** | bağlı bir Gmail hesabının gelen kutusuna yeni bir okunmamış e-posta geldiğinde |
| **Bir bağlayıcıda yeni öğe** | bir bağlayıcının bir listesinde yeni bir öğe göründüğünde |
| **Bir arayüzden** | tablonun oluşturulmuş bir arayüzü otomasyonu başlattığında |

Birkaç ayrıntı:

- **Zamanlama.** Zamanlanmış otomasyonlar çalışma alanının saat diliminde çalışır; çalışma alanınızda saat dilimi yoksa UTC'de. Varsayılan olarak 15 dakikadan kısa aralıklar reddedilir.
- **Webhook.** Çağrı bir `POST` isteğidir ve **X-Webhook-Secret** üstbilgisini taşımalıdır. Gizli anahtar düzenleyicide ayarlanır; geçerli bir gizli anahtar yoksa çağrı reddedilir. Alınan gövde doğrudan değişkenlerin kökünde okunabilir.
- **Gelen e-posta.** Yalnızca gelen kutusundaki yeni okunmamış e-postalar otomasyonu tetikler; otomasyonu etkinleştirdiğinizde zaten orada olanlar yok sayılır. Gmail hesabı **Bağlayıcılar** ekranında bağlanır.
- **Tetikleme zincirleri.** İzlediği tabloya yazan bir adım otomasyonu yeniden tetikleyebilir. Motor, art arda beş kuşağın ötesindeki böyle bir zinciri keser, ama otomasyonu buna bağlı olmayacak şekilde tasarlamak daha iyidir.

## Adımlar

**Adım ekle** menüsü adımları üç ailede toplar.

| Aile | Adımlar |
| --- | --- |
| Yapay zekâ ile oluşturma | **Bir betik çalıştır**, **Slack**, **Microsoft Teams**, **E-posta gönder**, **Yapay zekâ üretimi**, **Kayıt oluştur & güncelle & al**, **HTTP isteği gönder** |
| Elle oluşturma | **Kayıt oluştur**, **Kayıtları al**, **Kaydı güncelle**, **Bir anahtara göre oluştur veya güncelle**, **Yapay zekâ alanını çalıştır**, **Şimdi eşitle**, **Bir web sitesini yönet** |
| Mantık | **Koşullar karşılanırsa** (Ise ve Değilse dalları), **Döngü (her biri için)** |

**Bağlı API ekle** düğmesi, bağlı bir **API çağrısı yap** adımı ekler; bu adım OpenAPI belgelerini kullanarak bağlı bir üçüncü taraf API'sinin bir işlemini çalıştırır.

Düzenleyicide kayıt silme, bekleme veya insan onayı adımı yoktur. Bir yazma işleminden önce insan onayı gerekiyorsa, yazma doğrulamalı bir [ajan](/tr/docs/ai-agents) kullanın.

Her adım tetikleyicinin verilerini ve önceki adımların çıktısını okur. **Değişken ekle** düğmesi, iş akışının o noktasında gerçekten kullanılabilir değerleri sunar. Temel biçimler, tetikleyicinin kaydı için `{{record.fields.<alan kimliği>}}` ve bir adımın çıktısı için `{{steps.<adım kimliği>.<yol>}}`dir. `|` karakterinden sonra eklenen bir filtre bir değeri dönüştürür (tarih, sayı, liste, varsayılan değer, büyük/küçük harf). Hata veren bir adım yürütmeyi durdurur: sonraki adımlar çalıştırılmaz.

**E-posta gönder** adımı bağlı bir Gmail hesabından gönderebilir; hesap seçilmezse gönderim TblFlow'un gönderim hizmetinden yapılır.

## Test etme

**Testi çalıştır** otomasyonu, tetikleyici için örnek verilerle kuru olarak oynatır. Bir pencere her adımın sonucunu gösterir. « Bu bir simülasyondur — hiçbir gerçek veri değiştirilmedi » mesajı bunu hatırlatır. Test, **Test** durumuyla geçmişte görünür.

## Yürütme geçmişi

**Yürütme geçmişi** düğmesi otomasyonun çalıştırmalarını, en yenisi önce olacak şekilde listeler. Her biri durumunu (**Başarılı**, **Hata**, **Çalışıyor** veya **Test**), süresini, başlangıç saatini, tetikleyicisini ve her adım için türünü, durumunu ve bir notu gösterir. Geçmiş son 50 çalıştırmayı tutar. Geçmişten yeniden çalıştırma yoktur: düzeltmeden sonra otomasyonu tetikleyicisiyle yeniden başlatın.

## Kotalar

Aylık çalıştırma sayısı plana bağlıdır. Her tetiklemede bir çalıştırma sayılır, adım sayısı ne olursa olsun. Otomasyonların gönderdiği e-postalar ayrıca sayılır.

| Plan | Aylık çalıştırma | Aylık otomasyon e-postası |
| --- | --- | --- |
| Ücretsiz | 500 | 50 |
| Essential | 25.000 | 2.000 |
| Team | 250.000 | 20.000 |
| Enterprise | sınırsız | sınırsız |

Kendi sunucunuzda barındırırken bu sınırlar uygulanmaz. Ajan kotaları [Yapay zekâ ajanları](/tr/docs/ai-agents) sayfasında ayrıntılıdır.

## Otomasyon mu, ajan mı?

Bir otomasyon, yazdığınız adım dizisini çalıştırır: aynı girdi, aynı yol, aynı sonuç. Kural biliniyorsa bu istediğiniz şeydir.

Bir [ajan](/tr/docs/ai-agents) bir hedeften yola çıkarak adımlarına kendisi karar verir. Kural içeriğe bağlı olduğunda bu istediğiniz şeydir; örneğin türdeş olmayan gelen talepleri sıralamak gibi. İkisi birlikte kullanılabilir: bir ajan, araçlarıyla otomasyonlarınızı listeleyip başlatabilir; yazma doğrulamasına tabi olarak.
