import React, { useEffect, useState } from 'react';
import Button from '@/components/Button';
import Image from 'next/image';

const Navbar = () => {
  const [open, setOpen] = useState(false);

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

  return (
    <div>
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
                ? 'bg-purple3 z-50 absolute w-1/2 top-0 right-0 h-full px-10 py-20 shadow-lg text-white lg:text-black shadow-black/20 lg:shadow-none'
                : 'px-2.5 py-3 justify-start items-start gap-6 lg:flex hidden text-black'
            }`}
          >
            <ul className='relative flex flex-col items-center justify-center cursor-pointer lg:justify-between lg:flex-row'>
              {links.map((link) => (
                <li
                  className='px-2.5 py-3 group'
                  key={link.id}
                >
                  <a
                    className='text-base font-medium leading-normal'
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
    </div>
  );
};

export default Navbar;
