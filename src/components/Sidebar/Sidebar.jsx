import React from 'react'
import './Sidebar.style.css'
import { DonutLarge, Chat, MoreVert } from '@material-ui/icons'
import { Avatar, IconButton } from '@material-ui/core'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLarge />
          </IconButton>
          <IconButton>
            <Chat />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search"></div>
      <div className="sidebar__chats"></div>
    </div>
  )
}

export default Sidebar
