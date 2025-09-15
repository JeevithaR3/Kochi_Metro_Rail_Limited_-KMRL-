import { motion } from 'framer-motion';
import { CalendarDays, FileText, TrendingUp, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { departments } from '@/data/mockData';

interface SummaryCardProps {
  id: number;
  title: string;
  department: string;
  date: string;
  highlights: string[];
  summary: string;
  status: 'completed' | 'in-progress' | 'pending';
  index: number;
}

const SummaryCard = ({ title, department, date, highlights, summary, status, index }: SummaryCardProps) => {
  const dept = departments.find(d => d.id === department);
  
  const statusConfig = {
    completed: { color: 'bg-green-100 text-green-800', dot: 'bg-green-500' },
    'in-progress': { color: 'bg-yellow-100 text-yellow-800', dot: 'bg-yellow-500' },
    pending: { color: 'bg-gray-100 text-gray-800', dot: 'bg-gray-500' }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100 
      }}
      whileHover={{ 
        y: -8, 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      className="group relative"
    >
      <div className="bg-card rounded-xl border border-border shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
        {/* Status Bar */}
        <div className="h-1 bg-gradient-to-r from-primary via-primary-glow to-accent"></div>
        
        {/* Card Content */}
        <div className="p-6 space-y-4">
          {/* Header */}
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-3">
              <div className={`p-2 rounded-lg ${dept?.color || 'bg-primary'} text-white text-lg`}>
                {dept?.icon || '📄'}
              </div>
              <div>
                <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                  {title}
                </h3>
                <p className="text-sm text-muted-foreground">{dept?.name}</p>
              </div>
            </div>
            
            {/* Status Badge */}
            <div className="flex items-center space-x-2">
              <div className={`w-2 h-2 rounded-full ${statusConfig[status].dot}`}></div>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusConfig[status].color}`}>
                {status.replace('-', ' ')}
              </span>
            </div>
          </div>

          {/* Date and Info */}
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <CalendarDays className="h-4 w-4" />
              <span>{new Date(date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center space-x-1">
              <FileText className="h-4 w-4" />
              <span>AI Summary</span>
            </div>
          </div>

          {/* Summary */}
          <p className="text-foreground leading-relaxed">
            {summary}
          </p>

          {/* Highlights */}
          <div className="space-y-2">
            <h4 className="font-medium text-foreground flex items-center space-x-1">
              <TrendingUp className="h-4 w-4" />
              <span>Key Highlights</span>
            </h4>
            <ul className="space-y-1">
              {highlights.slice(0, 3).map((highlight, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + idx * 0.05 }}
                  className="flex items-center space-x-2 text-sm text-muted-foreground"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  <span>{highlight}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <Button variant="metro-ghost" size="sm">
              <Clock className="h-4 w-4 mr-1" />
              View Timeline
            </Button>
            <Button variant="metro" size="sm">
              Full Report
            </Button>
          </div>
        </div>

        {/* Hover Glow Effect */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/0 via-primary/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      </div>
    </motion.div>
  );
};

export default SummaryCard;