import Share from '../share/share';
import Post from '../post/Post';
import './feed.css';
import { Posts, Users } from '../../dummyData';
export default function Feed() {
    return (
        <>
            <div className="feed">
                <div className="feedWrapper">
                    <Share />
               { Posts.map((p,u) => (
                    <Post key={p.id} post={p} users={u} />
               ))
                }                    
                    
                </div>
            </div>
        </>
    );
}