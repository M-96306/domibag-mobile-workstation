
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { Specifications } from '@/components/Specifications';
import { Benefits } from '@/components/Benefits';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <Hero />
      <Features />
      <Benefits />
      <Specifications />
      <Footer />
    </div>
  );
};

export default Index;
