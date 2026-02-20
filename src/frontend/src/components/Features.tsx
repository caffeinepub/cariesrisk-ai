import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Users, TrendingUp, Clock, FileCheck, Heart } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Analysis',
      description: 'Advanced machine learning algorithms analyze risk factors to provide accurate pediatric dental disease predictions.',
      image: '/assets/generated/risk-chart-icon.dim_128x128.png'
    },
    {
      icon: Users,
      title: 'For Patients & Dentists',
      description: 'Designed for both dental professionals and patients to understand and manage caries risk effectively.',
      image: '/assets/generated/dentist-icon.dim_128x128.png'
    },
    {
      icon: TrendingUp,
      title: 'Risk Assessment',
      description: 'Comprehensive risk scoring system that identifies high-risk patients and enables targeted preventive care.',
      image: '/assets/generated/tooth-character.dim_256x256.png'
    },
    {
      icon: Clock,
      title: 'Early Detection',
      description: 'Identify potential dental issues before they develop, allowing for timely intervention and prevention.',
      color: 'text-chart-2'
    },
    {
      icon: FileCheck,
      title: 'Clinical Evidence',
      description: 'Built on peer-reviewed research and validated clinical data for reliable diagnostic support.',
      color: 'text-chart-3'
    },
    {
      icon: Heart,
      title: 'Preventive Focus',
      description: 'Emphasizes prevention over treatment, promoting better long-term oral health outcomes for children.',
      color: 'text-chart-4'
    }
  ];

  return (
    <section id="features" className="py-24 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Comprehensive Risk Assessment
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cutting-edge technology meets clinical expertise to deliver accurate pediatric dental disease risk predictions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <feature.icon className={`h-6 w-6 ${feature.color || 'text-primary'}`} />
                  </div>
                  {feature.image && (
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="h-12 w-12 object-contain opacity-80"
                    />
                  )}
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
