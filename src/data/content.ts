/**
 * ============================================================
 *  网站内容配置文件
 *  所有文字、数据、链接、图片路径都集中在这里管理。
 *  修改网站内容只需编辑本文件，无需修改组件代码。
 * ============================================================
 */

// ===== 个人信息 =====
export const PROFILE = {
  name: '梁霆珊',
  tagline: '内容运营 × AI自动化',
  enTagline: 'CONTENT STRATEGY × AI AUTOMATION',
  bio: '3年品牌新媒体与内容增长经验，具备AI Skills及工作流设计实践，持续探索用AI优化资讯处理、内容生产与运营效率。',
  keywords: ['CONTENT STRATEGY', 'CONTENT GROWTH', 'AI WORKFLOW', 'CONTENT AUTOMATION'],
  avatar: '/images/avatar.jpg',
};

// ===== 联系方式 =====
export const CONTACT = {
  wechat: '_ttnnn',
  email: '1044677068@qq.com',
  phone: "18675761431",
};

// ===== 外部链接 =====
export const LINKS = {
  // 公众号文章链接（通过文章进入可查看公众号）
  wechatArticle: 'https://weixin.qq.com/sph/AhLRilW3BI',
  // 视频号作品链接
  videoLink: '[PLACEHOLDER_VIDEO_LINK]',
  // 抖音账号链接
  douyinLink: 'https://v.douyin.com/06KvQZd8pSw/ 1@7.com :1pm',
  // 内容库链接（后续替换为实际内容库网页）
  contentDatabase: 'https://ttn.app.n8n.cloud/projects/Sxv1ObIRXV9ISyuA/datatables/f8sBsCCbmNOEZUa3',
  // n8n实时工作流链接（后续替换为可查看实时n8n调用的网页）
  n8nLive: 'https://ttn.app.n8n.cloud/workflow/bJj8a2ePwpx1d3iZ',
};

// ===== 图片路径 =====
export const IMAGES = {
  avatar: '/images/avatar.jpg',
  wechat: ['/images/wechat-01.png', '/images/wechat-02.png', '/images/wechat-03.png'],
  douyin: ['/images/douyin.png'],
  videoAccount: ['/images/video-account.png'],
  xiaohongshu: ['/images/xiaohongshu-01.png', '/images/xiaohongshu-02.png', '/images/xiaohongshu-03.png'],
  n8nWorkflow: '/images/n8n-workflow.png',
  n8nDemo: '/images/n8n-demo.png',
  dataTable: '/images/data-table.png',
};

// ===== 内容运营案例 =====
export type CaseStat = { value: string; label: string };
export type CaseSubArea = {
  name: string;
  enName: string;
  images: string[];
  button: { text: string; url: string };
};
export type CaseCard = {
  id: string;
  enName: string;
  title: string;
  desc?: string;
  stats: CaseStat[];
  images: string[];
  button?: { text: string; url: string | null };
  subAreas?: CaseSubArea[];
};

export const CASES: CaseCard[] = [
  {
    id: 'wechat',
    enName: 'WeChat Official Account',
    title: '公众号｜品牌内容运营',
    desc: '通过行业趋势、热点资讯、用户关注问题及内容表现调整选题与内容策略，优化标题、文章结构和内容表达。',
    stats: [
      { value: '4W+', label: '单篇最高阅读' },
      { value: '2W+', label: '多篇内容阅读' },
      { value: '5000+', label: '累计新增粉丝' },
      { value: '3倍', label: '月均销售线索增长' },
    ],
    images: IMAGES.wechat,
    button: { text: '查看文章 ↗', url: LINKS.wechatArticle },
  },
  {
    id: 'short-video',
    enName: 'Douyin & WeChat Channels',
    title: '短视频｜抖音 & 视频号',
    desc: '参与品牌新业务方向账号搭建，协作编导完成内容方向讨论、选题策划及效果复盘。',
    stats: [
      { value: '6000+', label: '3个月新增粉丝' },
      { value: '2W+', label: '部分视频播放' },
    ],
    images: [],
    subAreas: [
      {
        name: '抖音',
        enName: 'Douyin',
        images: IMAGES.douyin,
        button: { text: '查看账号 ↗', url: LINKS.douyinLink },
      },
      {
        name: '视频号',
        enName: 'WeChat Channels',
        images: IMAGES.videoAccount,
        button: { text: '查看视频 ↗', url: LINKS.videoLink },
      },
    ],
  },
  {
    id: 'xhs',
    enName: 'Xiaohongshu',
    title: '小红书｜历史作品',
    desc: '实习期间内容运营作品，该账号现已不再运营。',
    stats: [],
    images: IMAGES.xiaohongshu,
    button: { text: '查看作品 ↗', url: null },
  },
];

