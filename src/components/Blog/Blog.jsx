import React from 'react';
import "./Blog.css";
import Navbar from "../../pages/Navbar/Navbar";
import BlogImg from "../../assets/images/blogimg.png";
import BlogMan from "../../assets/images/BlogMan.png";
import Footer from '../../pages/Footer/Footer';

const blogPosts = [
  {
    title: "How does the design of the website influence the user?",
    date: "07 May 2021",
    category: "Design Pattern",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos aut impedit, esse itaque illum dolorem officia deserunt mollitia? Rerum, dicta."
  },
  {
    title: "How does the design of the website influence the user?",
    date: "07 May 2021",
    category: "Design Pattern",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos aut impedit, esse itaque illum dolorem officia deserunt mollitia? Rerum, dicta."
  }
];

const featuredBlogs = [
  {
    imgSrc: "", // Add image source here
    title: "Some Random Topic",
    year: "2021",
    type: "Type Of Topic",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi perferendis perspiciatis autem quas, nam facilis corrupti aspernatur neque! Nemo, sapiente?"
  },
  {
    imgSrc: "", // Add image source here
    title: "How to learn best skills online",
    year: "2020",
    type: "Learning",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi perferendis perspiciatis autem quas, nam facilis corrupti aspernatur neque! Nemo, sapiente?"
  },
  {
    imgSrc: "", // Add image source here
    title: "Top designs of 2021",
    year: "2021",
    type: "Designing",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi perferendis perspiciatis autem quas, nam facilis corrupti aspernatur neque! Nemo, sapiente?"
  }
];

const Blog = () => {
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

          <div className="blog2">
            <div className="b-one">
              <h5>Recent Posts</h5>
              <a href="#">View all</a>
            </div>
            <div className="b-two">
              {blogPosts.map((post, index) => (
                <div className="blog-box" key={index}>
                  <h6>{post.title}</h6>
                  <span>{post.date} | {post.category}</span>
                  <p>{post.content}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="Blog-search">
            <div className="ipt-blg">
              <input type="text" placeholder='Search for blogs...' />
            </div>
          </div>
             
          <div className="blog-container">
            <h6>Featured Blogs</h6>
            <div className="blog-content">
              <div className="blog_list">
                {featuredBlogs.map((blog, index) => (
                  <div className="list-blg" key={index}>
                    <div className="bl-img">
                      <img src={blog.imgSrc} alt="" />
                    </div>
                    <div className="bl-text">
                      <h5>{blog.title}</h5>
                      <div className="num">
                        <span>{blog.year}</span>
                        <h1>{blog.type}</h1>
                      </div>
                      <p>{blog.content}</p>
                    </div>
                  </div>
                ))}
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
