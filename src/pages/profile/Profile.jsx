import Topbar from "../../components/topbar/Topbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"
import "./profile.css"

export default function Profile() {
  return (
      <>
         <Topbar />
           <div className="profile">
                <Sidebar />
                <div className="profileRight">
                   <div className="profileRightTop">
                      <div className="profileCover">
                        <img className="profileCoverImg" alt="" src="/assets/post/6.jpeg"/>
                        <img className="profileUserImg" alt="" src="/assets/person/2.jpeg"/>
                      </div>

                      <div className="profileInfo">
                        <h4 className="profileInfoName">Abhishek Choudhary</h4>
                        <span className="profileInfoDesc">IIT ROORKEE '23</span>
                      </div>
                     
                    </div>
                   <div className="profileRightBottom">
                        <Feed />
                        <Rightbar profile/>
                   </div>
                </div>
           </div>
      </>
  )
}
