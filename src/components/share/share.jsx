import "./share.css";
import {PermMedia,Label,Room,EmojiEmotions} from '@mui/icons-material';
export default function Share() {
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src="/assets/person/person-1.png" alt="" className="shareProfileImg" />
                    <input type="text"
                        className="ShareInput"
                        placeholder="What's in your mind Safak?" />
                </div>
                <hr className="shareHr"></hr>
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia htmlColor="tomato" className="shareIcon"/>
                            <span className="shareOptionText">Photos or Videos</span>
                        </div>
                        <div className="shareOption">
                            <Label htmlColor="green"  className="shareIcon" />
                            <span className="shareOptionText">Tag</span>
                        </div>
                        <div className="shareOption">
                            <Room htmlColor="blue"  className="shareIcon" />
                            <span className="shareOptionText">Location</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions htmlColor="goldenrod"  className="shareIcon" />
                            <span className="shareOptionText">Feelings</span>
                        </div>
                    </div>
                    <button className="shareButton">share</button>
                </div>
            </div>
        </div>
    )
}