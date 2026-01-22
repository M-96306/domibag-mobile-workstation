
import { Hero } from '@/components/pitch/Hero';
import { Problem } from '@/components/pitch/Problem';
import { Solution } from '@/components/pitch/Solution';
import { Product } from '@/components/pitch/Product';
import { Market } from '@/components/pitch/Market';
import { Competition } from '@/components/pitch/Competition';
import { BusinessModel } from '@/components/pitch/BusinessModel';
import { Marketing } from '@/components/pitch/Marketing';
import { Roadmap } from '@/components/pitch/Roadmap';
import { Team } from '@/components/pitch/Team';
import { ContactForms } from '@/components/pitch/ContactForms';
import { Contact } from '@/components/pitch/Contact';

const PitchDeck = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Problem />
      <Solution />
      <Product />
      <Market />
      <Competition />
      <BusinessModel />
      <Marketing />
      <Roadmap />
      <Team />
      <ContactForms />
      <Contact />
    </div>
  );
};

export default PitchDeck;
