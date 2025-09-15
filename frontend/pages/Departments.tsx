import { motion } from 'framer-motion';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { Button } from '@/components/ui/button';
import { departments, summaries } from '@/data/mockData';
import { ArrowRight, TrendingUp, Users, FileText, Clock } from 'lucide-react';

const Departments = () => {
  const getDepartmentStats = (deptId: string) => {
    const deptSummaries = summaries.filter(s => s.department === deptId);
    return {
      totalDocuments: deptSummaries.length * 15, // Simulated
      recentSummaries: deptSummaries.length,
      completedToday: Math.floor(Math.random() * 5) + 1,
      activeProjects: Math.floor(Math.random() * 8) + 3
    };
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
                Department Overview
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Explore departmental activities, insights, and collaborative workflows across KMRL
              </p>
            </motion.div>
          </div>
        </section>

        {/* Departments Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {departments.map((department, index) => {
                const stats = getDepartmentStats(department.id);
                const deptSummaries = summaries.filter(s => s.department === department.id);
                
                return (
                  <motion.div
                    key={department.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    whileHover={{ y: -5 }}
                    className="group"
                  >
                    <div className="bg-card rounded-xl border border-border shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                      {/* Header */}
                      <div className={`p-6 ${department.color} text-white relative`}>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="text-3xl">{department.icon}</div>
                            <div>
                              <h2 className="text-2xl font-bold">{department.name}</h2>
                              <p className="text-white/80">{department.description}</p>
                            </div>
                          </div>
                        </div>
                        
                        {/* Decorative gradient */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                      </div>

                      {/* Stats */}
                      <div className="p-6 border-b border-border">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center">
                            <div className="flex items-center justify-center space-x-1 text-muted-foreground mb-1">
                              <FileText className="h-4 w-4" />
                              <span className="text-sm">Documents</span>
                            </div>
                            <div className="text-2xl font-bold text-foreground">{stats.totalDocuments}</div>
                          </div>
                          <div className="text-center">
                            <div className="flex items-center justify-center space-x-1 text-muted-foreground mb-1">
                              <TrendingUp className="h-4 w-4" />
                              <span className="text-sm">Projects</span>
                            </div>
                            <div className="text-2xl font-bold text-foreground">{stats.activeProjects}</div>
                          </div>
                        </div>
                      </div>

                      {/* Recent Summaries */}
                      <div className="p-6">
                        <h4 className="font-semibold text-foreground mb-4 flex items-center">
                          <Clock className="h-4 w-4 mr-2" />
                          Recent Summaries
                        </h4>
                        <div className="space-y-3">
                          {deptSummaries.slice(0, 2).map((summary) => (
                            <div key={summary.id} className="p-3 bg-muted/50 rounded-lg">
                              <h5 className="font-medium text-foreground text-sm mb-1">
                                {summary.title}
                              </h5>
                              <p className="text-xs text-muted-foreground mb-2">
                                {summary.summary.substring(0, 100)}...
                              </p>
                              <div className="flex items-center justify-between">
                                <span className="text-xs text-muted-foreground">
                                  {new Date(summary.date).toLocaleDateString()}
                                </span>
                                <span className={`text-xs px-2 py-1 rounded-full ${
                                  summary.status === 'completed' 
                                    ? 'bg-green-100 text-green-800'
                                    : summary.status === 'in-progress'
                                    ? 'bg-yellow-100 text-yellow-800'
                                    : 'bg-gray-100 text-gray-800'
                                }`}>
                                  {summary.status.replace('-', ' ')}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        {deptSummaries.length === 0 && (
                          <div className="text-center py-6 text-muted-foreground">
                            <FileText className="h-8 w-8 mx-auto mb-2 opacity-50" />
                            <p className="text-sm">No recent summaries</p>
                          </div>
                        )}
                      </div>

                      {/* Footer */}
                      <div className="p-6 border-t border-border">
                        <Button variant="metro" className="w-full group">
                          View All Documents
                          <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Cross-Department Collaboration */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Cross-Department Collaboration
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                See how departments work together to drive KMRL's success
              </p>
            </motion.div>

            {/* Collaboration Flow */}
            <div className="relative max-w-4xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {departments.map((dept, index) => (
                  <motion.div
                    key={dept.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="text-center"
                  >
                    <div className={`w-16 h-16 ${dept.color} rounded-full flex items-center justify-center mx-auto mb-3 text-white text-xl`}>
                      {dept.icon}
                    </div>
                    <h4 className="font-semibold text-foreground text-sm">{dept.name}</h4>
                  </motion.div>
                ))}
              </div>
              
              {/* Connection Lines */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 0.5 }}
                  className="w-full h-full"
                >
                  <svg className="w-full h-full">
                    <path
                      d="M 10% 50% Q 30% 30% 50% 50% Q 70% 70% 90% 50%"
                      fill="none"
                      stroke="hsl(var(--primary))"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                      className="opacity-50"
                    />
                  </svg>
                </motion.div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              className="text-center mt-12"
            >
              <Button variant="hero" size="lg">
                <Users className="h-5 w-5 mr-2" />
                View Collaboration Reports
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Departments;