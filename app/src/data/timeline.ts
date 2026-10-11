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

export const timeline: TimelineEntry[] = [];
