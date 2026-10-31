---
title: "Tablolar ve alanlar"
translationKey: "tables-and-fields"
description: "TblFlow'un 28 alan türü, bağlantılı kayıtlar, aramalar ve toplamalar ve her birinin PostgreSQL veritabanınızda gerçekte neye dönüştüğü."
section: "Kılavuzlar"
order: 2
---

Bir TblFlow tablosu gerçek bir PostgreSQL tablosudur. Bir alan gerçek bir sütundur. Arayüzden hiç çıkmasanız bile bu sayfayı yararlı kılan budur: burada seçtiğiniz şey veritabanında var olan şeydir.

## Alan aileleri

**Düz değerler** — Tek satırlık metin, Uzun metin, Sayı, Para birimi, Yüzde, Tarih, Onay kutusu, Derecelendirme, E-posta, Telefon, URL. Yazdığınızı saklarlar, daha fazlasını değil.

**Kısıtlı değerler** — Tek seçim, Çoklu seçim, Kullanıcı. Seçenekler alanda tanımlanır; gruplamayı ve filtrelemeyi güvenilir kılan budur: "Devam ediyor"un iki farklı yazılışı bir arada bulunamaz.

**İlişkisel** — Bağlantılı kayıt, Arama, Toplama, Koşullu toplama. Aşağıya bakın.

**Hesaplanan** — Formül (200'den fazla işlev), Otomatik numara, Oluşturulma zamanı, Son değiştirilme zamanı, Oluşturan, Son değiştiren. Düzenlenemezler: yazma sırasında yeniden hesaplanırlar.

**Etkin** — Ek, Düğme, Yapay zeka. Yapay zeka alanı tabanda yapılandırılmış modeli çağırır ve yanıtı hücreye yazar.

## İki tabloyu bağlama

Bir **Bağlantılı kayıt** alanı iki tablo arasında bir ilişki oluşturur. İlişki kurulduktan sonra:

- bir **Arama**, bağlantılı tablodan bir alanı çeker (şirket adını kişi satırına);
- bir **Toplama**, bağlantılı kayıtları bir araya toplar (bir hesabın anlaşmalarının `SUM`'ı, bir projenin görevlerinin `COUNT`'ı);
- bir **Koşullu toplama** aynısını bir alt küme üzerinde yapar (aşaması "Kazanıldı" olan anlaşmaların `SUM`'ı).

Üçü de kaynak veri değiştiğinde yeniden hesaplanır; harici bir SQL istemcisinden değiştirildiğinde de.

## Formüller

Formüller alanda tanımlanır ve her satıra uygulanır. Kullanılabilir aileler: metin, sayısal, tarih, mantıksal ve bağlantılı kayıtlar üzerindeki toplamalar.

```
IF(
  AND({Stage} = "Won", {Amount} > 10000),
  "Key account",
  "Standard"
)
```

Bir formül yan etki üretemez: başka bir tabloya yazma yok, ağ çağrısı yok. Bunun için bir [otomasyona](/tr/docs/automations) ihtiyacınız var.

## Postgres'te bu neye benzer

Her taban bir şemadır, her tablo fiziksel bir tablo, her alan türü belirli bir sütun. `psql`'i, bir ORM'yi veya bir BI aracını aynı örneğe yönlendirip verilerinizi doğrudan okuyabilirsiniz: dışa aktarma yok, eşitleme katmanı yok, çoğaltma gecikmesi yok.

Pratik sonucu: bir `pg_dump`, başka bir yerde de kullanılabilen eksiksiz bir yedektir. Burada "kilitlenme yok"un anlamı budur.

## Bilmeye değer şeyler

- Bir alanı yeniden adlandırmak etiketini değiştirir, formüllerin kullandığı başvuruyu değiştirmez: hiçbir şey bozulmaz.
- Bir alanın türünü değiştirmek bir dönüştürme dener ve kaybolacak değerler konusunda sizi uyarır.
- Bir alanı silmek sütunu kaldırır. İşlem günlüğe kaydedilir, ancak tabanın çöp kutusunun ötesinde geri alınamaz.
