export default function GridOverlay() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none" id="aesthetic-grid-mesh">
      {/* Editorial Vertical Grid Lines */}
      <div className="absolute inset-0 flex justify-between max-w-7xl mx-auto px-6 opacity-[0.03]">
        <div className="w-[1px] h-full bg-white" />
        <div className="w-[1px] h-full bg-white hidden sm:block" />
        <div className="w-[1px] h-full bg-white hidden md:block" />
        <div className="w-[1px] h-full bg-white hidden lg:block" />
        <div className="w-[1px] h-full bg-white" />
      </div>

      {/* Horizontal gridline intervals for tech structure aesthetics */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:100%_8rem] opacity-50" />
      
      {/* Absolute top grid glow intersection */}
      <div className="absolute top-0 left-1/4 w-[1px] h-32 bg-gradient-to-b from-brand-accent/20 to-transparent opacity-50" />
      <div className="absolute top-0 right-1/4 w-[1px] h-48 bg-gradient-to-b from-purple-500/10 to-transparent opacity-40" />
    </div>
  );
}
