import { useEffect, useState } from 'react';
import "./HomeBlog.css";
import { useNavigate } from 'react-router-dom'; 
import { featuredBlogPosts } from '../../apiService'; 

const HomeBlog = () => {
   const navigate = useNavigate();
   const [blogs, setBlogs] = useState([]);

   useEffect(() => {
      const fetchBlogs = async () => {
         try {
            const posts = await featuredBlogPosts();
            setBlogs(posts || []);
         } catch (error) {
            console.error("Failed to fetch blog posts:", error);
            setBlogs([]);
         }
      };

      fetchBlogs();
   }, []);

   const handleReadMore = (id) => {
      navigate(`/blog-detail/${id}`);
   };

   return (
      <div className='HomeBlog-main'>
         <div className="blg-top">
            <h4>Our Latest Blogs</h4>
         </div>
         <div className="home-blog">
            <div className="home-blog-right">
               {blogs && blogs.length > 0 ? (
                  blogs.slice(0, 4).map((blog, index) => (
                     <div className="h-blg-right" key={index}>
                        <img src={blog.image || 'default-image-url.jpg'} alt={blog.title} />
                        <h5>{blog.title || "Untitled Blog"}</h5>
                        <h6>{blog.category || "Uncategorized"}</h6>
                        <span dangerouslySetInnerHTML={{ __html: blog.description || "No description available" }} />

                        <div className="view-blog-btn">
                           <button onClick={() => handleReadMore(blog.id)}>Read More <i className="ri-arrow-right-line"></i></button>
                        </div>
                     </div>
                  ))
               ) : (
                  <p style={{ color: "red", textAlign: "center" }}>No Results Found</p>
               )}
            </div>
         </div>
      </div>
   );
};

export default HomeBlog;
