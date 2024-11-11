import "./Loading.css"
import talspoIcon from "../../assets/images/talspoIcon.png"

const Loading = () => {
  return (
    <div className='loading'>
       <div className="loading-logo">
       <img src={talspoIcon} alt="Loading..." className="loading-gif" />
       </div>
       <h5>Loading...</h5>
    </div>
  )
}

export default Loading