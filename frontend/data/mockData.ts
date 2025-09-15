export const departments = [
  {
    id: 'finance',
    name: 'Finance',
    icon: '💰',
    color: 'bg-green-500',
    description: 'Financial operations, budgets, and cost management'
  },
  {
    id: 'hr',
    name: 'Human Resources',
    icon: '👥',
    color: 'bg-blue-500',
    description: 'Employee management, training, and organizational development'
  },
  {
    id: 'engineering',
    name: 'Engineering',
    icon: '⚙️',
    color: 'bg-purple-500',
    description: 'Technical infrastructure, maintenance, and development'
  },
  {
    id: 'safety',
    name: 'Safety',
    icon: '🛡️',
    color: 'bg-red-500',
    description: 'Safety protocols, compliance, and risk management'
  }
];

export const summaries = [
  {
    id: 1,
    title: 'Q3 Budget Analysis Report',
    department: 'finance',
    date: '2024-01-15',
    highlights: ['30% cost reduction achieved', 'Revenue targets exceeded', 'New cost optimization strategies implemented'],
    summary: 'Comprehensive analysis of Q3 financial performance showing significant improvements in cost management and revenue generation.',
    status: 'completed' as const
  },
  {
    id: 2,
    title: 'Employee Training Program Update',
    department: 'hr',
    date: '2024-01-14',
    highlights: ['95% completion rate', '200+ employees trained', 'Safety protocols updated'],
    summary: 'Quarterly training program successfully completed with high engagement and improved safety awareness.',
    status: 'completed' as const
  },
  {
    id: 3,
    title: 'Metro Line Extension Project',
    department: 'engineering',
    date: '2024-01-13',
    highlights: ['Phase 1 completed', 'New stations operational', 'Advanced signaling system installed'],
    summary: 'Major infrastructure milestone achieved with successful completion of metro line extension project.',
    status: 'in-progress' as const
  },
  {
    id: 4,
    title: 'Safety Audit and Compliance Report',
    department: 'safety',
    date: '2024-01-12',
    highlights: ['Zero incidents recorded', '100% compliance achieved', 'Emergency protocols tested'],
    summary: 'Comprehensive safety audit demonstrates excellent safety standards and emergency preparedness.',
    status: 'completed' as const
  },
  {
    id: 5,
    title: 'Digital Transformation Initiative',
    department: 'engineering',
    date: '2024-01-11',
    highlights: ['AI systems deployed', 'Digital workflows implemented', 'Efficiency increased by 40%'],
    summary: 'Successfully implemented AI-powered document management and digital workflow systems.',
    status: 'completed' as const
  }
];

export const dashboardData = {
  totalDocuments: 1247,
  processedToday: 45,
  departmentStats: [
    { name: 'Finance', documents: 312, processed: 12 },
    { name: 'HR', documents: 289, processed: 8 },
    { name: 'Engineering', documents: 456, processed: 18 },
    { name: 'Safety', documents: 190, processed: 7 }
  ],
  recentActivity: [
    { action: 'Document uploaded', department: 'Finance', time: '2 minutes ago' },
    { action: 'Summary generated', department: 'Engineering', time: '5 minutes ago' },
    { action: 'Report approved', department: 'Safety', time: '10 minutes ago' },
    { action: 'Review completed', department: 'HR', time: '15 minutes ago' }
  ]
};

export const userRoles = ['Admin', 'Department User', 'Public User'];

export const notifications = [
  {
    id: 1,
    title: 'New document processed',
    message: 'Engineering department document has been successfully analyzed',
    time: '5 minutes ago',
    type: 'success'
  },
  {
    id: 2,
    title: 'Review required',
    message: 'Finance report requires manager approval',
    time: '1 hour ago',
    type: 'warning'
  },
  {
    id: 3,
    title: 'System update',
    message: 'AI processing capabilities have been enhanced',
    time: '2 hours ago',
    type: 'info'
  }
];