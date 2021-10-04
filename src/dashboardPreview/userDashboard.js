import { FaGem, FaHeart } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { GoThreeBars } from 'react-icons/go';
import { CgProfile } from 'react-icons/cg'
import { ProSidebar, SidebarHeader, SidebarContent, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import './css/Dashboard.css'
import { useState } from 'react';
import profileimg from '../images/profile.jpg'
import EditProfile from './Components/EditProfile';

const UserDashboard = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const [show1, setShow1] = useState(true)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)
    const [show4, setShow4] = useState(false)
    const [coll, setColl] = useState(false)
    return (
        <div className="dashboard">
            <ProSidebar collapsed={coll} >
                <Menu iconShape="square" style={{
                    position: "fixed",
                    width: coll ? "5.6rem" : "17.2rem"
                }}>
                    <SidebarHeader>
                        <MenuItem
                            className="logoMenu"
                            icon={coll ?
                                <GoThreeBars onClick={() => setColl(false)} className="logoIcon" /> :
                                <ImCross onClick={() => setColl(true)} className="crossIcon" />}
                        >
                        </MenuItem>
                    </SidebarHeader>
                    <SidebarContent>
                        <MenuItem
                            icon={<CgProfile />}
                            onClick={() => {
                                setShow1(true)
                                setShow2(false)
                                setShow3(false)
                                setShow4(false)
                            }}
                        >Edit Profile
                        </MenuItem>
                    </SidebarContent>
                </Menu>
            </ProSidebar>
            <div className="sideBarComponentsDiv">
                <div className="topBarDiv">
                    <div style={{ display: "flex", justifyContent: "flex-end", cursor: "pointer" }}>
                        <img src={profileimg} style={{ width: "2.5rem", borderRadius: "50%" }} />
                    </div>
                </div>
                <div className="sideBarDataDiv">
                    {show1 && <EditProfile id={user?._id} />}
                </div>
            </div>
        </div>
    )
}
export default UserDashboard;