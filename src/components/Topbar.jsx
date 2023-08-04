
import "./topbar.css"
import { Search,Person, Chat,Notifications} from "@mui/icons-material";
export default function Topbar() {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">Social</span>
            </div>
            <div className="topbarCenter">
                <Search />
                <input
                    placeHolder="Search for the friend, post, or video"
                    className="searchInput"
                />
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">HomePage</span>
                    <span className="topbarLink">TimeLine</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person />
                        <span className="topbarIconBadge"> 1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat />
                        <span className="topbarIconBadge"> 1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications />
                        <span className="topbarIconBadge"> 1</span>
                    </div>
                </div>                
                
                <img src="../assets/person/person-1.png" alt="" className="topbarImg" />
            </div>
        </div>
    );
}
