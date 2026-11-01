---
title: "Yapay zeka ajanları"
translationKey: "ai-agents"
description: "Bir TblFlow ajanını yapılandırma: model sağlayıcısı, araç kapsamı, kalıcı graf belleği, zamanlama ve herhangi bir şey yazılmadan önce onay gerektiren öneriler."
section: "Kılavuzlar"
order: 4
---

Ajan, bir tabana bağlı özerk bir çalışandır. Bir hedefi, bir araç kapsamı ve bir belleği vardır; doğrudan yazmak yerine öneriler üretir.

## Model sağlayıcısını seçme

Model, taban başına ve kendi API anahtarlarınızla yapılandırılır: OpenAI, Anthropic, Google Gemini, Azure OpenAI, DeepSeek, Mistral, Groq, Cohere, OpenAI uyumlu herhangi bir uç nokta ve ayrıca Ollama ile LM Studio üzerinden yerel modeller.

Yerel bir modelle kendi sunucunuzda barındırıldığında, hiçbir taban verisi altyapınızın dışına çıkmaz.

## Kapsamı belirleme

Güvenlik açısından önemli olan kısım kapsamdır. Bir ajan yalnızca bildirdiği amaca uyan araçları alır: tablo, arayüz, otomasyon, ajan, uygulama, test verisi. Diğer araçlar şemasında yer almaz, dolayısıyla onları çağıramaz; her araç da yetkisini çalıştırma anında yeniden denetler.

Erişilebilir tabloları da kısıtlayın. Bir destek önceliklendirme ajanının bordro tablosuna erişmesi için hiçbir neden yoktur.

## Öneriler

Bir ajan yapıyı veya verileri değiştirmek istediğinde bir **öneri** üretir: değişikliğin bir kimlik numarası olan bir önizlemesi. Siz kabul edene kadar hiçbir şey yazılmaz.

Düşük riskli işler (bir alanı zenginleştirmek, bir etiket uygulamak) için belirli tablolarda doğrudan yazmaya izin verebilirsiniz. Bunu tablo tablo kararlaştırın, asla genel olarak değil.

## Bellek

Bir ajanın belleği, bir konuşma günlüğü değil, geçmiş çalıştırmalarından çıkarılan varlıkların ve ilişkilerin grafıdır. Her görev yalnızca ilgili parçaları yeniden yükler: ajan hatırlar, ancak bağlam maliyeti sınırsız büyümez.

Bellek incelenebilir ve düzenlenebilir. Bir ajan yanlış bir şey öğrendiğinde, istemi değil kaydı düzeltirsiniz.

## Zamanlama

Bir ajan isteğe bağlı olarak, bir zamanlamaya göre (cron) çalışabilir ya da bir [otomasyonun](/tr/docs/automations) içinde bir adım olarak çağrılabilir. Aylık ajan çalıştırma sayısı plana bağlıdır.

## Dayanıklı uygulamalar

- Ajan başına tek hedef. "CRM'i yöneten" bir ajan dağınık biçimde başarısız olur; dar kapsamlı üç ajan okunaklı biçimde başarısız olur.
- Her şey için önerilerle başlayın ve doğrudan yazmaya yalnızca hatalarının neye benzediğini gördükten sonra geçin.
- Günlüğü tutun: her çalıştırma planını, araç çağrılarını ve yazdıklarını saklar.
