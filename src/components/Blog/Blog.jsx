import { useEffect, useState } from 'react';
import "./Blog.css";
import Navbar from "../../pages/Navbar/Navbar";
import BlogImg from "../../assets/images/blogimg.png";
import BlogMan from "../../assets/images/BlogMan.png";
import Footer from '../../pages/Footer/Footer';
import { recentBlogPosts, featuredBlogPosts } from '../../apiService';

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
    const [featuredBlogs, setFeaturedBlogs] = useState([]);
  
  const [showAllPosts, setShowAllPosts] = useState(false);

  useEffect(() => {
    const loadRecentBlogs = async () => {
      try {
        const recentPosts = await recentBlogPosts();
        console.log("Fetched Recent Posts:", recentPosts);
        setBlogPosts(recentPosts);
      } catch (error) {
        console.error('Error loading recent blog posts:', error);
      }
    };

    const loadFeaturedBlogs = async () => {
      try {
        const featuredPosts = await featuredBlogPosts();
        console.log("Fetched Featured Posts:", featuredPosts);
        setFeaturedBlogs(featuredPosts);
      } catch (error) {
        console.error('Error loading featured blog posts:', error);
      }
    };

    loadRecentBlogs();
    loadFeaturedBlogs();
  }, []);

  const toggleShowAll = () => {
    setShowAllPosts(!showAllPosts);
  };

  return (
    <>
      <Navbar />
      <div className="Blog-main">
        <div className="blogs">

          <div className="blog-top">
            <div className="blog-left">
              <h5>Talspo Blog</h5>
              <h5>Section <i style={{color:"#ccc"}} className="ri-book-3-fill"></i></h5>
              <p>Get a coffee and start <br /> reading!</p>
            </div>
            <div className="blog-right">
              <img src={BlogImg} alt="Blog" />
            </div>
          </div>

          {/* ----------------- Recent Posts Section ----------------- */}
          <div className="blog2">
            <div className="b-one">
              <h5>Recent Posts</h5>
              <a href="#" onClick={toggleShowAll}>
                {showAllPosts ? 'Hide Posts' : 'View all Posts'}
              </a>
            </div>
            <div className="b-two">
              {Array.isArray(blogPosts) && blogPosts.length > 0 ? (
                blogPosts.slice(0, showAllPosts ? blogPosts.length : 2).map((post, index) => (
                  <div className="blog-box" key={index}>
                    <h6>{post.title}</h6>
                    <span>{post.subtitle}</span>
                    <p>{post.description}</p>
                  </div>
                ))
              ) : (
                <p>No blog posts available</p>
              )}
            </div>
          </div>

          {/* ----------------- Featured Posts Section ----------------- */}
          <div className="blog-container">
            <h6>Featured Blogs</h6>
            <div className="blog-content">
              <div className="blog_list">
                {Array.isArray(featuredBlogs) && featuredBlogs.length > 0 ? (
                  featuredBlogs.map((blog, index) => (
                    <div className="list-blg" key={index}>
                      <div className="bl-img">
                        <img src={blog.image} alt={blog.title} />
                      </div>
                      <div className="bl-text">
                        <h5>{blog.title}</h5>
                        <div className="num">
                          <span>{blog.year}</span>
                          <h1>{blog.subtitle}</h1>
                        </div>
                        <p>{blog.description}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No featured blog posts available</p>
                )}
              </div>
              <div className="Blogs_img">
                <img src={BlogMan} alt="BlogMan" />
              </div>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
