type SectionHeadingProps = {
  en: string;
  cn: string;
  id?: string;
  align?: 'left' | 'center';
  className?: string;
};

export function SectionHeading({ en, cn, id, align = 'left', className = '' }: SectionHeadingProps) {
  return (
    <div id={id} className={`mb-10 md:mb-14 ${align === 'center' ? 'text-center' : ''} ${className}`}>
      <div className={`flex items-center gap-3 mb-3 ${align === 'center' ? 'justify-center' : ''}`}>
        <span className="text-xs font-mono tracking-[0.22em] text-accent uppercase">{en}</span>
        <span className="h-px w-12 bg-line2" />
      </div>
      <h2 className="text-section font-serif font-medium text-ink text-balance">{cn}</h2>
    </div>
  );
}
