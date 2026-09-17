import { PROJECT } from '@/data/content';
import { SectionHeading } from '@/components/SectionHeading';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ArrowRight } from 'lucide-react';

export function AIProject() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="ai-project" className="py-24 md:py-32 px-6 md:px-10 border-t border-line/40">
      <div className="max-w-6xl mx-auto">
        <SectionHeading en="AI AUTOMATION PROJECT" cn="AI自动化项目" />

        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
          {/* Project title block */}
          <div className="p-8 md:p-12 bg-white/40 border border-line/50 rounded-xl mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 text-[10px] font-mono tracking-[0.1em] text-accent2 border border-accent/25 rounded-full uppercase">
                Project
              </span>
              <span className="text-[10px] font-mono text-ink4">n8n + AI</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-serif font-medium text-ink mb-3 text-balance">
              {PROJECT.title}
            </h3>
            <p className="text-base text-ink3 leading-relaxed max-w-3xl">
              {PROJECT.subtitle}
            </p>
          </div>

          {/* Background + Goal */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
            <div className="p-6 md:p-7 border border-line/50 rounded-xl bg-paper/30">
              <h4 className="text-xs font-mono tracking-[0.1em] text-accent2 uppercase mb-3">
                项目背景
              </h4>
              <p className="text-sm text-ink2 leading-relaxed">
                {PROJECT.background}
              </p>
            </div>
            <div className="p-6 md:p-7 border border-line/50 rounded-xl bg-paper/30">
              <h4 className="text-xs font-mono tracking-[0.1em] text-accent2 uppercase mb-3">
                项目目标
              </h4>
              <p className="text-sm text-ink2 leading-relaxed mb-4">
                {PROJECT.goalIntro}
              </p>
              <div className="flex flex-wrap items-center gap-2">
                {PROJECT.goalSteps.map((step, i) => (
                  <span key={i} className="inline-flex items-center gap-2">
                    <span className="px-3 py-1.5 text-xs text-ink2 bg-paper2/50 border border-line rounded-md">
                      {step}
                    </span>
                    {i < PROJECT.goalSteps.length - 1 && (
                      <ArrowRight size={11} strokeWidth={1.5} className="text-ink4" />
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Core stats */}
          <div className="grid grid-cols-3 gap-px bg-line/40 border border-line/50 rounded-xl overflow-hidden mb-5">
            {PROJECT.stats.map((stat, i) => (
              <div
                key={i}
                className={`bg-paper p-8 md:p-10 flex flex-col items-center text-center reveal reveal-delay-${i + 1} ${visible ? 'is-visible' : ''}`}
              >
                <span className="text-4xl md:text-6xl font-serif font-medium text-accent2 tracking-tight">
                  {stat.value}
                </span>
                <span className="text-xs md:text-sm text-ink3 mt-2">{stat.label}</span>
              </div>
            ))}
          </div>

          <p className="text-sm text-ink3 text-center italic">
            {PROJECT.note}
          </p>
        </div>
      </div>
    </section>
  );
}
