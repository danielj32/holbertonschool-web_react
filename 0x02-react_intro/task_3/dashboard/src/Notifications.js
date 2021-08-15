import React from 'react'
import './Notifications.css'
import { getLatestNotification} from './utils'
import closeIcon from './close-icon.png'
export default function Notifications() {
    return (
        <div className="Notifications">
          <button aria-label="Close" onClick={() => { console.log("Close button has been clicked")}}
          style={{position: "absolute", top: 25, right: 25, height: "20px", width: "20px", backgroundColor: "white", border: "none", outline: "none"}}>
        <img style={{height: "20px", width: "20px", position: "absolute", left: 0, top: 0}} src={closeIcon} alt="close icon"/>
        </button>
        <p>Here is the list of notifications</p>
        <ul>
            <li data="default">New course available</li>
            <li data="urgent">New resume available</li>
            <li data="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
        </ul>
        </div>
    )
}
