import React from 'react';
import { konversiTanggal, konversiTimestamp } from '../utils/timestampUtils';

function NotifItem({notifItem}) {
    const {profile, nama, title, thumbnail, subject, timestamp, description, read} = notifItem;
    const newDate = konversiTimestamp(timestamp);
    const styleImg = {
        backgroundImage : `"url(${profile})"`,
    }

    const classSubject = `ml-1 text-md font-bold hover:text-primary-blue cursor-pointer ${subject === "Chess Club" ? 'text-primary-blue' : 'text-secondary-dark-grayish-blue'}`

    return (
    <div>
        <div className="flex justify-start items-start">
           <div className="min-w-[40px] max-w-[40px] md:min-w-[50px] md:max-w-[50px]">
                <img src={profile} alt="{nama}" />
           </div>
           <div className="ml-3 md:ml-4">
            <div className='text-sm flex md:text-[1rem] md: gap-2'>
                <div>
                    <span className='font-bold'>{nama}</span> <span className='ml-1 text-md text-secondary-dark-grayish-blue '>{title}</span>
                    <span className={classSubject}>{subject}</span>
                    {!read && (
                        <div className="w-2 h-2 bg-primary-red inline-block ml-1 rounded-xl"></div>
                    )}
                    <div className='text-secondary-grayish-blue'>
                    {konversiTanggal(newDate)}
                    </div>

                    {description && (
                        <div className="border rounded-md text-secondary-dark-grayish-blue px-5 py-3 mt-2 text-md leading-sm md:hover:bg-secondary-light-grayish-blue-2 ">
                            {description}
                        </div>
                    )}
                </div>
                
                {thumbnail && (
                <img className='max-w-[40px] max-h-[40px]' src={thumbnail} alt={nama} />
                )}
                
                
                
                
                
            </div>
            {/* <h4>{subject}</h4>  */}
           </div>
        </div>
    </div>
  )
}

export default NotifItem