import React, { useEffect, useState } from 'react';
import "./HomeBlog.css";
import { useNavigate } from 'react-router-dom';  // Import useNavigate for programmatic navigation
import { featuredBlogPosts } from '../../apiService'; // Import the API function

const HomeBlog = () => {
   const navigate = useNavigate(); // Initialize the navigate function
   const [blogs, setBlogs] = useState([]); // State to store blog posts

   useEffect(() => {
      const fetchBlogs = async () => {
         const posts = await featuredBlogPosts(); // Fetch the blog posts
         // console.log("Fetched blog posts:", posts);
         setBlogs(posts);
      };

      fetchBlogs(); 
   }, []);

   // Function to navigate to the blog detail page
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
               {blogs.length > 0 ? (
                  blogs.slice(0, 4).map((blog, index) => ( 
                     <div className="h-blg-right" key={index}>
                        <img src={blog.image || 'default-image-url.jpg'} alt={blog.title} />
                        <h5>{blog.title}</h5>
                        <h6>{blog.category} </h6>
                        <span>
  {blog.description
    ? blog.description
        .replace(/<\/?[^>]+(>|$)/g, "") 
        .slice(0, 100) 
        .concat(blog.description.replace(/<\/?[^>]+(>|$)/g, "").length > 100 ? "..." : "")
    : ""}
</span>
                        <div className="view-blog-btn">
                           <button onClick={() => handleReadMore(blog.id)}>Read More</button> 
                        </div>
                     </div>
                  ))
               ) : (
                  <p>Loading latest blogs...</p> 
               )}
            </div>
         </div>
      </div>
   );
};

export default HomeBlog;
