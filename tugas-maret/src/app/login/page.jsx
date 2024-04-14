'use client';
import ActionAuth from '@/components/ActionAuth';
import Button from '@/components/Button';
import Input from '@/components/Input';
import Sidebar from '@/components/Sidebar';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

const page = () => {
  const router = useRouter();

  const handleRegister = () => {
    router.push('/');
  };
  return (
    <div className='flex flex-col lg:flex-row'>
      <Sidebar />
      <div className='flex flex-col items-center justify-center w-full my-6 lg:px-20 lg:my-0 lg:w-1/2'>
        {/* bagian atas */}

        <div className='inline-flex items-center justify-between w-full pt-4 pb-6'>
          <div className='flex-col justify-center items-center gap-3.5 text-center  w-full'>
            <div className='text-xl font-bold leading-normal text-black lg:text-2xl'>Login</div>
            <div className='text-xl font-normal leading-normal lg:text-2xl text-primary'>Welcome Again Dear</div>
          </div>
        </div>

        {/* bagian bawah */}
        <div>
          <form action=''>
            <Input
              placeholder={'Input Your Email Here'}
              name={'email'}
            />
            <Input
              placeholder={'Input Your Password Here'}
              name={'password'}
              icon={'/eye.svg'}
            />

            <Button
              size={'large'}
              variants={'primary'}
            >
              Login Now
            </Button>
          </form>

          <ActionAuth action={'Login'} />

          <p className='text-sm font-normal text-center text-slate-800 my-3.5'>
            Already have an account?{' '}
            <span
              onClick={handleRegister}
              className='font-bold underline cursor-pointer'
            >
              Login Now
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
