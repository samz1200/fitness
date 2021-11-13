import { useState } from 'react';
import { FaUserCircle, FaHeart, FaMicroblog } from 'react-icons/fa';
import { GrProjects } from 'react-icons/gr';
import profile from '../../images/profile.jpg';
import '../css/Components/profile.css';
import FollowerView from '../subComponents/followersView';
import PostView from '../subComponents/postsView';
import ProfileView from '../subComponents/profileView';
import ProjectView from '../subComponents/projectsView';
const Profile = ({ id }) => {
    // const [check1, setCheck1] = useState(true);
    // const [check2, setCheck2] = useState(false);
    // const [check3, setCheck3] = useState(false);
    // const [check4, setCheck4] = useState(false);
    return (
        <div>
            <h1 style={{ margin: "3rem 0" }}>Profile</h1>
            <div className="profileBoard">
                <div className="profileImageDiv">
                    <img src={profile} className="profileImage" />
                    <h3 style={{ color: "white" }}>Syed Ali Hassan</h3>
                </div>
            </div>
            <div className="profileNavBar">
                <div
                    className="profileTabs"
                    style={{ borderBottom: "2px solid #05ce78" }}
                // style={{ borderBottom: check1 ? "2px solid #05ce78" : "" }}
                // onClick={() => {
                //     setCheck1(true);
                //     setCheck2(false);
                //     setCheck3(false);
                //     setCheck4(false);

                // }}
                ><FaUserCircle /> Profile
                </div>
                {/* <div
                    className="profileTabs"
                    style={{ borderBottom: check2 ? "2px solid #05ce78" : "" }}
                    onClick={() => {
                        setCheck1(false);
                        setCheck2(true);
                        setCheck3(false);
                        setCheck4(false);

                    }}><FaHeart /> Followers
                </div> */}
                {/* <div
                    className="profileTabs"
                    style={{ borderBottom: check3 ? "2px solid #05ce78" : "" }}
                    onClick={() => {
                        setCheck1(false);
                        setCheck2(false);
                        setCheck3(true);
                        setCheck4(false);

                    }}><GrProjects /> Posts {"&"} Projects
                </div> */}
                {/* <div
                    className="profileTabs"
                    style={{ borderBottom: check4 ? "2px solid #05ce78" : "" }}
                    onClick={() => {
                        setCheck1(false);
                        setCheck2(false);
                        setCheck3(false);
                        setCheck4(true);

                    }}><GrProjects /> Projects
                </div> */}
            </div>
            <div>
                <ProfileView userID={id} />
                {/* {check1 && <ProfileView />} */}
                {/* {check2 && <FollowerView />} */}
                {/* {check3 && <PostView />} */}
                {/* {check4 && <ProjectView />} */}
            </div>
        </div>
    )
}
export default Profile;