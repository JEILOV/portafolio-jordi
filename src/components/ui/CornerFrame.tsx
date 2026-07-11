// src/components/ui/CornerFrame.tsx
export default function CornerFrame({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`} aria-hidden="true">
      <span className="absolute top-0 left-0 h-4 w-4 border-t border-l border-chassis" />
      <span className="absolute top-0 right-0 h-4 w-4 border-t border-r border-chassis" />
      <span className="absolute bottom-0 left-0 h-4 w-4 border-b border-l border-chassis" />
      <span className="absolute bottom-0 right-0 h-4 w-4 border-b border-r border-chassis" />
    </div>
  );
}