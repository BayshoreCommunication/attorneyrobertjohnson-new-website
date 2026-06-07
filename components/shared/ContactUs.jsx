'use client';
import { useState } from 'react';
import MotionEffect from '../motion/MotionEffect';
import Swal from 'sweetalert2';
import { send } from 'emailjs-com';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    send('service_3zs3w18', 'template_sndrwfl', formData, '6faScg7jl7wjajgxd')
      .then((response) => {
        console.log('response', response);
        Swal.fire({
          icon: 'success',
          text: 'Thanks for being awesome! We have received your message and would like to thank you for writing to us.',
        }).then(() => {
          setFormData({
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
          setFormData({
            name: '',
            email: '',
            message: '',
          });
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className=''>
      <MotionEffect effect={'fade-right'} duration={1500}>
        <div className='flex flex-col items-center gap-2 text-center'>
          <h3 className='text-[#4B93FF] text-2xl font-bold'>
            FREE CASE EVALUATION
          </h3>
          <p className='text-center'>
            Fill out the form below
            <br />
            OR
            <br />
            Available 24/7 at <a href='tel:+(813)540-3225'>(813) 540-3225</a>
          </p>
          <p className='font-bold'>
            CONTACT ME FOR A NO COST FREE CONSULTATION
          </p>
          <p className='text-sm'>
            If you have been involved in an accident and have questions, call me
            now to schedule a free no-obligation consultation.
          </p>
        </div>
      </MotionEffect>
      <MotionEffect effect={'fade-left'} duration={1500}>
        <div className='w-full lg:w-[80%] xl:w-[60%] mx-auto border border-gray-300 rounded-xl mt-6 lg:mt-10'>
          <form
            onSubmit={handleSubmit}
            className='p-4 sm:p-10 bg-[#F3F3F3] rounded-xl'
          >
            <div className='flex flex-col gap-4'>
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
                rows='7'
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
              disabled={loading}
              className='bg-[#4B93FF] hover:bg-[#2266cb] disabled:opacity-70 disabled:cursor-not-allowed w-full flex justify-center items-center gap-2 rounded-lg text-white py-2'
            >
              {loading && (
                <svg
                  className='animate-spin h-4 w-4 text-white'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <circle
                    className='opacity-25'
                    cx='12'
                    cy='12'
                    r='10'
                    stroke='currentColor'
                    strokeWidth='4'
                  />
                  <path
                    className='opacity-75'
                    fill='currentColor'
                    d='M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z'
                  />
                </svg>
              )}
              {loading ? 'Sending...' : 'Submit'}
            </button>
          </form>
        </div>
      </MotionEffect>
    </div>
  );
};

export default ContactUs;
