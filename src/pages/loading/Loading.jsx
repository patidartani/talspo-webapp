import "./Loading.css"
import talspoIcon from "/assets/images/logo-icon.png"

const Loading = () => {
  return (
    <div className='loading'>
       <div className="loading-logo">
       <img src={talspoIcon} alt="Loading..." className="loading-gif" />
       </div>
       <h5>Loading...</h5>
       <p>talspo data loading please wait....</p>
    </div>
  )
}

export default Loading