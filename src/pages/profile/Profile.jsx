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
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img src="assets/post/cover-img.png" alt="" className="profileCoverImg" />
                            <img src="assets/person/person-1.png" alt="" className="profileImg" />
                        </div>
                        <div className="profileInfo">
                            <div className="profileInfoUser"><b>Sadiday</b></div>
                            <div className="profileInfoDesc">Hello friends</div>

                        </div>
                        
                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <Rightbar />
                    </div>
                    
                </div>
                

            </div>
        </>
    );
}