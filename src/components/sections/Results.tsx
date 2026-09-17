import { useState } from 'react';
import { AI_ANALYSIS_FIELDS, AI_GENERATED_CONTENT, DB_COLUMNS, DB_COLUMN_CN, DB_ROWS, IMAGES, LINKS } from '@/data/content';
import { SectionHeading } from '@/components/SectionHeading';
import { SmartImage } from '@/components/SmartImage';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Database, FileText, Sparkles, ExternalLink } from 'lucide-react';

type Props = {
  onImageClick: (images: string[], index: number) => void;
};

export function Results({ onImageClick }: Props) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();
  const [activeRow, setActiveRow] = useState(0);

  return (
    <section id="results" className="py-24 md:py-32 px-6 md:px-10 border-t border-line/40">
      <div className="max-w-6xl mx-auto">
        <SectionHeading en="RESULTS" cn="运行结果" />

        <p className="text-sm text-ink3 mb-12 max-w-2xl leading-relaxed">
          以下为工作流实际运行后的AI分析结果与AI生成内容。
        </p>

        <div ref={ref} className={`space-y-10 reveal ${visible ? 'is-visible' : ''}`}>
          {/* AI Analysis Result */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-lg bg-accentBg border border-accent/20 flex items-center justify-center">
                <Sparkles size={16} strokeWidth={1.5} className="text-accent2" />
              </div>
              <div>
                <h3 className="text-base font-serif font-medium text-ink">AI分析结果</h3>
                <p className="text-xs text-ink4 mt-0.5">AI Analysis Output</p>
              </div>
            </div>

            <div className="border border-line/50 rounded-xl overflow-hidden">
              {AI_ANALYSIS_FIELDS.map((field, i) => (
                <div
                  key={field.key}
                  className={`flex flex-col md:flex-row md:items-center gap-1 md:gap-6 px-5 md:px-7 py-3.5 ${
                    i !== AI_ANALYSIS_FIELDS.length - 1 ? 'border-b border-line/40' : ''
                  } ${i % 2 === 0 ? 'bg-paper2/25' : 'bg-paper'}`}
                >
                  <div className="md:w-64 flex-shrink-0">
                    <code className="text-xs font-mono text-accent2">{field.key}</code>
                    <span className="text-ink4 mx-2">｜</span>
                    <span className="text-sm text-ink2">{field.cn}</span>
                  </div>
                  <div className="text-sm text-ink font-medium md:flex-1">{field.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Generated Content */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-lg bg-accentBg border border-accent/20 flex items-center justify-center">
                <FileText size={16} strokeWidth={1.5} className="text-accent2" />
              </div>
              <div>
                <h3 className="text-base font-serif font-medium text-ink">AI生成内容</h3>
                <p className="text-xs text-ink4 mt-0.5">AI Generated Content</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-line/40 border border-line/50 rounded-xl overflow-hidden">
              <div className="bg-paper2/25 p-5 md:p-6">
                <div className="text-xs font-mono text-ink4 mb-2">original_title｜原标题</div>
                <p className="text-sm text-ink2 leading-relaxed">{AI_GENERATED_CONTENT.originalTitle}</p>
              </div>
              <div className="bg-paper p-5 md:p-6">
                <div className="text-xs font-mono text-accent2 mb-2">title｜AI生成标题</div>
                <p className="text-sm text-ink font-medium leading-relaxed">{AI_GENERATED_CONTENT.generatedTitle}</p>
              </div>
              <div className="bg-paper p-5 md:p-6">
                <div className="text-xs font-mono text-accent2 mb-2">key_point｜核心观点</div>
                <p className="text-sm text-ink2 leading-relaxed">{AI_GENERATED_CONTENT.keyPoint}</p>
              </div>
              <div className="bg-paper2/25 p-5 md:p-6">
                <div className="text-xs font-mono text-accent2 mb-2">business_impact｜商业影响</div>
                <p className="text-sm text-ink2 leading-relaxed">{AI_GENERATED_CONTENT.businessImpact}</p>
              </div>
              <div className="bg-paper2/25 p-5 md:p-6 md:col-span-2">
                <div className="text-xs font-mono text-accent2 mb-2">content｜正文</div>
                <p className="text-sm text-ink2 leading-relaxed">{AI_GENERATED_CONTENT.body}</p>
              </div>
              <div className="bg-paper p-5 md:p-6 md:col-span-2">
                <div className="text-xs font-mono text-accent2 mb-2">topic_angles｜选题角度</div>
                <p className="text-sm text-ink2 leading-relaxed">{AI_GENERATED_CONTENT.topicAngles}</p>
              </div>
            </div>
          </div>

          {/* Content Database */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-lg bg-accentBg border border-accent/20 flex items-center justify-center">
                <Database size={16} strokeWidth={1.5} className="text-accent2" />
              </div>
              <div>
                <h3 className="text-base font-serif font-medium text-ink">内容库</h3>
                <p className="text-xs text-ink4 mt-0.5">Content Database · n8n Data Table</p>
              </div>
            </div>

            {/* Data Table screenshot */}
            <div className="mb-5 group cursor-pointer relative" onClick={() => onImageClick([IMAGES.dataTable], 0)}>
              <SmartImage
                src={IMAGES.dataTable}
                alt="n8n Data Table 内容库截图"
                aspect="aspect-[16/9]"
                rounded="rounded-xl"
                imgClassName="w-full h-full object-cover border border-line"
                label="data-table.png"
              />
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/5 transition-all duration-300 rounded-xl flex items-center justify-center">
                <span className="text-xs text-paper bg-ink/60 px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  点击放大
                </span>
              </div>
            </div>

            {/* View database button */}
            <a
              href={LINKS.contentDatabase}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-ink2 hover:text-accent2 transition-colors group/btn mb-8"
            >
              查看内容库 ↗
              <ExternalLink size={13} strokeWidth={1.5} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </a>

            {/* Interactive table */}
            <div className="border border-line/50 rounded-xl overflow-hidden">
              {/* Row selector */}
              <div className="flex items-center gap-2 px-5 py-3 bg-paper2/25 border-b border-line/40 overflow-x-auto scrollbar-hide">
                {DB_ROWS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveRow(i)}
                    className={`px-3 py-1.5 text-xs font-mono rounded-md transition-colors flex-shrink-0 ${
                      activeRow === i
                        ? 'bg-accent text-paper'
                        : 'bg-paper border border-line text-ink3 hover:border-accent/30'
                    }`}
                  >
                    Record {i + 1}
                  </button>
                ))}
              </div>

              {/* Fields */}
              <div className="max-h-[460px] overflow-y-auto">
                {DB_COLUMNS.map((col, i) => {
                  const row = DB_ROWS[activeRow] as Record<string, string>;
                  const value = row[col] || '—';
                  return (
                    <div
                      key={col}
                      className={`flex flex-col md:flex-row md:items-start gap-1 md:gap-6 px-5 md:px-7 py-3 ${
                        i !== DB_COLUMNS.length - 1 ? 'border-b border-line/30' : ''
                      } ${i % 2 === 0 ? 'bg-paper2/15' : 'bg-paper'}`}
                    >
                      <div className="md:w-52 flex-shrink-0">
                        <code className="text-xs font-mono text-accent2">{col}</code>
                        <span className="text-ink4 mx-2 hidden md:inline">｜</span>
                        <span className="text-xs text-ink3 md:inline block md:inline">{DB_COLUMN_CN[col]}</span>
                      </div>
                      <div className="text-sm text-ink2 leading-relaxed md:flex-1 break-words">
                        {value}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
