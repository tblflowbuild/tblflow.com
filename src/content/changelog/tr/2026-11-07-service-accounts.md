---
title: "Alan başına hizmet hesapları ve hizmet belirteçleri"
date: 2026-11-07
translationKey: "service-accounts"
type: "feature"
---

Betikler, CI ve entegrasyonlar artık bir kişinin hesabını ödünç almak zorunda değil.

- **Nerede**: alan ayarları, Güvenlik ve denetim, Hizmet hesapları. Alan sahiplerine ayrılmıştır.
- **Roller**: okuyucu, düzenleyici veya oluşturucu. Bir hizmet hesabı koltuk tutmaz.
- **Belirteçler**: yalnızca bu alan için geçerlidir; erişim seçime bağlıdır (salt okunur, kayıtların okunması ve yazılması veya rolün izin verdiği her şey) ve süre 30, 90, 180 veya 365 gündür. Belirteç yalnızca bir kez gösterilir; iptal anında gerçekleşir.
- **Takip**: son kullanım görüntülenir, süre dolmadan önce sahiplere e-posta uyarısı gider, oluşturma ve iptal alanın günlüğüne yazılır.

[TblFlow CLI](/tr/docs/cli)'yi sürekli entegrasyonda kullanmanın önerilen yolu budur.
