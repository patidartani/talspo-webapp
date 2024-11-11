import React from 'react'
import Navbar from "../../pages/Navbar/Navbar"
import "./BlogDetail.css"

const BlogDetail = () => {
  return (
  <>
  <Navbar />
     <div className='BlogDetail-main'>
        <div className="blog-detail">
                       <div className="details">
                          <h5>This is the topic of blog</h5>
                           <div className="year-d">
                              <small>2021</small> <span>Designing, Coding, Learning</span>
                           </div>
                           <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem itaque nihil fugiat nam voluptas voluptatum reiciendis aperiam deserunt at placeat, ut tempora illum quisquam dolor pariatur sunt, expedita odit amet cum ad delectus velit ullam architecto id? Aliquam fuga ad aspernatur odit alias eius vero aperiam qui incidunt, consequatur soluta.</p>
                            <img className='img-d' src="" alt="" />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dolore non maxime aut quae in sapiente! Aperiam consequuntur dolorem vel cum fugiat assumenda, porro facere modi culpa eius at possimus?</p>
                       </div>
        </div>
     </div>
  </>
  )
}

export default BlogDetail