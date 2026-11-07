---
title: "MCP sunucusu: CSV içe aktarma, 23 araç ve Güvenlik ve denetim sayfası"
date: 2026-11-06
translationKey: "mcp-import-audit"
type: "feature"
---

- **13 yerine 23 araç**: bir CSV'nin içe aktarılması (`import_csv`), bir tablo üzerinde istatistikler, çöp kutusu ve geri yükleme, bir alanın yeniden adlandırılması ve silinmesi, bir tablonun görünümleri, bir alanın üyeleri, süreç haritasının okunması, bir ajanın çalıştırmalarının takibi.
- **CSV içe aktarma**: mevcut bir tabloya veya yeni bir tabloya. İlk çağrı, hiçbir şey yazmadan sütunları, tahmin edilen türleri ve satır sayısını gösterir; içe aktarma yalnızca sizin onayınızdan sonra yapılır. Çağrı başına en fazla 2 MiB; bunun ötesinde [CLI](/tr/docs/cli) devreye girer.
- **Alan ayarlarında Güvenlik ve denetim sayfası**, yalnızca sahiplere ayrılmıştır: olay türüne ve döneme göre filtrelenebilen alan günlüğü, CSV dışa aktarma ve etkilenen nesnelerin kimliklerini saklamak isterseniz etkinleştirebileceğiniz ayrıntılı bir MCP günlüğü. İçerikler (değerler, sorgular, talimatlar) asla saklanmaz.
- **Doğrulanmamış uygulamalar işaretlenir**: kendini TblFlow'a kaydetmiş bir uygulama, onay ekranında «Doğrulanmamış uygulama» ifadesini gösterir.
- **Kişisel belirteçler**: bir belirtecin süresi dolmadan 14 gün ve 3 gün önce bir e-posta sizi uyarır.

Kılavuz: [MCP sunucusu](/tr/docs/mcp-server).
