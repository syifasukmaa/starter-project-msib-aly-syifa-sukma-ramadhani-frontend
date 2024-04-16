'use client';
import ActionAuth from '@/components/ActionAuth';
import Button from '@/components/Button';
import Input from '@/components/Input';
import Sidebar from '@/components/Sidebar';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
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

  const handleRegister = (e) => {
    e.preventDefault();

    localStorage.setItem('userData', JSON.stringify(formData));
  };

  const router = useRouter();
  const handleLogin = () => {
    router.push('/login');
  };

  return (
    <>
      <div className='flex flex-col lg:flex-row'>
        <Sidebar action={'login'} />
        <div className='flex flex-col items-center justify-center w-full px-6 my-6 lg:w-1/2 lg:px-20 lg:my-0'>
          {/* bagian atas */}
          <div>
            <div className='inline-flex items-center justify-between pt-4 pb-6'>
              <div className='flex-col justify-center items-center gap-3.5 text-center'>
                <div className='text-xl font-bold leading-normal text-black lg:text-2xl'>Register</div>
                <div className='text-xl font-normal leading-normal lg:text-2xl text-primary'>
                  Register to learn a wonderful things
                </div>
              </div>
            </div>

            {/* bagian bawah */}
            <div>
              <form>
                <Input
                  placeholder={'Input Your Name Here'}
                  name={'name'}
                  onChange={handleInputChange}
                />
                <Input
                  placeholder={'Input Your Address Here'}
                  name={'address'}
                  required={true}
                  onChange={handleInputChange}
                />
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
                  onClick={handleRegister}
                >
                  Register Now
                </Button>
              </form>

              <ActionAuth action={'Register'} />
              <p className='text-sm font-normal text-center text-slate-800 my-3.5'>
                Already have an account?{' '}
                <span
                  onClick={handleLogin}
                  className='font-bold underline cursor-pointer'
                >
                  Login Now
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
