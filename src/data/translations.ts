import type { Language } from '../lib/i18n';

export interface Translation {
  // Navigation
  nav: {
    home: string;
    services: string;
    about: string;
    contact: string;
    book: string;
    book_call: string;
    book_email: string;
  };
  
  // Hero Section
  hero: {
    rotating_headings: string[];
    description: string;
    cta: string;
  };
  
  // Welcome Section
  welcome: {
    title: string;
    subtitle: string;
    description: string;
  };
  
  // Services
  services: {
    title: string;
    subtitle: string;
    view_all: string;
    learn_more: string;
    all_services: string;
  };

  // Service Categories
  service_categories: {
    beauty_massage: string;
    therapeutic_massage: string;
    beauty_therapy: string;
    regular_beauty: string;
  };
  
  // About
  about: {
    title: string;
    subtitle: string;
    description: string;
    experience: string;
    professional: string;
    relaxing: string;
  };
  
  // Founder Intro
  founderIntro: {
    greeting: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
    paragraph4: string;
    paragraph5: string;
    paragraph6: string;
    paragraph7: string;
  };

  // Contact
  contact: {
    title: string;
    subtitle: string;
    address: string;
    phone: string;
    email: string;
    hours: string;
    book_now: string;
  };
  
  // Footer
  footer: {
    copyright: string;
    privacy: string;
    terms: string;
    imprint: string;
  };
  
  // SEO
  seo: {
    home_title: string;
    home_description: string;
    home_keywords: string;
    services_title: string;
    services_description: string;
  };
}

