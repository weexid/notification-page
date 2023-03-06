import React from 'react'
import { useRecoilState } from 'recoil';
import { dataNotification } from '../recoil/atom/notificationAtom';
import NotifItem from './NotifItem';
function NotifList({item, index}) {
  const [notif, setNotif] = useRecoilState(dataNotification);

    const {read} = item;
    const conditionClass = `cursor-pointer mx-4 mb-3 rounded-xl px-[1.1rem] py-[1.2rem] ${read ? 'bg-secondary-white' : 'bg-secondary-light-grayish-blue-1'}`
    
    const changeReadStatus = () => {
      //index sudah ada

      //siapkan data baru
      const newData = {...item, read: !item.read}

      //clone all data
      const newarr = [...notif];

      //replace data berdasarkan index
      newarr[index] = newData;

      //set data dgn usestate
      setNotif(newarr)
    }

  return (
    <div onClick={changeReadStatus} className={conditionClass}>
        <NotifItem notifItem={item} />
    </div>
  )
}

export default NotifList