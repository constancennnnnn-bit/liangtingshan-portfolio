import { useState } from 'react';
import { WORKFLOW_NODES, IMAGES } from '@/data/content';
import { SectionHeading } from '@/components/SectionHeading';
import { SmartImage } from '@/components/SmartImage';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ChevronDown, ArrowDown } from 'lucide-react';

type Props = {
  onImageClick: (images: string[], index: number) => void;
};

export function Workflow({ onImageClick }: Props) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();
  const [activeNode, setActiveNode] = useState<string | null>(null);

  return (
    <section id="workflow" className="py-24 md:py-32 px-6 md:px-10 border-t border-line/40">
      <div className="max-w-6xl mx-auto">
        <SectionHeading en="WORKFLOW" cn="工作流架构" />

        <p className="text-sm text-ink3 mb-10 max-w-2xl leading-relaxed">
          以下为工作流的完整节点架构。点击任意节点可查看中文说明。
        </p>

        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
          {/* Architecture diagram */}
          <div className="p-6 md:p-10 bg-white/30 border border-line/50 rounded-xl mb-10">
            <div className="flex flex-col items-center">
              {WORKFLOW_NODES.map((node, i) => (
                <div key={node.id} className="flex flex-col items-center">
                  <button
                    onClick={() => setActiveNode(activeNode === node.id ? null : node.id)}
                    className={`group relative flex flex-col items-center px-6 py-3.5 min-w-[190px] md:min-w-[230px] border rounded-lg transition-all duration-300 ${
                      activeNode === node.id
                        ? 'border-accent bg-accentBg shadow-sm'
                        : 'border-line bg-paper hover:border-accent/35 hover:bg-accentBg/50'
                    }`}
                  >
                    <span
                      className={`text-[10px] font-mono tracking-[0.15em] uppercase mb-1 transition-colors ${
                        activeNode === node.id ? 'text-accent2' : 'text-ink4 group-hover:text-accent2'
                      }`}
                    >
                      {node.en}
                    </span>
                    <span className="text-sm font-medium text-ink">{node.cn}</span>
                    <ChevronDown
                      size={13}
                      strokeWidth={1.5}
                      className={`absolute right-3 top-1/2 -translate-y-1/2 text-ink4 transition-transform duration-300 ${
                        activeNode === node.id ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {activeNode === node.id && (
                    <div className="mt-2.5 mb-2.5 p-4 md:p-5 bg-paper border border-accent/25 rounded-lg max-w-md w-full animate-fade-in">
                      <h4 className="text-sm font-serif font-medium text-ink mb-1.5">
                        {node.title}
                      </h4>
                      <p className="text-sm text-ink3 leading-relaxed">{node.desc}</p>
                    </div>
                  )}

                  {i < WORKFLOW_NODES.length - 1 && (
                    <ArrowDown size={16} strokeWidth={1.5} className="text-ink4/60 my-1" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* n8n screenshot */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-mono tracking-[0.15em] text-accent2 uppercase">
                n8n Screenshot
              </span>
              <span className="h-px w-10 bg-line2" />
            </div>
            <h3 className="text-lg font-serif font-medium text-ink mb-2">真实 n8n 工作流截图</h3>
            <p className="text-sm text-ink3 mb-5 max-w-2xl">
              以下为 n8n 工作流编辑器中的实际节点连接截图，非网页模拟。
            </p>
            <div
              className="group cursor-pointer relative"
              onClick={() => onImageClick([IMAGES.n8nWorkflow], 0)}
            >
              <SmartImage
                src={IMAGES.n8nWorkflow}
                alt="真实 n8n 工作流截图"
                aspect="aspect-[16/9]"
                rounded="rounded-xl"
                imgClassName="w-full h-full object-cover border border-line"
                label="n8n-workflow.png"
              />
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/5 transition-all duration-300 rounded-xl flex items-center justify-center">
                <span className="text-xs text-paper bg-ink/60 px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  点击放大
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
