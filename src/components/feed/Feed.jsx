import "./feed.css";
import Share from "../share/Share";
import Post from "../post/Post";
import { Posts} from "../../data"

export default function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
          <Share />
          {Posts.map((postItem) => {
             return (<Post key={postItem.id} post={postItem}/>);
          })}
          
          
      </div>
    </div>
  )
}
