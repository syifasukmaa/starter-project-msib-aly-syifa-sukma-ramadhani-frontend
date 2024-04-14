'use client';
import Button from '@/components/Button';
import Input from '@/components/Input';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
const page = () => {
  const [open, setOpen] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  const links = [
    {
      id: 1,
      link: 'brands',
      text: 'Brand',
    },
    {
      id: 2,
      link: 'bestseller',
      text: 'Best Seller',
    },
    {
      id: 3,
      link: 'categories',
      text: 'Categories',
    },
  ];

  const profile = [
    {
      id: 1,
      text: 'Detail Profile',
    },
    {
      id: 2,
      text: 'Informasi Lainnya',
    },
    {
      id: 3,
      text: 'Ubah Kata Sandi',
    },
  ];

  return (
    <>
      {/* navbar */}
      {open && <div className='fixed top-0 left-0 z-20 w-full h-full bg-black opacity-80' />}
      <div className='inline-flex items-center justify-between w-full h-24 px-8 py-4 bg-white border border-borderGrey'>
        <div className='flex items-center justify-start gap-8'>
          <img
            className={`w-14`}
            src='/logosipa.png'
          />
          <nav
            className={` ${
              open
                ? 'bg-purple3 z-50 absolute w-1/2 top-0 right-0 h-full px-10 py-20 shadow-lg shadow-black/20 lg:shadow-none'
                : 'px-2.5 py-3 justify-start items-start gap-6 lg:flex hidden'
            }`}
          >
            <ul className='relative flex flex-col items-center justify-center cursor-pointer lg:justify-between lg:flex-row'>
              {links.map((link) => (
                <li
                  className='px-2.5 py-3 group'
                  key={link.id}
                >
                  <a
                    className='text-base font-medium leading-normal text-black'
                    href={link.link}
                  >
                    {link.text}
                  </a>
                  <div className='group-hover:bg-black h-[1px] bg-transparent group-hover:animate-leftToRight transition-all'></div>
                </li>
              ))}
            </ul>
            <div>
              <Button
                onClick={() => setOpen(!open)}
                className={'absolute top-8 right-8 lg:hidden bg-transparent'}
              >
                <Image
                  src='/close.png'
                  alt=''
                  width={30}
                  height={30}
                />
              </Button>
            </div>
          </nav>
        </div>
        <div>
          <Button
            onClick={() => setOpen(!open)}
            className={'lg:hidden bg-transparent'}
          >
            <Image
              src='/burger.png'
              alt=''
              width={30}
              height={30}
            />
          </Button>
        </div>
        <div
          className={`lg:flex items-center justify-start gap-3 p-3 rounded-lg cursor-pointer h-14 hover:border hover:border-borderGrey hidden
         `}
        >
          <img
            className='w-8 h-8 bg-cover rounded-full'
            src='/person.png'
          />
          <p className='text-base font-medium leading-normal text-black Syifa'>Syifa</p>
        </div>
      </div>

      {/* content */}
      <div className='px-8 my-12 lg:px-24'>
        <h1 className='mb-8 text-2xl font-bold text-grey'>Ubah Profile</h1>
        <div className='relative flex flex-col lg:gap-8 lg:flex-row'>
          {/* left */}
          <div className='w-full py-3 border rounded-t-lg lg:bg-transparent bg-purple3 lg:py-6 lg:rounded-lg lg:w-1/4 h-min border-borderGrey'>
            <ul>
              {profile.map((link) => (
                <li
                  className={`px-2.5 lg:py-3 py-1 cursor-pointer hover:bg-purple3 flex justify-between ${
                    link.text === 'Detail Profile'
                      ? 'lg:bg-purple3 border-l-4 border-secondary text-secondary'
                      : 'hidden lg:flex'
                  }`}
                  key={link.id}
                >
                  <a
                    className='text-base font-medium leading-normal text-secondary'
                    href={link.link}
                  >
                    {link.text}
                  </a>
                  <Button
                    onClick={() => setOpenProfile(!openProfile)}
                    className={'lg:hidden bg-transparent'}
                  >
                    <Image
                      src='/dropdown.png'
                      alt=''
                      width={30}
                      height={30}
                    />
                  </Button>
                </li>
              ))}
            </ul>
          </div>
          <div
            className={`${
              openProfile
                ? 'absolute w-full py-3 bg-white border top-20 rounded-lg lg:w-9/12 border-borderGrey lg:hidden'
                : 'hidden'
            } `}
          >
            <ul>
              {profile.map((link) => (
                <li
                  className={`px-2.5 py-2 cursor-pointer hover:bg-purple3 flex justify-between ${
                    link.text === 'Detail Profile' ? 'lg:bg-purple3  text-black bg-purple3' : ''
                  }`}
                  key={link.id}
                >
                  <a
                    className='text-base font-medium leading-normal text-secondary'
                    href={link.link}
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* right */}
          <div className='w-full p-6 border rounded-b-lg lg:rounded-lg lg:w-9/12 border-borderGrey'>
            <h2 className='text-base font-semibold text-primary'>Detail Profile</h2>
            <h3 className='mt-2'>
              <span className='text-sm font-medium text-primary'>Foto Profile </span>
              <span className='text-sm font-medium text-red-600'>*</span>
            </h3>
            <div className='flex items-center mt-2 gap-3.5'>
              <img
                className='w-16 h-16 bg-cover rounded-full'
                src='/person.png'
              />
              <div>
                <Button
                  variants={'tertiary'}
                  size={'medium'}
                  className={'block'}
                >
                  Unggah Foto
                </Button>
              </div>
            </div>
            <p className='mt-2 text-sm font-medium text-grey2'>
              Foto Profil kamu disarankan memiliki rasio 1 : 1 atau berukuran tidak lebih dari 2MB
            </p>
            <form action=''>
              <Input
                required={true}
                name={'name'}
                value={'Syifa Sukma Ramadhani'}
              />
              <Input
                required={true}
                name={'email'}
                value={'Syifasukmaramadhani@gmail.com'}
              />
              <Input
                required={true}
                name={'address'}
                value={'Jl. Jelutung VII No. 383'}
              />
              <Input
                name={'biografi'}
                value={''}
                type={'textarea'}
              />
              <div className='flex justify-end py-2'>
                <Button
                  size={'medium'}
                  variants={'primary'}
                >
                  Simpan
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
