import '../css/subComponents/followersView.css';
import profile from '../../images/profile.jpg';
import { ImLocation2 } from 'react-icons/im';
import { GiCheckMark } from 'react-icons/gi';
const FollowerView = () => {
    return (
        <div>
            <h1 style={{ margin: "2rem 0" }}>Followers</h1>
            <div className="followersDiv">
                <div className="followersSubDiv">
                    <img className="followersSubDivImage" src={profile} />
                    <div>
                        <p>Jayvion Simon</p>
                        <p><ImLocation2 /> Kenya</p>
                    </div>
                    <button className="followersSubDivBtn">
                        <GiCheckMark style={{ fill: "rgb(5, 206, 120)" }} /> Followed
                    </button>
                </div>
                <div className="followersSubDiv">
                    <img className="followersSubDivImage" src={profile} />
                    <div>
                        <p>Jayvion Simon</p>
                        <p><ImLocation2 /> Kenya</p>
                    </div>
                    <button className="followSubDivBtn">Follow</button>
                </div>
                <div className="followersSubDiv">
                    <img className="followersSubDivImage" src={profile} />
                    <div>
                        <p>Jayvion Simon</p>
                        <p><ImLocation2 /> Kenya</p>
                    </div>
                    <button className="followersSubDivBtn">
                        <GiCheckMark style={{ fill: "rgb(5, 206, 120)" }} /> Followed
                    </button>
                </div>
                <div className="followersSubDiv">
                    <img className="followersSubDivImage" src={profile} />
                    <div>
                        <p>Jayvion Simon</p>
                        <p><ImLocation2 /> Kenya</p>
                    </div>
                    <button className="followSubDivBtn">Follow</button>
                </div>
                <div className="followersSubDiv">
                    <img className="followersSubDivImage" src={profile} />
                    <div>
                        <p>Jayvion Simon</p>
                        <p><ImLocation2 /> Kenya</p>
                    </div>
                    <button className="followersSubDivBtn">
                        <GiCheckMark style={{ fill: "rgb(5, 206, 120)" }} /> Followed
                    </button>
                </div>
                <div className="followersSubDiv">
                    <img className="followersSubDivImage" src={profile} />
                    <div>
                        <p>Jayvion Simon</p>
                        <p><ImLocation2 /> Kenya</p>
                    </div>
                    <button className="followSubDivBtn">Follow</button>
                </div>
                <div className="followersSubDiv">
                    <img className="followersSubDivImage" src={profile} />
                    <div>
                        <p>Jayvion Simon</p>
                        <p><ImLocation2 /> Kenya</p>
                    </div>
                    <button className="followersSubDivBtn">
                        <GiCheckMark style={{ fill: "rgb(5, 206, 120)" }} /> Followed
                    </button>
                </div>
                <div className="followersSubDiv">
                    <img className="followersSubDivImage" src={profile} />
                    <div>
                        <p>Jayvion Simon</p>
                        <p><ImLocation2 /> Kenya</p>
                    </div>
                    <button className="followSubDivBtn">Follow</button>
                </div>
                <div className="followersSubDiv">
                    <img className="followersSubDivImage" src={profile} />
                    <div>
                        <p>Jayvion Simon</p>
                        <p><ImLocation2 /> Kenya</p>
                    </div>
                    <button className="followersSubDivBtn">
                        <GiCheckMark style={{ fill: "rgb(5, 206, 120)" }} /> Followed
                    </button>
                </div>
                <div className="followersSubDiv">
                    <img className="followersSubDivImage" src={profile} />
                    <div>
                        <p>Jayvion Simon</p>
                        <p><ImLocation2 /> Kenya</p>
                    </div>
                    <button className="followSubDivBtn">Follow</button>
                </div>
                <div className="followersSubDiv">
                    <img className="followersSubDivImage" src={profile} />
                    <div>
                        <p>Jayvion Simon</p>
                        <p><ImLocation2 /> Kenya</p>
                    </div>
                    <button className="followersSubDivBtn">
                        <GiCheckMark style={{ fill: "rgb(5, 206, 120)" }} /> Followed
                    </button>
                </div>
                <div className="followersSubDiv">
                    <img className="followersSubDivImage" src={profile} />
                    <div>
                        <p>Jayvion Simon</p>
                        <p><ImLocation2 /> Kenya</p>
                    </div>
                    <button className="followSubDivBtn">Follow</button>
                </div>
            </div>
        </div>
    )
}

export default FollowerView;