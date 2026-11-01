---
title: "İlk uygulamanızı oluşturun"
translationKey: "first-app"
description: "Bir TblFlow tabanından iş uygulaması yayınlayın: yapay zeka ile oluşturulmuş veya elle hazırlanmış, ziyaretçi kimlik doğrulaması, veri yazma denetimi ve herkese açık bir bağlantıyla."
section: "Kılavuzlar"
order: 5
---

Bir TblFlow tabanı yalnızca ızgarada gezilebilir değildir: kendi sayfaları, kendi kimlik doğrulaması ve kendi alan adıyla gerçek bir uygulama olarak yayınlanabilir. Bu sayfa, bir uygulama oluşturmanın iki yolunu da ele alır.

## Seçenek 1 — Yapay zekaya anlatın

Tabanın sohbet panelinde **Tam uygulama**'yı seçin, ardından istediğinizi anlatın: "Bir gösterge paneli, hesap listesi ve Kanban olarak fırsat hattı olan bir CRM." Yapay zeka, mevcut tablolarınızdan bir sayfa ve blok yapısı önerir. Öneriyi onaylayıp **Yayınla**'ya tıklamadıkça hiçbir şey yayınlanmaz.

Bu en hızlı yoldur ve TblFlow ana sayfasının "Üretim hattı" bölümünde ayrıntılı olarak anlattığı yoldur.

## Seçenek 2 — Elle oluşturun

Tabandan **Yeni arayüz**. Bir arayüz sayfalardan, her sayfa da bloklardan oluşur: sayısal metrikler, bir tabloya bağlı liste veya ızgara, bir arama kutusu, bir Kanban. Her blok mevcut bir tabloyu veya görünümü işaret eder; yani veriyi çoğaltmazsınız, sahnelersiniz.

Bir blok ekleyin, kaynağını seçin (bir tablo veya belirli bir görünüm, önceden filtrelenmiş bir Kanban ya da Takvim görünümü dahil), ardından düzenini ayarlayın. Sol gezinti, oluşturduğunuz sırayla sayfa sayfa şekillenir.

## Yayınlama

Arayüzün üstündeki **Yayınla** düğmesi üç ayar açar:

- **Parola** — boş bırakılırsa uygulamaya bağlantıya sahip herkes ulaşabilir. Belirlenirse (veya oluşturulursa) girmek için parola gerekir.
- **Veri yazmaya izin ver** — varsayılan olarak kapalıdır. Salt okunur bir uygulama hiçbir şeyi bozamaz; bunu yalnızca ziyaretçilerin uygulamadan kayıt oluşturması veya düzenlemesi gerçekten gerekiyorsa açın.
- **Ziyaretçi hesapları** — bu uygulamaya özgü, TblFlow hesaplarından yalıtılmış bir e-posta + parola hesap sistemi açar. Dışarıdan bir müşterinin, TblFlow hesabınıza hiç dokunmadan kendi alanında oturum açmasını sağlayan budur.

**Yayınla — herkese açık bağlantıyı oluştur**'a tıklamak hemen çalışan bir URL üretir. Business planı özel bir alan adı ekler.

## Kod sizde kalır

Yayınlanan bir uygulama kara kutu değil, gerçek React ve Tailwind kodudur: **Kod → Kodu dışa aktar** hepsini alır. Tersine, **Kodu içe aktar**, bir yapay zeka üretiminden sonra elle ayarlamak üzere mevcut bir tabandan başlamanızı sağlar.

## Sonraki adımlar

- [Otomasyonlar](/tr/docs/automations) — iş akışlarını ziyaretçilerinizin yaptıklarına bağlayın.
- [Yapay zeka ajanları](/tr/docs/ai-agents) — yinelenen bir görevi uygulamada sunmak yerine devredin.
- [Tablolar ve alanlar](/tr/docs/tables-and-fields) — yayınlamadan önce veri yapısını yeniden gözden geçirin.
