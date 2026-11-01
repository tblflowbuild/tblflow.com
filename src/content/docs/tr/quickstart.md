---
title: "Hızlı başlangıç"
translationKey: "quickstart"
description: "İlk TblFlow tabanınızı oluşturun, verileri içe aktarın, ikinci bir görünüm açın ve ekibinizle paylaşın: beş dakikada, tek satır SQL yazmadan."
section: "Başlarken"
order: 1
---

Bu sayfa sizi boş bir hesaptan ekibinizin çalışabileceği bir tabana götürür. Beş dakika ayırın.

## 1. Bir taban oluşturun

Kontrol panelinden **Yeni taban**. Taban bir çalışma alanıdır: birkaç tabloyu, kendi görünümlerini, otomasyonlarını ve ajanlarını barındırır. Altta, ona ayrılmış bir PostgreSQL şemasıdır.

Başlamanın üç yolu:

- **Boş tablo** — alanları kendiniz tanımlarsınız.
- **İçe aktarma** — CSV, Excel veya doğrudan bir e-tablodan yapıştırma. Alan türleri verilerden çıkarılır ve onaylamadan önce düzeltebilirsiniz.
- **Sade dille tarif** — takip ettiğiniz şeyi anlatın ("kişiler, şirketler ve anlaşmalardan oluşan bir satış hattı") ve asistan bir şema önerir. Öneriyi kabul edene kadar hiçbir şey oluşturulmaz.

## 2. Alan türlerini doğru seçin

Bir veritabanını e-tablodan ayıran şey alan türüdür. Buna bir dakika ayırın; formüller, filtreler ve otomasyonların hepsi ona bağlıdır.

| İhtiyacınız olan | Alan türü |
| --- | --- |
| Sabit bir kümeden tek değer | Tek seçim |
| Başka bir tabloya bağlantı | Bağlantılı kayıt |
| Bağlantılı tablodan çekilen bir değer | Arama |
| Bağlantılı kayıtlar üzerinde bir toplama | Toplama |
| Satır başına bir hesaplama | Formül |

28 türün tamamı, kendi sunucunuzda barındırma dahil her planda kullanılabilir.

## 3. İkinci bir görünüm açın

Görünüm, tablonun bir okunuş biçimidir, bir kopya değil. Görünüm değiştirmek hiçbir şeyi çoğaltmaz.

Durum alanı olan bir tabloda, bu duruma göre gruplanmış bir **Kanban** görünümü ekleyin. Tarihleri olan bir tabloda bir **Takvim** veya **Gantt** görünümü ekleyin. Filtreler, sıralamalar ve gruplamalar görünüme aittir: bir meslektaşınızın "Geciken işlerim" görünümü sizinkini değiştirmez.

## 4. Ekibinizi davet edin

Sağ üstte **Paylaş**. İzinler taban düzeyinde belirlenir (sahip, düzenleyici, yorumcu, görüntüleyici) ve tablo ve alan başına daraltılabilir.

Düzenleme gerçek zamanlı ve ortaktır: iki kişi aynı tabloda aynı anda çalışabilir; imleçler ve değişiklikler anında görünür.

## Sonraki adımlar

- [Tablolar ve alanlar](/tr/docs/tables-and-fields) — alan türleri ayrıntılı olarak.
- [Otomasyonlar](/tr/docs/automations) — verileriniz üzerinde eylemleri tetikleyin.
- [Yapay zeka ajanları](/tr/docs/ai-agents) — yinelenen işleri devredin.
