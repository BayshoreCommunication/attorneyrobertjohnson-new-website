'use client';
import Head from 'next/head';
import { FaLocationDot } from 'react-icons/fa6';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { IoMdMail } from 'react-icons/io';
import { useState } from 'react';
import MotionEffect from '@/components/motion/MotionEffect';
import SectionLayout from '@/components/shared/SectionLayout';
import Swal from 'sweetalert2';
import { send } from 'emailjs-com';
import Link from 'next/link';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    send('service_3zs3w18', 'template_sndrwfl', formData, '6faScg7jl7wjajgxd')
      .then((response) => {
        console.log('response', response);
        Swal.fire({
          icon: 'success',
          text: 'Thanks for being awesome! We have received your message and would like to thank you for writing to us.',
        }).then(() => {
          setEmailForm({
            name: '',
            email: '',
            message: '',
          });
        });
      })
      .catch((err) => {
        console.log('err', err);
        Swal.fire({
          icon: 'error',
          text: 'Something went wrong!',
        }).then(() => {
          setEmailForm({
            name: '',
            email: '',
            message: '',
          });
        });
      });
  };
  return (
    <>
      <Head>
        <title>About - Apex Advisor</title>
        <meta
          name='description'
          content='Contact Apex Advisor Group Inc - Accounting &amp; Tax Preparation Firm in Tampa, Florida for Accounting, Tax Preparation, Tax Planning &amp; Tax Resolution Services.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <SectionLayout bg='bg-[#F3F3F3]'>
        <div className='mx-5'>
          <div className='text-center'>
            <MotionEffect effect={'fade-right'} duration={1500}>
              <h3 className='mb-2 font-bold text-2xl lg:text-3xl'>
                HAVE QUESTIONS? GET IN TOUCH
              </h3>
            </MotionEffect>

            <MotionEffect
              effect={'fade-left'}
              duration={1500}
              className='text-sm mb-6 lg:mb-12'
            >
              <p>
                Robert has over 20 years of valuable experience in the legal
                community and insurance industry.
              </p>
              <p>
                He is not afraid to fight for justice for you and your family.
              </p>
              <p className='mt-2'>
                Available 24/7 at{' '}
                <span className='text-[#4B93FF] text-base font-semibold'>
                  (813) 540-3225
                </span>
              </p>
            </MotionEffect>
          </div>
        </div>
        <div className='flex flex-col lg:flex-row gap-7 lg:gap-14 items-center px-5 lg:px-0'>
          <div className='flex flex-col gap-5 w-full lg:w-1/2'>
            <MotionEffect
              effect={'fade-up'}
              duration={800}
              className='bg-white shadow-medium hover:scale-[1.01] transition-all duration-500 ease-in-out py-7 px-8 rounded-md flex gap-3'
            >
              <FaLocationDot size={26} color='#0B5ED7' className='mt-1' />
              <div>
                <p className='font-medium text-lg'>
                  1211 Tech Blvd. Suite #110 Tampa, Florida 33619
                </p>
                <p className='mt-2 text-gray-400 text-sm'>Our Location</p>
              </div>
            </MotionEffect>
            <MotionEffect
              effect={'fade-up'}
              duration={1500}
              className='bg-white shadow-medium hover:scale-[1.01] transition-all duration-500 ease-in-out py-7 px-8 rounded-md flex gap-3'
            >
              <BiSolidPhoneCall size={26} color='red' className='mt-1' />
              <div>
                <Link
                  href={'tel:(813) 540-3225'}
                  className='font-medium text-lg'
                >
                  (813) 540-3225
                </Link>
                <p className='mt-2 text-gray-400 text-sm'>Let’s Talk</p>
              </div>
            </MotionEffect>
            <MotionEffect
              effect={'fade-up'}
              duration={2000}
              className='bg-white shadow-medium hover:scale-[1.01] transition-all duration-500 ease-in-out py-7 px-8 rounded-md flex gap-3'
            >
              <IoMdMail size={26} color='#0B5ED7' className='mt-1' />
              <div>
                <Link
                  href={'email: attorneyRobJohnson@gmail.com'}
                  className='font-medium text-lg'
                >
                  attorneyRobJohnson@gmail.com
                </Link>
                <p className='mt-2 text-gray-400 text-sm'>Drop a Line</p>
              </div>
            </MotionEffect>
          </div>
          <MotionEffect
            effect={'fade-left'}
            duration={1500}
            className='w-full lg:w-1/2'
          >
            <form onSubmit={handleSubmit} className=''>
              <div className='flex flex-col gap-3'>
                <input
                  type='text'
                  name='name'
                  value={formData.name}
                  onChange={(event) => {
                    setFormData({
                      ...formData,
                      name: event.target.value,
                    });
                  }}
                  className='border border-gray-300 w-full py-2 rounded-lg focus:border-gray-400 outline-none px-4 text-gray-600'
                  placeholder='Enter your name'
                  required
                />
                <input
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={(event) => {
                    setFormData({
                      ...formData,
                      email: event.target.value,
                    });
                  }}
                  className='border border-gray-300 w-full py-2 rounded-lg focus:border-gray-400 outline-none px-4 text-gray-600'
                  placeholder='Enter your email address'
                  required
                />
                <textarea
                  rows='6'
                  name='message'
                  value={formData.message}
                  onChange={(event) => {
                    setFormData({
                      ...formData,
                      message: event.target.value,
                    });
                  }}
                  className='border border-gray-300 w-full py-2 rounded-lg focus:border-gray-400 outline-none px-4 text-gray-600'
                  placeholder='Enter your message'
                  required
                ></textarea>
              </div>
              <br />
              <button
                type='submit'
                className='bg-[#4B93FF] hover:bg-[#2266cb] w-full flex justify-center rounded-lg text-white py-2'
              >
                Submit
              </button>
            </form>
            <p className='mt-3 text-sm text-gray-600'>
              *I understand that the use of this form for communication with
              Attorney Robert Johnson does not establish an attorney-client
              relationship.
            </p>
          </MotionEffect>
        </div>
      </SectionLayout>
    </>
  );
};

export default ContactPage;
