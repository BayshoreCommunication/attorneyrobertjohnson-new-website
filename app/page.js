import AboutSection from '@/components/home/AboutSection';
import AboutUs from '@/components/home/AboutUs';
import BlogSection from '@/components/home/BlogSection';
import ContactApex from '@/components/home/ContactApex';
import HeroSection from '@/components/home/HeroSection';
import ServiceSection from '@/components/home/ServiceSection';
import TestimonialSection from '@/components/home/TestimonialSection';
import WhyUs from '@/components/home/WhyUs';

export default function Home() {
  return (
    <main className='w-full'>
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <TestimonialSection />
      <BlogSection />
      <WhyUs />
      <AboutUs />
      <ContactApex />
    </main>
  );
}
