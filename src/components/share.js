import "./share.css"
import {AddAPhotoIcon} from '@mui/icons-material/AddAPhoto'
export default function Share() {
    return (
        <div className="share">
            <div className="sharewrap">
                <div className= "shareTop"></div>
                <img classname="sharedPlaceimg" src="social-feed\public\socialfeed pictures\socialfeed pictures\Amman-Jordan.jpg" alt=""/>
                <input
                    placeholder="What you thinking about"
                    className="sharedInput"
        />
        </div>
        <hr classname="shareHr"/>
        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                    <AddAPhotoIcon classname="shareIcon"></AddAPhotoIcon>
                    <span className="shareOptionText">Photo</span>
                </div>
            </div>
        </div>
      </div>
    
  )  

}