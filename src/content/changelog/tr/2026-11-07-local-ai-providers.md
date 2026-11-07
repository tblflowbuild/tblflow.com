---
title: "HTTPS ile kullanıma açılan yerel yapay zeka sağlayıcıları"
date: 2026-11-07
translationKey: "local-ai-providers"
type: "improvement"
---

Kendi makinenizde çalışan bir modeli (Ollama, LM Studio veya Unsloth) barındırılan bir TblFlow alanına bağlayabilirsiniz.

- **Sunucuyu HTTPS ile kullanıma açın** ve herkese açık URL'sini yapıştırın: Unsloth için `unsloth studio --secure`, Ollama veya LM Studio için bir tünel. Barındırılan bir örnekte «localhost», sizin makinenizi değil TblFlow sunucusunu belirtir: form bunu hatırlatır.
- **Bearer anahtarı**: Ollama (belirteçli bir proxy'nin arkasında) ve Unsloth çağrılarına bir anahtar eşlik edebilir.
- **Ağ koruması**: sunucunun iç ağına işaret eden bir adres reddedilir.
