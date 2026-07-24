export function Footer() {
  return (
    <footer className="bg-background text-primary border-t border-primary grid grid-cols-12 gap-gutter px-margin py-margin w-full z-10 relative">
      <div className="col-span-12 md:col-span-4 font-headline-md text-headline-md text-primary mb-6 md:mb-0">
        QODLYNQ
      </div>
      <div className="col-span-12 md:col-span-4 flex flex-col md:items-center justify-center gap-2 mb-6 md:mb-0">
        <a className="font-label-caps text-label-caps text-surface-tint hover:text-primary transition-colors" href="#">SYSTEM STATUS</a>
        <a className="font-label-caps text-label-caps text-surface-tint hover:text-primary transition-colors" href="#">DOCUMENTATION</a>
        <a className="font-label-caps text-label-caps text-surface-tint hover:text-primary transition-colors" href="#">LEGAL</a>
        <a className="font-label-caps text-label-caps text-surface-tint hover:text-primary transition-colors" href="#">API_V1</a>
      </div>
      <div className="col-span-12 md:col-span-4 flex md:justify-end items-end font-body-md text-body-md">
        © 2024 QODLYNQ CORE // ALL RIGHTS RESERVED
      </div>
    </footer>
  );
}
