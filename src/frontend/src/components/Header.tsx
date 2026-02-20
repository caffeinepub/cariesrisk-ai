import { Stethoscope } from 'lucide-react';

export default function Header() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80; // Account for sticky header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src="/assets/generated/cariesrisk-logo.dim_400x150.png" 
            alt="Cariesrisk AI Logo" 
            className="h-10 w-auto"
          />
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a 
            href="#features" 
            onClick={(e) => handleScrollTo(e, 'features')}
            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
          >
            Features
          </a>
          <a 
            href="#team" 
            onClick={(e) => handleScrollTo(e, 'team')}
            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
          >
            About Us
          </a>
          <a 
            href="#contact" 
            onClick={(e) => handleScrollTo(e, 'contact')}
            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
          >
            Contact
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <Stethoscope className="h-5 w-5 text-primary" />
        </div>
      </div>
    </header>
  );
}
