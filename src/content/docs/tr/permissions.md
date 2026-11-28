---
title: "Yetkiler ve roller"
translationKey: "permissions"
description: "TblFlow'da yetkileri yönetin: beş varsayılan rol ve hakları, bir çalışma alanında, veritabanında veya tabloda özel rol oluşturma ve bilinmesi gereken kurallar."
section: "Kılavuzlar"
order: 7
---

Yetkiler, TblFlow'da kimin neyi görebileceğini, değiştirebileceğini veya yönetebileceğini belirler. Bu sayfa onları **nerede** ve **nasıl** yöneteceğinizi açıklar ve **varsayılan olarak bulunan** rollerin haklarını listeler.

## Sözlük

| Terim | Anlamı |
|---|---|
| **Eylem** | Tek bir hak, örneğin bir kaydı değiştirmek veya bir veritabanının izinlerini yapılandırmak. |
| **Varsayılan rol** | Beş sabit rolden biri: sahip, oluşturucu, düzenleyici, yorumcu, okuyucu. Bunlar değiştirilemez. |
| **İzin matrisi** | Bir çalışma alanında, veritabanında veya tabloda adlandırılmış roller kümesi. Arayüzde « Permission » olarak adlandırılır. |
| **Özel rol** | Bir matriste adını verdiğiniz ve eylem listesini seçtiğiniz rol. |
| **Atama** | Bir özel rol ile bir kullanıcı arasındaki bağlantı. |

Özel roller varsayılan rollere **eklenir**: hakları, kullanıcının rolünün haklarıyla toplanır, onların yerini almaz. Atama ekranı yalnızca kapsamdaki iş birlikçilerini listeler.

## Varsayılan roller

### Beş rol

Hiyerarşi şöyledir: sahip, oluşturucu, düzenleyici, yorumcu, okuyucu (en çok haktan en aza doğru). Bir kullanıcı, bir çalışma alanının veya veritabanının **iş birlikçisi** olduğunda bir rol kazanır: e-posta daveti, davet bağlantısı ya da kuruluşun bir üyesini veya bir bölümünü ekleyerek. Bir veritabanında, veritabanının rolünün hakları ile üst çalışma alanının rolünün hakları **birleşir**.

Önerilebilecek roller seviyeye göre değişir:

- **Çalışma alanı**: beş rol.
- **Veritabanı**: oluşturucu, düzenleyici, yorumcu ve okuyucu (sahip yok).
- **Tablo**: oluşturucu, düzenleyici ve okuyucu.

Sahip, oluşturucu ve düzenleyici rolleri faturalanabilir bir koltuk sayılır.

### Her rolün yapabildikleri

✅ izinli, ❌ reddedildi.

| Hak | Sahip | Oluşturucu | Düzenleyici | Yorumcu | Okuyucu |
|---|---|---|---|---|---|
| **Çalışma alanı**: oluşturma, silme, değiştirme | ✅ | ❌ | ❌ | ❌ | ❌ |
| Çalışma alanı: okuma | ✅ | ✅ | ✅ | ✅ | ✅ |
| Çalışma alanı: e-postayla davet etme | ✅ | ✅ | ✅ | ✅ | ✅ |
| Çalışma alanı: davet bağlantısı oluşturma | ✅ | ✅ | ❌ | ❌ | ❌ |
| Çalışma alanı: izinleri yapılandırma | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Veritabanı**: oluşturma, silme, değiştirme | ✅ | ✅ | ❌ | ❌ | ❌ |
| Veritabanı: okuma | ✅ | ✅ | ✅ | ✅ | ✅ |
| Veritabanı: e-postayla davet etme | ✅ | ✅ | ✅ | ✅ | ✅ |
| Veritabanı: davet bağlantısı oluşturma | ✅ | ✅ | ❌ | ❌ | ❌ |
| Veritabanı: tabloları dışa aktarma | ✅ | ✅ | ✅ | ✅ | ✅ |
| Veritabanı: tabloları içe aktarma | ✅ | ✅ | ✅ | ❌ | ❌ |
| Veritabanı: izinleri yapılandırma | ✅ | ✅ | ❌ | ❌ | ❌ |
| Veritabanı: veri sorguları | ✅ | ✅ | ❌ | ❌ | ❌ |
| Veritabanı: veritabanı bağlantısı | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Tablo**: oluşturma, değiştirme, silme, içe aktarma | ✅ | ✅ | ❌ | ❌ | ❌ |
| Tablo: okuma, dışa aktarma | ✅ | ✅ | ✅ | ✅ | ✅ |
| Tablo: çöp kutusunu okuma ve değiştirme | ✅ | ✅ | ✅ | ❌ | ❌ |
| Tablo: çöp kutusunu boşaltma | ✅ | ✅ | ❌ | ❌ | ❌ |
| Tablo: izinleri yapılandırma | ✅ | ✅ | ❌ | ❌ | ❌ |
| Kayıt geçmişi | ✅ | ✅ | ✅ | ❌ | ❌ |
| **Görünüm**: oluşturma, değiştirme, silme, paylaşma | ✅ | ✅ | ✅ | ❌ | ❌ |
| Görünüm: okuma | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Alan**: oluşturma, değiştirme, silme | ✅ | ✅ | ❌ | ❌ | ❌ |
| Alan: okuma | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Kayıt**: oluşturma, değiştirme, silme | ✅ | ✅ | ✅ | ❌ | ❌ |
| Kayıt: okuma, kopyalama | ✅ | ✅ | ✅ | ✅ | ✅ |
| Kayıt: yorum yapma | ✅ | ✅ | ✅ | ✅ | ❌ |
| **Otomasyon**: oluşturma, değiştirme, silme | ✅ | ✅ | ❌ | ❌ | ❌ |
| Otomasyon: okuma | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Bağlayıcı**: oluşturma, değiştirme | ✅ | ✅ | ✅ | ❌ | ❌ |
| Bağlayıcı: silme, katalogdan kurma | ✅ | ✅ | ❌ | ❌ | ❌ |
| Bağlayıcı: kendi hesabını bağlama | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Uygulama**: oluşturma, değiştirme, silme | ✅ | ✅ | ❌ | ❌ | ❌ |
| Uygulama: okuma | ✅ | ✅ | ✅ | ✅ | ✅ |

