import './rightbar.css';
import Online from '../online/Online';
import { Users } from "../../dummyData";
export default function Rightbar() {
    return (
        <>
            <div className="rightBar">
                <div className="rightBarWrapper">
                    <div className="birthDayContainer">
                        <img src="/assets/post/post-2.png" alt="" className="birthDayImg" />
                        <span className="birthDayText">
                            <b> Pola Foster</b> and <b>3 other friends </b>have a birthday today.
                        </span>
                    </div>
                    <img src="assets/post/post-2.png" alt="" className="rightbarAd" />
                    <h4 className="rightBarTitle">Online Friends</h4>
                    
                    <ul className="rightBarFriendList">
                        {Users.map(u => (
                            <Online key={u.id} user={u} />

                        ))}

                    </ul>
                </div>

            </div>
        </>
    );
}