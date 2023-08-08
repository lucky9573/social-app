import './post.css';
import {MoreVert} from "@mui/icons-material"
export default function Post({ post ,users}) {
    console.log(post);
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src="/assets/person/person-1.png" alt="" className="postProfileImg" />
                        <span className="postUsername">Safak Kocaoglu</span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="topRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{ post?.desc}</span>
                    <img src={post.photo} alt="" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="/assets/like.png" alt="" className="likeIcon" />
                        <img src="/assets/love.png" alt="" className="loveIcon" />
                        <span className="postLikeCount">{ post.like} people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{ post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    );
}