/**
 * AI 实践日志数据。
 * 更新日志只需改这个文件，页面自动渲染。
 * 日期与进度以项目真实状态为准，不虚构已完成的工作。
 */

export interface TimelineEntry {
  /** 阶段标签，例如 Day 0 / Next */
  phase: string;
  /** 实际日期，未发生则为 null */
  date: string | null;
  /** 这一阶段做了什么 */
  title: string;
  /** 补充说明 */
  detail: string;
  /** 状态：done 已完成 / doing 进行中 / next 待探索 */
  status: 'done' | 'doing' | 'next';
}

export const timeline: TimelineEntry[] = [
  {
    phase: 'Day 0',
    date: '2026-10',
    title: '听完播客',
    detail: '四小时长谈，记了很多笔记。印象最深的问题：如果回到 20 岁，没有人脉、没有资源，会如何开始？',
    status: 'done',
  },
  {
    phase: 'Day 1',
    date: '2026-10',
    title: '决定行动',
    detail: '决定不再只做笔记。与其等待资源、团队和完美时机，不如先用现有工具做出一个最小可行产品。',
    status: 'done',
  },
  {
    phase: 'Day 2',
    date: '2026-10',
    title: '确定域名与网站定位',
    detail: '买下 sunwukong / suwukong / boji / dashui 四个 .health 域名，确定「AI × 大健康 × 长期主义」方向。',
    status: 'done',
  },
  {
    phase: 'Day 3',
    date: '2026-10',
    title: '使用 AI 构建网站',
    detail: '用 AI Coding Agent 从零写代码：Astro + TypeScript + Tailwind，单页完成全部八个区块。',
    status: 'done',
  },
  {
    phase: 'Day 4',
    date: '2026-10',
    title: '部署上线',
    detail: '构建通过，代码就绪。四个域名将通过 Cloudflare Pages 指向同一套代码。',
    status: 'doing',
  },
  {
    phase: 'Next',
    date: null,
    title: '继续探索',
    detail: '持续更新实践日志，深入 AI × 生命科学的选题。实验已经开始，剩下的交给时间。',
    status: 'next',
  },
];
