import { FaGem, FaHeart } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { GoThreeBars } from 'react-icons/go';
import { CgProfile } from 'react-icons/cg'
import { ProSidebar, SidebarHeader, SidebarContent, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import './css/Dashboard.css'
import { useState } from 'react';
import Profile from './Components/profile';
import profileimg from '../images/profile.jpg'
import AddUser from './Components/AddUser';
import AllUsers from './Components/AllUsers';
import ParticipatingGyms from './Components/ParticipatingGyms';
import GymOptions from './Components/Gymoptions';

const AdminDashboard = () => {
    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(true)
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
                        {/* <MenuItem
                            icon={<CgProfile />}
                            onClick={() => {
                                setShow1(true)
                                setShow2(false)
                                setShow3(false)
                                setShow4(false)
                            }}
                        >Profile
                        </MenuItem> */}
                        <MenuItem
                            icon={<CgProfile />}
                            onClick={() => {
                                setShow1(false)
                                setShow2(true)
                                setShow3(false)
                                setShow4(false)
                            }}
                        >Users
                        </MenuItem>
                        <MenuItem
                            icon={<FaGem />}
                            onClick={() => {
                                setShow1(false)
                                setShow2(false)
                                setShow3(true)
                                setShow4(false)
                            }}>Add Gyms Options</MenuItem>
                        <MenuItem
                            icon={<FaGem />}
                            onClick={() => {
                                setShow1(false)
                                setShow2(false)
                                setShow3(false)
                                setShow4(true)
                            }}>Participating Gyms {"&"} Studios
                        </MenuItem>
                        {/* <MenuItem
                            icon={<FaGem />}
                            onClick={() => {
                                setShow1(false)
                                setShow2(false)
                                setShow3(true)
                            }}>Subscriptions Options
                        </MenuItem> */}
                        <MenuItem
                            icon={<FaGem />}
                            onClick={() => {
                                setShow1(false)
                                setShow2(false)
                                setShow3(true)
                            }}>Free Services
                        </MenuItem>
                        <MenuItem
                            icon={<FaGem />}
                            onClick={() => {
                                setShow1(false)
                                setShow2(false)
                                setShow3(true)
                            }}>Discounts
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
                    {/* {show1 && <Profile />} */}
                    {show2 && <AllUsers />}
                    {show3 && <GymOptions />}
                    {show4 && <ParticipatingGyms />}
                </div>
            </div>
        </div>
    )
}
export default AdminDashboard;