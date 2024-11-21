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
         console.log("Fetched blog posts:", posts);
         setBlogs(posts); // Store the posts in state
      };

      fetchBlogs(); // Call the fetch function
   }, []);

   // Function to navigate to the blog detail page
   const handleReadMore = (id) => {
      navigate(`/blog-detail/${id}`); // Navigate to the blog detail page with the specific blog ID
   };

   return (
      <div className='HomeBlog-main'>
         <div className="blg-top">
            <h4>Our Latest Blogs</h4>
         </div>
         <div className="home-blog">
            <div className="home-blog-right">
               {blogs.length > 0 ? (
                  blogs.slice(0, 4).map((blog, index) => ( // Show up to 4 blogs
                     <div className="h-blg-right" key={index}>
                        <img src={blog.image || 'default-image-url.jpg'} alt={blog.title} />
                        <h5>{blog.title}</h5>
                        <h6>{blog.category} </h6>
                        <span>{blog.description.length > 100 ? `${blog.description.slice(0, 100)}...` : blog.description}</span> {/* Truncate description */}
                        <div className="view-blog-btn">
                           <button onClick={() => handleReadMore(blog.id)}>Read More</button> {/* Navigate on button click */}
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
