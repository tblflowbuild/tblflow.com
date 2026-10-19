---
title: "Süreç haritası"
translationKey: "process-map"
description: "Bir alanın süreç haritasını oluşturun, süreçleri çizin, kopuklukları ve tahmini maliyetleri okuyun, ardından Değiştir ile TblFlow'dan bir alternatif önermesini isteyin."
section: "Guides"
order: 5
---

Süreç haritası, alanınızda kimin ne yaptığını ve hangi araçlarla yaptığını çizdiğiniz, ardından kopuklukları ve tahmini maliyetleri okuduğunuz bir sayfadır. Pro veya üzeri plan gerektirir.

## Haritayı açın veya oluşturun

Her alanda en fazla bir süreç haritası bulunur. Alanın sağ taraftaki rozetindeki simgeden, sol menüdeki satırdan veya her tabandaki bir kısayoldan ulaşırsınız.

İlk açılışta tek bir tıklama haritayı oluşturur. Keşfetmek için **örneklerle**, kendi süreçlerinizden başlamak için **boş** oluşturmayı seçersiniz. Harita alandaki sıradan bir tabana dayanır (süreçler, adımlar, araçlar, roller, sorumluluklar, veri nesneleri, veri aktarımları): bunlar filtreleyip dışa aktarabileceğiniz gerçek PostgreSQL tablolarıdır.

## Süreçleri anlatın

Tuvali kaydırmak için sürükleyin, yakınlaştırmak için tekerleği kullanın. Bir adımı seçmek için tıklayın; çift tıklama veya Boşluk tuşu kaydını açar. Enter sonraki adımı, Tab bir dalı oluşturur, F2 yeniden adlandırır.

Daha hızlı ilerlemek için bir belge içe aktarın, asistanın sorularını yanıtlayın veya otomasyon araçlarınızı bağlayın. Her adımı bir insan, bir otomasyon veya bir yapay zeka ajanı üstlenir.

## Bir okuma biçimi seçin

Bir seçici, haritayı değiştirmeden okuma biçimini değiştirir:

- **Kim ne yapıyor**: her adımın yürütücüsü ve sorumlusu.
- **Maliyetler**: insan maliyeti (rol başına ücret), araç maliyeti (abonelikler, API çağrıları, yapay zeka token'ları), olası tasarruf ve elde edilen kazanç. Bu rakamlar ölçüm değil, sizin girdiğiniz **tahminlerdir**. İnsan maliyetlerini yalnızca sahibi görebilir.
- **Kopukluklar**: araçlar arasında elle tekrar giriş, ana kaynağı olmayan veri, üretilmeden kullanılan nesne, sorumlusu veya süresi olmayan, yetim kalmış ya da devamı olmayan adım, başarısız olan otomasyon.
- **Veriler**: veri nesneleri ve bunları üreten ya da kullanan araçlar.

## Değiştir

Bir adımda veya araçta **Değiştir**, haritanın bağlamını yapay zekaya verir. Yapay zeka TblFlow ile bir değişiklik önerir: SaaS aracı bir taban ve arayüze, bağlayıcı bir otomasyona, insan adımı bir ajana, bir web sitesine veri girişi ise tarayıcıda yeniden oynatmaya (Computer Use) dönüşür.

Yapay zeka önerir, ardından **etkin olmayan** öğeler oluşturur. Bunları kendiniz gözden geçirip etkinleştirin: o zamana kadar hiçbir şey çalışmaz.

## Paylaşın

Herkese açık, salt okunur bir bağlantı haritayı isteğe bağlı olarak paylaşır. Ayrılmış hassas alanlar gizli kalır. Artık gerekmediğinde bağlantıyı kapatın.
