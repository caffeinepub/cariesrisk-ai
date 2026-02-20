import { CheckCircle2 } from 'lucide-react';

export default function About() {
  const benefits = [
    'Evidence-based risk assessment for pediatric patients',
    'Early identification of high-risk individuals',
    'Personalized preventive care recommendations',
    'Improved patient communication and education',
    'Data-driven clinical decision support',
    'Reduced treatment costs through prevention'
  ];

  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Transforming Pediatric Dental Care
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Cariesrisk AI is a revolutionary diagnostic tool that leverages artificial intelligence 
              to assess the risk of dental caries in pediatric patients. Our platform analyzes multiple 
              risk factors to provide accurate, actionable insights for both dental professionals and parents.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              By identifying at-risk patients early, we enable targeted preventive interventions that 
              can significantly reduce the incidence of dental disease, improve oral health outcomes, 
              and reduce the need for invasive treatments.
            </p>
            
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-base text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            <div id="team" className="space-y-3 pt-6 border-t border-border">
              <p className="text-base text-foreground">
                <span className="font-medium">Our Team Members:</span>{' '}
                <span className="text-primary">
                  Pramit
                </span>
                {', '}
                <span className="text-primary">
                  Aaryaman
                </span>
                {', '}
                <span className="text-primary">
                  Vansh
                </span>
                {', '}
                <span className="text-primary">
                  Khushi
                </span>
                {', '}
                <span className="text-primary">
                  Radhika
                </span>
                {', and '}
                <span className="text-primary">
                  Kashish
                </span>
              </p>
              
              <p className="text-base text-foreground">
                <span className="font-medium">Our Mentors:</span>{' '}
                <span className="text-primary">
                  Onkar sir
                </span>
                {', '}
                <span className="text-primary">
                  Debadip sir
                </span>
                {', and '}
                <span className="text-primary">
                  Hari sir
                </span>
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden border-4 border-primary/20 shadow-2xl">
              <img 
                src="/assets/generated/tooth-character.dim_256x256.png" 
                alt="Dental Care Illustration"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-chart-2/10 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
