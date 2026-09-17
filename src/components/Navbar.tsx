import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { en: 'ABOUT', cn: '关于', href: '#hero' },
  { en: 'CONTENT', cn: '内容', href: '#content' },
  { en: 'AI PROJECT', cn: 'AI项目', href: '#ai-project' },
  { en: 'WORKFLOW', cn: '工作流', href: '#workflow' },
  { en: 'DEMO', cn: '演示', href: '#demo' },
  { en: 'RESULTS', cn: '结果', href: '#results' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-paper/80 backdrop-blur-md border-b border-line/50'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-10 h-14 flex items-center justify-between">
        <a href="#hero" className="flex items-baseline gap-2 group">
          <span className="font-serif text-base font-medium text-ink">梁霆珊</span>
          <span className="text-[10px] font-mono tracking-[0.15em] text-ink4 uppercase hidden sm:inline">
            Portfolio
          </span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.en}
              href={item.href}
              className="group flex flex-col items-center leading-none"
            >
              <span className="text-[10px] font-mono tracking-[0.12em] text-ink3 group-hover:text-ink transition-colors">
                {item.en}
              </span>
              <span className="text-[10px] text-ink4 group-hover:text-accent2 transition-colors mt-0.5">
                {item.cn}
              </span>
            </a>
          ))}
        </div>

        <button
          className="md:hidden text-ink p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="菜单"
        >
          {mobileOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden bg-paper/95 backdrop-blur-md border-t border-line/50 animate-fade-in">
          <div className="px-6 py-4 flex flex-col gap-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.en}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-baseline gap-3 py-1"
              >
                <span className="text-xs font-mono tracking-[0.12em] text-ink3">{item.en}</span>
                <span className="text-sm text-ink2">{item.cn}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
