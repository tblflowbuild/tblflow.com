import type { McpKey } from './fr';

const tr = {
  nav: 'MCP sunucusu',
  'meta.title': 'Resmî MCP sunucusu: Claude içinde TblFlow',
  'meta.description':
    'TblFlow’u tek tıkla Claude’a bağlayın: resmî MCP sunucusu, yetkilerinizle ve seçtiğiniz alanlarla verilerinizi okur ve yazar. Ücretsiz plandan itibaren.',
  breadcrumb: 'MCP sunucusu',
  'hero.eyebrow': 'Resmî MCP sunucusu',
  'hero.title': 'TblFlow verilerinizle Claude’dan çalışın.',
  'hero.subtitle':
    'TblFlow’u Claude’a bağlayıcı olarak ekleyin, olağan hesabınızla giriş yapın ve erişilebilecek alanları seçin. Claude bundan sonra konuşma içinden kayıtlarınızı sorgulayabilir, oluşturabilir ve düzenleyebilir.',
  'hero.cta.primary': 'Nasıl bağlanacağını gör',
  'hero.cta.secondary': 'Belgeleri oku',
  'hero.note': 'REST API gibi, Ücretsiz plandan itibaren kullanılabilir.',
  'hero.url.label': 'Sunucu URL’si',
  'benefits.title': 'Ne değişiyor',
  'benefits.1.title': 'Verilerinizi sorgulayın',
  'benefits.1.body':
    'Sorularınızı Claude’a sorun: tabanlarınızın şemasını okur, kayıtları filtreler ve knowledge graph içinde anlamsal ve tam metin aramasıyla arama yapar.',
  'benefits.2.title': 'Konuşmadan eyleme geçin',
  'benefits.2.body':
    'Claude’dan ayrılmadan kayıt oluşturun ve düzenleyin, bir tablo veya alan ekleyin, bir otomasyonu tetikleyin ya da bir yapay zeka ajanı çalıştırın.',
  'benefits.3.title': 'Kontrol sizde kalsın',
  'benefits.3.body':
    'Bağlanırken erişilebilecek alanları, tabanları ve izinleri siz seçersiniz. TblFlow yetkileriniz her istekte geçerlidir.',
  'tools.title': '13 araç, sade bir dille',
  'tools.intro':
    'Claude’un yapabilecekleri şunlardır. En hassas yetenekler, bağlanırken sizin etkinleştirdiğiniz seçeneklerdir.',
  'tools.1.title': 'Keşfetmek',
  'tools.1.body': 'Alanlarınızı ve tabanlarınızı listelemek.',
  'tools.2.title': 'Anlamak',
  'tools.2.body': 'Bir tabanın şemasını açıklamak.',
  'tools.3.title': 'Okumak',
  'tools.3.body': 'Kayıtları listelemek, filtrelemek ve okumak.',
  'tools.4.title': 'Aramak',
  'tools.4.body': 'Knowledge graph içinde anlamsal ve tam metin aramasıyla arama yapmak.',
  'tools.5.title': 'Oluşturmak ve düzenlemek',
  'tools.5.body': 'Kayıt oluşturmak ve düzenlemek.',
  'tools.6.title': 'Silmek',
  'tools.6.body':
    'Kayıtları silmek: önce bir önizleme, ardından açık bir onay. Kayıtlar çöp kutusuna gider.',
  'tools.7.title': 'Yapılandırmak',
  'tools.7.body': 'Bir tablo veya alan oluşturmak.',
  'tools.8.title': 'Otomatikleştirmek',
  'tools.8.body': 'Sahibi kullanıma açtıysa bir otomasyonu tetiklemek.',
  'tools.9.title': 'Devretmek',
  'tools.9.body': 'Sahibi kullanıma açtıysa bir yapay zeka ajanı çalıştırmak.',
  'tools.perm.read': 'Okuma (varsayılan)',
  'tools.perm.write': 'Yazma (seçenek)',
  'tools.perm.delete': 'Silme (seçenek)',
  'tools.perm.schema': 'Şema (seçenek)',
  'tools.perm.trigger': 'Tetikleme (seçenek)',
  'steps.title': 'Üç adımda bağlanın',
  'steps.1.title': 'Özel bir bağlayıcı ekleyin',
  'steps.1.body':
    'Claude’da (web, masaüstü veya mobil): Ayarlar → Bağlayıcılar → Özel bağlayıcı ekle’yi açın, ardından sunucu URL’sini girin.',
  'steps.2.title': 'Giriş yapın',
  'steps.2.body': 'Olağan TblFlow hesabınızla giriş yapın (OAuth 2.1).',
  'steps.3.title': 'Alanları seçin',
  'steps.3.body':
    'Erişilebilecek alanları ve tabanları, ardından izinleri seçin. Okuma varsayılan olarak etkindir.',
  'steps.code.title': 'Claude Code ile',
  'steps.code.body': 'Tek bir komut yeterli:',
  'control.title': 'Neyi kontrol edersiniz',
  'control.1':
    'Claude’un neyi göreceğini siz seçersiniz: alanlar, tabanlar ve izinler. Varsayılan olarak okuma; yazma, silme, şema ve tetikleme seçeneklerdir.',
  'control.2': 'Mevcut TblFlow yetkileriniz her istekte geçerlidir.',
  'control.3':
    'Otomasyonlar ve ajanlar yalnızca sahipleri kullanıma açtıysa tetiklenebilir.',
  'control.4':
    'Silme işlemi önce bir önizlemeden, ardından açık bir onaydan geçer ve kayıtlar çöp kutusuna gider.',
  'control.5':
    'Konuşmaların içeriği günlüğe kaydedilmez: yalnızca çağrılan araç, saat, süre ve durum saklanır. Araç sonuçları, isteğinizi yanıtlamak için asistana (Claude) iletilir.',
  'control.6':
    'ISO 27001 ve ISO 42001 uygulamalarına, GDPR’ye ve AI Act’e göre tasarlanmıştır. Bu bir tasarım yaklaşımıdır: bugüne kadar edinilmiş herhangi bir sertifika yoktur.',
  'limits.title': 'Plana göre hız sınırları',
  'limits.intro':
    'MCP sunucusu her plana dahildir. Yalnızca dakika başına istek sınırı değişir.',
  'limits.col.tier': 'Plan',
  'limits.col.rate': 'Dakika başına istek',
  'status.title': 'Nerede bulunur',
  'status.body':
    'Sunucu, resmî MCP kayıt defterinde com.tblflow/tblflow adıyla yayımlanmıştır (sürüm 1.0.0). Claude bağlayıcı dizinine başvuru yakında yapılacak. ChatGPT henüz desteklenmiyor.',
  'faq.title': 'Sık sorulan sorular',
  'faq.1.q': 'Verilerimi kim görür?',
  'faq.1.a':
    'Bağlanırken erişilebilecek alanları ve tabanları siz seçersiniz ve TblFlow yetkileriniz her istekte geçerlidir. Araç sonuçları, isteğinizi yanıtlamak için asistana (Claude) iletilir. TblFlow konuşmaların içeriğini günlüğe kaydetmez: yalnızca çağrılan araç, saat, süre ve durum saklanır.',
  'faq.2.q': 'Erişimi iptal edebilir miyim?',
  'faq.2.a':
    'Evet. Claude ayarlarında bağlayıcıyı kaldırın: Claude TblFlow verilerinize erişmeyi bırakır.',
  'faq.3.q': 'ChatGPT destekleniyor mu?',
  'faq.3.a':
    'Henüz değil. Sunucu resmî MCP kayıt defterinde yayımlanmıştır (com.tblflow/tblflow, sürüm 1.0.0) ve Claude’a bağlanır. Claude bağlayıcı dizinine başvuru yakında yapılacak.',
  'faq.4.q': 'MCP sunucusu Ücretsiz planda kullanılabilir mi?',
  'faq.4.a':
    'Evet, REST API gibi Ücretsiz plandan itibaren. Yalnızca hız sınırı değişir: Ücretsiz, Pro, Business ve Enterprise için dakikada 60, 120, 300 ve 600 istek.',
  'faq.5.q': 'Claude otomasyonlarım ve ajanlarımla neler yapabilir?',
  'faq.5.a':
    'Onları yalnızca sahipleri kullanıma açtıysa tetikleyebilir. Bir otomasyon için run_automation, örnek verilerle bir deneme çalıştırması başlatır: hiçbir veri değiştirilmez.',
  'home.line': 'TblFlow’u Claude’a bağlayın — resmî MCP sunucusu',
  'home.card.title': 'Claude',
  'home.card.body':
    'TblFlow verilerinizi konuşma içinden, yetkilerinizle ve seçtiğiniz alanlarla sorgulayın ve düzenleyin.',
  'home.card.cta': 'MCP sunucusunu keşfedin',
  'pricing.row': 'MCP sunucusu: istek / dakika',
  'pricing.highlight': 'MCP sunucusu dahil: dakikada {n} istek',
  'privacy.heading': 'MCP sunucusu',
  'privacy.p1':
    'Bu bölüm, Claude gibi bir yapay zeka asistanının TblFlow alanınıza erişmesini sağlayan TblFlow MCP sunucusuna (https://app.tblflow.com/mcp) özgü işlemeleri açıklar. Sunucu uygulamanın bir parçasıdır: belgeleri (şartlar, gizlilik politikası, veri işleme sözleşmesi) app.tblflow.com adresinde yayımlanır.',
  'privacy.p2':
    'İşlenen veriler: bağlanırken TblFlow kimliğiniz (OAuth 2.1) ve seçtiğiniz alanlar, tabanlar ve izinler; her çağrıda, istenen aracın yetkileriniz çerçevesinde okuduğu veya yazdığı alanınızdaki veriler.',
  'privacy.p3':
    'Amaç: asistandan istediğiniz eylemleri yürütmek ve hizmetin güvenliğini sağlamak.',
  'privacy.p4':
    'Saklama: konuşmaların içeriği günlüğe kaydedilmez. Bir denetim günlüğü yalnızca çağrılan aracı, saati, süreyi ve çağrının durumunu, güvenlik ve denetimin gerektirdiği süreyle sınırlı olarak saklar.',
  'privacy.p5':
    'Paylaşım: araç sonuçları, bağladığınız asistana (örneğin Anthropic’in Claude’una) iletilir; asistan bunları isteğinizi yanıtlamak için kendi gizlilik politikasına göre işler. Yalnızca içeriğinin asistana iletilmesini kabul ettiğiniz alanları bağlayın.',
  'privacy.p6':
    'Çerçeve: sunucu, ISO 27001 ve ISO 42001 uygulamalarına, GDPR’ye ve AI Act’e göre tasarlanmıştır. Bugüne kadar edinilmiş herhangi bir sertifika yoktur.',
  'privacy.p7':
    'Haklarınız (erişme, düzeltme, silme, işlemeyi kısıtlama, itiraz etme, taşınabilirlik ve denetim otoritesine şikâyet) bu işlemeler için yukarıda açıklandığı şekilde kullanılır. Veri koruma iletişim adresi:',
} as const satisfies Record<McpKey, string>;

export default tr;
