import { useState } from "react";

const BottomButtons = () => {
    const [comming, setComming] = useState(false);
    return (
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly", padding: "2rem 0", background: "gray" }}>
            <div class="col-sm bottomLinks">
                {/* <a href="www.PayAllAthletes.com" onClick={() => setComming(true)}>{comming ? "Coming Soon" : "Pay All Athletes"} </a> */}
                <a style={{ color: "white", cursor: "pointer", textDecoration: "none", fontSize: "14px" }} onClick={() => setComming(true)}>{comming ? "Coming Soon" : "Pay All Athletes"} </a>
            </div>
            <div class="col-sm bottomLinks">
                <a style={{ color: "white", cursor: "pointer", textDecoration: "none", fontSize: "14px" }} href="www.VonElijah.com/AppDevelopment"> App Development</a>
            </div>
            <div class="col-sm bottomLinks">
                <a style={{ color: "white", cursor: "pointer", textDecoration: "none", fontSize: "14px" }} href="/affiliates"> Affiliates </a>
            </div>
            <div class="col-sm bottomLinks">
                <a style={{ color: "white", cursor: "pointer", textDecoration: "none", fontSize: "14px" }} href="www.ConnectingHelpingHandsFoundation.org">Upcoming Events </a>
            </div>
        </div>
    )
}

export default BottomButtons;