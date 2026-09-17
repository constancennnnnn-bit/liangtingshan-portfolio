import { CASES, type CaseCard, type CaseSubArea } from '@/data/content';
import { SectionHeading } from '@/components/SectionHeading';
import { SmartImage } from '@/components/SmartImage';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ExternalLink, ZoomIn } from 'lucide-react';

type Props = {
  onImageClick: (images: string[], index: number) => void;
};

export function ContentOperations({ onImageClick }: Props) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="content" className="py-24 md:py-32 px-6 md:px-10 border-t border-line/40">
      <div className="max-w-6xl mx-auto">
        <SectionHeading en="CONTENT OPERATIONS" cn="内容运营案例" />

        <p className="text-sm text-ink3 mb-12 max-w-2xl leading-relaxed">
          三个平台真实运营经历，涵盖品牌公众号、抖音/视频号短视频与小红书内容运营。
        </p>

        <div ref={ref} className="space-y-5">
          {CASES.map((card, i) => (
            <CaseCardItem
              key={card.id}
              card={card}
              index={i}
              visible={visible}
              onImageClick={onImageClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseCardItem({
  card,
  index,
  visible,
  onImageClick,
}: {
  card: CaseCard;
  index: number;
  visible: boolean;
  onImageClick: (images: string[], index: number) => void;
}) {
  return (
    <div
      className={`group p-6 md:p-10 bg-white/40 border border-line/50 rounded-xl hover:border-accent/25 hover:shadow-sm transition-all duration-500 reveal reveal-delay-${Math.min(index + 1, 5)} ${visible ? 'is-visible' : ''}`}
    >
      {/* Header */}
      <div className="mb-5">
        <span className="text-[10px] font-mono tracking-[0.15em] text-accent2 uppercase">
          {card.enName}
        </span>
        <h3 className="text-lg md:text-xl font-serif font-medium text-ink mt-1.5">{card.title}</h3>
      </div>

      {/* Stats */}
      {card.stats.length > 0 && (
        <div className="flex flex-wrap gap-6 md:gap-10 mb-5">
          {card.stats.map((stat, j) => (
            <div key={j}>
              <div className="text-2xl md:text-4xl font-serif font-medium text-ink tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs text-ink3 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      )}

      {/* Description */}
      {card.desc && (
        <p className="text-sm text-ink3 mb-5 leading-relaxed max-w-2xl">{card.desc}</p>
      )}

      {/* Sub-areas (for short video card) */}
      {card.subAreas && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-2">
          {card.subAreas.map((area, k) => (
            <SubAreaItem key={k} area={area} onImageClick={onImageClick} />
          ))}
        </div>
      )}

      {/* Regular images */}
      {card.images.length > 0 && (
        <div className={`grid gap-3 ${card.images.length > 1 ? 'grid-cols-2 md:grid-cols-3' : 'grid-cols-1'}`}>
          {card.images.map((img, j) => (
            <div
              key={j}
              className="relative group/img cursor-pointer"
              onClick={() => onImageClick(card.images, j)}
            >
              <SmartImage
                src={img}
                alt={`${card.title}截图 ${j + 1}`}
                aspect={card.images.length > 1 ? 'aspect-[3/4]' : 'aspect-video'}
                rounded="rounded-lg"
                imgClassName="w-full h-full object-cover"
                label={img.split('/').pop()}
              />
              <div className="absolute inset-0 bg-ink/0 group-hover/img:bg-ink/8 transition-all duration-300 rounded-lg flex items-center justify-center">
                <ZoomIn
                  size={18}
                  strokeWidth={1.5}
                  className="text-paper opacity-0 group-hover/img:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Button for regular cards */}
      {card.button && (
        <div className="mt-5">
          {card.button.url ? (
            <a
              href={card.button.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-ink2 hover:text-accent2 transition-colors group/btn"
            >
              {card.button.text}
              <ExternalLink size={13} strokeWidth={1.5} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </a>
          ) : (
            <button
              onClick={() => card.images.length > 0 && onImageClick(card.images, 0)}
              className="inline-flex items-center gap-2 text-sm text-ink2 hover:text-accent2 transition-colors"
            >
              {card.button.text}
            </button>
          )}
        </div>
      )}
    </div>
  );
}

function SubAreaItem({
  area,
  onImageClick,
}: {
  area: CaseSubArea;
  onImageClick: (images: string[], index: number) => void;
}) {
  return (
    <div className="border border-line/40 rounded-lg p-4 bg-paper/40">
      <div className="flex items-center justify-between mb-3">
        <div>
          <span className="text-sm font-serif font-medium text-ink">{area.name}</span>
          <span className="text-[10px] font-mono text-ink4 ml-2 uppercase tracking-wider">{area.enName}</span>
        </div>
      </div>
      <div className="grid gap-2">
        {area.images.map((img, j) => (
          <div
            key={j}
            className="relative group/img cursor-pointer"
            onClick={() => onImageClick(area.images, j)}
          >
            <SmartImage
              src={img}
              alt={`${area.name}截图 ${j + 1}`}
              aspect="aspect-video"
              rounded="rounded-lg"
              imgClassName="w-full h-full object-cover"
              label={img.split('/').pop()}
            />
            <div className="absolute inset-0 bg-ink/0 group-hover/img:bg-ink/8 transition-all duration-300 rounded-lg flex items-center justify-center">
              <ZoomIn
                size={16}
                strokeWidth={1.5}
                className="text-paper opacity-0 group-hover/img:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div>
        ))}
      </div>
      <a
        href={area.button.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-xs text-ink2 hover:text-accent2 transition-colors mt-3 group/btn"
      >
        {area.button.text}
        <ExternalLink size={11} strokeWidth={1.5} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
      </a>
    </div>
  );
}
