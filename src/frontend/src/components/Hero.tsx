import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-secondary/20">
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'url(/assets/generated/hero-bg.dim_1920x1080.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="container relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] py-20 text-center">
        <div className="flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
          <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <span className="text-sm font-medium text-primary">AI-Powered Dental Risk Assessment</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 max-w-4xl">
          Predict & Prevent
          <span className="block text-primary mt-2">Pediatric Dental Disease</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
          Cariesrisk AI empowers dentists and patients with advanced risk assessment technology 
          to identify dental disease early and take preventive action.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Button size="lg" className="text-lg px-8 py-6 rounded-full" asChild>
            <a href="https://ai.studio/apps/29036910-44c0-41d1-86a5-c8a35a69379f" target="_blank" rel="noopener noreferrer">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-full">
            Learn More
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl w-full">
          <div className="flex flex-col items-center p-6 rounded-2xl bg-card border border-border/50">
            <div className="text-4xl font-bold text-primary mb-2">95%</div>
            <div className="text-sm text-muted-foreground">Accuracy Rate</div>
          </div>
          <div className="flex flex-col items-center p-6 rounded-2xl bg-card border border-border/50">
            <div className="text-4xl font-bold text-primary mb-2">10K+</div>
            <div className="text-sm text-muted-foreground">Assessments</div>
          </div>
          <div className="flex flex-col items-center p-6 rounded-2xl bg-card border border-border/50">
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Dental Practices</div>
          </div>
        </div>
      </div>
    </section>
  );
}
