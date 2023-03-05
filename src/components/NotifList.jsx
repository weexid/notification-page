import React from 'react'
import NotifItem from './NotifItem';
function NotifList({item}) {
    const {read} = item;
    const conditionClass = `mx-4 mb-3 rounded-xl px-[1.1rem] py-[1.2rem] ${read ? 'bg-secondary-white' : 'bg-secondary-very-light-grayish-blue'}`
    

  return (
    <div className={conditionClass}>
        <NotifItem notifItem={item} />
    </div>
  )
}

export default NotifList