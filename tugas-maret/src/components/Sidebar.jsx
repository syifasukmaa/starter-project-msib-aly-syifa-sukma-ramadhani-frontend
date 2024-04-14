import React from 'react';
import Image from 'next/image';
const Sidebar = ({ action }) => {
  return (
    <div className='lg:w-1/2 w-full py-12 px-6 lg:min-h-screen h-auto bg-cover bg-center bg-no-repeat bg-[url("/sidebar.png")] flex flex-col items-center justify-center'>
      <Image
        src='/logosipa.png'
        alt='logo'
        width={150}
        height={200}
        priority={false}
        className='w-25 lg:w-35'
      />
      <h1 className='my-2.5 text-white1 lg:text-[32px] text-[20px] font-bold leading-normal'>SYIFAMILY</h1>
      <p className='text-lg font-semibold leading-normal text-center text-white lg:text-xl w-96'>
        {action !== 'login'
          ? 'To keep connected with us please login journey with us'
          : 'Enter your personal detail and start journey with us'}
      </p>
    </div>
  );
};

export default Sidebar;