// ===== AI自动化项目 =====
export const PROJECT = {
  title: 'AI跨境电商资讯采集与内容生成系统',
  subtitle: '基于 n8n + Coze 的多源资讯采集、智能筛选与内容生成工作流',
  background: '过去进行跨境电商内容策划时，需要人工浏览海外行业网站及资讯源，再完成资讯搜集、筛选、整理和选题判断。因此希望将其中重复性较高的前期内容处理流程自动化。',
  goalIntro: '将以下流程转化为可自动执行的AI工作流：',
  goalSteps: ['资讯搜集', '信息整理', '内容判断', '选题筛选', '内容生成'],
  stats: [
    { value: '10', label: '采集资讯' },
    { value: '9', label: '通过AI筛选' },
    { value: '9', label: '生成内容初稿' },
  ],
  note: '工作流已实际运行验证。',
};

// ===== 工作流节点（英文为视觉标题，中文为说明） =====
export const WORKFLOW_NODES = [
  {
    id: 'source',
    en: 'SOURCE',
    cn: '资讯来源',
    title: 'Schedule Trigger｜定时触发',
    desc: '按设定时间自动启动工作流，无需人工手动运行。该节点在现有n8n工作流中实际存在并已运行验证。',
  },
  {
    id: 'collect',
    en: 'COLLECT',
    cn: '资讯采集',
    title: '资讯采集',
    desc: '从RSS资讯源获取最新内容。',
  },
  {
    id: 'normalize',
    en: 'NORMALIZE',
    cn: '信息标准化',
    title: '信息标准化',
    desc: '统一资讯来源、标题、发布时间、链接等字段。',
  },
  {
    id: 'analyze',
    en: 'ANALYZE',
    cn: 'AI资讯分析',
    title: 'AI资讯分析',
    desc: '对资讯进行分类、重要程度、跨境相关性、商业影响及选题角度分析。',
  },
  {
    id: 'filter',
    en: 'FILTER',
    cn: '高价值筛选',
    title: '高价值筛选',
    desc: '根据AI分析结果筛选值得进一步加工的资讯。',
  },
  {
    id: 'generate',
    en: 'GENERATE',
    cn: 'AI内容生成',
    title: 'AI内容生成',
    desc: '生成标题、核心观点、商业影响、正文及选题角度。',
  },
  {
    id: 'deduplicate',
    en: 'DEDUPLICATE',
    cn: '重复检测',
    title: '重复检测',
    desc: '通过资讯链接判断内容是否已经写入内容库，避免重复记录。',
  },
  {
    id: 'store',
    en: 'STORE',
    cn: '内容入库',
    title: '内容入库',
    desc: '将处理后的资讯与AI生成内容保存到Data Table。',
  },
];

// ===== LIVE DEMO 演示步骤 =====
export const DEMO_STEPS = [
  { en: 'Schedule Trigger', cn: '定时触发成功', detail: '' },
  { en: '资讯采集', cn: '获取10条资讯', detail: '' },
  { en: '信息标准化', cn: '完成资讯结构化处理', detail: '' },
  { en: 'AI分析', cn: '完成10条资讯分析', detail: '' },
  { en: '内容筛选', cn: '9条资讯通过筛选', detail: '' },
  { en: 'AI内容生成', cn: '生成9条内容初稿', detail: '' },
  { en: '重复检测', cn: '完成链接去重检查', detail: '' },
  { en: '内容入库', cn: '9条记录写入内容库', detail: '' },
];

// ===== AI分析结果字段 =====
export const AI_ANALYSIS_FIELDS = [
  { key: 'category', cn: '内容类别', value: 'Cross-border E-commerce' },
  { key: 'importance', cn: '重要程度', value: '9 / 10' },
  { key: 'cross_border_relevance', cn: '跨境相关性', value: 'High｜高' },
  { key: 'worth_covering', cn: '是否值得报道', value: '是' },
  { key: 'summary', cn: '摘要', value: '亚马逊宣布向第三方卖家开放多仓智能调拨功能，帮助卖家降低跨仓配送成本并提升履约效率。' },
  { key: 'business_impact', cn: '商业影响', value: '跨境卖家可减少库存分散导致的物流损耗，优化仓储策略，对中小卖家运营成本影响显著。' },
  { key: 'topic_angles', cn: '选题角度', value: '从卖家成本优化视角切入，结合具体案例解读调拨功能实际价值。' },
];

