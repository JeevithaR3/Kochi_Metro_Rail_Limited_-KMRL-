import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowDown, Upload, Brain, Shield, Zap, ChevronRight } from 'lucide-react';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import Dashboard from './Dashboard';
import metroHero from '@/assets/metro-hero.jpg';

const Index = () => {
  // Check for mock login (in real app, this would check actual auth state)
  const userRole = 'Admin'; // Mock user role
  const userDepartment = 'finance'; // Mock user department
  
  // If user is logged in, show dashboard instead of landing page
  return <Dashboard userRole={userRole} userDepartment={userDepartment} />;
};

export default Index;
