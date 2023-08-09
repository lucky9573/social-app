import './online.css';

export default function Online({ users }) {
    console.log(users);
    return (
        <>
            <ul className="rightBarFriendList">
                <li className="rightBarFriend">
                    <div className="rightBarProfileImgContainer">
                        <img src="assets/person/person-3.png" alt="" className="rightBarProfileImg" />
                        <span className="rightBarOnline"></span>
                    </div>
                    <span className="rightBarUsername"></span>
                </li>

            </ul>
        </>
    );
}