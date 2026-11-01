---
title: "Yetkiler ve roller"
translationKey: "permissions"
description: "TblFlow'da yetkileri yönetin: beş varsayılan rol ve hakları, bir çalışma alanında, tabanda veya tabloda özel rol oluşturma ve bilinmesi gereken kurallar."
section: "Kılavuzlar"
order: 7
---

Yetkiler, TblFlow'da kimin neyi görebileceğini, değiştirebileceğini veya yönetebileceğini belirler. Bu sayfa onları **nerede** ve **nasıl** yöneteceğinizi açıklar ve **varsayılan olarak bulunan** rollerin haklarını listeler.

## Sözlük

| Terim | Anlamı |
|---|---|
| **Eylem** | Tek bir hak; örneğin bir kaydı değiştirmek veya bir tabanın izinlerini yapılandırmak. |
| **Varsayılan rol** | Beş sabit rolden biri: sahip, oluşturucu, düzenleyici, yorumcu, görüntüleyici. Değiştirilemezler. |
| **İzin matrisi** | Bir çalışma alanı, taban veya tablo üzerindeki adlandırılmış roller kümesi. Arayüzde « Permission » olarak adlandırılır. |
| **Özel rol** | Bir matriste adlandırdığınız ve seçtiğiniz eylem listesine sahip olan rol. |
| **Atama** | Bir özel rol ile bir kullanıcı arasındaki bağ. |

Özel roller varsayılan rollere **eklenir**: ek haklar verirler, ancak kullanıcının zaten üyesi olmadığı bir çalışma alanına veya tabana asla erişim vermezler.

## Varsayılan roller

### Beş rol

Hiyerarşi şöyledir: sahip, oluşturucu, düzenleyici, yorumcu, görüntüleyici (en çok haktan en aza). Bir kullanıcı, bir çalışma alanının veya tabanın **ortak çalışanı** olarak bir rol edinir: e-postayla davet, davet bağlantısı veya doğrudan ekleme. Bir tabanda, tabanın rolünün hakları ile üst çalışma alanının rolünün hakları **birleşir**.

Sunulabilecek roller düzeye bağlıdır:

- **Çalışma alanı**: beş rolün hepsi.
- **Taban**: oluşturucu, düzenleyici, yorumcu ve görüntüleyici (sahip yok).
- **Tablo**: oluşturucu, düzenleyici ve görüntüleyici.

Sahip, oluşturucu ve düzenleyici rolleri faturalandırılabilir bir koltuk sayılır.

### Her rolün yapabilecekleri

✅ izinli, ❌ reddedilmiş.

| Hak | Sahip | Oluşturucu | Düzenleyici | Yorumcu | Görüntüleyici |
|---|---|---|---|---|---|
| **Çalışma alanı**: oluşturmak, silmek, değiştirmek | ✅ | ❌ | ❌ | ❌ | ❌ |
| Çalışma alanı: okumak | ✅ | ✅ | ✅ | ✅ | ✅ |
| Çalışma alanı: e-postayla davet etmek | ✅ | ✅ | ✅ | ✅ | ✅ |
| Çalışma alanı: davet bağlantısı oluşturmak | ✅ | ✅ | ❌ | ❌ | ❌ |
| Çalışma alanı: rol atamak, izinleri yapılandırmak | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Taban**: oluşturmak, silmek, değiştirmek | ✅ | ✅ | ❌ | ❌ | ❌ |
| Taban: okumak | ✅ | ✅ | ✅ | ✅ | ✅ |
| Taban: e-postayla davet etmek | ✅ | ✅ | ✅ | ✅ | ✅ |
| Taban: davet bağlantısı oluşturmak | ✅ | ✅ | ❌ | ❌ | ❌ |
| Taban: tabloları dışa aktarmak | ✅ | ✅ | ✅ | ✅ | ✅ |
| Taban: tabloları içe aktarmak | ✅ | ✅ | ✅ | ❌ | ❌ |
| Taban: izinleri yapılandırmak | ✅ | ✅ | ❌ | ❌ | ❌ |
| Taban: veri sorguları | ✅ | ✅ | ❌ | ❌ | ❌ |
| Taban: veritabanı bağlantısı | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Tablo**: oluşturmak, değiştirmek, silmek, içe aktarmak | ✅ | ✅ | ❌ | ❌ | ❌ |
| Tablo: okumak, dışa aktarmak | ✅ | ✅ | ✅ | ✅ | ✅ |
| Tablo: çöp kutusunu okumak ve değiştirmek | ✅ | ✅ | ✅ | ❌ | ❌ |
| Tablo: çöp kutusunu boşaltmak | ✅ | ✅ | ❌ | ❌ | ❌ |
| Tablo: izinleri yapılandırmak | ✅ | ✅ | ❌ | ❌ | ❌ |
| Kayıt geçmişi | ✅ | ✅ | ✅ | ❌ | ❌ |
| **Görünüm**: oluşturmak, değiştirmek, silmek, paylaşmak | ✅ | ✅ | ✅ | ❌ | ❌ |
| Görünüm: okumak | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Alan**: oluşturmak, değiştirmek, silmek | ✅ | ✅ | ❌ | ❌ | ❌ |
| Alan: okumak | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Kayıt**: oluşturmak, değiştirmek, silmek | ✅ | ✅ | ✅ | ❌ | ❌ |
| Kayıt: okumak, kopyalamak | ✅ | ✅ | ✅ | ✅ | ✅ |
| Kayıt: yorum yapmak | ✅ | ✅ | ✅ | ✅ | ❌ |
| **Otomasyon**: oluşturmak, değiştirmek, silmek | ✅ | ✅ | ❌ | ❌ | ❌ |
| Otomasyon: okumak | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Bağlayıcı**: oluşturmak, değiştirmek | ✅ | ✅ | ✅ | ❌ | ❌ |
| Bağlayıcı: silmek, katalogdan yüklemek | ✅ | ✅ | ❌ | ❌ | ❌ |
| Bağlayıcı: kendi hesabını bağlamak | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Uygulama**: oluşturmak, değiştirmek, silmek | ✅ | ✅ | ❌ | ❌ | ❌ |
| Uygulama: okumak | ✅ | ✅ | ✅ | ✅ | ✅ |

