import { useState, useEffect } from 'react';
import { ImageOff } from 'lucide-react';

type SmartImageProps = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  onClick?: () => void;
  rounded?: string;
  aspect?: string;
  label?: string;
};

export function SmartImage({
  src,
  alt,
  className = '',
  imgClassName = '',
  onClick,
  rounded = 'rounded-lg',
  aspect = 'aspect-video',
  label,
}: SmartImageProps) {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setError(false);
    setLoaded(false);
  }, [src]);

  const placeholder = (
    <div className={`flex flex-col items-center justify-center bg-paper2/50 border border-dashed border-line2 ${rounded} ${aspect} w-full`}>
      <ImageOff size={24} strokeWidth={1.2} className="text-ink4/60 mb-2" />
      {label && <span className="text-xs text-ink4/70 font-mono">{label}</span>}
    </div>
  );

  return (
    <div
      className={`relative overflow-hidden ${rounded} ${className} ${onClick ? 'cursor-pointer' : ''}`}
      onClick={onClick}
    >
      {!loaded && !error && (
        <div className={`absolute inset-0 bg-paper2/30 ${rounded} animate-pulse`} />
      )}
      {error ? (
        placeholder
      ) : (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          className={`${imgClassName} ${rounded} transition-all duration-500 ${
            loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        />
      )}
    </div>
  );
}
