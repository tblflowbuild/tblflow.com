---
title: "Otomasyonlar"
translationKey: "automations"
description: "Bir TblFlow iş akışı oluşturma: olay ve cron tetikleyicileri, koşullu adımlar, dışarıya yapılan çağrılar ve insan onayı adımları, yeniden oynatılabilir bir çalıştırma günlüğüyle."
section: "Kılavuzlar"
order: 3
---

Otomasyon, bir tabana bağlı bir iş akışıdır: bir tetikleyici, ardından bir adım dizisi. Sunucu tarafında çalışır; kimsenin sekme açık tutmadığı zamanlarda da.

## Tetikleyiciler

| Tetikleyici | Ne zaman çalışır |
| --- | --- |
| Kayıt oluşturuldu | izlenen tabloya bir satır eklendiğinde |
| Kayıt güncellendi | izlenen bir alanın değeri değiştiğinde |
| Kayıt koşulu karşılıyor | bir satır bir filtrenin kapsamına girdiğinde |
| Cron | belirtilen zamanlamada (cron ifadesi, taban saat dilimi) |
| Webhook | oluşturulan URL'ye bir HTTP çağrısı ulaştığında |
| Manuel | biri bir Düğme alanına tıkladığında |

Bir "güncellendi" tetikleyicisini gerçekten önemsediğiniz alanlarla sınırlamak klasik döngüyü önler: izlediği tabloya yazan ve kendini yeniden tetikleyen bir otomasyon.

## Adımlar

Kullanılabilir adımlar: kayıt oluşturma / güncelleme / silme, kayıt bulma, e-posta gönderme, bir URL'yi çağırma, koşullu dal çalıştırma, bir liste üzerinde yineleme, bekleme, onay isteme, bir ajanı çağırma.

Her adım öncekilerin çıktısını alır. Bir değere `{{step.field}}` ile başvurursunuz ve düzenleyici, iş akışının o noktasında gerçekten var olan alanları sunar.

## İnsan onayı

**Onay** adımı çalıştırmayı duraklatır ve belirlediğiniz kişileri bilgilendirir. İş akışı kabul edildiğinde devam eder, reddedildiğinde durur ve belirlediğiniz zaman aşımından sonra sona erer.

Dış dünyayla konuşan her şeyin önüne koyun: müşteri e-postası, ücretlendirilen API çağrısı, yayın. İçeride hata yapan bir otomasyon düzeltilebilir; bir müşteride hata yapan ise geri almak çok daha zordur.

## Çalıştırma günlüğü

Her çalıştırma; tetikleyicisi, her adımın girdisi ve çıktısı ve varsa hatanın nedeniyle birlikte saklanır. Başarısız bir çalıştırma, nedeni düzelttikten sonra, zaten başarılı olan adımları yeniden çalıştırmadan günlükten yeniden oynatılabilir.

## Kotalar

Aylık çalıştırma sayısı plana bağlıdır; Business planından itibaren ve kendi sunucunuzda barındırırken sınırsızdır. Bir çalıştırma, kaç adım içerirse içersin, bir tetikleyicidir.

## Otomasyon mu, ajan mı?

Otomasyon, yazdığınız diziyi çalıştırır: aynı girdi, aynı yol, aynı sonuç. Kural bilindiğinde istediğiniz budur.

Bir [ajan](/tr/docs/ai-agents) adımlarına bir hedeften yola çıkarak kendisi karar verir. Kural içeriğe bağlı olduğunda istediğiniz budur; örneğin türdeş olmayan gelen talepleri önceliklendirmek. İkisi birlikte çalışır: bir otomasyon, diğer adımların yanında bir adım olarak bir ajanı çağırabilir.
