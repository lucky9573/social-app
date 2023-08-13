import './profile.css'
import Topbar from '../../components/toolbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Rightbar from '../../components/rightbar/Rightbar';
import Feed from '../../components/feed/Feed';

export default function Profile() {
    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">Profile Photo</div>
                    <div className="profileRightBottom">
                        <Feed />
                        <Rightbar />
                    </div>
                    
                </div>
                

            </div>
        </>
    );
}