import AreasOfPractice from '@/components/Home/AreasOfPractice';
import BlogSection from '@/components/Home/BlogSection';
import ContactApex from '@/components/Home/ContactApex';
import FreeCaseEvaluation from '@/components/Home/FreeCaseEvaluation';
import FreeConsultation from '@/components/Home/FreeConsultation';
import HeroSection from '@/components/Home/HeroSection';
import ObligationSection from '@/components/Home/ObligationSection';
import PersonalInjury from '@/components/Home/PersonalInjury';

export default function Home() {
  return (
    <main className='w-full'>
      <HeroSection />
      <PersonalInjury />
      <FreeConsultation />
      <FreeCaseEvaluation />
      <AreasOfPractice />
      <ObligationSection />
      <ContactApex />
      <BlogSection />
    </main>
  );
}
