import { useState, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export type LightboxState = {
  images: string[];
  index: number;
  isOpen: boolean;
};

export function useLightbox() {
  const [state, setState] = useState<LightboxState>({ images: [], index: 0, isOpen: false });

  const open = useCallback((images: string[], index: number) => {
    setState({ images, index, isOpen: true });
  }, []);

  const close = useCallback(() => {
    setState((s) => ({ ...s, isOpen: false }));
  }, []);

  const next = useCallback(() => {
    setState((s) => ({ ...s, index: (s.index + 1) % s.images.length }));
  }, []);

  const prev = useCallback(() => {
    setState((s) => ({ ...s, index: (s.index - 1 + s.images.length) % s.images.length }));
  }, []);

  return { state, open, close, next, prev };
}

export function Lightbox({
  state,
  onClose,
  onNext,
  onPrev,
}: {
  state: LightboxState;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}) {
  if (!state.isOpen || state.images.length === 0) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <button
        className="absolute top-6 right-6 text-paper/70 hover:text-paper transition-colors p-2"
        onClick={onClose}
        aria-label="关闭"
      >
        <X size={28} strokeWidth={1.5} />
      </button>
      {state.images.length > 1 && (
        <>
          <button
            className="absolute left-4 sm:left-8 text-paper/70 hover:text-paper transition-colors p-2"
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            aria-label="上一张"
          >
            <ChevronLeft size={36} strokeWidth={1.5} />
          </button>
          <button
            className="absolute right-4 sm:right-8 text-paper/70 hover:text-paper transition-colors p-2"
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            aria-label="下一张"
          >
            <ChevronRight size={36} strokeWidth={1.5} />
          </button>
        </>
      )}
      <img
        src={state.images[state.index]}
        alt="放大查看"
        className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}


