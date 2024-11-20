import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from "../../pages/Navbar/Navbar";
import { fetchBlogDetail } from '../../apiService';
import Loading from '../../pages/loading/Loading'; 
import "./BlogDetail.css";
import Footer from "../../pages/Footer/Footer"

const BlogDetail = () => {
  const { id } = useParams();
  const [blogDetail, setBlogDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getBlogDetail = async () => {
      try {
        const data = await fetchBlogDetail(id);
        console.log("Fetched Blog Detail Data component:", data);

        if (!data) {
          console.error("No blog details found for the given ID");
          setError(true);
        } else {
          setBlogDetail(data);
          console.log("Blog details state updated:", data);
        }
      } catch (error) {
        console.error("Error fetching blog detail:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getBlogDetail();
  }, [id]);

  if (loading) return <Loading />;  
  if (error) return <p>There was an error loading the blog details. Please try again later.</p>;

  return (
    <>
      <Navbar />
      <div className="BlogDetail-main">
        <div className="blog-detail">
          <div className="details">
            <h5>{blogDetail?.title}</h5>
            <img className="img-d" src={blogDetail?.image} alt={blogDetail?.title} />
            <div className="year-d">
              <small>{blogDetail?.year}</small> <span>Designing, Coding, Learning</span>
            </div>
            <p>{blogDetail?.description}</p>
            <p>{blogDetail?.contant}</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogDetail;
