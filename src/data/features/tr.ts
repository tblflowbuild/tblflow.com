import type { FeaturesCopy } from './types';

const tr = {
  nav: "Özellikler",
  metaTitle: "Özellikler: TblFlow'un yaptığı her şey",
  metaDescription:
    "Tablolar, arayüzler, otomasyonlar, beyaz tahtalar, yapay zekâ ajanları, dokümantasyon, yetkiler, GDPR ve AI Act denetimleri: TblFlow'un tüm özellikleri.",
  eyebrow: "Özellikler",
  title: "TblFlow'un sizin için yaptığı her şey.",
  subtitle:
    "TblFlow'un süreçlerinizden ürettiği yedi kaynak ve etraflarındaki işlevler: yetkiler, kontrollü yapay zekâ, araçlarınıza bağlantılar.",
  availability: "Bazı özelliklerin kullanılabilirliği plana göre değişir.",
  pricingLink: "Fiyatları gör",
  home: {
    title: "TblFlow'un yapabildiği her şey",
    body: "Tablolar, arayüzler, otomasyonlar, beyaz tahtalar, ajanlar, dokümantasyon, yetkiler, denetimler: dört aileye ayrılmış eksiksiz katalog.",
    link: "Tüm özellikleri gör",
  },
  groups: {
    build: {
      title: "TblFlow'un ürettikleri",
      intro: "Süreç haritanızdan oluşturulan yedi kaynak. Yayına almadan önce siz gözden geçirirsiniz.",
    },
    team: {
      title: "Birlikte çalışın, kontrol sizde kalsın",
      intro: "Herkes yalnızca sizin belirlediğinizi görür ve yapar; olan biten izlenebilir kalır.",
    },
    ai: {
      title: "Kontrol ettiğiniz bir yapay zekâ",
      intro: "Sağlayıcı, bağlam, kullanım ve denetimler: yapay zekâ sizin kontrolünüzde kalır.",
    },
    connect: {
      title: "Araçlarınıza bağlı, canlıya hazır",
      intro: "Diğer araçlarınız bağlı kalır ve yayınlamadan önce test edersiniz.",
    },
  },
  items: {
    tables: {
      title: "API'siyle birlikte tablolar",
      body: "Gerçek PostgreSQL üzerinde tablolar; her birine REST API üzerinden erişilebilir.",
    },
    interfaces: {
      title: "Çevrimiçi yayınlanabilen arayüzler",
      body: "Tablolarınızın üzerine kurulan ve çevrimiçi yayınlayabileceğiniz arayüzler.",
    },
    automations: {
      title: "Otomasyonlar",
      body: "Aynı veriyi yeniden girmenin yerini alan eylem zincirleri. Pasif olarak oluşturulurlar: etkinleştirmeden önce siz gözden geçirirsiniz.",
    },
    whiteboards: {
      title: "Beyaz tahtalar",
      body: "Bir veritabanının içinde ortak çalışılan bir beyaz tahta; yapay zekânın yardımıyla birlikte şema çizin, birlikte düşünün.",
    },
    browsers: {
      title: "Tarayıcı otomasyonları",
      body: "API'si olmayan bir site için, yapay zekânın yönettiği bir tarayıcı (computer use), siz onay verdikten sonra görevi sizin yerinize tekrarlar.",
    },
    agents: {
      title: "Yapay zekâ ajanları",
      body: "Net bir göreve atanan ajanlar; onlara verdiğiniz araçlar ve yetkilerle, sizin kurallarınız ve onayınız altında çalışır.",
    },
    docs: {
      title: "Yapay zekânın dizinlediği dokümantasyon (DocIndex)",
      body: "Belgeleriniz hem anlama hem de kelimelere göre arama yapılabilecek şekilde dizinlenir; yapay zekâ ve ajanlarınız bunlara başvurabilir.",
    },
    permissions: {
      title: "Size özel yetkiler",
      body: "Sizin tanımladığınız ayrıntılı roller ve yetkiler; yapay zekânın istekleri dahil her isteğe uygulanır.",
    },
    invitations: {
      title: "Çalışma arkadaşları ve dış kişiler",
      body: "Çalışma arkadaşlarınızı veya şirket dışındaki kişileri, yalnızca sizin seçtiğiniz erişimlerle davet edin.",
    },
    orgchart: {
      title: "Şirket organizasyon şeması",
      body: "Şirketinizin organizasyon şemasını içe aktarın; TblFlow kurumunuzun yapısını yansıtsın.",
    },
    tokens: {
      title: "Kişisel erişim jetonları",
      body: "Her kullanıcı, API'yi çağırmak için kendi jetonlarını oluşturur ve yönetir.",
    },
    myNotifications: {
      title: "Bildirimleriniz, sizin tarzınızda",
      body: "Her kullanıcı, aldığı bildirimleri kendisi ayarlar.",
    },
    logs: {
      title: "Bir günlük kaydı",
      body: "Çalışma alanınızda yapılan eylemlerin izi; ne olduğunu anlamak için inceleyebilirsiniz.",
    },
    providers: {
      title: "Seçtiğiniz yapay zekâ sağlayıcısı",
      body: "TblFlow hiçbir yapay zekâ sağlayıcısına bağlı değildir: şirketinizin sağlayıcısını veya bireysel bir hesabı bağlayın.",
    },
    context: {
      title: "Bağlamınızı bilen bir yapay zekâ",
      body: "Asistan, çalışma alanınızın yapısını (veritabanları, alanlar, süreçler) bilir ve yanıtlarını buna dayandırır.",
    },
    usage: {
      title: "Yapay zekâ kullanımınız",
      body: "Yapay zekânın çalışma alanınızda ne kadar kullanım yaptığını izleyin.",
    },
    aiAct: {
      title: "AI Act denetimi",
      body: "Yapay zekâyla üretilen bir çözüm, Avrupa yapay zekâ yönetmeliğinden doğan yükümlülüklerinize hazırlanmanıza yardımcı olmak için otomatik olarak denetlenir. Bu, hukuki görüşün yerini tutmaz.",
    },
    gdpr: {
      title: "Otomatik GDPR denetimi",
      body: "Oluşturduklarınızın otomatik GDPR denetimi; ele alınması gereken noktaları belirlemenize yardımcı olur.",
    },
    designMd: {
      title: "design.md ile kurumsal kimliğiniz",
      body: "design.md dosyanızı ekleyin: yapay zekâ bunu kullanarak ürettiği arayüzlerin kurumsal kimliğinize uymasını sağlar.",
    },
    skills: {
      title: "Skills: oluşturun ve içe aktarın",
      body: "Ajanlarınıza yeniden kullanılabilir bilgi birikimi kazandırmak için Skills oluşturun veya içe aktarın.",
    },
    connectors: {
      title: "API bağlayıcı oluşturucu",
      body: "Hazır bağlayıcısı olmayan bir aracın API'sine, yapay zekânın yardımıyla bir bağlayıcı oluşturun.",
    },
    oauth: {
      title: "OAuth uygulamaları",
      body: "Uygulamalarınızı parola paylaşmadan OAuth ile bağlayın.",
    },
    mcp: {
      title: "Yapay zekânın çalıştığı her yerde MCP",
      body: "MCP sunucularını bağlayın: yapay zekâ sohbetinde, otomasyonlarda ve ajanlarda kullanılabilirler. TblFlow'un kendi MCP sunucusu da vardır.",
    },
    chatNotifications: {
      title: "Slack, Teams ve Google Chat bildirimleri",
      body: "TblFlow bildirimlerini ekibinizin mesajlaşma aracında alın.",
    },
    email: {
      title: "Otomasyon e-postaları",
      body: "Otomasyonlarınızdan e-posta gönderimini yapılandırın.",
    },
    preprod: {
      title: "Bir ön üretim alanı",
      body: "Çözümlerinizi canlıya almadan önce ayrı bir alanda test edin.",
    },
  },
} satisfies FeaturesCopy;

export default tr;
