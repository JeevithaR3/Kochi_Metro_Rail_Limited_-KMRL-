import { motion } from 'framer-motion';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import UploadForm from '@/components/UI/UploadForm';
import { FileText, Brain, Zap } from 'lucide-react';

const Upload = () => {
  const steps = [
    {
      icon: FileText,
      title: 'Upload Documents',
      description: 'Drag and drop or select your PDF, DOCX, or TXT files'
    },
    {
      icon: Brain,
      title: 'AI Analysis',
      description: 'Our advanced AI processes and analyzes your documents'
    },
    {
      icon: Zap,
      title: 'Get Insights',
      description: 'Receive intelligent summaries and actionable insights'
    }
  ];

  const handleUpload = (files: File[], department: string) => {
    console.log('Files uploaded:', files, 'Department:', department);
    // In a real app, this would trigger the upload process
  };

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
                Upload Your Documents
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Transform your documents into actionable insights with our AI-powered analysis platform
              </p>
            </motion.div>

            {/* Process Steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="relative">
                    <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                    {index < steps.length - 1 && (
                      <div className="hidden md:block absolute top-8 left-1/2 w-32 h-0.5 bg-border transform translate-x-8"></div>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Upload Form Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <UploadForm onUpload={handleUpload} />
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Secure Processing', desc: 'End-to-end encryption' },
                { title: 'Fast Analysis', desc: 'Results in minutes' },
                { title: 'Multiple Formats', desc: 'PDF, DOCX, TXT support' },
                { title: 'Smart Insights', desc: 'AI-powered summaries' }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card p-6 rounded-lg border border-border text-center"
                >
                  <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Upload;