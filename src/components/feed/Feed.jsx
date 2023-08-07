import Share from '../share/share';
import Post from '../post/Post';
import './feed.css';

export default function Feed() {
    return (
        <>
            <div className="feed">
                <div className="feedWrapper">
                    <Share />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    
                </div>
            </div>
        </>
    );
}