import { FaGem } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { GoThreeBars } from 'react-icons/go';
import { CgProfile } from 'react-icons/cg'
import { ProSidebar, SidebarHeader, SidebarContent, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import './css/Dashboard.css'
import { useState } from 'react';
import Profile from './Components/profile';
import profileimg from '../images/profile.jpg';
// import AddUser from './Components/AddUser';
import AllUsers from './Components/AllUsers';
import ParticipatingGyms from './Components/ParticipatingGyms';
import GymOptions from './Components/Gymoptions';
import Sendmails from './Components/sendMails';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
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
                                setShow1(true)
                                setShow2(false)
                                setShow3(false)
                                setShow4(false)
                            }}
                        >Users
                        </MenuItem>
                        <MenuItem
                            icon={<FaGem />}
                            onClick={() => {
                                setShow1(false)
                                setShow2(true)
                                setShow3(false)
                                setShow4(false)
                            }}>Add Gyms Options</MenuItem>
                        <MenuItem
                            icon={<FaGem />}
                            onClick={() => {
                                setShow1(false)
                                setShow2(false)
                                setShow3(true)
                                setShow4(false)
                            }}>Participating Gyms {"&"} Studios
                        </MenuItem>
                        <MenuItem
                            icon={<FaGem />}
                            onClick={() => {
                                setShow1(false)
                                setShow2(false)
                                setShow3(false)
                                setShow4(true)
                            }}>Send Mails Options
                        </MenuItem>
                        {/* <MenuItem
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
                        </MenuItem> */}
                    </SidebarContent>
                </Menu>
            </ProSidebar>
            <div className="sideBarComponentsDiv">
                <div className="topBarDiv">
                    <div style={{ display: "flex", justifyContent: "space-between", cursor: "pointer" }}>
                        <Link to='/' style={{ textDecoration: "none !important" }}>
                            <Button variant="contained" color="primary">
                                {"<  "} Backtohome
                            </Button>
                        </Link>
                        <img src={profileimg} style={{ width: "2.5rem", borderRadius: "50%" }} />
                    </div>
                </div>
                <div className="sideBarDataDiv">
                    {/* {show1 && <Profile />} */}
                    {show1 && <AllUsers />}
                    {show2 && <GymOptions />}
                    {show3 && <ParticipatingGyms />}
                    {show4 && <Sendmails />}
                </div>
            </div>
        </div>
    )
}
export default AdminDashboard;