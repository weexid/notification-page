
import React, { useState } from 'react'
import './App.css'
import { konversiTanggal, generateRandomDate, konversiTimestamp } from './utils/timestampUtils';
import Header from './components/Header';
import NotifList from './components/NotifList';
import { notifData } from './data/notificationData';


function App() {

const [notif, setNotif] = useState([...notifData]);

// console.log(notif);
return (
    <div className="border shadow-xl font-defaultFont rounded-md md:w-[756px] md:mx-auto md:mt-[4rem] ">
      <Header></Header>
      {notif.map((item, index) => (
        <NotifList key={index} item={item} />
      ))}
    </div>
  )
}

export default App