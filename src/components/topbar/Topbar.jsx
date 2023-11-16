import "./topbar.css"
import { Search, Person, Chat, Notifications} from "@mui/icons-material"
export default function Topbar(){
    return (
        <div className="topbarContainer">
             <div className="topbarLeft">
                <div className="logo">BeSocial</div>
             </div>
             <div className="topbarCenter">
                <div className="searchbar">
                    <Search className="searchIcon"/>
                    <input placeholder="Search your friends..." className="searchInput"></input>
                </div>
             </div>
             <div className="topbarRight">
                <div className="topbarLinks">
                    <div className="topbarLink">Homepage</div>
                    <div className="topbarLink">Timeline</div>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconsItem">
                        <Person />
                        <span className="topbarIconsBadge">1</span>
                    </div>
                    <div className="topbarIconsItem">
                        <Chat />
                        <span className="topbarIconsBadge">2</span>
                    </div>
                    <div className="topbarIconsItem">
                        <Notifications/>
                        <span className="topbarIconsBadge">5</span>
                    </div>
                </div>
                <img src="/assets/person/1.jpeg" alt="profile" className="topbarImg" />

             </div>
        </div>
    )
}