import { useEffect, useState } from 'react';
import "./Blog.css";
import NavbarContainer from '../../pages/NavbarCom/NavBarContainer'
import BlogImg from "/assets/images/blogimg.png";
import BlogMan from "/assets/images/BlogMan.png";
import Footer from '../../pages/Footer/Footer';
import { recentBlogPosts, featuredBlogPosts, searchBlog } from '../../apiService'; // Add searchBlog API here
import Loading from '../../pages/loading/Loading'; // Import the Loading component
import { Link } from 'react-router-dom';
import IconBlog from "/assets/images/logo-icon.png";
import ReactPaginate from "react-paginate";
import BlogText from "../../components/Blog/BlogText"

import FooterTop from '../../pages/Footer/FooterTop';

const Blog = () => {
  const blogsPerPage = 4; // Number of blogs per page
  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [blogPosts, setBlogPosts] = useState([]);
  const [featuredBlogs, setFeaturedBlogs] = useState([]);
  const [currentBlogs, setCurrentBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAllPosts, setShowAllPosts] = useState(false);


  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  useEffect(() => {
    const loadRecentBlogs = async () => {
      try {
        const recentPosts = await recentBlogPosts();
        console.log("recentBlogPosts",recentPosts)
        setBlogPosts(recentPosts);
      } catch (error) {
        console.error('Error loading recent blog posts:', error);
      }
    };

    const loadFeaturedBlogs = async () => {
      try {
        const featuredPosts = await featuredBlogPosts();
        setFeaturedBlogs(featuredPosts);
        setCurrentBlogs(featuredPosts);
      } catch (error) {
        console.error('Error loading featured blog posts:', error);
      }
    };

    const fetchData = async () => {
      await Promise.all([loadRecentBlogs(), loadFeaturedBlogs()]);
      setLoading(false);
    };

    fetchData();
  }, []);


  const handleSearch = async (event) => {
    const searchQuery = event.target.value;
    setSearchTerm(searchQuery);

    const [titleQuery, categoryQuery] = searchQuery.split(" ").filter(Boolean);

    setCategory(categoryQuery || "");

    if (searchQuery.trim() === "") {
      setCurrentBlogs(featuredBlogs);
    } else {
      try {
        const response = await searchBlog(titleQuery, categoryQuery);

        if (response && response.length > 0) {
          setCurrentBlogs(response);
        } else {
          setCurrentBlogs(featuredBlogs);
        }
      } catch (error) {
        console.error("Error searching blogs:", error);
        setCurrentBlogs(featuredBlogs);
      }
    }
  };
  const toggleShowAll = () => {
    setShowAllPosts(!showAllPosts);
  };

  if (loading) {
    return <Loading />;
  }

  const offset = currentPage * blogsPerPage;
  const pageCount = Math.ceil(currentBlogs.length / blogsPerPage);
  const displayedBlogs = currentBlogs.slice(offset, offset + blogsPerPage);

  return (
    <>
      <NavbarContainer />
      <div className="Blog-main">
        <div className="blogs">

          <div className="blog-top">
            <div className="blog-left">
              <h5>Talspo Blog</h5>
              <small>Explore Artificial Intelligence (AI) Insights in HR & Talent Acquisition, Stay ahead of the curve with our blog and resources that cover everything from the latest technologies, such as Blockchain Recruitment Solutions, to the impact of AI on recruitment.               </small>
              <small className='mt-3'>Discover the future of employee coaching and the latest trends in skill and talent development events. Gain AI-driven insights that will empower you to make smarter, faster decisions, whether you are recruiting, seeking a desired job, or planning to attend related events. Explore AI Insights in HR & Talent Acquisition today!</small>
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

          <div className="Blog-searchs">
            <div className="ipt-blgs">
              <input
                type="text"
                placeholder="Search Blogs by Title and Category"
                value={searchTerm}
                onChange={handleSearch}
              />
              <img src={IconBlog} alt="Search Icon" />
            </div>
          </div>

          {/* ----------------- Featured Posts Section ----------------- */}
          <div className="blog-container">
            <h6>Featured Blogs</h6>
            <div className="blog-content">
              <div className="blog_list">
                {Array.isArray(displayedBlogs) && displayedBlogs.length > 0 ? (
                  displayedBlogs.map((blog, index) => (
                    <Link to={`/blog-detail/${blog.id}`} key={index} className="list-blg">
                      <div className="bl-img">
                        <img src={blog.image} alt={blog.title} />
                      </div>
                      <div className="bl-text">
                        <h5>{blog.title}</h5>
                        <div className="num">
                          <span> <small>{blog.category}</small></span>
                          <h1>{blog.subtitle}</h1>
                        </div>
                        <div
                         className='tttt'
                          style={{
                            display: "-webkit-box",
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            marginBottom:"1vmax",
                            paddingBottom:"0.5vmax"
                          }}
                          dangerouslySetInnerHTML={{ __html: blog.description }}
                        ></div>
                      </div>
                    </Link>
                  ))
                ) : (
                  <p>No featured blog posts available</p>
                )}
              </div>
              <div className="Blogs_img">
                <img src={BlogMan} alt="BlogMan" />
              </div>
            </div>

            <ReactPaginate
              previousLabel={"<"}
              nextLabel={">"}
              breakLabel={"..."}
              pageCount={pageCount}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              activeClassName={"active"}
              pageClassName={"page-item"}
              pageLinkClassName={"page-link"}
              previousClassName={"previous-item"}
              previousLinkClassName={"previous-link"}
              nextClassName={"next-item"}
              nextLinkClassName={"next-link"}
              disabledClassName={"disabled"}
            />
          </div>
          {/* --------------------------------------------------------------- */}
          <BlogText />

        </div>
      </div>
      <FooterTop />
      <Footer />
    </>
  );
};

export default Blog;
