import './closefriend.css';

export default function CloseFriend({user}) {
    return (
        <div>
            <li className="sidebarFriend">
                <img src={user.profilePicture} alt="" className="sidebarFriendImg" />
                <span className="sidebarImageText">
                    {user.username}
                </span>
            </li>
        </div>
    );
}