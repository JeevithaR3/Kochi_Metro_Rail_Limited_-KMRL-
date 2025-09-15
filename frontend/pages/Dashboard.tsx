import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  Activity, 
  BarChart3, 
  FileText, 
  Users, 
  TrendingUp, 
  Clock,
  AlertCircle,
  CheckCircle,
  Upload,
  Globe
} from 'lucide-react';
import { dashboardData, summaries, notifications } from '@/data/mockData';

interface DashboardProps {
  userRole?: 'Admin' | 'Department User' | 'Public User';
  userDepartment?: string;
}

const Dashboard = ({ userRole = 'Admin', userDepartment = 'finance' }: DashboardProps) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isTranslated, setIsTranslated] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const getFilteredData = () => {
    switch (userRole) {
      case 'Admin':
        return {
          title: 'System Overview',
          subtitle: 'Complete system monitoring and analytics',
          updates: summaries,
          stats: dashboardData.departmentStats
        };
      case 'Department User':
        return {
          title: `${userDepartment.charAt(0).toUpperCase() + userDepartment.slice(1)} Dashboard`,
          subtitle: 'Department-specific insights and updates',
          updates: summaries.filter(s => s.department === userDepartment),
          stats: dashboardData.departmentStats.filter(s => s.name.toLowerCase() === userDepartment)
        };
      case 'Public User':
        return {
          title: 'Public Information',
          subtitle: 'General announcements and safety updates',
          updates: summaries.filter(s => s.department === 'safety' || s.status === 'completed'),
          stats: []
        };
      default:
        return { title: '', subtitle: '', updates: [], stats: [] };
    }
  };

  const { title, subtitle, updates, stats } = getFilteredData();

  const toggleTranslation = () => {
    setIsTranslated(!isTranslated);
  };

  return (
    <div className="min-h-screen bg-metro-pattern">
      <Header />
      
      <main className="pt-20 pb-10">
        {/* Hero Section */}
        <section className="py-12 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-center gap-4 mb-4"
              >
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                  {isTranslated ? 'സ്വാഗതം' : 'Welcome to KMRL AI'}
                </h1>
                <Button
                  onClick={toggleTranslation}
                  variant="metro-ghost"
                  size="sm"
                  className="bg-primary/10 hover:bg-primary/20"
                >
                  <Globe className="h-4 w-4 mr-2" />
                  {isTranslated ? 'English' : 'മലയാളം'}
                </Button>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-muted-foreground max-w-2xl mx-auto"
              >
                {isTranslated 
                  ? 'എഐ മെട്രോ ഡോക്യുമെന്റ് മാനേജ്മെന്റിൽ കാര്യക്ഷമതയെ കണ്ടുമുട്ടുന്നിടം'
                  : 'Where AI meets efficiency in metro document management'
                }
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-6 text-sm text-muted-foreground"
              >
                Last updated: {currentTime.toLocaleTimeString()}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Dashboard Content */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            {/* Dashboard Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">{title}</h2>
                <p className="text-muted-foreground">{subtitle}</p>
              </div>
              <div className="flex gap-2 mt-4 md:mt-0">
                <Link to="/upload">
                  <Button variant="hero" size="sm">
                    <Upload className="h-4 w-4 mr-2" />
                    Upload Document
                  </Button>
                </Link>
              </div>
            </div>

            {/* Stats Cards */}
            {stats.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">{stat.name}</p>
                          <p className="text-2xl font-bold text-foreground">{stat.documents}</p>
                          <p className="text-xs text-green-600">+{stat.processed} today</p>
                        </div>
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <FileText className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Real-time Updates */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Recent Updates */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <Card className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-semibold text-foreground flex items-center">
                        <Activity className="h-5 w-5 mr-2 text-primary" />
                        Real-time Updates
                      </h3>
                      <div className="flex items-center text-green-500">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
                        Live
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      {updates.slice(0, 5).map((update, index) => (
                        <motion.div
                          key={update.id}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start space-x-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                        >
                          <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                            {update.status === 'completed' ? (
                              <CheckCircle className="h-4 w-4 text-green-500" />
                            ) : (
                              <Clock className="h-4 w-4 text-orange-500" />
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-foreground truncate">
                              {update.title}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {update.department} • {new Date(update.date).toLocaleDateString()}
                            </p>
                            <div className="mt-1">
                              {update.highlights.slice(0, 2).map((highlight, i) => (
                                <span key={i} className="inline-block text-xs bg-primary/20 text-primary px-2 py-1 rounded mr-1">
                                  {highlight}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              </div>

              {/* Notifications & Quick Actions */}
              <div className="space-y-6">
                {/* Notifications */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <Card className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                      <AlertCircle className="h-5 w-5 mr-2 text-orange-500" />
                      Notifications
                    </h3>
                    
                    <div className="space-y-3">
                      {notifications.slice(0, 3).map((notification, index) => (
                        <motion.div
                          key={notification.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="p-3 rounded-lg bg-muted/30 border-l-4 border-primary"
                        >
                          <p className="text-sm font-medium text-foreground">
                            {notification.title}
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            {notification.message}
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            {notification.time}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </Card>
                </motion.div>

                {/* Quick Stats */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Card className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                      <BarChart3 className="h-5 w-5 mr-2 text-primary" />
                      Quick Stats
                    </h3>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Total Documents</span>
                        <span className="text-lg font-bold text-foreground">{dashboardData.totalDocuments}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Processed Today</span>
                        <span className="text-lg font-bold text-green-600">{dashboardData.processedToday}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Success Rate</span>
                        <span className="text-lg font-bold text-green-600">98.5%</span>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;