export const translations: Record<Language, Translation> = {
  de: {
    nav: {
      home: 'Startseite',
      services: 'Leistungen',
      about: 'Über uns',
      contact: 'Kontakt',
      book: 'Termin buchen',
      book_call: 'Per Telefon buchen',
      book_email: 'Per E-Mail buchen'
    },
    hero: {
      rotating_headings: [
        'Entspannung für Körper und Seele',
        'Professionelle Massage-Behandlungen',
        'Ihr Weg zum Wohlbefinden',
        'Ruhe und Harmonie erleben'
      ],
      description: 'Willkommen bei Seelenruhe - Ihrem Ort der Entspannung und des Wohlbefindens',
      cta: 'Jetzt Termin buchen'
    },
    welcome: {
      title: 'Willkommen bei Seelenruhe',
      subtitle: 'Ihr Massage-Studio in Berlin',
      description: 'Bei Seelenruhe bieten wir Ihnen professionelle Massage- und Wellness-Behandlungen in einer entspannten und harmonischen Atmosphäre. Unser erfahrenes Team sorgt dafür, dass Sie sich rundum wohlfühlen und neue Energie tanken können.'
    },
    services: {
      title: 'Unsere Leistungen',
      subtitle: 'Professionelle Massage- und Wellness-Behandlungen',
      view_all: 'Alle Leistungen ansehen',
      learn_more: 'Mehr erfahren',
      all_services: 'Alle Behandlungen'
    },
    service_categories: {
      beauty_massage: 'Schönheitsmassage',
      therapeutic_massage: 'Therapeutische Massage',
      beauty_therapy: 'Schönheitstherapie',
      regular_beauty: 'Reguläre Schönheitspflege'
    },
    about: {
      title: 'Über Seelenruhe',
      subtitle: 'Ihr Partner für Entspannung und Wohlbefinden',
      description: 'Seit vielen Jahren bieten wir unseren Kunden professionelle Massage- und Wellness-Behandlungen an. Unser Team besteht aus erfahrenen und zertifizierten Therapeuten, die mit Leidenschaft und Hingabe für Ihr Wohlbefinden sorgen.',
      experience: 'Jahre Erfahrung',
      professional: 'Professionelle Therapeuten',
      relaxing: 'Entspannte Atmosphäre'
    },
    contact: {
      title: 'Kontakt',
      subtitle: 'Wir freuen uns auf Ihren Besuch',
      address: 'Musterstraße 123, 12345 Berlin',
      phone: '+49 30 12345678',
      email: 'info@seelenruhe.com?subject=Anfrage%20Termin%20Seelenruhe%20Massage',
      hours: 'Mo-Fr: 9:00-20:00 Uhr, Sa: 10:00-18:00 Uhr',
      book_now: 'Jetzt buchen'
    },
    footer: {
      copyright: '© 2024 Seelenruhe Massage Studio. Alle Rechte vorbehalten.',
      privacy: 'Datenschutz',
      terms: 'AGB',
      imprint: 'Impressum'
    },
    founderIntro: {
      greeting: 'Hallo ihr Lieben!',
      paragraph1: 'Ich bin Najlaa Loulo, zertifizierte Masseurin und Gründerin dieses Herzensprojekts, das aus meiner Leidenschaft für ganzheitliches Wohlbefinden entstanden ist.',
      paragraph2: 'In meiner Praxis bekommst du mehr als nur eine Massage – es ist deine persönliche Auszeit vom Alltag, individuell abgestimmt auf deine Bedürfnisse.',
      paragraph3: 'Ich arbeite mit natürlichen Ölen, verschiedenen Massagetechniken und viel Feingefühl, damit du dich sowohl körperlich als auch mental rundum wohlfühlst.',
      paragraph4: 'Und das Beste? Schon bald erweitere ich mein Angebot um professionelle Kosmetikbehandlungen – für gesunde, strahlende Haut und noch mehr Wohlbefinden. Denn echte Schönheit beginnt mit Selbstfürsorge.',
      paragraph5: 'Ob Verspannungen, Muskelermüdung oder der Wunsch nach gepflegter Haut – bei mir bist du in den besten Händen.',
      paragraph6: 'Gönn dir eine Pause – für deinen Körper, deine Haut und dein inneres Gleichgewicht. 🌿',
      paragraph7: ''
    },
    seo: {
      home_title: 'Seelenruhe Massage Studio - Entspannung und Wohlbefinden in Berlin',
      home_description: 'Professionelle Massage- und Wellness-Behandlungen in Berlin. Entspannung für Körper und Seele in unserem modernen Studio. Buchen Sie jetzt Ihren Termin!',
      home_keywords: 'Massage Berlin, Wellness Berlin, Entspannung, Massage Studio, Wohlbefinden, Therapie',
      services_title: 'Unsere Leistungen - Seelenruhe Massage Studio Berlin',
      services_description: 'Entdecken Sie unsere vielfältigen Massage- und Wellness-Behandlungen: Klassische Massage, Wellness-Behandlungen, Therapie-Massage und mehr.'
    }
  },
  
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      about: 'About',
      contact: 'Contact',
      book: 'Book Appointment',
      book_call: 'Book by Phone',
      book_email: 'Book by Email'
    },
    hero: {
      rotating_headings: [
        'Relaxation for Body and Soul',
        'Professional Massage Treatments',
        'Your Path to Wellbeing',
        'Experience Peace and Harmony'
      ],
      description: 'Welcome to Seelenruhe - Your place of relaxation and wellbeing',
      cta: 'Book Now'
    },
    welcome: {
      title: 'Welcome to Seelenruhe',
      subtitle: 'Your Massage Studio in Berlin',
      description: 'At Seelenruhe, we offer professional massage and wellness treatments in a relaxed and harmonious atmosphere. Our experienced team ensures that you feel completely comfortable and can recharge your energy.'
    },
    services: {
      title: 'Our Services',
      subtitle: 'Professional massage and wellness treatments',
      view_all: 'View All Services',
      learn_more: 'Learn More',
      all_services: 'All Treatments'
    },
    service_categories: {
      beauty_massage: 'Beauty Massage',
      therapeutic_massage: 'Therapeutic Massage',
      beauty_therapy: 'Beauty Therapy',
      regular_beauty: 'Regular Beauty'
    },
    about: {
      title: 'About Seelenruhe',
      subtitle: 'Your Partner for Relaxation and Wellbeing',
      description: 'For many years, we have been providing our clients with professional massage and wellness treatments. Our team consists of experienced and certified therapists who work with passion and dedication for your wellbeing.',
      experience: 'Years of Experience',
      professional: 'Professional Therapists',
      relaxing: 'Relaxing Atmosphere'
    },
    contact: {
      title: 'Contact',
      subtitle: 'We look forward to your visit',
      address: 'Sample Street 123, 12345 Berlin',
      phone: '+49 30 12345678',
      email: 'info@seelenruhe.com?subject=Appointment%20Inquiry%20Seelenruhe%20Massage',
      hours: 'Mon-Fri: 9:00-20:00, Sat: 10:00-18:00',
      book_now: 'Book Now'
    },
    footer: {
      copyright: '© 2024 Seelenruhe Massage Studio. All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      imprint: 'Imprint'
    },
    founderIntro: {
      greeting: 'Hello my dears!',
      paragraph1: 'I am Najlaa Loulo, a certified masseuse and founder of this heart project, which arose from my passion for holistic well-being.',
      paragraph2: 'In my practice, you get more than just a massage – it is your personal break from everyday life, individually tailored to your needs.',
      paragraph3: 'I work with natural oils, various massage techniques, and a lot of sensitivity so that you feel completely comfortable both physically and mentally.',
      paragraph4: 'And the best part? I will soon be expanding my offer to include professional cosmetic treatments – for healthy, radiant skin and even more well-being. Because true beauty begins with self-care.',
      paragraph5: 'Whether it\'s tension, muscle fatigue, or the desire for well-groomed skin – you are in the best hands with me.',
      paragraph6: 'Treat yourself to a break – for your body, your skin, and your inner balance. 🌿',
      paragraph7: ''
    },
    seo: {
      home_title: 'Seelenruhe Massage Studio - Relaxation and Wellbeing in Berlin',
      home_description: 'Professional massage and wellness treatments in Berlin. Relaxation for body and soul in our modern studio. Book your appointment now!',
      home_keywords: 'Massage Berlin, Wellness Berlin, Relaxation, Massage Studio, Wellbeing, Therapy',
      services_title: 'Our Services - Seelenruhe Massage Studio Berlin',
      services_description: 'Discover our diverse massage and wellness treatments: Classic Massage, Wellness Treatments, Therapy Massage and more.'
    }
  },
  
  ar: {
    nav: {
      home: 'الرئيسية',
      services: 'الخدمات',
      about: 'من نحن',
      contact: 'اتصل بنا',
      book: 'احجز موعد',
      book_call: 'احجز عبر الهاتف',
      book_email: 'احجز عبر البريد الإلكتروني'
    },
    hero: {
      rotating_headings: [
        'الاسترخاء للجسم والروح',
        'علاجات مساج احترافية',
        'طريقك إلى العافية',
        'اختبر السلام والانسجام'
      ],
      description: 'مرحباً بكم في سيلينروه - مكانكم للاسترخاء والعافية',
      cta: 'احجز الآن'
    },
    welcome: {
      title: 'مرحباً بكم في سيلينروه',
      subtitle: 'استوديو المساج الخاص بك في برلين',
      description: 'في سيلينروه، نقدم لكم علاجات مساج واسترخاء احترافية في جو مريح ومتناغم. فريقنا ذو الخبرة يضمن أن تشعروا بالراحة التامة وأن تستعيدوا طاقتكم.'
    },
    services: {
      title: 'خدماتنا',
      subtitle: 'علاجات مساج واسترخاء احترافية',
      view_all: 'عرض جميع الخدمات',
      learn_more: 'اعرف المزيد',
      all_services: 'جميع العلاجات'
    },
    service_categories: {
      beauty_massage: 'مساج تجميل',
      therapeutic_massage: 'مساج علاجي',
      beauty_therapy: 'تجميل علاجي',
      regular_beauty: 'تجميل عادي'
    },
    about: {
      title: 'عن سيلينروه',
      subtitle: 'شريكك في الاسترخاء والعافية',
      description: 'منذ سنوات عديدة، نقدم لعملائنا علاجات مساج واسترخاء احترافية. فريقنا يتكون من معالجين ذوي خبرة ومعتمدين يعملون بشغف وتفانٍ من أجل عافيتكم.',
      experience: 'سنوات من الخبرة',
      professional: 'معالجون محترفون',
      relaxing: 'جو مريح'
    },
    contact: {
      title: 'اتصل بنا',
      subtitle: 'نتطلع لزيارتكم',
      address: 'شارع المثال 123، 12345 برلين',
      phone: '+49 30 12345678',
      email: 'info@seelenruhe.com?subject=استفسار%20عن%20موعد%20مساج%20سيلينروه',
      hours: 'الإثنين-الجمعة: 9:00-20:00، السبت: 10:00-18:00',
      book_now: 'احجز الآن'
    },
    footer: {
      copyright: '© 2024 استوديو سيلينروه للمساج. جميع الحقوق محفوظة.',
      privacy: 'سياسة الخصوصية',
      terms: 'شروط الخدمة',
      imprint: 'بيانات الناشر'
    },
    founderIntro: {
      greeting: 'أهلاً بكم أيها الأحبة!',
      paragraph1: 'أنا نجلاء لولو، أخصائية تدليك معتمدة ومؤسسة هذا المشروع القلبي الذي نشأ من شغفي بالرفاهية الشاملة.',
      paragraph2: 'في عيادتي، ستحصلون على أكثر من مجرد تدليك – إنها استراحتكم الشخصية من روتين الحياة اليومي، مصممة خصيصًا لتلبية احتياجاتكم.',
      paragraph3: 'أعمل بزيوت طبيعية، وتقنيات تدليك متنوعة، وبحس مرهف، لتشعروا بالراحة التامة جسديًا وذهنيًا.',
      paragraph4: 'والأفضل من ذلك؟ قريبًا سأوسع عروضي لتشمل علاجات تجميل احترافية – لبشرة صحية ومشرقة ومزيد من الرفاهية. لأن الجمال الحقيقي يبدأ بالعناية الذاتية.',
      paragraph5: 'سواء كنتم تعانون من التوتر، إرهاق العضلات، أو ترغبون ببشرة نضرة – أنتم في أيدٍ أمينة.',
      paragraph6: 'امنحوا أنفسكم قسطًا من الراحة – لجسدكم، بشرتكم، وتوازنكم الداخلي. 🌿',
      paragraph7: ''
    },
    seo: {
      home_title: 'استوديو سيلينروه للمساج - الاسترخاء والعافية في برلين',
      home_description: 'علاجات مساج واسترخاء احترافية في برلين. الاسترخاء للجسم والروح في استوديونا الحديث. احجز موعدك الآن!',
      home_keywords: 'مساج برلين، عافية برلين، استرخاء، استوديو مساج، رفاهية، علاج',
      services_title: 'خدماتنا - استوديو سيلينروه للمساج برلين',
      services_description: 'اكتشف علاجات المساج والاسترخاء المتنوعة لدينا: المساج الكلاسيكي، علاجات العافية، المساج العلاجي والمزيد.'
    }
  },
  
  tr: {
    nav: {
      home: 'Ana Sayfa',
      services: 'Hizmetler',
      about: 'Hakkımızda',
      contact: 'İletişim',
      book: 'Randevu Al',
      book_call: 'Telefonla Rezervasyon Yap',
      book_email: 'E-posta ile Rezervasyon Yap'
    },
    hero: {
      rotating_headings: [
        'Vücut ve Ruh için Rahatlama',
        'Profesyonel Masaj Tedavileri',
        'Sağlığa Giden Yolunuz',
        'Huzur ve Uyumu Yaşayın'
      ],
      description: 'Seelenruhe\'ye hoş geldiniz - Rahatlama ve sağlık mekanınız',
      cta: 'Şimdi Rezervasyon Yapın'
    },
    welcome: {
      title: 'Seelenruhe\'ye Hoş Geldiniz',
      subtitle: 'Berlin\'deki Masaj Stüdyonuz',
      description: 'Seelenruhe\'de rahat ve uyumlu bir atmosferde profesyonel masaj ve wellness tedavileri sunuyoruz. Deneyimli ekibimiz kendinizi tamamen rahat hissetmenizi ve enerjinizi yenilemenizi sağlar.'
    },
    services: {
      title: 'Hizmetlerimiz',
      subtitle: 'Profesyonel masaj ve wellness tedavileri',
      view_all: 'Tüm Hizmetleri Görüntüle',
      learn_more: 'Daha Fazla Bilgi',
      all_services: 'Tüm Tedaviler'
    },
    service_categories: {
      beauty_massage: 'Güzellik Masajı',
      therapeutic_massage: 'Terapötik Masaj',
      beauty_therapy: 'Güzellik Terapisi',
      regular_beauty: 'Düzenli Güzellik'
    },
    about: {
      title: 'Seelenruhe Hakkında',
      subtitle: 'Rahatlama ve Sağlık İçin Ortağınız',
      description: 'Uzun yıllardır müşterilerimize profesyonel masaj ve wellness tedavileri sunuyoruz. Ekibimiz, refahınız için tutkuyla ve özveriyle çalışan deneyimli ve sertifikalı terapistlerden oluşmaktadır.',
      experience: 'Yıllık Deneyim',
      professional: 'Profesyonel Terapistler',
      relaxing: 'Rahatlatıcı Atmosfer'
    },
    contact: {
      title: 'İletişim',
      subtitle: 'Ziyaretinizi dört gözle bekliyoruz',
      address: 'Örnek Sokak 123, 12345 Berlin',
      phone: '+49 30 12345678',
      email: 'info@seelenruhe.com?subject=Randevu%20Talebi%20Seelenruhe%20Masaj',
      hours: 'Pzt-Cum: 9:00-20:00, Cmt: 10:00-18:00',
      book_now: 'Şimdi Rezervasyon Yapın'
    },
    footer: {
      copyright: '© 2024 Seelenruhe Masaj Stüdyosu. Tüm hakları saklıdır.',
      privacy: 'Gizlilik Politikası',
      terms: 'Hizmet Şartları',
      imprint: 'Künye'
    },
    founderIntro: {
      greeting: 'Merhaba canlarım!',
      paragraph1: 'Ben Najlaa Loulo, sertifikalı masöz ve bütünsel esenliğe olan tutkumdan doğan bu kalp projesinin kurucusuyum.',
      paragraph2: 'Kliniğimde sadece bir masajdan daha fazlasını alırsınız – bu, günlük hayattan kişisel kaçışınızdır, ihtiyaçlarınıza göre özel olarak uyarlanmıştır.',
      paragraph3: 'Doğal yağlar, çeşitli masaj teknikleri ve bolca hassasiyetle çalışıyorum, böylece hem fiziksel hem de zihinsel olarak kendinizi tamamen iyi hissedersiniz.',
      paragraph4: 'Ve en iyisi mi? Yakında teklifimi profesyonel kozmetik tedavilerle genişleteceğim – sağlıklı, parlak bir cilt ve daha fazla esenlik için. Çünkü gerçek güzellik öz bakımla başlar.',
      paragraph5: 'Gerginlikler, kas yorgunluğu veya bakımlı bir cilt arzusu olsun – benimle en iyi ellerdesiniz.',
      paragraph6: 'Kendinize bir mola verin – bedeniniz, cildiniz ve iç dengeniz için. 🌿',
      paragraph7: ''
    },
    seo: {
      home_title: 'Seelenruhe Masaj Stüdyosu - Berlin\'de Rahatlama ve Sağlık',
      home_description: 'Berlin\'de profesyonel masaj ve wellness tedavileri. Modern stüdyomuzda vücut ve ruh için rahatlama. Şimdi randevunuzu alın!',
      home_keywords: 'Berlin Masaj, Berlin Wellness, Rahatlama, Masaj Stüdyosu, Sağlık, Terapi',
      services_title: 'Hizmetlerimiz - Seelenruhe Masaj Stüdyosu Berlin',
      services_description: 'Çeşitli masaj ve wellness tedavilerimizi keşfedin: Klasik Masaj, Wellness Tedavileri, Terapi Masajı ve daha fazlası.'
    }
  }
};

export function getTranslation(lang: Language): Translation {
  return translations[lang] || translations.de;
}

