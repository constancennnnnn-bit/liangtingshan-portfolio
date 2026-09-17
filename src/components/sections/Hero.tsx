import { PROFILE, CONTACT } from '@/data/content';
import { SmartImage } from '@/components/SmartImage';
import { ArrowDown, Mail, MessageCircle } from 'lucide-react';

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 pb-16 px-6 md:px-10">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left: text */}
          <div className="lg:col-span-8 order-2 lg:order-1">
            <div className="flex items-center gap-3 mb-6 reveal is-visible">
              <span className="text-xs font-mono tracking-[0.22em] text-accent uppercase">
                Portfolio
              </span>
              <span className="h-px w-12 bg-line2" />
            </div>

            <h1 className="text-hero font-serif font-medium text-ink leading-[0.92] tracking-tight mb-2">
              内容运营
            </h1>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-hero font-serif font-light text-accent2 italic">×</span>
              <h1 className="text-hero font-serif font-medium text-ink leading-[0.92] tracking-tight">
                AI自动化
              </h1>
            </div>

            <p className="text-sm font-mono tracking-[0.15em] text-ink3 uppercase mt-5 mb-7">
              {PROFILE.enTagline}
            </p>

            <div className="max-w-xl">
              <p className="text-base md:text-lg text-ink2 leading-relaxed font-light">
                {PROFILE.bio}
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5 mt-8">
              {PROFILE.keywords.map((kw) => (
                <span
                  key={kw}
                  className="px-3.5 py-1.5 text-[11px] font-mono tracking-[0.1em] text-ink3 border border-line rounded-full bg-paper2/40"
                >
                  {kw}
                </span>
              ))}
            </div>

            {/* Contact */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 mt-7 pt-5 border-t border-line/40 max-w-xl">
              <div className="flex items-center gap-2">
                <MessageCircle size={14} strokeWidth={1.5} className="text-accent2" />
                <span className="text-[11px] font-mono text-ink4 uppercase tracking-wider">微信</span>
                <span className="text-sm text-ink2">{CONTACT.wechat}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} strokeWidth={1.5} className="text-accent2" />
                <span className="text-[11px] font-mono text-ink4 uppercase tracking-wider">邮箱</span>
                <span className="text-sm text-ink2">{CONTACT.email}</span>
              </div>
            </div>
          </div>

          {/* Right: avatar */}
          <div className="lg:col-span-4 order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="absolute -inset-2.5 border border-line2/60 rounded-full" />
              <div className="absolute -inset-1 border border-line/40 rounded-full" />
              <div className="w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden border border-line bg-paper2/40">
                <SmartImage
                  src={PROFILE.avatar}
                  alt={PROFILE.name}
                  rounded="rounded-full"
                  aspect="aspect-square"
                  imgClassName="w-full h-full object-cover"
                  label="avatar.jpg"
                />
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-paper px-3.5 py-1 border border-line rounded-full">
                <span className="text-sm font-serif text-ink">{PROFILE.name}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-ink4 animate-fade-in">
          <span className="text-[10px] font-mono tracking-[0.2em] uppercase">Scroll</span>
          <ArrowDown size={14} strokeWidth={1.5} className="animate-bounce" />
        </div>
      </div>
    </section>
  );
}
