export type Locale = 'en' | 'zh';

const en = {
  seo: {
    title: 'Ah Yeow Provision Supply | Dried Goods, Rice & Food Staples Supplier Singapore',
    description:
      "Singapore's trusted wholesale supplier of dried goods, rice, cooking oil, sugar, salt and Chinese provisions since 1994. Serving restaurants, coffee shops & caterers at Serangoon. Call 6283 2468.",
    keywords:
      'dried goods supplier Singapore, rice supplier Singapore, cooking oil supplier Singapore, sugar supplier Singapore, salt supplier Singapore, Chinese provision shop Singapore, wholesale food supplier Singapore, dried seafood Singapore, spices supplier Singapore, provision shop Serangoon, 土产供应 新加坡, 亚耀土产供应',
  },
  navbar: {
    about: 'About',
    products: 'Products',
    clients: 'Our Clients',
    delivery: 'Delivery',
    testimonials: 'Testimonials',
    cta: 'Get a Quote',
    langToggle: '中文',
    langToggleHref: '/zh/',
  },
  hero: {
    tagline:
      "Singapore's trusted wholesale supplier of dried goods, rice, cooking oil, sugar, salt and traditional Chinese provisions.",
    since: 'Serving Singapore Since 1994',
    ctaEnquire: 'Enquire Now',
    ctaLearn: 'Learn More',
  },
  stats: [
    { label: 'Years in Service',   sub: 'Established 28 Nov 1994' },
    { label: 'Products Stocked',   sub: 'Dried goods & provisions' },
    { label: 'Business Clients',   sub: 'Restaurants, hotels & more' },
    { label: 'Weekly Deliveries',  sub: 'Island-wide coverage' },
  ],
  about: {
    sectionLabel: 'Who We Are',
    heading: "Singapore's Neighbourhood",
    headingAccent: 'Provision Partner',
    para1:
      "Founded in 1994, Ah Yeow Provision Supply (亚耀土产供应) has been a cornerstone of Singapore's food supply chain for over three decades. What began as a humble provision shop at Serangoon has grown into one of Singapore's most trusted wholesale suppliers of Chinese dried goods and specialty food products.",
    para2:
      "We carry an extraordinary selection of Chinese food supplies — from dried seafood and preserved vegetables to old-school tidbits and festive provisions that you simply won't find on supermarket shelves. Whether you run a restaurant, coffee shop, caterer, or hotel kitchen, we have what you need.",
    features: [
      { title: 'Wholesale Pricing',  desc: 'Competitive bulk rates for business clients' },
      { title: 'Specialist Stock',   desc: 'Rare & traditional products not found in supermarkets' },
      { title: 'Reliable Supply',    desc: 'Consistent stock replenishment you can count on' },
      { title: 'Personal Service',   desc: 'Decades of expertise from our experienced team' },
    ],
    cta: 'Get in Touch',
  },
  products: {
    sectionLabel: 'What We Carry',
    heading: 'Our Product Categories',
    subheading:
      'Wholesale provisions for restaurants, coffee shops, hawker stalls and caterers. Over 1,000 products — from bulk rice and dried seafood to spices, sauces and soup ingredients.',
    categories: [
      {
        title: 'Rice (Bulk & Wholesale)',
        desc: 'AAA Golden Eagle Thai fragrant rice, Thailand organic brown rice, Flying Man crystalline rice — available in 25kg sacks. Jasmine rice, glutinous rice and rice flour also in stock.',
      },
      {
        title: 'Dried Seafood',
        desc: 'Indonesia ikan bilis (small & large), dried shrimp (虾米), premium meat shrimp, Japan dried scallops (干贝), Japan whitebait, seaweed (紫菜) and canned abalone in brine.',
      },
      {
        title: 'Dried Mushrooms & Fungi',
        desc: 'Japan small flower mushroom (日本小花菇), shredded shiitake (香菇丝), white fungus (白木耳), mini black fungus (小木耳) — for soups, braised dishes and zi char.',
      },
      {
        title: 'Spices & Seasonings',
        desc: 'Star anise (八角), cinnamon (桂皮), cloves (丁香), black cardamon (草果), BABA curry powder, belacan (峇拉煎), white pepper powder, Ajinomoto MSG (味精) — essential for hawker and restaurant kitchens.',
      },
      {
        title: 'Condiments & Cooking Sauces',
        desc: "Maggi stock (汤), Lao Gan Ma (老干妈), Cheong Chan cooking caramel, A1 Ba Ku Teh soup spices, EL chili paste, Heng's crispy fish/prawn chili, Golden Carp kaya, cooking lime juice.",
      },
      {
        title: 'Soup Ingredients & Herbs',
        desc: 'Red dates (红枣), dried lily (百合), daylily (金针), Chinese yam (淮山), goji berries (枸杞), ginkgo nuts (白果), lotus seeds (莲子), assam skin — ready for BKT, tong sui and herbal soups.',
      },
      {
        title: 'Noodles, Tofu Skin & Dry Goods',
        desc: 'A1 rice vermicelli, Egret Brans rice sticks, Shandong China vermicelli, vegetable noodles, square & broken tofu skin (豆支), Yuri panko bread crumbs, tapioca starch, corn flour.',
      },
      {
        title: 'Preserved Vegetables & Sugar',
        desc: 'Twin Rabbit china radish (菜脯碎), Sichuan pickled mustard greens (榨菜), rock sugar (冰糖), black/red sugar, maltose (麦芽糖), raw cane sugar, Ayam Brand sardines, fried dace (豆豉鲮鱼).',
      },
    ],
    ctaNote: "Don't see what you're looking for? We likely have it in stock.",
    cta: 'Ask About Specific Products',
  },
  clients: {
    sectionLabel: 'Our Clientele',
    heading: "Trusted by Singapore's Finest",
    subheading:
      "From neighbourhood coffee shops to five-star hotel kitchens, businesses across Singapore rely on Ah Yeow for their provision needs.",
    sectorLabel: 'Serving Businesses Across Every Sector',
    sectors: [
      { icon: '🍜', label: 'Restaurants & Eateries' },
      { icon: '🏨', label: 'Hotels & Resorts' },
      { icon: '🎉', label: 'Catering Companies' },
      { icon: '🏫', label: 'Institutions & Schools' },
      { icon: '✈️', label: 'Airline Caterers' },
      { icon: '🍱', label: 'Food Manufacturers' },
    ],
  },
  fleet: {
    sectionLabel: 'Our Delivery Fleet',
    heading: 'Dependable Delivery,',
    headingAccent: 'Every Single Time',
    subheading:
      'We operate our own in-house fleet to ensure your orders reach you on time, in full, and in perfect condition — consistently.',
    features: [
      {
        title: 'In-House Fleet',
        desc: 'Our own dedicated delivery vehicles — no third-party logistics, no middlemen. Every delivery is handled directly by our team.',
      },
      {
        title: 'Island-Wide Coverage',
        desc: 'We deliver across all of Singapore — from the East Coast to the West, North to South, including industrial estates and city-centre kitchens.',
      },
      {
        title: 'Reliable Scheduling',
        desc: 'Flexible delivery windows to suit your kitchen schedule. We work around your operations — not the other way around.',
      },
      {
        title: 'Careful Handling',
        desc: 'Products are properly packed and secured for transit. Dry goods, delicate dried seafood, and fragile items arrive in perfect condition.',
      },
    ],
    stats: [
      { value: '6',        label: 'Delivery Vehicles' },
      { value: 'Mon–Sat',  label: 'Delivery Days' },
      { value: 'Same-Day', label: 'Order Cut-Off*' },
      { value: 'All 28',   label: 'Districts Covered' },
    ],
    footNote: '* Same-day delivery subject to order time and availability. Contact us for details.',
    ctaNote: 'Ready to set up a regular delivery account for your business?',
    cta: 'Arrange a Delivery',
  },
  testimonials: {
    sectionLabel: "What Our Clients Say",
    heading: 'Testimonials',
    subheading: "Don't just take our word for it — here's what Singapore's top kitchens have to say.",
    items: [
      {
        quote: "Ah Yeow has been our go-to supplier for dried seafood and preserved goods for years. The quality is consistently excellent and delivery is always on time.",
        name: "Replace with name",
        title: "Head Chef",
        company: "Replace with restaurant/hotel name",
        rating: 5,
      },
      {
        quote: "We've tried other suppliers but none can match the range and quality of specialty Chinese products that Ah Yeow carries. Their team is knowledgeable and always helpful.",
        name: "Replace with name",
        title: "Owner",
        company: "Replace with business name",
        rating: 5,
      },
      {
        quote: "As a catering company handling large events, reliability is everything. Ah Yeow has never let us down — orders are accurate, deliveries are punctual, and the pricing is fair.",
        name: "Replace with name",
        title: "Operations Manager",
        company: "Replace with company name",
        rating: 5,
      },
    ],
  },
  contact: {
    sectionLabel: 'Get In Touch',
    heading: 'Contact Us',
    subheading:
      "Have an enquiry about wholesale pricing, delivery, or a specific product? Fill in the form and we'll get back to you promptly.",
    visitUs: 'Visit Us',
    openingHours: 'Opening Hours',
    findUs: 'Find Us',
    openInMaps: 'Open in Google Maps',
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    sendEnquiry: 'Send an Enquiry',
    nameLabel: 'Full Name',
    namePlaceholder: 'Your name',
    companyLabel: 'Company Name',
    companyPlaceholder: 'Your business (optional)',
    emailLabel: 'Email Address',
    phoneLabel: 'Phone Number',
    inquiryLabel: 'Type of Enquiry',
    inquiryPlaceholder: 'Select an enquiry type...',
    inquiryOptions: [
      { value: 'wholesale',    label: 'Wholesale / Bulk Order' },
      { value: 'delivery',     label: 'Delivery & Logistics' },
      { value: 'product',      label: 'Product Availability' },
      { value: 'pricing',      label: 'Pricing & Quotation' },
      { value: 'partnership',  label: 'Business Partnership' },
      { value: 'other',        label: 'Other' },
    ],
    messageLabel: 'Message',
    messagePlaceholder: 'Tell us what you\'re looking for, quantities, delivery requirements, etc.',
    successMsg: "✓ Thank you! Your enquiry has been received. We'll be in touch shortly.",
    errorMsg: 'Something went wrong. Please try again or call us at 6283 2468.',
    submitBtn: 'Send Enquiry',
    sendingBtn: 'Sending…',
  },
  footer: {
    tagline:
      "Singapore's trusted wholesale supplier of Chinese dried goods, traditional provisions, and specialty food products since 1994.",
    uenLabel: 'UEN',
    quickLinks: 'Quick Links',
    findUs: 'Find Us',
  },
};

