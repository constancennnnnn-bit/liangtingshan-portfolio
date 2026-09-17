import { useState, useRef, useEffect } from 'react';
import { DEMO_STEPS, LINKS } from '@/data/content';
import { SectionHeading } from '@/components/SectionHeading';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Play, RotateCcw, Check, ExternalLink } from 'lucide-react';

export function LiveDemo() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();
  const [running, setRunning] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [currentStep, setCurrentStep] = useState(-1);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    return () => timersRef.current.forEach(clearTimeout);
  }, []);

  const runDemo = () => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];

    setRunning(true);
    setCompleted(false);
    setCurrentStep(-1);

    DEMO_STEPS.forEach((_, i) => {
      const t = setTimeout(() => {
        setCurrentStep(i);
        if (i === DEMO_STEPS.length - 1) {
          const t2 = setTimeout(() => {
            setCompleted(true);
            setRunning(false);
          }, 700);
          timersRef.current.push(t2);
        }
      }, i * 850);
      timersRef.current.push(t);
    });
  };

  const reset = () => {
    timersRef.current.forEach(clearTimeout);
    setRunning(false);
    setCompleted(false);
    setCurrentStep(-1);
  };

  return (
    <section id="demo" className="py-24 md:py-32 px-6 md:px-10 border-t border-line/40">
      <div className="max-w-6xl mx-auto">
        <SectionHeading en="LIVE DEMO" cn="真实运行演示" />

        <p className="text-sm text-ink3 mb-4 max-w-2xl leading-relaxed">
          一次完整工作流运行记录的前端可视化演示。
        </p>
        <p className="text-xs text-ink4 mb-10 italic">
          以下为对真实工作流运行结果的可视化展示，非实时调用 n8n。
        </p>

        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
          {/* Console-like panel */}
          <div className="bg-ink rounded-xl overflow-hidden border border-line/30 shadow-lg">
            {/* Console header */}
            <div className="flex items-center justify-between px-5 py-3 bg-ink2/40 border-b border-white/5">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                <span className="text-[11px] font-mono text-paper/40 ml-3">
                  workflow-demo
                </span>
              </div>
              <span className="text-[10px] font-mono text-paper/30">
                {completed ? 'COMPLETED' : running ? 'RUNNING' : 'READY'}
              </span>
            </div>

            {/* Console body */}
            <div className="p-6 md:p-8 min-h-[400px] flex flex-col">
              {/* Steps */}
              <div className="flex-1 space-y-0.5">
                {DEMO_STEPS.map((step, i) => {
                  const isActive = currentStep === i;
                  const isDone = currentStep > i || (completed && currentStep >= i);
                  const isPending = currentStep < i && !completed;

                  return (
                    <div
                      key={i}
                      className={`flex items-center gap-4 py-2.5 px-3 rounded-lg transition-all duration-300 ${
                        isActive ? 'bg-white/5 animate-step-pulse' : ''
                      }`}
                    >
                      <div className="flex-shrink-0">
                        {isDone ? (
                          <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                            <Check size={12} strokeWidth={2.5} className="text-accent" />
                          </div>
                        ) : isActive ? (
                          <div className="w-5 h-5 rounded-full border-2 border-accent border-t-transparent animate-spin" />
                        ) : (
                          <div className="w-5 h-5 rounded-full border border-white/15" />
                        )}
                      </div>
                      <div className="flex-1 flex items-baseline gap-3 flex-wrap">
                        <span
                          className={`text-sm font-mono transition-colors ${
                            isPending ? 'text-paper/25' : isActive ? 'text-paper' : 'text-paper/70'
                          }`}
                        >
                          {step.en}
                        </span>
                        <span
                          className={`text-xs transition-colors ${
                            isPending ? 'text-paper/20' : 'text-paper/40'
                          }`}
                        >
                          {step.cn}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Completion message */}
              {completed && (
                <div className="mt-5 p-4 border border-accent/25 bg-accent/10 rounded-lg animate-fade-in">
                  <div className="flex items-center gap-3">
                    <Check size={16} strokeWidth={2.5} className="text-accent" />
                    <div>
                      <div className="text-sm font-mono text-paper tracking-wider">
                        WORKFLOW COMPLETED
                      </div>
                      <div className="text-xs text-paper/50 mt-0.5">工作流运行完成</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Controls */}
              <div className="mt-5 flex items-center gap-3 flex-wrap">
                {!running && !completed && (
                  <button
                    onClick={runDemo}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent hover:bg-accent2 text-paper rounded-lg text-sm font-medium transition-colors"
                  >
                    <Play size={14} strokeWidth={2} />
                    开始演示
                  </button>
                )}
                {running && (
                  <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 text-paper/60 rounded-lg text-sm">
                    <span className="w-3 h-3 rounded-full bg-accent animate-pulse" />
                    运行中…
                  </span>
                )}
                {completed && (
                  <button
                    onClick={reset}
                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/20 hover:border-white/40 text-paper/70 hover:text-paper rounded-lg text-sm transition-colors"
                  >
                    <RotateCcw size={14} strokeWidth={1.5} />
                    重新演示
                  </button>
                )}
                {/* View live workflow button */}
                <a
                  href={LINKS.n8nLive}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-sm text-paper/60 hover:text-paper border border-white/15 hover:border-white/30 rounded-lg transition-colors group/btn"
                >
                  查看实时工作流 ↗
                  <ExternalLink size={13} strokeWidth={1.5} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
