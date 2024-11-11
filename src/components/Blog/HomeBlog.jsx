import React, { useEffect, useState } from 'react';
import "./HomeBlog.css";
import { useNavigate } from 'react-router-dom';
import { featuredBlogPosts } from '../../apiService'; // Import the API function

const HomeBlog = () => {
   const navigate = useNavigate();
   const [blogs, setBlogs] = useState([]); // State to store blog posts

   useEffect(() => {
      const fetchBlogs = async () => {
         const posts = await featuredBlogPosts(); // Fetch the blog posts
         setBlogs(posts); // Store the posts in state
      };

      fetchBlogs(); // Call the fetch function
   }, []);

   const Blogview = () => {
      navigate('/blog');
   };

   return (
      <div className='HomeBlog-main'>
         <div className="blg-top">
            <h4>Our Latest Blogs</h4>
         </div>
         <div className="home-blog">
            <div className="home-blog-right">
               {blogs.length > 0 ? (
                  blogs.slice(0, 4).map((blog, index) => ( // Show only the first 4 blogs
                     <div className="h-blg-right" key={index}>
                        <img src={blog.image || 'default-image-url.jpg'} alt={blog.title} />
                        <h5>{blog.title}</h5>
                        <h6>{new Date(blog.created_at).getFullYear()}</h6>
                        <span>{blog.description}</span>
                        <div className="view-blog-btn">
                           <button onClick={Blogview}>Read More</button>
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
