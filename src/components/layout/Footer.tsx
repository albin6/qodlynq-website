import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-white border-t border-outline-variant/10 w-full pt-32 pb-16 transition-opacity duration-300 mt-0 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-lg px-gutter max-w-container_max mx-auto">
        <div className="col-span-1 md:col-span-2">
          <div className="font-headline-sm text-headline-sm font-bold text-on-surface mb-6 tracking-tighter">
            Qodlynq
          </div>
          <p className="font-body-md text-body-md text-secondary max-w-[24rem] mb-lg">
            Premium digital products engineered for scale.
          </p>
          <p className="font-body-md text-body-md text-secondary text-sm">
            © {new Date().getFullYear()} Qodlynq.
          </p>
        </div>
        <div>
          <h4 className="font-label-md text-label-md font-bold text-on-surface mb-md">
            Navigation
          </h4>
          <ul className="space-y-sm">
            {["Services", "Work", "Process", "About", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="font-body-md text-sm text-secondary hover:text-on-surface transition-colors duration-300 inline-block relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-on-surface transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full opacity-50"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-label-md text-label-md font-bold text-on-surface mb-md">
            Legal & Social
          </h4>
          <ul className="space-y-sm">
            {["GitHub", "LinkedIn", "Privacy Policy", "Terms of Service"].map(
              (item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="font-body-md text-sm text-secondary hover:text-on-surface transition-colors duration-300 inline-block relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-on-surface transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full opacity-50"></span>
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </footer>
  );
}
