---
title: "İlk uygulamanızı oluşturun"
translationKey: "first-app"
description: "TblFlow veritabanından iş uygulaması oluşturun, yapay zekâyla üretin ya da düzenleyicide kurun; davetle veya herkese açık erişimle yayımlayın."
section: "Kılavuzlar"
order: 5
---

Bir TblFlow veritabanı yalnızca tabloda görüntülenebilir değildir: kendi sayfalarıyla, davetliler için ya da herkese açık bir bağlantıyla ve size ait bir alan adıyla gerçek bir uygulama olarak yayımlanabilir. Bu sayfa bunu oluşturmanın iki yolunu anlatır.

## Seçenek 1 — yapay zekâya tarif edin

Veritabanının sohbet panelinde **Tam uygulama** modunu seçin, ardından ne istediğinizi anlatın: « Bir gösterge paneli, hesap listesi ve fırsat hattının Kanban görünümünde olduğu bir CRM ». Üretim adım adım ilerler: tablolar, bunların ilişkileri, ardından arayüz, otomasyonlar, görünümler ve kurgusal veriler, son olarak bir yapay zekâ ajanı. Her adım, bir sonrakine geçmeden kabul edeceğiniz öneriler üretir; hiçbiri kabul edilmediği sürece öneriyi değiştirebilirsiniz. **Yayınla** düğmesine tıklamadığınız sürece hiçbir şey yayımlanmaz.

## Seçenek 2 — düzenleyicide oluşturun

Veritabanında oluşturma menüsü **Yeni uygulama** seçeneğini sunar (yapay zekâ sohbeti etkinse ve uygulama oluşturabiliyorsanız). Düzenleyici **Önizleme**, **Kod** ve **Günlük** olmak üzere üç sekmeyle ve sağda yapay zekâ sohbetiyle açılır: uygulamanızı orada anlatın, ardından inceltin.

Önizlemedeki bir bloğa tıklamak, bloğu sohbette referans olarak gösterir. **Metni doğrudan düzenle** bir talep göndermeden görüntülenen metni düzeltir. **Geçmiş** uygulamanın sürümlerini listeler; **Bu sürümü geri yükle**, seçtiğiniz sürüme döner.

## Yayınlama

Editörün üst kısmındaki **Yayınla** düğmesi **Uygulama yayını** panelini açar. Panel, birini seçebileceğiniz iki erişim modu sunar:

- **Davetle — davet edilen kişiler ve veritabanı üyeleri** (varsayılan olarak önerilir). Her kişi TblFlow hesabıyla, parolasız oturum açar: sihirli bağlantı ya da güvenlik anahtarı.
- **Herkese açık — bağlantıya sahip herkes.** Onay istenir: bağlantıyı alan herkes uygulamayı hesapsız açar ve gösterdiği verileri görür.

**Veri yazmaya izin ver** varsayılan olarak kapalıdır. Salt okunur bir uygulama hiçbir şeyi bozamaz; yalnızca ziyaretçilerin uygulamadan gerçekten kayıt oluşturması veya değiştirmesi gerekiyorsa etkinleştirin.

**Yayınla — bağlantıyı oluştur** düğmesine tıklamak hemen bir URL üretir. Paylaşım parolası ya da uygulamaya özgü bir ziyaretçi hesabı yoktur. Davetliler, sayfa özelleştirme, yayından kaldırma ve özel alan adı [Paylaşım ve yayınlama](/tr/docs/sharing-publishing) sayfasında anlatılır.

## Kod sizde kalır

Yayımlanmış bir uygulama bir kara kutu değil, gerçek React ve Tailwind kodudur: **Kod → Kodu dışa aktar** ile tamamını alırsınız. Tersine, **Kodu içe aktar** yapay zekâ üretiminden sonra elle uyarlamak için mevcut bir veritabanından başlamanızı sağlar.

## Sırada ne var

- [Otomasyonlar](/tr/docs/automations) — iş akışlarını ziyaretçilerinizin eylemlerine bağlayın.
- [Yapay zekâ ajanları](/tr/docs/ai-agents) — uygulamada sunmak yerine yinelenen bir görevi devredin.
- [Tablolar ve alanlar](/tr/docs/tables-and-fields) — yayınlamadan önce veri yapısını gözden geçirin.
- [Paylaşım ve yayınlama](/tr/docs/sharing-publishing) — davetliler, özel alan adı, görünüm ve veritabanı bağlantıları.
