import React from 'react';
import { Nav } from 'react-bootstrap';
import { TiThLargeOutline } from "react-icons/ti";
import { IoIosNotificationsOutline } from "react-icons/io";
import { AiOutlineProfile } from "react-icons/ai";
import { PiUserListLight } from "react-icons/pi";
import { BsListTask } from "react-icons/bs";
import { GoProjectSymlink } from "react-icons/go";
import { GoReport } from "react-icons/go";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";


const Sidebar = () => {
  return (
    <div className="sidebar">
      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Item>
          <Nav.Link href="/dashboard">
            <span><TiThLargeOutline /></span> Dashboard
          </Nav.Link>
        </Nav.Item>
        {/* <Nav.Item>
          <Nav.Link href="/notification">
            <span><IoIosNotificationsOutline /></span> Notification
          </Nav.Link>
          </Nav.Item> */}
        <Nav.Item>
          <Nav.Link href="/profile">
            <span><AiOutlineProfile /></span> Profile
          </Nav.Link>
        </Nav.Item>
        {/* <Nav.Item>
          <Nav.Link href="/tasks">
            <span><BsListTask /></span> Tasks
          </Nav.Link>
        </Nav.Item> */}
        <Nav.Item>
          <Nav.Link href="/project">
            <span><GoProjectSymlink /></span> Project
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/order-list" className='useList' style={{ color: "#fff" }}>
            <span><PiUserListLight /></span> User List
          </Nav.Link>
        </Nav.Item>
        {/* <Nav.Item>
          <Nav.Link href="/report">
            <span><GoReport /></span> Report
          </Nav.Link>
        </Nav.Item> */}
        {/* <Nav.Item>
          <Nav.Link href="/team">
            <span><AiOutlineUsergroupAdd /></span> Team
          </Nav.Link>
        </Nav.Item> */}
        <Nav.Item>
          <Nav.Link href="/settings">
            <span><IoSettingsOutline /></span> Settings
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/logout">
            <span><MdLogout /></span> Log Out
          </Nav.Link>
        </Nav.Item>
        <div className="sidebar-footer">
          <div className="user-info">
            <div className="user-details">
              <span className="user-name">Manas Khandelwal</span>
              <span className="user-email">manaskhandelwal1802@gmail.com</span>
            </div>
          </div>

        </div>
      </Nav>
    </div>
  );
};

export default Sidebar;
