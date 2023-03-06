
import React from 'react'
import { useRecoilValue } from 'recoil';
import './App.css'
import Header from './components/Header';
import NotifList from './components/NotifList';
import { dataNotification } from './recoil/atom/notificationAtom';


function App() {

const notif = useRecoilValue(dataNotification);

return (
    <div className="border shadow-xl font-defaultFont rounded-md md:w-[756px] md:mx-auto md:mt-[4rem] ">
      <Header></Header>
      {notif.map((item, index) => (
        <NotifList key={index} item={item} index={index} />
      ))}
    </div>
  )
}

export default App