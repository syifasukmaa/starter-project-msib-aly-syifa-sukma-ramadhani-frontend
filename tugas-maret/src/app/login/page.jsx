'use client';
import ActionAuth from '@/components/ActionAuth';
import Button from '@/components/Button';
import Input from '@/components/Input';
import Sidebar from '@/components/Sidebar';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const page = () => {
  const router = useRouter();
  const handleRegister = () => {
    router.push('/');
  };

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Lakukan pengecekan login di sini
    const storedUserData = JSON.parse(localStorage.getItem('userData'));
    if (storedUserData && storedUserData.email === formData.email && storedUserData.password === formData.password) {
      // Data login benar, arahkan ke halaman lain
      router.push('/profile');
    } else {
      // Data login tidak valid, tampilkan pesan kesalahan
      alert('Invalid email or password. Please try again.');
    }
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
              onChange={handleInputChange}
            />
            <Input
              placeholder={'Input Your Password Here'}
              name={'password'}
              type='password'
              icon={'/eye.svg'}
              onChange={handleInputChange}
            />

            <Button
              size={'large'}
              variants={'primary'}
              onClick={handleLogin}
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
