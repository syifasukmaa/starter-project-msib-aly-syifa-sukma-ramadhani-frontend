import Image from 'next/image';
import React from 'react';

const Input = ({ name, placeholder, required, icon, value, type, onChange }) => {
  return (
    <div className='my-3.5'>
      <label
        htmlFor={name}
        className='block text-base font-medium leading-6 text-black capitalize'
      >
        {name} <span className='text-red-500'> {required ? '*' : ''}</span>
      </label>
      <div className='mt-2 '>
        <div className='relative flex rounded-md shadow-sm ring-1 ring-inset ring-borderGrey'>
          {type === 'textarea' ? (
            <textarea
              name={name}
              id={name}
              autoComplete={name}
              className='flex-1 block w-full px-5 py-3 font-medium bg-transparent border-0 text-primary placeholder:text-grey sm:text-sm sm:leading-6 placeholder:font-medium placeholder:text-sm'
              placeholder={placeholder}
              defaultValue={value}
              onChange={onChange}
            />
          ) : (
            <>
              <input
                type='text'
                name={name}
                id={name}
                autoComplete={name}
                className='flex-1 block w-full px-5 py-3 font-medium bg-transparent border-0 text-primary placeholder:text-grey sm:text-sm sm:leading-6 placeholder:font-medium placeholder:text-sm'
                placeholder={placeholder}
                defaultValue={value}
                onChange={onChange}
              />
              {icon ? (
                <Image
                  src={icon}
                  alt='eye icon'
                  width={20}
                  height={20}
                  className='absolute top-0 bottom-0 my-auto cursor-pointer right-5'
                />
              ) : (
                ''
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Input;
