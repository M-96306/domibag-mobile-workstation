
import { Hero } from '@/components/pitch/Hero';
import { Problem } from '@/components/pitch/Problem';
import { Solution } from '@/components/pitch/Solution';
import { Product } from '@/components/pitch/Product';
import { Marketing } from '@/components/pitch/Marketing';
import { Roadmap } from '@/components/pitch/Roadmap';
import { Team } from '@/components/pitch/Team';
import { ContactForms } from '@/components/pitch/ContactForms';
import { Contact } from '@/components/pitch/Contact';

const PitchDeck = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <Hero />
      <Problem />
      <Solution />
      <Product />
      <Marketing />
      <Roadmap />
      <Team />
      <ContactForms />
      <Contact />
    </div>
  );
};

export default PitchDeck;
