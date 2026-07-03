import type { Locale, NavKey, TranslationMap } from "./types";

export const locales: Locale[] = ["en", "zh", "ja"];

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  zh: "中文",
  ja: "日本語",
};

export const navKeys: NavKey[] = [
  "home",
  "about",
  "products",
  "technology",
  "supply",
  "contact",
];

export const translations: TranslationMap = {
  en: {
    meta: {
      title: "MIDORI LAB — Creating the Future of Green",
      description:
        "Premium matcha, tea ingredients, and global OEM / ODM manufacturing solutions.",
    },
    nav: {
      logo: "MIDORI LAB",
      ariaLabel: "Primary navigation",
      items: {
        home: "HOME",
        about: "ABOUT",
        products: "PRODUCTS",
        technology: "TECHNOLOGY",
        supply: "SUPPLY",
        contact: "CONTACT",
      },
    },
    hero: {
      ariaLabel: "Hero",
      title: "MIDORI LAB",
      subtitle: "翠研",
      tagline: "Creating the Future of Green",
      explore: "EXPLORE",
      scroll: "SCROLL TO DISCOVER",
    },
    about: {
      label: "ABOUT US",
      headingLine1: "We are",
      headingLine2: "MIDORI LAB",
      body1:
        "We unite Japanese tea culture, advanced processing technology, and the deep matcha industry foundation of Guizhou, China — partnering with historic Guiyang matcha gardens to build a stable, high-quality global supply chain.",
      body2:
        "We provide premium matcha, tea leaf ingredients, OEM / ODM manufacturing, customized product development, and global supply chain solutions — helping brands worldwide create tea products defined by quality, innovation, and market competitiveness.",
      cta: "READ OUR STORY",
      imageAlt: "Premium tea plantation in misty highlands",
    },
    why: {
      label: "OUR ADVANTAGE",
      heading: "Why Midori Lab",
      cards: [
        {
          title: "Japanese Tea Heritage",
          description:
            "Rooted in centuries of Japanese tea craftsmanship, we honor tradition while advancing modern cultivation and processing excellence.",
        },
        {
          title: "Historic Guizhou Matcha Partnership",
          description:
            "A long-standing alliance with renowned Guizhou tea gardens delivers authentic matcha sourced from one of China's most respected growing regions.",
        },
        {
          title: "Global OEM / ODM",
          description:
            "End-to-end manufacturing and co-development services that help brands launch premium tea products at scale, worldwide.",
        },
        {
          title: "Quality Assurance",
          description:
            "Rigorous testing, traceability, and consistency standards ensure every batch meets the expectations of discerning global markets.",
        },
      ],
    },
    products: {
      label: "OUR PORTFOLIO",
      heading: "Products",
      subtitle:
        "Premium tea ingredients and manufacturing solutions for brands building the next generation of green innovation.",
      viewDetails: "VIEW DETAILS",
      items: [
        {
          title: "Ceremonial Matcha",
          description:
            "Stone-ground first harvest matcha for traditional tea ceremony and luxury beverage programs.",
        },
        {
          title: "Premium Matcha",
          description:
            "Vibrant, balanced grade matcha crafted for specialty cafés, premium retail, and modern tea brands.",
        },
        {
          title: "Food Grade Matcha",
          description:
            "Versatile culinary matcha for baking, confectionery, beverages, and large-scale food production.",
        },
        {
          title: "Tea Leaves",
          description:
            "Carefully sourced loose-leaf teas and raw materials for blending, packaging, and global distribution.",
        },
        {
          title: "OEM Manufacturing",
          description:
            "White-label production with scalable capacity, formulation support, and export-ready compliance.",
        },
        {
          title: "ODM Development",
          description:
            "Collaborative product development from concept to shelf — tailored formulas, packaging, and launch strategy.",
        },
      ],
    },
    technology: {
      label: "INNOVATION",
      heading: "Technology",
      subtitle:
        "Advanced processing, precision grinding, and quality control systems that preserve the integrity of every leaf.",
    },
    supply: {
      label: "GLOBAL REACH",
      heading: "Global Supply",
      subtitle:
        "Integrated logistics and sourcing networks connecting premium tea gardens to markets across the world.",
    },
    contact: {
      label: "GET IN TOUCH",
      heading: "Contact",
      subtitle:
        "Partner with MIDORI LAB for premium tea ingredients, manufacturing, and global supply solutions.",
      cta: "INQUIRY",
    },
    footer: {
      tagline: "Creating the Future of Green",
      copyright: "© MIDORI LAB. All rights reserved.",
      links: {
        about: "About",
        products: "Products",
        contact: "Contact",
        privacy: "Privacy",
      },
    },
  },

  zh: {
    meta: {
      title: "MIDORI LAB — 創造綠色的未來",
      description: "高品質抹茶、茶葉原料與全球 OEM / ODM 製造解決方案。",
    },
    nav: {
      logo: "MIDORI LAB",
      ariaLabel: "主要導覽",
      items: {
        home: "首頁",
        about: "關於我們",
        products: "產品",
        technology: "技術",
        supply: "全球供應",
        contact: "聯絡我們",
      },
    },
    hero: {
      ariaLabel: "主視覺",
      title: "MIDORI LAB",
      subtitle: "翠研",
      tagline: "創造綠色的未來",
      explore: "探索",
      scroll: "向下探索",
    },
    about: {
      label: "關於我們",
      headingLine1: "我們是",
      headingLine2: "MIDORI LAB",
      body1:
        "我們結合日本茶文化、先進製茶技術與中國貴州深厚的抹茶產業基礎，攜手歷史悠久的貴陽抹茶茶園，建立穩定且高品質的全球供應鏈。",
      body2:
        "我們提供高品質抹茶、茶葉原料、OEM / ODM 製造、客製化產品開發、全球供應鏈解決方案，協助世界各地品牌打造兼具品質、創新與市場競爭力的茶產品。",
      cta: "閱讀我們的故事",
      imageAlt: "雲霧繚繞的高級茶園",
    },
    why: {
      label: "我們的優勢",
      heading: "為什麼選擇翠研",
      cards: [
        {
          title: "日本茶文化傳承",
          description:
            "根植於數百年的日本製茶工藝，在傳承傳統的同時，推進現代化種植與加工技術的卓越標準。",
        },
        {
          title: "貴州抹茶歷史夥伴",
          description:
            "與貴州知名茶園建立長期合作，提供來自中國最受尊敬產區之一的正宗抹茶原料。",
        },
        {
          title: "全球 OEM / ODM",
          description:
            "提供從製造到共同開發的完整服務，協助品牌在全球市場規模化推出優質茶產品。",
        },
        {
          title: "品質保證",
          description:
            "嚴格的檢測、溯源與一致性標準，確保每一批次都符合全球高端市場的期望。",
        },
      ],
    },
    products: {
      label: "產品系列",
      heading: "產品",
      subtitle:
        "為致力於綠色創新下一代產品的品牌，提供優質茶葉原料與製造解決方案。",
      viewDetails: "查看詳情",
      items: [
        {
          title: "儀式級抹茶",
          description:
            "石磨初采抹茶，適合傳統茶道儀式與高端飲品項目。",
        },
        {
          title: "精品抹茶",
          description:
            "色澤鮮明、風味均衡的抹茶，專為精品咖啡館、高端零售與現代茶品牌打造。",
        },
        {
          title: "食品級抹茶",
          description:
            "適用於烘焙、甜點、飲品及大規模食品生產的多用途抹茶。",
        },
        {
          title: "茶葉原料",
          description:
            "精心採購的散茶與原料，供調配、包裝及全球配送使用。",
        },
        {
          title: "OEM 製造",
          description:
            "白牌生產服務，具備可擴充產能、配方支援及出口合規能力。",
        },
        {
          title: "ODM 開發",
          description:
            "從概念到上架的協作產品開發，涵蓋客製配方、包裝與上市策略。",
        },
      ],
    },
    technology: {
      label: "創新技術",
      heading: "技術",
      subtitle:
        "先進加工、精細研磨與品質管控系統，保留每一片茶葉的完整風味。",
    },
    supply: {
      label: "全球佈局",
      heading: "全球供應",
      subtitle:
        "整合物流與採購網絡，連接優質茶園與全球市場。",
    },
    contact: {
      label: "聯絡我們",
      heading: "聯絡",
      subtitle:
        "與 MIDORI LAB 合作，獲取優質茶葉原料、製造及全球供應鏈解決方案。",
      cta: "洽詢",
    },
    footer: {
      tagline: "創造綠色的未來",
      copyright: "© MIDORI LAB 版權所有。",
      links: {
        about: "關於我們",
        products: "產品",
        contact: "聯絡我們",
        privacy: "隱私政策",
      },
    },
  },

  ja: {
    meta: {
      title: "MIDORI LAB — 緑の未来を創る",
      description:
        "高品質抹茶、茶葉原料、グローバル OEM / ODM 製造ソリューション。",
    },
    nav: {
      logo: "MIDORI LAB",
      ariaLabel: "メインナビゲーション",
      items: {
        home: "ホーム",
        about: "会社概要",
        products: "製品",
        technology: "技術",
        supply: "グローバル供給",
        contact: "お問い合わせ",
      },
    },
    hero: {
      ariaLabel: "ヒーロー",
      title: "MIDORI LAB",
      subtitle: "翠研",
      tagline: "緑の未来を創る",
      explore: "探索する",
      scroll: "スクロールして探索",
    },
    about: {
      label: "会社概要",
      headingLine1: "私たちは",
      headingLine2: "MIDORI LAB",
      body1:
        "日本の茶文化、先進的な製茶技術、中国貴州の深い抹茶産業基盤を融合し、歴史ある貴陽抹茶茶園と提携して、安定した高品質のグローバルサプライチェーンを構築しています。",
      body2:
        "高品質抹茶、茶葉原料、OEM / ODM 製造、カスタム製品開発、グローバルサプライチェーンソリューションを提供し、世界中のブランドが品質、革新性、市場競争力を兼ね備えた茶製品を創出できるよう支援します。",
      cta: "ストーリーを読む",
      imageAlt: "霧に包まれたプレミアム茶園",
    },
    why: {
      label: "私たちの強み",
      heading: "なぜ MIDORI LAB か",
      cards: [
        {
          title: "日本茶文化の継承",
          description:
            "数百年にわたる日本の製茶技術に根ざし、伝統を尊重しながら現代の栽培・加工技術の卓越性を追求しています。",
        },
        {
          title: "貴州抹茶との歴史的パートナーシップ",
          description:
            "中国で最も尊敬される産地の一つ、貴州の著名茶園との長年の提携により、本格的な抹茶を提供します。",
        },
        {
          title: "グローバル OEM / ODM",
          description:
            "製造から共同開発まで、ブランドが世界中でプレミアム茶製品を大規模に展開できるエンドツーエンドサービス。",
        },
        {
          title: "品質保証",
          description:
            "厳格な検査、トレーサビリティ、一貫性基準により、すべてのロットが厳しいグローバル市場の期待に応えます。",
        },
      ],
    },
    products: {
      label: "製品ラインナップ",
      heading: "製品",
      subtitle:
        "次世代のグリーンイノベーションを構築するブランドのための、プレミアム茶原料と製造ソリューション。",
      viewDetails: "詳細を見る",
      items: [
        {
          title: "儀式用抹茶",
          description:
            "伝統的な茶道とラグジュアリービバレッジ向けの石臼挽き一番摘み抹茶。",
        },
        {
          title: "プレミアム抹茶",
          description:
            "スペシャルティカフェ、プレミアム小売、モダン茶ブランド向けの鮮やかでバランスの取れた抹茶。",
        },
        {
          title: "食品級抹茶",
          description:
            "ベーキング、菓子、飲料、大規模食品生産向けの多用途抹茶。",
        },
        {
          title: "茶葉原料",
          description:
            "ブレンド、パッケージング、グローバル流通向けに厳選されたリーフティーと原料。",
        },
        {
          title: "OEM 製造",
          description:
            "スケーラブルな生産能力、フォーミュレーション支援、輸出対応の白ラベル製造。",
        },
        {
          title: "ODM 開発",
          description:
            "コンセプトから棚まで、カスタムフォーミュラ、パッケージ、ローンチ戦略を含む共同製品開発。",
        },
      ],
    },
    technology: {
      label: "イノベーション",
      heading: "技術",
      subtitle:
        "一枚一枚の茶葉の完全性を保つ、先進的な加工、精密な研磨、品質管理システム。",
    },
    supply: {
      label: "グローバル展開",
      heading: "グローバル供給",
      subtitle:
        "プレミアム茶園と世界市場をつなぐ、統合物流・調達ネットワーク。",
    },
    contact: {
      label: "お問い合わせ",
      heading: "連絡先",
      subtitle:
        "プレミアム茶原料、製造、グローバルサプライソリューションについて MIDORI LAB へご相談ください。",
      cta: "お問い合わせ",
    },
    footer: {
      tagline: "緑の未来を創る",
      copyright: "© MIDORI LAB. All rights reserved.",
      links: {
        about: "会社概要",
        products: "製品",
        contact: "お問い合わせ",
        privacy: "プライバシー",
      },
    },
  },
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getHtmlLang(locale: Locale): string {
  if (locale === "zh") return "zh-Hant";
  if (locale === "ja") return "ja";
  return "en";
}
