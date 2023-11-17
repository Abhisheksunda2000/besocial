import "./rightbar.css"
import Online from "../online/Online"
import { Users } from "../../data";


export default function Rightbar({profile}) {

  const HomeRightBar = () => {
    return(
        <>
          <div className="birthdayContainer">
            <img src="assets/gift.png" alt="" className="birthdayImg"/>
            <span className="birthdayText">
              <b>Anurag </b> and <b>3 other friends</b> have a birthday today
            </span>
        </div>
        <img className="rightbarAd" src="/assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
           {Users.map((u)=> <Online key={u.id} user={u}/>)}
        </ul>
        </>
    );
  };

  const ProfileRightBar = () => {
    return (
        <>
          <h4 className="rightbarTitle">User Information</h4>
          <div className="rightbarInfo">
            <div className="rightbarInfoItem">
              <span className="rightbarInfoKey">City:</span> 
              <span className="rightbarInfoValue">Bikaner</span> 
            </div>
            <div className="rightbarInfoItem">
              <span className="rightbarInfoKey">From:</span> 
              <span className="rightbarInfoValue">India</span> 
            </div>
            <div className="rightbarInfoItem">
              <span className="rightbarInfoKey">Relationship:</span> 
              <span className="rightbarInfoValue">Single</span> 
            </div>
          </div>
          <h4 className="rightbarTitle">User Friends</h4>
          <div className="rightbarFollowings">
            <div className="rightbarFollowing">
              <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">Mrigang</span>
            </div>
            <div className="rightbarFollowing">
              <img src="assets/person/2.jpeg" alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">Harsh</span>
            </div>
            <div className="rightbarFollowing">
              <img src="assets/person/3.jpeg" alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">Anurag</span>
            </div>
            <div className="rightbarFollowing">
              <img src="assets/person/4.jpeg" alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">Bhaumik</span>
            </div>
            <div className="rightbarFollowing">
              <img src="assets/person/5.jpeg" alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">Abhishek</span>
            </div>
            <div className="rightbarFollowing">
              <img src="assets/person/6.jpeg" alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">Mohit</span>
            </div>
          </div>
          <img className="rightbarAd" src="/assets/ad.png" alt="" />
        </>
        
    );
  };
  
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
         {profile ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  );
}
