import React from 'react';
import Image from 'next/image';
import Button from './Button';

const ActionAuth = ({ action }) => {
  return (
    <>
      <div className='inline-flex items-center justify-between w-full h-4 my-3.5'>
        <div className='border w-28 border-borderGrey'></div>
        <div className='px-2 text-sm font-normal md:px-5 text-slate-800'>Or {action} With</div>
        <div className='border w-28 border-borderGrey'></div>
      </div>
      <Button
        className={'flex justify-center items-center'}
        size={'large'}
        variants={'secondary'}
      >
        <Image
          src='/google.png'
          alt='icon google'
          width={25}
          height={25}
          priority={false}
          className='ml-2.5'
        />
        <p>{action} With Google</p>
      </Button>
    </>
  );
};

export default ActionAuth;