### Hiçbir çalışma alanı rolünün vermediği haklar

Bazı haklar yukarıdaki roller üzerinden verilmez, herkese reddedilir:

- **Örnek yönetimi** (yönetim sayfaları, kurum şemasını içe aktarma): yalnızca örnek yöneticilerine ayrılmıştır.
- **Kurum yapılandırması** (« enterprise » eylemleri): hiçbir çalışma alanı rolü bunları taşımaz ve özel bir rol bunları veremez.

## Yetkileri nerede yönetirsiniz

İki işlem vardır: **varsayılan bir rol vermek** ve **özel bir rol oluşturmak**.

### Varsayılan bir rol vermek

Bir çalışma alanı veya veritabanı düzeyinde, bir kullanıcıyı (e-posta ile ya da bağlantıyla) rolünü seçerek davet edin. Bu düzeyde davet etme hakkınız olmalıdır (tabloya bakın: bağlantıyla davet yalnızca sahip ve oluşturucuya ayrılmıştır).

### Özel bir rol oluşturmak

Aynı ekranla üç kapsam vardır:

| Kapsam | Arayüzde nerede | Gereken hak |
|---|---|---|
| **Çalışma alanı** | Çalışma alanı ayarları, **Permissions** sekmesi | Çalışma alanının izinlerini yapılandırma |
| **Veritabanı** | Veritabanının simgeleri, **Permission** (kilit) | Veritabanının izinlerini yapılandırma |
| **Tablo** | Tablo menüsü, **Permissions** girişi (kilit) | Tablonun izinlerini yapılandırma |

Varsayılan olarak, bir veritabanının **Permission** girişi yalnızca sahip ve oluşturucuya görünür ve **Team** veya üstü bir paket gerektirir: bu paketin altında, girişte bir paket rozeti bulunur ve yükseltmeye götürür. Bir tablo için hedeflenebilecek kullanıcılar **üst veritabanının iş birlikçileridir**: bir tablonun kendi iş birlikçisi yoktur.

## Adım adım özel rol oluşturma

1. **Matrisi oluşturun.** İstediğiniz kapsamın Permission ekranında **New permission** düğmesine tıklayın. Bir ad yeterlidir, açıklama isteğe bağlıdır. Bir matris birden çok rolü bir araya getirir.
2. **Bir rol ekleyin** (**Add role**): matrise bir ad verin, ardından eylemleri işaretleyin. Eylemler, aranabilir ve daraltılabilir gruplar halinde düzenlenmiştir (Tables, Fields, Views, Records, Collaboration, Base, Automations, Other).
3. **Rolü atayın** (**Assign**): kapsamın iş birlikçileri arasından seçilen bir veya birden çok kullanıcıya atayın. Etki anındadır: atama ve iptal anında kullanıcının hakları yeniden hesaplanır.
4. **Değiştirin veya kaldırın.** Bir rolün adı değiştirilebilir, eylemleri değiştirilebilir veya silinebilir. Bir atama geri alınabilir. Bir matrisi silmek, onun rollerini ve atamalarını da siler.

## Bilinmesi gereken kurallar ve sınırlar

- **Yalnızca ekleme.** Özel bir rolün hakları, varsayılan rolün haklarına eklenir, onları kaldırmaz. Bir tabloda, veritabanının zaten verdiği haklara eklenirler.
- **Doğrulanmış eylemler.** Sunucu, resmi listeye ait olmayan her eylemi reddeder. Ayrıca çalışma alanı yönetimini (çalışma alanını oluşturma, silme veya değiştirme, rol atama, çalışma alanının izinlerini yapılandırma) ve örnek ile kurum eylemlerini de reddeder. Diğer eylemler, bağlayıcıların eylemleri ve bir çalışma alanı ayarını açanlar (bildirimler, e-posta, alan adları, yapay zeka) dahil, verilebilir.
- **Kapsam tutarlılığı.** Sunucu, matrisin ilgili kaynağa ait olduğunu ve rolün matrise ait olduğunu denetler.
- **Bir atama tekildir**: bir rol ile bir kullanıcı çifti için atama yeniden yapılsa bile çoğaltılmaz.
- **Kişisel erişim belirteci.** Yalnızca sahibinin haklarını kısıtlayabilir, asla genişletemez.
