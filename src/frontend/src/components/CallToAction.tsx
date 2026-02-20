import { Button } from '@/components/ui/button';
import { ArrowRight, Mail } from 'lucide-react';

export default function CallToAction() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-primary/5 via-background to-chart-2/5">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Practice?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
            Join hundreds of dental professionals using Cariesrisk AI to provide better preventive care 
            and improve patient outcomes. Start your journey toward proactive pediatric dentistry today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8 py-6 rounded-full" asChild>
              <a href="https://ai.studio/apps/29036910-44c0-41d1-86a5-c8a35a69379f" target="_blank" rel="noopener noreferrer">
                Request a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-full">
              <Mail className="mr-2 h-5 w-5" />
              Contact Sales
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-2xl mx-auto">
            <div className="p-6 rounded-2xl bg-card border border-border">
              <div className="text-3xl font-bold text-primary mb-2">Fast Setup</div>
              <p className="text-sm text-muted-foreground">Get started in minutes with our intuitive platform</p>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border">
              <div className="text-3xl font-bold text-primary mb-2">HIPAA Compliant</div>
              <p className="text-sm text-muted-foreground">Enterprise-grade security for patient data</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
