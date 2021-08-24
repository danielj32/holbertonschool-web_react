import React from 'react';
import './Notifications.css';
import NotificationItem from './NotificationItem'
import closeIcon from '../assets/close-icon.png'
import { getLatestNotification } from '../utils/utils'

export default function Notifications() {
  return (
    <div className='Notifications'>
    <button aria-label="Close" onClick={() => { console.log("Close button has been clicked")}}
    style={{position: "absolute", top: 25, right: 25, height: "20px", width: "20px", backgroundColor: "white", border: "none", outline: "none"}}>
    <img style={{height: "20px", width: "20px", position: "absolute", left: 0, top: 0}} src={closeIcon} alt="close icon"/>
    </button>
    <p>Here is the list of notifications</p>
    <ul>
    <NotificationItem type="default" value="New course available"/>
    <NotificationItem type="urgent" value="New resume available"/>
    <NotificationItem type="urgent" html={{ __html: getLatestNotification() }}/>
    </ul>
    </div>
  );
}
