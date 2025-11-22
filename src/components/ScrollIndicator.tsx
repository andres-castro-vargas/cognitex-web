import { ChevronDown } from 'lucide-react';

export default function ScrollIndicator() {
  return (
    <a
      href="#servicios"
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors animate-bounce cursor-pointer"
      aria-label="Scroll to services"
    >
      <ChevronDown className="w-8 h-8" />
    </a>
  );
}
