import AboutUs from '@/components/home/AboutUs';
import AreasOfPractice from '@/components/home/AreasOfPractice';
import BlogSection from '@/components/home/BlogSection';
import ContactApex from '@/components/home/ContactApex';
import FreeConsultation from '@/components/home/FreeConsultation';
import HeroSection from '@/components/home/HeroSection';
import PersonalInjury from '@/components/home/PersonalInjury';
import WhyUs from '@/components/home/WhyUs';

export default function Home() {
  return (
    <main className='w-full'>
      <HeroSection />
      <PersonalInjury />
      <FreeConsultation />
      <AreasOfPractice />
      {/* <TestimonialSection /> */}
      <BlogSection />
      <WhyUs />
      <AboutUs />
      <ContactApex />
    </main>
  );
}
