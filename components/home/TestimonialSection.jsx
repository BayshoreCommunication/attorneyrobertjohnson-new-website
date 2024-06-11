import React from 'react';
import SectionLayout from '../shared/SectionLayout';
import MotionEffect from '../motion/MotionEffect';

function TestimonialSection() {
  return (
    <SectionLayout img="bg-[url('/image/homebanner3.png')] bg-cover bg-center">
      <div className=''>
        <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-center md:justify-start gap-16'>
          <MotionEffect effect='fade-right' duration='2000'>
            <div className=''>
              <h2
                className={`text-stone-900 font-bold text-3xl mt-5 mb-4 text-center md:text-left`}
              >
                Investing in You: Your Trusted Partner for a Brighter Financial
                Tomorrow
              </h2>

              <p className='mb-4 text-lg text-stone-900 text-center md:text-left mt-6'>
                {` Boasting over a decade of experience, we handle everything from
                personal returns, non-profit & multi-state to tricky corporate
                tax matters.`}
                <br />
                {`We walk you through tax planning, wealth management, and
                retirement services, ensuring you hit your financial targets.`}
                <br />
                {` By cutting down on your tax bill and pumping up your savings, we
                make sure you keep more of your cash We help you build, grow,
                and maintain your wealth through personalized strategies and
                financial planning solutions We're all about being the best.`}
                <br />
                {`We're plugged into the community, stay on top of tax law
                changes, and keep on learning. `}
                <br />
                {` You benefit from a team that's always growing and improving to
                serve you better.`}
              </p>
            </div>
          </MotionEffect>
          <MotionEffect effect='fade-left' duration='2000'>
            <div>
              <div className='video-container'>
                <iframe
                  src={`https://www.youtube.com/embed/R65ByIK9M8g?si=gswu9LsX3OO0SoOv`}
                  frameBorder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                  title='YouTube video player'
                ></iframe>
              </div>
            </div>
          </MotionEffect>
        </div>
      </div>
    </SectionLayout>
  );
}

export default TestimonialSection;
