import { stickyBarConfig } from '@/config';
import { ArrowRight } from 'lucide-react';

export function StickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[99] bg-steel border-t border-muted-border">
      <div className="w-full px-6 lg:px-12">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 py-4">
          <span className="font-condensed text-sm uppercase tracking-[0.15em] text-ash text-center">
            {stickyBarConfig.text}
          </span>
          <a
            href={stickyBarConfig.ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-flex items-center gap-2 text-xs py-3 px-6"
          >
            {stickyBarConfig.ctaText}
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}
