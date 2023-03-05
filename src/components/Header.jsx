import React from 'react'

function Header({totalNotif}) {
  return (
    <div className='flex justify-between items-center py-5 px-4 md:py-[2rem] md:px-[2rem]'>
        <div className="flex justify-between items-center gap-3">
            <h1 className='text-xl md:text-2xl font-extrabold'>Notifications</h1>
            <div className=" w-[30px] h-[25px] font-bold text-white bg-primary-blue flex justify-center items-center rounded-md text-md">3</div>
        </div>
        <div className="text-gray cursor-pointer">
            <h3 className='text-secondary-dark-grayish-blue text-[14px] md:text-[1rem] hover:text-primary-blue'>Mark all as read</h3>
        </div>
    </div>
  )
}

export default Header