// ===== AI生成内容 =====
export const AI_GENERATED_CONTENT = {
  originalTitle: 'Amazon Opens Multi-Warehouse Smart Allocation for Third-Party Sellers',
  generatedTitle: '亚马逊开放多仓智能调拨：跨境卖家的物流成本新解法',
  keyPoint: '亚马逊向第三方卖家开放多仓智能调拨功能，系统可自动分配库存至最优仓库，降低跨仓配送成本并提升履约效率。',
  businessImpact: '跨境卖家可减少库存分散导致的物流损耗，优化仓储策略，对中小卖家运营成本影响显著。',
  body: '亚马逊近日宣布向第三方卖家开放多仓智能调拨功能。该功能允许系统根据销售预测、仓库容量和配送距离，自动将库存分配至最优仓库，减少跨仓配送带来的额外成本与时间损耗。对于跨境电商卖家而言，这意味着可以更灵活地管理多仓库存，降低因库存分散导致的物流费用，同时提升订单履约效率与买家体验。该功能对中小卖家尤为关键，有助于缩小其与头部卖家在仓储物流能力上的差距。',
  topicAngles: '从卖家成本优化视角切入，结合具体案例解读调拨功能实际价值。',
};

// ===== 内容库 Data Table 字段结构 =====
export const DB_COLUMNS = [
  'source', 'original_title', 'publishedAt', 'link', 'category', 'importance',
  'cross_border_relevance', 'worth_covering', 'summary', 'business_impact',
  'topic_angles', 'title', 'key_point', 'content',
];

export const DB_COLUMN_CN: Record<string, string> = {
  source: '资讯来源',
  original_title: '原标题',
  publishedAt: '发布时间',
  link: '链接',
  category: '分类',
  importance: '重要程度',
  cross_border_relevance: '跨境相关性',
  worth_covering: '是否值得报道',
  summary: '摘要',
  business_impact: '商业影响',
  topic_angles: '选题角度',
  title: 'AI生成标题',
  key_point: '核心观点',
  content: '正文',
};

export const DB_ROWS = [
  {
    source: 'Amazon News',
    original_title: 'Amazon Opens Multi-Warehouse Smart Allocation for Third-Party Sellers',
    publishedAt: '2025-09-15',
    link: 'https://example.com/amazon-allocation',
    category: 'Cross-border E-commerce',
    importance: '9/10',
    cross_border_relevance: 'High',
    worth_covering: '是',
    summary: '亚马逊宣布向第三方卖家开放多仓智能调拨功能。',
    business_impact: '降低跨境卖家物流成本。',
    topic_angles: '卖家成本优化视角',
    title: '亚马逊开放多仓智能调拨：跨境卖家的物流成本新解法',
    key_point: '系统自动分配库存至最优仓库，降低跨仓配送成本。',
    content: '亚马逊向第三方卖家开放多仓智能调拨功能…',
  },
  {
    source: 'Shopify Blog',
    original_title: 'Shopify Expands Cross-Border Payment Options',
    publishedAt: '2025-09-14',
    link: 'https://example.com/shopify-payments',
    category: 'Payment & Logistics',
    importance: '8/10',
    cross_border_relevance: 'High',
    worth_covering: '是',
    summary: 'Shopify扩展跨境支付选项，支持更多本地货币结算。',
    business_impact: '帮助独立站卖家降低汇率损耗。',
    topic_angles: '独立站支付优化视角',
    title: 'Shopify扩展跨境支付：独立站卖家的汇率新选择',
    key_point: '支持更多本地货币结算，降低汇率损耗。',
    content: 'Shopify近日扩展跨境支付选项…',
  },
  {
    source: 'TikTok Commerce',
    original_title: 'TikTok Shop Launches New Creator-Brand Collaboration Tools',
    publishedAt: '2025-09-13',
    link: 'https://example.com/tiktok-collab',
    category: 'Social Commerce',
    importance: '7/10',
    cross_border_relevance: 'Medium',
    worth_covering: '是',
    summary: 'TikTok Shop推出创作者与品牌协作新工具。',
    business_impact: '降低达人带货合作门槛。',
    topic_angles: '达人营销效率视角',
    title: 'TikTok Shop推出协作工具：达人带货的新基建',
    key_point: '简化创作者与品牌合作流程。',
    content: 'TikTok Shop推出创作者与品牌协作新工具…',
  },
];
