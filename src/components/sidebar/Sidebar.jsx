import './sidebar.css';
import { RssFeed,Group,PlayCircleFilledOutlined,Bookmark,HelpOutline,WorkOutline } from '@mui/icons-material';
export default function Sidebar() {
    return (
        <>
            <div className="sidebar">
                <div className="sidebarWrapper">
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <RssFeed className="sidebarIcon" />
                            <span className="sidebarListItemText">Feed</span>
                        </li>
                        <li className="sidebarListItem">
                            <PlayCircleFilledOutlined className="sidebarIcon" />
                            <span className="sidebarListItemText">Groups</span>
                        </li>
                        <li className="sidebarListItem">
                            <Group className="sidebarIcon" />
                            <span className="sidebarListItemText">Groups</span>
                        </li>
                        <li className="sidebarListItem">
                            <Bookmark className="sidebarIcon" />
                            <span className="sidebarListItemText">Bookmarks</span>
                        </li>
                        <li className="sidebarListItem">
                            <HelpOutline className="sidebarIcon" />
                            <span className="sidebarListItemText">Questions</span>
                        </li>
                        <li className="sidebarListItem">
                            <WorkOutline className="sidebarIcon" />
                            <span className="sidebarListItemText">Jobs</span>
                        </li>
                    </ul>
                    <button className="sidebarButton">show more</button>
                    <hr className="sidebarHr" />
                    <ul className="sidebarFriendList">
                        <li className="sidebarFriend">
                            <img src="/assets/person/person-1.png" alt="" className="sidebarFriendImg" />
                            <span className="sidebarImageText">
                                Cicily
                            </span>
                        </li>
                        <li className="sidebarFriend">
                            <img src="/assets/person/person-1.png" alt="" className="sidebarFriendImg" />
                            <span className="sidebarImageText">
                                Cicily
                            </span>
                        </li>
                        <li className="sidebarFriend">
                            <img src="/assets/person/person-1.png" alt="" className="sidebarFriendImg" />
                            <span className="sidebarImageText">
                                Cicily
                            </span>
                        </li>
                        <li className="sidebarFriend">
                            <img src="/assets/person/person-1.png" alt="" className="sidebarFriendImg" />
                            <span className="sidebarImageText">
                                Cicily
                            </span>
                        </li>
                        <li className="sidebarFriend">
                            <img src="/assets/person/person-1.png" alt="" className="sidebarFriendImg" />
                            <span className="sidebarImageText">
                                Cicily
                            </span>
                        </li>
                        <li className="sidebarFriend">
                            <img src="/assets/person/person-1.png" alt="" className="sidebarFriendImg" />
                            <span className="sidebarImageText">
                                Cicily
                            </span>
                        </li>
                        <li className="sidebarFriend">
                            <img src="/assets/person/person-1.png" alt="" className="sidebarFriendImg" />
                            <span className="sidebarImageText">
                                Cicily
                            </span>
                        </li>
                        <li className="sidebarFriend">
                            <img src="/assets/person/person-1.png" alt="" className="sidebarFriendImg" />
                            <span className="sidebarImageText">
                                Cicily
                            </span>
                        </li>
                        <li className="sidebarFriend">
                            <img src="/assets/person/person-1.png" alt="" className="sidebarFriendImg" />
                            <span className="sidebarImageText">
                                Cicily
                            </span>
                        </li>
                        <li className="sidebarFriend">
                            <img src="/assets/person/person-1.png" alt="" className="sidebarFriendImg" />
                            <span className="sidebarImageText">
                                Cicily
                            </span>
                        </li>
                        <li className="sidebarFriend">
                            <img src="/assets/person/person-1.png" alt="" className="sidebarFriendImg" />
                            <span className="sidebarImageText">
                                Cicily
                            </span>
                        </li>
                        <li className="sidebarFriend">
                            <img src="/assets/person/person-1.png" alt="" className="sidebarFriendImg" />
                            <span className="sidebarImageText">
                                Cicily
                            </span>
                        </li>
                        <li className="sidebarFriend">
                            <img src="/assets/person/person-1.png" alt="" className="sidebarFriendImg" />
                            <span className="sidebarImageText">
                                Cicily
                            </span>
                        </li>

                        <li className="sidebarFriend">
                            <img src="/assets/person/person-1.png" alt="" className="sidebarFriendImg" />
                            <span className="sidebarImageText">
                                Cicily
                            </span>
                        </li>
                        <li className="sidebarFriend">
                            <img src="/assets/person/person-1.png" alt="" className="sidebarFriendImg" />
                            <span className="sidebarImageText">
                                Cicily
                            </span>
                        </li>
                        <li className="sidebarFriend">
                            <img src="/assets/person/person-1.png" alt="" className="sidebarFriendImg" />
                            <span className="sidebarImageText">
                                Cicily
                            </span>
                        </li>
                        <li className="sidebarFriend">
                            <img src="/assets/person/person-1.png" alt="" className="sidebarFriendImg" />
                            <span className="sidebarImageText">
                                Cicily
                            </span>
                        </li>
                        
                    </ul>
                  
                </div>
            </div>
        </>
    );
}