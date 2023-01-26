import Header from './components/header'
import { useState } from 'react'

import initialEmails from './data/emails'

import './styles/app.css'

function App() {
  // Use initialEmails for state
  console.log(initialEmails)

  const [emails, setEmails] = useState(initialEmails)

  return (
    <div className="app">
      <Header />
      <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className="item active"
            // onClick={() => {}}
          >
            <span className="label">Inbox</span>
            <span className="count">?</span>
          </li>
          <li
            className="item"
            // onClick={() => {}}
          >
            <span className="label">Starred</span>
            <span className="count">?</span>
          </li>

          <li className="item toggle">
            <label htmlFor="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={false}
              // onChange={() => {}}
            />
          </li>
        </ul>
      </nav>
      <main className="emails">
        {
          emails.map((obj) => {
            return (

              <ul>
                  <li className={obj.read ? 'email read' : 'email unread'} key={obj.id }>
                    <div className="select">
                    <input type="checkbox"/>
                    </div>
                    <div className="star">
                    <input className="star-checkbox" type="checkbox" checked={obj.starred} />
                    </div>
                    <div className="sender">
                      {obj.sender}
                    </div>
                  
                  <div className='title '>
                    {obj.title}
                  </div>
                  </li>
                </ul>
            )
                      
            //console.log("here is item" , obj )
          })
          
        }
      
        
        {/* Render a list of emails here */}
        
        
        </main>
    </div>
  )
}

export default App
