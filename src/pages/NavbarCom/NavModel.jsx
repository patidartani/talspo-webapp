import  {useState, useEffect} from 'react'
import { navModelDynamic } from '../../apiService';


const NavModel = () => {
          // ---------------------------nav model dynamic------------------------------------------------

 const [isOpen, setIsOpen] = useState(false);

 const handleToggle = () => {
   setIsOpen(prevState => !prevState); 
 };

const [navbarData, setNavbarData] = useState({});
const [error, setError] = useState(null);

useEffect(() => {
  const fetchNavbarData = async () => {
    try {
      const data = await navModelDynamic();
      setNavbarData(data.records);
    } catch (error) {
      console.error('Error fetching navbar data:', error);
      setError(error.message);
    }
  };

  fetchNavbarData();
}, []);
// ---------------------------nav model dynamic- end-----------------------------------------------
  return (
          <>
          <h6 onClick={handleToggle} style={{ cursor: "pointer" }}>Model Service</h6>
          {isOpen && (
            <div className="model-text">
              {navbarData.length > 0 ? (
                navbarData.map((item, index) => (
                  <div key={index}>
                    <img src={item.image} alt='' style={{ width: '70%' }} />
                    <small>
                      <div dangerouslySetInnerHTML={{ __html: item?.title }} />
                    </small>
                  </div>
                ))
              ) : (
                <div>No data available</div>
              )}
            </div>
          )}
          </>
  )
}

export default NavModel