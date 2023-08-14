import './rightbar.css';
import Online from '../online/Online';
import { Users } from "../../dummyData";
export default function Rightbar({ profile }) {
    const HomePage = () => {
        return (
            <>
                <div className="birthDayContainer">
                    <img src="/assets/post/post-2.png" alt="" className="birthDayImg" />
                    <span className="birthDayText">
                        <b> Pola Foster</b> and <b>3 other friends </b>have a birthday today.
                    </span>
                </div>
                <img src="assets/ad.png" alt="" className="rightbarAd" />
                <h4 className="rightBarTitle">Online Friends</h4>

                <ul className="rightBarFriendList">
                    {Users.map(u => (
                        <Online key={u.id} user={u} />

                    ))}

                </ul>
            </>
        );
    }
    const ProfileRightBar = () => {
        return (
            <>
                <h4 className="rightBarTitle">User information</h4>
                <div className="rightBarInfo">
                    <div className="rightBarInfoItem">
                        <span className="rightBarInfoKey">City:</span>
                        <span className="rightBarInfoValue">New York</span>
                    </div>
                    <div className="rightBarInfoItem">
                        <span className="rightBarInfoKey">From:</span>
                        <span className="rightBarInfoValue">Nairobi</span>
                    </div>
                    <div className="rightBarInfoItem">
                        <span className="rightBarInfoKey">Relationship:</span>
                        <span className="rightBarInfoValue">Single</span>
                    </div>
                </div>
                    <h4 className="rightBarTitle">User friends</h4>
                    <div className="rightBarFollowings">
                        <div className="rightBarFollowing">
                            <img src="assets/person/person-1.png" alt="" className="rightBarFollowingImg" />
                            <span className="rightBarFollowingName">John Carter</span>
                        </div>
                        <div className="rightBarFollowing">
                            <img src="assets/person/person-2.png" alt="" className="rightBarFollowingImg" />
                            <span className="rightBarFollowingName">John Carter</span>
                        </div>
                        <div className="rightBarFollowing">
                            <img src="assets/person/person-3.png" alt="" className="rightBarFollowingImg" />
                            <span className="rightBarFollowingName">John Carter</span>
                        </div>
                        <div className="rightBarFollowing">
                            <img src="assets/person/person-4.png" alt="" className="rightBarFollowingImg" />
                            <span className="rightBarFollowingName">John Carter</span>
                        </div>
                        <div className="rightBarFollowing">
                            <img src="assets/person/person-5.png" alt="" className="rightBarFollowingImg" />
                            <span className="rightBarFollowingName">John Carter</span>
                        </div>
                        <div className="rightBarFollowing">
                            <img src="assets/person/person-6.png" alt="" className="rightBarFollowingImg" />
                            <span className="rightBarFollowingName">John Carter</span>
                        </div>
                  </div>

            </>
        );
    }
    return (
        <>
            <div className="rightBar">
                <div className="rightBarWrapper">
                    <ProfileRightBar/>
                </div>

            </div>
        </>
    );
}