import './post.css';
import {MoreVert} from "@mui/icons-material"
export default function Post({ post }) {
    console.log(post);
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src="/assets/person/person-1.png" alt="" className="postProfileImg" />
                        <span className="postUsername">Safak Kocaoglu</span>
                        <span className="postDate">5 min ago</span>
                    </div>
                    <div className="topRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">Hey Here is my first post</span>
                    <img src="/assets/post/post-1.png" alt="" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="/assets/like.png" alt="" className="likeIcon" />
                        <img src="/assets/love.png" alt="" className="loveIcon" />
                        <span className="postLikeCount">32 people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">9 comments</span>
                    </div>
                </div>
            </div>
        </div>
    );
}