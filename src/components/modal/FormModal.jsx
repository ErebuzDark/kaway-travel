import React from 'react';

const FormModal = ( {isOpen, children} ) => {
  return (
    <div className={`${isOpen ? "fixed": "hidden"} top-0 left-0 h-[100vh] p-2 w-full bg-slate-600/40`}>
      <div className='absolute flex justify-center w-full p-2 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2' >
        {children}
      </div>
    </div>
  );
}

export default FormModal;
