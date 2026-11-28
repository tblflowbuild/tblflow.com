---
title: "Hızlı başlangıç"
translationKey: "quickstart"
description: "İlk TblFlow veritabanınızı oluşturun, verileri içe aktarın, bir görünüm açın ve ekibinizle paylaşın: beş dakikada, SQL yazmadan."
section: "Kılavuzlar"
order: 1
---

Bu sayfa sizi boş bir hesaptan ekibinizle paylaştığınız bir veritabanına götürür. Beş dakika ayırın.

## 1. Bir veritabanı oluşturun

Bir çalışma alanında **Veritabanı oluştur**'a tıklayın. Bir veritabanı tabloları, otomasyonları ve ajanları bir araya getirir; her tablonun kendi görünümleri vardır. Arka planda her veritabanı, ona ayrılmış bir PostgreSQL şemasıdır.

Bir pencere, ne oluşturmak istediğinizi sorar:

- **Uygulamayı tarif edin** — takip etmek istediklerinizi yazın ("bir eğitim merkezi için ders takvimi yönetim aracı"), ardından **Uygulamayı oluştur**'a tıklayın. Yapay zekâ bir şema, görünümler, bir arayüz ve otomasyonlar önerir; siz bunları adım adım onaylarsınız. Çalışma alanı için bir yapay zekâ yapılandırılmış olmalıdır; aksi halde düğme **Üretmek için yapay zekâyı bağlayın** olur ve sizi ayarlara götürür. Bkz. [Yapay zekâ sohbeti](/tr/docs/ai-chat).
- **Boş bir veritabanıyla başlayın** — veritabanı yapay zekâ üretimi olmadan oluşturulur; tablolarınızı sonradan eklersiniz.

Henüz hiçbir veritabanı bulunmayan bir çalışma alanında **Bir şablonla başlayın** seçeneğini de kullanabilirsiniz. **Proje yönetimi** şablonu, TblFlow ile birlikte gelen galeri içindedir: Projeler, Görevler (alt görevler ve bağımlılıklarla), Sprint'ler ve Kişiler tablolarını; Kanban, Gantt ve takvim görünümlerini; durumlara göre gruplanmış ve toplamları olan bir **Gösterge paneli** görünümünü ve bir görevin **Bitti tarihi** alanını dolduran ya da temizleyen iki otomasyonu oluşturur. Bir proje, bir sprint ve beş örnek görev hazır gelir; bunları uyarlayabilir ya da silebilirsiniz. Başka bir veritabanından dışa aktarılan bir **.tbl** dosyası, **İçe aktar** ile çalışma alanına yeniden alınır. Bkz. [İçe aktarma, dışa aktarma ve çöp kutusu](/tr/docs/import-export-trash).

### Bir tablo ekleyin

Veritabanının kenar çubuğunda, ekleme düğmesi şunları sunar:

- **Yeni tablo** — alanları elle tanımlarsınız;
- **Yapay zekâyla oluştur** — tabloyu tarif edersiniz, bir önizleme görünür ve **Oluştur**'a tıklayana kadar hiçbir şey oluşturulmaz;
- **Diğer kaynaklardan ekle** — CSV, TSV veya Excel dosyası ya da bir dosyanın bağlantısını (**Bağlantı (URL)**) içe aktarma. Alan türleri verilerden çıkarılır (**Alan türlerini otomatik seç** seçeneği) ve içe aktarmadan önce düzeltebilirsiniz. Bir e-tablodan kopyalanan hücreler de ızgara görünümüne yapıştırılabilir.

## 2. Alanlarınızı yapılandırın

Bir veritabanını e-tablodan ayıran şey alan türüdür. Bunu doğru belirlemek için zaman ayırın; geri kalan her şey (formüller, filtreler, otomasyonlar) buna bağlıdır.

| İhtiyaç | Kullanılacak tür |
| --- | --- |
| Sabit bir kümeden tek bir değer | Tek seçim |
| Başka bir tabloya bağlantı | Başka bir kayda bağlantı |
| Bağlı tablodan gelen bir değer | Arama |
| Bağlı kayıtlar üzerinde bir toplam | Özet |
| Satır başına bir hesaplama | Formül |

Alan türleri planınıza bağlı değildir. Bkz. [Tablolar ve alanlar](/tr/docs/tables-and-fields).

## 3. İkinci bir görünüm açın

Görünüm, tablonun bir okunuşudur, bir kopyası değil. Görünüm değiştirmek hiçbir veriyi çoğaltmaz.

Bir durum alanı içeren bir tabloda, bu durum üzerine yığılmış bir **Kanban** görünümü ekleyin. Tarih içeren bir tabloda bir **Takvim** veya **Gantt** görünümü ekleyin. Filtreler, sıralamalar ve gruplar her görünümde kaydedilir. Varsayılan olarak bir görünüm ortaktır: bir meslektaşınız "Geciken dosyalarım" filtresini değiştirirse, herkes değişikliği görür. **Kişisel** düğmesi ayarlarınızı yalnızca size özel tutar. Bkz. [Görünümler, filtreler ve kayıtlar](/tr/docs/views-and-filters).

## 4. Ekibinizi davet edin

Veritabanının kenar çubuğundaki **Davet et** düğmesi paylaşımı açar; bu düğme yalnızca veritabanını düzenleyebilen rollere açıktır. Her kişiye bir rol verilir: veritabanında oluşturan, düzenleyen, yorum yapan veya okuyan (sahip rolü çalışma alanı düzeyinde belirlenir). Veritabanı ya da tablo üzerinde özel roller de tanımlanabilir. Bir görünümü dışarıya yayımlamak veya paylaşmak için bkz. [Paylaşım ve yayımlama](/tr/docs/sharing-publishing). Bkz. [Yetkiler ve roller](/tr/docs/permissions).

Düzenleme gerçek zamanlı ve ortaktır: iki kişi aynı tabloyu aynı anda düzenleyebilir ve her katılımcının etkin hücresi ızgarada işaretlenir.

## Sonraki adımlar

- [Tablolar ve alanlar](/tr/docs/tables-and-fields) — alan türleri ayrıntılı olarak.
- [Otomasyonlar](/tr/docs/automations) — verileriniz üzerinde eylemleri tetikleyin.
- [Yapay zekâ ajanları](/tr/docs/ai-agents) — yinelenen görevleri devredin.
- [Bağlayıcılar](/tr/docs/connectors) — araçlarınızı birbirine bağlayın.
- [API ve geliştiriciler](/tr/docs/api-developers) — verilere programatik olarak erişin.
- [Hesap ve güvenlik](/tr/docs/account-security), [Çalışma alanı ayarları](/tr/docs/space-settings) ve [Planlar ve sınırlar](/tr/docs/plans-limits).
