import { useEffect, useState } from 'react';
import "./Blog.css";
import NavbarContainer from '../../pages/NavbarCom/NavBarContainer';
import BlogImg from "/assets/images/blogimg.png";
import BlogMan from "/assets/images/BlogMan.png";
import Footer from '../../pages/Footer/Footer';
import { featuredBlogPosts, searchBlog } from '../../apiService'; // Remove recentBlogPosts import
import Loading from '../../pages/loading/Loading';
import { Link } from 'react-router-dom';
import IconBlog from "/assets/images/logo-icon.png";
import ReactPaginate from "react-paginate";
import BlogText from "../../components/Blog/BlogText";
import FooterTop from '../../pages/Footer/FooterTop';
import { useNavigate } from 'react-router-dom';

const Blog = () => {
  const blogsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [featuredBlogs, setFeaturedBlogs] = useState([]);
  const [currentBlogs, setCurrentBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAllPosts, setShowAllPosts] = useState(false);

  const [expandedBlogId, setExpandedBlogId] = useState(null);

  const navigate = useNavigate();
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  useEffect(() => {
    const loadFeaturedBlogs = async () => {
      try {
        const featuredPosts = await featuredBlogPosts();
        console.log("fghj", featuredBlogs)
        setFeaturedBlogs(featuredPosts);
        setCurrentBlogs(featuredPosts);
      } catch (error) {
        console.error('Error loading featured blog posts:', error);
      }
    };

    const fetchData = async () => {
      await loadFeaturedBlogs();
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
              <small>Explore Artificial Intelligence (AI) Insights in HR & Talent Acquisition, Stay ahead of the curve with our blog and resources that cover everything from the latest technologies, such as Blockchain Recruitment Solutions, to the impact of AI on recruitment. </small>
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
    {Array.isArray(featuredBlogs) && featuredBlogs.length > 0 ? (
      featuredBlogs
        .slice(0, showAllPosts ? 6 : 2)  // ✅ Show 2 by default, 6 when 'View All' is clicked
        .map((post, index) => (
          <Link style={{ textDecoration: "none", color: "#000" }} to={`/blog-detail/${post.id}`} key={index} className="blog-box">
            <h6>{post.title}</h6>
            <span>
              {new Date(post.updated_at).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}{" "}
              | {post.subtitle}
            </span>
            <div className="tpp" style={{
              display: "-webkit-box",
              WebkitLineClamp: expandedBlogId === post.id ? "unset" : 6, 
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
              marginBottom: "1vmax",
              paddingBottom: "1vmax",
            }}>
              <div>
                {expandedBlogId === post.id
                  ? post.description.replace(/(<([^>]+)>)/gi, "")
                  : post.description &&
                  post.description
                    .replace(/(<([^>]+)>)/gi, "")
                    .split(" ")
                    .slice(0, 30)
                    .join(" ")}

                {post.description && post.description.split(" ").length > 30 && (
                  <a
                    style={{ color: "green", marginLeft: "0.2vmax", textDecoration: "none", fontSize: "1vmax" }}
                    href="#"
                    className="read-more-link"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(`/blog-detail/${post.id}`);
                    }}
                  >
                    Read More..
                  </a>
                )}
              </div>
            </div>
          </Link>
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
                          <h1>{blog.subtitle} |  {new Date(blog.updated_at).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}{" "}</h1>

                          <span> <small>{blog.category}</small></span>

                        </div>
                        <div className="tttt">
                          <div>
                            {expandedBlogId === blog.id
                              ? blog.description.replace(/(<([^>]+)>)/gi, "")
                              : blog.description &&
                              blog.description
                                .replace(/(<([^>]+)>)/gi, "")
                                .split(" ")
                                .slice(0, 35)
                                .join(" ")}

                            {blog.description && blog.description.split(" ").length > 35 && (
                              <a
                                style={{ color: "green", marginLeft: "0.2vmax", fontSize: "1vmax", textDecoration: "none" }}
                                href="#"
                                className="read-more-link"
                                onClick={(e) => {
                                  e.preventDefault();
                                  navigate(`/blog-detail/${blog.id}`);
                                }}
                              >
                                Read More..
                              </a>

                            )}
                          </div>
                        </div>


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
