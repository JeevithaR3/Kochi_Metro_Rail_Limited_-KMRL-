import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import SummaryCard from '@/components/UI/SummaryCard';
import { Button } from '@/components/ui/button';
import { summaries, departments } from '@/data/mockData';
import { Filter, Search } from 'lucide-react';

const Summaries = () => {
  const [selectedDepartment, setSelectedDepartment] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSummaries = summaries.filter(summary => {
    const matchesDepartment = selectedDepartment === 'all' || summary.department === selectedDepartment;
    const matchesSearch = summary.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         summary.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDepartment && matchesSearch;
  });

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
                Document Summaries
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                AI-generated insights and summaries from all departments
              </p>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {[
                { label: 'Total Documents', value: '1,247' },
                { label: 'AI Summaries', value: '856' },
                { label: 'Departments', value: '4' },
                { label: 'This Month', value: '142' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card p-6 rounded-lg border border-border text-center"
                >
                  <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Filters and Search */}
        <section className="py-8 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Department Filter */}
              <div className="flex flex-wrap gap-2">
                <Button
                  onClick={() => setSelectedDepartment('all')}
                  variant={selectedDepartment === 'all' ? 'metro' : 'metro-ghost'}
                  size="sm"
                >
                  <Filter className="h-4 w-4 mr-1" />
                  All Departments
                </Button>
                {departments.map((dept) => (
                  <Button
                    key={dept.id}
                    onClick={() => setSelectedDepartment(dept.id)}
                    variant={selectedDepartment === dept.id ? 'metro' : 'metro-ghost'}
                    size="sm"
                  >
                    <span className="mr-1">{dept.icon}</span>
                    {dept.name}
                  </Button>
                ))}
              </div>

              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search summaries..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Summaries Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {filteredSummaries.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {filteredSummaries.map((summary, index) => (
                  <SummaryCard
                    key={summary.id}
                    {...summary}
                    index={index}
                  />
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <div className="text-6xl mb-4">📄</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  No summaries found
                </h3>
                <p className="text-muted-foreground">
                  Try adjusting your filters or search terms
                </p>
              </motion.div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Summaries;