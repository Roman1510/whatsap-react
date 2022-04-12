import { Avatar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import './SidebarChat.style.css'
const SidebarChat = ({ addNewChat }) => {
  const [seed, setSeed] = useState('')
  useEffect(() => {
    setSeed(Math.random() * 500)
  }, [])

  const createChat = () => {
    const roomName = prompt('please enter name for chat')
    if (roomName) {
      // do someting
    }
  }

  return !addNewChat ? (
    <div className="sidebarChat">
      <Avatar src={`https://avatars.dicebear.com/api/human/:${seed}.svg`} />
      <div className="sidebarChat__info">
        <h2>room name</h2>
        <p>last message...</p>
      </div>
    </div>
  ) : (
    <div onClick={createChat} className="sidebarChat">
      <h2>Add new chat</h2>
    </div>
  )
}

export default SidebarChat
