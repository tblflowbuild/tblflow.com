import type { SolutionsLocale } from './types';

/**
 * Source copy (French) of the "Who is it for?" and "Use cases" pages. Every
 * claim was checked against the TblFlow application code (origin/main, November
 * 2026): templates "Pilotage financier" and "Gestion des stocks", the library
 * of process types, DocIndex, automations, agents under approval. Costs are
 * always "estimated", figures are labelled as examples, and each use case says
 * plainly what TblFlow does not do (docs/positionnement.md).
 */
const tr = {
  ui: {
    forNav: 'Kimler için?',
    useCasesNav: 'Kullanım senaryoları',
    forIndex: {
      metaTitle: 'TblFlow kimler için? Yöneticiler, finans, satış, sanayi',
      metaDescription:
        "TblFlow, aynı bilgiyi araçtan araca yeniden giren KOBİ'lere yöneliktir: yöneticiler, finans, satış operasyonları, sanayi, perakende ve hizmet ofisleri.",
      title: 'Kimler için?',
      subtitle:
        "Excel ve bir düzine araçla çalışan KOBİ'ler için. Her meslek grubu başka bir şeyi yeniden giriyor: TblFlow'un sizinki için neyi değiştirdiği aşağıda.",
    },
    useCasesIndex: {
      metaTitle: 'TblFlow senaryoları: tekliften tahsilata, stok, kalite',
      metaDescription:
        "Aynı bilginin araçtan araca yeniden girildiği altı uçtan uca akış; TblFlow bunları haritalar, otomatikleştirir ve onayınız altında ajanlara bırakır.",
      title: 'Kullanım senaryoları',
      subtitle:
        'Aynı bilginin elden ele ve araçtan araca geçtiği altı akış. Her biri için: bugün neye mal olduğu ve TblFlow ile ne olduğu.',
    },
    today: 'Bugün',
    withTblflow: 'TblFlow ile',
    journeyTitle: 'TblFlow bunu nasıl devralır',
    limitsTitle: 'TblFlow neleri yapmaz',
    promptsTitle: "TblFlow'dan neler isterdiniz",
    promptsNote: 'Kendi sözlerinizle yazılmış istekler. Yapay zekâ önerir, onayınız olmadan hiçbir şey etkinleşmez.',
    faqTitle: 'Sık sorulan sorular',
    useCasesFor: 'Kullanım senaryoları',
    audiencesFor: 'Kimler için',
    planNote:
      'Bir sürecin haritası, tahmini maliyetler dahil ücretsizdir. Tam harita, Değiştir ve aylık rapor Essential planından itibaren dahildir.',
    cta: 'Başla',
    secondaryCta: 'Süreç haritasını gör',
    example: 'Örnek',
    more: 'Daha fazla bilgi',
  },

  useCases: {
    'quote-to-cash': {
      nav: 'Tekliften tahsilata',
      card: 'Araçlar arasında yeniden giriş yapmadan teklif, sipariş, fatura ve hatırlatma.',
      metaTitle: 'Yeniden giriş yapmadan tekliften tahsilata | TblFlow',
      metaDescription:
        "Teklif Word'de, sipariş Excel'de, fatura başka yerde: TblFlow bunları tek veritabanında birleştirir; otomasyonlar ve ajanlar onayınız altında çalışır.",
      eyebrow: 'Kullanım senaryosu · Satış ve faturalandırma',
      title: 'Tekliften tahsilata, aynı tutarı dört kez yeniden yazmadan',
      subtitle:
        'Kabul edilen teklif siparişe dönüşür, sipariş faturayı hazırlar, vadesi geçen fatura hatırlatmayı tetikler. Tek giriş, en başta.',
      flow: {
        steps: [
          { title: 'Teklif', tool: 'Word', after: 'human' },
          { title: 'Sipariş', tool: 'Excel', after: 'automation' },
          { title: 'Fatura', tool: 'Google Sheets', after: 'automation' },
          { title: 'Hatırlatma', tool: 'Gmail', after: 'agent' },
        ],
        rekeyed: 'Aurora Ops · €4.820',
        calc: 'Ayda 40 teklif × 3 yeniden giriş × 10 dakika ≈ ayda 20 saat.',
      },
      problem: {
        title: 'Aynı müşteri, aynı tutar, dört kez',
        body: 'Teklif Word\'den çıkar, sipariş bir elektronik tabloya kopyalanır, fatura satırları elle alır ve hatırlatma hafızadan yapılır. Her kopya bir hata fırsatıdır ve tahsil edilecek tutarı kimse tek bakışta göremez.',
      },
      journey: [
        {
          label: 'Anlama',
          title: 'Faturalandırma prosedürünüzü yükleyin',
          body: 'Faturalandırma prosedürünüz ve hatırlatma kurallarınız, PDF veya Markdown olarak DocIndex\'te dizinlenir. Kullanmaya devam ettiğiniz araçlar bağlı kalır.',
        },
        {
          label: 'Haritalama',
          title: 'Tutarın nerede yeniden yazıldığını görün',
          body: 'Kitaplıktaki «Müşteri faturalandırma» tipik sürecinden başlayın: talep, siparişin kontrolü, hazırlık, yüksek tutarların onayı, gönderim, vade takibi, hatırlatma, tahsilat. Hacimlerinizi girin: TblFlow her adımın maliyetini tahmin eder.',
        },
        {
          label: 'Kurma',
          title: 'Teklifler, siparişler ve faturalar için tek veritabanı',
          body: 'TblFlow tabloları ve aralarındaki bağlantıları üretir: müşteri, teklif, sipariş ve fatura yalnızca bir kez girilir. Mevcut verileriniz CSV veya Excel dosyalarınızdan içe aktarılır.',
        },
        {
          label: 'Otomatikleştirme, sonra emanet etme',
          title: 'Kural otomasyona, hatırlatma ajana',
          body: 'Bir teklif «Kabul edildi» durumuna geçtiğinde bir otomasyon siparişi oluşturur ve faturayı hazırlar. Bir ajan, prosedürünüze göre vadesi geçen faturaları hatırlatır: mesajları o hazırlar, siz onaylarsınız.',
        },
      ],
      build: {
        title: 'Neler kurarsınız',
        items: [
          { title: 'Teklif takibi', body: 'Taslaktan kabule kadar duruma göre; tutar ve müşteri bağlantılı.' },
          { title: 'Müşteri vade planı', body: 'Gelecek, vadesi geçmiş ve tahsil edilmiş faturalar; bu ay tahsil edilecek tutarla birlikte.' },
          { title: 'Hazırlanmış hatırlatmalar', body: 'Prosedürünüzü izleyen ve her hatırlatmayı göndermeden önce size sunan bir ajan.' },
        ],
      },
      limits:
        "TblFlow muhasebenizi tutmaz ve mevzuata uygun e-fatura düzenlemez. Faturanız faturalandırma aracınızdan çıkar; TblFlow teklif, sipariş, fatura ve hatırlatma arasındaki bağı ve tahsil edilecek tutarı tutar.",
      prompts: [
        "Bir teklif «Kabul edildi» durumuna geçtiğinde, aynı satırlarla siparişi oluştur ve satış operasyonlarını bilgilendir.",
        'Vadesi 30 günden fazla geçmiş faturaları listele ve prosedürümüze göre her biri için bir hatırlatma hazırla.',
        'Bu ay tahsil edilecek tutarı müşteriye göre göster.',
      ],
      faq: [
        {
          q: 'Faturalandırma yazılımımı bırakmam gerekir mi?',
          a: 'Hayır. TblFlow adımları birbirine bağlar ve takibi tutar; fatura mevcut aracınızdan çıkmaya devam edebilir. Bu araç bir API yayımlıyorsa TblFlow ona bağlanabilir.',
        },
        {
          q: 'Hatırlatmalar kendiliğinden mi gider?',
          a: 'Hayır. Ajan her hatırlatmayı prosedürünüzden ve tablolarınızdan hazırlar, siz göndermeden önce onaylarsınız. Onayınız olmadan hiçbir şey etkinleşmez.',
        },
        {
          q: 'Mevcut tekliflerimi ve faturalarımı aktarabilir miyim?',
          a: 'Evet. CSV veya Excel dosyalarınızı mevcut bir tabloya ya da yeni bir tabloya içe aktarın.',
        },
      ],
    },

    'procure-to-pay': {
      nav: 'İhtiyaçtan tedarikçi ödemesine',
      card: 'Birbirine bağlı satın alma talepleri, siparişler, teslim alma kayıtları ve tedarikçi faturaları.',
      metaTitle: 'Yeniden giriş yapmadan satın alma ve tedarikçi faturaları',
      metaDescription:
        'Satın alma talebi, sipariş, teslim alma, tedarikçi faturası: TblFlow her adımı tek bir veritabanında birleştirir ve eşleştirmeyi onayınız altında hazırlar.',
      eyebrow: 'Kullanım senaryosu · Satın alma ve tedarikçi muhasebesi',
      title: 'İhtiyaçtan tedarikçi ödemesine, her fatura siparişiyle eşleştirilmiş',
      subtitle:
        'Talep siparişe dönüşür, teslim alma gelenleri doğrular, fatura ödemeye gitmeden önce siparişle eşleştirilir.',
      flow: {
        steps: [
          { title: 'Satın alma talebi', tool: 'E-posta', after: 'human' },
          { title: 'Tedarikçi siparişi', tool: 'Excel', after: 'automation' },
          { title: 'Teslim alma', tool: 'Kâğıt irsaliye', after: 'human' },
          { title: 'Tedarikçi faturası', tool: 'Muhasebe yazılımı', after: 'agent' },
        ],
        rekeyed: 'BC-1187 · €2.340',
        calc: 'Ayda 60 tedarikçi faturası × 3 yeniden giriş × 6 dakika ≈ ayda 18 saat.',
      },
      problem: {
        title: 'Fatura geliyor, siparişi kimse bulamıyor',
        body: 'Satın alma talebi bir e-postada, sipariş bir elektronik tabloda, teslim alma belgesi kâğıtta. Fatura geldiğinde, sipariş edilen ve teslim alınanla uyuşup uyuşmadığını anlamak için her şeyi aramak gerekir.',
      },
      journey: [
        {
          label: 'Anlama',
          title: 'Satın alma kurallarınızı yükleyin',
          body: 'Onay eşikleri, kayıtlı tedarikçiler, imza akışı: kurallarınız DocIndex\'te dizinlenir ve ajanlara bağlam olur.',
        },
        {
          label: 'Haritalama',
          title: 'Siparişin nerede yeniden kopyalandığını görün',
          body: 'Kitaplıktaki «Satın alma ve tedarik» tipik sürecinden başlayın: ihtiyaç, onay, teklif, tekliflerin karşılaştırılması, sipariş, teslim alma, faturayla eşleştirme, ödeme. TblFlow her adımın maliyetini hacimlerinize göre tahmin eder.',
        },
        {
          label: 'Kurma',
          title: 'Birbirine bağlı talepler, siparişler, teslim almalar ve faturalar',
          body: '«Finansal Yönetim» şablonu tedarikçi faturaları ve masraf bildirimleri tablolarını getirir. Talep bir formla girilir, sipariş ve fatura ona bağlı kalır.',
        },
        {
          label: 'Otomatikleştirme, sonra emanet etme',
          title: 'Eşleştirme önerilir, karar sizde kalır',
          body: 'Bir otomasyon, talep onaylanır onaylanmaz siparişi oluşturur. Tedarikçi faturasını Yapay zekâ sohbetine bırakın: satırları o önerir, bir ajan bunları sipariş ve teslim almayla eşleştirir, siz ödemeden önce onaylarsınız.',
        },
      ],
      build: {
        title: 'Neler kurarsınız',
        items: [
          { title: 'Bir satın alma talebi formu', body: 'Doğru alanlar, tutara göre doğru onaylayıcı, herkesin görebildiği bir durum.' },
          { title: 'Bir tedarikçi faturası kaydı', body: 'Her fatura siparişine ve teslim almasına, vadesiyle birlikte bağlı.' },
          { title: 'Ödeme öncesi bir kontrol', body: 'Sipariş edilen, teslim alınan ve faturalanan arasındaki farklar, fatura ödemeye gitmeden önce işaretlenir.' },
        ],
      },
      limits:
        'TblFlow tedarikçilerinize ödeme yapmaz: havale bankanızdan çıkar. Taranmış faturaları otomatik okumaz; Yapay zekâ sohbeti bıraktığınız faturadan satırları önerir, siz onaylarsınız. Banka mutabakatı yapmaz.',
      prompts: [
        '€1.500 üzerinde farklı bir onaylayıcısı olan bir satın alma talebi formu oluştur.',
        'Bu tedarikçi faturasını BC-1187 siparişi ve teslim almasıyla eşleştir ve farkları işaretle.',
        'Bu hafta ödenecek tedarikçi faturalarını, farkı olanlar dahil listele.',
      ],
      faq: [
        {
          q: 'TblFlow PDF faturaları okuyor mu?',
          a: 'Yapay zekâ sohbeti bıraktığınız faturayı okur ve ilgili kayıtları önerir; siz kabul etmeden hiçbir şey oluşturulmaz. Bu, taranmış faturaların toplu otomatik okunması değildir.',
        },
        {
          q: 'Muhasebe yazılımım yerinde kalıyor mu?',
          a: 'Evet. TblFlow muhasebeden önceki akışla ilgilenir: talep, sipariş, teslim alma, kontrol. Muhasebe kaydı yazılımınızda kalır.',
        },
        {
          q: 'Belirli bir tutarın üzerinde onay zorunlu kılınabilir mi?',
          a: 'Evet: durum, tutar ve onaylayıcı alandır; bir otomasyon, belirlediğiniz eşiğe göre doğru onaylayıcıyı bilgilendirir.',
        },
      ],
    },

    'financial-close': {
      nav: 'Kapanış ve finansal yönetim',
      card: 'Marjlar, FAVÖK ve bütçe-gerçekleşen, her ay dışa aktarımları yeniden kopyalamadan.',
      metaTitle: 'Aylık kapanış, marjlar ve FAVÖK, tablo kopyalamadan',
      metaDescription:
        'Muhasebe dışa aktarımlarınızı içe aktarın, formüller marjları, FAVÖK\'ü ve bütçe-gerçekleşen farkını yeniden hesaplasın; her ay onaylayacağınız bir özet alın.',
      eyebrow: 'Kullanım senaryosu · Finans ve yönetim kontrolü',
      title: 'Aynı dışa aktarımları aynı tablolara yeniden kopyalamadan ay kapanışı',
      subtitle:
        'Muhasebe dışa aktarımlarınız bir veritabanına gelir; marjlar, FAVÖK ve bütçe farkı yeniden hesaplanır; ayın özeti yönetim için hazırlanır.',
      flow: {
        steps: [
          { title: 'Mizan dışa aktarımı', tool: 'Muhasebe yazılımı', after: 'human' },
          { title: 'Biçimlendirme', tool: 'Excel', after: 'automation' },
          { title: 'Marjlar ve FAVÖK', tool: 'Excel', after: 'automation' },
          { title: 'Ayın özeti', tool: 'PowerPoint', after: 'agent' },
        ],
        rekeyed: 'Ekim mizanı · 186 satır',
        calc: 'Ayda 1 kapanış × 4 yeniden kopyalanan dosya × 1 sa 30 dk ≈ ayda 6 saat.',
      },
      problem: {
        title: 'Her ay aynı kopyala-yapıştırlar',
        body: 'Mizan dışa aktarımı bir düzeltme dosyasına, sonra marj tablosuna, sonra yönetim sunumuna kopyalanır. Bozuk bir formül ya da unutulmuş bir satır, ve sunulan rakam artık doğru değildir.',
      },
      journey: [
        {
          label: 'Anlama',
          title: 'Kapanış prosedürünüzü yükleyin',
          body: 'Kapanış takviminiz ve düzeltme kurallarınız DocIndex\'te dizinlenir: ekipleriniz bunlara başvurur, ajanlar bunları kullanır.',
        },
        {
          label: 'Haritalama',
          title: 'Rakamların nerede yeniden kopyalandığını görün',
          body: 'Kitaplıktaki «Aylık kapanış» tipik sürecinden başlayın: banka ekstreleri, banka mutabakatı, fatura girişi, belge hatırlatmaları, düzeltmeler, gözden geçirme, mizan, yönetime sunum.',
        },
        {
          label: 'Kurma',
          title: 'Sizin yerinize hesaplayan tablolar',
          body: 'Mizanı veya defteri her ay CSV olarak içe aktarın. Formüller ve rollup\'lar görev başına marjı, FAVÖK\'ü ve bütçe farkını hesaplar; grafikler ve bir yönetim arayüzü bunları gösterir.',
        },
        {
          label: 'Otomatikleştirme, sonra emanet etme',
          title: 'Özet hazırlanır, yorum onaylanır',
          body: 'Bir otomasyon, içe aktarma yapılır yapılmaz yeniden hesaplar ve bilgilendirir. Bir ajan, tablolardan ayın özetini yazar: değişimler, izlenecek kalemler. Gitmeden önce siz gözden geçirirsiniz.',
        },
      ],
      build: {
        title: 'Neler kurarsınız',
        items: [
          { title: 'Bir marj tablosu', body: '«Finansal Yönetim» şablonundan; proje, görev veya müşteri bazında.' },
          { title: 'Bir FAVÖK ve bütçe takibi', body: 'Ayın gerçekleşeni bütçeyle karşılaştırılır, eşiğinizi aşan farklarla birlikte.' },
          { title: 'Bir aylık özet', body: 'Bir ajan tarafından tablolarınızdan hazırlanır, dağıtımdan önce siz gözden geçirirsiniz.' },
        ],
      },
      limits:
        'TblFlow bir muhasebe yazılımı değildir: yevmiye kayıtlarını tutmaz ve bankanıza bağlanmaz. FAVÖK ve marjlar, içe aktardığınız dışa aktarımlardan, sizin formüllerinizle hesaplanır.',
      prompts: [
        'Ekim mizanını içe aktar ve FAVÖK ile bütçe farkını yeniden hesapla.',
        'Son üç ayın müşteri bazında marjını, en yüksekten en düşüğe göster.',
        'Yönetim için ayın özetini yaz: değişimler, bütçeyi aşan kalemler, karar verilecek noktalar.',
      ],
      faq: [
        {
          q: "TblFlow FAVÖK'ü kendisi mi hesaplıyor?",
          a: "Hazır bir FAVÖK hesabı yoktur: onu kendi hesaplarınız üzerinde formüller ve rollup'larla bir kez tanımlarsınız ve her içe aktarmada yeniden hesaplanır.",
        },
        {
          q: 'Muhasebe yazılımını bağlamak gerekir mi?',
          a: "Hayır. Mizanın veya defterin bir CSV dışa aktarımı yeterlidir. Yazılımınız bir API yayımlıyorsa TblFlow, içe aktarmayı otomatikleştirmek için bir bağlayıcı üretebilir.",
        },
        {
          q: 'Tutarları kim görür?',
          a: 'Yetkiler rol ve alan bazında belirlenir: tutarları kimin okuyacağını, kimin değiştireceğini ve kimin göremeyeceğini siz seçersiniz.',
        },
      ],
    },

    'stock-to-shipping': {
      nav: 'Stoktan sevkiyata',
      card: 'Sayımlar, eşikler, yeniden stoklama ve hazırlık tek bir veritabanında.',
      metaTitle: 'Yeniden giriş yapmadan stok, sayım ve yeniden stoklama',
      metaDescription:
        'Döngüsel sayım, eşik uyarıları, yeniden stoklama siparişleri, hazırlık ve sevkiyat: TblFlow ürünlerinizi, hareketlerinizi ve siparişlerinizi onayınızla bağlar.',
      eyebrow: 'Kullanım senaryosu · Stok ve lojistik',
      title: 'Stoktan sevkiyata, üç dosyada yeniden saymadan',
      subtitle:
        'Sayım stoğu günceller, eşik yeniden stoklamayı tetikler, müşteri siparişi hazırlığa gider. Miktarlar artık yeniden yazılmaz.',
      flow: {
        steps: [
          { title: 'Sayım', tool: 'Kâğıt form', after: 'human' },
          { title: 'Stok farkları', tool: 'Excel', after: 'automation' },
          { title: 'Yeniden stoklama', tool: 'Tedarikçiye e-posta', after: 'agent' },
          { title: 'Hazırlık', tool: 'Kargo firması sitesi', after: 'human' },
        ],
        rekeyed: 'Ref. A-204 · 36 adet',
        calc: 'Ayda sayılan 150 ürün × 2 yeniden giriş × 2 dakika ≈ ayda 10 saat.',
      },
      problem: {
        title: 'Ayda yalnızca bir gün doğru olan stok',
        body: 'Sayım kâğıt üzerinde yapılır, farklar bir elektronik tabloya kopyalanır, yeniden stoklama siparişi e-postayla gider. İki sayım arasında kimse gerçekte ne kaldığını bilmez ve tükenme hazırlık sırasında fark edilir.',
      },
      journey: [
        {
          label: 'Anlama',
          title: 'Stok kurallarınızı yükleyin',
          body: 'Eşikler, tedarikçiler, süreler, hazırlık kuralları: DocIndex\'te dizinlenir ve ajanlara bağlam olur.',
        },
        {
          label: 'Haritalama',
          title: 'Miktarların nerede yeniden kopyalandığını görün',
          body: '«Döngüsel sayım», «Yeniden stoklama ve tedarikçi siparişi» ve «Hazırlık ve sevkiyat» tipik süreçlerinden başlayın. TblFlow her adımın maliyetini hacimlerinize göre tahmin eder.',
        },
        {
          label: 'Kurma',
          title: 'Birbirine bağlı ürünler, hareketler ve sayımlar',
          body: '«Stok Yönetimi» şablonu ürünleri, hareketleri, konumları, tedarikçileri, yeniden stoklama siparişlerini ve fiziksel sayımları, stok değeri ve eşik uyarılarıyla birlikte getirir.',
        },
        {
          label: 'Otomatikleştirme, sonra emanet etme',
          title: 'Eşik uyarır, ajan siparişi hazırlar',
          body: 'Bir otomasyon sayım farklarını hesaplar ve eşiğin altındaki ürünleri işaretler. Bir ajan, doğru tedarikçiye yeniden stoklama siparişini hazırlar; gönderilmeden önce siz onaylarsınız.',
        },
      ],
      build: {
        title: 'Neler kurarsınız',
        items: [
          { title: 'Güncel bir stok', body: 'Her giriş ve çıkış bir hareket olarak kaydedilir, stok değeri hesaplanır.' },
          { title: 'Döngüsel sayımlar', body: 'Sayılacak ürünler, sayım girişi ve yeniden sayılacak farklar.' },
          { title: 'Hazırlanmış bir yeniden stoklama', body: 'Eşiğin altındaki ürünler ve onaylanacak bir tedarikçi sipariş taslağı.' },
        ],
      },
      limits:
        'TblFlow bir depo yönetim yazılımı değildir: barkod okumaz, telsiz terminalle hazırlığı yönetmez ve stoğu gerçek zamanlı izlemez. Kargo etiketi üretmez.',
      prompts: [
        'Yeniden stoklama eşiğinin altındaki ürünleri listele ve tedarikçi başına bir sipariş hazırla.',
        'Haftanın döngüsel sayımını oluştur: en çok satan 30 ürün.',
        'Son sayımda %5\'i aşan farkları değerleriyle göster.',
      ],
      faq: [
        {
          q: 'Barkodlar taranabilir mi?',
          a: 'Hayır. EAN kodu ürünün bir alanıdır, ancak TblFlow barkod okumaz. Sayımlar klavyeden ya da formla girilir.',
        },
        {
          q: 'TblFlow ERP\'min yerini alıyor mu?',
          a: 'Hayır. ERP\'nin veya elektronik tabloların iyi karşılamadığı şeylerle ilgilenir: döngüsel sayımlar, eşikler, yeniden stoklama, farkların takibi. ERP\'niz bir API yayımlıyorsa TblFlow ona bağlanabilir.',
        },
        {
          q: 'Yeniden stoklama siparişleri kendiliğinden mi gider?',
          a: 'Hayır. Ajan siparişi hazırlar; tedarikçiye gitmeden önce siz onaylarsınız.',
        },
      ],
    },

    quality: {
      nav: 'Kalite ve uygunsuzluklar',
      card: 'Kontroller, uygunsuzluklar ve düzeltici faaliyetler baştan sona izlenir.',
      metaTitle: 'Kâğıt formlar olmadan uygunsuzluklar ve düzeltici faaliyet',
      metaDescription:
        'Kontrol, kayıt, karar, düzeltici faaliyet: TblFlow her uygunsuzluğu parti, yeniden işleme maliyeti ve faaliyete bağlar; hatırlatmaları onayınızla hazırlar.',
      eyebrow: 'Kullanım senaryosu · Kalite ve üretim',
      title: 'Her uygunsuzluk, düzeltici faaliyetine kadar izlenir',
      subtitle:
        'Kontrol sapmayı kaydeder, parti bloke edilir, karar izlenir, düzeltici faaliyet kapanana kadar hatırlatılır. Atölye ile ofis arasında kaybolan form kalmaz.',
      flow: {
        steps: [
          { title: 'Kontrol', tool: 'Kâğıt form', after: 'human' },
          { title: 'Kayıt', tool: 'Excel', after: 'automation' },
          { title: 'Karar', tool: 'E-posta', after: 'human' },
          { title: 'Düzeltici faaliyet', tool: 'Excel', after: 'agent' },
        ],
        rekeyed: 'Lot 2611-B · 12 parça',
        calc: 'Ayda 30 uygunsuzluk × 3 yeniden giriş × 8 dakika ≈ ayda 12 saat.',
      },
      problem: {
        title: 'Atölyedeki form ofise ulaşmıyor',
        body: 'Kontrolör bir form doldurur, biri onu bir elektronik tabloya kopyalar, karar e-postayla alınır ve düzeltici faaliyet başka bir dosyada yaşar. Yeniden işleme maliyeti ve neden yolda kaybolur.',
      },
      journey: [
        {
          label: 'Anlama',
          title: 'Kalite prosedürlerinizi yükleyin',
          body: 'Kontrol planları, kabul kriterleri, karar akışı: DocIndex\'te dizinlenir ve ajanlara yol gösterir.',
        },
        {
          label: 'Haritalama',
          title: 'Yeniden işlemelerin maliyetini hesaplayın',
          body: 'Kitaplıktaki «Kalite kontrol ve uygunsuzluklar» tipik sürecinden başlayın: numuneler, ölçümler, sonuçlar, parti kabul edildi mi, bloke, nedenler, karar, düzeltici faaliyet. Hata oranı ve yeniden işleme maliyeti hesaba dahildir.',
        },
        {
          label: 'Kurma',
          title: 'Partilere bağlı bir kayıt defteri',
          body: 'Her uygunsuzluk partisine, tedarikçisine veya istasyonuna; nedeni ve kararıyla birlikte bağlıdır: rötuş, hurda veya sapma izni.',
        },
        {
          label: 'Otomatikleştirme, sonra emanet etme',
          title: 'Karar insanda kalır, takip artık kaybolmaz',
          body: 'Kontrol formu kaydı oluşturur ve sorumluyu bilgilendirir. Karar bir kişiye aittir. Bir ajan geciken düzeltici faaliyetleri hatırlatır ve ayın özetini hazırlar.',
        },
      ],
      build: {
        title: 'Neler kurarsınız',
        items: [
          { title: 'Bir kontrol formu', body: 'Atölyede doldurulur, uygunsuzluğu yeniden yazmadan oluşturur.' },
          { title: 'Bir uygunsuzluk kaydı', body: 'Parti, neden, karar ve yeniden işleme maliyetine göre.' },
          { title: 'Düzeltici faaliyet takibi', body: 'Sorumlu, vade, hatırlatma ve kapanış.' },
        ],
      },
      limits:
        'TblFlow sertifikalı bir doküman yönetim sistemi ya da atölye yönetim yazılımı değildir: makineleri yönetmez ve sertifikalı kalite sisteminizin yerini almaz. Kontrolleri, kararları ve faaliyetleri birbirine bağlar.',
      prompts: [
        'Partiyi, ölçümü ve parçanın fotoğrafını kaydeden bir kontrol formu oluştur.',
        'Geciken düzeltici faaliyetleri listele ve her sorumluya bir hatırlatma hazırla.',
        'Çeyrek boyunca tedarikçi başına yeniden işleme maliyetini göster.',
      ],
      faq: [
        {
          q: 'Bir parti hakkındaki karar otomatik olabilir mi?',
          a: 'Bir partinin bloke edilmesini bir kurala göre otomatikleştirebilirsiniz, ancak rötuş, hurda veya sapma izni kararı bir kişiye aittir.',
        },
        {
          q: 'Atölyeden fotoğraf eklenebilir mi?',
          a: 'Evet: form ekleri kabul eder ve herkese açık form bir telefonda açılır.',
        },
        {
          q: 'TblFlow kalite sistemimizin yerini alıyor mu?',
          a: 'Hayır. Uygunsuzlukları ve faaliyetleri izler; sertifikalı doküman sisteminiz yerinde kalır.',
        },
      ],
    },

    procedures: {
      nav: 'Prosedürleriniz nihayet güncel',
      card: 'Dizinlenmiş prosedürler, zamanında gözden geçirme ve dokümanlarınızdan çıkan yanıtlar.',
      metaTitle: 'Güncel ve aranabilir iç prosedürler | TblFlow',
      metaDescription:
        'Prosedürlerinizi yükleyin, TblFlow dizinlesin, gözden geçirme tarihi geçtiğinde sizi uyarsın; ajanlar dokümanlarınızdan yanıt versin.',
      eyebrow: 'Kullanım senaryosu · İç dokümantasyon',
      title: 'Bulunan, gözden geçirilen ve yapay zekânın kullandığı prosedürler',
      subtitle:
        'Prosedürleriniz DocIndex\'te dizinlenir, haritadaki süreçlere bağlanır, uyarılar sayesinde zamanında gözden geçirilir ve ajanlara bağlam olur.',
      flow: {
        steps: [
          { title: 'Yazım', tool: 'Word', after: 'human' },
          { title: 'Dağıtım', tool: 'Paylaşılan klasör', after: 'automation' },
          { title: 'Gözden geçirme', tool: 'Takvim hatırlatıcısı', after: 'automation' },
          { title: 'Bir meslektaşın sorusu', tool: 'E-posta', after: 'agent' },
        ],
        rekeyed: 'Tahsilat hatırlatma prosedürü v3',
        calc: 'Haftada 20 soru × 5 dakika ≈ ayda 7 saat.',
      },
      problem: {
        title: 'Doğru sürüm bir yerlerde',
        body: 'Prosedürler paylaşılan bir klasörde, birden fazla sürümle uyuyor. Hangisinin güncel olduğunu kimse bilmiyor, gözden geçirme unutuluyor ve aynı sorular e-postayla tekrar geliyor.',
      },
      journey: [
        {
          label: 'Anlama',
          title: 'Dokümanlarınızı olduğu gibi yükleyin',
          body: 'PDF, Word, Markdown: DocIndex bunları anlamsal arama ve tam metin için dizinler. Ekipleriniz kendi sözcükleriyle arar.',
        },
        {
          label: 'Haritalama',
          title: 'Her prosedürü sürecine bağlayın',
          body: 'Haritada her sürecin bir prosedür kartı, bir sahibi ve bir sonraki gözden geçirme tarihi vardır.',
        },
        {
          label: 'Kurma',
          title: 'Yaşayan bir bilgi tabanı',
          body: 'Prosedürler, sürümleri ve sahipleri bir arada; tüm ekip yetkilerine göre erişebilir.',
        },
        {
          label: 'Otomatikleştirme, sonra emanet etme',
          title: 'Gözden geçirmeler hatırlatılır, sorular yanıtlanır',
          body: 'Her pazartesi bir e-posta, gözden geçirme tarihi geçmiş veya yaklaşmış prosedürleri listeler. Ajanlar yanıt vermek ve kurallarınıza göre işlem yapmak için dizinlenmiş prosedürlerinize dayanır.',
        },
      ],
      build: {
        title: 'Neler kurarsınız',
        items: [
          { title: 'Bir prosedür tabanı', body: 'Dizinlenmiş, aranabilir, haritadaki süreçlere bağlı.' },
          { title: 'Tarihinde gözden geçirmeler', body: 'Prosedür başına bir sahip ve bir gözden geçirme tarihi, haftalık bir uyarıyla.' },
          { title: 'Kurallarınızı izleyen ajanlar', body: 'Bir işlem önermeden önce prosedürlerinizi okurlar.' },
        ],
      },
      limits:
        'TblFlow sertifikalı bir elektronik doküman yönetimi değildir: elektronik imza ya da düzenlemeye tabi bir doküman onay akışı yoktur. Prosedürlerinizi dizinler ve süreçlerinize bağlar.',
      prompts: [
        'En güncel müşteri tahsilat hatırlatma prosedürünü bul ve beş adımda özetle.',
        'Sahibi olmayan veya gözden geçirme tarihi geçmiş prosedürleri listele.',
        'Bir meslektaşın bu sorusunu prosedürlerimizden, kaynağıyla birlikte yanıtla.',
      ],
      faq: [
        {
          q: 'Hangi biçimler dizinlenir?',
          a: 'PDF, Word, PowerPoint, Markdown ve metin dokümanları. PDF, Word ve PowerPoint dosyalarının metni çıkarılır ve dizinlenir.',
        },
        {
          q: 'Hangi prosedürleri kim görür?',
          a: 'Alanınızın yetkileri geçerlidir: herkes yalnızca rolünün okumasına izin verdiğini görür.',
        },
        {
          q: 'Yapay zekâ yanıt uyduruyor mu?',
          a: 'Ajanlar dizinlenmiş prosedürlerinizde arar ve size kaynağı gösterir. Önemli bir yanıta göre harekete geçmeden önce her zaman doğrulayın.',
        },
      ],
    },
  },

  audiences: {
    leaders: {
      nav: 'Yöneticiler',
      card: 'Yeniden girişlerin maliyetini görün ve neyi emanet edeceğinize karar verin.',
      metaTitle: "KOBİ yöneticileri için TblFlow: yeniden girişin maliyeti",
      metaDescription:
        'Tahmini maliyetleriyle süreçlerinizin haritası, en çok kaybettiğiniz süreçlerin listesi, yazdırılabilir bir yönetim görünümü ve aylık bir rapor.',
      eyebrow: 'Kimler için · Yöneticiler',
      title: 'Yeniden girişlerin size neye mal olduğunu görün, sonra neyi emanet edeceğinize karar verin',
      subtitle:
        'Ekiplerinizin kopyalamaya zaman harcadığını biliyorsunuz. TblFlow size nerede, ne kadar olduğunu ve nelerin otomatikleştirilebileceğini ya da ajanlara emanet edilebileceğini gösterir.',
      pains: {
        title: 'Bugün size neye mal oluyor',
        items: [
          { title: 'Görünmez saatler', body: 'Aynı bilginin araçtan araca yeniden yazılması hiçbir panoda görünmez.' },
          { title: 'Yinelenen araçlar', body: 'Hangilerinin hâlâ işe yaradığını kimsenin bilmediği bir düzine abonelik.' },
          { title: 'Kör kararlar', body: 'Rakamlar geç ve kopyalanmış olarak gelir, herkesin kendi sürümü vardır.' },
        ],
      },
      build: {
        title: 'Neler elde edersiniz',
        items: [
          { title: 'Süreçlerinizin haritası', body: 'Kim neyi hangi araçla yapıyor, bilginin nerede yeniden girildiği ve tahmini maliyetler.' },
          { title: '«Nerede para kaybediyorsunuz?»', body: 'Süreçleriniz olası kazanca göre sıralanır; nereden başlayacağınızı seçersiniz.' },
          { title: 'Bir yönetim görünümü ve aylık rapor', body: 'Maliyet, olası kazanç, geciken gözden geçirmeler: yazdırılabilir bir sayfa ve ayın 1\'inde bir e-posta.' },
        ],
      },
      faq: [
        {
          q: 'Maliyetler ölçülüyor mu?',
          a: 'Hayır: girdiğiniz hacim ve oranlardan yapılan tahminlerdir. Sonra tahmini gerçekle karşılaştırmak için gerçek ölçümler girebilirsiniz.',
        },
        {
          q: 'Her şeyi bir anda taşımak gerekir mi?',
          a: 'Hayır. Bir süreçle başlayın. Kullanmaya devam ettiğiniz araçlar bağlı kalır ve TblFlow\'un ürettiği her şey siz onaylayana kadar etkin olmaz.',
        },
        {
          q: 'Ekibime ne olur?',
          a: 'Tekrarlayan görevler otomasyonlara ve ajanlara gider; ekipleriniz müşteri ilişkisini, danışmanlığı ve kararı elinde tutar.',
        },
      ],
    },

    finance: {
      nav: 'Finans ve muhasebe',
      card: 'Dışa aktarımları kopyalamadan satın alma, faturalar, kapanış ve yönetim.',
      metaTitle: 'Finans için TblFlow: faturalar, kapanış ve yönetim',
      metaDescription:
        'Finans direktörü, yönetim kontrolü ve muhasebe için: eşleştirilmiş tedarikçi faturaları, müşteri vade planı, yeniden hesaplanan marjlar ve FAVÖK, aylık özet.',
      eyebrow: 'Kimler için · Finans ve muhasebe',
      title: 'Muhasebeniz ile tablolarınız arasında eksik olan finansal yönetim',
      subtitle:
        'Muhasebe yazılımınız kayıtları tutar. TblFlow etrafında olan her şeyi devralır: satın almalar, faturalar, hatırlatmalar, düzeltmeler ve yönetim tabloları.',
      pains: {
        title: 'Bugün size neye mal oluyor',
        items: [
          { title: 'Siparişsiz faturalar', body: 'Ödemeden önce talebi, siparişi ve teslim almayı bulmak gerekir.' },
          { title: 'Kopyalanan dışa aktarımlar', body: 'Her ay mizan, sunuma kadar dosyadan dosyaya geçer.' },
          { title: 'Hafızadan hatırlatmalar', body: 'Tahsil edilecek tutarı kimse tek bakışta göremez.' },
        ],
      },
      build: {
        title: 'Neler kurarsınız',
        items: [
          { title: 'Bir tedarikçi faturası akışı', body: 'Birbirine bağlı talep, sipariş, teslim alma ve fatura; ödemeden önce kontrol edilir.' },
          { title: 'Bir vade planı ve hatırlatmalar', body: 'Müşteri faturaları tahsilata kadar izlenir, hatırlatmaları bir ajan hazırlar.' },
          { title: 'Güncel marjlar ve FAVÖK', body: 'Her içe aktarmada yeniden hesaplanır, gözden geçirilecek bir aylık özetle.' },
        ],
      },
      faq: [
        {
          q: 'TblFlow bir muhasebe yazılımı mı?',
          a: 'Hayır. Kayıtları tutmaz, mevzuata uygun e-fatura düzenlemez ve banka mutabakatı yapmaz. Muhasebenizin etrafındaki adımları birbirine bağlar.',
        },
        {
          q: 'Muhasebe verileri nasıl geliyor?',
          a: 'Mizanın veya defterin bir CSV dışa aktarımıyla, bir tabloya içe aktarılarak. Yazılımınız bir API yayımlıyorsa TblFlow bir bağlayıcı üretebilir.',
        },
        {
          q: 'Tutarlar korunuyor mu?',
          a: 'Yetkiler rol ve alan bazında ayarlanır: tutarları kimin okuyacağına, kimin değiştireceğine ve kimin göremeyeceğine siz karar verirsiniz.',
        },
      ],
    },

    'sales-admin': {
      nav: 'Satış operasyonları',
      card: 'Siparişleri kopyalamadan tekliften faturaya.',
      metaTitle: 'Satış operasyonları için TblFlow: tekliften faturaya',
      metaDescription:
        'Teklifler, siparişler, faturalar ve hatırlatmalar tek veritabanında bağlı: satış operasyonları bir kez girer, otomasyonlar gerisini yapar, ajanlar hazırlar.',
      eyebrow: 'Kimler için · Satış operasyonları',
      title: 'Siparişi her araca değil, bir kez girin',
      subtitle:
        'Kabul edilen teklif siparişe dönüşür, sipariş faturayı hazırlar, vadesi geçen fatura hatırlatılır. Satış operasyonları müşteri ilişkisini elinde tutar, veri girişini değil.',
      pains: {
        title: 'Bugün size neye mal oluyor',
        items: [
          { title: 'Yeniden yazılan sipariş', body: 'Kabul edilen teklif sipariş tablosuna, sonra faturaya kopyalanır.' },
          { title: 'Fiyat hataları', body: 'Her kopya, satırda ya da indirimde hata yapma fırsatıdır.' },
          { title: 'Bekleyen müşteri', body: 'Siparişinin durumunu öğrenmek için üç dosya açmak gerekir.' },
        ],
      },
      build: {
        title: 'Neler kurarsınız',
        items: [
          { title: 'Bir teklif-sipariş hattı', body: 'Teklifin durumu, aynı satırlarla siparişi tetikler.' },
          { title: 'Bir sipariş takibi', body: 'Her siparişin durumu, yetkilerine göre tüm ekip tarafından görülür.' },
          { title: 'Hazır hatırlatmalar', body: 'Bir ajan hatırlatmaları prosedürünüze göre hazırlar; siz onaylarsınız.' },
        ],
      },
      faq: [
        {
          q: 'CRM\'imizi tutabilir miyiz?',
          a: 'Evet. Kullanmaya devam ettiğiniz araçlar bağlı kalır. Her şeyi bir araya getirmek isterseniz TblFlow ayrıca bir «Satış ve müşteri ilişkileri» şablonu içerir.',
        },
        {
          q: 'Müşteriler kendileri sipariş verebilir mi?',
          a: 'Herkese açık bir form siparişlerinizi besleyebilir. Her birinin kendi yetkileri olan müşteri hesapları yoktur.',
        },
        {
          q: 'Başlamak ne kadar sürer?',
          a: 'Bir süreç ücretsiz haritalanır. Tablolar haritadan üretilir ve mevcut verileriniz CSV veya Excel ile içe aktarılır.',
        },
      ],
    },

    manufacturing: {
      nav: 'Sanayi ve üretim',
      card: "ERP'nin etrafında yönetilen kalite, tedarik ve stok.",
      metaTitle: "Sanayi için TblFlow: ERP çevresinde kalite, tedarik, stok",
      metaDescription:
        "Uygunsuzluklar, hammadde tedariki, stok ve sevkiyat ERP'nizin etrafında birbirine bağlı; tahmini yeniden işleme maliyeti ve onay altında çalışan ajanlarla.",
      eyebrow: 'Kimler için · Sanayi ve üretim',
      title: 'Atölyeyi ERP\'nizin etrafında, onun yerine geçmeden yönetin',
      subtitle:
        'ERP\'niz üretimi yönetir. TblFlow hâlâ kâğıtta ve elektronik tablolarda dolaşanı devralır: kontroller, uygunsuzluklar, eşikler, yeniden stoklamalar ve hatırlatmalar.',
      pains: {
        title: 'Bugün size neye mal oluyor',
        items: [
          { title: 'Kâğıt formlar', body: 'Atölye ile ofis arasında iki kez girilen kontroller ve farklar.' },
          { title: 'Maliyeti hesaplanmayan yeniden işlemeler', body: 'Uygunsuzlukların maliyeti hiçbir yere yansımaz.' },
          { title: 'Malzeme tükenmeleri', body: 'Biri görmeden eşik aşılır.' },
        ],
      },
      build: {
        title: 'Neler kurarsınız',
        items: [
          { title: 'Bir kalite kaydı', body: 'Partilere bağlı uygunsuzluklar, nedenler, kararlar ve düzeltici faaliyetler.' },
          { title: 'İzlenen bir tedarik', body: 'Birbirine bağlı eşikler, talepler, siparişler ve malzeme teslim almaları.' },
          { title: 'Atölyenin maliyetlendirilmiş haritası', body: 'Hata oranı, yeniden işleme maliyeti ve haritada «iş emri» sözlüğü.' },
        ],
      },
      faq: [
        {
          q: 'TblFlow çizelgeleme veya MRP yapıyor mu?',
          a: 'Hayır. Üretimi planlamaz ve atölyeyi gerçek zamanlı izlemez; harita süreçlerinizi tanımlar, yürütmez. ERP\'nin etrafındaki akışları devralır.',
        },
        {
          q: 'Fabrikanın sözlüğünü kullanabilir miyiz?',
          a: 'Evet: «Sanayi ve lojistik» ön ayarı, haritada «sipariş» yerine «iş emri» gösterir.',
        },
        {
          q: 'ERP\'miz bağlanabilir mi?',
          a: 'Bir API yayımlıyorsa TblFlow, belgelerinden bir bağlayıcı üretebilir. API\'si olmayan bir araç için kaydedilmiş bir web görevi yeniden oynatılabilir.',
        },
      ],
    },

    retail: {
      nav: 'Perakende ve dağıtım',
      card: 'Stok, yeniden stoklama, siparişler ve satış sonrası hizmet tek bir veritabanında.',
      metaTitle: 'Perakende için TblFlow: stok ve yeniden stoklama',
      metaDescription:
        'Döngüsel sayımlar, eşik uyarıları, yeniden stoklama siparişleri, hazırlık ve satış sonrası hizmet tek veritabanında bağlı; ajanlar hazırlar, siz onaylarsınız.',
      eyebrow: 'Kimler için · Perakende ve dağıtım',
      title: 'Stok, yeniden stoklama ve satış sonrası hizmet tek bir veritabanında',
      subtitle:
        'Ürünler, hareketler, siparişler ve iadeler aynı yerde. Eşik uyarır, ajan yeniden stoklamayı hazırlar, siz onaylarsınız.',
      pains: {
        title: 'Bugün size neye mal oluyor',
        items: [
          { title: 'Çok geç fark edilen tükenmeler', body: 'Stok yalnızca sayım anında doğrudur.' },
          { title: 'Elle verilen tedarikçi siparişleri', body: 'Her yeniden stoklama, bir elektronik tablodan yazılan bir e-postadır.' },
          { title: 'Dağınık satış sonrası hizmet', body: 'Garanti, iade, onarım: her adım farklı bir araçta.' },
        ],
      },
      build: {
        title: 'Neler kurarsınız',
        items: [
          { title: 'Hareketlerle izlenen bir stok', body: '«Stok Yönetimi» şablonu: ürünler, hareketler, stok değeri, eşik uyarıları.' },
          { title: 'Hazırlanmış bir yeniden stoklama', body: 'Eşiğin altındaki ürünler ve tedarikçi başına onaylanacak bir sipariş taslağı.' },
          { title: 'Bir satış sonrası hizmet takibi', body: 'Siparişe bağlı talep, garanti, teşhis, iade ve kapanış.' },
        ],
      },
      faq: [
        {
          q: 'TblFlow çevrimiçi mağazama bağlanıyor mu?',
          a: 'Yerleşik bir e-ticaret bağlayıcısı yoktur. Platformunuz bir API yayımlıyorsa TblFlow bir bağlayıcı üretebilir; yoksa siparişler CSV ile içe aktarılır.',
        },
        {
          q: 'Barkodlar okunabilir mi?',
          a: 'Hayır. EAN kodu ürünün bir alanıdır, ancak barkod okuma yoktur.',
        },
        {
          q: 'Nereden başlamalı?',
          a: 'Döngüsel sayımdan veya yeniden stoklamadan: haritaya aktarılmaya hazır iki tipik süreç ve bir stok veritabanı şablonu.',
        },
      ],
    },

    firms: {
      nav: 'Ofisler ve hizmetler',
      card: 'Yeniden kopyalanan tablolar olmadan görevler, dosyalar, süre ve faturalandırma.',
      metaTitle: 'Ofisler için TblFlow: görevler, dosyalar ve marjlar',
      metaDescription:
        'Danışmanlık, mali müşavirlik ve hukuk için: izlenen görevler ve dosyalar, görev başına marj, faturalandırma ve hatırlatmalar, dizinlenmiş prosedürler.',
      eyebrow: 'Kimler için · Ofisler ve hizmetler',
      title: 'Görevleriniz ve dosyalarınız, görev sözleşmesinden tahsilata',
      subtitle:
        'Her görev veya dosya müşterisine, harcanan süreye, faturasına ve marjına bağlı. Ofisin prosedürleri dizinlenmiş, hatırlatmalar hazırlanmış.',
      pains: {
        title: 'Bugün size neye mal oluyor',
        items: [
          { title: 'Tahmin edilen marjlar', body: 'Harcanan süre ve faturalandırma ayrı dosyalarda yaşar.' },
          { title: 'Dağınık dosyalar', body: 'Belgeler, vadeler ve belge hatırlatmaları e-posta kutusunda.' },
          { title: 'Sözlü prosedürler', body: 'Ofisin bilgi birikimi birkaç kişinin kafasında.' },
        ],
      },
      build: {
        title: 'Neler kurarsınız',
        items: [
          { title: 'Bir görev takibi', body: '«Finansal Yönetim» şablonu: görevler ve projeler brüt marjlarıyla.' },
          { title: 'Dosyalar ve vadeler', body: 'Her dosya, belgeleri, vadeleri ve hatırlatmaları aynı yerde.' },
          { title: 'Ofisin prosedürleri', body: 'DocIndex\'te dizinlenir, süreçlere bağlanır, ajanlar tarafından kullanılır.' },
        ],
      },
      faq: [
        {
          q: 'Sözlük ofisin sözlüğü olabilir mi?',
          a: 'Evet: «Hizmet ve danışmanlık» ve «Muhasebe ve hukuk» ön ayarları, haritada «görev» veya «dosya» gösterir.',
        },
        {
          q: 'Bir takibi müşteriyle paylaşabilir miyiz?',
          a: 'Evet, bağlantı veya herkese açık form üzerinden salt okunur olarak. Her müşteriye ait hesapları ve yetkileri olan bir müşteri alanı yoktur.',
        },
        {
          q: 'Müşteri verileri bizde mi kalıyor?',
          a: "Gerçek bir PostgreSQL'de durur, dışa aktarılabilir ve TblFlow, Enterprise planıyla kendi sunucunuzda barındırılabilir.",
        },
      ],
    },
  },
} satisfies SolutionsLocale;

export default tr;
