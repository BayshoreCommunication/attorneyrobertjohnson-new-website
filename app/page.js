import AreasOfPractice from '@/components/home/AreasOfPractice';
import BlogSection from '@/components/home/BlogSection';
import ContactApex from '@/components/home/ContactApex';
import FreeCaseEvaluation from '@/components/home/FreeCaseEvaluation';
import FreeConsultation from '@/components/home/FreeConsultation';
import HeroSection from '@/components/home/HeroSection';
import ObligationSection from '@/components/home/ObligationSection';
import PersonalInjury from '@/components/home/PersonalInjury';

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
