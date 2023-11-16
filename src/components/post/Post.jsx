import "./post.css"
import {MoreVert} from "@mui/icons-material"
import {Users} from "../../data"
import { useState } from "react";
export default function Post({post}) {
  
  const [likes,setLikes] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);
  function handelClick() {
    setLikes(isLiked ? likes-1 : likes+1)
    setIsLiked(!isLiked);
  }
  

  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src={Users.filter((u)=> u.id === post.userId)[0].profilePicture} alt="" className="postProfileImg" />
                    <span className="postUsername">{Users.filter((u)=> u.id === post.userId)[0].username}</span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText"> {post.desc} </span>
                <img src={post.photo} className="postImg" alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img onClick={handelClick} src="/assets/like.png" alt="" className="likeIcon" />
                    <img onClick={handelClick} src="/assets/heart.png" alt="" className="likeIcon" />
                    <span className="postLikeCounter">{likes} People liked it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText"> {post.comment} comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}