### Hiçbir çalışma alanı rolünün vermediği haklar

Bazı haklar yukarıdaki rollerden geçmez, herkese kapalıdır:

- **Örnek yönetimi** (yönetim sayfaları, organizasyon şemasının içe aktarılması): yalnızca örneğin yöneticilerine ayrılmıştır.
- **Enterprise işlevleri**: yalnızca Enterprise planına ayrılmıştır.
- **Platform operatörü** (çok kiracılı dağıtım): yalnızca dağıtımın TblFlow operatörüne ayrılmıştır.

## Yetkileri nerede yönetmeli

İki işlem vardır: **varsayılan bir rol vermek** ve **özel bir rol oluşturmak**.

### Varsayılan bir rol vermek

Bir çalışma alanı veya taban düzeyinde, rolünü seçerek bir kullanıcıyı (e-postayla veya bağlantıyla) davet edin. O düzeyde davet edebiliyor olmanız gerekir; bir çalışma alanında rol atamak için de « rol atamak » hakkına sahip olmanız gerekir.

### Özel bir rol oluşturmak

Aynı ekranla üç kapsam vardır:

| Kapsam | Arayüzde nerede | Gerekli hak |
|---|---|---|
| **Çalışma alanı** | Çalışma alanı ayarları, **Permission** sekmesi | Çalışma alanının izinlerini yapılandırmak |
| **Taban** | Taban menüsü, **Permission** girişi (asma kilit simgesi) | Tabanın izinlerini yapılandırmak |
| **Tablo** | Bir tabloya sağ tık, **Tablo izinleri** | Tablonun izinlerini yapılandırmak |

Varsayılan olarak, bir tabanın **Permission** girişi yalnızca sahip ve oluşturucu için görünür. Bir tabloda hedeflenebilecek kullanıcılar **üst tabanın ortak çalışanlarıdır**: bir tablonun kendine ait ortak çalışanı yoktur.

## Özel bir rol oluşturmak, adım adım

1. **Matrisi oluşturun.** İstediğiniz kapsamın Permission ekranında oluşturma düğmesini kullanın. Bir ad yeterlidir, açıklama isteğe bağlıdır. Bir matris birden çok rolü bir araya getirir.
2. **Matrise bir rol ekleyin**: ona bir ad verin, ardından eylemleri işaretleyin. Eylemler katlanabilir gruplar halinde düzenlenmiştir (Tablolar, Alanlar, Görünümler, Kayıtlar, İşbirliği, Taban, Otomasyonlar, Diğer) ve bir arama içerir.
3. **Rolü bir veya birden çok kullanıcıya atayın**; kullanıcılar kapsamın ortak çalışanları arasından seçilir. Etki anında gerçekleşir: kullanıcının hakları atama ve iptal anında yeniden hesaplanır.
4. **Değiştirin veya kaldırın.** Bir rol yeniden adlandırılabilir, eylemleri değiştirilebilir veya silinebilir. Bir atama geri alınabilir. Bir matrisi silmek, rollerini ve atamalarını da siler.

## Bilinmesi gereken kurallar ve sınırlar

- **Yalnızca ekleyici.** Özel bir rol, çalışma alanı veya taban üyeliğinin yerini asla almaz. Bir tabloda, tabanın zaten verdiği eylemlere eylemler ekler.
- **Doğrulanmış eylemler.** Sunucu, resmî listede yer almayan her eylemi reddeder. Özel bir rol, bağlayıcılar üzerindeki hakları ya da platform operatörü haklarını veremez.
- **Kapsam tutarlılığı.** Sunucu, matrisin ilgili kaynağa ve rolün matrise ait olduğunu doğrular.
- **Bir atama benzersizdir**: bir rol ve kullanıcı çifti için yeniden yapmak onu çoğaltmaz.
- **Kişisel erişim belirteci.** Yalnızca sahibinin haklarını kısıtlayabilir, asla genişletemez.
