import { useScrollReveal } from '@/hooks/useScrollReveal';

export function Transition() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="py-24 md:py-36 px-6 md:px-10 border-t border-line/40">
      <div
        ref={ref}
        className={`max-w-3xl mx-auto text-center reveal ${visible ? 'is-visible' : ''}`}
      >
        <div className="flex items-center justify-center gap-3 mb-5">
          <span className="h-px w-8 bg-line2" />
          <span className="text-xs font-mono tracking-[0.22em] text-accent uppercase">
            From Content to Automation
          </span>
          <span className="h-px w-8 bg-line2" />
        </div>

        <h2 className="text-display font-serif font-medium text-ink mb-8 text-balance">
          从内容运营，到AI自动化
        </h2>

        <p className="text-base md:text-lg text-ink2 leading-relaxed font-light max-w-2xl mx-auto">
          在实际内容运营中，我长期接触资讯搜集、内容筛选、选题整理、内容生产等重复性工作。
          基于这些真实工作场景，我开始尝试使用AI与自动化工具重新拆解内容流程，
          并将部分环节转化为可运行的工作流。
        </p>

        <div className="flex items-center justify-center gap-2 mt-10">
          <span className="text-sm font-mono text-ink4 tracking-wider">CONTENT</span>
          <span className="text-accent2 mx-2">→</span>
          <span className="text-sm font-mono text-ink4 tracking-wider">AUTOMATION</span>
        </div>
      </div>
    </section>
  );
}
