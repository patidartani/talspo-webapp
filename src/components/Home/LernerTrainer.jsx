import React from 'react'
import "./LernerTrainer.css"
import LearnerImg from "../../assets/images/learner.mp4"

const LernerTrainer = () => {
  return (
<div className='LernerTrainer-main'>
<div className="trainer">
{/* ---------------------------------- */}
              <h5>What do you want to be?  </h5>
               <div className="parts">
                    <span> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHuGC9gP0ThxVjz7q9aU93O6A79mFSEdPcL9kGYCszCQBb8Q5cB_d0aP8&s" alt="" />  <a href="">Learner</a></span>
                    <span> <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUQExIVFhUVFxUZFRgSFRgYFRIVGBUWFhUVFxgYKCghGBolGxUVITEhJSkrLi4uFyAzODMtNygtLisBCgoKDg0OGRAQGislHyMtLS8rLS0tLS0rLS0vLi4tKy0tLi0tLS0tLS03LS0tLS0vLS0tLzUtLS01LS0tLS8rLf/AABEIAL4BCQMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAAAwECBAUGBwj/xAA/EAABAwEEBAwDCAEEAwAAAAABAAIDEQQSITEFQVFhBhMUFSIyU3GBkZKhBxbRIzNCUnKxweGCQ2Jj0pOz8f/EABoBAQEBAQEBAQAAAAAAAAAAAAABAgMFBAb/xAArEQEAAgICAQMCBAcAAAAAAAAAAQIDEQQSITFBUROxBWFxoRQiMlKB0eH/2gAMAwEAAhEDEQA/APcUREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBFQlQvtGxNCdRumA1+SxXPJzKotdU2yDaNys5QdyiRXUCXjzuTlB3KJE1AnFo3K5toCgjpXFVZSuKmoGW1wOSqsdtwGtf3UnHN2qaVIita8HIq5QEREBERAREQEREBERAREQEREBERAREQEUcstO9QGcq6FJSa4qxXPeTmrVuEEREQRRWm0MjY6R7msYwFznOIDWtGJJJyC834dfEuDkjho+0h0znhhIa5ro2kOLntEgF7qgXhUC93KxGyZ09NRfPHBD4kWqyyOM0kloic13QkfeIfQlha91S0XqA6qE4VVs3xT0mZeNEzQ0GvFNjZxZH5TUFxByreqtdJY+pD6JRaTR3C6xTyCCO1ROlP4A8VJpUtacnEY5E5LdrDYiIgAqpt4a9kbq1feodXRFTXwVFr7b9/Z++b/1qTCt+ixYZaYHL9llBZmNKIiKAiIgIiICIiAiIgIiICIiAo5ZKBXuNMVhvdU1ViBBapi1pdmd6tEc21nmrdIdQ94UjYcPuofV/S7xrqxPqt4qbazzTiptrPNX8T/xQ+r+k4n/AIofV/Sb/T9v9iJr3h4Y+6a16qyVhvbSVnRY3A9Q1rgc1znxP4Sz2CyNmgYC58jWFzxebEC1xvEbSWgCuGKlo9NES4P4vcNXvfNotjAI2OjvvqbzyGh5bTK7VzPFi8wiiLjdaCSdQCydLaSktMz7RKQZJDVxAABNA0UAywAW30c+OCFr3npPxwzI1AbqU81zzZZxVjrG5n0h14vHjkZJ7W61iNzP5Ne3QcxFaNG4ux9liWqxPj67SN+YPiFtJuEJr0GCmPWNa7Mslbz7eaWyRh1c6Ggp3GuK40ycre7VjXx7/d9eXD+HTE1pkmJ+ZjcfZBwYsDp7XZ4GPuOfKyj60uXTeLgdoDSRtNAvqsr5DlaKkDEVwrrGqq7z4Mi0O0iy45/FMZIZhU3LpYWsBGVb5YR+kr67RuNvLrOp09/REXN1WveAC4mgAJJOQAxJK0ds0tHx0LqSUZxt6sUmH2QdlSuRB8VsbX03iH8Io+X9IPQZ/k4V7mEa1zk9kZLLDaHOfVpL6A4EPeX3XCleoWtPdRfNyuXi41IvlnUb06Y8dsk6q6uzWhrxVtcDQggtIOdCDiMCD3ELLgkpgf8A4tBYX3BHJWo+5lO9jiyOTxIp3Pacgtyvo9YYZ6KKCSuGxSrCiIiAiIgIiICIiAiIgIioUEFpfqUCue05kKl050W4RHJGHChyWPze3afZZaLcWmPRNQxOb27T7KyTR4p0Sa76LORX6lvlOsMLR8A6xzBI7lwXxm4VSWaNljja2toY4ve9ocAwEC61rqipOs5UwxxHpS8S+Nen4ZZuRcQ7jLPQ8dfApxjGudHcp0mkFuNRiNeu77W3KW8Vec6MswklZGTQONCfAn+FM7R075OLDJHXSWtvA3WgZY5AUAWHBKWOD25tII7wvSdA6RE8IfShBIIrWhH9EHxXz8nLfFPaI3H2l34mKmaJpM6n1/WP+MGx8FIWsLX1eSQa5EUGQpqzWntXA6QO+ze1zcMXYOG0kZGi7dUK8+vKy1ne3q34WG0RGvR5ppXQ74AC8tqXEANxwAGKwY5nN6rnN19FxGO3DWs/T2lDPJWlGtqGita1OZ78FrF6+Lv0jv6vBzdO8/T9H0h8K7ZPLo2J9oLnOq8Mc/rPiDqMcScTrAOsAHFdavNvgjpa0T2aZkznPZE9jYnvJJxaS6OpxIbRpxyv02L0lZn1brPhqJ7A0zSNc6QCdtWlskjRea0Mc2jSB1brgNfS2LX2bQhe1rgX49b7WTovGDxnqcCF0U9na8Ue0OANQCK0OIr7nzUA0VB2TPSF8nL4ePk1it9+PidO2PLOOdw07NHNMNwOkrO9wb9rJS5S7fpWn3bL2OtwC6RY9nsMUZqyNrTSlWgDDDDuwHkshfTWIrERDnM7VY6hqs0FYKybM7CmxS0EJkRFlRERAREQEREBERAVkklFeop4yckgRSTVFKIZsKUVOIcnEOW/CI0V7oyM1YqCIiIBfM/xC0622W18zYeLu1jPSqZOLcWte4U6LqYUxyGxfTC+Y/iDxPONq4gEM411a5cb/q3f9t+97rdPVjJ6OeW34PaZNneagmN1LwGYpk4b1qEK1ekXjrLGO9qWi1fV61FM1wDgcCKrQ8LdL8XHxTOtICK6mtyPicluLLZ23GVbjdbXvoFyXDwHjY8MLmGyt41/jzXjcakWyxEvf5mS1cEzDmFUFUU1ku8Yy+C5t9l4AkFzbwvAEZEioqvbfnX0b8KrcbRo2J/FMjLS+MiJoYxxY6l8NFAK66a6rruJOxYmjLHHZ4mQQtDI2CjWtyAz8SSSSTiSSsnjDtK4T6vpgawmu5WqocVRFEREQV8DqFWIEVnoqAqq5qIiICIiAiIgIiICjfMBgpFiSxmuSsCXlA2FOUDYVBcOw+StIWtQiaWaoooURXQIiIgvFfiT8N5+PktlkYZWSuL5I2/eRvOLy1v42k1OGIJyXtSgttpEcb5DkxpPfTIeJoFe3Xyde3h802LQHRBlD2uNatPRLaEjEEVBwOC6PQuhYGASBlXVzea3e7Z+6n0zIXSl7sS7E7ySSVTRk1DdORy714l+VktedzOp9n6in4fhrgrMVjtGvPu2qgtlkZK25I0OGw6t4Oo7wp1DaprrSfLvWN68sde/8vy4jSmgWi8YicCaBxrXx1L0jg18IWRTx2ia0iaNpa9jGx3Q5wo5t5xJq0HUAK08FxtoyXs3Am38ZZwwnpR0b/icWH9x/ivu4fKveetpfH+KcDFi1fHGvl0CIi+94wiIgIAiAoLpIyM1eyA61Y+QnNXicqeVZQRWxuqKq5YUREQEREBERAREQFa+QDNXLEtHWViBLygb1FK+pUahtE13AYk5D+VqITbzSwx2q1WyV75ZGcVIQQHFtzpG6xoG4e29di9s2YmdXyHlksyay3enQVd1iBmdVTrwVnEvcOiPPBMl+lJtqZ17R5n/AARXc6ZujZXujDnijsfEbVlKyFpDQCakAV34K9KzuImY0T4Fy3Du23Y2QjN5vO/S3LzNPSunkfQE7Fx2ndESWiYy32gUAaDWoaP7qfFcs8Wmmqw78aaRkibT4h53pM9PwCxV2Np4EyucXcbHq1O2dyi+RJu2j8nfReTPFzb/AKX6fH+IcaKRE3j92gi0iQKEV31ose0WgvOPgNQXT/Ik3bR+TvonyJN20fk76J/DZ/7fsV5nCrO4tH7uNtBwXe8CNIcXLHU9GVrWnvIF0+eHitfLwAmP+tF5O+i2dk4Jysa1vGsq0Zi9qyXXFgzUmJ6vk5nL4+Wuot93o6LHsUpcwXusAA6mRdTEjcsheu/OCIpbPSuKCJFnVCVCz2NMFFnVCBOxpZCMApERZUREQEREBERAREQFjWkY1WSobW0lpoaHUdm9WBg2ia6N5yCts8NOk7Fx9lynAvQ9qhmlNokvVGFXl991a8YK5YV812S2yo4VwKNaBgFVEBFVgVCise3PAZjrIA3nOnkCtesTTltra4IBk2893eWODfavqWWpS3bf5NWp1iPzjYiItsCLMbox5FcBuJxWI5pBIOYzTaqIiIhYrdScQH8bLzf1NJqPEY/4rcLg+EdpMc8Mrc2CvfR2I8cl3bHAgEZEVHcclxpfdrV+HbJj61rb5VREXRxERXw0riirFdHmKLJut3K5rRqCz2NLkRFlRERAREQEREBERAQosTSOkY4G35HBo1bXHYBrKDDtrLrg/YaHuWt0rwlihN0faO1hpwb3nbuWi0vwtkkeOLFyMEYHrPAOTjqG4eZWv0/AA8St6sovDv1/wfErtEfLO29+dG9i71j6K5nDFpyhdkT1xgACSctgK4xQW6MuY4A0OYNaUINRjqyWorG0mfDsG/EuxAYyMBvBp6RNK68G7irrJ8QbPKS2ICQgE0a+jqAVJo4DUF5aNKz9q897q+5V9ntM0zwwyOc2oLmueQ0gGtKZHyXT+HmPMyx9es+Iidu9stq463CahF4nAmtKRkZ+C6pcTwajuzRje84ZYhxwGzFdsuEUrTevd2tktfXb2jQiIqyz26VdSlATt/pYL3kkk5lURIiIURERHLcLm1ez9J/crPs/DaJrGsudVrRXjG40FP4WFws67P0n9ysHRvB2WbGOEXfzOAa3zOfhVSuOkTNveWrZL2rFfaG++fYvyD/yNRvDyImgZUnICRtSsqxcAogPtn1dTKMAAeJBr7KjuATagsmIbvYCfMEfsrujGpR/Ojexd6x9FsNFcJYpjcP2btQccHdx27lRnAaDCskp24tFfbBQ2/gKw4xSFu54vDzFCPdTdV8uhWVZ20C5Kxi22WjZYzNENcZvOaN2sjcR4rqNH2+OZt6N1aZjJzDsc04g96zZYZSIiwoiIgIiICIiAqEqq8t+IHCWZtpksoIEbLmAqC68xrjeOvrZZKxGx1GneGDI6sgpI/W78Df+x7sN64a2Wt8ri+Rxc46zq3AahuWj51OxvunOp2N911iIhltmyhuJjL+40odtML3mFkO0zWIQmF5oatN0dHdSu869a0POp2N9051OxvurtG3dM11KRllMy49Y7m1N3zVj2gihFQcwcitXzqdjfdOdTsb7psZLtFQn8HkSr4bBGw1awAjI5081h86nY33TnU7G+613n5Z6x8N9o20iOVshBIFa0zxBH8rofmOL8r/IfVcBzqdjfdOdTsb7rLTv/mOL8r/IfVPmOL8r/IfVcBzqdjfdOdTsb7p4Hf8AzHF+V/kPqnzHF+V/kPquA51OxvunOp2N908Dv/mOL8r/ACH1T5ji2P8AIfVcBzqdjfdOdTsb7p4HYWnTo45srI2uDRSkzQ7XWo2Heum0bw1hfhK0xnb1meYxHkvKedTsb7pzqdjfdSYiVeyaS4UWeJtb4kJGDYyHeZyHiuXPDaa/eEbAz8mNfXt8KblwfOp2N9051OxvupFYg3L13RnC+CSgeeLd/v6vg4YedFtYNLQPBLZoyG9bpDADWd29eG86nY33VOdDsap1g29X0rw0iZVsI4x23Jg8c3eHmuStHCC0PkE3GUcMroAAGymsd9Vy3Op2N9051OxvutREQbl6roLhgySjJ6Rv/N+B3/U9+G9dSCvAedTsaut+H3CSZ1pZZS4GNwdgaktutLhdOrLLJYtWPZYl6kiIsKIiICIiAon2dhNSxpO0tBKlRBDySPs2ekJySPs2ekKZEEPJI+zZ6QnJI+zZ6QpkQQ8kj7NnpCckj7NnpCmRBDySPs2ekJySPs2ekKZEEPJI+zZ6QnJI+zZ6QpkQQ8kj7NnpCckj7NnpCmRBDySPs2ekJySPs2ekKZEEPJI+zZ6QnJI+zZ6QpkQQ8kj7NnpCckj7NnpCmRBDySPs2ekJySPs2ekKZEEPJI+zZ6QnJI+zZ6QpkQQ8kj7NnpCckj7NnpCmRBDySPs2ekKrLOwGoY0HaGgFSogIiICIiD//2Q==" alt="" /> <a href="">Trainer</a></span>
               </div>
               <div className="part-btm">
                    <div className="part-left">
                          <span>Talspo Provides You An Opportunity To Be A Learner. Now Start Learning New Skill in Real Time With Just A Click! </span>
                          <span>Click The Button Below To Start Learning.</span>
                          <small>I Want To Learn ____________(Drop Down With Placeholder)Skill From Talspo. <br />
                          (Flipping One With Search Box Implimentation)
                          </small>
                          <div className="btuns-part">
                              <div className="learn-p">
                                         <button>BE A LEARNER</button>
                              </div>
                               <div className="know-p">
                               <button>KNOW MORE</button>
                               </div>
                          </div> 
                    </div> 
                    <div className="part-right">
                    <video src={LearnerImg} autoPlay loop muted></video>
                    </div>
               </div>

</div>
</div>
  )
}

export default LernerTrainer