/**
 * 多域名品牌配置 —— 全站唯一数据源。
 *
 * 四个 .health 域名共用同一套代码，运行时根据 window.location.hostname
 * 从这里读取品牌名称与副标题。新增域名时只需在这里加一条记录。
 */

export interface DomainBrand {
  /** 品牌英文名（大字展示） */
  name: string;
  /** 品牌中文副标题 */
  subtitle: string;
  /** 一句话定位，用于 Hero 下方的品牌条 */
  tagline: string;
}

export const PRIMARY_DOMAIN = 'sunwukong.health';

export const domainConfig: Record<string, DomainBrand> = {
  'sunwukong.health': {
    name: 'SUNWUKONG HEALTH',
    subtitle: '孙悟空健康实验室',
    tagline: '探索 · 突破 · 健康科技',
  },
  'suwukong.health': {
    name: 'SUWUKONG HEALTH',
    subtitle: '创意与健康实验',
    tagline: '品牌 · 创意 · 实验',
  },
  'boji.health': {
    name: 'BOJI HEALTH',
    subtitle: '运动、训练与健康',
    tagline: '运动 · 训练 · 身体管理',
  },
  'dashui.health': {
    name: 'DASHUI HEALTH',
    subtitle: '睡眠、恢复与健康',
    tagline: '睡眠 · 恢复 · 长期健康',
  },
  'sunwukong.bio': {
    name: 'SUNWUKONG',
    subtitle: '孙学实践基地',
    tagline: 'AI × Health × Learning × Action',
  },
  'swk.bio': {
    name: 'SWK',
    subtitle: '孙学实践基地',
    tagline: 'AI × Health × Learning × Action',
  },
  'huangmao.club': {
    name: 'HUANGMAO',
    subtitle: '黄毛俱乐部',
    tagline: '认知 · 执行 · 突破',
  },
  'boji.vc': {
    name: 'BOJI VC',
    subtitle: '搏击与创投',
    tagline: '创业 · 投资 · 孵化',
  },
};

/** 未知域名 / 本地开发时的默认品牌 */
export const defaultBrand: DomainBrand = {
  name: 'SUN STUDIES',
  subtitle: '孙学实践基地',
  tagline: 'AI × Health × Learning × Action',
};

/**
 * 联系邮箱（mailto 方案）。
 * 部署前请改成你真实可用的收件地址；四个域名都可以在
 * Cloudflare Email Routing 里免费配置转发邮箱。
 */
export const CONTACT_EMAIL = 'hi@sunwukong.health';
