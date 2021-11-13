import { ImLocation2 } from 'react-icons/im';
import { AiFillMail } from 'react-icons/ai';
import { FaRegAddressCard } from 'react-icons/fa';
import '../css/subComponents/profileView.css'
import { useEffect, useState } from 'react';
import { getUsers } from '../../Service/api';
import PayPalMethod from '../../Component/payPalPayment/payPalIntegration';
const ProfileView = ({ userID }) => {
    const [user, setUser] = useState();
    const [check, setCheck] = useState(false);
    useEffect(() => {
        loadUserDetails();
        console.log(user)
    }, [userID]);

    const loadUserDetails = async () => {
        const response = await getUsers(userID);
        setUser(response.data);
    };

    return (
        <div>
            {/* <div className="profileViewDiv">
                <p style={{ borderRight: "1px solid", padding: "0 3rem", textAlign: "center" }}>
                    <span style={{ fontWeight: "bold", fontSize: "2rem" }}>38,663</span>
                    <br />Follower
                </p>
                <p style={{ padding: "0 3rem", textAlign: "center" }}>
                    <span style={{ fontWeight: "bold", fontSize: "2rem" }}>18,663</span>
                    <br />Following
                </p>
            </div> */}
            <div className="profileViewDiv">
                {
                    check ?
                        <PayPalMethod pricevalue="150" /> : <button
                            style={{
                                padding: "1rem", border: "none", background: "#05ce78"
                            }}
                            onClick={() => setCheck(true)}
                        >Checkout to paypal</button>
                }
            </div>
            <div className="profileViewAbout">
                <h2 style={{ marginBottom: "2rem" }}>About</h2>
                <p>Tart I love sugar plum I love oat cake. Sweet roll caramels I love jujubes. Topping cake wafer..</p>
                <div style={{ padding: ".8rem 0" }}>
                    <ImLocation2 style={{ width: "1.3rem" }} /> Live at  Madagascar
                </div>
                <div style={{ padding: ".8rem 0" }}>
                    <AiFillMail style={{ width: "1.3rem" }} /> ashlynn_ohara62@gmail.com
                </div>
                <div style={{ padding: ".8rem 0" }}>
                    <FaRegAddressCard style={{ width: "1.3rem" }} /> Manager at  Gleichner, Mueller and Tromp
                </div>
                <div style={{ padding: ".8rem 0" }}>
                    <FaRegAddressCard style={{ width: "1.3rem" }} /> Studied at  Nikolaus - Leuschke
                </div>
            </div>
        </div>
    )
}

export default ProfileView;