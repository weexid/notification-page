import React from 'react'
import { useRecoilState } from 'recoil'
import { dataNotification } from '../recoil/atom/notificationAtom'

function Header() {
  const [mark, setMark] = useRecoilState(dataNotification);
  
  const filterUnreadNotif = (arr) => {
    const filterArr = arr.filter(obj => obj.read === false);
    return filterArr;
  }

  const unreadNotif = filterUnreadNotif(mark).length;
  
  const readAllNotif = () => {
    const newData = mark.map(item => {
      if(item.read === false){
        return {...item, read: true}
      }

      return item;
    })
    
    setMark(newData);
  }

  // console.log(readAllNotif());

  return (
    <div className='flex justify-between items-center py-5 px-4 md:py-[2rem] md:px-[2rem]'>
        <div className="flex justify-between items-center gap-3">
            <h1 className='text-xl md:text-2xl font-extrabold'>Notifications</h1>
            {unreadNotif > 0 && (
              <div className=" w-[30px] h-[25px] font-bold text-white bg-primary-blue flex justify-center items-center rounded-md text-md">
              {unreadNotif}
            </div>
            )}
        </div>
        <div className="text-gray cursor-pointer">
            <h3 onClick={readAllNotif} className='text-secondary-dark-grayish-blue text-[14px] md:text-[1rem] hover:text-primary-blue'>Mark all as read</h3>
        </div>
    </div>
  )
}

export default Header