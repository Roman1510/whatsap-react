import React, { useEffect, useState } from 'react'
import { Avatar, IconButton } from '@material-ui/core'
import { AttachFile, Search, MoreVert } from '@material-ui/icons'
import './Chat.style.css'
const Chat = () => {
  const [seed, setSeed] = useState('')
  useEffect(() => {
    setSeed(Math.random() * 500)
  }, [])

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/:${seed}.svg`} />
        <div className="chat__headerInfo">
          <h3>Room name</h3>
          <p>Last seen at... </p>
        </div>
        <IconButton>
          <AttachFile />
        </IconButton>
        <IconButton>
          <Search />
        </IconButton>
        <IconButton>
          <MoreVert />
        </IconButton>
      </div>
      <div className="chat__body">
        <p className={`chat__message ${true && 'chat__receiver'}`}>
          <span className="chat__name">askldfjaskl</span>
          hey guys
          <span className="chat__timestamp">14:20</span>
        </p>
      </div>
      <div className="chat__footer"></div>
    </div>
  )
}

export default Chat
