import { motion } from 'framer-motion';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { Button } from '@/components/ui/button';
import { Target, Eye, Lightbulb, Users, ArrowRight, CheckCircle } from 'lucide-react';

const About = () => {
  const timeline = [
    {
      year: '2023',
      title: 'AI Initiative Launch',
      description: 'KMRL launched its digital transformation initiative focusing on AI-powered solutions'
    },
    {
      year: '2024',
      title: 'Document Management System',
      description: 'Implemented advanced AI document analysis and management platform'
    },
    {
      year: '2024',
      title: 'Cross-Department Integration',
      description: 'Successfully integrated all departments into unified digital workflow'
    },
    {
      year: '2025',
      title: 'Future Expansion',
      description: 'Planning to expand AI capabilities to predictive maintenance and passenger services'
    }
  ];

  const problemSolutions = [
    {
      problem: 'Manual document processing causing delays',
      solution: 'AI-powered automatic document analysis and summarization'
    },
    {
      problem: 'Lack of cross-departmental visibility',
      solution: 'Real-time dashboards with integrated department insights'
    },
    {
      problem: 'Inefficient information retrieval',
      solution: 'Smart search and AI-generated document summaries'
    },
    {
      problem: 'Compliance and audit challenges',
      solution: 'Automated compliance tracking and audit trail generation'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                About Our AI Platform
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Revolutionizing metro operations through intelligent document management and AI-driven insights
              </p>
            </motion.div>
          </div>
        </section>

        {/* Problem & Solution */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">
                The Challenge & Our Solution
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Traditional document management was slowing down KMRL's operations. We built an AI solution to change that.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {problemSolutions.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-card p-6 rounded-xl border border-border"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                        <span className="text-red-600 font-bold">!</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-2">Problem:</h4>
                      <p className="text-muted-foreground text-sm mb-4">{item.problem}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <CheckCircle className="h-6 w-6 text-green-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-2">Solution:</h4>
                      <p className="text-muted-foreground text-sm">{item.solution}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Mission */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To transform public transportation through intelligent technology, making metro operations 
                  more efficient, transparent, and responsive to the needs of Kerala's citizens.
                </p>
                <div className="space-y-3">
                  {[
                    'Streamline document workflows across all departments',
                    'Enhance decision-making through AI-driven insights',
                    'Improve operational efficiency and transparency',
                    'Support sustainable urban mobility solutions'
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-2"
                    >
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="text-foreground">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Vision */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                    <Eye className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">Our Vision</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To become India's most technologically advanced metro system, setting new standards 
                  for smart city infrastructure and sustainable urban transportation.
                </p>
                <div className="bg-card p-6 rounded-lg border border-border">
                  <h4 className="font-semibold text-foreground mb-3">Impact Goals by 2030:</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">90%</div>
                      <div className="text-sm text-muted-foreground">Process Automation</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">50%</div>
                      <div className="text-sm text-muted-foreground">Time Reduction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">100%</div>
                      <div className="text-sm text-muted-foreground">Digital Integration</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">Zero</div>
                      <div className="text-sm text-muted-foreground">Paper Usage</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Innovation Timeline */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">
                <Lightbulb className="inline h-8 w-8 mr-2 text-primary" />
                Innovation Timeline
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our journey towards becoming a fully AI-integrated metro system
              </p>
            </motion.div>

            <div className="relative max-w-4xl mx-auto">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-border"></div>

              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.3 }}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-card p-6 rounded-lg border border-border shadow-sm">
                      <div className="text-primary font-bold text-lg mb-2">{item.year}</div>
                      <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>

                  {/* Timeline Point */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team & Technology */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  <Users className="inline h-8 w-8 mr-2 text-primary" />
                  Built by Experts, Powered by AI
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Our multidisciplinary team combines decades of transportation expertise with 
                  cutting-edge artificial intelligence to create solutions that truly understand 
                  the unique challenges of metro operations.
                </p>
                <div className="space-y-4">
                  {[
                    'Transportation engineers with 15+ years experience',
                    'AI/ML specialists from top technology companies',
                    'UI/UX designers focused on accessibility',
                    'Security experts ensuring data protection'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                {[
                  { label: 'AI Models', value: '12+' },
                  { label: 'Document Types', value: '50+' },
                  { label: 'Processing Speed', value: '10x' },
                  { label: 'Accuracy Rate', value: '99.2%' }
                ].map((stat, index) => (
                  <div key={index} className="bg-card p-6 rounded-lg border border-border text-center">
                    <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Ready to Experience the Future?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join us in revolutionizing metro operations through intelligent technology
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg">
                  <ArrowRight className="h-5 w-5 mr-2" />
                  Start Your Journey
                </Button>
                <Button variant="metro-outline" size="lg">
                  View Documentation
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;