const zh: typeof en = {
  seo: {
    title: '亚耀土产供应 | 新加坡干货、米粮及食材批发供应商',
    description:
      '新加坡值得信赖的批发供应商，供应干货、米粮、食用油、糖盐及华人传统食材，自1994年服务新加坡。服务餐馆、咖啡店及餐饮公司，实龙岗。电话：6283 2468。',
    keywords:
      '干货供应商 新加坡, 米粮供应商 新加坡, 食用油供应商 新加坡, 糖盐供应商 新加坡, 土产供应 新加坡, 批发食材 新加坡, 干海鲜 新加坡, 香料供应商 新加坡, 土产店 实龙岗, 亚耀土产供应, dried goods supplier Singapore',
  },
  navbar: {
    about: '关于我们',
    products: '产品',
    clients: '客户',
    delivery: '送货服务',
    testimonials: '客户评价',
    cta: '立即询价',
    langToggle: 'English',
    langToggleHref: '/en/',
  },
  hero: {
    tagline: '新加坡值得信赖的干货、米粮、食用油、糖盐及传统食材批发供应商。',
    since: '自1994年服务新加坡',
    ctaEnquire: '立即询价',
    ctaLearn: '了解更多',
  },
  stats: [
    { label: '服务年数',     sub: '1994年11月28日创立' },
    { label: '产品种类',     sub: '干货与土产' },
    { label: '企业客户',     sub: '餐馆、酒店等' },
    { label: '每周送货次数', sub: '全岛覆盖' },
  ],
  about: {
    sectionLabel: '关于我们',
    heading: '新加坡邻里',
    headingAccent: '土产供应伙伴',
    para1:
      '创立于1994年，亚耀土产供应三十余年来是新加坡食品供应链的重要一环。从实龙岗的一家小土产店起步，如今已成为新加坡最值得信赖的华人干货及特色食品批发供应商之一。',
    para2:
      '我们供应种类繁多的华人食材——从干货海鲜、腌制蔬菜到传统零食及节庆食品，超市货架上难以找到的特色产品应有尽有。无论您经营餐馆、咖啡店、餐饮公司还是酒店厨房，我们都能满足您的需求。',
    features: [
      { title: '批发价格', desc: '为企业客户提供具竞争力的散装价格' },
      { title: '专业库存', desc: '超市难觅的珍稀传统产品' },
      { title: '稳定供货', desc: '持续稳定的补货，值得信赖' },
      { title: '贴心服务', desc: '数十年专业经验，团队知识丰富' },
    ],
    cta: '联系我们',
  },
  products: {
    sectionLabel: '我们的产品',
    heading: '产品类别',
    subheading:
      '为餐馆、咖啡店、小贩摊位及餐饮公司提供批发食材。逾1,000种产品——涵盖散装米粮、干货海鲜、香料、酱料及汤料食材。',
    categories: [
      {
        title: '米粮（散装批发）',
        desc: 'AAA金鹰泰国香米、泰国有机红糙米、金飞人水晶香米——提供25公斤装。茉莉香米、糯米及米粉亦有库存。',
      },
      {
        title: '干货海鲜',
        desc: '印尼大小江鱼（小鱼干）、虾米、上等肉虾米、日本小干贝、日本银鱼、无沙紫菜及清汤鲍鱼。',
      },
      {
        title: '干菇与菌类',
        desc: '日本小花菇、香菇丝、白木耳、小木耳——适用于汤品、红烧菜肴及炒菜。',
      },
      {
        title: '香料与调味',
        desc: '八角、桂皮、丁香、草果、峇峇咖喱粉、峇拉煎、白胡椒粉、味之素味精——小贩与餐馆厨房必备。',
      },
      {
        title: '调味品与烹饪酱料',
        desc: "Maggi汤、老干妈、祥珍烹饪焦糖、A1肉骨茶汤料、EL辣椒酱、Heng's香脆鱼/虾辣椒、金鲤咖椰、泰国煮菜酸甘水。",
      },
      {
        title: '汤料与药材',
        desc: '红枣、百合、金针、淮山、枸杞、白果、莲子、亚三皮——适用于肉骨茶、糖水及药材汤。',
      },
      {
        title: '面条、豆支与干货',
        desc: 'A1米粉、榕鹤牌白粿干、中国山东粉丝、蔬菜面条、四方豆支及断豆支、日式面包糠、木薯淀粉及玉米粉。',
      },
      {
        title: '腌制蔬菜与糖类',
        desc: '双兔牌中国菜脯碎、鱼泉牌四川榨菜、冰糖、黑糖/红糖、战船麦芽糖、原蔗糖、沙丁鱼及豆豉鲮鱼。',
      },
    ],
    ctaNote: '找不到您需要的产品？我们很可能有货。',
    cta: '询问特定产品',
  },
  clients: {
    sectionLabel: '我们的客户',
    heading: '深受新加坡各界信赖',
    subheading:
      '从邻里咖啡店到五星级酒店厨房，新加坡各行各业都信赖亚耀满足其食材供应需求。',
    sectorLabel: '服务各行各业企业',
    sectors: [
      { icon: '🍜', label: '餐馆与食肆' },
      { icon: '🏨', label: '酒店与度假村' },
      { icon: '🎉', label: '餐饮公司' },
      { icon: '🏫', label: '机构与学校' },
      { icon: '✈️', label: '航空配餐商' },
      { icon: '🍱', label: '食品制造商' },
    ],
  },
  fleet: {
    sectionLabel: '我们的送货车队',
    heading: '每次送货，',
    headingAccent: '准时可靠',
    subheading:
      '我们拥有自有送货车队，确保您的订单准时、完整、完好无损地送达——始终如一。',
    features: [
      {
        title: '自有车队',
        desc: '专属送货车辆——无需第三方物流，无中间商。每次送货均由我们团队直接处理。',
      },
      {
        title: '全岛覆盖',
        desc: '我们为新加坡全岛送货——从东海岸到西部，从北部到南部，包括工业区及市中心厨房。',
      },
      {
        title: '灵活排程',
        desc: '灵活的送货时段，配合您的厨房安排。我们配合您的运营——而不是相反。',
      },
      {
        title: '妥善处理',
        desc: '产品经妥善包装固定，确保运输安全。干货、精细干海鲜及易碎物品均完好送达。',
      },
    ],
    stats: [
      { value: '6',      label: '辆送货车' },
      { value: '周一至六', label: '送货日' },
      { value: '即日送达', label: '截单时间*' },
      { value: '全28',   label: '个区覆盖' },
    ],
    footNote: '* 即日送达视订单时间及货品供应情况而定，详情请联系我们。',
    ctaNote: '准备好为您的企业设立定期送货账户？',
    cta: '安排送货',
  },
  testimonials: {
    sectionLabel: '客户怎么说',
    heading: '客户评价',
    subheading: '不只是我们说——听听新加坡顶尖厨房的心声。',
    items: [
      {
        quote: "亚耀多年来一直是我们干货海鲜及腌制食品的首选供应商。品质始终如一，送货准时。",
        name: "请填写姓名",
        title: "主厨",
        company: "请填写餐馆/酒店名称",
        rating: 5,
      },
      {
        quote: "我们试过其他供应商，但没有一家能比得上亚耀所提供的中式特色产品的种类和品质。他们的团队知识渊博，服务周到。",
        name: "请填写姓名",
        title: "负责人",
        company: "请填写公司名称",
        rating: 5,
      },
      {
        quote: "作为承接大型活动的餐饮公司，可靠性至关重要。亚耀从未让我们失望——订单准确，送货准时，定价合理。",
        name: "请填写姓名",
        title: "运营经理",
        company: "请填写公司名称",
        rating: 5,
      },
    ],
  },
  contact: {
    sectionLabel: '联系我们',
    heading: '联系我们',
    subheading: '对批发价格、送货或特定产品有疑问？填写表单，我们将尽快回复。',
    visitUs: '拜访我们',
    openingHours: '营业时间',
    findUs: '找到我们',
    openInMaps: '在Google地图打开',
    days: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
    sendEnquiry: '发送询价',
    nameLabel: '全名',
    namePlaceholder: '您的姓名',
    companyLabel: '公司名称',
    companyPlaceholder: '您的公司（可选）',
    emailLabel: '电子邮件地址',
    phoneLabel: '电话号码',
    inquiryLabel: '询价类型',
    inquiryPlaceholder: '请选择询价类型...',
    inquiryOptions: [
      { value: 'wholesale',   label: '批发 / 大量订购' },
      { value: 'delivery',    label: '送货与物流' },
      { value: 'product',     label: '产品库存查询' },
      { value: 'pricing',     label: '价格与报价' },
      { value: 'partnership', label: '商业合作' },
      { value: 'other',       label: '其他' },
    ],
    messageLabel: '留言',
    messagePlaceholder: '请告诉我们您的需求、数量、送货要求等。',
    successMsg: '✓ 谢谢！您的询价已收到，我们将尽快与您联系。',
    errorMsg: '出错了，请重试或致电6283 2468。',
    submitBtn: '发送询价',
    sendingBtn: '发送中…',
  },
  footer: {
    tagline: '自1994年起，新加坡最值得信赖的华人干货、传统土产及特色食品批发供应商。',
    uenLabel: '统一实体编号',
    quickLinks: '快速链接',
    findUs: '联系方式',
  },
};

export const translations = { en, zh } as const;
export type Translations = typeof en;
